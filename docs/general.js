// Functions

/** 
 * @function modio_general_get_resource_owner
 * @description > **mod.io Endpoint:** [Get Resource Owner](https://docs.mod.io/#get-resource-owner)
 * 
 * <br />
 * 
 * This function gets the user that is the original submitter of a resource. A successful request will return a single ${struct.User} struct.
 * 
 * [[NOTE: Mods and games can be managed by teams of users, for the most accurate information you should use the ${module.teams} endpoints.]]
 * 
 * @param {string} _resource_type Type of resource you are checking the ownership of. Must be one of the following values: "games", "mods" and "files"
 * @param {real} _resource_id Unique id of the resource you are checking the ownership of.
 * 
 * @param {function|method} _callback_success The function to trigger when the request is successful.
 * @param {function|method} _callback_failed The function to trigger when the request failed.
 * 
 * @returns {struct.User}
 * 
 * @function_end
*/
function modio_general_get_resource_owner() {}

// Modules

/**
 * @module general
 * @title General
 * 
 * @section_func
 * @ref modio_general_get_resource_owner
 * @section_end
 * 
 * @module_end
 */