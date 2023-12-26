function Heap()
{
    //Setting Time complexities
    document.getElementById("best-time").innerText= "Best Case: O(N log N)";
    document.getElementById("average-time").innerText= "Average Case: Θ(N log N)";
    document.getElementById("worst-time").innerText= "Worst Case: Ω(N log N)";

    //Setting Space complexity
    document.getElementById("best-space").innerText= "Worst Case: O(1)";

    c_delay= 0;

    heap_sort();
    
    enable_buttons();
}

function swap(i,j)
{
    updateBar(bars[i],barSizes[i],"red");
    updateBar(bars[j],barSizes[j],"red");

    var temp= barSizes[i];
    barSizes[i]= barSizes[j];
    barSizes[j]= temp;

    updateBar(bars[i],barSizes[i],"red");
    updateBar(bars[j],barSizes[j],"red");

    updateBar(bars[i],barSizes[i],"blue");
    updateBar(bars[j],barSizes[j],"blue");
}

function max_heapify(n, i)
{
    var largest= i;
    var l= 2*i+1;
    var r= 2*i+2;

    if(l<n && barSizes[l]>barSizes[largest])
    {
        if(largest != i)
        {
            updateBar(bars[largest], barSizes[largest], "blue");
        }

        largest= l;

        updateBar(bars[largest], barSizes[largest], "red");
    }

    if(r<n && barSizes[r]>barSizes[largest])
    {
        if(largest != i)
        {
            updateBar(bars[largest], barSizes[largest], "blue");
        }

        largest=r;

        updateBar(bars[largest], barSizes[largest], "red");
    }

    if(largest != i)
    {
        swap(i, largest);

        max_heapify(n, largest);
    }
}

function heap_sort()
{
    for(var i= Math.floor(arraySize/2)-1; i>=0; i--)
    {
        max_heapify(arraySize,i);
    }

    for(var i=arraySize-1;i>0;i--)
    {
        swap(0,i);
        updateBar(bars[i], barSizes[i], "green");
        updateBar(bars[i], barSizes[i], "yellow");

        max_heapify(i,0);

        updateBar(bars[i], barSizes[i], "blue");
        updateBar(bars[i], barSizes[i], "green");
    }
    updateBar(bars[i], barSizes[i], "green");
}