import { Logger as TSLog, ISettingsParam } from 'tslog';
import { autoBind, transportFormatted, prettyFormatLogObj } from './util';

const configs: ISettingsParam<undefined> = {
    type: 'pretty',
    prettyLogStyles: {
        dateIsoStr: ['blackBright'],
        filePathWithLine: ['blackBright', 'underline'],
        logLevelName: {
            '*': ['bold', 'black', 'bgWhiteBright', 'dim'],
            SILLY: ['bold', 'white'],
            TRACE: ['bold', 'whiteBright'],
            DEBUG: ['bold', 'green'],
            INFO: ['bold', 'blue'],
            WARN: ['bold', 'yellow'],
            ERROR: ['bold', 'red'],
            FATAL: ['bold', 'magentaBright'],
        },
        name: ['white', 'bold'],
        nameWithDelimiterPrefix: ['white', 'bold'],
        nameWithDelimiterSuffix: ['white', 'bold'],
        errorName: ['bold', 'bgRedBright', 'whiteBright'],
        fileName: ['yellow'],
    },
    prettyLogTimeZone: 'local',
    prettyLogTemplate: '{{dateIsoStr}}\t{{logLevelName}}\t{{name}} {{filePathWithLine}} ',
};

enum LogOption {
    silly,
    trace,
    debug,
    info,
    warn,
    error,
    fatal,
}

export type LogLevel = keyof typeof LogOption | (typeof LogOption)[keyof typeof LogOption];

export class Logger<T = undefined> extends TSLog<T> {
    constructor(settings?: ISettingsParam<T>) {
        super(settings);
    }

    setLogLevel(level: LogLevel) {
        this.settings.minLevel = +(LogOption[level] ?? level);
        return this;
    }

    // subLogger(name: string) {
    //     name = ' ' + name;
    //
    //     const log = super.getSubLogger({ ...this.settings, name });
    //     // @ts-ignore
    //     log.setLogLevel = function (level: keyof typeof LogLevel | (typeof LogLevel)[keyof typeof LogLevel]) {
    //         log.settings.minLevel = +(LogLevel[level] ?? level);
    //         return log;
    //     };
    //
    //     return log as Logger<T>;
    // }

    attachPrettyTransport(transport: (line: string) => any) {
        this.attachTransport((logObject) => {
            const { [this.settings.metaProperty]: _meta, ...args } = logObject;
            // @ts-ignore
            const logMetaMarkup = this._prettyFormatLogObjMeta(_meta);

            const logArgsAndErrorsMarkup = prettyFormatLogObj(
                [
                    ...this.settings.prefix,
                    ...Object.values(args),
                    // ...Object.entries(args)
                    //     .sort((a, b) => +a[0] - +b[0])
                    //     .map((v) => v[1]),
                ],
                this.settings
            );

            transport(
                transportFormatted(
                    logMetaMarkup,
                    logArgsAndErrorsMarkup.args,
                    logArgsAndErrorsMarkup.errors,
                    this.settings
                )
            );
        });
        return this;
    }
}

export default function logger<T = undefined>(name = 'LOGGER', ...args: string[]): Logger<T> {
    return autoBind(
        new Logger({
            name: (args.reduce((n, s) => n + ' ' + s, `\x1b[0m[\x1b[1m${name}\x1b[0m`) + ']').padEnd(
                +(process.env.LOGGER_MIN_PAD ?? 0) + 14,
                ' '
            ),
            hideLogPositionForProduction: !['true', '1'].includes(
                <string>process.env.LOGGER_DISPLAY_FILE_PATH?.toLowerCase()
            ),
            ...configs,
        })
    ).setLogLevel(process.env.LOGGER_MIN_LEVEL?.toLowerCase() ?? 'info');
}
