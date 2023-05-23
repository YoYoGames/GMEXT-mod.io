// Functions

/**
 * @function modio_user_is_logged
 * @desc This functions checks if the user is logged in.
 * 
 * [[NOTE: This function is local, it only checks whether access_token exists. If you want to confirm that you are logged in, you should try to call a function that requires a valid access_token.]]
 * 
 * @returns {boolean} Whether the user is logged in or not
 * 
 * @function_end
 */

/**
 * @function modio_user_access_token
 * @description This function returns the access_token
 * 
 * To confirm the access token is valid you show do a test request.
 * 
 * @returns {string} The access token
 * 
 * @function_end
 */

/**
 * @function modio_user_login_from_cache
 * @description This function loads the access token saved locally from the last succeeded login.
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
