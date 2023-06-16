// Functions

/** 
 * @function modio_media_game_add
 * @description > **mod.io Endpoint:** [Add Game Media](https://docs.mod.io/#add-game-media)
 * 
 * <br />
 * 
 * This function uploads new media to a game. A successful request will return a ${struct.Message} struct.
 * 
 * [[NOTE: You can also add media to [your games profile](https://mod.io/me/library) on the mod.io website. This is the recommended approach.]]
 * 
 * @param {struct} _optionals
 * 
 * - logo (${type.string}) Image file which will represent your game's logo. Must be gif, jpg or png format and cannot exceed 8MB in filesize. Dimensions must be at least 640x360 and we recommended you supply a high resolution image with a 16 / 9 ratio. mod.io will use this logo to create three thumbnails with the dimensions of 320x180, 640x360 and 1280x720.
 * - icon (${type.string}) Image file which will represent your games icon. Must be gif, jpg or png format and cannot exceed 1MB in filesize. Dimensions must be at least 64x64 and a transparent png that works on a colorful background is recommended. mod.io will use this icon to create three thumbnails with the dimensions of 64x64, 128x128 and 256x256.
 * - header (${type.string}) Image file which will represent your games header. Must be gif, jpg or png format and cannot exceed 256KB in filesize. Dimensions of 400x100 and a light transparent png that works on a dark background is recommended.
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
function modio_media_game_add() {}

/** 
 * @function modio_media_mod_add
 * @description > **mod.io Endpoint:** [Add Mod Media](https://docs.mod.io/#add-mod-media)
 * 
 * <br />
 * 
 * This function adds any images posted to the mods gallery regardless of their body name providing they are a valid image. A successful request will return a ${struct.Message} struct.
 *
 * [[NOTE: You can also add media to [your mods profile](https://mod.io/me/library) on the mod.io website. This is the easiest way.]]
 * 
 * @param {real} _mod_id Unique id of the mod.
 * 
 * @param {struct} _optionals_files
 * 
 * - logo (${type.string}) Image file which will represent your game's logo. Must be gif, jpg or png format and cannot exceed 8MB in filesize. Dimensions must be at least 640x360 and we recommended you supply a high resolution image with a 16 / 9 ratio. mod.io will use this logo to create three thumbnails with the dimensions of 320x180, 640x360 and 1280x720.
 * - images (${type.string}) Zip archive of images to add to the mods gallery. Only valid gif, jpg and png images in the zip file will be processed. The filename **must be images.zip**, all other zips will be ignored. Alternatively you can POST one or more images to this endpoint and they will be detected and added to the mods gallery.
 * 
 * @param {struct} _optionals_strings
 * 
 * - youtube (${type.string}) Full Youtube link(s) you want to add. Every Youtube link to add requires a separate field with youtube[] as the key (eg. youtube[]=https://www.youtube.com/watch?v=IGVZOLV9SPo, youtube[]=https://www.youtube.com/watch?v=5nY6fjZ3EUc)
 * - sketchfab (${type.string}) Full Sketchfab link(s) you want to add. Every Sketchfab link to add requires a separate field with sketchfab[] as the key (eg. sketchfab[]=https://sketchfab.com/models/71f04e390ff54e5f8d9a51b4e1caab7e, sketchfab[]=https://sketchfab.com/models/5c85e649dd854cb58c2b9af081ebb0ff)
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
function modio_media_mod_add() {}

/** 
 * @function modio_media_mod_delete
 * @description > **mod.io Endpoint:** [Delete Mod Media](https://docs.mod.io/#delete-mod-media)
 * 
 * <br />
 * 
 * Delete images, sketchfab or youtube links from a mod profile.
 * 
 * [[NOTE: You can also delete media from [your mods profile](https://mod.io/me/library) on the mod.io website. This is the easiest way.]]
 * 
 * @param {real} _mod_id Unique id of the mod.
 * 
 * @param {struct} _optionals
 * 
 * - youtube (${type.string}) Full Youtube link(s) you want to add. Every Youtube link to add requires a separate field with youtube[] as the key (eg. youtube[]=https://www.youtube.com/watch?v=IGVZOLV9SPo, youtube[]=https://www.youtube.com/watch?v=5nY6fjZ3EUc)
 * - sketchfab (${type.string}) Full Sketchfab link(s) you want to add. Every Sketchfab link to add requires a separate field with sketchfab[] as the key (eg. sketchfab[]=https://sketchfab.com/models/71f04e390ff54e5f8d9a51b4e1caab7e, sketchfab[]=https://sketchfab.com/models/5c85e649dd854cb58c2b9af081ebb0ff)
 * 
 * @param {function|method} _callback_success The function to trigger when the request is successful.
 * @param {function|method} _callback_failed The function to trigger when the request failed.
 * 
 * @param {real} _game_id OPTIONAL The ID of the game, defaults to the value set in the **Game ID** extension option if not provided
 * 
 * @function_end
*/
function modio_media_mod_delete() {}

/** 
 * @function modio_media_mod_reorder
 * @description > **mod.io Endpoint:** [Reorder Mod Media](https://docs.mod.io/#reorder-mod-media)
 * 
 * <br />
 * 
 * Reorder images, Sketchfab or YouTube links from a mod profile.
 * 
 * [[NOTE: You can only reorder existing media, any differences in the media arrays will result in a failed request.]]
 * 
 * @param {real} _mod_id Unique id of the mod.
 * 
 * @param {struct} _optionals
 * 
 * - images (${type.string}) Filename of the image(s) you want to reorder. Every image to delete requires a separate field with images[] as the key (eg. images[]=filename1.jpg, images[]=filename2.jpg)
 * - youtube (${type.string}) Full Youtube link(s) you want to reorder. Every Youtube link to delete requires a separate field with youtube[] as the key (eg. youtube[]=https://www.youtube.com/watch?v=IGVZOLV9SPo, youtube[]=https://www.youtube.com/watch?v=5nY6fjZ3EUc)
 * - sketchfab (${type.string}) Full Sketchfab link(s) you want to reorder. Every Sketchfab link to delete requires a separate field with sketchfab[] as the key (eg. sketchfab[]=https://sketchfab.com/models/71f04e390ff54e5f8d9a51b4e1caab7e, sketchfab[]=https://sketchfab.com/models/5c85e649dd854cb58c2b9af081ebb0ff)
 * 
 * @param {function|method} _callback_success The function to trigger when the request is successful.
 * @param {function|method} _callback_failed The function to trigger when the request failed.
 * 
 * @param {real} _game_id OPTIONAL The ID of the game, defaults to the value set in the **Game ID** extension option if not provided
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
 * @ref modio_media_game_add
 * @ref modio_media_mod_add
 * @ref modio_media_mod_delete
 * @ref modio_media_mod_reorder
 * @section_end
 * 
 * @module_end
 */