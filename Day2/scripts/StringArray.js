let str = "Become a Javascript Pro and learn one of the employer's most requested skills of 2020!";
// concat will append the String with the original String
console.log(str.concat('....'));
// repeat will repeat the string with n times
console.log(str.repeat(3));
//show String value in the particular range and it doesnt include whitespace
console.log(str.substr(3,10));
//show String value in the particular range and it includes whitespace
console.log(str.substring(3,10));
//same as subString
console.log(str.slice(3,10));

let arr = [1,4,3,2];
//shows length of an array
console.log(arr.length);
//splice will remove the element in particular range
console.log(arr.splice(0,1));
//sort method will sort the given array
arr.sort();
console.log(arr);
