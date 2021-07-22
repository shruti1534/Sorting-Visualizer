// swap function
function swap(el1, el2){
    console.log('In swap-');
    let temp = el1.style.height;
    el1.style.height = el2.style.height;
    el2.style.height = temp;
}

// disables sorting buttons used in conjunction with enable, so that we can disable during sorting and enable buttons after it
function disableSortingBtn(){
    document.querySelector(".bubblesort").disabled = true;
    document.querySelector(".insertionsort").disabled = true;
    document.querySelector(".mergesort").disabled = true;
    document.querySelector(".quicksort").disabled = true;
    document.querySelector(".selectionsort").disabled = true;
    document.querySelector(".heap").disabled = true;
}

// Enables sorting buttons used in conjunction with disable
function enableSortingBtn(){
    document.querySelector(".bubblesort").disabled = false;
    document.querySelector(".insertionsort").disabled = false;
    // document.querySelector(".mergesort").disabled = false;
    // document.querySelector(".quicksort").disabled = false;
    document.querySelector(".selectionsort").disabled = false;
    // document.querySelector(".heap").disabled = false;
}

// Disables size slider used in conjunction with enable, so that we can disable during sorting and enable buttons after it
// function disableSizeSlider(){
//     document.querySelector("#arr_sz").disabled = true;
// }

// Enables size slider used in conjunction with disable
// function enableSizeSlider(){
//     document.querySelector("#arr_sz").disabled = false;
// }

// Disables newArray buttons used in conjunction with enable, so that we can disable during sorting and enable buttons after it
// function disableNewArrayBtn(){
//     document.querySelector(".newArray").disabled = true;
// }

// Enables newArray buttons used in conjunction with disable
// function enableNewArrayBtn(){
//     document.querySelector(".newArray").disabled = false;
// }

//
