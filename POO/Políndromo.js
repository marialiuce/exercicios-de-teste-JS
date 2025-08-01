function isPalindrome(str){

    const cleanedString = str.toLowerCase().replace(/[^a-z0-9]/g, '');

    const reversedString = cleanedString.split('').reverse().join('');
    return cleanedString === reversedString;
}

console.log(`"A base do teto desaba" é um palíndromo? -> ${isPalindrome("A base do teto desaba")}`);
console.log(`"ovo" é um palíndromo? -> ${isPalindrome("ovo")}`);
console.log(`"programação" é um palíndromo? -> ${isPalindrome("programação")}`);
console.log(`"Socorram-me, subi no ônibus em Marrocos" é um palíndromo? -> ${isPalindrome("Socorram-me, subi no ônibus em Marrocos")}`);