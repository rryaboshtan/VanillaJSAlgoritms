// Представьте себе треугольник, составленный из чисел.
// Одно число расположено в вершине.Ниже размещено два числа, затем три, и так до нижней грани.
// Вы начинаете на вершине, и нужно спуститься к основанию треугольника.
// За каждый ход вы можете спуститься на один уровень и выбрать между двумя числами под текущей позицией.
// По ходу движения вы «собираете» и суммируете числа, которые проходите.
// Ваша цель – найти максимальную сумму, которую можно получить из различных маршрутов.

// Динамическое программирование сложность О(n**2)
const pyramWord = '5645643222222313133154331237';
const pyramLeng = 7;
//   5, 6, 4, 5, 6, 4, 3;
//     2, 2, 2, 2, 2, 2;
//      3, 1, 3, 1, 3;
//        3, 1, 5, 4;
//         3, 3, 1;
//           2, 3;
//             7;

//Main function
function createPyramid(pyramWord) {
   let pyram = new Array(pyramLeng);
   let index = 0;

   for (let i = 0; i < pyramLeng; i++) {
      pyram[i] = new Array(pyramLeng - i);
      for (let j = 0; j < pyramLeng - i; j++) {
         pyram[i][j] = Number(pyramWord[index]);
         index++;
      }
   }
   return pyram;
}
function pyramPrint(pyram) {
   let space = '  ';
   for (let i = 0; i < pyramLeng; i++) {
      let str = space;
      for (let j = 0; j < pyramLeng - i; j++) {
         str += j < pyramLeng - i - 1 ? pyram[i][j] + ' , ' : pyram[i][j];
      }
      console.log();
      console.log(str);
      space += '  ';
   }
}

function maxSum(pyram) {
   for (let i = 1; i < pyramLeng; i++) {
      for (let j = 0; j < pyramLeng - i; j++) {
         pyram[i][j] += Math.max(pyram[i - 1][j], pyram[i - 1][j + 1]);
      }
   }
   return pyram[pyramLeng - 1][0];
}

const pyram = createPyramid(pyramWord);
pyramPrint(pyram);

console.log(maxSum(pyram));

// Result 29
