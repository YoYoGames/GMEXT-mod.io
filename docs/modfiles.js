@title Modfiles

// Functions

/** 
 * @function modio_modfiles_get_list
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
function modio_modfiles_get_list() {}

/** 
 * @function modio_modfiles_get
 * @description function
 * 
 * 
 * @param {real} mod_id
 * @param {real} file_id
 * 
 * @param {function|method} callback_success The function to trigger when the request is successful.
 * @param {function|method} callback_failed The function to trigger when the request failed.
 * 
 * @function_end
*/
function modio_modfiles_get() {}

/** 
 * @function modio_modfiles_add
 * @description function
 * 
 * 
 * @param {real} mod_id
 * @param {real} filedata
 * 
 * @param {struct} optionals
 * @param {string} upload_id
 * @param {string} version
 * @param {string} changelog
 * @param {boolean} active
 * @param {string} filehash
 * @param {string} metadata_blob
 * @param {array<string>} platforms
 * 
 * @param {function|method} callback_success The function to trigger when the request is successful.
 * @param {function|method} callback_failed The function to trigger when the request failed.
 * 
 * @function_end
*/
function modio_modfiles_add() {}

/** 
 * @function modio_modfiles_edit
 * @description function
 * 
 * 
 * @param {real} mod_id
 * @param {real} mod_file
 * @param {struct} optionals
 * @param {string} version
 * @param {string} changelog
 * @param {boolean} active
 * @param {string} metadata_blob
 * 
 * @param {function|method} callback_success The function to trigger when the request is successful.
 * @param {function|method} callback_failed The function to trigger when the request failed.
 * 
 * @function_end
*/
function modio_modfiles_edit() {}

/** 
 * @function modio_modfiles_delete
 * @description function
 * 
 * 
 * @param {real} mod_id
 * @param {real} mod_file
 * 
 * @param {function|method} callback_success The function to trigger when the request is successful.
 * @param {function|method} callback_failed The function to trigger when the request failed.
 * 
 * @function_end
*/
function modio_modfiles_delete() {}

/** 
 * @function modio_modfiles_platforms
 * @description function
 * 
 * 
 * @param {real} mod_id
 * @param {real} mod_file
 * @param {struct} optionals
 * @param {array} approved
 * @param {array} denied
 * 
 * @param {function|method} callback_success The function to trigger when the request is successful.
 * @param {function|method} callback_failed The function to trigger when the request failed.
 * 
 * @function_end
*/
function modio_modfiles_platforms() {}

// Modules

/**
 * @module modfiles
 * 
 * @section_func modfiles
 * @desc Modfiles
 * @ref modio_modfiles_get_list
 * @ref modio_modfiles_get
 * @ref modio_modfiles_add
 * @ref modio_modfiles_edit
 * @ref modio_modfiles_delete
 * @ref modio_modfiles_platforms
 * @section_end
 * 
 * @module_end
 */