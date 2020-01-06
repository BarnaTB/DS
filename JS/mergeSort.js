function partition(items, left, right) {
  var pivot   = items[Math.floor((right + left) / 2)], //middle element
      i       = left, //left pointer
      j       = right; //right pointer
  while (i <= j) {
      while (items[i] < pivot) {
          i++;
      }
      while (items[j] > pivot) {
          j--;
      }
      if (i <= j) {
          swap(items, i, j); //swap two elements
          i++;
          j--;
      }
  }
  return i;
}

function quickSort(items) {
  var index;
  var left = 0;
  var right = items.length - 1;
  if (items.length > 1) {
      index = partition(items, left, right); //index returned from partition
      if (left < index - 1) { //more elements on the left side of the pivot
          quickSort(items, left, index - 1);
      }
      if (index < right) { //more elements on the right side of the pivot
          quickSort(items, index, right);
      }
  }
  return items;
}

$(document).ready(function(){
  $('#addBtn').click(function(event){
  event.preventDefault();
  var unsorted = $('#unsorted').val();
      var unsorted = unsorted.split(',');
      var numbersArray = unsorted.map(function (unsorted) { 
          return parseInt(unsorted, 10); 
        });

      $('#sorted').empty();
      $('#sorted').append('[' + quickSort(numbersArray) + ']');
  });
});