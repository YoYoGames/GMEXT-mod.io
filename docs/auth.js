@title Authentication

/**
 * @function modio_auth_terms
 * @description > **mod.io Endpoint:** [Terms](https://docs.mod.io/#terms) (`GET /authenticate/terms`)
 * 
 * <br />
 * 
 * This endpoint provides the text, links and buttons you can use to get a users agreement and consent prior to authenticating them in-game (your dialog should look similar to the example below). A successful response returns a [Terms Object](https://docs.mod.io/#terms-object).
 * 
 * [[WARNING: It is a requirement to implement the terms dialog when using a 3rd party authentication flow such as Steam or Xbox Live, to ensure the user has agreed to the latest mod.io [Terms of Use](https://mod.io/terms/widget) and [Privacy Policy](https://mod.io/privacy/widget). You only need to collect the user agreement once, and also each time these policies are updated.]]
 * 
 * [[NOTE: You can use your own text and process, but must make sure the Terms of Use and Privacy Policy are correctly linked, or are displayed inline using the [agreements endpoints](https://docs.mod.io/#agreements) to get the latest versions.]]
 * 
 * Be aware that you are responsible for ensuring that the users agreement is properly collected and reported. Failure to do so correctly is a breach of the mod.io Game Terms. If your game does not authenticate users or only uses the email authentication flow, you do not need to implement this dialog, but you should link to the mod.io Terms of Use and Privacy Policy in your Privacy Policy/EULA.
 * 
 * @param {function|method} callback_success The function to execute when the request is successful.
 * @param {function|method} callback_failed The function to execute when the request failed.
 * 
 * @returns {struct.Terms}
 * 
 * @function_end
 */

/**
 * @function modio_auth_steam
 * @description > **mod.io Endpoint:** [Steam](https://docs.mod.io/#steam) (`POST /external/steamauth`)
 * 
 * <br />
 * 
 * This function requests an access token on behalf of a Steam user. To use this functionality you must add your game's encrypted app ticket key from Steamworks, to the **Game Admin** > **Settings** page of your game's profile on mod.io. A Successful request will return an [Access Token Object](https://docs.mod.io/#access-token-object).
 * 
 * [[NOTE: Steam is the only authentication endpoint that requires the token to be base64 encoded. All other endpoints tokens should be provided as a UTF-8 character string.]]
 * 
 * @param {string} appdata The Steam user's [Encrypted App Ticket](https://partner.steamgames.com/doc/features/auth#encryptedapptickets) provided by the Steamworks SDK.
 * @param {struct} optionals A struct that can contain one or more of the following variables: 
 * 
 * * email (${type.string}) The user's email address (optional but recommended to help users recover lost accounts). If supplied, and the respective user does not have an email registered for their account we will send a confirmation email to confirm they have ownership of the specified email.
 * * date_expires (${type.real}) The Unix timestamp of the date in which the returned token will expire. The value cannot be higher than the default value, which is a common year (unix timestamp + 31536000 seconds). Using a token after its expiry time has elapsed will result in a `401 Unauthorized` response.
 * * terms_agreed (${type.boolean}) This *must* be set to `false`, unless you have collected the [users agreement](https://docs.mod.io/#terms) prior to calling this endpoint, in which case it can be set to `true` and will be recorded.
 * 
 * @param {function|method} callback_success The function that is triggered when the request is successful.
 * @param {function|method} callback_failed The function that is triggered when the request failed.
 * 
 * @function_end
 * 
 */
function modio_auth_steam() {}

/**
 * @function modio_auth_xboxlive
 * @description > **mod.io Endpoint:** [Xbox Live](https://docs.mod.io/#xbox-live) (`POST /external/xboxauth`)
 * 
 * <br />
 * 
 * This function requests an access token on behalf of an Xbox Live user. A successful request will return an [Access Token Object](https://docs.mod.io/#access-token-object).
 * 
 * [[NOTE: To use this endpoint you will need to set up some additional settings prior to being able to authenticate Xbox Live users. For these instructions you should contact us.]]
 * 
 * @param {string} xbox_token 
 * @param {struct} optionals A struct that can contain one or more of the following variables: 
 * 
 * * email (${string}) The user's email address (optional but recommended to help users recover lost accounts). If supplied, and when the respective user does not have an email registered for their account we will send a confirmation email to confirm they have ownership of the specified email. This functionality is also available at a later time via the [Link an Email](https://docs.mod.io/#link-an-email) endpoint. NOTE: If the user already has an email on record with us, this parameter will be ignored. This parameter should also be URL encoded before the request is sent.
 * * date_expires (${int64}) The Unix timestamp of the date on which the returned token will expire. The value cannot be higher than the default, value which is a common year (unix timestamp + 31536000 seconds). Using a token after its expiry time has elapsed will result in a 401 Unauthorized response.
 * * terms_agreed(${boolean}) This *must* be set to `false` unless you have collected the users agreement prior to calling this endpoint in which case it can be set to `true` and will be recorded.
 * 
 * [[NOTE: If this is set to false and the user has not agreed to the latest mod.io Terms of Use and Privacy Policy, an error 403 Forbidden (error_ref 11074) will be returned and you will need to collect the users agreement and retry with this value set to true to authenticate the user.]]
 * 
 * @param {function|method} callback_success The function to trigger when the request is successful.
 * @param {function|method} callback_failed The function to trigger when the request failed.
 * 
 * @function_end
 */
function modio_auth_xboxlive() {}

/**
 * @function modio_auth_playstation
 * @description > **mod.io Endpoint:** [PlayStation™Network](https://docs.mod.io/#playstation-network) (`POST /external/psnauth`)
 * 
 * <br />
 * 
 * Request an access token on behalf of a PlayStation Network (PSN) user. A successful request will return an Access Token Object.
 * 
 * [[NOTE: To use this endpoint you will need to setup some additional settings prior to being able to authenticate PlayStation users. For these instructions please contact us.]]
 * [[TIP: If you want to overlay the mod.io site in-game on PlayStation, we recommend you add `?portal=psn` to the end of the URL you open which will prompt the user to login with PlayStation Network. See Web Overlay Authentication for details.]]
 * 
 * "PlayStation" and "DualSense" are registered trademarks or trademarks of Sony Interactive Entertainment Inc.
 * 
 * @param {string} auth_code The auth code returned from the PlayStation Network API.
 * @param {struct} optionals A struct that can contain one or more of the following variables: 
 * 
 * * email (${string}) The users email address. If supplied, and the respective user does not have an email registered for their account we will send a confirmation email to confirm they have ownership of the specified email.
 * * date_expires (${int64}) The Unix timestamp of the date on which the returned token will expire. The value cannot be higher than the default value which is a common year (unix timestamp + 31536000 seconds). Using a token after its expiry time has elapsed will result in a 401 Unauthorized response.
 * * terms_agreed (${boolean}) This *must* be set to `false` unless you have collected the [users agreement](https://docs.mod.io/#terms) prior to calling this endpoint in which case it can be set to `true` and will be recorded.
 * 
 * [[NOTE: If this is set to `false` and the user has not agreed to the latest mod.io Terms of Use and Privacy Policy, an error 403 Forbidden (error_ref 11074) will be returned and you will need to collect the [users agreement](https://docs.mod.io/#terms) and retry with this value set to `true` to authenticate the user.]]
 * 
 * @param {function|method} callback_success The function to trigger when the request is successful.
 * @param {function|method} callback_failed The function to trigger when the request failed.
 * 
 * @function_end
 */
function modio_auth_playstation() {}

/**
 * @function modio_auth_nintendo_switch
 * @description > **mod.io Endpoint:** [Nintendo Switch](https://docs.mod.io/#nintendo-switch) (`POST /external/switchauth`)
 * 
 * <br />
 * 
 * This function requests an access token on behalf of a Nintendo Switch user. A Successful request will return an Access Token Object.
 * 
 * [[NOTE: To use this endpoint you will need to setup some additional settings prior to being able to authenticate Nintendo Switch users. For these instructions please contact us.]]
 * 
 * @param {string} id_token The NSA ID supplied by the Nintendo Switch SDK.
 * @param {struct} optionals A struct that can contain one or more of the following variables: 
 * 
 * * email (${string}) The user's email address. If supplied, and the respective user doesn't have an email registered for their account, we will send a confirmation email to confirm they have ownership of the specified email.
 * * date_expires (${int64}) The Unix timestamp of the date on which the returned token will expire. The value cannot be higher than the default value which is a common year (Unix timestamp + 31536000 seconds). Using a token after its expiry time has elapsed will result in a 401 Unauthorized response.
 * * terms_agreed (${boolean}) This *must* be set to `false` unless you have collected the [users agreement](https://docs.mod.io/#terms) prior to calling this endpoint in which case it can be set to `true` and will be recorded.
 * 
 * [[NOTE: If this is set to `false` and the user has not agreed to the latest mod.io Terms of Use and Privacy Policy, an error `403 Forbidden (error_ref 11074)` will be returned and you will need to collect the [users agreement](https://docs.mod.io/#terms) and retry with this value set to `true` to authenticate the user.]]
 * 
 * @param {function|method} callback_success The function to trigger when the request is successful.
 * @param {function|method} callback_failed The function to trigger when the request failed.
 * 
 * @function_end
 */
function modio_auth_nintendo_switch() {}

/**
 * @function modio_auth_metaquest
 * @description > **mod.io Endpoint:** [Meta Quest](https://docs.mod.io/#meta-quest) (`POST /external/oculusauth`)
 * 
 * <br />
 * 
 * This function requests an access token on behalf of a Meta Quest user. To use this functionality you must add your game's [AppId and secret](https://dashboard.oculus.com/) from the Meta Quest Dashboard, to the *Game Admin* > *Settings* page of your game's profile on mod.io. A Successful request will return an Access Token Object.
 * 
 * @param {string} device The Meta Quest device being used for authentication.
 * @param {string} nonce The nonce provided by calling [ovr_User_GetUserProof()](https://developer.oculus.com/documentation/platform/latest/concepts/dg-ownership/) from the Meta Quest SDK.
 * @param {real} user_id The user's Meta Quest ID providing by calling [ovr_GetLoggedInUserID()](https://developer.oculus.com/documentation/platform/latest/concepts/dg-ownership/) from the Meta Quest SDK.
 * @param {string} access_token The user's access token, providing by calling [ovr_User_GetAccessToken()](https://developer.oculus.com/documentation/platform/latest/concepts/dg-ownership/) from the Meta Quest SDK. mod.io uses this access token on the first login only to obtain the user's alias and is not saved on our servers.
 * @param {struct} optionals A struct that can contain one or more of the following variables: 
 * 
 * * email (${string}) The user's email address. If supplied, and the respective user doesn't have an email registered for their account, we will send a confirmation email to confirm they have ownership of the specified email.
 * 
 * [[NOTE: If the user already has an email on record with us, this parameter will be ignored. This parameter should also be URL encoded before the request is sent.]]
 * 
 * * date_expires (${int64}) The Unix timestamp of the date on which the returned token will expire. The value cannot be higher than the default value which is a common year (Unix timestamp + 31536000 seconds). Using a token after its expiry time has elapsed will result in a 401 Unauthorized response.
 * * terms_agreed (${boolean}) This *must* be set to `false` unless you have collected the [users agreement](https://docs.mod.io/#terms) prior to calling this endpoint in which case it can be set to `true` and will be recorded.
 * 
 * [[NOTE: If this is set to `false` and the user has not agreed to the latest mod.io Terms of Use and Privacy Policy, an error `403 Forbidden (error_ref 11074)` will be returned and you will need to collect the [users agreement](https://docs.mod.io/#terms) and retry with this value set to `true` to authenticate the user.]]
 * 
 * @param {function|method} callback_success The function to trigger when the request is successful.
 * @param {function|method} callback_failed The function to trigger when the request failed.
 * 
 * @function_end
 */
function modio_auth_metaquest() {}

/**
 * @function modio_auth_gog
 * @description > **mod.io Endpoint:** [GOG Galaxy](https://docs.mod.io/#gog-galaxy) (`POST /external/galaxyauth`)
 * 
 * <br />
 * 
 * Request an access token on behalf of a GOG Galaxy user. To use this functionality you must add your game's encrypted app ticket key from GOG Galaxy, to the *Game Admin* > *Settings* page of your game's profile on mod.io. A Successful request will return an Access Token Object.
 * 
 * @param {string} appdata The GOG Galaxy user's [Encrypted App Ticket](https://cdn.gog.com/open/galaxy/sdk/1.133.3/Documentation/classgalaxy_1_1api_1_1IUser.html#a352802aab7a6e71b1cd1b9b1adfd53d8) provided by the GOG Galaxy SDK.
 * @param {struct} optionals A struct that can contain one or more of the following variables: 
 * 
 * * email (${string}) The user's email address. If supplied, and the respective user doesn't have an email registered for their account, we will send a confirmation email to confirm they have ownership of the specified email.
 * 
 * * date_expires (${int64}) The Unix timestamp of the date on which the returned token will expire. The value cannot be higher than the default value which is a common year (Unix timestamp + 31536000 seconds). Using a token after its expiry time has elapsed will result in a 401 Unauthorized response.
 * * terms_agreed (${boolean}) This *must* be set to `false` unless you have collected the [users agreement](https://docs.mod.io/#terms) prior to calling this endpoint, in which case it can be set to `true` and will be recorded.
 * 
 * [[NOTE: If this is set to `false` and the user has not agreed to the latest mod.io Terms of Use and Privacy Policy, an error `403 Forbidden (error_ref 11074)` will be returned and you will need to collect the [users agreement](https://docs.mod.io/#terms) and retry with this value set to `true` to authenticate the user.]]
 * 
 * @param {function|method} callback_success The function to trigger when the request is successful.
 * @param {function|method} callback_failed The function to trigger when the request failed.
 * 
 * @function_end
 */
function modio_auth_gog() {}

/**
 * @function modio_auth_epicgames > **mod.io Endpoint:** [Epic Games](https://docs.mod.io/#epic-games) (`POST /external/epicgamesauth`)
 * 
 * <br />
 * 
 * @description This function requests an access token on behalf of an Epic Games user. A Successful request will return an Access Token Object.
 * 
 * @param {string} access_token The access token [returned from the EOS SDK](https://dev.epicgames.com/docs/services/en-US/API/EOS/EOS/_tagEOS_Auth_Token/index.html) when you authenticate a user to use mod.io.
 * @param {struct} optionals A struct that can contain one or more of the following variables: 
 * 
 * * email (${string}) The user's email address. If supplied, and the respective user doesn't have an email registered for their account, we will send a confirmation email to confirm they have ownership of the specified email.
 * 
 * [[NOTE: If the user already has an email on record with us, this parameter will be ignored. This parameter should also be URL encoded before the request is sent.]]
 * 
 * * date_expires (${int64}) The Unix timestamp of the date on which the returned token will expire. The value cannot be higher than the default value which is a week (unix timestamp + 604800 seconds). Using a token after its expiry time has elapsed will result in a `401 Unauthorized` response.
 * * terms_agreed (${boolean}) This *must* be set to `false` unless you have collected the [users agreement](https://docs.mod.io/#terms) prior to calling this endpoint, in which case it can be set to `true` and will be recorded.
 * 
 * [[NOTE: If this is set to `false` and the user has not agreed to the latest mod.io Terms of Use and Privacy Policy, an error `403 Forbidden (error_ref 11074)` will be returned and you'll need to collect the [users agreement](https://docs.mod.io/#terms) and retry with this value set to `true` to authenticate the user.]]
 * 
 * @param {function|method} callback_success The function to trigger when the request is successful.
 * @param {function|method} callback_failed The function to trigger when the request failed.
 * 
 * @function_end
 */
function modio_auth_epicgames() {}

/**
 * @function modio_auth_itchio
 * @description > **mod.io Endpoint:** [itch.io](https://docs.mod.io/#itch-io) (`POST /external/itchioauth`)
 * 
 * <br />
 * 
 * This function requests an access token on behalf of an itch.io user via the itch.io desktop app. Due to the desktop application allowing multiple users to be logged in at once, if more than one user is logged in then the user at the top of that list on the itch.io login dialog will be the authenticating user. A Successful request will return an Access Token Object.
 * 
 * @param {string} itchio_token The [JWT Token](https://itch.io/docs/itch/integrating/manifest-actions.html) provided by the itch.io desktop application to your game as the environment variable `ITCHIO_API_KEY`. You must set up your itch.io app manifest to include the [API scope](https://itch.io/docs/itch/integrating/manifest-actions.html) to force itch.io to set this variable.
 * @param {struct} optionals A struct that can contain one or more of the following variables: 
 * 
 * * email (${string}) The user's email address. If supplied, and the respective user doesn't have an email registered for their account, we will send a confirmation email to confirm they have ownership of the specified email.
 * 
 * [[NOTE: If the user already has an email on record with us, this parameter will be ignored. This parameter should also be URL encoded before the request is sent.]]
 * 
 * * date_expires (${int64}) The Unix timestamp of the date on which the returned token will expire. The value cannot be higher than the default value which is a week (Unix timestamp + 604800 seconds). Using a token after its expiry time has elapsed will result in a `401 Unauthorized` response.
 * * terms_agreed (${boolean}) This *must* be set to `false` unless you have collected the [users agreement](https://docs.mod.io/#terms) prior to calling this endpoint, in which case it can be set to `true` and will be recorded.
 * 
 * [[NOTE: If this is set to `false` and the user has not agreed to the latest mod.io Terms of Use and Privacy Policy, an error `403 Forbidden (error_ref 11074)` will be returned and you'll need to collect the [users agreement](https://docs.mod.io/#terms) and retry with this value set to `true` to authenticate the user.]]
 * 
 * @param {function|method} callback_success The function to trigger when the request is successful.
 * @param {function|method} callback_failed The function to trigger when the request failed.
 * 
 * @function_end
 */
function modio_auth_itchio() {}

/**
 * @function modio_auth_google
 * @description > **mod.io Endpoint:** [Google](https://docs.mod.io/#google) (`POST /external/googleauth`)
 * 
 * <br />
 * 
 * This function requests an access token on behalf of a Google user. A Successful request will return an Access Token Object.
 * 
 * [[NOTE: To use this endpoint you will need to set up some additional settings prior to being able to authenticate Google users. For these instructions please contact us.]]
 * 
 * @param {string} id_token The id_token value returned from Google after you have authenticated a user via the Google OAuth2 flow.
 * @param {struct} optionals A struct that can contain one or more of the following variables: 
 * 
 * * email (${string}) The user's email address. If supplied, and the respective user doesn't have an email registered for their account, we will send a confirmation email to confirm they have ownership of the specified email.
 * 
 * [[NOTE: If the user already has an email on record with us, this parameter will be ignored. This parameter should also be URL encoded before the request is sent.]]
 * 
 * * date_expires (${int64}) The Unix timestamp of the date on which the returned token will expire. The value cannot be higher than the default value which is a week (Unix timestamp + 604800 seconds). Using a token after its expiry time has elapsed will result in a `401 Unauthorized` response.
 * * terms_agreed (${boolean}) This *must* be set to `false` unless you have collected the [users agreement](https://docs.mod.io/#terms) prior to calling this endpoint, in which case it can be set to `true` and will be recorded.
 * 
 * [[NOTE: If this is set to `false` and the user has not agreed to the latest mod.io Terms of Use and Privacy Policy, an error `403 Forbidden (error_ref 11074)` will be returned and you'll need to collect the [users agreement](https://docs.mod.io/#terms) and retry with this value set to `true` to authenticate the user.]]
 * 
 * @param {function|method} callback_success The function to trigger when the request is successful.
 * @param {function|method} callback_failed The function to trigger when the request failed.
 * 
 * @function_end
 */
function modio_auth_google() {}

/**
 * @function modio_auth_discord
 * @description > **mod.io Endpoint:** [Discord](https://docs.mod.io/#discord) (`POST /external/discordauth`)
 * 
 * <br />
 * 
 * This function requests an access token on behalf of a Discord user. A Successful request will return an Access Token Object.
 * 
 * [[NOTE: To use this endpoint you will need to set up some additional settings prior to being able to authenticate Google users. For these instructions please contact us.]]
 * 
 * @param {string} discord_token The access token of the user provided by Discord.
 * @param {struct} optionals A struct that can contain one or more of the following variables: 
 * 
 * * email (${string}) The user's email address. If supplied, and the respective user doesn't have an email registered for their account, we will send a confirmation email to confirm they have ownership of the specified email.
 * 
 * [[NOTE: If the user already has an email on record with us, this parameter will be ignored. This parameter should also be URL encoded before the request is sent.]]
 * 
 * * date_expires (${int64}) The Unix timestamp of the date on which the returned token will expire. The value cannot be higher than the default value which is a week (Unix timestamp + 604800 seconds). Using a token after its expiry time has elapsed will result in a `401 Unauthorized` response.
 * * terms_agreed (${boolean}) This *must* be set to `false` unless you have collected the [users agreement](https://docs.mod.io/#terms) prior to calling this endpoint, in which case it can be set to `true` and will be recorded.
 * 
 * [[NOTE: If this is set to `false` and the user has not agreed to the latest mod.io Terms of Use and Privacy Policy, an error `403 Forbidden (error_ref 11074)` will be returned and you'll need to collect the [users agreement](https://docs.mod.io/#terms) and retry with this value set to `true` to authenticate the user.]]
 * 
 * @param {function|method} callback_success The function to trigger when the request is successful.
 * @param {function|method} callback_failed The function to trigger when the request failed.
 * 
 * @function_end
 */
function modio_auth_discord() {}

/**
 * @function modio_auth_openid
 * @description > **mod.io Endpoint:** [OpenID](https://docs.mod.io/#openid) (`POST /external/openid`)
 * 
 * <br />
 * 
 * This function requests an access token on behalf of an OpenID identity provider. To use this method of authentication, you must configure the OpenID config in your game's authentication admin page. A Successful request will return an Access Token Object.
 * 
 * @param {string} id_token The ID token issued by the configured identity provider.
 * @param {struct} optionals A struct that can contain one or more of the following variables: 
 * 
 * * email (${string}) The user's email address. If supplied, and the respective user doesn't have an email registered for their account, we will send a confirmation email to confirm they have ownership of the specified email.
 * 
 * [[NOTE: If the user already has an email on record with us, this parameter will be ignored. This parameter should also be URL encoded before the request is sent.]]
 * 
 * * date_expires (${int64}) The Unix timestamp of the date on which the returned token will expire. The value cannot be higher than the default value which is a week (Unix timestamp + 604800 seconds). Using a token after its expiry time has elapsed will result in a `401 Unauthorized` response.
 * * terms_agreed (${boolean}) This *must* be set to `false` unless you have collected the [users agreement](https://docs.mod.io/#terms) prior to calling this endpoint, in which case it can be set to `true` and will be recorded.
 * 
 * [[NOTE: If this is set to `false` and the user has not agreed to the latest mod.io Terms of Use and Privacy Policy, an error `403 Forbidden (error_ref 11074)` will be returned and you'll need to collect the [users agreement](https://docs.mod.io/#terms) and retry with this value set to `true` to authenticate the user.]]
 * 
 * @param {function|method} callback_success The function to trigger when the request is successful.
 * @param {function|method} callback_failed The function to trigger when the request failed.
 * 
 * @function_end
 */
function modio_auth_openid() {}

/**
 * @function modio_auth_email
 * @description > **mod.io Endpoint:** [Email Exchange](https://docs.mod.io/#email-exchange) (`POST /oauth/emailrequest`)
 * 
 * <br />
 * 
 * This function requests a security code for a user, identified by their e-mail which can then be exchanged for an access token. To use this functionality you **must** use your game's api_key from your game's profile on mod.io. A Successful request will return a [Message Object](https://docs.mod.io/#message-object).
 * 
 * @param {string} email An email address the user can access to retrieve the security code. This parameter should also be URL encoded before the request is sent.
 * 
 * @param {function|method} callback_success The function to trigger when the request is successful.
 * @param {function|method} callback_failed The function to trigger when the request failed.
 * 
 * @function_end
 */
function modio_auth_email() {}

/**
 * @function modio_auth_email_exchange
 * @description > **mod.io Endpoint:** [Email Exchange](https://docs.mod.io/#email-exchange) (`POST /oauth/emailexchange`)
 * 
 * <br />
 * 
 * This function exchanges a security code issued from the [Email Request endpoint](https://docs.mod.io/#email) for an access token. To use this functionality you **must** use your game's api_key from your game's profile on mod.io and the same api_key must be used from the original request for a security code. A Successful request will return an [Access Token Object](https://docs.mod.io/#access-token-object).
 * 
 * @param {string} security_code The alphanumeric security code.
 * @param {struct} optionals A struct that can contain one or more of the following variables: 
 * 
 * * date_expires (${int64}) The Unix timestamp of the date on which the returned token will expire. The value cannot be higher than the default value which is a common year (unix timestamp + 31536000 seconds). Using a token after its expiry time has elapsed will result in a `401 Unauthorized` response.
 * 
 * @param {function|method} callback_success The function to trigger when the request is successful.
 * @param {function|method} callback_failed The function to trigger when the request failed.
 * 
 * @function_end
 */
function modio_auth_email_exchange() {}

/**
 * @function modio_auth_logout
 * @description > **mod.io Endpoint:** [Logout](https://docs.mod.io/#logout) (`POST /oauth/logout`)
 * 
 * <br />
 * 
 * This function logs out the user by revoking their current access token. If this request successfully completes, you should remove any tokens/cookies/cached credentials linking to the now revoked access token so that the user is required to login again through your application. A successful request will return `204 No Content`.
 * 
 * @param {function|method} callback_success The function to trigger when the request is successful.
 * @param {function|method} callback_failed The function to trigger when the request failed.
 * 
 * @function_end
 */
function modio_auth_logout() {}

// Structs

/**
 * @struct Terms
 * @desc https://docs.mod.io/#terms-object
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
 * * privacy (${type.struct}) Privacy Policy link. link.
 * * manage (${type.struct}) Manage User Account link.
 * 
 * @struct_end
 */

/**
 * @module auth
 * 
 * @title Authentication
 *
 * @section_func
 * @desc Auth
 * @ref modio_auth_terms
 * @ref modio_auth_steam
 * @ref modio_auth_xboxlive
 * @ref modio_auth_playstation
 * @ref modio_auth_nintendo_switch
 * @ref modio_auth_metaquest
 * @ref modio_auth_gog
 * @ref modio_auth_epicgames
 * @ref modio_auth_itchio
 * @ref modio_auth_google
 * @ref modio_auth_discord
 * @ref modio_auth_openid
 * @ref modio_auth_email
 * @ref modio_auth_email
 * @ref modio_auth_email_exchange
 * @ref modio_auth_logout
 * @section_end
 * 
 * @section_struct
 * @ref Terms
 * @section_end
 * 
 * @module_end
 */