input:
// [3,5,2,4,1]
output:
// [1,2,3,4,5]
ImpMethods:
// 1) sort() 2) sort().reverse()

Points:
// 1) While loop:  in case of without method dont forget While loop

function assending() {
    let array = [3, 5, 2, 4, 1];

    //==========     ***********     Assending      ************      ==================

    // ----------------  ShortCut Method--------------
    console.log(array.sort());

    // ----------------  Without Method--------------
    // let count = array.length;
    // let temp;
    // while (count > 0) {
    //     for (let index = 0; index < array.length; index++) {
    //         if(array[index] > array[index + 1])
    //         {
    //             temp = array[index + 1];
    //             array[index + 1] = array[index]
    //             array[index] = temp
    //         }
            
    //     }
    //     count--;
    // }
    // console.log(array);
}

assending()

function desc(){
    
    let array = [3, 5, 2, 4, 1];

    //==========     ***********     Desc     ************      ==================

    // ----------------  ShortCut Method--------------
    console.log(array.sort().reverse());

    
    // ----------------  Without Method--------------
// let count = array.length -1;
// let temp;
//     while (count > 0) {
//         for (let index = 0; index < array.length; index++) {
//             if(array[index] < array[index+1]){
//                 temp = array[index]
//                 array[index] = array[index+1]
//                 array[index+1] = temp
//             }            
//         }
//         count--;
//     }
//     console.log(array);
}
desc()