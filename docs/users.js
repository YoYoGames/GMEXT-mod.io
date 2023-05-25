@title Users

/** 
 * @function modio_user_mute
 * @description function
 * 
 * @param {real} user_id
 * 
 * @param {function|method} callback_success The function to trigger when the request is successful.
 * @param {function|method} callback_failed The function to trigger when the request failed.
 * 
 * @function_end
*/
function modio_user_mute() {}

/** 
 * @function modio_user_unmute
 * @description function
 * 
 * @param {real} user_id
 * 
 * @param {function|method} callback_success The function to trigger when the request is successful.
 * @param {function|method} callback_failed The function to trigger when the request failed.
 * 
 * @function_end
*/
function modio_user_unmute() {}

// Structs

/**
 * @struct User
 * @description > **mod.io Response Schema:** [User Object](https://docs.mod.io/#user-object)
 * 
 * <br />
 * 
 * @struct_end
*/

// Modules

/**
 * @module users
 * 
 * @section_func users
 * @desc Users
 * @ref modio_user_mute
 * @ref modio_user_unmute
 * @section_end
 * 
 * @section_struct users
 * @desc Users
 * @ref User
 * @section_end
 * 
 * @module_end
 */