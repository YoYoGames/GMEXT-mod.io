@title Comments

/** 
 * @function modio_comments_get_list
 * @description > **mod.io Endpoint:** [Get Mod Comments](https://docs.mod.io/#get-mod-comments) (`GET /games/{game-id}/mods/{mod-id}/comments`)
 * 
 * Get all comments posted in the mods profile. A successful request will return an array of ${struct.Comment} structs. We recommended reading the [filtering documentation](https://docs.mod.io/#filtering) to return only the records you want.
 * 
 * Filters:
 *
 * **id**:(${type.real}) Unique id of the comment.
 * **mod_id**:(${type.real}) Unique id of the parent mod. This is now deprecated and will be removed in future API versions, please use resource_id instead.
 * **resource_id**:(${type.real}) Unique id of the resource.	
 * **submitted_by**:(${type.real}) Unique id of the user who posted the comment.
 * **date_added**:(${type.real}) Unix timestamp of date comment was posted.
 * **reply_id**:(${type.real}) Id of the parent comment this comment is replying to (can be 0 if the comment is not a reply).
 * **thread_position**:(${type.string}) Levels of nesting in a comment thread. You should order by this field, to maintain comment grouping. How it works:
 *
 * - The first comment will have the position '01'.
 * - The second comment will have the position '02'.
 * - If someone responds to the second comment the position will be '02.01'.
 * - A maximum of 3 levels is supported.
 * 
 * **karma**:(${type.real}) Karma received for the comment (can be positive or negative).
 * **content**:(${type.string}) Contents of the comment.
 * 
 * @param {real} mod_id Unique id of the mod.
 * 
 * @param {function|method} callback_success The function to trigger when the request is successful.
 * @param {function|method} callback_failed The function to trigger when the request failed.
 * 
 * @returns 
 * 
 * @function_end
*/
function modio_comments_get_list() {}

/** 
 * @function modio_comments_add
 * @description > **mod.io Endpoint:** [Add Mod Comment](https://docs.mod.io/#add-mod-comment) (`POST /games/{game-id}/mods/{mod-id}/comments`)
 * 
 * Add a comment for the corresponding mod. A successful request will return the newly created ${struct.Comment} struct and fire a `MOD_COMMENT_ADDED` event.
 * 
 * @param {real} mod_id The unique id of the mod.
 * @param {string} content Contents of the comment. You can include @mentions to users, which will notify them that they have been tagged in this comment.
 * 
 * **Mention Markup**
 * - Format: `@<display-name>`
 * - Example: Hey @XanT, you should check out this mod!
 * 
 * @param {real} reply_id Id of the parent comment to reply to (can be 0 if the comment is not a reply and thus will not be nested). Default is 0.
 * 
 * @param {function|method} callback_success The function to trigger when the request is successful.
 * @param {function|method} callback_failed The function to trigger when the request failed.
 * 
 * @function_end
*/
function modio_comments_add() {}

/** 
 * @function modio_comments_get
 * @description > **mod.io Endpoint:** [Get Mod Comment](https://docs.mod.io/#get-mod-comment) (`GET /games/{game-id}/mods/{mod-id}/comments/{comment-id}`)
 * 
 * Get a Mod Comment. A successful request will return a single ${struct.Comment} struct.
 * 
 * @param {real} mod_id Unique id of the mod.
 * @param {string} comment_id Unique id of the comment.
 * 
 * @param {function|method} callback_success The function to trigger when the request is successful.
 * @param {function|method} callback_failed The function to trigger when the request failed.
 * 
 * @returns {struct.Comment}
 * 
 * @function_end
*/
function modio_comments_get() {}

/** 
 * @function modio_comments_update
 * @description > **mod.io Endpoint:** [Update Mod Comment](https://docs.mod.io/#update-mod-comment) (`PUT /games/{game-id}/mods/{mod-id}/comments/{comment-id}`)
 * 
 * Update a comment for the corresponding mod. A successful request will return the updated ${struct.Comment} struct.
 * 
 * @param {real} mod_id Unique id of the mod.
 * @param {string} comment_id Unique id of the comment
 * @param {string} content Updated contents of the comment.
 * 
 * @param {function|method} callback_success The function to trigger when the request is successful.
 * @param {function|method} callback_failed The function to trigger when the request failed.
 * 
 * @returns {struct.Comment}
 * 
 * @function_end
*/
function modio_comments_update() {}

/** 
 * @function modio_comments_delete
 * @description > **mod.io Endpoint:** [Delete Mod Comment](https://docs.mod.io/#delete-mod-comment) (`DELETE /games/{game-id}/mods/{mod-id}/comments/{comment-id}`)
 * 
 * Delete a comment from a mod profile. Successful request will return `204 No Content` and fire a `MOD_COMMENT_DELETED` event.
 * 
 * @param {real} mod_id Unique id of the mod.
 * @param {string} comment_id Unique id of the comment.
 * 
 * @param {function|method} callback_success The function to trigger when the request is successful.
 * @param {function|method} callback_failed The function to trigger when the request failed.
 * 
 * @function_end
*/
function modio_comments_delete() {}

/** 
 * @function modio_comments_karma
 * @description > **mod.io Endpoint:** [Add Mod Comment Karma](https://docs.mod.io/#add-mod-comment-karma) (`POST /games/{game-id}/mods/{mod-id}/comments/{comment-id}/karma`)
 * 
 * Update the Karma rating in single increments or decrements for a corresponding mod comment. A successful request will return the updated {struct.Comment} struct.
 * 
 * @param {real} mod_id Unique id of the mod.
 * @param {string} comment_id Unique id of the comment.
 * @param {real} karma Either 1 or -1 for positive and negative increments
 * 
 * @param {function|method} callback_success The function to trigger when the request is successful.
 * @param {function|method} callback_failed The function to trigger when the request failed.
 * 
 * @function_end
*/
function modio_comments_karma() {}

// Structs

/**
 * @struct Comment
 * @description > **mod.io Response Schema:** [Comment Object](https://docs.mod.io/#comment-object)
 * 
 * @member {real} id Unique id of the comment.
 * @member {real} game_id Unique game id (if applicable).
 * @member {real} resource_id Unique id of the parent resource.
 * @member {struct.User} The user who published the comment.
 * @member {int64} date_added Unix timestamp of date the comment was posted.
 * @member {real} reply_id Id of the parent comment this comment is replying to (can be 0 if the comment is not a reply).
 * @member {string} thread_position Levels of nesting in a comment thread. How it works:
 *
 * - The first comment will have the position '01'.
 * - The second comment will have the position '02'.
 * - If someone responds to the second comment the position will be '02.01'.
 * - A maximum of 3 levels is supported.
 * 
 * @member {real} karma Karma received for the comment (can be postive or negative).
 * @member {string} content Contents of the comment.
 * 
 * @struct_end
 */

/**
 * @module comments
 * 
 * @section_func
 * @desc Comments
 * @ref modio_comments_get_list
 * @ref modio_comments_add
 * @ref modio_comments_get
 * @ref modio_comments_update
 * @ref modio_comments_delete
 * @ref modio_comments_karma
 * @section_end
 * 
 * @section_struct
 * @desc Comments
 * @ref Comment
 * @section_end
 * 
 * @module_end
 */