input:
// ['hello','apple','horse','dhanu']
output:
// ['hallo','appla','horsa','dhanu']

function replaceChar() {
    let array = ['hello', 'apple', 'horse', 'dhanu'];
    for (let index = 0; index < array.length; index++) {
        if (array[index].includes('e'))
            array[index] = array[index].replace('e', 'a')
    }
    console.log(array);
}
replaceChar();