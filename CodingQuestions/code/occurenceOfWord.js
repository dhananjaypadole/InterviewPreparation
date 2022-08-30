//Return Occurance of charector in string 
// input : 'hi dhanu hi pooja bye padole'
// output: 'hi' = 2, 'dhanu' = 1, 'pooja' = 1, 'padole' =1

// input : ['hi', 'dhanu', 'hi', 'pooja', 'bye', 'padole']
// output: 'hi' = 2, 'dhanu' = 1, 'pooja' = 1, 'padole' =1

Steps:
// 1) convert string to array
// 2) function to get count
// 3) remove duplicate
// 4) call fun to getCount, loop and display
Note:
// 1) 2 returns
// 2) dont do acc++ do acc+1
// 3) while printing use forEach and dont use map.

//==========     ***********     Occurance of charector in string     ************      ==================

function occerenceString() {
    let string = 'hi dhanu hi pooja bye padole';

    //convert string to array 
    stringToArray = string.split(' ');

    //function to get count
    function getCount(elePassed) {
        return stringToArray.reduce((acc, curr) => {
            return (elePassed === curr ? acc + 1 : acc)
        }, 0)
    }

    //remove duplicate
    let uniqueSetOfArray = new Set(stringToArray);

    //call fun to getCount, loop and display  
    uniqueSetOfArray.forEach(ele => { console.log(ele + ' = ' + getCount(ele)) })
}
// occerenceString()

//==========     ***********     Occurance of charector in Array     ************      ==================

function occerenceArray() {
    let array = ['hi', 'dhanu', 'hi', 'pooja', 'bye', 'padole'];

    function getCount(currEle) {
       return array.reduce((acc, curr) => { return curr === currEle ? acc + 1 : acc }, 0)
    }

    new Set(array).forEach(ele => console.log(ele+' = ' + getCount(ele)))
}
occerenceArray();