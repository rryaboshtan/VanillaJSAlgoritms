// Самая длинная подстрока палиндрома (динамическое программирование)
// По заданной строке найдите в ней самую длинную подстроку палиндрома. Вы можете предположить, что максимальная длина составляет 1000.

// Пример 1:
//      Введите: "Бабад"
//      Выход: "баб"
//      Примечание: «аба» также является правильным ответом.
// Пример 2:
//      Введите: "cbbd"
//      Выход: "бб"

// Сложность алгоритма О(n ** 2) по скорости и О(1) по памяти
function longestPalindrom(s) {
   if (s.length === 0) {
      return '';
   }
   len = s.length;
   if (len === 1) {
      return s;
   }

   longest = 1;
   start = 0;

   for (let i = 0; i < len - 1; i++) {
      if (s[i] === s[i + 1]) {
         start = i;
         longest = 2;
      }
   }
   // Палиндромы длиной 1 и 2 мы уже перебрали выше, теперь перебираем более длинные
   for (let l = 3; l <= len; l++) {
      for (let i = 0; i + l - 1 < len; i++) {
         j = l + i - 1;

         if (s[i] === s[j]) {
            start = i;
            longest = l;
         }
      }
   }

   return s.substr(start, longest);
}

console.log(longestPalindrom('babad')); // 'aba'
console.log(longestPalindrom('babab')); // 'babab'
console.log(longestPalindrom('babafff')); // 'bab' или 'fff'
