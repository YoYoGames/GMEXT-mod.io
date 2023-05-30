/** 
 * @function modio_me
 * @description > **mod.io Endpoint:** [Get Authenticated User](https://docs.mod.io/#get-authenticated-user) (`GET /me`)
 * 
 * <br />
 * 
 * Get the *authenticated user* details. A successful request will return a single ${struct.User}.
 * 
 * @param {real} user_id
 * 
 * @param {function|method} callback_success The function to trigger when the request is successful.
 * @param {function|method} callback_failed The function to trigger when the request failed.
 * 
 * @function_end
*/
function modio_me() {}

/** 
 * @function modio_me_events
 * @description > **mod.io Endpoint:** [Get User Events](https://docs.mod.io/#get-user-events) (`GET /me/events`)
 * 
 * <br />
 * 
 * Get events that have been fired specific to the user. A successful request will return an array of ${struct.Event}. We recommended reading the [filtering documentation](https://docs.mod.io/#filtering) to return only the records you want.
 * 
 * @param {function|method} callback_success The function to trigger when the request is successful.
 * @param {function|method} callback_failed The function to trigger when the request failed.
 * 
 * @function_end
*/
function modio_me_events() {}

/** 
 * @function modio_me_files
 * @description > **mod.io Endpoint:** [Get User Modfiles](https://docs.mod.io/#get-user-modfiles) (`GET /me/files`)
 * 
 * <br />
 * 
 * Get all modfiles the *authenticated user* uploaded. A successful request will return an array of ${struct.Modfile} structsd. We recommended reading the filtering documentation to return only the records you want.
 * 
 * [[NOTE: If the [game](https://docs.mod.io/#edit-game) requires mod downloads to be initiated via the API, the `binary_url` returned will contain a verification hash. This hash must be supplied to get the modfile, and will expire after a certain period of time. Saving and reusing the `binary_url` won't work in this situation given its dynamic nature.]]
 * 
 * @param {function|method} callback_success The function to trigger when the request is successful.
 * @param {function|method} callback_failed The function to trigger when the request failed.
 * 
 * @function_end
*/
function modio_me_files() {}

/** 
 * @function modio_me_games
 * @description > **mod.io Endpoint:** [Get User Games](https://docs.mod.io/#get-user-games) (`GET /me/games`)
 * 
 * <br />
 * 
 * Get all games the *authenticated user* added or is a team member of. A successful request will return an array of ${struct.Game}. We recommended reading the [filtering documentation](https://docs.mod.io/#filtering) to return only the records you want.
 * 
 * @param {function|method} callback_success The function to trigger when the request is successful.
 * @param {function|method} callback_failed The function to trigger when the request failed.
 * 
 * @function_end
*/
function modio_me_games() {}

/** 
 * @function modio_me_subscriptions
 * @description function
 * 
 * @param {function|method} callback_success The function to trigger when the request is successful.
 * @param {function|method} callback_failed The function to trigger when the request failed.
 * 
 * @function_end
*/
function modio_me_subscriptions() {}

/** 
 * @function modio_me_mods
 * @description function
 * 
 * @param {function|method} callback_success The function to trigger when the request is successful.
 * @param {function|method} callback_failed The function to trigger when the request failed.
 * 
 * @function_end
*/
function modio_me_mods() {}

/** 
 * @function modio_me_user_muted
 * @description function
 * 
 * @param {function|method} callback_success The function to trigger when the request is successful.
 * @param {function|method} callback_failed The function to trigger when the request failed.
 * 
 * @function_end
*/
function modio_me_user_muted() {}

/** 
 * @function modio_me_ratings
 * @description function
 * 
 * @param {function|method} callback_success The function to trigger when the request is successful.
 * @param {function|method} callback_failed The function to trigger when the request failed.
 * 
 * @function_end
*/
function modio_me_ratings() {}


/**
 * @module me
 * @title Me
 * 
 * @section_func me
 * 
 * @desc Me
 * 
 * @ref modio_me
 * @ref modio_me_events
 * @ref modio_me_files
 * @ref modio_me_games
 * @ref modio_me_subscriptions
 * @ref modio_me_mods
 * @ref modio_me_user_muted
 * @ref modio_me_ratings
 * @section_end
 * 
 * @module_end
 */