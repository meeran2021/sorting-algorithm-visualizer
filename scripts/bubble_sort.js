function Bubble()
{
    //Setting Time complexities
    document.getElementById("best-time").innerText="Best Case: O(N^2)";
    document.getElementById("average-time").innerText="Average Case: Θ(N^2)";
    document.getElementById("worst-time").innerText="Worst Case: Ω(N)";

    //Setting Space complexity
    document.getElementById("best-space").innerText="Worst Case: O(1)";

    c_delay=0;  

    for(var i=0; i<arraySize-1; i++)
    {
        for(var j=0; j<arraySize-i-1; j++)
        {
            updateBar(bars[j], barSizes[j], "yellow");

            if(barSizes[j]>barSizes[j+1])
            {
                updateBar(bars[j], barSizes[j], "red");
                updateBar(bars[j+1], barSizes[j+1], "red");

                var temp= barSizes[j];
                barSizes[j]= barSizes[j+1];
                barSizes[j+1]= temp;

                updateBar(bars[j], barSizes[j], "red");
                updateBar(bars[j+1], barSizes[j+1], "red");
            }
            updateBar(bars[j], barSizes[j], "blue");
        }
        updateBar(bars[j], barSizes[j], "green");
    }
    updateBar(bars[0], barSizes[0], "green");

    enable_buttons();
}
