var inputArraySize= document.getElementById('input-array-size');
var arraySize= inputArraySize.value;
var btnGenerateArray= document.getElementById("button-array-generate");
var inputAlgoSpeed= document.getElementById("input-algo-speed");

var btnAlgoList= document.querySelectorAll(".algorithm-list button");

var barSizes= [];
var bars= [];
var marginBetweenBars;
var containerSortingBars= document.getElementById("container-sorting-bars");
containerSortingBars.style= "flex-direction:row";


btnGenerateArray.addEventListener("click", generateArray);
inputArraySize.addEventListener("input", updateArraySize);

function generateArray()
{
    containerSortingBars.innerHTML= "";

    for(var i= 0; i<arraySize; i++)
    {
        barSizes[i]= Math.floor(Math.random() * 0.5 * (inputArraySize.max) ) + 20;
        bars[i]= document.createElement("div");
        containerSortingBars.appendChild(bars[i]);
        marginBetweenBars= 0.1;
        bars[i].style= " margin:0% " + marginBetweenBars + "%; background-color:blue; width:" + (100/arraySize-(2*marginBetweenBars)) + "%; height:" + (barSizes[i]) + "%;";
    }
}

function updateArraySize()
{
    arraySize= inputArraySize.value;
    generateArray();
}

window.onload= updateArraySize();

//Running the appropriate algorithm.
for(var i=0; i<btnAlgoList.length; i++)
{
    btnAlgoList[i].addEventListener("click", run);
}

function disableButtons()
{
    // btnGenerateArray.classList= [];
    btnGenerateArray.classList.add("Button-locked");
    inputArraySize.disabled= true;
    btnGenerateArray.disabled= true;
    inputAlgoSpeed.disabled= true;

    for(var i=0; i<btnAlgoList.length; i++)
    {
        btnAlgoList[i].classList= [];
        btnAlgoList[i].classList.add("Button-locked");

        btnAlgoList[i].disabled= true;
    }
}

function run()
{
    disableButtons();

    this.classList.add("Button-selected");
    
    switch(this.innerHTML)
    {
        case "Bubble":
            Bubble();
            break;
        case "Selection":
            Selection_sort();
            break;
        case "Insertion":
            Insertion();
            break;
        case "Merge":
            Merge();
            break;
        case "Quick":
            Quick();
            break;
        case "Heap":
            Heap();
            break;
    }
}
