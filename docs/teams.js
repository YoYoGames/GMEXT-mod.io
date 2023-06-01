// Functions

/** 
 * @function modio_teams_get_mod_members
 * @description > **mod.io Endpoint:** [Get Mod Team Members](https://docs.mod.io/#get-mod-team-members) (`GET /games/{game-id}/mods/{mod-id}/team`)
 * 
 * <br />
 * 
 * Get all users that are part of a mod team. A successful request will return an array of ${struct.TeamMember} structs. We recommended reading the [filtering](https://docs.mod.io/#filtering) documentation to return only the records you want.
 * 
 * @param {real} mod_id Unique id of the mod.
 * 
 * @param {function|method} callback_success The function to trigger when the request is successful.
 * @param {function|method} callback_failed The function to trigger when the request failed.
 * 
 * @function_end
*/
function modio_teams_get_mod_members() {}

// Modules

/**
 * @module teams
 * @title Teams
 * 
 * @section_func
 * @desc Teams
 * @ref modio_teams_get_mod_members
 * @section_end
 * 
 * @module_end
 */