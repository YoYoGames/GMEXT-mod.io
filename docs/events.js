// Functions

/** 
 * @function modio_events_get_list
 * @description > **mod.io Endpoint:** [Get Mods Events](https://docs.mod.io/#get-mods-events)
 * 
 * <br />
 * 
 * This function gets all mods events for the corresponding game sorted by latest event first. A successful request will return an array of ${struct.ModEvent} structs.
 * 
 * From the [mod.io docs](https://docs.mod.io/#get-mods-events):
 * [[NOTE: We recommend you poll this endpoint to keep mods up-to-date. If polling this endpoint for updates, you should store the `id` or `date_added` of the latest event, and on subsequent requests use that information [in the filter](https://docs.mod.io/#filtering), to return only newer events to process.]]
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
 * @returns {struct.GetModEvents}
 * 
 * @function_end
*/
function modio_events_get_list() {}

/** 
 * @function modio_events_get
 * @description > **mod.io Endpoint:** [Get Mod Events](https://docs.mod.io/#get-mod-events)
 * 
 * <br />
 * 
 * This function gets the event log for a mod, showing changes made sorted by latest event first. A successful request will return an array of ${struct.ModEvent} structs. It's recommended to read the [filtering](https://docs.mod.io/#filtering) documentation to return only the records you want.
 * 
 * @param {real} mod_id
 * 
 * @param {function|method} callback_success The function to trigger when the request is successful.
 * @param {function|method} callback_failed The function to trigger when the request failed.
 * 
 * @returns {struct.GetModEvents}
 * 
 * @function_end
*/
function modio_events_get() {}

// Structs

// Modules

/**
 * @module events
 * @title Events
 * 
 * @section_func
 * @desc Functions
 * @ref modio_events_get_list
 * @ref modio_events_get
 * @section_end
 * 
 * @module_end
 */