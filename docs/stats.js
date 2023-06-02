// Functions

/** 
 * @function modio_stats_game
 * @description > **mod.io Endpoint:** [Get Game Stats](https://docs.mod.io/#get-game-stats)
 * 
 * <br />
 * 
 * Get game stats for the corresponding game. Successful request will return a single ${struct.GameStats} struct.
 * 
 * @param {function|method} callback_success The function to trigger when the request is successful.
 * @param {function|method} callback_failed The function to trigger when the request failed.
 * 
 * @function_end
*/
function modio_stats_game() {}

/** 
 * @function modio_stats_mods_get_list
 * @description > **mod.io Endpoint:** [Get Mods Stats](https://docs.mod.io/#get-mods-stats)
 * 
 * <br />
 * 
 * Get all mod stats for mods of the corresponding game. Successful request will return an array of ${struct.ModStats} structs.
 * 
 * [[NOTE: We highly recommend you apply filters to this endpoint to get only the results you need. For more information regarding filtering please see the [filtering](https://docs.mod.io/#filtering) section.]]
 * 
 * @param {function|method} callback_success The function to trigger when the request is successful.
 * @param {function|method} callback_failed The function to trigger when the request failed.
 * 
 * @function_end
*/
function modio_stats_mods_get_list() {}

/** 
 * @function modio_stats_mods_get
 * @description > **mod.io Endpoint:** [Get Mod Stats](https://docs.mod.io/#get-mod-stats)
 * 
 * <br />
 * 
 * Get mod stats for the corresponding mod. A successful request will return a single ${struct.ModStats} struct.
 * 
 * @param {function|method} callback_success The function to trigger when the request is successful.
 * @param {function|method} callback_failed The function to trigger when the request failed.
 * 
 * @function_end
*/
function modio_stats_mods_get() {}

// Modules

/**
 * @module stats
 * @title Stats
 * 
 * @section stats
 * @desc Stats
 * @ref modio_stats_game
 * @ref modio_stats_mods_get_list
 * @section_end
 * 
 * @module_end
 */