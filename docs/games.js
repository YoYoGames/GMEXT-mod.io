// Functions

/** 
 * @function modio_games_get_list
 * @description > **mod.io Endpoint:** [Get Games](https://docs.mod.io/#get-games) (`GET /games`)
 * 
 * Get all games. A successful request will return an array of ${struct.Game}. We recommend reading the [filtering documentation](https://docs.mod.io/#filtering) to return only the records you want.
 * 
 * @param {function|method} callback_success The function to trigger when the request is successful.
 * @param {function|method} callback_failed The function to trigger when the request failed.
 * 
 * @function_end
*/
function modio_games_get_list() {}

/** 
 * @function modio_games_get
 * @description > **mod.io Endpoint:** [Get Game](https://docs.mod.io/#get-games) (`GET /games/{game-id}`)
 * 
 * This function gets a game. Successful request will return a single ${struct.Game}. We recommended reading the filtering documentation to return only the records you want.
 * 
 * @param {function|method} callback_success The function to trigger when the request is successful.
 * @param {function|method} callback_failed The function to trigger when the request failed.
 * 
 * @function_end
*/
function modio_games_get() {}

// Structs

/**
 * @struct Game
 * @desc https://docs.mod.io/#game-object
 * 
 * @member {real} id Unique game id.
 * @member {real} status Status of the game (see status and visibility for details):
 * 
 * 0 = Not Accepted
 * 1 = Accepted
 * 3 = Deleted
 * 
 * @member {int64} date_added Unix timestamp of date game was registered.
 * @member {int64} date_updated Unix timestamp of date game was updated.
 * @member {int64} date_live Unix timestamp of date game was set live.
 * @member {real} presentation_option Presentation style used on the mod.io website:
 * 
 * 0 = Grid View: Displays mods in a grid
 * 1 = Table View: Displays mods in a table
 * 
 * @member {real} submission_option Submission process modders must follow:
 * 
 * 0 = Mod uploads must occur via the API using a tool created by the game developers
 * 1 = Mod uploads can occur from anywhere, including the website and API
 * 
 * @member {real} curation_option Curation process used to approve mods:
 * 
 * 0 = No curation: Mods are immediately available to play
 * 2 = Full curation: All mods must be accepted by someone to be listed
 * 
 * @member {real} community_options Community features enabled for this game:
 * 
 * 0 = All of the options below are disabled
 * 1 = Enable comments
 * 2 = Enable guides
 * 4 = Pin on homepage
 * 8 = Show on homepage
 * 16 = Show more on homepage
 * 32 = Allow change status
 * ? = Add the options you want together, to enable multiple features (see [BITWISE fields](https://docs.mod.io/#bitwise-and-bitwise-and))
 * 
 * @member {real} api_access_options Level of API access allowed by this game:
 * 
 * 0 = All of the options below are disabled
 * 1 = Allow 3rd parties to access this games API endpoints
 * 2 = Allow mods to be downloaded directly (if disabled all download URLs will contain a frequently changing verification hash to stop unauthorized use)
 * ? = Add the options you want together, to enable multiple features (see [BITWISE fields](https://docs.mod.io/#bitwise-and-bitwise-and))
 * 
 * @member {real} maturity_options Mature content setup for this game:
 * 
 * 0 = Don't allow mature content in mods
 * 1 = Allow mature content in mods
 * 2 = This game is for mature audiences only
 * ? = Add the options you want together, to enable multiple features (see [BITWISE fields](https://docs.mod.io/#bitwise-and-bitwise-and))
 * 
 * @member {string} ugc_name Word used to describe user-generated content (mods, items, addons etc).
 * @member {struct.Icon} icon Contains media URL's to the icon for the game.
 * @member {struct.Logo} logo Contains media URL's to the logo for the game.
 * @member {struct.HeaderImage} header Contains media URL's to the preview header for the game.
 * @member {string} name Name of the game.
 * @member {string} name_id Path for the game on mod.io. For example: https://mod.io/g/rogue-knight 
 * @member {string} summary Summary of the games mod support.
 * @member {string} instructions A guide about creating and uploading mods for this game to mod.io (applicable if submission_option = 0).
 * @member {string} instructions_url Link to a mod.io guide, your modding wiki or a page where modders can learn how to make and submit mods to your games profile.
 * @member {string} profile_url URL to the game.
 * @member {struct.GameStats} stats Numerous aggregate stats for the game.
 * @member {struct.Theme} theme Theme color values for the game.
 * @member {struct.GameOtherUrls} other_urls Creator defined URLs to share.
 * @member {struct.GameTagOption} tag_options Groups of tags configured by the game developer, that mods can select. Hidden tags will only be returned if `show_hidden_tags` is set to `true`.
 * @member {struct.GamePlatforms} platforms Platforms that are supported by this title.
 * 
 * @struct_end
 * 
 */

/**
 * @struct GameOtherUrls
 * @description GameOtherUrls struct
 * 
 * @member {string} label Label of the link you are sharing.
 * @member {string} url The URL to be associated with the label.
 * 
 * @struct_end
 */

/**
 * @struct GamePlatforms
 * @description GamePlatforms struct
 * 
 * @member {string} platform A [target platform](https://docs.mod.io/#targeting-a-platform).
 * @member {string} label A presentable label of the platform.
 * @member {boolean} moderated Is this platform moderated by game admins? If false, then user submissions for the platform will be available immediately providing the game has mod curation disabled.
 * 
 * @struct_end
 */

// Modules

/**
 * @module games
 * @title Games
 * 
 * @section_func
 * @desc The following functions are part of the Games module: 
 * 
 * @ref modio_games_get_list
 * @ref modio_games_get
 * 
 * @section_end
 * 
 * @section_struct
 * @ref Game
 * @ref GameOtherUrls
 * @ref GamePlatforms
 * @section_end
 * 
 * @module_end
 */