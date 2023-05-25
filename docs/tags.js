@title tags

// Functions

/** 
 * @function modio_tags_game_get
 * @description > **mod.io Endpoint:** [Get Game Tag Options](https://docs.mod.io/#get-game-tag-options) (`GET /games/{game-id}/tags`)
 * 
 * Get all tags for the corresponding game, that can be applied to any of its mods. Hidden tag groups will only be returned if the authenticated user is a team member of the parent game with either `Manager` or `Administrator` status. Successful request will return an array of ${struct.GameTagOption} structs.
 * 
 * @param {function|method} callback_success The function to trigger when the request is successful.
 * @param {function|method} callback_failed The function to trigger when the request failed.
 * 
 * @returns {array<GameTagOption>}
 * 
 * @function_end
*/
function modio_tags_game_get() {}

/** 
 * @function modio_tags_game_add
 * @description > **mod.io Endpoint:** [Add Game Tag Option](https://docs.mod.io/#add-game-tag-option) (`POST /games/{game-id}/tags`)
 * 
 * Add tags which mods can apply to their profiles. A successful request will return a ${struct.Message} struct.
 *
 * Tagging is a critical feature that powers the searching and filtering of mods for your game, as well as allowing you to control how mods are installed and played. For example you might enforce mods to be a particular type (map, model, script, save, effects, blueprint), which dictates how you install it. You may use tags to specify what the mod replaces (building, prop, car, boat, character). Or perhaps the tags describe the theme of the mod (fun, scenic, realism). The implementation is up to you, but the more detail you support the better filtering and searching becomes. If you need to store more advanced information, you can also use [Metadata Key Value Pairs](https://docs.mod.io/#metadata).
 *
 * [[NOTE: You can also manage tags by editing [your games profile](https://mod.io/me/library) on the mod.io website. This is the recommended approach.]]
 * 
 * @param {string} name Name of the tag group, for example you may want to have 'Difficulty' as the name with 'Easy', 'Medium' and 'Hard' as the tag values.
 * 
 * [[NOTE: If the tag name already exists, its parameters will be overwritten and new tags will be added to the group (an edit). There is a separate function to delete tags: ${function.modio_tags_game_delete}.]]
 * 
 * @param {string} type Determines whether you allow users to only select one tag (dropdown) or multiple tags (checkbox):
 *
 * "dropdown" = Mods can select only one tag from this group, dropdown menu shown on site profile.
 * "checkboxes" = Mods can select multiple tags from this group, checkboxes shown on site profile.
 * 
 * @param {string} tags Tags that mod creators can choose to apply to their mods. Every tag to apply requires a separate field with tags[] as the key (eg. tags[]=Easy, tags[]=Medium, tags[]=Hard).
 * 
 * @param {struct} optionals
 * 
 * - hidden (${type.boolean}) This group of tags should not be shown to users. Useful for games to tag special functionality, to filter on and use behind the scenes. You can also use Metadata Key Value Pairs for more arbitrary data.
 * - locked (${boolean}) This group of tags can only be edited by game admins. Useful for games to tag special functionality, which users can see and filter on. Can be combined with hidden if you want the tags group locked and hidden.
 * 
 * @param {function|method} callback_success The function to trigger when the request is successful.
 * @param {function|method} callback_failed The function to trigger when the request failed.
 * 
 * @function_end
*/
function modio_tags_game_add() {}

/** 
 * @function modio_tags_game_delete
 * @description > **mod.io Endpoint:** [Delete Game Tag Option](https://docs.mod.io/#delete-game-tag-option) (`DELETE /games/{game-id}/tags`)
 * 
 * <br />
 * 
 * Delete an entire group of tags or individual tags. A successful request will return `204 No Content`.
 * 
 * @param {string} name Name of the tag group that you want to delete tags from.
 * @param {string} tags Tags to delete from the game and all mod profiles. Every tag to delete requires a separate field with tags[] as the key (eg. tags[]=tag1, tags[]=tag2).
 * 
 * [[NOTE: An empty value will delete the entire group.``
 * 
 * @param {function|method} callback_success The function to trigger when the request is successful.
 * @param {function|method} callback_failed The function to trigger when the request failed.
 * 
 * @function_end
*/
function modio_tags_game_delete() {}

/** 
 * @function modio_tags_mod_get
 * @description > **mod.io Endpoint:** [Get Mod Tags](https://docs.mod.io/#get-mod-tags) (`GET /games/{game-id}/mods/{mod-id}/tags`)
 * 
 * <br />
 * 
 * Get all tags for the corresponding mod. A successful request will return an array of ${struct.ModTag} structs. We recommended reading the [filtering documentation](https://docs.mod.io/#filtering) to return only the records you want.
 * 
 * **Filters:**
 *
 * - date_added (${type.int64}) Unix timestamp of date tag was added.
 * - tag (${type.string}) string representation of the tag. You can check the eligible tags on the parent game object to determine all possible values for this field.
 * 
 * @param {function|method} callback_success The function to trigger when the request is successful.
 * @param {function|method} callback_failed The function to trigger when the request failed.
 * 
 * @function_end
*/
function modio_tags_mod_get() {}

/** 
 * @function modio_tags_mod_add
 * @description > **mod.io Endpoint:** [Add Mod Tags](https://docs.mod.io/#add-mod-tags) (`POST /games/{game-id}/mods/{mod-id}/tags`)
 * 
 * <br />
 * 
 * Add tags to a mod's profile. You can only add tags allowed by the parent game, which are listed in the `tag_option` column in the [Game's Object](https://docs.mod.io/#game-object). Successful request will return ${struct.Message}.
 * 
 * @param {string} tags Tags to apply to the mod. Every tag to apply requires a separate field with tags[] as the key (eg. tags[]=tag1, tags[]=tag2). Only the tags pre-defined by the parent game can be applied. To determine what tags are eligible, see the tags values within tag_options column on the parent Game Object.
 * 
 * @param {function|method} callback_success The function to trigger when the request is successful.
 * @param {function|method} callback_failed The function to trigger when the request failed.
 * 
 * @function_end
*/
function modio_tags_mod_add() {}

/** 
 * @function modio_tags_mod_delete
 * @description > **mod.io Endpoint:** [Delete Mod Tags](https://docs.mod.io/#delete-mod-tags) (`DELETE /games/{game-id}/mods/{mod-id}/tags`)
 * 
 * <br />
 * 
 * Delete tags from a mod's profile. Deleting tags is identical to adding tags except the request method is `DELETE` instead of `POST`. Successful request will return `204 No Content`.
 * 
 * @param {string} tags Tags to delete from the mod's profile. Every tag to delete requires a separate field with tags[] as the key (eg. tags[]=tag1, tags[]=tag2).
 * 
 * @param {function|method} callback_success The function to trigger when the request is successful.
 * @param {function|method} callback_failed The function to trigger when the request failed.
 * 
 * @function_end
*/
function modio_tags_mod_delete() {}

// Structs

/**
 * @struct GameTagOption
 * @desc > **mod.io Response Schema:** [Game Tag Option Object](https://docs.mod.io/#game-tag-option-object)
 * 
 * @member {string} name Name of the tag group.
 * @member {string} type Can multiple tags be selected via 'checkboxes' or should only a single tag be selected via a 'dropdown'.
 * @member {struct} tag_count_map List of tag names and the count of mods with these tags.
 * @member {boolean} hidden Groups of tags flagged as 'hidden' are intended to be used for filtering (eg. game version), but should not be displayed to users. Hidden tags will only be returned if `show_hidden_tags` is set to `true`.
 * @member {array<string>} tags Array of tags in this group.
 * 
 * @struct_end
*/

/**
 * @struct ModTag
 * @desc > **mod.io Response Schema:** [Mod Tag Object](https://docs.mod.io/#mod-tag-object)
 * 
 * @member {string} name Tag name.
 * @member {int64} date_added Unix timestamp of date tag was applied.
 * 
 * @struct_end 
*/

// Modules

/**
 * @module tags
 * 
 * @section_func
 * @desc Functions
 * @ref modio_tags_game_get
 * @ref modio_tags_game_add
 * @ref modio_tags_game_delete
 * @ref modio_tags_mod_get
 * @ref modio_tags_mod_add
 * @ref modio_tags_mod_delete
 * @section_end
 * 
 * @section_struct
 * @desc Structs
 * @ref GameTagOption
 * @ref ModTag
 * @section_end
 * 
 * @module_end
 */