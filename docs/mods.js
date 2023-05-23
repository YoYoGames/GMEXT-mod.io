@title Mods

// Functions

/** 
 * @function modio_mods_get
 * @description function
 * 
 * @param {function|method} callback_success The function to trigger when the request is successful.
 * @param {function|method} callback_failed The function to trigger when the request failed.
 * 
 * @function_end
*/
function modio_mods_get() {}

/** 
 * @function modio_mods_add
 * @description function
 * 
 * @param {string} logo
 * @param {string} name
 * @param {struct} optionals
 * @param {string} name_id
 * @param {string} summary
 * @param {real} visible
 * @param {string} description
 * @param {string} homepage_url
 * @param {real} stock
 * @param {real} maturity_option
 * @param {real} community_options
 * @param {string} metadata_blob
 * @param {string} tags
 * 
 * @param {function|method} callback_success The function to trigger when the request is successful.
 * @param {function|method} callback_failed The function to trigger when the request failed.
 * 
 * @function_end
*/
function modio_mods_add() {}

/** 
 * @function modio_mods_edit
 * @description function
 * 
 * @param {real} mod_id 
 * @param {string} logo 
 * @param {struct} optionals
 * @param {real} status
 * @param {real} visible
 * @param {string} name
 * @param {string} name_id
 * @param {string} summary
 * @param {string} description
 * @param {string} homepage_url
 * @param {real} stock
 * @param {real} maturity_option
 * @param {real} community_options
 * @param {string} metadata_blob
 * 
 * @param {function|method} callback_success The function to trigger when the request is successful.
 * @param {function|method} callback_failed The function to trigger when the request failed.
 * 
 * @function_end
*/
function modio_mods_edit() {}

/** 
 * @function modio_mods_delete
 * @description function
 * 
 * 
 * @param {real} mod_id
 * 
 * @param {function|method} callback_success The function to trigger when the request is successful.
 * @param {function|method} callback_failed The function to trigger when the request failed.
 * 
 * @function_end
*/
function modio_mods_delete() {}

// Modules

/**
 * @module mods
 * 
 * @section_func
 * @desc Mods
 * @ref modio_mods_get
 * @ref modio_mods_add
 * @ref modio_mods_edit
 * @ref modio_mods_delete
 * @section_end
 * 
 * @module_end
 */