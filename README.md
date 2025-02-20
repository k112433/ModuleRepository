# spfx_logger

spfx_logger is a library which is used to log into your sharepoint through code. 

## Installation

Use npm to install this package

```bash
npm install spfx_logger
```

## Usage

```node
import LoggerHelper from 'spfx_logger';

let _logger = new LoggerHelper();

_logger.Initalize("custom_log_list");

/* Note: If list with said name doesn't exist Initilize() method will 
create a new list in SharePoint for Logs
*/




// After logger initialization you can Log anything in your sharepoint list
let obj:ILogger = {};
obj = {
ErrorMessage: "It is error message",
ErrorDetails: "These are error details",
Extype: "Error",
 PageURL: "https:\\contoso.sharepoint.com\test\Pages\Get.aspx",
  FileName: "ListService.ts",
  Method: "GetItems()",
  UserId: 1,
  JSON: '{"error":"it is exception","message":"it is error message"}',
  ProgrammeID: 1,
  StatusCode: 404
}

_logger.Log(obj);
// this method will log your error in the initialized List 
```

## Interface 
```node
/* The interface which is used to store the Log Object is ILogger
Note: All columns are optional 
 */
interface ILogger {
  PageURL?: string;
  FileName?: string;
  Method?: string;
  UserId?: any;
  Extype?: any;
  ErrorMessage?: string;
  ErrorDetails?: string;
  JSON?: string;
  ProgrammeID?: number;
  StatusCode?: number;
}
```
