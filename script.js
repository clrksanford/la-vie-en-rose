// Image selector function

$(document).ready(function() {
  $('img').click(function() {
    var source = $(this).attr('src');
    $('h2').css('visibility','hidden');
    $('.jumbotron').css('background-image','url(' + source + ')');
    // $('select').prop('selectedIndex',0);
  });
});

// Color filter selector function

function colorSelect () {
  var userColor = $('#color-picker :selected').text();
  if (userColor === "rose") {
    $('.filter').css('background-color', 'rgba(244,0,0,0.25)');
    $('header').css('background-color', '#ffb3b3');
    $('.image-selector').css('background-color', '#ff8080');
  } else if (userColor === "bleu") {
    $('.filter').css('background-color', 'rgba(0,0,244,0.25)');
    $('header').css('background-color', 'rgba(0,0,244,0.2)');
    $('.image-selector').css('background-color', 'rgba(0,0,244,0.2)');
  } else if (userColor === "vert") {
    $('.filter').css('background-color', 'rgba(0,244,0,0.25)');
    $('header').css('background-color', 'rgba(0,244,0,0.2)');
    $('.image-selector').css('background-color', 'rgba(0,244,0,0.2)');
  }
}

$(document).ready(function() {
    $('#color-picker').change(function() {
      colorSelect();
    });
});

// Reset function

$(document).ready(function() {
  $('button').click(function() {
    $('.jumbotron').css('background', "url('images/edith2.jpg')");
    $('.jumbotron').css('background-position','center');
    $('.jumbotron').css('background-size','cover');
    $('.filter').css('background-color','rgba(255,255,255,0)');
    $('h2').css('visibility','visible');
    $('select').prop('selectedIndex',0);
  });
});
