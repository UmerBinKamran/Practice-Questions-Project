const questions = [
  {
    id: 1,
    question: "Q1: Remove duplicate numbers from array",
    code: `const arr = [1, 2, 2, 3, 4, 4, 5];
const result = [...new Set(arr)];
return result;`,
    solve: () => {
      const arr = [1, 2, 2, 3, 4, 4, 5];
      return [...new Set(arr)];
    },
  },
  {
    id: 2,
    question: "Q2: Reverse string from variable",
    code: `const str = "hello";
const result = str.split("").reverse().join("");
return result;`,
    solve: () => {
      const str = "hello";
      return str.split("").reverse().join("");
    },
  },
  {
    id: 3,
    question: "Q3: Even/odd numbers from array",
    code: `const arr = [1,2,3,4,5,6];
const even = arr.filter(n => n % 2 === 0);
const odd = arr.filter(n => n % 2 !== 0);
return { even, odd };`,
    solve: () => {
      const arr = [1, 2, 3, 4, 5, 6];
      return {
        even: arr.filter((n) => n % 2 === 0),
        odd: arr.filter((n) => n % 2 !== 0),
      };
    },
  },
  {
    id: 4,
    question: "Q4: Find largest number from array",
    code: `const arr = [10,25,5,40,15];
return Math.max(...arr);`,
    solve: () => {
      const arr = [10, 25, 5, 40, 15];
      return Math.max(...arr);
    },
  },
  {
    id: 5,
    question: "Q5: Count vowels in a string",
    code: `const str = "javascript";
const vowels = "aeiou";
const count = str
  .toLowerCase()
  .split("")
  .filter(c => vowels.includes(c)).length;
return count;`,
    solve: () => {
      const str = "javascript";
      const vowels = "aeiou";
      return str
        .toLowerCase()
        .split("")
        .filter((c) => vowels.includes(c)).length;
    },
  },
  {
    id: 6,
    question: "Q6: Capitalize first letter",
    code: `const str = "react";
return str.charAt(0).toUpperCase() + str.slice(1);`,
    solve: () => {
      const str = "react";
      return str.charAt(0).toUpperCase() + str.slice(1);
    },
  },
  {
    id: 7,
    question: "Q7: Remove falsy values from array",
    code: `const arr = [0, "hello", false, "", 42, null, undefined];
return arr.filter(Boolean);`,
    solve: () => {
      const arr = [0, "hello", false, "", 42, null, undefined];
      return arr.filter(Boolean);
    },
  },
  {
    id: 8,
    question: "Q8: Array sum",
    code: `const arr = [1,2,3,4];
return arr.reduce((sum, num) => sum + num, 0);`,
    solve: () => {
      const arr = [1, 2, 3, 4];
      return arr.reduce((sum, num) => sum + num, 0);
    },
  },
  {
    id: 9,
    question: "Q9: Find missing number from array",
    code: `const arr = [1,2,4,5];
const n = 5;
const expected = (n*(n+1))/2;
const actual = arr.reduce((a,b)=>a+b,0);
return expected - actual;`,
    solve: () => {
      const arr = [1, 2, 4, 5];
      const n = 5;
      const expected = (n * (n + 1)) / 2;
      const actual = arr.reduce((a, b) => a + b, 0);
      return expected - actual;
    },
  },
];

export default questions;
