function selectionSort(arr) {

    for (var i = 0; i < arr.length; i++) {

        let min = i; //  storing the index of minimum element

        for (var j = i + 1; j < arr.length; j++) {
            if (arr[min] > arr[ j ]) {
                min = j; // updating the index of minimum element
            }
        }

        if (i !== min) {
            let temp = arr[ i ];
            arr[ i ] = arr[min];
            arr[min] = temp;
        }
    }
    return arr
}

$(document).ready(function(){
    $('#addBtn').click(function(event){
		event.preventDefault();
		var unsorted = $('#unsorted').val();
        var unsorted = unsorted.split(',');
        var numbers_array = unsorted.map(function (unsorted) { 
            return parseInt(unsorted, 10); 
          });
        var sorted_array = selectionSort(numbers_array);

        $('#sorted').empty();
        $('#sorted').append('[' + sorted_array + ']');
    });
});