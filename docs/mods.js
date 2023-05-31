// Functions

/**
 * @function modio_mods_get_list
 * @description > **mod.io Endpoint:** [Get Mods](https://docs.mod.io/#get-mods) (`GET /games/{game-id}/mods`)
 * 
 * Get all mods for the corresponding game. Successful request will return an array of Mod Objects. We recommended reading the [filtering documentation](https://docs.mod.io/#filtering) to return only the records you want.
 * 
 * @param {function|method} callback_success The function to trigger when the request is successful.
 * @param {function|method} callback_failed The function to trigger when the request failed.
 * 
 * @function_end
 */
function modio_mods_get_list() {}

/** 
 * @function modio_mods_get
 * @description > **mod.io Endpoint:** [Get Mod](https://docs.mod.io/#get-mod) (`GET /games/{game-id}/mods/{mod-id}`)
 * 
 * Get a mod. A successful request will return a single ${struct.Mod} struct.
 * 
 * @param {function|method} callback_success The function to trigger when the request is successful.
 * @param {function|method} callback_failed The function to trigger when the request failed.
 * 
 * @function_end
*/
function modio_mods_get() {}

/** 
 * @function modio_mods_add
 * @description > **mod.io Endpoint:** [Add Mod](https://docs.mod.io/#add-mod) (`POST /games/{game-id}/mods`)
 * 
 * Add a mod. A successful request will return the newly created ${struct.Mod}. All content published by users on mod.io is subject to the Terms of Use. It is a requirement that you provide a link to https://mod.io/terms in any place where users are submitting content to mod.io.
 *
 * [[NOTE: By default new mods are 'not accepted' and 'public'. They can only be 'accepted' and made available via the API once a Mod File has been uploaded. Media, Metadata Key Value Pairs and Dependencies can also be added after a mod profile is created.``
 * 
 * @param {string} logo Image file which will represent your mods logo. Must be gif, jpg or png format and cannot exceed 8MB in filesize. Dimensions must be at least 512x288 and we recommended you supply a high resolution image with a 16 / 9 ratio. mod.io will use this image to make three thumbnails for the dimensions 320x180, 640x360 and 1280x720.
 * @param {string} name Name of your mod.
 * @param {struct} optionals
 * 
 * - name_id (${type.string}) Path for the mod on mod.io. For example: https://mod.io/g/gamename/m/**mod-name-id-here**. If no `name_id` is specified the `name` will be used. For example: *'Stellaris Shader Mod'* will become *'stellaris-shader-mod'*. Cannot exceed 80 characters.
 * - summary (${type.string}) Summary for your mod, giving a brief overview of what it's about. Cannot exceed 250 characters.
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
 * *community_options*(Real) Select which interactions players can have with your mod.
 * 
 * - community_options (${type.real}) Select which interactions players can have with your mod.
 * 
 * 0 = None
 * 1 = Ability to comment (default)
 * ? = Add the options you want together, to enable multiple options (see BITWISE fields)
 * 
 * - metadata_blob (${type.string}) Metadata stored by the game developer which may include properties as to how the item works, or other information you need to display. Metadata can also be stored as searchable key value pairs, and to individual mod files.
 * - tags (${type.string}) Tags to apply to the mod. Every tag to apply requires a separate field with tags[] as the key (eg. tags[]=tag1, tags[]=tag2). Only the tags pre-defined by the parent game can be applied. To determine what tags are eligible, see the tags values within `tag_options` column on the parent {struct.GameObject}.
 * 
 * @param {function|method} callback_success The function to trigger when the request is successful.
 * @param {function|method} callback_failed The function to trigger when the request failed.
 * 
 * @function_end
*/
function modio_mods_add() {}

/** 
 * @function modio_mods_edit
 * @description > **mod.io Endpoint:** [Edit Mod](https://docs.mod.io/#edit-mod) (`POST /games/{game-id}/mods/{mod-id}`)
 * 
 * Edit details for a mod. If you want to update the `logo` or media associated with this mod, you need to use the Add Mod Media endpoint. The same applies to Mod Files, Metadata Key Value Pairs and Dependencies which are all managed via other endpoints. Successful request will return the updated Mod Object.
 * 
 * @param {real} mod_id Unique id of the mod.
 * @param {string} logo Image file which will represent your mods logo. Must be gif, jpg or png format and cannot exceed 8MB in filesize. Dimensions must be at least 512x288 and we recommended you supply a high resolution image with a 16 / 9 ratio. mod.io will use this image to make three thumbnails for the dimensions 320x180, 640x360 and 1280x720.
 * @param {struct} optionals
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
 * - visible (${type.real}) Visibility of the mod (best if this field is controlled by mod admins, see [status and visibility](https://docs.mod.io/#status-amp-visibility) for details):
 * 
 * 0 = Hidden
 * 1 = Public (default)
 * 
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
 * 
 * @param {function|method} callback_success The function to trigger when the request is successful.
 * @param {function|method} callback_failed The function to trigger when the request failed.
 * 
 * @function_end
*/
function modio_mods_edit() {}

/** 
 * @function modio_mods_delete
 * @description > **mod.io Endpoint:** [Delete Mod](https://docs.mod.io/#delete-mod) (`DELETE /games/{game-id}/mods/{mod-id}`)
 * 
 * Delete a mod profile. A successful request will return `204 No Content` and fire a MOD_UNAVAILABLE event.
 * 
 * [[NOTE: This will close the mod profile which means it cannot be viewed or retrieved via API requests but will still exist in-case you choose to restore it at a later date. If you wish to permanently delete a mod you have access rights to, you must do it via the [mods profile page](https://mod.io/me/library) on the mod.io website.]]
 * 
 * @param {real} mod_id Unique id of the mod.
 * 
 * @param {function|method} callback_success The function to trigger when the request is successful.
 * @param {function|method} callback_failed The function to trigger when the request failed.
 * 
 * @function_end
*/
function modio_mods_delete() {}

// Structs

/**
 * @struct Mod
 * @description > **mod.io Response Schema:** [Mod Object](https://docs.mod.io/#mod-object)
 * 
 * @member {real} id Unique mod id.
 * @member {real} game_id Unique game id.
 * @member {real} status Status of the mod (see [status and visibility](https://docs.mod.io/#status-amp-visibility) for details):
 * 
 * 0 = Not Accepted
 * 1 = Accepted
 * 3 = Deleted
 * 
 * @member {real} visible Visibility of the mod (see [status and visibility](https://docs.mod.io/#status-amp-visibility) for details):
 * 
 * 0 = Hidden
 * 1 = Public
 * 
 * @member {struct.User} submitted_by The user who published the mod.
 * @member {int64} date_added Unix timestamp of date mod was registered.
 * @member {int64} date_updated Unix timestamp of date mod was updated.
 * @member {int64} date_live Unix timestamp of date mod was set live.
 * @member {real} maturity_option Maturity options flagged by the mod developer, this is only relevant if the parent game allows mods to be labelled as mature:
 * 
 * 0 = None
 * 1 = Alcohol
 * 2 = Drugs
 * 4 = Violence
 * 8 = Explicit
 * ? = Add the options you want together, to enable multiple filters (see [BITWISE fields](https://docs.mod.io/#bitwise-and-bitwise-and))
 * 
 * @member {real} community_options Community features enabled for this mod:
 * 
 * 0 = All of the options below are disabled
 * 1 = Enable comments
 * ? = Add the options you want together, to enable multiple features (see [BITWISE fields](https://docs.mod.io/#bitwise-and-bitwise-and))
 * 
 * @member {real} monetisation_options Monetisation features enabled for this mod:
 * 
 * 0 = All of the options below are disabled
 * 1 = Enabled
 * 2 = Recognition On
 * 4 = Marketplace On
 * ? = Add the options you want together, to enable multiple features (see [BITWISE fields](https://docs.mod.io/#bitwise-and-bitwise-and))
 * 
 * @member {real} price The price of the mod.
 * @member {real} tax The tax of the mod.
 * @member {struct.Logo} logo Contains media URL's to the logo for the mod.
 * @member {string} homepage_url Official homepage of the mod.
 * @member {string} name Name of the mod.
 * @member {string} name_id Path for the mod on mod.io. For example: https://mod.io/g/rogue-knight/m/**rogue-knight-hd-pack**
 * @member {string} summary Summary of the mod.
 * @member {string} description Detailed description of the mod which allows HTML.
 * @member {string} description_plaintext `description` field converted into plaintext.
 * @member {string} metadata_blob Metadata stored by the game developer. Metadata can also be stored as searchable [key value pairs](https://docs.mod.io/#metadata), and to individual [mod files](https://docs.mod.io/#get-modfiles).
 * @member {string} profile_url URL to the mod.
 * @member {struct.Media} media Contains YouTube & Sketchfab links, aswell as media URL's of images for the mod.
 * @member {struct.Modfile} modfile The primary modfile for the mod.
 * @member {struct.ModStats} stats Numerous aggregate stats for the mod.
 * @member {struct.ModPlatforms} platforms Contains mod platform data.
 * @member {struct.MetadataKVP} metadata_kvp Contains key-value metadata.
 * @member {struct.ModTag} tags Contains mod tag data.
 * 
 * @struct_end
 */

/**
 * @struct ModPlatforms
 * @description > **mod.io Response Schema:** [Mod Platforms Object](https://docs.mod.io/#mod-platforms-object)
 * 
 * @member {string} platform A [target platform](https://docs.mod.io/#targeting-a-platform).
 * @member {real} modfile_live The unique id of the modfile that is currently live on the platform specified in the `platform` field.
 * 
 * @struct_end
 */

// Modules

/**
 * @module mods
 * @title Mods
 * 
 * @section_func
 * @desc Mods
 * @ref modio_mods_get
 * @ref modio_mods_add
 * @ref modio_mods_edit
 * @ref modio_mods_delete
 * @section_end
 * 
 * @section_struct Mod
 * @desc Structs
 * @ref Mod
 * @ref ModPlatforms
 * @section_end
 * 
 * @module_end
 */