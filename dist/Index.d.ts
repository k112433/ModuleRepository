/**
 * @Method: Returns the plural form of any noun.
 * @Param {string}cls
 * @Return {string}
 */
export default class LoggerHelper {
    private _appConstants;
    static listName: string;
    constructor();
    Log(item: ILogger): void;
    Initalize(listName: any): void;
}
export interface ILogger {
    PageURL?: string;
    FileName?: string;
    Method?: string;
    UserId?: any;
    ExType?: any;
    ErrorMessage?: string;
    ErrorDetails?: string;
    JSON?: string;
    ProgrammeID?: number;
    StatusCode?: number;
}
