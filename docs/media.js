// Functions

/** 
 * @function modio_media_game_add
 * @description > **mod.io Endpoint:** [Add Game Media](https://docs.mod.io/#add-game-media) (`POST /games/{game-id}/media`)
 * 
 * <br />
 * 
 * Upload new media to a game. The request `Content-Type` header must be `multipart/form-data` to submit image files. Any request you make to this endpoint should contain a binary file for each of the fields you want to update below. Successful request will return Message Object.
 * 
 * [[NOTE: You can also add media to [your games profile](https://mod.io/me/library) on the mod.io website. This is the recommended approach.]]
 * 
 * @param {struct} optionals
 * 
 * - logo (${type.string}) Image file which will represent your game's logo. Must be gif, jpg or png format and cannot exceed 8MB in filesize. Dimensions must be at least 640x360 and we recommended you supply a high resolution image with a 16 / 9 ratio. mod.io will use this logo to create three thumbnails with the dimensions of 320x180, 640x360 and 1280x720.
 * - icon (${type.string}) Image file which will represent your games icon. Must be gif, jpg or png format and cannot exceed 1MB in filesize. Dimensions must be at least 64x64 and a transparent png that works on a colorful background is recommended. mod.io will use this icon to create three thumbnails with the dimensions of 64x64, 128x128 and 256x256.
 * - header (${type.string}) Image file which will represent your games header. Must be gif, jpg or png format and cannot exceed 256KB in filesize. Dimensions of 400x100 and a light transparent png that works on a dark background is recommended.
 * 
 * @param {function|method} callback_success The function to trigger when the request is successful.
 * @param {function|method} callback_failed The function to trigger when the request failed.
 * 
 * @returns {struct.Message}
 * 
 * @function_end
*/
function modio_media_game_add() {}

/** 
 * @function modio_media_mod_add
 * @description > **mod.io Endpoint:** [Add Mod Media](https://docs.mod.io/#add-mod-media) (`POST /games/{game-id}/mods/{mod-id}/media`)
 * 
 * <br />
 * 
 * This endpoint is very flexible and will add any images posted to the mods gallery regardless of their body name providing they are a valid image. The request `Content-Type` header must be `multipart/form-data` to submit image files. Successful request will return a {struct.Message} struct.
 *
 * [[NOTE: You can also add media to [your mods profile](https://mod.io/me/library) on the mod.io website. This is the easiest way.]]
 * 
 * @param {struct} optionals_files
 * 
 * @param {string} logo Image file which will represent your games logo. Must be gif, jpg or png format and cannot exceed 8MB in filesize. Dimensions must be at least 640x360 and we recommended you supply a high resolution image with a 16 / 9 ratio. mod.io will use this logo to create three thumbnails with the dimensions of 320x180, 640x360 and 1280x720.
 * @param {string} images Zip archive of images to add to the mods gallery. Only valid gif, jpg and png images in the zip file will be processed. The filename **must be images.zip**, all other zips will be ignored. Alternatively you can POST one or more images to this endpoint and they will be detected and added to the mods gallery.
 * 
 * @param {struct} optionals
 * 
 * @param {string} youtube Full Youtube link(s) you want to add. Every Youtube link to add requires a separate field with youtube[] as the key (eg. youtube[]=https://www.youtube.com/watch?v=IGVZOLV9SPo, youtube[]=https://www.youtube.com/watch?v=5nY6fjZ3EUc)
 * @param {string} sketchfab Full Sketchfab link(s) you want to add. Every Sketchfab link to add requires a separate field with sketchfab[] as the key (eg. sketchfab[]=https://sketchfab.com/models/71f04e390ff54e5f8d9a51b4e1caab7e, sketchfab[]=https://sketchfab.com/models/5c85e649dd854cb58c2b9af081ebb0ff)
 * 
 * @param {function|method} callback_success The function to trigger when the request is successful.
 * @param {function|method} callback_failed The function to trigger when the request failed.
 * 
 * @returns {struct.Message}
 * 
 * @function_end
*/
function modio_media_mod_add() {}

/** 
 * @function modio_media_mod_delete
 * @description > **mod.io Endpoint:** [Delete Mod Media](https://docs.mod.io/#delete-mod-media) (`DELETE /games/{game-id}/mods/{mod-id}/media`)
 * 
 * <br />
 * 
 * Delete images, sketchfab or youtube links from a mod profile. A successful request will return `204 No Content`.
 * 
 * [[NOTE: You can also delete media from [your mods profile](https://mod.io/me/library) on the mod.io website. This is the easiest way.]]
 * 
 * @param {struct} optionals
 * 
 * - youtube (${type.string}) Full Youtube link(s) you want to add. Every Youtube link to add requires a separate field with youtube[] as the key (eg. youtube[]=https://www.youtube.com/watch?v=IGVZOLV9SPo, youtube[]=https://www.youtube.com/watch?v=5nY6fjZ3EUc)
 * - sketchfab (${type.string}) Full Sketchfab link(s) you want to add. Every Sketchfab link to add requires a separate field with sketchfab[] as the key (eg. sketchfab[]=https://sketchfab.com/models/71f04e390ff54e5f8d9a51b4e1caab7e, sketchfab[]=https://sketchfab.com/models/5c85e649dd854cb58c2b9af081ebb0ff)
 * 
 * @param {function|method} callback_success The function to trigger when the request is successful.
 * @param {function|method} callback_failed The function to trigger when the request failed.
 * 
 * @function_end
*/
function modio_media_mod_delete() {}

/** 
 * @function modio_media_mod_reorder
 * @description > **mod.io Endpoint:** [Reorder Mod Media](https://docs.mod.io/#reorder-mod-media) (`PUT /games/{game-id}/mods/{mod-id}/media/reorder`)
 * 
 * <br />
 * 
 * Reorder images, Sketchfab or YouTube links from a mod profile. A duccessful request will return `204 No Content`.
 * 
 * [[NOTE: You can only reorder existing media, any differences in the media arrays will result in a `400 Bad Request response.`]]
 * 
 * @param {struct} optionals
 * 
 * - images (${type.string}) Filename of the image(s) you want to reorder. Every image to delete requires a separate field with images[] as the key (eg. images[]=filename1.jpg, images[]=filename2.jpg)
 * - youtube (${type.string}) Full Youtube link(s) you want to reorder. Every Youtube link to delete requires a separate field with youtube[] as the key (eg. youtube[]=https://www.youtube.com/watch?v=IGVZOLV9SPo, youtube[]=https://www.youtube.com/watch?v=5nY6fjZ3EUc)
 * - sketchfab (${type.string}) Full Sketchfab link(s) you want to reorder. Every Sketchfab link to delete requires a separate field with sketchfab[] as the key (eg. sketchfab[]=https://sketchfab.com/models/71f04e390ff54e5f8d9a51b4e1caab7e, sketchfab[]=https://sketchfab.com/models/5c85e649dd854cb58c2b9af081ebb0ff)
 * 
 * @param {function|method} callback_success The function to trigger when the request is successful.
 * @param {function|method} callback_failed The function to trigger when the request failed.
 * 
 * @function_end
*/
function modio_media_mod_reorder() {}

// Modules

/**
 * @module media
 * @title Media
 * 
 * @section_func 
 * @desc Media
 * @ref modio_media_game_add
 * @ref modio_media_mod_add
 * @ref modio_media_mod_delete
 * @ref modio_media_mod_reorder
 * @section_end
 * 
 * @module_end
 */