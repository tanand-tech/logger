import { Logger, TLogLevelName, ISettingsParam } from 'tslog';
export type { Logger, TLogLevelName as LogLevel };
export declare function updateSettings(settings: ISettingsParam): void;
export default function logger(name: string, ...args: string[]): Logger;
//# sourceMappingURL=index.d.ts.map