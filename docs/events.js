@title Events

// Functions

/** 
 * @function modio_events_get_list
 * @description > **mod.io Endpoint:** [Get Mods Events](https://docs.mod.io/#get-mods-events) (`GET /games/{game-id}/mods/events`)
 * 
 * <br />
 * 
 * Get all mods events for the corresponding game sorted by latest event first. A successful request will return an array of {struct.Event} structs.
 * 
 * [[NOTE: We recommend you poll this endpoint to keep mods up-to-date. If polling this endpoint for updates you should store the `id` or `date_added` of the latest event, and on subsequent requests use that information [in the filter](https://docs.mod.io/#filtering), to return only newer events to process.]]
 * 
 * **Filters:**
 * 
 * - id (real) Unique id of the event object.
 * - mod_id (Real) Unique id of the parent mod.
 * - user_id (Real) Unique id of the user who performed the action.
 * - date_added (Real) Unix timestamp of date mod event occurred.
 * - event_type (String) Type of change that occurred:
 *
 *   - "MODFILE_CHANGED" = Live file changed
 *   - "MOD_AVAILABLE" = Mod is marked as accepted and public
 *   - "MOD_UNAVAILABLE" = Mod is marked as not accepted, deleted or hidden
 *   - "MOD_EDITED" = The mod was updated (triggered when any column value changes)
 *   - "MOD_DELETED" = The mod has been permanently erased. This is an orphan record, looking up this id will return no data
 *   - "MOD_TEAM_CHANGED" = A user has joined or left the mod team
 *   - "MOD_COMMENT_ADDED" = A comment has been published for a mod
 *   - "MOD_COMMENT_DELETED" = A comment has been deleted from a mod
 *
 * latest (Bool) Default value is `true`. Returns only the latest unique events, which is useful for checking if the live modfile has changed.
 * subscribed (Bool) Default value is `false`. Returns only events connected to mods the authenticated user is subscribed to, which is useful for keeping the user's mods up-to-date.
 * 
 * @param {function|method} callback_success The function to trigger when the request is successful.
 * @param {function|method} callback_failed The function to trigger when the request failed.
 * 
 * @function_end
*/
function modio_events_get_list() {}

/** 
 * @function modio_events_get
 * @description > **mod.io Endpoint:** [Get Mod Events](https://docs.mod.io/#get-mod-events) (`GET /games/{game-id}/mods/{mod-id}/events`)
 * 
 * <br />
 * Get the event log for a mod, showing changes made sorted by latest event first. A successful request will return an array of {struct.Event} structs. We recommended reading the filtering documentation to return only the records you want.
 * 
 * @param {real} mod_id
 * 
 * @param {function|method} callback_success The function to trigger when the request is successful.
 * @param {function|method} callback_failed The function to trigger when the request failed.
 * 
 * @returns {struct.ModEvent}
 * 
 * @function_end
*/
function modio_events_get() {}

// Structs

/**
 * @struct ModEvents
 * @description > **mod.io Response Schema:** [Get Mod Events](https://docs.mod.io/#get-mod-events-2)
 * 
 * @member {struct.ModEvent>} data Array containing mod event objects.
 * @member {real} result_count Number of results returned in this request.
 * @member {real} result_offset Number of results skipped over. Defaults to 0 unless overridden by `_offset` filter.
 * @member {real} result_limit Maximum number of results returned in the request. Defaults to 100 (max) unless overridden by `_limit filter`.
 * @member {real} result_total Total number of results found.
 * 
 * @struct_end
 */

/**
 * @struct ModEvent
 * @description > **mod.io Response Schema:** [Get Mod Events](https://docs.mod.io/#get-mod-events-2)
 * 
 * @member {real} id Unique id of the event object.
 * @member {real} mod_id Unique id of the parent mod.
 * @member {real} user_id Unique id of the user who performed the action.
 * @member {int64} date_added Unix timestamp of date the event occurred.
 * @member {string} event_type Type of event that was triggered. List of possible events: 
 * 
 * - MODFILE_CHANGED
 * - MOD_AVAILABLE
 * - MOD_UNAVAILABLE
 * - MOD_EDITED
 * - MOD_DELETED
 * - MOD_TEAM_CHANGED
 * 
 * @struct_end
 */

// Modules

/**
 * @module events
 * 
 * @section_func
 * @desc Functions
 * @ref modio_events_get_list
 * @ref modio_events_get
 * @section_end
 * 
 * @section_struct
 * @desc Structs
 * @ref ModEvents
 * @ref ModEvent
 * @section_end
 * 
 * @module_end
 */