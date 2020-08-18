const graphBox = document.querySelector('.graph-box');
var array = [];
//bubble Sort
var time = 0;
const bubbleSort = async function(){
    var sortingbars = graphBox.querySelectorAll('.sorting-bars');
    var bars = Array.from(sortingbars);
    for(let i=0; i<bars.length-1; i++){

        for(let j=0; j<bars.length-i-1; j++){
            sortingbars[j].style.background = 'green';
            sortingbars[j+1].style.background = 'green';
            await new Promise(resolve => setTimeout(() => {
                
                let heightofj = sortingbars[j].offsetHeight;
                let heightofnextj =  sortingbars[j+1].offsetHeight;
                if(heightofj > heightofnextj){
                    sortingbars[j].style.height = `${heightofnextj}px`;
                    sortingbars[j+1].style.height = `${heightofj}px`;
                }
                resolve();
            }, 200));
                
            sortingbars[j].style.background = 'red';
        }

        sortingbars[bars.length-i-1].style.background ="blue";
        
    }
    sortingbars[0].style.background ="blue";
}


//Selection Sort


const selectionSort = async function(){
    const sortingbars = graphBox.querySelectorAll('.sorting-bars');
    const bars = Array.from(sortingbars);
    for(let i=0; i<bars.length-1; i++){
        let min = i;
        
        for(let j=i; j<bars.length; j++){
            sortingbars[j].style.background ="pink";
            await new Promise(resolve => setTimeout(() => {
                let heightMin = sortingbars[min].offsetHeight;
                let heightj = sortingbars[j].offsetHeight;
                if(heightMin >= heightj){
                    sortingbars[min].style.background = "red";
                    min = j;
                }
                resolve();
            }, 100));
            sortingbars[j].style.background ="red";
            sortingbars[min].style.background = "green";
        }

        let minHeight  = sortingbars[min].offsetHeight;
        let heighti = sortingbars[i].offsetHeight;
        sortingbars[i].style.height = `${minHeight}px`;
        sortingbars[min].style.height = `${heighti}px`;
        sortingbars[min].style.background = "red";
        sortingbars[i].style.background = "blue";
        

    }
    sortingbars[bars.length-1].style.background ="blue";
}

//Merge Sort

const Merge = function(arrayb, arrayc){
    var arrayd = [];
    if(arrayb.length==0 && arrayc.length==0){
        return arrayd;
    }else if(arrayb.length==0){
        arrayd.concat(arrayc);
        return arrayd;
    }else if(arrayc.length==0){
        arrayd.concat(arrayb);
        return arrayd;
    }
    if(arrayb[0]<=arrayc[0]){
        let value = arrayb.shift();
        arrayd.push(value);
        Merge(arrayb, arrayc);
    }else{
        let value = arrayc.shift();
        arrayd.push(value);
        Merge(arrayb, arrayc);
    }
}

const mergeSort = function(){
    const sortingbars = graphBox.querySelectorAll('.sorting-bars')
    const bars = Array.from(sortingbars);
    var height = [];
    for(let i=0; i<bars.length; i++){
        height[i] = sortingbars[i].offsetHeight;
    }
    if(height.length==1){
        return height;
    }
    var m = height.length / 2;
    var arrayb = mergeSort(arrayb.slice(0, m-1));
    var arrayc = mergeSort(array.slice(m)); 
    var resArray = Merge(arrayb, arrayc);

    return resArray;
}

const randIntGenerator = function(min,max){
    return Math.floor(Math.random() * (max-min) + min);
}


const GenerateRandomBars = function(){
    
    for(let i=0; i<50; i++){
        graphBox.innerHTML += `
            <div class="sorting-bars"></div>
        `;
        let height = randIntGenerator(5, 400);
        array[i] = height;
        let bar = graphBox.querySelectorAll('.sorting-bars');
        bar[i].style.height = `${height}px`;
    }
}

GenerateRandomBars();
selectionSort(graphBox);