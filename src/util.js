const { formatWithOptions, types } = require('util');
const { normalize: fileNormalize } = require('path');
const getAllProperties = (object) => {
    const properties = new Set();

    do {
        for (const key of Reflect.ownKeys(object)) {
            properties.add([object, key]);
        }
    } while ((object = Reflect.getPrototypeOf(object)) && object !== Object.prototype);

    return properties;
};

exports.autoBind = function (self, { include, exclude } = {}) {
    const filter = (key) => {
        const match = (pattern) => (typeof pattern === 'string' ? key === pattern : pattern.test(key));

        if (include) {
            return include.some(match); // eslint-disable-line unicorn/no-array-callback-reference
        }

        if (exclude) {
            return !exclude.some(match); // eslint-disable-line unicorn/no-array-callback-reference
        }

        return true;
    };

    for (const [object, key] of getAllProperties(self.constructor.prototype)) {
        if (key === 'constructor' || !filter(key)) {
            continue;
        }

        const descriptor = Reflect.getOwnPropertyDescriptor(object, key);
        if (descriptor && typeof descriptor.value === 'function') {
            self[key] = self[key].bind(self);
        }
    }

    return self;
};

const prettyLogStyles = {
    // modifier
    reset: [0, 0],
    // 21 isn't widely supported and 22 does the same thing
    bold: [1, 22],
    dim: [2, 22],
    italic: [3, 23],
    underline: [4, 24],
    overline: [53, 55],
    inverse: [7, 27],
    hidden: [8, 28],
    strikethrough: [9, 29],

    // color
    black: [30, 39],
    red: [31, 39],
    green: [32, 39],
    yellow: [33, 39],
    blue: [34, 39],
    magenta: [35, 39],
    cyan: [36, 39],
    white: [37, 39],

    // Bright color
    blackBright: [90, 39],
    redBright: [91, 39],
    greenBright: [92, 39],
    yellowBright: [93, 39],
    blueBright: [94, 39],
    magentaBright: [95, 39],
    cyanBright: [96, 39],
    whiteBright: [97, 39],

    // background color
    bgBlack: [40, 49],
    bgRed: [41, 49],
    bgGreen: [42, 49],
    bgYellow: [43, 49],
    bgBlue: [44, 49],
    bgMagenta: [45, 49],
    bgCyan: [46, 49],
    bgWhite: [47, 49],

    // Bright background color
    bgBlackBright: [100, 49],
    bgRedBright: [101, 49],
    bgGreenBright: [102, 49],
    bgYellowBright: [103, 49],
    bgBlueBright: [104, 49],
    bgMagentaBright: [105, 49],
    bgCyanBright: [106, 49],
    bgWhiteBright: [107, 49],
};

function formatTemplate(settings, template, values, hideUnsetPlaceholder = false) {
    const templateString = String(template);
    const ansiColorWrap = (placeholderValue, code) => `\u001b[${code[0]}m${placeholderValue}\u001b[${code[1]}m`;

    const styleWrap = (value, style) => {
        if (style != null && typeof style === 'string') {
            return ansiColorWrap(value, prettyLogStyles[style]);
        } else if (style != null && Array.isArray(style)) {
            return style.reduce((prevValue, thisStyle) => styleWrap(prevValue, thisStyle), value);
        } else {
            if (style != null && style[value.trim()] != null) {
                return styleWrap(value, style[value.trim()]);
            } else if (style != null && style['*'] != null) {
                return styleWrap(value, style['*']);
            } else {
                return value;
            }
        }
    };

    return templateString.replace(/{{(.+?)}}/g, (_, placeholder) => {
        const value = values[placeholder] != null ? values[placeholder] : hideUnsetPlaceholder ? '' : _;
        return settings.stylePrettyLogs
            ? styleWrap(value, settings?.prettyLogStyles?.[placeholder]) + ansiColorWrap('', prettyLogStyles.reset)
            : value;
    });
}

exports.transportFormatted = function (logMetaMarkup, logArgs, logErrors, settings) {
    const logErrorsStr = (logErrors.length > 0 && logArgs.length > 0 ? '\n' : '') + logErrors.join('\n');
    settings.prettyInspectOptions.colors = settings.stylePrettyLogs;
    return logMetaMarkup + formatWithOptions(settings.prettyInspectOptions, ...logArgs) + logErrorsStr;
};

function getErrorTrace(error) {
    return error?.stack?.split('\n')?.reduce((result, line) => {
        if (line.includes('    at ')) {
            result.push(stackLineToStackFrame(line));
        }
        return result;
    }, []);
}

function stackLineToStackFrame(line) {
    const pathResult = {
        fullFilePath: undefined,
        fileName: undefined,
        fileNameWithLine: undefined,
        fileColumn: undefined,
        fileLine: undefined,
        filePath: undefined,
        filePathWithLine: undefined,
        method: undefined,
    };
    if (line != null && line.includes('    at ')) {
        line = line.replace(/^\s+at\s+/gm, '');
        const errorStackLine = line.split(' (');
        const fullFilePath = line?.slice(-1) === ')' ? line?.match(/\(([^)]+)\)/)?.[1] : line;
        const pathArray = fullFilePath?.includes(':')
            ? fullFilePath?.replace('file://', '')?.replace(process.cwd(), '')?.split(':')
            : undefined;
        // order plays a role, runs from the back: column, line, path
        const fileColumn = pathArray?.pop();
        const fileLine = pathArray?.pop();
        const filePath = pathArray?.pop();
        const filePathWithLine = fileNormalize(`${filePath}:${fileLine}`);
        const fileName = filePath?.split('/')?.pop();
        const fileNameWithLine = `${fileName}:${fileLine}`;

        if (filePath != null && filePath.length > 0) {
            pathResult.fullFilePath = fullFilePath;
            pathResult.fileName = fileName;
            pathResult.fileNameWithLine = fileNameWithLine;
            pathResult.fileColumn = fileColumn;
            pathResult.fileLine = fileLine;
            pathResult.filePath = filePath;
            pathResult.filePathWithLine = filePathWithLine;
            pathResult.method = errorStackLine?.[1] != null ? errorStackLine?.[0] : undefined;
        }
    }
    return pathResult;
}

function isError(e) {
    // An error could be an instance of Error while not being a native error
    // or could be from a different realm and not be instance of Error but still
    // be a native error.
    return types?.isNativeError != null ? types.isNativeError(e) : e instanceof Error;
}

function prettyFormatErrorObj(error, settings) {
    const errorStackStr = getErrorTrace(error).map((stackFrame) => {
        return formatTemplate(settings, settings.prettyErrorStackTemplate, { ...stackFrame }, true);
    });

    const placeholderValuesError = {
        errorName: ` ${error.name} `,
        errorMessage: error.message,
        errorStack: errorStackStr.join('\n'),
    };
    return formatTemplate(settings, settings.prettyErrorTemplate, placeholderValuesError);
}

exports.prettyFormatLogObj = function (maskedArgs, settings) {
    return maskedArgs.reduce(
        (result, arg) => {
            isError(arg) ? result.errors.push(prettyFormatErrorObj(arg, settings)) : result.args.push(arg);
            return result;
        },
        { args: [], errors: [] }
    );
};
