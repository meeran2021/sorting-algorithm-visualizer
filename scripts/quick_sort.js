function Quick()
{
    //Setting Time complexities
    document.getElementById("best-time").innerText= "Best Case: O(N^2)";
    document.getElementById("average-time").innerText= "Average Case: Θ(N log N)";
    document.getElementById("worst-time").innerText= "Worst Case: Ω(N log N)";

    //Setting Space complexity
    document.getElementById("best-space").innerText= "Worst Case: O(log N)";

    c_delay=0;

    quick_sort(0, arraySize-1);

    enable_buttons();
}

function quick_partition(start, end)
{
    var i= start+1;
    var piv = barSizes[start] ;//make the first element as pivot element.
    updateBar(bars[start], barSizes[start], "yellow");

        for(var j= start + 1; j <= end; j++)
        {
            //re-arrange the array by putting elements which are less than pivot on one side and which are greater that on other.
            if (barSizes[j] < piv)
            {
                updateBar(bars[j], barSizes[j], "yellow");

                updateBar(bars[i], barSizes[i], "red");
                updateBar(bars[j], barSizes[j], "red");

                var temp= barSizes[i];
                barSizes[i]= barSizes[j];
                barSizes[j]= temp;

                updateBar(bars[i], barSizes[i], "red");
                updateBar(bars[j], barSizes[j], "red");

                updateBar(bars[i], barSizes[i], "blue");
                updateBar(bars[j], barSizes[j], "blue");

                i += 1;
            }
    }
    updateBar(bars[start], barSizes[start], "red");
    updateBar(bars[i-1], barSizes[i-1], "red");
    
    var temp= barSizes[start];//put the pivot element in its proper place.
    barSizes[start]= barSizes[i-1];
    barSizes[i-1]= temp;

    updateBar(bars[start], barSizes[start], "red");
    updateBar(bars[i-1], barSizes[i-1], "red");

    for(var t=start;t<=i;t++)
    {
        updateBar(bars[t], barSizes[t], "green");
    }

    return i-1;//return the position of the pivot
}

function quick_sort (start, end )
{
    if( start < end )
    {
        //stores the position of pivot element
        var piv_pos = quick_partition (start, end ) ;     
        quick_sort (start, piv_pos -1);//sorts the left side of pivot.
        quick_sort (piv_pos +1, end) ;//sorts the right side of pivot.
    }
 }
