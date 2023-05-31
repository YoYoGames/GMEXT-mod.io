/** 
 * @function modio_agreements_get
 * @description > **mod.io Endpoint:** [Get Current Agreement](https://docs.mod.io/#get-current-agreement) (`GET /agreements/types/{agreement-type-id}/current`)
 * 
 * Get the current agreement (version) by type. A successful request will return a single {struct.AgreementVersion} struct.
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
 * @description > **mod.io Endpoint:** [Get Agreement Version](https://docs.mod.io/#get-agreement-version) (`GET /agreements/versions/{agreement-version-id}`)
 * 
 * Get the specified agreement version. A successful request will return an ${struct.AgreementVersion} struct.
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
 * @struct AgreementVersion
 * @desc > **mod.io Response Schema:** [Agreement Version Object](https://docs.mod.io/#agreement-version-object)
 * 
 * @member {real} id https://docs.mod.io/#agreement-version-object
 * @member {boolean} is_active Is the agreement currently active? (This can also be determined if date_live > 0).
 * @member {real} type The type of agreement. Can be one of the following:
 * 
 * 1 = Terms
 * 2 = Privacy
 * 3 = Developers
 * 4 = API
 * 5 = Payment
 * 6 = AUP
 * 
 * @member {struct.User} user No description
 * @member {int64} date_added Unix timestamp of the date the agreement was added.
 * @member {int64} date_updated Unix timestamp of the date the agreement was updated.
 * @member {int64} date_live Unix timestamp of the date the agreement was set live.
 * @member {string} name Name of the agreement.
 * @member {string} changelog Changelog for version of this agreement.
 * @member {string} description The contents of the agreement
 * 
 * @struct_end
 */

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
 * @section_struct agreements
 * @desc Agreements
 * @ref AgreementVersion
 * @section_end
 * 
 * @module_end
 */