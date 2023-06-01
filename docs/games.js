// Functions

/** 
 * @function modio_games_get_list
 * @description > **mod.io Endpoint:** [Get Games](https://docs.mod.io/#get-games) (`GET /games`)
 * 
 * Get all games. A successful request will return an array of ${struct.Game}. We recommend reading the [filtering documentation](https://docs.mod.io/#filtering) to return only the records you want.
 * 
 * @param {function|method} callback_success The function to trigger when the request is successful.
 * @param {function|method} callback_failed The function to trigger when the request failed.
 * 
 * @function_end
*/
function modio_games_get_list() {}

/** 
 * @function modio_games_get
 * @description > **mod.io Endpoint:** [Get Game](https://docs.mod.io/#get-games) (`GET /games/{game-id}`)
 * 
 * This function gets a game. Successful request will return a single ${struct.Game}. We recommended reading the filtering documentation to return only the records you want.
 * 
 * @param {function|method} callback_success The function to trigger when the request is successful.
 * @param {function|method} callback_failed The function to trigger when the request failed.
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
 * @desc The following functions are part of the Games module: 
 * 
 * @ref modio_games_get_list
 * @ref modio_games_get
 * 
 * @section_end
 * 
 * @module_end
 */