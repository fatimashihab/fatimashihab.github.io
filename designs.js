// Select color input
const color=$('#colorPicker');

// Select size input
const height=$('#inputHeight');
const width=$('#inputWidth');

// When size is submitted by the user, call makeGrid()

function makeGrid(grid_height, grid_width) {
    var table = document.getElementById("pixelCanvas");
    $('tbody').remove();
    for (let x=0; x<grid_height; x++){
      var row = table.insertRow(0);
      for (let y=0; y<grid_width; y++){
        var cell = row.insertCell(y);
      }
    }
  };

//on submission
function createGrid(){
    $('#submit').on('click',function(){
        event.preventDefault();
        let rows=height.val();
        let columns=width.val();
        makeGrid(rows,columns);
    });
};
createGrid();
$('body').on('click','td',function(){
  $(this).css('background-color',color.val());
});
