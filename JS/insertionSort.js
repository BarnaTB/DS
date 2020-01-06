let insertionSort = (inputArr) => {
    let length = inputArr.length;
    for (let i = 1; i < length; i++) {
        let key = inputArr[i];
        let j = i - 1;
        while (j >= 0 && inputArr[j] > key) {
            inputArr[j + 1] = inputArr[j];
            j = j - 1;
        }
        inputArr[j + 1] = key;
    }
    return inputArr;
};

$(document).ready(function(){
    $('#addBtn').click(function(event){
		event.preventDefault();
		var unsorted = $('#unsorted').val();
        var unsorted = unsorted.split(',');
        var numbers_array = unsorted.map(function (unsorted) { 
            return parseInt(unsorted, 10); 
          });

        $('#sorted').empty();
        $('#sorted').append('[' + insertionSort(numbers_array) + ']');
    });
});