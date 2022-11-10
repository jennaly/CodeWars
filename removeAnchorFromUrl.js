// Complete the function/method so that it returns the url with anything after the anchor (#) removed.

// Examples

// "www.codewars.com#about" --> "www.codewars.com"
// "www.codewars.com?page=1" -->"www.codewars.com?page=1"

//given a url
//return the url with everything after the # removed

//any other special characters or symbols aside from "#"?
//return empty string if given empty string?

//split string at "#" and return element from array at index 0

function removeUrlAnchor(url){
    return url.split("#")[0]
  }
  