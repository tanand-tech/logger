import autoBind from './autobind';
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

export type { Logger, TLogLevelName as LogLevel };

export default function logger(name: string, ...args: string[]): Logger {
    const colorizePrettyLogs = process.env.LOGGER_COLOR?.toLowerCase() !== 'false'
    const logLevel = process.env.LOGGER_MIN_LEVEL?.toLowerCase() as TLogLevelName | undefined;
    const minLevel: TLogLevelName = logLevel && logLevels.includes(logLevel) ? logLevel : 'info';

    return autoBind(
        new Logger({
            name: colorizePrettyLogs ? `\x1b[0m\x1b[1m${name}\x1b[0m${args.reduce((n, s) => n + ' ' + s, '')}\x1b[90m` : `${name}${args.reduce((n, s) => n + ' ' + s, '')}`,
            displayFilePath: process.env.LOGGER_DISPLAY_FILE_PATH?.toLowerCase() === 'true' ? 'displayAll' : 'hidden',
            colorizePrettyLogs,
            minLevel,
            ...configs,
        })
    );
}

module.exports = logger;
