function palindrome(str) {
    str = str.toLowerCase().replace(/\s/g, '');
    // str = str.split(' ').join('');
    
   return str === str.split('').reverse().join('');
}

function palindrome2(str) {
    str = str.toLowerCase();
    const len = Math.floor(str.length / 2);

    for (let i = 0; i < len; i++) {
        if (str[i] !== str[str.length - i - 1]) {
            return false;
        }        
    }

    return true
}

console.log(palindrome2('racecar'));
console.log(palindrome('table'));
console.log(palindrome2('Анна'));
console.log(palindrome('А Роза       упала на   лапу Азора'));
