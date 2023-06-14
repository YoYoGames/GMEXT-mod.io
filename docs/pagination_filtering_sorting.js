/** 
 * @function limit
 * @description This function limits the number of results for a request. By default **100** results are returned per request.
 * 
 * request().limit(10) - Limits the number of returned results to 10.
 * 
 * @param {real} value The maximum number of results to return. The default value is 100.
 * 
 * @function_end
*/
function limit() {}

/** 
 * @function offset
 * @description This function skips over the specified number of results, regardless of the data they contain. This works the same way offset does in a SQL query.
 * 
 * request().offset(4) - Skips 4 results and returns results starting from the fifth result (i.e. result 4).
 * 
 * @param {real} value The number of results to skip
 * 
 * @function_end
*/
function offset() {}

/** 
 * @function ascending
 * @description This function sorts the data ascending on the given key.
 * 
 * request().ascending("date_added") - Sorts the results ascending on the `date_added` column.
 * 
 * @param {string} key The key to sort on
 * 
 * @function_end
*/
function ascending() {}

/** 
 * @function descending
 * @description This function sorts the data descending on the given key.
 * 
 * request().descending("date_added") - Sorts the results descending on the `date_added` column.
 * 
 * @param {string} key The key to sort on
 * 
 * @function_end
*/
function descending() {}

/** 
 * @function fulltextsearch
 * @description This function provides a lenient search filter that **is only available** if the endpoint you are querying contains a `name` column. Wildcards should **not** be applied to this filter as they are ignored.
 * 
 * @param {string} text The text to search for, i.e. "The Lord of the Rings"  will return every result where the `name` column contains any of the following words: 'The', 'Lord', 'of', 'the', 'Rings'.
 * 
 * @function_end
*/
function fulltextsearch() {}

/** 
 * @function equals
 * @description The simplest filter you can apply is `columnname` equals. This will return all rows which contain a column matching the value provided.
 * 
 * request().equals("id", "10") - Get all results where the `id` column value is 10.
 * 
 * @param {string} key The key/column to compare
 * @param {string} value The value to compare to
 * 
 * @function_end
*/
function equals() {}

/** 
 * @function notequalto
 * @description Where the preceding column value does not equal the value specified
 * 
 * request().notequalto("curation", "1") - Get all results where the `curation` column isn't equal to 1.
 * 
 * @param {string} key The key/column to compare
 * @param {string} value The value to compare to
 * 
 * @function_end
*/
function notequalto() {}

/** 
 * @function likewildcards
 * @description Where the string supplied matches the preceding column value. This is equivalent to SQL's LIKE. Wildcards * can be used to find content that partially matches as described below.
 * 
 * request().likewildcards("name", "texture") - Get all results where the `name` column value is "texture".
 * request().likewildcards("name", "texture*") - Get all results where the `name` column value begins with "texture". This means the query would return results for "texture", "textures" and "texture pack".
 * request().likewildcards("name", "*texture*") - Get all results where the `name` column value contains "texture". This means the query would return results for "texture", "HD textures" and "armor texture pack".
 * 
 * @param {string} key The key/column to compare
 * @param {string} value The value to compare to (which may include wildcards "*")
 * 
 * @function_end
*/
function likewildcards() {}

/** 
 * @function notlikewildcards
 * @description Where the string supplied does not match the preceding column value. This is equivalent to SQL's NOT LIKE. Wildcards * can be used as described above.
 * 
 * request().notlikewildcards("name", "dungeon") - Get all results where the `name` column value is not "dungeon".
 * 
 * @param {string} key The key/column to compare
 * @param {string} value The value to compare to (which may include wildcards "*")
 * 
 * @function_end
*/
function notlikewildcards() {}

/** 
 * @function in
 * @description Where the supplied list of values appears in the preceding column value. This is equivalent to SQL's IN.
 * 
 * request().in("id", "8,13,22")
 * 
 * @param {string} key The key/column to compare
 * @param {string} value A comma-separated list of values, e.g. "value1,value2,value3,value4"
 * 
 * @function_end
*/
function in() {}

/** 
 * @function notin
 * @description Where the supplied list of values does not equal the preceding column value. This is equivalent to SQL's NOT IN.
 * 
 * request().notin("id", "8,13,22") - Get all results where `id` column does not equal 8, 13 and 22.
 * 
 * @param {string} key The key/column to compare
 * @param {string} value The value to compare to
 * 
 * @function_end
*/
function notin() {}

/** 
 * @function smallerthanorequalto
 * @description Where the preceding column value is smaller than or equal to the value specified.
 * 
 * request().smallerthanorequalto("game", "40") - Get all results where the `game` column is smaller than or equal to 40.
 * 
 * @param {string} key The key/column to compare
 * @param {string} value The value to compare to
 * 
 * @function_end
*/
function smallerthanorequalto() {}

/** 
 * @function greaterthanorequalto
 * @description Where the preceding column value is greater than or equal to the value specified
 * 
 * request().greaterthanorequalto("game", "20") - Get all results where the `game` column is greater than or equal to 20.
 * 
 * @param {string} key The key/column to compare
 * @param {string} value The value to compare to
 * 
 * @example 
 * 
 * @function_end
*/
function greaterthanorequalto() {}

/** 
 * @function bitwiseand
 * @description Some columns are stored as bits within an integer. Their value depends on the bits selected. For example, suppose a column has 4 options:
 * 
 * @example 
 * 
 * 1. Option A
 * 2. Option B
 * 4. Option C
 * 8. Option D
 * 
 * You can combine any of these options by adding them together which means there are (2 ^ 4 = 16 possible combinations). For example Option A (1) and Option C (4) would be (1 + 4 = 5), Option A (1), Option C (4) and Option D (8) would be (1 + 4 + 8 = 13), all Options together would be (1 + 2 + 4 + 8 = 15).
 *
 * The number of combinations makes using ${function.equals}, ${function.in} and other filters a little complex. To solve this we support Bitwise AND (&) which makes it easy to match a column which contains any of the options you want.
 * 
 * @param {string} key The key/column to compare
 * @param {string} value The value to compare to
 * 
 * @function_end
*/
function bitwiseand() {}


/**
 * @module pagination_filtering_sorting
 * @title Pagination, Filtering and Sorting
 * @desc This page lists the functions that you can add to a request to add pagination, filtering and sorting to your requests.
 * 
 * @section_func pagination
 * @desc When requesting data from endpoints that contain more than one object, you can supply an ${function.offset} and ${function.limit} to paginate through the results. Think of it as a page 1, 2, 3... system but you control the number of results per page, and the page to start from. Appended to each response will be the pagination metadata:
 * 
 * * result_count - Number of results returned in this request.
 * * result_offset - Number of results skipped over. Defaults to 0 unless overridden by ${function.offset} filter.
 * * result_limit - Maximum number of results returned in the request. Defaults to 100 (max) unless overridden by ${function.limit} filter.
 * * result_total - Total number of results.
 * 
 * <br />
 * 
 * @ref limit
 * @ref offset
 * @section_end
 * 
 * @section_func sorting
 * @desc All endpoints are sorted by the `id` column in ${function.ascending} order by default (oldest first). You can override this by including a sort with the column you want to sort by in the request. You can sort on all columns **in the parent object only**. You cannot sort on columns in nested objects, so if a game contains a tags object you cannot sort on the `tag name` column, but you can sort by the games `name` since the games `name` resides in the parent object.
 *
 * [[NOTE: Some functions like ${function.modio_mods_get_list} have special sort columns like popular, downloads, rating and subscribers which are documented alongside the filters.]]
 *
 * @ref ascending
 * @ref descending
 * @section_end
 * 
 * @section_func filtering
 * @desc mod.io has powerful filtering available to assist you when making requests to the API. You can filter on all columns **in the parent object only**. You cannot apply filters to columns in nested objects, so if a game contains a tags object you cannot filter by the `tag name` column, but you can filter by the games `name` since the games `name` resides in the parent object.
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