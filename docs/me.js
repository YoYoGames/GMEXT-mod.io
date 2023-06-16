/** 
 * @function modio_me
 * @description > **mod.io Endpoint:** [Get Authenticated User](https://docs.mod.io/#get-authenticated-user)
 * 
 * <br />
 * 
 * This function gets the *authenticated user* details. A successful request will return a single ${struct.User} struct.
 * 
 * @param {function|method} _callback_success The function to trigger when the request is successful.
 * @param {function|method} _callback_failed The function to trigger when the request failed.
 * 
 * @returns {struct.User}
 * 
 * @function_end
*/
function modio_me() {}

/** 
 * @function modio_me_events
 * @description > **mod.io Endpoint:** [Get User Events](https://docs.mod.io/#get-user-events)
 * 
 * <br />
 * 
 * This function gets events that have been fired specific to the user. A successful request will return an array of ${struct.ModEvent}. We recommended reading the [filtering documentation](https://docs.mod.io/#filtering) to return only the records you want.
 * 
 * @param {function|method} _callback_success The function to trigger when the request is successful.
 * @param {function|method} _callback_failed The function to trigger when the request failed.
 * 
 * @returns {struct.GetUserEvents}
 * 
 * @function_end
*/
function modio_me_events() {}

/** 
 * @function modio_me_files
 * @description > **mod.io Endpoint:** [Get User Modfiles](https://docs.mod.io/#get-user-modfiles)
 * 
 * <br />
 * 
 * This function gets all modfiles the *authenticated user* uploaded. A successful request will return an array of ${struct.Modfile} structs. We recommended reading the [filtering documentation](https://docs.mod.io/#filtering) to return only the records you want.
 * 
 * [[NOTE: If the [game](https://docs.mod.io/#edit-game) requires mod downloads to be initiated via the API, the `binary_url` returned will contain a verification hash. This hash must be supplied to get the modfile, and will expire after a certain period of time. Saving and reusing the `binary_url` won't work in this situation given its dynamic nature.]]
 * 
 * @param {function|method} _callback_success The function to trigger when the request is successful.
 * @param {function|method} _callback_failed The function to trigger when the request failed.
 * 
 * @returns {struct.GetModfiles}
 * 
 * @function_end
*/
function modio_me_files() {}

/** 
 * @function modio_me_games
 * @description > **mod.io Endpoint:** [Get User Games](https://docs.mod.io/#get-user-games)
 * 
 * <br />
 * 
 * This function gets all games the *authenticated user* added or is a team member of. A successful request will return an array of ${struct.Game} structs. We recommend reading the [filtering documentation](https://docs.mod.io/#filtering) to return only the records you want.
 * 
 * @param {function|method} _callback_success The function to trigger when the request is successful.
 * @param {function|method} _callback_failed The function to trigger when the request failed.
 * 
 * @returns {struct.GetGames}
 * 
 * @function_end
*/
function modio_me_games() {}

/** 
 * @function modio_me_subscriptions
 * @description > **mod.io Endpoint:** [Get User Subscriptions](https://docs.mod.io/#get-user-subscriptions)
 * 
 * <br />
 * 
 * This function gets all mods the *authenticated user* is subscribed to. A successful request will return an array of ${struct.Mod} structs. We recommend reading the [filtering documentation](https://docs.mod.io/#filtering) to return only the records you want.
 * 
 * @param {function|method} _callback_success The function to trigger when the request is successful.
 * @param {function|method} _callback_failed The function to trigger when the request failed.
 * 
 * @returns {struct.GetMods}
 * 
 * @function_end
*/
function modio_me_subscriptions() {}

/** 
 * @function modio_me_mods
 * @description > **mod.io Endpoint:** [Get User Mods](https://docs.mod.io/#get-user-mods)
 * 
 * <br />
 * 
 * This function gets all mods the *authenticated user* added or is a team member of. A successful request will return an array of ${struct.Mod} structs. We recommend reading the [filtering documentation](https://docs.mod.io/#filtering) to return only the records you want.
 * 
 * @param {function|method} _callback_success The function to trigger when the request is successful.
 * @param {function|method} _callback_failed The function to trigger when the request failed.
 * 
 * @returns {struct.GetMods}
 * 
 * @function_end
*/
function modio_me_mods() {}

/** 
 * @function modio_me_user_muted
 * @description > **mod.io Endpoint:** [Get Users Muted](https://docs.mod.io/#get-users-muted)
 * 
 * <br />
 * 
 * This function gets all users muted by the *authenticated user*. A successful request will return an array of ${struct.User} structs.
 * 
 * @param {function|method} _callback_success The function to trigger when the request is successful.
 * @param {function|method} _callback_failed The function to trigger when the request failed.
 * 
 * @returns {struct.GetMutedUsers}
 * 
 * @function_end
*/
function modio_me_user_muted() {}

/** 
 * @function modio_me_ratings
 * @description > **mod.io Endpoint:** [Get User Ratings](https://docs.mod.io/#get-user-ratings)
 * 
 * <br />
 * 
 * This function gets all mod ratings submitted by the *authenticated user*. A successful request will return an array of ${struct.Rating} structs.
 * 
 * @param {function|method} _callback_success The function to trigger when the request is successful.
 * @param {function|method} _callback_failed The function to trigger when the request failed.
 * 
 * @returns {struct.GetUserRatings}
 * 
 * @function_end
*/
function modio_me_ratings() {}


/**
 * @module me
 * @title Me
 * 
 * @section_func
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