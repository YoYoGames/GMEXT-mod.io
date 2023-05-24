/** 
 * @function modio_agreements_get
 * @description > **mod.io Endpoint:** [Get Current Agreement](https://docs.mod.io/#get-current-agreement) (`GET /agreements/types/{agreement-type-id}/current`)
 * 
 * @param {real} agreement_type_id
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
 * @param {real} version
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
 * @desc https://docs.mod.io/#agreement-version-object
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