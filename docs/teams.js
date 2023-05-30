@title Teams

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

/**
 * @struct TeamMember
 * @description > **mod.io Response Schema:** [Team Member Object](https://docs.mod.io/#team-member-object)
 * 
 * @member {real} id Unique team member id.
 * @member {struct.User} user The user associated with this team access.
 * @member {real} level Level of permission the user has:
 * 
 * 1 = Moderator (can moderate comments and content attached)
 * 4 = Manager (moderator access, including uploading builds and editing settings except supply and team members)
 * 8 = Administrator (full access, including editing the supply and team)
 * 
 * @member {int64} date_added Unix timestamp of the date the user was added to the team.
 * @member {string} position Custom title given to the user in this team.
 * @member {real} invite_pending If the team member invitation is still pending:
 * 
 * 0 = Invitation Accepted
 * 1 = Invitation Pending
 * 
 * @struct_end
 */

// Modules

/**
 * @module teams
 * 
 * @section_func
 * @desc Teams
 * @ref modio_teams_get_mod_members
 * @section_end
 * 
 * @section_struct
 * @description Structs
 * @ref TeamMember
 * @section_end
 * 
 * @module_end
 */