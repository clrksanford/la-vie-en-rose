$(document).ready(function() {
  //When image is clicked at bottom, it appears in jumbotron
  $('img').on('click', imageSelector);

  //When color selected from dropdown, apply filter over jumbotron
  $('#color-picker').change(function() {
    colorSelect();
  });

  //When random button clicked, apply random filter color
  $('.random').click(function() {

    var color = colorRandomizer();

    $('.filter').css('background-color', color);
  });

  //When reset button is clicked, page resets
  $('.reset').on('click', reset);
});

// Image selector function

function imageSelector (event) {
  var source = $(this).attr('src');
  $('h2').css('visibility','hidden');
  $('.jumbotron').css('background-image','url(' + source + ')');
}

// Color filter selector function

function colorSelect () {
  var userColor = $('#color-picker :selected').text();
  if (userColor === "rose") {
    $('.filter').css('background-color', 'rgba(244,0,0,0.25)');
  } else if (userColor === "bleu") {
    $('.filter').css('background-color', 'rgba(0,0,244,0.25)');
  } else if (userColor === "vert") {
    $('.filter').css('background-color', 'rgba(0,244,0,0.25)');
  }
}

// Reset function

function reset() {
  $('.jumbotron').css('background', "url('images/edith2.jpg')");
  $('.jumbotron').css('background-position','center');
  $('.jumbotron').css('background-size','cover');
  $('.filter').css('background-color','rgba(255,0,0,0.3)');
  $('h2').css('visibility','visible');
  $('select').prop('selectedIndex',0);
}

//Color randomizer
function colorRandomizer () {
  var red = Math.round(Math.random() * 255);
  var green = Math.round(Math.random() * 255);
  var blue = Math.round(Math.random() * 255);

  var color = 'rgba(' + red + "," + green + "," + blue + ",0.25)";

  return color;
}
