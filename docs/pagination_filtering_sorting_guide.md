@title Pagination, Filtering and Sorting

# Pagination, Filtering and Sorting Guide

This page provides a short guide on how to use the functions in the ${module.pagination_filtering_sorting} module to modify which results are returned by your request.

The functions are called on a request using the dot operator `.`: 

> ```gml
> modio_me_mods(function(response) {
>     // Response code here
>     // ...
> }).descending("date_added");
> ```

This request gets the user's mods using the ${function.modio_me_mods} function and returns the result sorted descending on the date the mod was added.
So in the response to this request, the first mod returned will be the mod that was last added.

A request can have multiple of these added to it, by chaining them together as follows: 

> ```gml
> var _page_limit = 3;
> var _page_index = 1;
> modio_me_mods(function(response) {
>     // Response code here
>     // ...
>
> }).limit(_page_limit).offset(_page_limit*_page_index).descending("date_added");
> ```

The request above gets the mods on the second "page", where three mods are displayed per page, also sorted descending on date added.