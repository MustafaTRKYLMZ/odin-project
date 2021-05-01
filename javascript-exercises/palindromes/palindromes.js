const palindromes = function(string) {
    var re = /[\W_]/g
let newString = string.toLowerCase().replace(re,' ')
let reverseNewString = newString.split(' ').reverse().join(' ');
return newString === reverseNewString;
}

module.exports = palindromes
