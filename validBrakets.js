let s1 = '()'; //true
let s2 = '()[]{}'; //true
let s3 = '(]'; //false
let s4 = '{[]}'; //true
let s5 = '([)]'; //false
let s6 = '{[[{}]{}]}()()'; //true

function isValid(s) {
    let stack = [];
    let brackets = {
        ')': '(',
        '}': '{',
        ']': '[',
    }

    for (let i = 0; i < s.length; i++) {
        const current = s[i];
        
        if (isClosedBracket(current)) {
            if (brackets[current] !== stack.pop()) {
                return false;
            }
        } else {
            stack.push(current);
        }
    }

    return stack.length === 0;
}

function isClosedBracket(ch) {
    return [')', '}', ']'].indexOf(ch) > -1;
}

console.log(s1, isValid(s1));
console.log(s2, isValid(s2));
console.log(s3, isValid(s3));
console.log(s4, isValid(s4));
console.log(s5, isValid(s5));
console.log(s6, isValid(s6));