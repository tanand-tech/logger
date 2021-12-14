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

export function updateSettings(settings: ISettingsParam) {
    configs = { ...configs, ...settings };
}

export default function logger(name: string, ...args: string[]): Logger {
    const logLevel = process.env.LOGGER_MIN_LEVEL?.toLowerCase() as TLogLevelName | undefined;
    const minLevel: TLogLevelName = logLevel && logLevels.includes(logLevel) ? logLevel : 'info';

    return new Logger({
        name: `\x1b[0m\x1b[1m${name}\x1b[0m${args.reduce((n, s) => n + ' ' + s, '')}\x1b[90m`,
        displayFilePath:
            process.env.LOGGER_DISPLAY_FILE_PATH?.toLowerCase() === 'true' ? 'hideNodeModulesOnly' : 'hidden',
        minLevel,
        ...configs,
    });
}
