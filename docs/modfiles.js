// Functions

/** 
 * @function modio_modfiles_get_list
 * @description > **mod.io Endpoint:** [Get Modfiles](https://docs.mod.io/#get-modfiles) (`GET /games/{game-id}/mods/{mod-id}/files`)
 * 
 * Get all files that are published for the corresponding mod. Successful request will return an array of ${struct.Modfile} structs. We recommended reading the filtering documentation to return only the records you want.
 *
 * [[NOTE: If the game requires mod downloads to be initiated via the API, the `binary_url` returned will contain a verification hash. This hash must be supplied to get the modfile, and will expire after a certain period of time. Saving and reusing the binary_url won't work in this situation given its dynamic nature.]]
 * 
 * @param {real} mod_id Unique id of the mod.
 * 
 * @param {function|method} callback_success The function to trigger when the request is successful.
 * @param {function|method} callback_failed The function to trigger when the request failed.
 * 
 * @function_end
*/
function modio_modfiles_get_list() {}

/** 
 * @function modio_modfiles_get
 * @description > **mod.io Endpoint:** [Get Modfile](https://docs.mod.io/#get-modfile) (`GET /games/{game-id}/mods/{mod-id}/files/{file-id}`)
 * 
 * Get a file. A successful request will return a single ${struct.Modfile}.
 *
 * [[NOTE: If the [game](https://docs.mod.io/#edit-game) requires mod downloads to be initiated via the API, the binary_url returned will contain a verification hash. This hash must be supplied to get the modfile, and will expire after a certain period of time. Saving and reusing the `binary_url` won't work in this situation given its dynamic nature.]]
 * 
 * @param {real} mod_id Unique id of the mod.
 * @param {real} file_id Unique id of the mod file.
 * 
 * @param {function|method} callback_success The function to trigger when the request is successful.
 * @param {function|method} callback_failed The function to trigger when the request failed.
 * 
 * @function_end
*/
function modio_modfiles_get() {}

/** 
 * @function modio_modfiles_add
 * @description > **mod.io Endpoint:** [Add Modfile](https://docs.mod.io/#add-modfile) (`POST /games/{game-id}/mods/{mod-id}/files`)
 * 
 * Upload a file for the corresponding mod. A successful request will return the newly created Modfile Object. Ensure that the release you are uploading is stable and free from any critical issues. Files are scanned upon upload, any users who upload malicious files will have their accounts closed.
 *
 * NOTE: This endpoint does not support `input_json` even if you base64-encode your file, due to the already-large file sizes of some releases and base64-encoding inflating the filesize.
 *
 * NOTE: To upload files greater than 100MB, we recommend using the Multipart Uploads system. This endpoint supports files up to a max of 500MB in size.
 * 
 * @param {real} mod_id Unique id of the mod.
 * @param {real} filedata The binary file for the release. File must be zipped and cannot exceed 500MB in filesize (see [Multipart Uploads](https://docs.mod.io/#create-multipart-upload-session) to upload larger files)
 * 
 * - Filenames cannot contain any of the following characters: `\ / ? " < > | : *`
 * - Mods which span multiple game directories are not supported unless the game manages this
 * - Mods which overwrite files are not supported unless the game manages this
 * 
 * @param {struct} optionals
 * 
 * - upload_id (${type.string}) Required if the filedata parameter is omitted. The UUID of a completed [multipart upload session](https://docs.mod.io/#complete-multipart-upload-session).
 * - version (${type.string}) Version of the file release (recommended format 1.0.0 - MAJOR.MINOR.PATCH).
 * - changelog (${type.string}) Changelog of this release.
 * - active (${type.boolean}) Default value is `true`. Flag this upload as the current release, this will change the `modfile` field on the parent mod to the `id` of this file after upload.
 * 
 *   NOTE: If the active parameter is true, a [MODFILE_CHANGED event](https://docs.mod.io/#get-mod-events) will be fired, so game clients know there is an update available for this mod.
 * 
 * - filehash (${type.string}) MD5 of the submitted file. When supplied the MD5 will be compared against the uploaded files MD5. If they don't match a `422 Unprocessible Entity` error will be returned.
 * - metadata_blob (${type.string}) Metadata stored by the game developer which may include properties such as what version of the game this file is compatible with.
 * - platforms (${type.array<string>}) An array containing one or more [platforms](https://docs.mod.io/#targeting-a-platform) this file is targeting. Valid values can be found under the [targeting a platform](https://docs.mod.io/#targeting-a-platform) section.
 * 
 * @param {function|method} callback_success The function to trigger when the request is successful.
 * @param {function|method} callback_failed The function to trigger when the request failed.
 * 
 * @function_end
*/
function modio_modfiles_add() {}

/** 
 * @function modio_modfiles_edit
 * @description > **mod.io Endpoint:** [Edit Modfile](https://docs.mod.io/#edit-modfile) (`PUT /games/{game-id}/mods/{mod-id}/files/{file-id}`)
 * 
 * Edit the details of a published file. If you want to update fields other than the `changelog`, `version` and `active` status, you should add a new file instead. A successful request will return updated ${struct.Modfile} struct.
 * 
 * @param {real} mod_id Unique id of the mod.
 * @param {real} mod_file Unique id of the mod_file.
 * @param {struct} optionals
 * 
 * - version (${type.string}) Version of the file release (recommended format 1.0.0 - MAJOR.MINOR.PATCH)
 * - changelog (${type.string}) Changelog of this release.
 * - active (${type.boolean}) Flag this upload as the current release.
 * 
 * [[NOTE: If the active parameter causes the parent mod's `modfile` parameter to change, a [MODFILE_CHANGED event](https://docs.mod.io/#get-mod-events) will be fired, so game clients know there is an update available for this mod.]]
 * 
 * - metadata_blob (${type.string}) Metadata stored by the game developer which may include properties such as what version of the game this file is compatible with
 * 
 * @param {function|method} callback_success The function to trigger when the request is successful.
 * @param {function|method} callback_failed The function to trigger when the request failed.
 * 
 * @function_end
*/
function modio_modfiles_edit() {}

/** 
 * @function modio_modfiles_delete
 * @description > **mod.io Endpoint:** [Delete Modfile](https://docs.mod.io/#delete-modfile) (`DELETE /games/{game-id}/mods/{mod-id}/files/{file-id}`)
 * 
 * Delete a modfile. A successful request will return `204 No Content`.
 * 
 * [[NOTE: A modfile can never be removed if it is the current active release for the corresponding mod regardless of user permissions. Furthermore, this ability is only available if you are authenticated as the game administrator for this game **or** are the original uploader of the modfile.]]
 * 
 * @param {real} mod_id Unique id of the mod.
 * @param {real} mod_file Unique id of the mod_file.
 * 
 * @param {function|method} callback_success The function to trigger when the request is successful.
 * @param {function|method} callback_failed The function to trigger when the request failed.
 * 
 * @function_end
*/
function modio_modfiles_delete() {}

/** 
 * @function modio_modfiles_platforms
 * @description > **mod.io Endpoint:** [Manage Platform Status](https://docs.mod.io/#manage-platform-status) (`POST /games/{game-id}/mods/{mod-id}/files/{file-id}/platforms`)
 * 
 * Manage the platform status of a particular modfile. This endpoint does not set any file live, instead it allows you to approve and deny new uploads. To set a file as the live file for the approved platforms after you have reviewed them, you must call the [Edit Modfile](https://docs.mod.io/#update-modfile) with the active flag enabled.
 * 
 * [[NOTE: This is ony applicable if the parent game has cross-platform moderation enabled. A successful request will return the updated ${struct.Modfile} struct.]]
 * 
 * @param {real} mod_id Unique id of the mod.
 * @param {real} mod_file Unique id of the mod_file.
 * 
 * @param {struct} optionals
 * 
 * - approved (${type.array}) An array containing one or more [platform strings](https://docs.mod.io/#targeting-a-platform) that the specified modfile is approved for.
 * - denied (${type.array}) An array containing one or more [platform strings](https://docs.mod.io/#targeting-a-platform) that the specified modfile is denied for.
 * 
 * [[NOTE: You cannot mark a live modfile as denied, if a modfile is live the only option to remove it is to set another [existing modfile](https://docs.mod.io/#edit-modfile) as the live modfile for that platform, or add a [new modfile](https://docs.mod.io/#add-modfile).]]
 * 
 * @param {function|method} callback_success The function to trigger when the request is successful.
 * @param {function|method} callback_failed The function to trigger when the request failed.
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
 * @section_func modfiles
 * @desc Modfiles
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