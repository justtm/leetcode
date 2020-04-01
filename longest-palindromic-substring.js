var longestPalindrome = function(s) {
    var newStr = '$#' + s.split('').join('#') + '#';
    var radius = new Array(newStr.length).fill(0);
    let maxLength = 0;
    let id = 0;
    let maxRight = 0;
    let current = 0;
    for(let i = 0; i < newStr.length; i++) {
        if(i < maxRight) {
            radius[i] = Math.min(radius[2* id - i], maxRight - i)
        } else {
            radius[i] = 1;
        }
        while(newStr[i + radius[i]] == newStr[i - radius[i]]) radius[i]++;
        if(i + radius[i] > maxRight) {
            id = i;
            maxRight = i + radius[i]
        }
        if(radius[i] >= maxLength) {
            maxLength = radius[i];
            current = id;
        }
    }
    maxLength = maxLength - 1;
    return newStr.substr(current - maxLength, 2 * maxLength + 1).replace(/#/g, '')
}
console.log(longestPalindrome("babad")) // aba
console.log(longestPalindrome("cbbd"))  // bb
console.log(longestPalindrome("ccc"))   // ccc