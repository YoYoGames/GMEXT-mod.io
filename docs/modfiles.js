// Functions

/** 
 * @function modio_modfiles_get_list
 * @description > **mod.io Endpoint:** [Get Modfiles](https://docs.mod.io/#get-modfiles)
 * 
 * This function gets all files that are published for the corresponding mod. A successful request will return an array of ${struct.Modfile} structs. We recommended reading the [filtering documentation](https://docs.mod.io/#filtering) to return only the records you want.
 *
 * [[NOTE: If the game requires mod downloads to be initiated via the API, the `binary_url` returned will contain a verification hash. This hash must be supplied to get the modfile, and will expire after a certain period of time. Saving and reusing the `binary_url` won't work in this situation given its dynamic nature.]]
 * 
 * @param {real} _mod_id Unique id of the mod.
 * 
 * @param {function|method} _callback_success The function to trigger when the request is successful.
 * @param {function|method} _callback_failed The function to trigger when the request failed.
 * 
 * @param {real} _game_id OPTIONAL The ID of the game, defaults to the value set in the **Game ID** extension option if not provided
 * 
 * @returns {struct.GetModfiles}
 * 
 * @function_end
*/
function modio_modfiles_get_list() {}

/** 
 * @function modio_modfiles_get
 * @description > **mod.io Endpoint:** [Get Modfile](https://docs.mod.io/#get-modfile)
 * 
 * This function gets a file. A successful request will return a single ${struct.Modfile} struct.
 *
 * [[NOTE: If the [game](https://docs.mod.io/#edit-game) requires mod downloads to be initiated via the API, the `binary_url` returned will contain a verification hash. This hash must be supplied to get the modfile, and will expire after a certain period of time. Saving and reusing the `binary_url` won't work in this situation given its dynamic nature.]]
 * 
 * @param {real} _mod_id Unique id of the mod.
 * @param {real} _file_id Unique id of the mod file.
 * 
 * @param {function|method} _callback_success The function to trigger when the request is successful.
 * @param {function|method} _callback_failed The function to trigger when the request failed.
 * 
 * @param {real} _game_id OPTIONAL The ID of the game, defaults to the value set in the **Game ID** extension option if not provided
 * 
 * @returns {struct.Modfile}
 * 
 * @function_end
*/
function modio_modfiles_get() {}

/** 
 * @function modio_modfiles_add
 * @description > **mod.io Endpoint:** [Add Modfile](https://docs.mod.io/#add-modfile)
 * 
 * This function uploads a file for the corresponding mod. A successful request will return the newly created ${struct.Modfile} struct. Ensure that the release you are uploading is stable and free from any critical issues. Files are scanned upon upload, any users who upload malicious files will have their accounts closed.
 *
 * [[NOTE: This endpoint does not support `input_json` even if you base64-encode your file, due to the already-large file sizes of some releases and base64-encoding inflating the filesize.]]
 * 
 * @param {real} _mod_id Unique id of the mod.
 * @param {real} _filedata The binary file for the release. File must be zipped and cannot exceed 500MB in filesize.
 * 
 * - Filenames cannot contain any of the following characters: `\ / ? " < > | : *`
 * - Mods which span multiple game directories are not supported unless the game manages this
 * - Mods which overwrite files are not supported unless the game manages this
 * 
 * @param {struct} _optionals
 * 
 * - upload_id (${type.string}) Required if the filedata parameter is omitted. The UUID of a completed [multipart upload session](https://docs.mod.io/#complete-multipart-upload-session).
 * - version (${type.string}) Version of the file release (recommended format 1.0.0 - MAJOR.MINOR.PATCH).
 * - changelog (${type.string}) Changelog of this release.
 * - active (${type.boolean}) Default value is `true`. Flag this upload as the current release, this will change the `modfile` field on the parent mod to the `id` of this file after upload.
 * 
 *   [[NOTE: If the `active` parameter is `true`, a `MODFILE_CHANGED` event (${function.modio_events_get_list}) will be fired, so game clients know there is an update available for this mod.``
 * 
 * - filehash (${type.string}) MD5 of the submitted file. When supplied the MD5 will be compared against the uploaded files MD5. If they don't match a `422 Unprocessible Entity` error will be returned.
 * - metadata_blob (${type.string}) Metadata stored by the game developer which may include properties such as what version of the game this file is compatible with.
 * - platforms (${type.array} of ${type.string}) An array containing one or more [platforms](https://docs.mod.io/#targeting-a-platform) this file is targeting. Valid values can be found under the [targeting a platform](https://docs.mod.io/#targeting-a-platform) section.
 * 
 * @param {function|method} _callback_success The function to trigger when the request is successful.
 * @param {function|method} _callback_failed The function to trigger when the request failed.
 * 
 * @param {real} _game_id OPTIONAL The ID of the game, defaults to the value set in the **Game ID** extension option if not provided
 * 
 * @returns {struct.Modfile}
 * 
 * @function_end
*/
function modio_modfiles_add() {}

/** 
 * @function modio_modfiles_edit
 * @description > **mod.io Endpoint:** [Edit Modfile](https://docs.mod.io/#edit-modfile)
 * 
 * This function edits the details of a published file. If you want to update fields other than the `changelog`, `version` and `active` status, you should add a new file instead. A successful request will return updated ${struct.Modfile} struct.
 * 
 * @param {real} _mod_id Unique id of the mod.
 * @param {real} _mod_file Unique id of the mod_file.
 * @param {struct} _optionals
 * 
 * - version (${type.string}) Version of the file release (recommended format 1.0.0 - MAJOR.MINOR.PATCH)
 * - changelog (${type.string}) Changelog of this release.
 * - active (${type.boolean}) Flag this upload as the current release.
 * 
 * [[NOTE: If the active parameter causes the parent mod's `modfile` parameter to change, a `MODFILE_CHANGED` event (${function.modio_events_get_list}) will be fired, so game clients know there is an update available for this mod.]]
 * 
 * - metadata_blob (${type.string}) Metadata stored by the game developer which may include properties such as what version of the game this file is compatible with
 * 
 * @param {function|method} _callback_success The function to trigger when the request is successful.
 * @param {function|method} _callback_failed The function to trigger when the request failed.
 * 
 * @param {real} _game_id OPTIONAL The ID of the game, defaults to the value set in the **Game ID** extension option if not provided
 * 
 * @returns {struct.Modfile}
 * 
 * @function_end
*/
function modio_modfiles_edit() {}

/** 
 * @function modio_modfiles_delete
 * @description > **mod.io Endpoint:** [Delete Modfile](https://docs.mod.io/#delete-modfile)
 * 
 * This function deletes a modfile. A successful request will return `204 No Content`.
 * 
 * [[NOTE: A modfile can never be removed if it is the current active release for the corresponding mod regardless of user permissions. Furthermore, this ability is only available if you are authenticated as the game administrator for this game **or** are the original uploader of the modfile.]]
 * 
 * @param {real} _mod_id Unique id of the mod.
 * @param {real} _file_id Unique id of the mod_file.
 * 
 * @param {function|method} _callback_success The function to trigger when the request is successful.
 * @param {function|method} _callback_failed The function to trigger when the request failed.
 * 
 * @param {real} _game_id OPTIONAL The ID of the game, defaults to the value set in the **Game ID** extension option if not provided
 * 
 * @function_end
*/
function modio_modfiles_delete() {}

/** 
 * @function modio_modfiles_platforms
 * @description > **mod.io Endpoint:** [Manage Platform Status](https://docs.mod.io/#manage-platform-status)
 * 
 * This function manages the platform status of a particular modfile. This endpoint does not set any file live, instead it allows you to approve and deny new uploads. To set a file as the live file for the approved platforms after you have reviewed them, you must call ${function.modio_modfiles_edit} with the active flag enabled.
 * 
 * [[NOTE: This is ony applicable if the parent game has cross-platform moderation enabled. A successful request will return the updated ${struct.Modfile} struct.]]
 * 
 * @param {real} _mod_id Unique id of the mod.
 * @param {real} _file_id Unique id of the mod_file.
 * 
 * @param {struct} _optionals
 * 
 * - approved (${type.array}) An array containing one or more [platform strings](https://docs.mod.io/#targeting-a-platform) that the specified modfile is approved for.
 * - denied (${type.array}) An array containing one or more [platform strings](https://docs.mod.io/#targeting-a-platform) that the specified modfile is denied for.
 * 
 * [[NOTE: You cannot mark a live modfile as denied, if a modfile is live the only option to remove it is to set another existing modfile as the live modfile for that platform using ${function.modio_modfiles_edit}, or add a new modfile using ${function.modio_modfiles_add}.]]
 * 
 * @param {function|method} _callback_success The function to trigger when the request is successful.
 * @param {function|method} _callback_failed The function to trigger when the request failed.
 * 
 * @param {real} _game_id OPTIONAL The ID of the game, defaults to the value set in the **Game ID** extension option if not provided
 * 
 * @returns {struct.Modfile}
 * 
 * @function_end
*/
function modio_modfiles_platforms() {}

// Structs

// Modules

/**
 * @module modfiles
 * @title Modfiles
 * 
 * @section_func
 * @ref modio_modfiles_get_list
 * @ref modio_modfiles_get
 * @ref modio_modfiles_add
 * @ref modio_modfiles_edit
 * @ref modio_modfiles_delete
 * @ref modio_modfiles_platforms
 * @section_end
 * 
 * @module_end
 */