// Functions

/** 
 * @function modio_stats_game
 * @description > **mod.io Endpoint:** [Get Game Stats](https://docs.mod.io/#get-game-stats) (`GET /games/{game-id}/stats`)
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
 * @description > **mod.io Endpoint:** [Get Mods Stats](https://docs.mod.io/#get-mods-stats) (`GET /games/{game-id}/mods/stats`)
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
 * @description > **mod.io Endpoint:** [Get Mod Stats](https://docs.mod.io/#get-mod-stats) (`GET /games/{game-id}/mods/{mod-id}/stats`)
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

/**
 * @struct GameStats
 * @description > **mod.io Response Schema:** [Game Stats Object](https://docs.mod.io/#game-stats-object)
 * 
 * @member {real} game_id Unique game id.
 * @member {real} mods_count_total Available mod count for the game.
 * @member {real} mods_downloads_today Mods downloaded today for the game.
 * @member {real} mods_downloads_total Total Mods downloaded for the game.
 * @member {real} mods_downloads_daily_average Average mods downloaded on a daily basis.
 * @member {real} mods_subscribers_total Number of total users who have subscribed to the mods for the game.
 * @member {int64} date_expires Unix timestamp until this game's statistics are considered stale.
 * 
 * @struct_end
 */

/**
 * @struct ModStats
 * @description > **mod.io Response Schema:** [Mod Stats Object](https://docs.mod.io/#mod-stats-object)
 * 
 * @member {real} mod_id Unique mod id.
 * @member {real} popularity_rank_position Current rank of the mod.
 * @member {real} popularity_rank_total_mods Number of ranking spots the current rank is measured against.
 * @member {real} downloads_today Number of total mod downloads. Count resets around 11:00 UTC+11 daily.
 * @member {real} downloads_total Number of total mod downloads.
 * @member {real} subscribers_total Number of total users who have subscribed to the mod.
 * @member {real} ratings_total Number of times this mod has been rated.
 * @member {real} ratings_positive Number of positive ratings.
 * @member {real} ratings_negative Number of negative ratings.
 * @member {real} ratings_percentage_positive Number of positive ratings, divided by the total ratings to determine its percentage score.
 * @member {real} ratings_weighted_aggregate Overall rating of this item calculated using the [Wilson score confidence interval](https://www.evanmiller.org/how-not-to-sort-by-average-rating.html). This column is good to sort on, as it will order items based on number of ratings and will place items with many positive ratings above those with a higher score but fewer ratings.
 * @member {string} ratings_display_text Textual representation of the rating in format:
 * 
 * - Overwhelmingly Positive
 * - Very Positive
 * - Positive
 * - Mostly Positive
 * - Mixed
 * - Negative
 * - Mostly Negative
 * - Very Negative
 * - Overwhelmingly Negative
 * - Unrated
 * 
 * @member {int64} date_expires Unix timestamp until this mods's statistics are considered stale.
 * 
 * @struct_end
 */

// Modules

/**
 * @module stats
 * 
 * @section stats
 * @desc Stats
 * @ref modio_stats_game
 * @ref modio_stats_mods_get_list
 * @section_end
 * 
 * @section Structs
 * @desc structs
 * @ref GameStats
 * @ref ModStats
 * @section_end
 * 
 * @module_end
 */