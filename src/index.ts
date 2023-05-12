import autoBind from './autobind';
import { Logger as TSLog, ISettingsParam } from 'tslog';
import * as process from 'process';

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
    prettyLogTemplate: '{{dateIsoStr}}\t{{logLevelName}}\t[{{filePathWithLine}}\x1b[39m {{name}} ]\t',
};

enum LogLevel {
    silly,
    trace,
    debug,
    info,
    warn,
    error,
    fatal,
}

class Logger<T> extends TSLog<T> {
    constructor(settings?: ISettingsParam<T>) {
        super(settings);
    }

    setLogLevel(level: keyof typeof LogLevel | (typeof LogLevel)[keyof typeof LogLevel]) {
        this.settings.minLevel = +(LogLevel[level] ?? level);
        return this;
    }
}

export default function logger(name: string, ...args: string[]): Logger<undefined> {
    return autoBind(
        new Logger({
            name: `\x1b[0m\x1b[1m${name}\x1b[0m${[args].reduce((n, s) => n + ' ' + s, '')}\x1b[90m`,
            hideLogPositionForProduction: ['true', '1'].includes(
                <string>process.env.LOGGER_DISPLAY_FILE_PATH?.toLowerCase()
            ),
            ...configs,
        })
    ).setLogLevel(process.env.LOGGER_MIN_LEVEL?.toLowerCase() ?? 'info');
}

export type { Logger, LogLevel };
