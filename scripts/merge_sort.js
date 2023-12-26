function Merge()
{
    //Setting Time complexities
    document.getElementById("best-time").innerText= "Best Case: O(N log N)";
    document.getElementById("average-time").innerText= "Average Case: Θ(N log N)";
    document.getElementById("worst-time").innerText= "Worst Case: Ω(N log N)";

    //Setting Space complexity
    document.getElementById("best-space").innerText= "Worst Case: O(N)";

    c_delay=0;

    merge_partition(0, arraySize-1);

    enable_buttons();
}

function merge_sort(start, mid, end)
{
    var p= start, q= mid+1;

    var Arr= [], k= 0;

    for(var i= start; i<=end; i++)
    {
        if(p>mid)
        {
            Arr[k++]= barSizes[q++];
            updateBar(bars[q-1], barSizes[q-1], "red");
        }
        else if(q>end)
        {
            Arr[k++]= barSizes[p++];
            updateBar(bars[p-1], barSizes[p-1], "red");
        }
        else if(barSizes[p]<barSizes[q])
        {
            Arr[k++]= barSizes[p++];
            updateBar(bars[p-1], barSizes[p-1], "red");
        }
        else
        {
            Arr[k++]= barSizes[q++];
            updateBar(bars[q-1], barSizes[q-1], "red");
        }
    }

    for(var t=0;t<k;t++)
    {
        barSizes[start++]= Arr[t];
        updateBar(bars[start-1], barSizes[start-1], "green");
    }
}

function merge_partition(start, end)
{
    if(start < end)
    {
        var mid= Math.floor((start + end) / 2);
        updateBar(bars[mid], barSizes[mid], "yellow");

        merge_partition(start, mid);
        merge_partition(mid+1, end);

        merge_sort(start, mid, end);
    }
}
