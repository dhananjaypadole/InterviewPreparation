// I/O:

// Input: "How Are You"
// output: "You Are How"

// Input: ['How', 'Are', 'You']
// output:[ 'You', 'Are', 'How' ]

// Logic:
// shortcut
// string.split(" ").reverse().join(" ")
//longcut 
// for(let i=stringToArray.length - 1;i >= 0; i--  ){
//     reverseArray[count] = stringToArray[i]
//     count++;
// }

// Points to Remember :
// 1) to reverse string always convert string to array then reverse it 
// string --> array --> revrse
// 1) Space between split(' ')  and join(' ')

// 1)
//==========     ***********     reverse STRING      ************      ==================

function reverseString() {
    let string = "How Are You";
    
    // ---------------- 1) ShortCut Method--------------
            let answer = string.split(" ").reverse().join(" ");
            console.log(answer); 

    //----------------- 2) Long Method Without using methods---------
            // let stringToArray = string.split(" ");
            // let reverseArray=[];
            // let count=0;
            // for(let i=stringToArray.length - 1;i >= 0; i--  ){
            //     reverseArray[count] = stringToArray[i]
            //     count++;
            // }
            // let answer = reverseArray.join(" ");
            // console.log(answer);

}

reverseString();

// 2)
//==========     ***********     reverse ARRAY       ************      ==================

function reverseArray() {
    let array = ['How', 'Are', 'You'];
   
    // ---------------- 1) ShortCut Method--------------
            let answer = array.reverse();
            console.log(answer); 

    //----------------- 2) Long Method Without using methods---------
  
            // let reverseArray=[];
            // let count=0;
            // for(let i=array.length - 1;i >= 0; i--  ){
            //     reverseArray[count] = array[i]
            //     count++;
            // }
            // let answer = reverseArray
            // console.log(answer); 
    
}

reverseArray()
