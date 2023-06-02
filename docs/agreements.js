/** 
 * @function modio_agreements_get
 * @description > **mod.io Endpoint:** [Get Current Agreement](https://docs.mod.io/#get-current-agreement)
 * 
 * This function gets the current agreement version by type. A successful request will return a single {struct.AgreementVersion} struct.
 * 
 * @param {real} agreement_type_id Valid agreement types are:
 *
 * 1 = Terms of Use - https://mod.io/terms
 * 2 = Privacy Policy - https://mod.io/privacy
 * 3 = Game Terms - https://mod.io/gameterms
 * 4 = API Access Terms - https://mod.io/apiterms
 * 5 = Monetisation Terms - https://mod.io/monetisationterms
 * 6 = Acceptable Use Policy - https://mod.io/aup
 * 
 * @param {function|method} callback_success The function to trigger when the request is successful.
 * @param {function|method} callback_failed The function to trigger when the request failed.
 * 
 * @returns {struct.AgreementVersion}
 * 
 * @function_end
*/
function modio_agreements_get() {}

/** 
 * @function modio_agreements_version
 * @description > **mod.io Endpoint:** [Get Agreement Version](https://docs.mod.io/#get-agreement-version)
 * 
 * This function gets the specified agreement version. A successful request will return an ${struct.AgreementVersion} struct.
 * 
 * @param {real} version The version to get
 * 
 * @param {function|method} callback_success The function to trigger when the request is successful.
 * @param {function|method} callback_failed The function to trigger when the request failed.
 * 
 * @returns {struct.AgreementVersion}
 * 
 * @function_end
*/
function modio_agreements_version() {}

/**
 * @module agreements
 * @title Agreements
 * 
 * @section_func agreements
 * @desc Agreements
 * @ref modio_agreements_get
 * @ref modio_agreements_version
 * @section_end
 * 
 * @module_end
 */