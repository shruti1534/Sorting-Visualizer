const insertionsortbtn = document.querySelector('.insertionsort');    //select insertionsort button
insertionsortbtn.addEventListener('click',async function(){        //onclicking insertion-sort button
    disableSortingBtn();
    // disableSizeSlider();
    // disableNewArrayBtn();
    insertion_text();
    await insertion();
    enableSortingBtn();
    // enableSizeSlider();
    // enableNewArrayBtn();
});

async function insertion(){
    console.log('insertion-sort-');
    const ele = document.querySelectorAll('.mystyle');          //seslect all bars
    console.log(ele.length);

    //insertion sort
    ele[0].style.background = 'rgb(230, 150, 190)';
    let key,i,j;
    for(i=1;i<ele.length;i++){
        console.log('Loop');
        key = ele[i].style.height;
        j = i - 1;

        ele[i].style.background = 'blue';

        // await waitforme(delay);
        await new Promise(resolve => setTimeout(() => {resolve(), delay(2)})); //delay
        /* Move elements of arr[0..i-1], that are
        greater than key, to one position ahead
        of their current position */
        while (j >= 0 && parseInt(ele[j].style.height) > parseInt(key)){
            console.log('In while loop');
            ele[j].style.background = 'blue';
            ele[j + 1].style.height = ele[j].style.height;
            j--;
        
        // await waitforme(delay);
        await new Promise(resolve => setTimeout(() => {resolve(), delay(2)})); //delay
        //color
            for(let k = i; k >= 0; k--){
                ele[k].style.background = 'rgb(230, 150, 190)';
            }
        }
        ele[j + 1].style.height = key;
        // color
        ele[i].style.background = 'rgb(230, 150, 190)';
    }
}

function insertion_text(){
    const text = document.querySelector('.addon');
    text.innerHTML = 'Insertion sort is a simple sorting algorithm that works similar to the way you sort playing cards in your hands. The array is virtually split into a sorted and an unsorted part. Values from the unsorted part are picked and placed at the correct position in the sorted part. Complexity- O(n^2)';
}
