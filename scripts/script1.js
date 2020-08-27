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
            }, 15));
                
            sortingbars[j].style.background = 'red';
        }

        sortingbars[bars.length-i-1].style.background ="blue";
        
    }
    sortingbars[0].style.background ="blue";
}


//Selection Sort


const selectionSort = async function(){
    var sortingbars = graphBox.querySelectorAll('.sorting-bars');
    var bars = Array.from(sortingbars);
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
            }, 10));
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



//Merge Sort --------- ERROR ERROR ERROR ERROR---------------
//ERRORS DO IT LATER

const merge = (arr1, arr2, arr) => {
    //let sorted = [];

    let k = 0;
    while (arr1.length && arr2.length) {
        if (arr1[0].offsetHeight < arr2[0].offsetHeight) arr[k].parentNode.replaceChild(arr1.shift(), arr[k]);
        else arr[k].parentNode.replaceChild(arr2.shift(), arr[k]);
    };

    while(arr1.length >0){
        arr[k].parentNode.replaceChild(arr1.shift(), arr[0]);
    }
    while(arr2.length >0){
        arr[k].parentNode.replaceChild(arr2.shift(), arr[0]);
    }
  
    return arr;
};

const mergeSort = function(arr){
    if (arr.length <= 1) return arr;
    let mid = Math.floor(arr.length / 2);
    const left = mergeSort(arr.slice(0, mid));
    const right = mergeSort(arr.slice(mid));

    return merge(left, right, arr);
};
//-------^^^^^^^-----ERROR ERROR ERROR ERROR ---------^^^^^^^^-------------

//insertion sort

const insertionSort = async function(){
    var sortingbars = graphBox.querySelectorAll('.sorting-bars');
    var bars = Array.from(sortingbars);
    let n = bars.length;
    for(let i=1; i<n; i++){
        let current = sortingbars[i].offsetHeight;
        let j = i-1;
        //color coding 
        sortingbars[i].style.background = 'green';
        while(j>-1 && (current < sortingbars[j].offsetHeight)){
            sortingbars[j].style.background ='yellow';
            await new Promise(resolve => setTimeout(() => {
                
                let height = sortingbars[j].offsetHeight;
                sortingbars[j+1].style.height =`${height}px`;
                sortingbars[j].style.background ='blue';
                j--;

                resolve();
            }, 50));
        }

        sortingbars[j+1].style.height = `${current}px`;
        sortingbars[i].style.background = 'blue';
        
    }

}



//QuickSort finally ..... XD

const quickSort = function(){

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
        bar[i].style.background = 'red';
    }
}



//GenerateRandomBars();
//insertionSort();
//var sortingbars = graphBox.querySelectorAll('.sorting-bars');
///var bars = Array.from(sortingbars);




