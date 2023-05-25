@title Ratings

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

// Modules

/**
 * @module ratings
 * 
 * @section_func
 * @desc Ratings
 * @ref modio_ratings
 * @section_end
 * 
 * @module_end
 */