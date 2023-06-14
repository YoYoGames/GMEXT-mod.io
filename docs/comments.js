/** 
 * @function modio_comments_get_list
 * @description > **mod.io Endpoint:** [Get Mod Comments](https://docs.mod.io/#get-mod-comments)
 * 
 * This function gets all the comments posted in the mods profile. A successful request will return an array of ${struct.Comment} structs.
 * 
 * Read the [filtering documentation](https://docs.mod.io/#filtering) to learn about filtering your records.
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
 * @param {real} _mod_id Unique id of the mod.
 * 
 * @param {function|method} _callback_success The function to trigger when the request is successful.
 * @param {function|method} _callback_failed The function to trigger when the request failed.
 * 
 * @param {real} _game_id OPTIONAL The ID of the game, defaults to the value set in the **Game ID** extension option if not provided
 * 
 * @returns {struct.GetModComments}
 * 
 * @function_end
*/
function modio_comments_get_list() {}

/** 
 * @function modio_comments_add
 * @description > **mod.io Endpoint:** [Add Mod Comment](https://docs.mod.io/#add-mod-comment)
 * 
 * This function adds a comment for the corresponding mod. A successful request will return the newly created ${struct.Comment} struct and fire a `MOD_COMMENT_ADDED` ($function.modio_mods_get_list}) event.
 * 
 * @param {real} _mod_id The unique id of the mod.
 * @param {string} _content Contents of the comment. You can include @mentions to users, which will notify them that they have been tagged in this comment.
 * 
 * **Mention Markup**
 * - Format: `@<display-name>`
 * - Example: Hey @XanT, you should check out this mod!
 * 
 * @param {real} _reply_id ID of the parent comment to reply to (can be 0 if the comment is not a reply and thus will not be nested). Default is 0.
 * 
 * @param {function|method} _callback_success The function to trigger when the request is successful.
 * @param {function|method} _callback_failed The function to trigger when the request failed.
 * 
 * @param {real} _game_id OPTIONAL The ID of the game, defaults to the value set in the **Game ID** extension option if not provided
 * 
 * @returns {struct.Comment}
 * 
 * @function_end
*/
function modio_comments_add() {}

/** 
 * @function modio_comments_get
 * @description > **mod.io Endpoint:** [Get Mod Comment](https://docs.mod.io/#get-mod-comment)
 * 
 * This function gets a mod comment. A successful request will return a single ${struct.Comment} struct.
 * 
 * @param {real} _mod_id Unique id of the mod.
 * @param {string} _comment_id Unique id of the comment.
 * 
 * @param {function|method} _callback_success The function to trigger when the request is successful.
 * @param {function|method} _callback_failed The function to trigger when the request failed.
 * 
 * @param {real} _game_id OPTIONAL The ID of the game, defaults to the value set in the **Game ID** extension option if not provided
 * 
 * @returns {struct.Comment}
 * 
 * @function_end
*/
function modio_comments_get() {}

/** 
 * @function modio_comments_update
 * @description > **mod.io Endpoint:** [Update Mod Comment](https://docs.mod.io/#update-mod-comment)
 * 
 * This function updates the given comment under the given mod. A successful request will return the updated ${struct.Comment} struct.
 * 
 * @param {real} mod_id Unique id of the mod.
 * @param {string} comment_id Unique id of the comment.
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
 * @description > **mod.io Endpoint:** [Delete Mod Comment](https://docs.mod.io/#delete-mod-comment)
 * 
 * This function deletes a comment from a mod profile. A successful request will fire a `MOD_COMMENT_DELETED` ($function.modio_mods_get_list}) event.
 * 
 * @param {real} _mod_id Unique id of the mod.
 * @param {string} _comment_id Unique id of the comment.
 * 
 * @param {function|method} _callback_success The function to trigger when the request is successful.
 * @param {function|method} _callback_failed The function to trigger when the request failed.
 * 
 * @param {real} _game_id OPTIONAL The ID of the game, defaults to the value set in the **Game ID** extension option if not provided
 * 
 * @function_end
*/
function modio_comments_delete() {}

/** 
 * @function modio_comments_karma
 * @description > **mod.io Endpoint:** [Add Mod Comment Karma](https://docs.mod.io/#add-mod-comment-karma)
 * 
 * This function updates the Karma rating in single increments or decrements for a corresponding mod comment. A successful request will return the updated {struct.Comment} struct.
 * 
 * @param {real} _mod_id Unique id of the mod.
 * @param {string} _comment_id Unique id of the comment.
 * @param {real} _karma Either 1 or -1 for positive and negative increments
 * 
 * @param {function|method} _callback_success The function to trigger when the request is successful.
 * @param {function|method} _callback_failed The function to trigger when the request failed.
 * 
 * @param {real} _game_id OPTIONAL The ID of the game, defaults to the value set in the **Game ID** extension option if not provided
 * 
 * @returns {struct.Comment}
 * 
 * @function_end
*/
function modio_comments_karma() {}

// Structs

/**
 * @module comments
 * @title Comments
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
 * @module_end
 */