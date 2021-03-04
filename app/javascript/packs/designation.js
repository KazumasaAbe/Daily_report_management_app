

document.addEventListener("turbolinks:load", function() {
  $(function(){

    var d = $('#user_attendances_over_time'); // 入力対象のinputタグID名

    var e = $('#add10'); // 出力対象のinputタグID名


    d.on('change', function() {
      var dd = $(this).val();

      switch (dd) {
        case "0":
          var total = "480";
          break;
        case "0.25":
          var total = "495";
          break;
        case "0.5":
          var total = "510";
          break;
        case "0.75":
          var total = "525";
          break;
        case "1.0":
          var total = "540";
          break;
        case "1.25":
          var total = "555";
          break;
        case "1.5":
          var total = "570";
          break;
        case "1.75":
          var total = "585";
          break;
        case "2.0":
          var total = "600";
          break;
        case "2.25":
          var total = "615";
          break;
        case "2.5":
          var total = "630";
          break;
        case "2.75":
          var total = "645";
          break;
        case "3.0":
          var total = "660";
          break;
      }

        e.val(total);
    });

    window.onpageshow = function() {
 
      var dd = $(d).val();

      switch (dd) {
        case "0":
          var total = "480";
          break;
        case "0.25":
          var total = "495";
          break;
        case "0.5":
          var total = "510";
          break;
        case "0.75":
          var total = "525";
          break;
        case "1.0":
          var total = "540";
          break;
        case "1.25":
          var total = "555";
          break;
        case "1.5":
          var total = "570";
          break;
        case "1.75":
          var total = "585";
          break;
        case "2.0":
          var total = "600";
          break;
        case "2.25":
          var total = "615";
          break;
        case "2.5":
          var total = "630";
          break;
        case "2.75":
          var total = "645";
          break;
        case "3.0":
          var total = "660";
          break;
      }

        e.val(total);
      
   
  };
  });
});