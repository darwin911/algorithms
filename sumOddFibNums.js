/*
  Sum Odd Fibbonacci Numbers
  ==========================
  Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.

  The first two numbers in the Fibonacci sequence are 1 and 1. Every additional number in the sequence is the sum of the two previous numbers. The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.

  For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less than or equal to 10 are 1, 1, 3, and 5.
  =================================================================
*/

const sumFibs = num => {
  const fibNums = [];
  for (let i = 1; i <= num; i++) {
    if (fibNums.length < 1) {
      fibNums.push(i);
    } else if (fibNums.length === 1) {
      fibNums.push(fibNums[0]);
    } else {
      const nextNum = fibNums[i - 2] + fibNums[i - 3];
      if (nextNum <= num) {
        fibNums.push(nextNum);
      }
    }
  }
  return fibNums.reduce((a, b) => (b % 2 ? a + b : a));
};

// sumFibs(1)
// sumFibs(1000)
// sumFibs(4000000)
// sumFibs(4)
// sumFibs(75024)
console.log(sumFibs(75025));
