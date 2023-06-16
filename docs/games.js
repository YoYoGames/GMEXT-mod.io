// Functions

/** 
 * @function modio_games_get_list
 * @description > **mod.io Endpoint:** [Get Games](https://docs.mod.io/#get-games)
 * 
 * This function gets all games. A successful request will return an array of ${struct.Game} structs. We recommend reading the [filtering documentation](https://docs.mod.io/#filtering) to return only the records you want.
 * 
 * @param {function|method} _callback_success The function to trigger when the request is successful.
 * @param {function|method} _callback_failed The function to trigger when the request failed.
 * 
 * @returns {struct.GetGames}
 * 
 * @function_end
*/
function modio_games_get_list() {}

/** 
 * @function modio_games_get
 * @description > **mod.io Endpoint:** [Get Game](https://docs.mod.io/#get-games)
 * 
 * This function gets a game. Successful request will return a single ${struct.Game} struct. We recommended reading the filtering documentation to return only the records you want.
 * 
 * @param {function|method} _callback_success The function to trigger when the request is successful.
 * @param {function|method} _callback_failed The function to trigger when the request failed.
 * 
 * @param {real} _game_id OPTIONAL The ID of the game, defaults to the value set in the **Game ID** extension option if not provided
 * 
 * @returns {struct.GetGames}
 * 
 * @function_end
*/
function modio_games_get() {}

// Structs

// Modules

/**
 * @module games
 * @title Games
 * 
 * @section_func
 * 
 * @ref modio_games_get_list
 * @ref modio_games_get
 * 
 * @section_end
 * 
 * @module_end
 */