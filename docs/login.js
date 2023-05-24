// Functions

/**
 * @function modio_user_is_logged
 * @desc This functions checks if the user is currently logged in.
 * 
 * [[NOTE: This function is local, it only checks if an access token, returned by any of the functions in ${module.auth}, exists.
 * If you want to confirm that you are logged in, you should try to call a function that requires a valid access token.]]
 * 
 * @returns {boolean} Whether the user is logged in or not
 * 
 * @function_end
 */

/**
 * @function modio_user_access_token
 * @description This function returns the access token.
 * 
 * To confirm that the access token is valid you should do a test request.
 * 
 * @returns {string} The access token (an empty string `""` if it doesn't exist)
 * 
 * @function_end
 */

/**
 * @function modio_user_login_from_cache
 * @description This function loads the access token that was saved locally from the last succeeded login.
 * 
 * @function_end
 */

// Modules

/**
 * @module login
 * @desc This module contains functions to check the login status of the user.
 * 
 * @section_func
 * @desc Functions
 * @ref modio_user_is_logged
 * @ref modio_user_access_token
 * @ref modio_user_login_from_cache
 * @section_end
 * 
 * @module_end
 */
