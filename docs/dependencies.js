/** 
 * @function modio_dependencies_get
 * @description > **mod.io Endpoint:** [Get Mod Dependencies](https://docs.mod.io/#get-mod-dependencies)
 * 
 * <br />
 * 
 * This function gets all the dependencies the chosen mod has selected. This is useful if a mod requires other mods to be installed for it to run. A successful request will return an array of ${struct.ModDependencies} structs.
 *
 * [[IMPORTANT: Because of the complexity of supporting nested dependencies, we recommend you treat dependencies as a recommendation for your players, and do not process dependencies automatically when installing a mod unless absolutely required.]]
 * [[NOTE: Some modders might select soft dependencies to promote or credit other mods. We advise against this but it is possible to do, and is one of the reasons why we recommend against processing nested dependencies automatically.]]
 * 
 * @param {string} _mod_id Unique id of the mod.
 * 
 * @param {function|method} _callback_success The function to trigger when the request is successful.
 * @param {function|method} _callback_failed The function to trigger when the request failed.
 * 
 * @param {real} _game_id OPTIONAL The ID of the game, defaults to the value set in the **Game ID** extension option if not provided
 * 
 * @returns {struct.GetModDependencies}
 * 
 * @function_end
*/
function modio_dependencies_get() {}

/** 
 * @function modio_dependencies_add
 * @description > **mod.io Endpoint:** [Add Mod Dependencies](https://docs.mod.io/#add-mod-dependencies)
 * 
 * <br />
 * 
 * This function adds mod dependencies required by the given mod. A dependency is a mod that should be installed for a mod to run. A successful request returns a ${struct.Message} struct.
 * 
 * @param {real} _mod_id Unique id of the mod.
 * @param {string} _dependencies One or more mod IDs that this mod is dependent on. Every dependency to add requires a separate field with dependencies[] as the key (eg. dependencies[]=1, dependencies[]=2). There is a maximum of 5 dependencies per request.
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
function modio_dependencies_add() {}

/** 
 * @function modio_dependencies_delete
 * @description > **mod.io Endpoint:** [Delete Mod Dependencies](https://docs.mod.io/#delete-mod-dependencies)
 * 
 * <br />
 * 
 * This function deletes the given mod dependencies that the given mod has selected.
 * 
 * @param {real} _mod_id Unique id of the mod.
 * @param {string} _dependencies One or more mod IDs you want to delete as a dependency. Every dependency to delete requires a separate field with dependencies[] as the key (eg. dependencies[]=1, dependencies[]=2).
 * 
 * @param {function|method} _callback_success The function to trigger when the request is successful.
 * @param {function|method} _callback_failed The function to trigger when the request failed.
 * 
 * @param {real} _game_id OPTIONAL The ID of the game, defaults to the value set in the **Game ID** extension option if not provided
 * 
 * @function_end
*/
function modio_dependencies_delete() {}

/**
 * @module dependencies
 * @title Dependencies
 * 
 * @section_func dependencies
 * @desc Dependencies
 * @ref modio_dependencies_get
 * @ref modio_dependencies_add
 * @ref modio_dependencies_delete
 * @section_end
 * 
 * @module_end
 */