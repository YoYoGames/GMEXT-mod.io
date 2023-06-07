// Functions

/** 
 * @function modio_subscribe
 * @description > **mod.io Endpoint:** [Subscribe To Mod](https://docs.mod.io/#subscribe-to-mod)
 * 
 * This function subscribes the *authenticated user* to a corresponding mod. A successful request will return the ${struct.Mod} struct of the newly subscribed mod.
 * 
 * @param {real} mod_id Unique id of the mod.
 * 
 * @param {function|method} callback_success The function to trigger when the request is successful.
 * @param {function|method} callback_failed The function to trigger when the request failed.
 * 
 * @returns {struct.Mod}
 * 
 * @function_end
*/
function modio_subscribe() {}

/** 
 * @function modio_unsubscribe
 * @description > **mod.io Endpoint:** [Unsubscribe From Mod](https://docs.mod.io/#unsubscribe-from-mod)
 * 
 * This function unsubscribes the *authenticated user* from the corresponding mod.
 * 
 * [[NOTE: Users can unsubscribe from mods via mod.io, we recommend you poll ${function.modio_events_get} when needed, to keep a user's mods collection up to date.]]
 * 
 * @param {real} mod_id Unique id of the mod.
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