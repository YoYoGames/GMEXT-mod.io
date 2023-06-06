// Functions

/** 
 * @function modio_report
 * @description > **mod.io Endpoint:** [Submit Report](https://docs.mod.io/#submit-report)
 * 
 * <br />
 * 
 * This function reports a resource on mod.io. You are responsible for content your users submit, so properly supporting the report endpoint or linking to the report page https://mod.io/report/widget is important. A successful request will return a ${struct.Message} struct.
 * 
 * [[NOTE: If you want to link to the mod.io report page and you know the resource you want to report, the best URL to use is https://mod.io/report/resource/id/widget. For example to report a mod with an ID of 1 the URL would be: https://mod.io/report/mods/1/widget.]]
 * [[NOTE: If you are a game owner or manager, you can view all reports submitted for your game. You can also configure in your games control panel the number of reports required before content is automatically taken down for review.]]
 * [[NOTE: Read the mod.io [Terms of Use](https://mod.io/terms/widget) for information about what is/isn't acceptable.]]
 * 
 * @param {string} resource The type of resource you are reporting. Must be one of the following values: "games", "mods" and "users"
 * @param {real} id Unique id of the resource you are reporting.
 * @param {real} type Type of report you are submitting. Must be one of the following values:
 * 
 * 0 = Generic
 * 1 = DMCA
 * 2 = Not Working
 * 3 = Rude Content
 * 4 = Illegal Content
 * 5 = Stolen Content
 * 6 = False Information
 * 7 = Other
 * 
 * @param {string} summary Detailed description of your report. Make sure you include all relevant information and links to help moderators investigate and respond appropriately.
 * @param {struct} optionals 
 * 
 * - name (${type.string}) name of the user submitting the report. Recommended for DMCA reports.
 * - contact (${type.string}) Contact details of the user submitting the report. Recommended for DMCA reports.
 * 
 * @param {function|method} callback_success The function to trigger when the request is successful.
 * @param {function|method} callback_failed The function to trigger when the request failed.
 * 
 * @returns {struct.Message}
 * 
 * @function_end
*/
function modio_report() {}

// Modules

/**
 * @module reports
 * @title Reports
 * 
 * @section_func
 * @ref modio_report
 * @section_end
 * 
 * @module_end
 */