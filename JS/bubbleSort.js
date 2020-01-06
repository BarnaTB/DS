function bubbleSort(arr) {
    var n = arr.length;
    var t;
    var swap = true;

    for (var i = 0; i < n; i++) {
        for (var j = 0; j < n; j++) {
            if (arr[j] > arr[j + 1]) {
                t = arr[j + 1];
                arr[j + 1] = arr[j];
                arr[j] = t;
            }
        }
    };

    return arr;
}

$(document).ready(function(){
    $('#addBtn').click(function(event){
		event.preventDefault();
		var unsorted = $('#unsorted').val();
        var unsorted = unsorted.split(',');
        var numbers_array = unsorted.map(function (unsorted) { 
            return parseInt(unsorted, 10); 
          });

        $('#sorted').empty();
        $('#sorted').append('[' + bubbleSort(numbers_array) + ']');
    });
});