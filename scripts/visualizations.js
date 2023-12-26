
var speed= 1000;

inputAlgoSpeed.addEventListener("input", algoRunningSpeed);

function algoRunningSpeed()
{
    var runningSpeed= inputAlgoSpeed.value;
    switch(parseInt(runningSpeed))
    {
        case 1: speed=1;
                break;
        case 2: speed=10;
                break;
        case 3: speed=100;
                break;
        case 4: speed=1000;
                break;
        case 5: speed=10000;
                break;
    }
    
    delayTime= 10000/(Math.floor(arraySize/10)*speed);        //Decrease numerator to increase speed.
}

var delayTime= 10000/(Math.floor(arraySize/10)*speed);        //Decrease numerator to increase speed.
var c_delay= 0;//This is updated on every div change so that the change is visible.

function updateBar(containerSortingBars, barHeight, barColor)
{
    window.setTimeout(function(){
        containerSortingBars.style=" margin:0% " + marginBetweenBars + "%; width:" + (100/arraySize-(2*marginBetweenBars)) + "%; height:" + barHeight + "%; background-color:" + barColor + ";";
    }, c_delay += delayTime);
}

function enable_buttons()
{
    window.setTimeout(function(){
        btnGenerateArray.classList= []
        for(var i=0; i<btnAlgoList.length; i++)
        {
            btnAlgoList[i].classList= [];
            // btnAlgoList[i].classList.add("Button-unselected");  

            btnAlgoList[i].disabled= false;
        }
        inputArraySize.disabled= false;
        btnGenerateArray.disabled= false;
        inputAlgoSpeed.disabled= false;

    }, c_delay += delayTime);
}
