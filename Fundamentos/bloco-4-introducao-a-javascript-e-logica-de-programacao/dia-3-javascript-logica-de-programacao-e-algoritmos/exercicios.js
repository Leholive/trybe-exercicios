//1. O fatorial é representado pelo sinal !
//! = 4 x 3 x 2 x 1 = 24

//let fatorial = 10;

//for(let index = 1; index < 10; index += 1){
 //   fatorial = fatorial * index
//}
//console.log(fatorial)



//2.
//let word = 'tryber';
//contra = " ";

//for(let index = 0; index < word.length; index += 1){
//   contra += word[word.length -1 -index]
//}
//console.log(contra)


//3.

let array = ['java', 'javascript', 'python', 'html', 'css'];

let big = array [0];
let small = array [0];

for(let index = 0; index < array.length; index += 1){
    if (array[index].length > big.length){
        big = array [index];
    }
}

for(let index = 0; index < array.length; index += 1){
    if (array[index].length < small.length){
        small = array [index];
    }
}

console.log(big)
console.log(small)