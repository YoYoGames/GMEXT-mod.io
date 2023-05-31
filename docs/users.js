/** 
 * @function modio_user_mute
 * @description > **mod.io Endpoint:** [Mute a user](https://docs.mod.io/#mute-a-user) (`POST /users/{user-id}/mute`)
 * 
 * <br />
 * 
 * Mute a user. This will prevent mod.io from returning mods to you authored by the muted user. A successful request will return `204 No Content`.
 * 
 * @param {real} user_id user unique identifier
 * 
 * @param {function|method} callback_success The function to trigger when the request is successful.
 * @param {function|method} callback_failed The function to trigger when the request failed.
 * 
 * @function_end
*/
function modio_user_mute() {}

/** 
 * @function modio_user_unmute
 * @description > **mod.io Endpoint:** [Unmute a user](https://docs.mod.io/#unmute-a-user) (`DELETE /users/{user-id}/mute`)
 * 
 * <br />
 * 
 * Unmute a previously muted user. This will re-enable mod.io to returning mods to you authored by the muted user. Successful request will return `204 No Content`.
 * 
 * @param {real} user_id user unique identifier
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
 * @member {real} id Unique id of the user.
 * @member {string} name_id Path for the user on mod.io. For example: https://mod.io/u/**name-id-here **
 * @member {string} username Username of the user.
 * @member {string} display_name_portal The users' display name for the targeted portal. Value will be `null` if no valid `X-Modio-Portal` portal header value is provided. For more information see [Targeting a Portal](https://docs.mod.io/#targeting-a-portal).
 * @member {int64} date_online Unix timestamp of date the user was last online.
 * @member {int64} date_joined Unix timestamp of date the user joined.
 * @member {struct.Avatar} avatar Contains media URL's to the users avatar.
 * @member {string} timezone Deprecated: No longer used and will be removed in subsequent API version.
 * @member {string} language Deprecated: No longer used and will be removed in subsequent API version. To [localize the API response](https://docs.mod.io/#localization) we recommend you set the `Accept-Language` header.
 * @member {string} profile_url URL to the user's profile.
 * 
 * @struct_end
*/

// Modules

/**
 * @module users
 * @title Users
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