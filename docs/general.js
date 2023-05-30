@title General

// Functions

/** 
 * @function modio_general_get_resource_owner
 * @description > **mod.io Endpoint:** [Get Resource Owner](https://docs.mod.io/#get-resource-owner) (`POST /general/ownership`)
 * 
 * <br />
 * 
 * Get the user that is the original submitter of a resource. A successful request will return a single ${struct.User} struct.
 * 
 * [[NOTE: Mods and games can be managed by teams of users, for the most accurate information you should use the Team endpoints.]]
 * 
 * @param {string} resource_type Type of resource you are checking the ownership of. Must be one of the following values: "games", "mods" and "files"
 * @param {real} resource_id Unique id of the resource you are checking the ownership of.
 * 
 * @param {function|method} callback_success The function to trigger when the request is successful.
 * @param {function|method} callback_failed The function to trigger when the request failed.
 * 
 * @function_end
*/
function modio_general_get_resource_owner() {}

/**
 * @struct Message
 * @description > **mod.io Response Schema:** [Message Object](https://docs.mod.io/#message-object)
 * 
 * @member {real} code  [HTTP status code](https://docs.mod.io/#response-codes) of response.
 * @member {string} message The server response to your request. Responses will vary depending on the endpoint, but the object structure will persist.
 * 
 * @struct_end
 */

// Modules

/**
 * @module general
 * 
 * @section_func
 * @desc General
 * @ref modio_general_get_resource_owner
 * @section_end
 * 
 * @section_struct
 * @desc Structs
 * @ref Message
 * @section_end
 * 
 * @module_end
 */