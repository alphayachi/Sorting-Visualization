const generator = document.querySelector('.generator');
const selection = document.querySelector('.selection');
const mergesorter = document.querySelector('.merge');
const insertion = document.querySelector('.insertion');
const bubble = document.querySelector('.bubble');
const quick = document.querySelector('.quick');

generator.addEventListener("click", GenerateRandomBars);
selection.addEventListener("click", selectionSort);
mergesorter.addEventListener("click", mergeSort);
bubble.addEventListener("click", bubbleSort);
insertion.addEventListener("click", insertionSort);
quick.addEventListener("click", quickSort);