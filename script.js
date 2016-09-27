$(document).ready(function() {
  $('img').click(function() {
    var source = $(this).attr('src');
    console.log(source);
    $('.jumbotron').css('background-image','url(' + source + ')');
  });
});

function colorSelect () {
  var userColor = $('#color-picker :selected').text();
  if (userColor === "rose") {
    $('.filter').css('background-color', 'rgba(244,0,0,0.3)');
    console.log(userColor);
  } else if (userColor === "bleu") {
    $('.filter').css('background-color', 'rgba(0,0,244,0.3)');
  } else if (userColor === "vert") {
    $('.filter').css('background-color', 'rgba(0,244,0,0.3)');
  }
}

$(document).ready(function() {
    $('#color-picker').change(function() {
      colorSelect();
    });
});
