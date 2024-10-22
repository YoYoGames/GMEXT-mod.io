// Functions

/** 
 * @function modio_tags_game_get
 * @description > **mod.io Endpoint:** [Get Game Tag Options](https://docs.mod.io/#get-game-tag-options)
 * 
 * This function gets all tags for the corresponding game, that can be applied to any of its mods. Hidden tag groups will only be returned if the authenticated user is a team member of the parent game with either `Manager` or `Administrator` status. A successful request will return an array of ${struct.GameTagOption} structs.
 * 
 * @param {function|method} _callback_success The function to trigger when the request is successful.
 * @param {function|method} _callback_failed The function to trigger when the request failed.
 * 
 * @param {real} _game_id OPTIONAL The ID of the game, defaults to the value set in the **Game ID** extension option if not provided
 * 
 * @returns {struct.GetGameTagOptions}
 * 
 * @function_end
*/
function modio_tags_game_get() {}

/** 
 * @function modio_tags_game_add
 * @description > **mod.io Endpoint:** [Add Game Tag Option](https://docs.mod.io/#add-game-tag-option)
 * 
 * This function adds tags which mods can apply to their profiles. A successful request will return a ${struct.Message} struct.
 *
 * Tagging is a critical feature that powers the searching and filtering of mods for your game, as well as allowing you to control how mods are installed and played. For example you might enforce mods to be a particular type (map, model, script, save, effects, blueprint), which dictates how you install it. You may use tags to specify what the mod replaces (building, prop, car, boat, character). Or perhaps the tags describe the theme of the mod (fun, scenic, realism). The implementation is up to you, but the more detail you support the better filtering and searching becomes. If you need to store more advanced information, you can also use [Metadata Key Value Pairs](https://docs.mod.io/#metadata).
 *
 * [[NOTE: You can also manage tags by editing [your games profile](https://mod.io/me/library) on the mod.io website. This is the recommended approach.]]
 * 
 * @param {string} _name Name of the tag group, for example you may want to have 'Difficulty' as the name with 'Easy', 'Medium' and 'Hard' as the tag values.
 * 
 * [[NOTE: If the tag name already exists, its parameters will be overwritten and new tags will be added to the group (an edit). There is a separate function to delete tags: ${function.modio_tags_game_delete}.]]
 * 
 * @param {string} _type Determines whether you allow users to only select one tag (dropdown) or multiple tags (checkbox):
 *
 * "dropdown" = Mods can select only one tag from this group, dropdown menu shown on site profile.
 * "checkboxes" = Mods can select multiple tags from this group, checkboxes shown on site profile.
 * 
 * @param {string} _tags Tags that mod creators can choose to apply to their mods. Every tag to apply requires a separate field with tags[] as the key (eg. tags[]=Easy, tags[]=Medium, tags[]=Hard).
 * 
 * @param {struct} _optionals
 * 
 * - hidden (${type.boolean}) This group of tags should not be shown to users. Useful for games to tag special functionality, to filter on and use behind the scenes. You can also use Metadata Key Value Pairs for more arbitrary data.
 * - locked (${type.boolean}) This group of tags can only be edited by game admins. Useful for games to tag special functionality, which users can see and filter on. Can be combined with hidden if you want the tags group locked and hidden.
 * 
 * @param {function|method} _callback_success The function to trigger when the request is successful.
 * @param {function|method} _callback_failed The function to trigger when the request failed.
 * 
 * @param {real} _game_id OPTIONAL The ID of the game, defaults to the value set in the **Game ID** extension option if not provided
 * 
 * @returns {struct.Message}
 * 
 * @function_end
*/
function modio_tags_game_add() {}

/** 
 * @function modio_tags_game_delete
 * @description > **mod.io Endpoint:** [Delete Game Tag Option](https://docs.mod.io/#delete-game-tag-option)
 * 
 * <br />
 * 
 * This function deletes an entire group of tags or individual tags.
 * 
 * @param {string} _name Name of the tag group that you want to delete tags from.
 * @param {string} _tags Tags to delete from the game and all mod profiles. Every tag to delete requires a separate field with tags[] as the key (eg. tags[]=tag1, tags[]=tag2).
 * 
 * [[NOTE: An empty value will delete the entire group.]]
 * 
 * @param {function|method} _callback_success The function to trigger when the request is successful.
 * @param {function|method} _callback_failed The function to trigger when the request failed.
 * 
 * @param {real} _game_id OPTIONAL The ID of the game, defaults to the value set in the **Game ID** extension option if not provided
 * 
 * @function_end
*/
function modio_tags_game_delete() {}

/** 
 * @function modio_tags_mod_get
 * @description > **mod.io Endpoint:** [Get Mod Tags](https://docs.mod.io/#get-mod-tags)
 * 
 * <br />
 * 
 * This function gets all tags for the corresponding mod. A successful request will return an array of ${struct.ModTag} structs. We recommended reading the [filtering documentation](https://docs.mod.io/#filtering) to return only the records you want.
 * 
 * **Filters:**
 *
 * - date_added (${type.real}) Unix timestamp of date tag was added.
 * - tag (${type.string}) string representation of the tag. You can check the eligible tags on the parent game object to determine all possible values for this field.
 * 
 * @param {real} _mod_id Unique id of the mod.
 * 
 * @param {function|method} _callback_success The function to trigger when the request is successful.
 * @param {function|method} _callback_failed The function to trigger when the request failed.
 * 
 * @param {real} _game_id OPTIONAL The ID of the game, defaults to the value set in the **Game ID** extension option if not provided
 * 
 * @returns {struct.GetModTags}
 * 
 * @function_end
*/
function modio_tags_mod_get() {}

/** 
 * @function modio_tags_mod_add
 * @description > **mod.io Endpoint:** [Add Mod Tags](https://docs.mod.io/#add-mod-tags)
 * 
 * <br />
 * 
 * This function adds tags to a mod's profile. You can only add tags allowed by the parent game, which are listed in the `tag_option` column in the ${struct.Game}. A successful request will return a ${struct.Message} struct.
 * 
 * @param {real} _mod_id Unique id of the mod.
 * 
 * @param {string} _tags Tags to apply to the mod. Every tag to apply requires a separate field with tags[] as the key (eg. tags[]=tag1, tags[]=tag2). Only the tags pre-defined by the parent game can be applied. To determine what tags are eligible, see the tags values within `tag_options` column on the parent ${struct.Game}.
 * 
 * @param {function|method} _callback_success The function to trigger when the request is successful.
 * @param {function|method} _callback_failed The function to trigger when the request failed.
 * 
 * @param {real} _game_id OPTIONAL The ID of the game, defaults to the value set in the **Game ID** extension option if not provided
 * 
 * @returns {struct.Message}
 * 
 * @function_end
*/
function modio_tags_mod_add() {}

/** 
 * @function modio_tags_mod_delete
 * @description > **mod.io Endpoint:** [Delete Mod Tags](https://docs.mod.io/#delete-mod-tags)
 * 
 * <br />
 * 
 * This function deletes tags from a mod's profile.
 * 
 * @param {real} _mod_id Unique id of the mod.
 * 
 * @param {string} _tags Tags to delete from the mod's profile. Every tag to delete requires a separate field with tags[] as the key (eg. tags[]=tag1, tags[]=tag2).
 * 
 * @param {function|method} _callback_success The function to trigger when the request is successful.
 * @param {function|method} _callback_failed The function to trigger when the request failed.
 * 
 * @param {real} _game_id OPTIONAL The ID of the game, defaults to the value set in the **Game ID** extension option if not provided
 * 
 * @function_end
*/
function modio_tags_mod_delete() {}

// Structs

// Modules

/**
 * @module tags
 * @title Tags
 * 
 * @section_func
 * @ref modio_tags_game_get
 * @ref modio_tags_game_add
 * @ref modio_tags_game_delete
 * @ref modio_tags_mod_get
 * @ref modio_tags_mod_add
 * @ref modio_tags_mod_delete
 * @section_end
 * 
 * @module_end
 */