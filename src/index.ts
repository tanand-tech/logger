// @ts-nocheck
import { Logger, TLogLevelColor, TLogLevelName, ISettingsParam } from 'tslog';

const logLevels: TLogLevelName[] = ['silly', 'trace', 'debug', 'info', 'warn', 'error', 'fatal'];

const logLevelsColors: TLogLevelColor = {
    0: 'cyan', // Silly
    1: 'white', // Trace
    2: 'green', // Debug
    3: 'blue', // Info
    4: 'yellow', // Warn
    5: 'red', // Error
    6: 'magenta', // Fatal
};

let configs: ISettingsParam = {
    displayFunctionName: false,
    exposeErrorCodeFrame: false,
    delimiter: '\t',
    dateTimeTimezone: 'Asia/Kuala_Lumpur',
    prettyInspectOptions: {
        colors: true,
        compact: false,
        depth: null,
    },
    jsonInspectOptions: {
        colors: true,
        compact: false,
        depth: null,
    },
    logLevelsColors,
};

const getAllProperties = (object) => {
    const properties = new Set();

    do {
        for (const key of Reflect.ownKeys(object)) {
            properties.add([object, key]);
        }
    } while ((object = Reflect.getPrototypeOf(object)) && object !== Object.prototype);

    return properties;
};

function autoBind(self, { include, exclude } = {}) {
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
}

export default function logger(name: string, ...args: string[]): Logger {
    const logLevel = process.env.LOGGER_MIN_LEVEL?.toLowerCase() as TLogLevelName | undefined;
    const minLevel: TLogLevelName = logLevel && logLevels.includes(logLevel) ? logLevel : 'info';

    return autoBind(
        new Logger({
            name: `\x1b[0m\x1b[1m${name}\x1b[0m${args.reduce((n, s) => n + ' ' + s, '')}\x1b[90m`,
            displayFilePath:
                process.env.LOGGER_DISPLAY_FILE_PATH?.toLowerCase() === 'true' ? 'hideNodeModulesOnly' : 'hidden',
            minLevel,
            ...configs,
        })
    );
}

export type { Logger, TLogLevelName as LogLevel };

module.exports = logger;
