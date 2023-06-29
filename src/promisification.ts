function delay(ms: number): Promise<void> {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

function sumArrayElements(array: number[]): Promise<number> {
  return new Promise((resolve) => {
    const sum = array.reduce((acc,element) => {
      return acc + element;
    }, 0);
    resolve(sum);
  });
}

async function calculateSumWithDelay(array: number[], delayMs: number): Promise<number> {
  await delay(delayMs);
  return await sumArrayElements(array);
}

const array = [1, 2, 3, 4, 5];
const delayMs = 2000;

calculateSumWithDelay(array, delayMs)
  .then((sum) => {
    console.log('Сумма элементов массива:', sum);
  })
  .catch((error) => {
    console.error('Произошла ошибка:', error);
  });
