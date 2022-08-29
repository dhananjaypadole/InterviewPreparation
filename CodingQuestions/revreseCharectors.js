// I/O:

// Input: "How Are You"
// output: "woH erA uoY"

// Input: ['How', 'Are', 'You']
// output:[ 'woH', 'erA', 'uoY' ]

// Logic:
// shortcut
// string.split(" ").map(ele => ele.split('').reverse().join(''))
//longcut 
// for(let i=stringToArray.length - 1;i >= 0; i--  ){
//     reverseArray[count] = stringToArray[i]
//     count++;
// }

// Points to Remember :
// 1) to reverse string always convert string to array then reverse it 
// string --> array --> revrse
// 1) **DONT** give Space between split(' ')  and join(' ')

// 1)
//==========     ***********     reverse STRING      ************      ==================

function reverseString() {
    let string = "How Are You";
    
    // ---------------- 1) ShortCut Method--------------
            let answer = string.split(" ").map(ele => ele.split('').reverse().join('')).join(' ')
            console.log(answer); 

    //----------------- 2) Long Method Without using methods---------
            //string to array
//             let stringToArray = string.split(" ");
           
//             let reverseCharArray=[];
//             let reverseArray=[];
//             let outerLoopCount=0;

//             //loop complete array (Whole String)
//             for (let index = 0; index < stringToArray.length; index++) {
//                 let curElement = stringToArray[index];
               
//                 //for single wrod
//                 let innerLoopCount=0;
//                 for(let i=curElement.length - 1;i >= 0; i--  ){
//                     reverseCharArray[innerLoopCount] = curElement[i]
//                     innerLoopCount++;
//                 }

//                 // final array (keep track) 
//                 reverseArray[outerLoopCount] = reverseCharArray.join('')
//                 outerLoopCount ++;
//             }

//             //convert array to string
//             let answer = reverseArray.join(" ");
//             console.log(answer);

}

reverseString();

// 2)
//==========     ***********     reverse ARRAY       ************      ==================

function reverseArray() {
    let array = ['How', 'Are', 'You'];
   
    // ---------------- 1) ShortCut Method--------------
            let answer = array.map(ele => ele.split('').reverse().join(''));
            console.log(answer); 

    //----------------- 2) Long Method Without using methods---------
  
            // let reverseCharArray=[];
            // let reverseArray=[];
            // let outerLoopCount=0;

            // //loop complete array (Whole array)
            // for (let index = 0; index < array.length; index++) {
            //     let curElement = array[index];
               
            //     //for single wrod
            //     let innerLoopCount=0;
            //     for(let i=curElement.length - 1;i >= 0; i--  ){
            //         reverseCharArray[innerLoopCount] = curElement[i]
            //         innerLoopCount++;
            //     }

            //     // final array (keep track) 
            //     reverseArray[outerLoopCount] = reverseCharArray.join('')
            //     outerLoopCount ++;
            // }

            // console.log(reverseArray);

    
}

reverseArray();
