// Functions

/** 
 * @function modio_subscribe
 * @description > **mod.io Endpoint:** [Subscribe To Mod](https://docs.mod.io/#subscribe-to-mod) (`POST /games/{game-id}/mods/{mod-id}/subscribe`)
 * 
 * Subscribe the *authenticated user* to a corresponding mod. No body parameters are required for this action. A successful request will return the ${struct.Mod} struct of the newly subscribed mod.
 * 
 * @param {real} mod_id Unique id of the mod.
 * 
 * @param {function|method} callback_success The function to trigger when the request is successful.
 * @param {function|method} callback_failed The function to trigger when the request failed.
 * 
 * @function_end
*/
function modio_subscribe() {}

/** 
 * @function modio_unsubscribe
 * @description > **mod.io Endpoint:** [Unsubscribe From Mod](https://docs.mod.io/#unsubscribe-from-mod) (`DELETE /games/{game-id}/mods/{mod-id}/subscribe`)
 * 
 * Unsubscribe the *authenticated user* from the corresponding mod. No body parameters are required for this action. A successful request will return `204 No Content`.
 * 
 * [[NOTE: Users can unsubscribe from mods via mod.io, we recommend you poll or call the [Get Mod Events](https://docs.mod.io/#get-mod-events) endpoint when needed, to keep a user's mods collection up to date.]]
 * 
 * @param {real} mod_id
 * 
 * @param {function|method} callback_success The function to trigger when the request is successful.
 * @param {function|method} callback_failed The function to trigger when the request failed.
 * 
 * @function_end
*/
function modio_unsubscribe() {}

// Modules

/**
 * @module subscribe
 * @title Subscribe
 * 
 * @section_func
 * @desc Subscribe
 * @ref modio_subscribe
 * @ref modio_unsubscribe
 * @section_end
 * 
 * @module_end
 */