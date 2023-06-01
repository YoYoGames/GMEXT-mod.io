// Functions

/** 
 * @function modio_general_get_resource_owner
 * @description > **mod.io Endpoint:** [Get Resource Owner](https://docs.mod.io/#get-resource-owner) (`POST /general/ownership`)
 * 
 * <br />
 * 
 * Get the user that is the original submitter of a resource. A successful request will return a single ${struct.User} struct.
 * 
 * [[NOTE: Mods and games can be managed by teams of users, for the most accurate information you should use the Team endpoints.]]
 * 
 * @param {string} resource_type Type of resource you are checking the ownership of. Must be one of the following values: "games", "mods" and "files"
 * @param {real} resource_id Unique id of the resource you are checking the ownership of.
 * 
 * @param {function|method} callback_success The function to trigger when the request is successful.
 * @param {function|method} callback_failed The function to trigger when the request failed.
 * 
 * @function_end
*/
function modio_general_get_resource_owner() {}

// Structs

/**
 * @struct Avatar
 * @description > **mod.io Response Schema:** [Avatar Object](https://docs.mod.io/#avatar-object)
 * 
 * @member {string} filename Avatar filename including extension.
 * @member {string} original URL to the full-sized avatar.
 * @member {string} thumb_50x50 URL to the small avatar thumbnail.
 * @member {string} thumb_100x100 URL to the medium avatar thumbnail.
 * 
 * @struct_end
 */

/**
 * @struct Download
 * @description > **mod.io Response Schema:** [Download Object](https://docs.mod.io/#download-object)
 * 
 * @member {string} binary_url URL to download the file from the mod.io CDN.
 * 
 * [[NOTE: If the [game](https://docs.mod.io/#edit-game) requires mod downloads to be initiated via the API, the `binary_url` returned will contain a verification hash. This hash must be supplied to get the modfile, and will expire after a certain period of time. Saving and reusing the `binary_url` won't work in this situation given its dynamic nature.]]
 * 
 * @member {int64} date_expires Unix timestamp of when the `binary_url` will expire.
 * 
 * @struct_end
 */

/**
 * @struct HeaderImage
 * @description > **mod.io Response Schema:** [Header Image Object](https://docs.mod.io/#header-image-object)
 * 
 * @member {string} filename Header image filename including extension.
 * @member {string} original URL to the full-sized header image.
 * 
 * @struct_end
 */

/**
 * @struct Icon
 * @description > **mod.io Response Schema:** [Icon Object](https://docs.mod.io/#icon-object)
 * 
 * @member {string} filename Icon filename including extension.
 * @member {string} original URL to the full-sized icon.
 * @member {string} thumb_64x64 URL to the small icon thumbnail.
 * @member {string} thumb_128x128 URL to the medium icon thumbnail.
 * @member {string} thumb_256x256 URL to the large icon thumbnail.
 * 
 * @struct_end
 */

/**
 * @struct Image
 * @description > **mod.io Response Schema:** [Image Object](https://docs.mod.io/#image-object)
 * 
 * @member {string} filename Image filename including extension.
 * @member {string} original URL to the full-sized image.
 * @member {string} thumb_64x64 URL to the small icon thumbnail.
 * @member {string} thumb_320x180 URL to the image thumbnail.
 * @member {string} thumb_1280x720 URL to the image thumbnail.
 * 
 * @struct_end
 */

/**
 * @struct Logo
 * @description > **mod.io Response Schema:** [Logo Object](https://docs.mod.io/#logo-object)
 * 
 * @member {string} filename Logo filename including extension.
 * @member {string} original URL to the full-sized logo.
 * @member {string} thumb_320x180 URL to the small logo thumbnail.
 * @member {string} thumb_640x360 URL to the medium logo thumbnail.
 * @member {string} thumb_1280x720 URL to the large logo thumbnail.
 * 
 * @struct_end
 */

/**
 * @struct ModMedia
 * @description > **mod.io Response Schema:** [Mod Media Object](https://docs.mod.io/#mod-media-object)
 * 
 * @member {string[]} youtube Array of YouTube links.
 * @member {string[]} sketchfab Array of SketchFab links.
 * @member {struct.Image[]} images Array of image objects (a gallery).
 * 
 * @struct_end
 */

/**
 * @struct Message
 * @description > **mod.io Response Schema:** [Message Object](https://docs.mod.io/#message-object)
 * 
 * @member {real} code  [HTTP status code](https://docs.mod.io/#response-codes) of response.
 * @member {string} message The server response to your request. Responses will vary depending on the endpoint, but the object structure will persist.
 * 
 * @struct_end
 */

/**
 * @struct MetadataKVP
 * @description > **mod.io Response Schema:** [Metadata KVP Object](https://docs.mod.io/#metadata-kvp-object)
 * 
 * @member {string} metakey The key of the key-value pair.
 * @member {string} metavalue The value of the key-value pair.
 * 
 * @struct_end
 */

/**
 * @struct Theme
 * @description > **mod.io Response Schema:** [Theme Object](https://docs.mod.io/#theme-object)
 * 
 * @member {string} primary The primary hex color code.
 * @member {string} dark The dark hex color code.
 * @member {string} light The light hex color code.
 * @member {string} success The success hex color code.
 * @member {string} warning The warning hex color code.
 * @member {string} danger The danger hex color code.
 * 
 * @struct_end
 */

// Modules

/**
 * @module general
 * @title General
 * 
 * @section_func
 * @desc General
 * @ref modio_general_get_resource_owner
 * @section_end
 * 
 * @section_struct
 * @desc Structs
 * @ref Avatar
 * @ref Download
 * @ref HeaderImage
 * @ref Icon
 * @ref Image
 * @ref Logo
 * @ref Message
 * @ref MetadataKVP
 * @ref ModMedia
 * @ref Theme
 * @section_end
 * 
 * @module_end
 */