// Functions

/** 
 * @function modio_ratings
 * @description > **mod.io Endpoint:** [Add Mod Rating](https://docs.mod.io/#add-mod-rating)
 * 
 * <br />
 * 
 * This function submits a positive or negative rating for a mod. Each user can supply only one rating for a mod, subsequent ratings will override the old value. A successful request will return a ${struct.Message} struct.
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
 * @returns {struct.Message}
 * 
 * @function_end
*/
function modio_ratings() {}

// Structs

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