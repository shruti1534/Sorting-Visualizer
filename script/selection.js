const selectionsortbtn = document.querySelector('.selectionsort');    //select selectionsort button
selectionsortbtn.addEventListener('click',async function(){        //onclicking selection-sort button
    disableSortingBtn();
    // disableSizeSlider();
    // disableNewArrayBtn();
    selection_text();
    await selection();
    enableSortingBtn();
    // enableSizeSlider();
    // enableNewArrayBtn();
});
    
async function selection(){
    console.log('selection-sort-');
    const ele = document.querySelectorAll('.mystyle');          //seslect all bars
    console.log(ele.length);
        
    //selection sort
    for(let i=0;i<ele.length-1;i++){        // One by one move boundary of unsorted subarray
        // Find the minimum element in unsorted array
        let min_idx = i;
        ele[i].style.background = 'blue';
        for(let j=i+1;j<ele.length;j++){
            ele[j].style.background = 'red';
            // await waitforme(delay);
            await new Promise(resolve => setTimeout(() => {resolve(), delay(2)})); //delay
            if(parseInt(ele[j].style.height) < parseInt(ele[min_idx].style.height)){
                if(min_idx !== i){
                    // new min_index is found so change prev min_index color back to normal
                    ele[min_idx].style.background = 'cyan';
                }
                min_idx = j;
            }
            else{
                // if the currnent comparision is more than min_index change is back to normal
                ele[j].style.background = 'cyan';
            }   
        }
        // await waitforme(delay);
        await new Promise(resolve => setTimeout(() => {resolve(), delay(2)})); //delay
        // Swap the found minimum element with the first element
        swap(ele[min_idx],ele[i]);
        // change the min element index back to normal as it is swapped 
        ele[min_idx].style.background = 'cyan';
        // change the sorted elements color to green
        ele[i].style.background = 'green';
    }
    ele[ele.length-1].style.background = 'green';
}

function selection_text(){
    const text = document.querySelector('.addon');
    text.innerHTML = 'Selection sort is a simple in-place comparison-based sorting algorithm in which the list is divided into two parts, the sorted part at the left end and the unsorted part at the right end. Initially, the sorted part is empty and the unsorted part is the entire list. The smallest element is selected from the unsorted array and swapped with the leftmost element, This process continues untill array is sorted. Complexity- O(n^2)';
}