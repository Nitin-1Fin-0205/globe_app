// async function apiCall(){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve('Success')
//         }, 50)
//     })
//     }

// async function logger(){
//     setTimeout(() => {
//         console.log('a')
//     }, 10)
//     console.log(await apiCall())
//     console.log('c')
// }
// logger()

////////////////////d

// const arr = new Array(2);
// arr[1] = "a";
// arr[3] = "b";

// console.log("length", arr.length);

// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

////////////////////////

// const arr = [];
// try {
//   arr.push("try");
//   throw new Error();
// } catch (e) {
//   arr.push("catch");
// } finally {
//   arr.push("finally");
// }

// console.log(arr);

///////////////////////

// let x = 0;
// parent.addEventListener('click', () => x++);
// child.addEventListener('click', () => {
//     event.parentDefault();
//     x++;
// });

// function areArraysDeepEqual(a, b) {
//     return [...a] == [...b];
//   }

//   const a = [1, 2, 3];
//   const b = [1, 2, 3];

//   if (areArraysDeepEqual(a, b)) {
//     console.log('Arrays a and b are deeply equal.');
//   } else {
//     console.log('Arrays a and b are not deeply equal.');
//   }

//////////////////////////////

// "use strict";

// var g = false;
// console.log(g);

//////////////////

// function* gen1(){
//     console.log(yield 1)
//     console.log(yield 2)
//     console.log(yield 3)

// }

// const it = gen1()
// console.log(it.next('a').value)
// console.log(it.next('b').value)
// console.log(it.next('c').value)

////////////////////////

// function Queue() {
//     const data = []
//     return {
//         enqueue(item) {
//             data.push(item)
//         },
//         dequeue() {
//             return data.pop()
//         }

//     }
// }

// const myQueue = Queue()

// myQueue.enqueue(1)
// myQueue.enqueue(2)

// const r1 = myQueue.dequeue() === 1
// const r2 = myQueue.dequeue() === 2
// console.log(r1 && r2)

/////////////////////////////////////////////////////////////////////////////////////

// const post_array = [];
// post_array.push({
//   id: "07281559-0695-0216-0000-c269be8b7592",
//   filters: [
//     ["resource_type", "=", "html"],
//     "and",
//     ["meta.scripts_count", ">", 40],
//   ],
//   order_by: ["meta.content.plain_text_word_count,desc"],
//   limit: 10,
// });
// const axios = require("axios");
// axios({
//   method: "post",
//   url: "https://api.dataforseo.com/v3/on_page/pages",
//   auth: {
//     username: "nitin.gupta@atriina.com",
//     password: "d8899cffb47f4ca5",
//   },
//   data: post_array,
//   headers: {
//     "content-type": "application/json",
//   },
// })
//   .then(function (response) {
//     var result = response["data"]["tasks"][0]["data"];
//     // Result data

//     console.log(result);
//   })
//   .catch(function (error) {
//     console.log(error);
//   });

class myclass {
  a = 1;
  b = 2;
  constructor() {
    a = 1;
    b = 2;
    console.log(this.a + this.b);
  }

  get() {
    return this.a + this.b;
  }
}

const myobj = new myclass();
console.log(myobj.get());

function Queue() {
  const data = [];
  return {
    enqueue(item) {
      data.push(item);
    },
    dequeue() {
      return data.pop();
    },
  };
}

const myQueue = Queue();

myQueue.enqueue(1);
myQueue.enqueue(2);

const r1 = myQueue.dequeue() === 1;
const r2 = myQueue.dequeue() === 2;
console.log(r1 && r2);
