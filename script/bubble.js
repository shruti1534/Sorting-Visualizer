const bubblesortbtn = document.querySelector('.bubblesort');    //select bubblesort button
bubblesortbtn.addEventListener('click',async function(){        //onclicking bubble-sort button
    disableSortingBtn();
    // disableSizeSlider();
    // disableNewArrayBtn();
    bubble_text();
    await bubble();
    enableSortingBtn();
    // enableSizeSlider();
    // enableNewArrayBtn();
});

async function bubble(){
    console.log('bubble-sort-');
    const ele = document.querySelectorAll('.mystyle');          //seslect all bars
    console.log(ele.length);

    //bubble sort
    for(let i=0;i<ele.length-1;i++){
        for(let j=0;j<ele.length-i-1;j++){
            ele[j].style.background = '#2261e9';
            ele[j+1].style.background = '#2261e9';
            if(parseInt(ele[j].style.height) > parseInt(ele[j+1].style.height)){
                console.log('In if condition');
                await new Promise(resolve => setTimeout(() => {resolve(), delay(2)})); //delay
                swap(ele[j],ele[j+1]);      //swapping
            }
            console.log('done');
            ele[j].style.background = 'green';
            ele[j+1].style.background = 'green';
        }
        ele[ele.length-1-i].style.background = 'rgb(230, 150, 190)';
    }
    ele[0].style.background = 'rgb(230, 150, 190)';
}


function bubble_text(){
    const text = document.querySelector('.addon');
    text.innerHTML = 'Bubble sort, is a simple sorting algorithm of that repeatedly steps through the list, compares adjacent elements and swaps them if they are in the wrong order. The steps through the list is repeated until the list is sorted. Complexity- O(n^2)';
}