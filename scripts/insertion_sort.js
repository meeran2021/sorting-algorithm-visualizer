function Insertion()
{
    //Setting Time complexities
    document.getElementById("best-time").innerText= "Best Case: O(N^2)";
    document.getElementById("average-time").innerText= "Average Case: Θ(N^2)";
    document.getElementById("worst-time").innerText= "Worst Case: Ω(N)";

    //Setting Space complexity
    document.getElementById("best-space").innerText= "Worst Case: O(1)";

    c_delay=0;

    for(var j=0; j<arraySize; j++)
    {
        updateBar(bars[j],barSizes[j],"yellow");

        var key= barSizes[j];
        var i= j-1;
        while(i>=0 && barSizes[i]>key)
        {
            updateBar(bars[i], barSizes[i], "red");
            updateBar(bars[i+1], barSizes[i+1], "red");

            barSizes[i+1]= barSizes[i];

            updateBar(bars[i], barSizes[i], "red");
            updateBar(bars[i+1], barSizes[i+1], "red");
    
            updateBar(bars[i], barSizes[i], "blue");
            if(i==(j-1))
            {
                updateBar(bars[i+1], barSizes[i+1], "yellow");
            }
            else
            {
                updateBar(bars[i+1], barSizes[i+1], "blue");
            }
            i -= 1;
        }
        barSizes[i+1]= key;

        for(var t=0; t<j; t++)
        {
            updateBar(bars[t], barSizes[t], "green");
        }
    }
    updateBar(bars[j-1], barSizes[j-1], "green");

    enable_buttons();
}
