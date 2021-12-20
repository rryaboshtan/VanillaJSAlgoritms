// Самая длинная подстрока палиндрома (динамическое программирование)
// По заданной строке найдите в ней самую длинную подстроку палиндрома. Вы можете предположить, что максимальная длина составляет 1000.

// Пример 1:
//      Введите: "Бабад"
//      Выход: "баб"
//      Примечание: «аба» также является правильным ответом.
// Пример 2:
//      Введите: "cbbd"
//      Выход: "бб"

// Сложность алгоритма О(n) по скорости и О(n) по памяти

function longestPalindrom(s) {
   //  Во избежание пересечения границы слева мы добавляем специальный символ перед строкой например ‘$’,
   let manaStr = '$#';
   // Сначала создаем новую строку
   for (let i = 0; i < s.length; i++) {
      manaStr += s[i];
      manaStr += '#';
   }
   // Использовать вспомогательный массив для записи максимальной длины строки палиндрома,
   const rd = new Array(manaStr.length);
   let pos = 0;
   let mx = 0;
   let start = 0;
   let maxLen = 0;
   for (let i = 0; i < manaStr.length; i++) {
      rd[i] = i < mx ? Math.min(rd[2 * pos - i], mx - i) : 1;
      while (i + rd[i] < manaStr.length && i - rd[i] > 0 && manaStr[i + rd[i]] === manaStr[i - rd[i]]) {
         rd[i]++;
      }
      // Если вновь вычисленная крайняя правая точка больше, чем mx, обновляем pos и mx
      if (i + rd[i] > mx) {
         pos = i;
         mx = i + rd[i];
      }
      if (rd[i] - 1 > maxLen) {
         start = Math.floor((i - rd[i]) / 2);
         maxLen = rd[i] - 1;
      }
   }
   return s.substr(start, maxLen);
}

console.log(longestPalindrom('babad')); // 'bab' или 'aba'
console.log(longestPalindrom('babab')); // 'babab'
console.log(longestPalindrom('babafff')); // 'bab' или 'fff'
console.log(longestPalindrom('sdfghbabafff')); // 'bab' или 'fff'
