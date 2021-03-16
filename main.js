const str = 'Smartacademy';

const newStr = str
     .split('')
     .reverse()
     .join('');
console.log(newStr)


var numbers = '123456789'
console.log(parseInt(numbers))

for(var i=0; i<numbers.length; i++){
    console.log( numbers[i]**numbers[i])
}



let startingnum = "123456789"
var numbers = startingnum.split``.map(x=>+x);
for(j=0; j <= numbers.length-1; j++) {
    for(g=1; g <= numbers.length; g++){
     console.log(Math.pow(numbers[j],g))
    }
}
