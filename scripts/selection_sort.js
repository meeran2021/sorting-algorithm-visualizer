function Selection_sort()
{
    //Setting Time complexities
    document.getElementById("best-time").innerText= "Best Case: O(N^2)";
    document.getElementById("average-time").innerText= "Average Case: Θ(N^2)";
    document.getElementById("worst-time").innerText= "Worst Case: Ω(N^2)";

    //Setting Space complexity
    document.getElementById("best-space").innerText= "Worst Case: O(1)";

    c_delay= 0;

    for(var i=0; i<arraySize-1; i++)
    {
        updateBar(bars[i], barSizes[i], "red"); 

        index_min= i;

        for(var j= i+1; j<arraySize; j++)
        {
            updateBar(bars[j], barSizes[j], "yellow"); 

            if(barSizes[j]<barSizes[index_min])
            {
                if(index_min != i)
                {
                    updateBar(bars[index_min], barSizes[index_min], "blue"); 
                }
                index_min=j;
                updateBar(bars[index_min], barSizes[index_min], "red"); 
            }
            else
            {
                updateBar(bars[j], barSizes[j], "blue"); 
            }
        }
        
        if(index_min!=i)
        {
            var temp= barSizes[index_min];
            barSizes[index_min]= barSizes[i];
            barSizes[i]= temp;

            updateBar(bars[index_min], barSizes[index_min], "red"); 
            updateBar(bars[i], barSizes[i], "red"); 
            updateBar(bars[index_min], barSizes[index_min], "blue"); 
        }
        updateBar(bars[i], barSizes[i], "green"); 
    }
    updateBar(bars[i], barSizes[i], "green"); 

    enable_buttons();
}
