/** 
 * @function limit
 * @description Limit the number of results for a request. By default **100** results are returned per request.
 * 
 * @param {real} value The maximum number of results to return. The default value is 100. 
 * 
 * @function_end
*/
function limit() {}

/** 
 * @function offset
 * @description Use `_offset` to skip over the specified number of results, regardless of the data they contain. This works the same way offset does in a SQL query.
 * 
 * @param {real} value 
 * 
 * @function_end
*/
function offset() {}

/** 
 * @function ascending
 * @description Sort the data ascending on the given key.
 * 
 * @param {string} key The key to sort on
 * 
 * @function_end
*/
function ascending() {}

/** 
 * @function descending
 * @description Sort the data descending on the given key.
 * 
 * @param {string} key The key to sort on
 * 
 * @function_end
*/
function descending() {}

/** 
 * @function fulltextsearch
 * @description Full-text search is a lenient search filter that **is only available** if the endpoint you are querying contains a `name` column. Wildcards should **not** be applied to this filter as they are ignored.
 * 
 * @param {string} text The text to search for
 * 
 * @function_end
*/
function fulltextsearch() {}

/** 
 * @function equals
 * @description The simplest filter you can apply is columnname equals. This will return all rows which contain a column matching the value provided.
 * 
 * @param {string} key The key to compare
 * @param {string} value The value to compare to
 * 
 * @function_end
*/
function equals() {}

/** 
 * @function notequalto
 * @description Where the preceding column value does not equal the value specified
 * 
 * @param {string} key The key to compare
 * @param {string} value The value to compare to
 * 
 * @function_end
*/
function notequalto() {}

/** 
 * @function likewildcards
 * @description Where the string supplied matches the preceding column value. This is equivalent to SQL's LIKE. Wildcard's * can be used to find content that partially matches as described below.
 * 
 * @param {string} key The key to compare
 * @param {string} value The value to compare to
 * 
 * @example todo
 * 
 * @function_end
*/
function likewildcards() {}

/** 
 * @function notlikewildcards
 * @description Where the string supplied does not match the preceding column value. This is equivalent to SQL's NOT LIKE. Wildcard's * can be used as described above.
 * 
 * @param {string} key The key to compare
 * @param {string} value The value to compare to
 * 
 * @example todo
 * 
 * @function_end
*/
function notlikewildcards() {}

/** 
 * @function in
 * @description Where the supplied list of values appears in the preceding column value. This is equivalent to SQL's IN.
 * 
 * @param {string} key The key to compare
 * @param {string} value The value to compare to
 * 
 * @example todo
 * 
 * @function_end
*/
function in() {}

/** 
 * @function notin
 * @description Where the supplied list of values does not equal the preceding column value. This is equivalent to SQL's NOT IN.
 * 
 * @param {string} key The key to compare
 * @param {string} value The value to compare to
 * 
 * @example todo
 * 
 * @function_end
*/
function notin() {}

/** 
 * @function smallerthanorequalto
 * @description Where the preceding column value is smaller than or equal to the value specified.
 * 
 * @param {string} key The key to compare
 * @param {string} value The value to compare to
 * 
 * @example todo
 * 
 * @function_end
*/
function smallerthanorequalto() {}

/** 
 * @function greaterthanorequalto
 * @description Where the preceding column value is greater than or equal to the value specified
 * 
 * @param {string} key The key to compare
 * @param {string} value The value to compare to
 * 
 * @example todo
 * 
 * @function_end
*/
function greaterthanorequalto() {}

/** 
 * @function bitwiseand
 * @description Some columns are stored as bits within an integer. Their value depends on the bits selected. For example, suppose a column has 4 options:
 * 
 * @example todo
 * 
 * 1. Option A
 * 2. Option B
 * 4. Option C
 * 8. Option D
 * 
 * You can combine any of these options by adding them together which means there are (2 ^ 4 = 16 possible combinations). For example Option A (1) and Option C (4) would be (1 + 4 = 5), Option A (1), Option C (4) and Option D (8) would be (1 + 4 + 8 = 13), all Options together would be (1 + 2 + 4 + 8 = 15).
 *
 * The number of combinations makes using equals, in and other filters a little complex. To solve this we support Bitwise AND (&) which makes it easy to match a column which contains any of the options you want.
 *
 * 
 * @param {string} key The key to compare
 * @param {string} value The value to compare to
 * 
 * @function_end
*/
function bitwiseand() {}


/**
 * @module pagination_filtering_sorting
 * @title Pagination, Filtering and Sorting
 * @desc pagination
 * 
 * @section_func pagination
 * 
 * @desc When requesting data from endpoints that contain more than one object, you can supply an _offset and _limit to paginate through the results. Think of it as a page 1, 2, 3... system but you control the number of results per page, and the page to start from. Appended to each response will be the pagination metadata:
 * 
 * @ref limit
 * @ref offset
 * @section_end
 * 
 * @section_func sorting
 * @desc All endpoints are sorted by the id column in ascending order by default (oldest first). You can override this by including a _sort with the column you want to sort by in the request. You can sort on all columns in the parent object only. You cannot sort on columns in nested objects, so if a game contains a tags object you cannot sort on the tag name column, but you can sort by the games name since the games name resides in the parent object.
 *
 * [[NOTE: Some endpoints like Get Mods have special sort columns like popular, downloads, rating and subscribers which are documented alongside the filters.]]
 *
 * @ref ascending
 * @ref descending
 * @section_end
 * 
 * @section_func filtering
 * 
 * @desc mod.io has powerful filtering available to assist you when making requests to the API. You can filter on all columns in the parent object only. You cannot apply filters to columns in nested objects, so if a game contains a tags object you cannot filter by the tag name column, but you can filter by the games name since the games name resides in the parent object.
 * 
 * @ref fulltextsearch
 * @ref equals
 * @ref notequalto
 * @ref likewildcards
 * @ref notlikewildcards
 * @ref in
 * @ref notin
 * @ref smallerthanorequalto
 * @ref greaterthanorequalto
 * @ref bitwiseand
 * @section_end
 * 
 * @module_end
 */