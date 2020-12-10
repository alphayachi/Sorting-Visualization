const graphBox = document.querySelector('.graph-box');
var array = [];
//bubble Sort
var time = 0;
const bubbleSort = async function(){
    var sortingbars = graphBox.querySelectorAll('.sorting-bars');
    var bars = Array.from(sortingbars);
    for(let i=0; i<bars.length-1; i++){

        for(let j=0; j<bars.length-i-1; j++){
            sortingbars[j].style.background = '#000';
            sortingbars[j+1].style.background = '#000';
            await new Promise(resolve => setTimeout(() => {
                
                let heightofj = sortingbars[j].offsetHeight;
                let heightofnextj =  sortingbars[j+1].offsetHeight;
                if(heightofj > heightofnextj){
                    sortingbars[j].style.height = `${heightofnextj}px`;
                    sortingbars[j+1].style.height = `${heightofj}px`;
                }
                resolve();
            },70));
                
            sortingbars[j].style.background = 'rgb(143, 109, 197)';
        }

        sortingbars[bars.length-i-1].style.background ="#cc0066";
        
    }
    sortingbars[0].style.background ="#cc0066";
}


//Selection Sort


const selectionSort = async function(){
    var sortingbars = graphBox.querySelectorAll('.sorting-bars');
    var bars = Array.from(sortingbars);
    for(let i=0; i<bars.length-1; i++){
        let min = i;
        
        for(let j=i; j<bars.length; j++){
            sortingbars[j].style.background ="#ffbb33";
            await new Promise(resolve => setTimeout(() => {
                let heightMin = sortingbars[min].offsetHeight;
                let heightj = sortingbars[j].offsetHeight;
                if(heightMin >= heightj){
                    sortingbars[min].style.background = "rgb(143, 109, 197)";
                    min = j;
                }
                resolve();
            }, 50));
            sortingbars[j].style.background ="rgb(143, 109, 197)";
            sortingbars[min].style.background = "#000";
        }

        let minHeight  = sortingbars[min].offsetHeight;
        let heighti = sortingbars[i].offsetHeight;
        sortingbars[i].style.height = `${minHeight}px`;
        sortingbars[min].style.height = `${heighti}px`;
        sortingbars[min].style.background = "rgb(143, 109, 197)";
        sortingbars[i].style.background = "#cc0066";
        

    }
    sortingbars[bars.length-1].style.background ="#cc0066";
}



//Merge Sort-------------------------------------------


const mergeSort = async function(){
    let sortingbars = graphBox.querySelectorAll('.sorting-bars');
    let bars = Array.from(sortingbars);
    let n = sortingbars.length;
    for(let curr_size=1; curr_size<=n-1; curr_size = 2*curr_size){

        for(let left_start=0; left_start<n-1; left_start += 2*curr_size){
            let mid = Math.min((left_start+curr_size-1), n-1);
            let right_end = Math.min((left_start+2*curr_size-1), n-1);


            let left_arr = [];
            let right_arr = [];
            let index = 0;
            for(let i=left_start; i<=mid; i++){
                left_arr[index] = sortingbars[i].offsetHeight; 
                index++;
            }
            index = 0;
            for(let i=mid+1; i<=right_end; i++){
                right_arr[index] = sortingbars[i].offsetHeight;
                index++; 
            }
            let i=0;
            let j=0;
            let k = left_start;
            let n1 = mid-left_start+1;
            let n2 = right_end-mid;
            while(i<n1 && j<n2){
                sortingbars[k].style.background = '#000';

                //ANimation timeout herrrrreeee ......

                await new Promise(resolve => setTimeout(() => {
                    resolve();
                }, 100));
                
                
                if(left_arr[i] <= right_arr[j]){
                    let minHeight = left_arr[i];
                    sortingbars[k].style.height = `${minHeight}px`;
                    i++;
                } else{
                    let minHeight = right_arr[j];
                    sortingbars[k].style.height = `${minHeight}px`;
                    j++;
                }
                sortingbars[k].style.background = '#cc0066';
                k++;
            }
            sortingbars[k].style.background = '#cc0066';
            while(i<n1){
                let minHeight = left_arr[i];
                sortingbars[k].style.height = `${minHeight}px`;
                i++;
                k++;
            }
            while(j<n2){
                let minHeight = right_arr[j];
                sortingbars[k].style.height = `${minHeight}px`;
                j++;
                k++;
            }



        }
    }
}


//insertion sort

const insertionSort = async function(){
    var sortingbars = graphBox.querySelectorAll('.sorting-bars');
    var bars = Array.from(sortingbars);
    let n = bars.length;
    for(let i=1; i<n; i++){
        let current = sortingbars[i].offsetHeight;
        let j = i-1;
        //color coding 
        sortingbars[i].style.background = '#000';
        while(j>-1 && (current < sortingbars[j].offsetHeight)){
            sortingbars[j].style.background ='#ffbb33';
            await new Promise(resolve => setTimeout(() => {
                
                let height = sortingbars[j].offsetHeight;
                sortingbars[j+1].style.height =`${height}px`;
                sortingbars[j].style.background ='#cc0066';
                j--;

                resolve();
            }, 200));
        }

        sortingbars[j+1].style.height = `${current}px`;
        sortingbars[i].style.background = '#cc0066';
        
    }

}



//QuickSort finally ..... XD

const quickSort = function(){
    let sortingbars = graphBox.querySelectorAll('.sorting-bars');
    let record = [];
    let top = -1;
    let e = sortingbars.length - 1;

    record[++top] = 0;
    record[++top] = e;
    while(top>=0){
        e = record[top--];
        let s = record[top--];

        let i = s-1;
        for(let j=s; j<e; j++){
            if(sortingbars[j].offsetHeight <= sortingbars[e].offsetHeight){
                i++;
                let minHeight = sortingbars[j].offsetHeight;
                let maxHeight = sortingbars[i].offsetHeight;
                sortingbars[j].style.height = `${maxHeight}px`;
                sortingbars[i].style.height = `${minHeight}px`;
            }
        }
        let minHeight = sortingbars[i+1].offsetHeight;
        let pivHeight = sortingbars[e].offsetHeight;
        sortingbars[e].style.height = `${minHeight}px`;
        sortingbars[i+1].style.height = `${pivHeight}px`;
        i++;


        if(i-1>s){
            record[++top] = s;
            record[++top] = i-1;
        }
        if(i+1 < e){
            record[++top] = i+1;
            record[++top] = e;
        }
    }

}


const randIntGenerator = function(min,max){
    return Math.floor(Math.random() * (max-min) + min);
}


const GenerateRandomBars = function(){
    
    graphBox.innerHTML = '';

    for(let i=0; i<50; i++){
        graphBox.innerHTML += `
            <div class="sorting-bars"></div>
        `;
        let height = randIntGenerator(5, 400);
        array[i] = height;
        let bar = graphBox.querySelectorAll('.sorting-bars');
        bar[i].style.height = `${height}px`;
        bar[i].style.background = 'rgb(143, 109, 197)';
    }
}



//GenerateRandomBars();
//insertionSort();
//var sortingbars = graphBox.querySelectorAll('.sorting-bars');
///var bars = Array.from(sortingbars);




