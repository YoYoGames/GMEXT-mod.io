// Functions

/** 
 * @function modio_ratings
 * @description > **mod.io Endpoint:** [Add Mod Rating](https://docs.mod.io/#add-mod-rating) (`POST /games/{game-id}/mods/{mod-id}/ratings`)
 * 
 * <br />
 * 
 * Submit a positive or negative rating for a mod. Each user can supply only one rating for a mod, subsequent ratings will override the old value. Successful request will return ${struct.Message}.
 * 
 * [[NOTE: You can order mods by their rating, and view their rating in the ${struct.Mod} struct.]]
 * 
 * @param {real} mod_id Unique id of the mod.
 * @param {real} rating The authenticated user's mod rating:
 * 
 * 1 = Positive rating (thumbs up)
 * -1 = Negative rating (thumbs down)
 * 0 = No rating (removes any previous submitted rating)
 * 
 * @param {function|method} callback_success The function to trigger when the request is successful.
 * @param {function|method} callback_failed The function to trigger when the request failed.
 * 
 * @function_end
*/
function modio_ratings() {}

// Structs

/**
 * @struct Rating
 * @description > **mod.io Response Schema:** [Rating Object](https://docs.mod.io/#rating-object)
 * @member {real} game_id Unique game id.
 * @member {real} mod_id Unique mod id.
 * @member {real} rating Mod rating value:
 * 
 * - 1 = Positive Rating
 * - -1 = Negative Rating
 * 
 * @member {real} date_added Unix timestamp of date rating was submitted.
 * 
 * @struct_end
 */

// Modules

/**
 * @module ratings
 * @title Ratings
 * 
 * @section_func
 * @desc Ratings
 * @ref modio_ratings
 * @section_end
 * 
 * @section_struct
 * @desc Structs
 * @ref Rating
 * @section_end
 * 
 * @module_end
 */