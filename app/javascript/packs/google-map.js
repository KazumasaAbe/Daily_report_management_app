

document.addEventListener("turbolinks:load", function() {
  $(function(){

    var f = $('#add7'); // 入力対象のinputタグID名



    f.on('change', function() {
      var ff = $(this).val();

      switch (ff) {
        case "通常":
          answer = false;
          break;
        case "出張":
          answer = true;
          break;
      }

        answer;
    });

    window.onpageshow = function() {
 
      var ff = $(f).val();

      switch (ff) {
        case "通常":
           answer = false;
          break;
        case "出張":
           answer = true;
          break;
      }

      answer;
   
  };
  });
});