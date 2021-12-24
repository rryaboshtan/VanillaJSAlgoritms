// Подстрока палиндрома [динамическое программирование]

// Для данной строки ваша задача - подсчитать, сколько подстрок палиндрома содержится в этой строке.
// Подстроки с разными начальными или конечными положениями, даже если они состоят из одних и тех же символов,
//     будут считаться разными подстроками.
// Пример 1:
//      Ввод: «abc»
//      Вывод: 3
//      Explanation: Три подстроки палиндрома: «a», «b», «c».
// Пример 2:
//      Ввод: «ааа»
//      Вывод: 6
//      Объяснение: 6 подстрок палиндрома: «a», «a», «a», «aa», «aa», «aaa».

// Длина входной строки не превышает 1000.

function countSubstring(s) {
   count = 0;
   len = s.length;
   // Объявляем матрицу состояний для динамического программирования
   dp = new Array(len);
   for (let i = 0; i < dp.length; i++) {
      dp[i] = new Array(len);
   }

   for (let i = len - 1; i >= 0; i--) {
      for (let j = i; j < len; j++) {
         dp[i][j] = s.charAt(i) === s.charAt(j) && (j - i < 2 || dp[i + 1][j - 1]);
         if (dp[i][j]) {
            count++;
         }
      }
   }

   return count;
}

console.log(countSubstring('abc'));