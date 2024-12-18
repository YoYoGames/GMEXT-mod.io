/** 
 * @function modio_user_mute
 * @description > **mod.io Endpoint:** [Mute a user](https://docs.mod.io/#mute-a-user)
 * 
 * <br />
 * 
 * This function mutes a user. This will prevent mod.io from returning mods to you authored by the muted user.
 * 
 * @param {real} user_id user unique identifier
 * 
 * @param {function|method} _callback_success The function to trigger when the request is successful.
 * @param {function|method} _callback_failed The function to trigger when the request failed.
 * 
 * @function_end
*/
function modio_user_mute() {}

/** 
 * @function modio_user_unmute
 * @description > **mod.io Endpoint:** [Unmute a user](https://docs.mod.io/#unmute-a-user)
 * 
 * <br />
 * 
 * This function unmutes a previously muted user. This will re-enable mod.io to returning mods to you authored by the muted user.
 * 
 * @param {real} _user_id user unique identifier
 * 
 * @param {function|method} _callback_success The function to trigger when the request is successful.
 * @param {function|method} _callback_failed The function to trigger when the request failed.
 * 
 * @function_end
*/
function modio_user_unmute() {}

// Structs

// Modules

/**
 * @module users
 * @title Users
 * 
 * @section_func
 * @ref modio_user_mute
 * @ref modio_user_unmute
 * @section_end
 * 
 * @module_end
 */