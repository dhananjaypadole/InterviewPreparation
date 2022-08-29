
// convert 1st char of string to upper case 

// Input = 'how are you'
// Output = 'How Are You'

// Input: [ 'how', 'are', 'you' ]
// output:[ 'How', 'Are', 'You' ]



// convert 1st char of string to upper case 
//==========     ***********     reverse STRING      ************      ==================

function stringToUpperCase(){
    let string ='how are you';
     // ---------------- 1) ShortCut Method--------------
     let answer = string.split(' ').map(ele => ele.charAt(0).toLocaleUpperCase()+ele.substring(1)).join(' ')
     console.log(answer); 

    //----------------- 2) Long Method Without using methods---------
            // let stringToArray = string.split(' ');
            // let finalArray=[];
            // let finalArrayCount=0;
            
            // //looping over complete array
            // for (let index = 0; index < stringToArray.length; index++) {
            //     finalArray[finalArrayCount]  = (stringToArray[index].charAt(0).toUpperCase()+stringToArray[index].substring(1));
            //     finalArrayCount++
            // }
            // //array to string
            // let answer = finalArray.join(' ')
            // console.log(answer);

    }

    stringToUpperCase();

//==========     ***********     reverse ARRAy      ************      ==================
function arrayToUpperCase(){
    let array = ['how', 'are', 'you'];

    // ---------------- 1) ShortCut Method--------------
        let answer = array.map(ele => ele.charAt(0).toUpperCase()+ele.substring(1))
        console.log(answer);

    //----------------- 2) Long Method Without using methods---------
    // let element=[];
    // let count=0;
    //     for (let index = 0; index < array.length; index++) {
    //          element[count] = array[index].charAt(0).toUpperCase()+array[index].substring(1);
    //          count++
    //     }

    }
    arrayToUpperCase();