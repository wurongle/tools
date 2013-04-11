var textarea = $('#textarea');

$('#beautify-html').click(function (e) {
    textarea.val(style_html(textarea.val()));
    showTips(this);
});
$('#beautify-js').click(function (e) {
    textarea.val(js_beautify(textarea.val()));
    showTips(this);
});
$('#beautify-css').click(function (e) {
    textarea.val(css_beautify(textarea.val()));
    showTips(this);
});
$('#compress').click(function (e) {
    var me = this;
    $.post('http://nodejs506.duapp.com/api/uglify',
      {
        'code':textarea.val(),
        'beautify':0
      },
      function (data) {
        textarea.val(data);
        showTips(me);
      }
    );
});
$('#copy').click(function (e) {
    clip.setText(textarea.val());
    showTips(this);
});
$('#clean').click(function (e) {
    textarea.val('');
    showTips(this);
});

var clip = new ZeroClipboard( document.getElementById("copy-button"), {
  moviePath: "./ZeroClipboard/ZeroClipboard.swf"
} );

clip.on( 'load', function(client) {
  console.log( "movie is loaded" );
} );

clip.on( 'complete', function(client, args) {
  this.style.display = 'none'; // "this" is the element that was clicked
  console.log("Copied text to clipboard: " + args.text );
} );

clip.on( 'mouseover', function(client) {
  console.log("mouse over");
} );

clip.on( 'mouseout', function(client) {
  console.log("mouse out");
} );

clip.on( 'mousedown', function(client) {

  console.log("mouse down");
} );

clip.on( 'mouseup', function(client) {
  console.log("mouse up");
} );

function showTips (me) {
    $(me).tooltip({trigger: 'manual'});
    setTimeout(function (argument) {
        $(me).tooltip('show');
    },500);
    setTimeout(function (argument) {
        $(me).tooltip('hide');
    },1000);
}