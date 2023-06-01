// Structs

/**
 * @struct AccessToken
 * @desc > **mod.io Response Schema:** [Access Token Object](https://docs.mod.io/#schemaaccess_token_object)
 * 
 * @member {real} code HTTP Response Code.
 * @member {string} access_token The user's access token.
 * @member {real} date_expires The Unix timestamp of the date this token will expire. Default is one year from issue date. See [Access Token Lifetime & Expiry](https://docs.mod.io/#making-requests).
 * 
 * @struct_end
 */

/**
 * @struct AgreementVersion
 * @desc > **mod.io Response Schema:** [Agreement Version Object](https://docs.mod.io/#agreement-version-object)
 * 
 * @member {real} id Unique id of the agreement.
 * @member {boolean} is_active Is the agreement currently active? (This can also be determined if date_live > 0).
 * @member {real} type The type of agreement. Can be one of the following:
 * 
 * 1 = Terms
 * 2 = Privacy
 * 3 = Developers
 * 4 = API
 * 5 = Payment
 * 6 = AUP
 * 
 * @member {struct.User} user No description
 * @member {real} date_added Unix timestamp of the date the agreement was added.
 * @member {real} date_updated Unix timestamp of the date the agreement was updated.
 * @member {real} date_live Unix timestamp of the date the agreement was set live.
 * @member {string} name Name of the agreement.
 * @member {string} changelog Changelog for version of this agreement.
 * @member {string} description The contents of the agreement
 * 
 * @struct_end
 */

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
 * @struct Comment
 * @description > **mod.io Response Schema:** [Comment Object](https://docs.mod.io/#comment-object)
 * 
 * @member {real} id Unique id of the comment.
 * @member {real} game_id Unique game id (if applicable).
 * @member {real} resource_id Unique id of the parent resource.
 * @member {struct.User} The user who published the comment.
 * @member {real} date_added Unix timestamp of date the comment was posted.
 * @member {real} reply_id Id of the parent comment this comment is replying to (can be 0 if the comment is not a reply).
 * @member {string} thread_position Levels of nesting in a comment thread. How it works:
 *
 * - The first comment will have the position '01'.
 * - The second comment will have the position '02'.
 * - If someone responds to the second comment the position will be '02.01'.
 * - A maximum of 3 levels is supported.
 * 
 * @member {real} karma Karma received for the comment (can be positive or negative).
 * @member {string} content Contents of the comment.
 * 
 * @struct_end
 */

/**
 * @struct Download
 * @description > **mod.io Response Schema:** [Download Object](https://docs.mod.io/#download-object)
 * 
 * @member {string} binary_url The URL to download the file from the mod.io CDN.
 * 
 * [[NOTE: If the [game](https://docs.mod.io/#edit-game) requires mod downloads to be initiated via the API, the `binary_url` returned will contain a verification hash. This hash must be supplied to get the modfile, and will expire after a certain period of time. Saving and reusing the `binary_url` won't work in this situation given its dynamic nature.]]
 * 
 * @member {real} date_expires Unix timestamp of when the `binary_url` will expire.
 * 
 * @struct_end
 */

/**
 * @struct Filehash
 * @description > **mod.io Response Schema:** [Filehash Object](https://docs.mod.io/#filehash-object)
 * 
 * @member {string} md5 MD5 hash of the file.
 * 
 * @struct_end
 */

/**
 * @struct Game
 * @desc > **mod.io Response Schema:** [Game Object](https://docs.mod.io/#game-object)
 * 
 * @member {real} id Unique game id.
 * @member {real} status Status of the game (see [status and visibility](https://docs.mod.io/#status-amp-visibility) for details):
 * 
 * 0 = Not Accepted
 * 1 = Accepted
 * 3 = Deleted
 * 
 * @member {real} date_added Unix timestamp of date game was registered.
 * @member {real} date_updated Unix timestamp of date game was updated.
 * @member {real} date_live Unix timestamp of date game was set live.
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
 * @member {real} monetisation_options Monetisation features mods can enable:
 * 
 * 0 = All of the options below are disabled
 * 1 = Enabled
 * 2 = Enable recognition
 * 4 = Enable marketplace
 * ? = Add the options you want together, to enable multiple features (see [BITWISE fields](https://docs.mod.io/#bitwise-and-bitwise-and))
 * 
 * @member {real} revenue_options Deprecated: Please use monetisation_options instead, this will be removed in subsequent API version.
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

/**
 * @struct GameStats
 * @description > **mod.io Response Schema:** [Game Stats Object](https://docs.mod.io/#game-stats-object)
 * 
 * @member {real} game_id Unique game id.
 * @member {real} mods_count_total Available mod count for the game.
 * @member {real} mods_downloads_today Mods downloaded today for the game.
 * @member {real} mods_downloads_total Total Mods downloaded for the game.
 * @member {real} mods_downloads_daily_average Average mods downloaded on a daily basis.
 * @member {real} mods_subscribers_total Number of total users who have subscribed to the mods for the game.
 * @member {real} date_expires Unix timestamp until this game's statistics are considered stale.
 * 
 * @struct_end
 */

/**
 * @struct GameTagOption
 * @desc > **mod.io Response Schema:** [Game Tag Option Object](https://docs.mod.io/#game-tag-option-object)
 * 
 * @member {string} name Name of the tag group.
 * @member {string} type Can multiple tags be selected via 'checkboxes' or should only a single tag be selected via a 'dropdown'.
 * @member {struct} tag_count_map List of tag names and the count of mods with these tags.
 * @member {boolean} hidden Groups of tags flagged as 'hidden' are intended to be used for filtering (eg. game version), but should not be displayed to users. Hidden tags will only be returned if `show_hidden_tags` is set to `true`.
 * @member {boolean} locked Groups of tags flagged as 'locked' are editable only if the authenticated user is a team member of the parent game. Useful for games to tag special functionality, which users can see and filter on (eg. competition winners).
 * @member {array<string>} tags Array of tags in this group.
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
 * @member {real} date_added Unix timestamp of date mod was registered.
 * @member {real} date_updated Unix timestamp of date mod was updated.
 * @member {real} date_live Unix timestamp of date mod was set live.
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
 * @member {struct.ModMedia} media Contains YouTube & Sketchfab links, aswell as media URL's of images for the mod.
 * @member {struct.Modfile} modfile The primary modfile for the mod.
 * @member {struct.ModStats} stats Numerous aggregate stats for the mod.
 * @member {struct.ModPlatforms} platforms Contains mod platform data.
 * @member {struct.MetadataKVP} metadata_kvp Contains key-value metadata.
 * @member {struct.ModTag} tags Contains mod tag data.
 * 
 * @struct_end
 */

/**
 * @struct ModDependencies
 * @description > **mod.io Response Schema:** [Mod Dependencies Object](https://docs.mod.io/#mod-dependencies-object)
 * 
 * @member {real} mod_id Unique ID of the mod that serves as the dependency.
 * @member {string} name Name of the mod dependency.
 * @member {string} name_id Path for the mod on mod.io. For example: https://mod.io/g/rogue-knight/m/**rogue-knight-hd-pack**
 * @member {real} date_added Unix timestamp of date the dependency was added.
 * @member {real} dependency_depth When a dependency depth is greater than zero (0), it means that the dependencies themselves rely on additional dependencies. To ensure smooth installation, it is recommended dependencies be installed in *descending* order of depth, beginning with those with the highest depth. Please note only dependencies with a depth of up to 5 will be shown.
 * @member {struct.Logo} logo Contains media URL's to the logo for the mod.
 * @member {struct.Modfile} modfile The primary modfile for the mod.
 * 
 * @struct_end
 */

/**
 * @struct ModEvents
 * @description > **mod.io Response Schema:** [Get Mod Events](https://docs.mod.io/#get-mod-events-2)
 * 
 * @member {struct.ModEvent} data Array containing mod event objects.
 * @member {real} result_count Number of results returned in this request.
 * @member {real} result_offset Number of results skipped over. Defaults to 0 unless overridden by `_offset` filter.
 * @member {real} result_limit Maximum number of results returned in the request. Defaults to 100 (max) unless overridden by `_limit filter`.
 * @member {real} result_total Total number of results found.
 * 
 * @struct_end
 */

/**
 * @struct ModEvent
 * @description > **mod.io Response Schema:** [Get Mod Events](https://docs.mod.io/#get-mod-events-2)
 * 
 * @member {real} id Unique id of the event object.
 * @member {real} mod_id Unique id of the parent mod.
 * @member {real} user_id Unique id of the user who performed the action.
 * @member {real} date_added Unix timestamp of date the event occurred.
 * @member {string} event_type Type of event that was triggered. List of possible events: 
 * 
 * - MODFILE_CHANGED
 * - MOD_AVAILABLE
 * - MOD_UNAVAILABLE
 * - MOD_EDITED
 * - MOD_DELETED
 * - MOD_TEAM_CHANGED
 * 
 * @struct_end
 */

/**
 * @struct Modfile
 * @description > **mod.io Response Schema:** [Modfile Object](https://docs.mod.io/#modfile-object)
 * 
 * @member {real} id Unique modfile id.
 * @member {real} mod_id Unique mod id.
 * @member {real} date_added Unix timestamp of date file was added.
 * @member {real} date_scanned Unix timestamp of date file was virus scanned.
 * @member {real} virus_status Current virus scan status of the file. For newly added files that have yet to be scanned this field will change frequently until a scan is complete:
 * 
 * 0 = Not scanned
 * 1 = Scan complete
 * 2 = In progress
 * 3 = Too large to scan
 * 4 = File not found
 * 5 = Error Scanning
 * 
 * @member {real} virus_positive Was a virus detected:
 * 
 * 0 = No threats detected
 * 1 = Flagged as malicious
 * 
 * @member {string} virustotal_hash [[Deprecated: No longer used and will be removed in subsequent API version.]]
 * @member {real} filesize Size of the file in bytes.
 * @member {real} filesize_uncompressed The uncompressed filesize of the zip archive.
 * @member {struct.Filehash} filehash Contains a dictionary of filehashes for the contents of the download.
 * @member {string} filename Filename including extension.
 * @member {string} version Release version this file represents.
 * @member {string} changelog Changelog for the file.
 * @member {string} metadata_blob Metadata stored by the game developer for this file.
 * @member {struct.Download} download Contains download data for the modfile.
 * @member {struct.ModfilePlatform} platforms Contains modfile platform data.
 * 
 * @struct_end
 */

/**
 * @struct ModfilePlatform
 * @description > **mod.io Response Schema:** [Modfile Platform Object](https://docs.mod.io/#modfile-platform-object)
 * 
 * @member {string} platform A [target platform](https://docs.mod.io/#targeting-a-platform).
 * @member {real} status The status of the modfile for the corresponding `platform`. Possible values:
 * 
 * 0 = Pending
 * 1 = Approved
 * 2 = Denied
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
 * @struct ModPlatforms
 * @description > **mod.io Response Schema:** [Mod Platforms Object](https://docs.mod.io/#mod-platforms-object)
 * 
 * @member {string} platform A [target platform](https://docs.mod.io/#targeting-a-platform).
 * @member {real} modfile_live The unique id of the modfile that is currently live on the platform specified in the `platform` field.
 * 
 * @struct_end
 */

/**
 * @struct ModStats
 * @description > **mod.io Response Schema:** [Mod Stats Object](https://docs.mod.io/#mod-stats-object)
 * 
 * @member {real} mod_id Unique mod id.
 * @member {real} popularity_rank_position Current rank of the mod.
 * @member {real} popularity_rank_total_mods Number of ranking spots the current rank is measured against.
 * @member {real} downloads_today Number of total mod downloads. Count resets around 11:00 UTC+11 daily.
 * @member {real} downloads_total Number of total mod downloads.
 * @member {real} subscribers_total Number of total users who have subscribed to the mod.
 * @member {real} ratings_total Number of times this mod has been rated.
 * @member {real} ratings_positive Number of positive ratings.
 * @member {real} ratings_negative Number of negative ratings.
 * @member {real} ratings_percentage_positive Number of positive ratings, divided by the total ratings to determine its percentage score.
 * @member {real} ratings_weighted_aggregate Overall rating of this item calculated using the [Wilson score confidence interval](https://www.evanmiller.org/how-not-to-sort-by-average-rating.html). This column is good to sort on, as it will order items based on number of ratings and will place items with many positive ratings above those with a higher score but fewer ratings.
 * @member {string} ratings_display_text Textual representation of the rating in format:
 * 
 * - Overwhelmingly Positive
 * - Very Positive
 * - Positive
 * - Mostly Positive
 * - Mixed
 * - Negative
 * - Mostly Negative
 * - Very Negative
 * - Overwhelmingly Negative
 * - Unrated
 * 
 * @member {real} date_expires Unix timestamp until this mods's statistics are considered stale.
 * 
 * @struct_end
 */

/**
 * @struct ModTag
 * @desc > **mod.io Response Schema:** [Mod Tag Object](https://docs.mod.io/#mod-tag-object)
 * 
 * @member {string} name Tag name.
 * @member {real} date_added Unix timestamp of date tag was applied.
 * 
 * @struct_end 
*/

/**
 * @struct TeamMember
 * @description > **mod.io Response Schema:** [Team Member Object](https://docs.mod.io/#team-member-object)
 * 
 * @member {real} id Unique team member id.
 * @member {struct.User} user The user associated with this team access.
 * @member {real} level Level of permission the user has:
 * 
 * 1 = Moderator (can moderate comments and content attached)
 * 4 = Manager (moderator access, including uploading builds and editing settings except supply and team members)
 * 8 = Administrator (full access, including editing the supply and team)
 * 
 * @member {real} date_added Unix timestamp of the date the user was added to the team.
 * @member {string} position Custom title given to the user in this team.
 * @member {real} invite_pending If the team member invitation is still pending:
 * 
 * 0 = Invitation Accepted
 * 1 = Invitation Pending
 * 
 * @struct_end
 */

/**
 * @struct Terms
 * @desc > **mod.io Response Schema:** [Terms Object](https://docs.mod.io/#terms-object)
 * 
 * @member {string} plaintext The terms text in plaintext formatting.
 * @member {string} html The terms text in HTML formatting.
 * @member {struct} buttons The buttons to embed into the Terms.
 * 
 * * agree: a struct containing the "agree" text
 * * disagree: a struct containing the "disagree" text
 * 
 * @member {struct} links The links to embed into the Terms.
 * 
 * * website (${type.struct}) Website link.
 * * terms (${type.struct}) Terms of Use link.
 * * privacy (${type.struct}) Privacy Policy link.
 * * manage (${type.struct}) Manage User Account link.
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

/**
 * @struct User
 * @description > **mod.io Response Schema:** [User Object](https://docs.mod.io/#user-object)
 * 
 * @member {real} id Unique id of the user.
 * @member {string} name_id Path for the user on mod.io. For example: https://mod.io/u/**name-id-here **
 * @member {string} username Username of the user.
 * @member {string} display_name_portal The users' display name for the targeted portal. Value will be `null` if no valid `X-Modio-Portal` portal header value is provided. For more information see [Targeting a Portal](https://docs.mod.io/#targeting-a-portal).
 * @member {real} date_online Unix timestamp of date the user was last online.
 * @member {real} date_joined Unix timestamp of date the user joined.
 * @member {struct.Avatar} avatar Contains media URL's to the users avatar.
 * @member {string} timezone Deprecated: No longer used and will be removed in subsequent API version.
 * @member {string} language Deprecated: No longer used and will be removed in subsequent API version. To [localize the API response](https://docs.mod.io/#localization) we recommend you set the `Accept-Language` header.
 * @member {string} profile_url URL to the user's profile.
 * 
 * @struct_end
*/

/**
 * @struct WebMessage
 * @desc > **mod.io Response Schema:** [Web Message Object](https://docs.mod.io/#schemaweb_message_object)
 * 
 * @member {real} code HTTP response code.
 * @member {boolean} success Was the request completed successfully?
 * @member {string} message Optional message to display to the user.
 * 
 * @struct_end
 */

// Modules
/**
 * @module response_schemas
 * @description Response Schemas
 * 
 * This page lists all possible data types. Data is always returned to GameMaker by mod.io as JSON, which it then parses into a struct that you can access directly.
 * 
 * @section_struct
 * @ref AccessToken
 * @ref AgreementVersion
 * @ref Avatar
 * @ref Comment
 * @ref Download
 * @ref Filehash
 * @ref Game
 * @ref GameOtherUrls
 * @ref GamePlatforms
 * @ref GameStats
 * @ref GameTagOption
 * @ref HeaderImage
 * @ref Icon
 * @ref Image
 * @ref Logo
 * @ref Message
 * @ref MetadataKVP
 * @ref Mod
 * @ref ModDependencies
 * @ref ModEvents
 * @ref ModEvent
 * @ref Modfile
 * @ref ModfilePlatform
 * @ref ModMedia
 * @ref ModPlatforms
 * @ref ModStats
 * @ref ModTag
 * @ref TeamMember
 * @ref Terms
 * @ref Theme
 * @ref User
 * @ref WebMessage
 * @section_end
 * 
 * @module_end
 * 
 */