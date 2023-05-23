// Constants


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
 * @module home
 * 
 * @section Modules
 * @desc The following are the available modules for the mod.io extension:
 * @reference module.auth
 * @reference module.games
 * @reference module.mods
 * @reference module.modfiles
 * @reference module.subscribe
 * @reference module.comments
 * @reference module.media
 * @reference module.events
 * @reference module.tags
 * @reference module.ratings
 * @reference module.stats
 * @reference module.dependencies
 * @reference module.teams
 * @reference module.general
 * @reference module.reports
 * @reference module.agreements
 * @reference module.reports
 * @reference module.users
 * @reference module.me
 * @reference module.price
 * @reference module.pagination
 * 
 * @section_end
 * 
 * @module_end
 */