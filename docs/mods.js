// Functions

/**
 * @function modio_mods_get_list
 * @description > **mod.io Endpoint:** [Get Mods](https://docs.mod.io/#get-mods)
 * 
 * This function gets all mods for the corresponding game. A successful request will return an array of ${struct.Mod} structs. We recommended reading the [filtering documentation](https://docs.mod.io/#filtering) to return only the records you want.
 * 
 * @param {function|method} _callback_success The function to trigger when the request is successful.
 * @param {function|method} _callback_failed The function to trigger when the request failed.
 * 
 * @param {real} _game_id OPTIONAL The ID of the game, defaults to the value set in the **Game ID** extension option if not provided
 * 
 * @returns {struct.GetMods}
 * 
 * @function_end
 */
function modio_mods_get_list() {}

/** 
 * @function modio_mods_get
 * @description > **mod.io Endpoint:** [Get Mod](https://docs.mod.io/#get-mod)
 * 
 * This function gets a mod. A successful request will return a single ${struct.Mod} struct.
 * 
 * @param {real} _mod_id Unique id of the mod.
 * 
 * @param {function|method} _callback_success The function to trigger when the request is successful.
 * @param {function|method} _callback_failed The function to trigger when the request failed.
 * 
 * @param {real} _game_id OPTIONAL The ID of the game, defaults to the value set in the **Game ID** extension option if not provided
 * 
 * @returns {struct.Mod}
 * 
 * @function_end
*/
function modio_mods_get() {}

/** 
 * @function modio_mods_add
 * @description > **mod.io Endpoint:** [Add Mod](https://docs.mod.io/#add-mod)
 * 
 * This function adds a mod. A successful request will return the newly created ${struct.Mod}. All content published by users on mod.io is subject to the [Terms of Use](https://mod.io/terms/widget). It is a requirement that you provide a link to https://mod.io/terms in any place where users are submitting content to mod.io.
 *
 * [[NOTE: By default new mods are 'not accepted' and 'public'. They can only be 'accepted' and made available via the API once a Mod File has been uploaded. Media, Metadata Key Value Pairs and Dependencies can also be added after a mod profile is created.]]
 * 
 * @param {string} _name Name of your mod.
 * @param {string} _logo Image file which will represent your mods logo. Must be gif, jpg or png format and cannot exceed 8MB in filesize. Dimensions must be at least 512x288 and we recommended you supply a high resolution image with a 16 / 9 ratio. mod.io will use this image to make three thumbnails for the dimensions 320x180, 640x360 and 1280x720.
 * @param {string} _summary Summary for your mod, giving a brief overview of what it's about. Cannot exceed 250 characters.
 * 
 * @param {struct} _optionals
 * 
 * - name_id (${type.string}) Path for the mod on mod.io. For example: https://mod.io/g/gamename/m/**mod-name-id-here**. If no `name_id` is specified the `name` will be used. For example: *'Stellaris Shader Mod'* will become *'stellaris-shader-mod'*. Cannot exceed 80 characters.
 * - visible (${type.real}) Visibility of the mod (best if this field is controlled by mod admins, see status and visibility for details):
 * 
 * 0 = Hidden
 * 1 = Public (default)
 * 
 * - description (${type.string}) Detailed description for your mod, which can include details such as 'About', 'Features', 'Install Instructions', 'FAQ', etc. HTML supported and encouraged.
 * - homepage_url (${type.string}) Official homepage for your mod. Must be a valid URL.
 * - stock (${type.real}) Maximium number of subscribers for this mod. A value of 0 disables this limit.
 * - maturity_option (${type.real}) Choose if this mod contains any of the following mature content.
 * 
 * [[NOTE: The value of this field will default to 0 unless the parent game allows you to flag mature content (see `maturity_options` field in Game Object).]]
 * 
 * 0 = None set (default)
 * 1 = Alcohol
 * 2 = Drugs
 * 4 = Violence
 * 8 = Explicit
 * ? = Add the options you want together, to enable multiple options (see [BITWISE fields](https://docs.mod.io/#bitwise-and-bitwise-and))
 * 
 * - community_options (${type.real}) Select which interactions players can have with your mod.
 * 
 * 0 = None
 * 1 = Ability to comment (default)
 * ? = Add the options you want together, to enable multiple options (see BITWISE fields)
 * 
 * - metadata_blob (${type.string}) Metadata stored by the game developer which may include properties as to how the item works, or other information you need to display. Metadata can also be stored as searchable key value pairs, and to individual mod files.
 * - tags (${type.array} of ${type.string}) Tags to apply to the mod. Every tag to apply requires a separate field with tags[] as the key (eg. tags[]=tag1, tags[]=tag2). Only the tags pre-defined by the parent game can be applied. To determine what tags are eligible, see the tags values within `tag_options` column on the parent ${struct.Game}.
 * 
 * @param {function|method} _callback_success The function to trigger when the request is successful.
 * @param {function|method} _callback_failed The function to trigger when the request failed.
 * 
 * @param {real} _game_id OPTIONAL The ID of the game, defaults to the value set in the **Game ID** extension option if not provided
 * 
 * @returns {struct.Mod}
 * 
 * @function_end
*/
function modio_mods_add() {}

/** 
 * @function modio_mods_edit
 * @description > **mod.io Endpoint:** [Edit Mod](https://docs.mod.io/#edit-mod)
 * 
 * This function edits the details for a mod. If you want to update the `logo` or media associated with this mod, you need to use ${function.modio_media_mod_add}. The same applies to Mod Files, Metadata Key Value Pairs and Dependencies which are all managed via other endpoints. A duccessful request will return the updated ${struct.Mod} struct.
 * 
 * @param {real} _mod_id Unique id of the mod.
 * @param {string} _logo Image file which will represent your mods logo. Must be gif, jpg or png format and cannot exceed 8MB in filesize. Dimensions must be at least 512x288 and we recommended you supply a high resolution image with a 16 / 9 ratio. mod.io will use this image to make three thumbnails for the dimensions 320x180, 640x360 and 1280x720.
 * @param {struct} _optionals
 * 
 * - status (${type.real}) Status of a mod. The mod must have at least one uploaded modfile to be 'accepted' (best if this field is controlled by game admins, see status and visibility for details):
 * 
 * 0 = Not accepted
 * 1 = Accepted (game admins only)
 * 3 = Deleted (use the [delete mod](https://docs.mod.io/#delete-mod) endpoint to set this status)
 * 
 * - visible (${type.real}) Visibility of the mod (best if this field is controlled by mod admins, see [status and visibility](https://docs.mod.io/#status-amp-visibility) for details):
 * 
 * 0 = Hidden
 * 1 = Public
 * 
 * - name (${type.string}) Name of your mod.
 * - name_id (${type.string}) Path for the mod on mod.io. For example: 
 * 
 * https://mod.io/g/gamename/m/mod-name-id-here. If no `name_id` is specified the name will be used. For example: *'Stellaris Shader Mod'* will become *'stellaris-shader-mod'*. Cannot exceed 80 characters.
 * 
 * - summary (${type.string}) Summary for your mod, giving a brief overview of what it's about. Cannot exceed 250 characters.
 * - description (${type.string}) Detailed description for your mod, which can include details such as 'About', 'Features', 'Install Instructions', 'FAQ', etc. HTML supported and encouraged.
 * - homepage_url (${type.string}) Official homepage for your mod. Must be a valid URL.
 * - stock (${type.real}) Maximum number of subscribers for this mod. A value of 0 disables this limit.
 * - maturity_option (${type.real}) Choose if this mod contains any of the following mature content.
 * 
 * 0 = None set (default)
 * 1 = Alcohol
 * 2 = Drugs
 * 4 = Violence
 * 8 = Explicit
 * ? = Add the options you want together, to enable multiple options (see BITWISE fields)
 * 
 * - community_options (${type.real}) Select which interactions players can have with your mod.
 * 
 * 0 = None set (default)
 * 1 = Alcohol
 * 2 = Drugs
 * 4 = Violence
 * 8 = Explicit
 * ? = Add the options you want together, to enable multiple options (see [BITWISE fields](https://docs.mod.io/#bitwise-and-bitwise-and))
 *     community_options(Real)Select which interactions players can have with your mod.
 * 
 * - metadata_blob (${type.string}) Metadata stored by the game developer which may include properties as to how the item works, or other information you need to display. Metadata can also be stored as searchable [key value pairs](https://docs.mod.io/#metadata), and to individual [mod files](https://docs.mod.io/#get-modfiles).
 * - tags (${type.array} of ${type.string}) Tags to apply to the mod. Every tag to apply requires a separate field with tags[] as the key (eg. tags[]=tag1, tags[]=tag2). Only the tags pre-defined by the parent game can be applied. To determine what tags are eligible, see the tags values within `tag_options` column on the parent ${struct.Game}.
 * 
 * @param {function|method} _callback_success The function to trigger when the request is successful.
 * @param {function|method} _callback_failed The function to trigger when the request failed.
 * 
 * @param {real} _game_id OPTIONAL The ID of the game, defaults to the value set in the **Game ID** extension option if not provided
 * 
 * @returns {struct.Mod}
 * 
 * @function_end
*/
function modio_mods_edit() {}

/** 
 * @function modio_mods_delete
 * @description > **mod.io Endpoint:** [Delete Mod](https://docs.mod.io/#delete-mod)
 * 
 * This function deletes a mod profile. A successful request will fire a `MOD_UNAVAILABLE` (${function.modio_mods_get_list}) event.
 * 
 * [[NOTE: This will close the mod profile which means it cannot be viewed or retrieved via API requests but will still exist in-case you choose to restore it at a later date. If you wish to permanently delete a mod you have access rights to, you must do it via the [mods profile page](https://mod.io/me/library) on the mod.io website.]]
 * 
 * @param {real} _mod_id Unique id of the mod.
 * 
 * @param {function|method} _callback_success The function to trigger when the request is successful.
 * @param {function|method} _callback_failed The function to trigger when the request failed.
 * 
 * @param {real} _game_id OPTIONAL The ID of the game, defaults to the value set in the **Game ID** extension option if not provided
 * 
 * @function_end
*/
function modio_mods_delete() {}

// Structs

// Modules

/**
 * @module mods
 * @title Mods
 * 
 * @section_func
 * @desc Mods
 * @ref modio_mods_get_list
 * @ref modio_mods_get
 * @ref modio_mods_add
 * @ref modio_mods_edit
 * @ref modio_mods_delete
 * @section_end
 * 
 * @module_end
 */