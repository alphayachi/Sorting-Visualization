const graphBox = document.querySelector('.graph-box');

//bubble Sort

const bubbleSort = function(graph){
    var sortingbars = graph.querySelectorAll('.sorting-bars');
    Array.from(sortingbars).forEach((bar, i) => {
        setTimeout(() => {
            sortingbars.forEach((compbar, j) => {
                setTimeout(() => {
                    if(bar.offsetHeight > compbar.offsetHeight){
                        var temp = bar.offsetHeight;
                        var comptemp = compbar.offsetHeight;
                        bar.style.height=`${comptemp}px`;
                        compbar.style.height = `${temp}px`;
                    }
                },j*300)
                
            });
        }, i*100)
        
    });
}


//Selection Sort


const selectionSort = function(graph){
    const sortingbars = Array.from(graph.querySelectorAll('.sorting-bars'));
    const sortingbarsLength = sortingbars.length;
    for(let i=0; i<sortingbarsLength; i++){
        let min = i;
        setTimeout(() => {
            for(let j=i; j<sortingbarsLength; j++){
                var minHeight = sortingbars[min].offsetHeight;
                var jHeight = sortingbars[j].offsetHeight;
                if(minHeight > jHeight){
                    min = j;
                }
            }
            var heightmin = sortingbars[min].offsetHeight;
            var iheight = sortingbars[i].offsetHeight;
            sortingbars[i].style.height = `${heightmin}px`;
            sortingbars[min].style.height = `${iheight}px`;
        }, i*100);
        
    }
}




