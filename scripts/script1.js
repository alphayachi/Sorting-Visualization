const graphBox = document.querySelector('.graph-box');

//Selection Sort

const selectionSort = function(graph){
    const sortingbars = graph.childNodes;
    sortingbars.forEach((bar, i) => {
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

selectionSort(graphBox);