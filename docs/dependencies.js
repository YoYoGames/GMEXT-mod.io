/** 
 * @function modio_dependencies_get
 * @description > **mod.io Endpoint:** [Get Mod Dependencies](https://docs.mod.io/#get-mod-dependencies) (`GET /games/{game-id}/mods/{mod-id}/dependencies`)
 * 
 * <br />
 * 
 * Get all dependencies the chosen mod has selected. This is useful if a mod requires other mods be installed for it to run. A successful request will return an array of ${struct.ModDependencies}.
 *
 * [[IMPORTANT: Because of the complexity of supporting nested dependencies, we recommend you treat dependencies as a recommendation for your players, and do not process dependencies automatically when installing a mod unless absolutely required. A successful request will return an array of ${struct.ModDependencies}.]]
 *
 * [[NOTE: Some modders might select soft dependencies to promote or credit other mods. We advise against this but it is possible to do, and is one of the reasons why we recommend against processing nested dependencies automatically.]]
 * 
 * @param {string} mod_id Unique id of the mod.
 * 
 * @param {function|method} callback_success The function to trigger when the request is successful.
 * @param {function|method} callback_failed The function to trigger when the request failed.
 * 
 * @function_end
*/
function modio_dependencies_get() {}

/** 
 * @function modio_dependencies_add
 * @description > **mod.io Endpoint:** [Add Mod Dependencies](https://docs.mod.io/#add-mod-dependencies) (`POST /games/{game-id}/mods/{mod-id}/dependencies`)
 * 
 * <br />
 * 
 * Add mod dependencies required by the corresponding mod. A dependency is a mod that should be installed for this mod to run. A successful request returns a ${struct.Message}.
 * 
 * @param {real} mod_id Unique id of the mod.
 * @param {string} dependencies One or more mod IDs that this mod is dependent on. Every dependency to add requires a separate field with dependencies[] as the key (eg. dependencies[]=1, dependencies[]=2). Max of 5 dependencies per request.
 * 
 * @param {function|method} callback_success The function to trigger when the request is successful.
 * @param {function|method} callback_failed The function to trigger when the request failed.
 * 
 * @function_end
*/
function modio_dependencies_add() {}

/** 
 * @function modio_dependencies_delete
 * @description > **mod.io Endpoint:** [Delete Mod Dependencies](https://docs.mod.io/#delete-mod-dependencies) (`DELETE /games/{game-id}/mods/{mod-id}/dependencies`)
 * 
 * <br />
 * 
 * Delete mod dependencies the corresponding mod has selected. A successful request will return `204 No Content`.
 * 
 * @param {real} mod_id Unique id of the mod.
 * @param {string} dependencies One or more mod IDs you want to delete as a dependency. Every dependency to delete requires a separate field with dependencies[] as the key (eg. dependencies[]=1, dependencies[]=2).
 * 
 * @param {function|method} callback_success The function to trigger when the request is successful.
 * @param {function|method} callback_failed The function to trigger when the request failed.
 * 
 * @function_end
*/
function modio_dependencies_delete() {}

/**
 * @struct ModDependencies
 * @description > **mod.io Response Schema:** [Mod Dependencies Object](https://docs.mod.io/#mod-dependencies-object)
 * 
 * @member {real} mod_id Unique ID of the mod that serves as the dependency.
 * @member {string} name Name of the mod dependency.
 * @member {string} name_id Path for the mod on mod.io. For example: https://mod.io/g/rogue-knight/m/**rogue-knight-hd-pack **
 * @member {int64} date_added Unix timestamp of date the dependency was added.
 * @member {real} dependency_depth When a dependency depth is greater than zero (0), it means that the dependencies themselves rely on additional dependencies. To ensure smooth installation, it is recommended dependencies be installed in *descending* order of depth, beginning with those with the highest depth. Please note only dependencies with a depth of up to 5 will be shown.
 * @member {struct.Logo} logo Contains media URL's to the logo for the mod.
 * @member {struct.Modfile} modfile The primary modfile for the mod.
 * 
 * @struct_end
 */

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
 * @section_struct structs
 * @desc Structs
 * @ref ModDependencies
 * @section_end
 * 
 * @module_end
 */