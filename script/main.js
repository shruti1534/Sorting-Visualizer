// select create-new button
var create_btn = document.getElementById("create");
// onclick event
create_btn.addEventListener("click",createbar);

//select size of slider
var arr_size=document.querySelector("#arr_sz");
// eventlistener
arr_size.addEventListener("input",function(){
    console.log(arr_size.value, typeof(arr_size.value));
    createbar(parseInt(arr_size.value));
});

createbar();

function createbar(bars=60){
    //delete old bars
    deletechild();
    console.log(parseInt(bars));
    var bar= parseInt(bars);
    // new array/bars
    var array = [];
    for(var i=1;i<=60;i++){
        console.log("y");
        var num = Math.floor(Math.random() * 400) + 1;        //randomize numbers declaration
        array.push(num);            //add random num to array
    }

    // select bars portion from html
    var element = document.getElementById("bars");
    // for each bar/array element
    console.log(array.length);
    for (var i = 0; i < array.length; i++) {
        var new_bar = document.createElement("div");    //create new div
        new_bar.style.height = `${array[i]}px`;        //give them height
        new_bar.classList.add('mystyle');           //add a class
        // console.log(new_bar);                   
        element.appendChild(new_bar);           //add that div to html content
    }
}

//deleting previous to create new one without refreshing
function deletechild(){
    var element = document.getElementById("bars");
    element.innerHTML = '';
}
