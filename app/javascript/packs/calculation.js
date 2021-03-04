

document.addEventListener("turbolinks:load", function() {
  $(function(){

    var a = $('#add2'); // 入力対象のinputタグID名
    var b = $('#add3'); // 入力対象のinputタグID名
    var c = $('#add4'); // 入力対象のinputタグID名

    var c0 = $('#count'); // 入力対象のinputタグID名
    var tagOutput = $('#add5'); // 出力対象のinputタグID名

    var cc0 = $(c0).val();
    switch (cc0) {
      case "1":
        var f0 = $('#add100'); // 入力対象のinputタグID名
        break;
      case "2":
        var f0 = $('#add100'); // 入力対象のinputタグID名
        var f1 = $('#add101'); // 入力対象のinputタグID名
      break;
      case "3":
        var f0 = $('#add100'); // 入力対象のinputタグID名
        var f1 = $('#add101'); // 入力対象のinputタグID名
        var f2 = $('#add102'); // 入力対象のinputタグID名
      break;
      case "4":
        var f0 = $('#add100'); // 入力対象のinputタグID名
        var f1 = $('#add101'); // 入力対象のinputタグID名
        var f2 = $('#add102'); // 入力対象のinputタグID名
        var f3 = $('#add103'); // 入力対象のinputタグID名
      break;
      case "5":
        var f0 = $('#add100'); // 入力対象のinputタグID名
        var f1 = $('#add101'); // 入力対象のinputタグID名
        var f2 = $('#add102'); // 入力対象のinputタグID名
        var f3 = $('#add103'); // 入力対象のinputタグID名
        var f4 = $('#add104'); // 入力対象のinputタグID名
      break;
    };



    switch (cc0) {
      case "1":
      case "2":
      case "3":
      case "4":
      case "5":
    f0.on('change', function() {

      var cc0 = $(c0).val();
      switch (cc0) {
        case "1":
          var ff0 = $(f0).val();
          var fff0 = Number(ff0.replace(/[^0-9]/g, '')); // 整数以外の文字列を削除
          total_all = fff0
          break;

        case "2":
          var ff0 = $(f0).val();
          var ff1 = $(f1).val();
          var fff0 = Number(ff0.replace(/[^0-9]/g, '')); // 整数以外の文字列を削除
          var fff1 = Number(ff1.replace(/[^0-9]/g, '')); // 整数以外の文字列を削除
          total_all = fff0 + fff1
          break;

        case "3":
          var ff0 = $(f0).val();
          var ff1 = $(f1).val();
          var ff2 = $(f2).val();
          var fff0 = Number(ff0.replace(/[^0-9]/g, '')); // 整数以外の文字列を削除
          var fff1 = Number(ff1.replace(/[^0-9]/g, '')); // 整数以外の文字列を削除
          var fff2 = Number(ff2.replace(/[^0-9]/g, '')); // 整数以外の文字列を削除
          total_all = fff0 + fff1 + fff2
          break;

        case "4":
          var ff0 = $(f0).val();
          var ff1 = $(f1).val();
          var ff2 = $(f2).val();
          var ff3 = $(f3).val();
          var fff0 = Number(ff0.replace(/[^0-9]/g, '')); // 整数以外の文字列を削除
          var fff1 = Number(ff1.replace(/[^0-9]/g, '')); // 整数以外の文字列を削除
          var fff2 = Number(ff2.replace(/[^0-9]/g, '')); // 整数以外の文字列を削除
          var fff3 = Number(ff3.replace(/[^0-9]/g, '')); // 整数以外の文字列を削除
          total_all = fff0 + fff1 + fff2 + fff3
          break;

          case "5":
          var ff0 = $(f0).val();
          var ff1 = $(f1).val();
          var ff2 = $(f2).val();
          var ff3 = $(f3).val();
          var ff4 = $(f4).val();
          var fff0 = Number(ff0.replace(/[^0-9]/g, '')); // 整数以外の文字列を削除
          var fff1 = Number(ff1.replace(/[^0-9]/g, '')); // 整数以外の文字列を削除
          var fff2 = Number(ff2.replace(/[^0-9]/g, '')); // 整数以外の文字列を削除
          var fff3 = Number(ff3.replace(/[^0-9]/g, '')); // 整数以外の文字列を削除
          var fff4 = Number(ff4.replace(/[^0-9]/g, '')); // 整数以外の文字列を削除
          total_all = fff0 + fff1 + fff2 + fff3 + fff4
          break;
      };

            var aa = $(a).val();
            var aaa = Number(aa.replace(/[^0-9]/g, '')); // 整数以外の文字列を削除

            var bb = $(b).val();
            var bbb = Number(bb.replace(/[^0-9]/g, '')); // 整数以外の文字列を削除

            var cc = $(c).val();
            var ccc = Number(cc.replace(/[^0-9]/g, '')); // 整数以外の文字列を削除

            var total = total_all + aaa + bbb + ccc;

        tagOutput.val(total);
    });
  };

  switch (cc0) {
    case "2":
    case "3":
    case "4":
    case "5":
  f1.on('change', function() {

    var cc0 = $(c0).val();
    switch (cc0) {
      case "1":
        var ff0 = $(f0).val();
        var fff0 = Number(ff0.replace(/[^0-9]/g, '')); // 整数以外の文字列を削除
        total_all = fff0
        break;

      case "2":
        var ff0 = $(f0).val();
        var ff1 = $(f1).val();
        var fff0 = Number(ff0.replace(/[^0-9]/g, '')); // 整数以外の文字列を削除
        var fff1 = Number(ff1.replace(/[^0-9]/g, '')); // 整数以外の文字列を削除
        total_all = fff0 + fff1
        break;

      case "3":
        var ff0 = $(f0).val();
        var ff1 = $(f1).val();
        var ff2 = $(f2).val();
        var fff0 = Number(ff0.replace(/[^0-9]/g, '')); // 整数以外の文字列を削除
        var fff1 = Number(ff1.replace(/[^0-9]/g, '')); // 整数以外の文字列を削除
        var fff2 = Number(ff2.replace(/[^0-9]/g, '')); // 整数以外の文字列を削除
        total_all = fff0 + fff1 + fff2
        break;

      case "4":
        var ff0 = $(f0).val();
        var ff1 = $(f1).val();
        var ff2 = $(f2).val();
        var ff3 = $(f3).val();
        var fff0 = Number(ff0.replace(/[^0-9]/g, '')); // 整数以外の文字列を削除
        var fff1 = Number(ff1.replace(/[^0-9]/g, '')); // 整数以外の文字列を削除
        var fff2 = Number(ff2.replace(/[^0-9]/g, '')); // 整数以外の文字列を削除
        var fff3 = Number(ff3.replace(/[^0-9]/g, '')); // 整数以外の文字列を削除
        total_all = fff0 + fff1 + fff2 + fff3
        break;

        case "5":
        var ff0 = $(f0).val();
        var ff1 = $(f1).val();
        var ff2 = $(f2).val();
        var ff3 = $(f3).val();
        var ff4 = $(f4).val();
        var fff0 = Number(ff0.replace(/[^0-9]/g, '')); // 整数以外の文字列を削除
        var fff1 = Number(ff1.replace(/[^0-9]/g, '')); // 整数以外の文字列を削除
        var fff2 = Number(ff2.replace(/[^0-9]/g, '')); // 整数以外の文字列を削除
        var fff3 = Number(ff3.replace(/[^0-9]/g, '')); // 整数以外の文字列を削除
        var fff4 = Number(ff4.replace(/[^0-9]/g, '')); // 整数以外の文字列を削除
        total_all = fff0 + fff1 + fff2 + fff3 + fff4
        break;
    };

          var aa = $(a).val();
          var aaa = Number(aa.replace(/[^0-9]/g, '')); // 整数以外の文字列を削除

          var bb = $(b).val();
          var bbb = Number(bb.replace(/[^0-9]/g, '')); // 整数以外の文字列を削除

          var cc = $(c).val();
          var ccc = Number(cc.replace(/[^0-9]/g, '')); // 整数以外の文字列を削除

          var total = total_all + aaa + bbb + ccc;

      tagOutput.val(total);
  });
};

switch (cc0) {
  case "3":
  case "4":
  case "5":
f2.on('change', function() {

  var cc0 = $(c0).val();
  switch (cc0) {
    case "1":
      var ff0 = $(f0).val();
      var fff0 = Number(ff0.replace(/[^0-9]/g, '')); // 整数以外の文字列を削除
      total_all = fff0
      break;

    case "2":
      var ff0 = $(f0).val();
      var ff1 = $(f1).val();
      var fff0 = Number(ff0.replace(/[^0-9]/g, '')); // 整数以外の文字列を削除
      var fff1 = Number(ff1.replace(/[^0-9]/g, '')); // 整数以外の文字列を削除
      total_all = fff0 + fff1
      break;

    case "3":
      var ff0 = $(f0).val();
      var ff1 = $(f1).val();
      var ff2 = $(f2).val();
      var fff0 = Number(ff0.replace(/[^0-9]/g, '')); // 整数以外の文字列を削除
      var fff1 = Number(ff1.replace(/[^0-9]/g, '')); // 整数以外の文字列を削除
      var fff2 = Number(ff2.replace(/[^0-9]/g, '')); // 整数以外の文字列を削除
      total_all = fff0 + fff1 + fff2
      break;

    case "4":
      var ff0 = $(f0).val();
      var ff1 = $(f1).val();
      var ff2 = $(f2).val();
      var ff3 = $(f3).val();
      var fff0 = Number(ff0.replace(/[^0-9]/g, '')); // 整数以外の文字列を削除
      var fff1 = Number(ff1.replace(/[^0-9]/g, '')); // 整数以外の文字列を削除
      var fff2 = Number(ff2.replace(/[^0-9]/g, '')); // 整数以外の文字列を削除
      var fff3 = Number(ff3.replace(/[^0-9]/g, '')); // 整数以外の文字列を削除
      total_all = fff0 + fff1 + fff2 + fff3
      break;

      case "5":
      var ff0 = $(f0).val();
      var ff1 = $(f1).val();
      var ff2 = $(f2).val();
      var ff3 = $(f3).val();
      var ff4 = $(f4).val();
      var fff0 = Number(ff0.replace(/[^0-9]/g, '')); // 整数以外の文字列を削除
      var fff1 = Number(ff1.replace(/[^0-9]/g, '')); // 整数以外の文字列を削除
      var fff2 = Number(ff2.replace(/[^0-9]/g, '')); // 整数以外の文字列を削除
      var fff3 = Number(ff3.replace(/[^0-9]/g, '')); // 整数以外の文字列を削除
      var fff4 = Number(ff4.replace(/[^0-9]/g, '')); // 整数以外の文字列を削除
      total_all = fff0 + fff1 + fff2 + fff3 + fff4
      break;
  };

        var aa = $(a).val();
        var aaa = Number(aa.replace(/[^0-9]/g, '')); // 整数以外の文字列を削除

        var bb = $(b).val();
        var bbb = Number(bb.replace(/[^0-9]/g, '')); // 整数以外の文字列を削除

        var cc = $(c).val();
        var ccc = Number(cc.replace(/[^0-9]/g, '')); // 整数以外の文字列を削除

        var total = total_all + aaa + bbb + ccc;

    tagOutput.val(total);
});
};
    

switch (cc0) {
  case "4":
  case "5":
f3.on('change', function() {

  var cc0 = $(c0).val();
  switch (cc0) {
    case "1":
      var ff0 = $(f0).val();
      var fff0 = Number(ff0.replace(/[^0-9]/g, '')); // 整数以外の文字列を削除
      total_all = fff0
      break;

    case "2":
      var ff0 = $(f0).val();
      var ff1 = $(f1).val();
      var fff0 = Number(ff0.replace(/[^0-9]/g, '')); // 整数以外の文字列を削除
      var fff1 = Number(ff1.replace(/[^0-9]/g, '')); // 整数以外の文字列を削除
      total_all = fff0 + fff1
      break;

    case "3":
      var ff0 = $(f0).val();
      var ff1 = $(f1).val();
      var ff2 = $(f2).val();
      var fff0 = Number(ff0.replace(/[^0-9]/g, '')); // 整数以外の文字列を削除
      var fff1 = Number(ff1.replace(/[^0-9]/g, '')); // 整数以外の文字列を削除
      var fff2 = Number(ff2.replace(/[^0-9]/g, '')); // 整数以外の文字列を削除
      total_all = fff0 + fff1 + fff2
      break;

    case "4":
      var ff0 = $(f0).val();
      var ff1 = $(f1).val();
      var ff2 = $(f2).val();
      var ff3 = $(f3).val();
      var fff0 = Number(ff0.replace(/[^0-9]/g, '')); // 整数以外の文字列を削除
      var fff1 = Number(ff1.replace(/[^0-9]/g, '')); // 整数以外の文字列を削除
      var fff2 = Number(ff2.replace(/[^0-9]/g, '')); // 整数以外の文字列を削除
      var fff3 = Number(ff3.replace(/[^0-9]/g, '')); // 整数以外の文字列を削除
      total_all = fff0 + fff1 + fff2 + fff3
      break;

      case "5":
      var ff0 = $(f0).val();
      var ff1 = $(f1).val();
      var ff2 = $(f2).val();
      var ff3 = $(f3).val();
      var ff4 = $(f4).val();
      var fff0 = Number(ff0.replace(/[^0-9]/g, '')); // 整数以外の文字列を削除
      var fff1 = Number(ff1.replace(/[^0-9]/g, '')); // 整数以外の文字列を削除
      var fff2 = Number(ff2.replace(/[^0-9]/g, '')); // 整数以外の文字列を削除
      var fff3 = Number(ff3.replace(/[^0-9]/g, '')); // 整数以外の文字列を削除
      var fff4 = Number(ff4.replace(/[^0-9]/g, '')); // 整数以外の文字列を削除
      total_all = fff0 + fff1 + fff2 + fff3 + fff4
      break;
  };

        var aa = $(a).val();
        var aaa = Number(aa.replace(/[^0-9]/g, '')); // 整数以外の文字列を削除

        var bb = $(b).val();
        var bbb = Number(bb.replace(/[^0-9]/g, '')); // 整数以外の文字列を削除

        var cc = $(c).val();
        var ccc = Number(cc.replace(/[^0-9]/g, '')); // 整数以外の文字列を削除

        var total = total_all + aaa + bbb + ccc;

    tagOutput.val(total);
});
};


switch (cc0) {
  case "5":
f4.on('change', function() {

  var cc0 = $(c0).val();
  switch (cc0) {
    case "1":
      var ff0 = $(f0).val();
      var fff0 = Number(ff0.replace(/[^0-9]/g, '')); // 整数以外の文字列を削除
      total_all = fff0
      break;

    case "2":
      var ff0 = $(f0).val();
      var ff1 = $(f1).val();
      var fff0 = Number(ff0.replace(/[^0-9]/g, '')); // 整数以外の文字列を削除
      var fff1 = Number(ff1.replace(/[^0-9]/g, '')); // 整数以外の文字列を削除
      total_all = fff0 + fff1
      break;

    case "3":
      var ff0 = $(f0).val();
      var ff1 = $(f1).val();
      var ff2 = $(f2).val();
      var fff0 = Number(ff0.replace(/[^0-9]/g, '')); // 整数以外の文字列を削除
      var fff1 = Number(ff1.replace(/[^0-9]/g, '')); // 整数以外の文字列を削除
      var fff2 = Number(ff2.replace(/[^0-9]/g, '')); // 整数以外の文字列を削除
      total_all = fff0 + fff1 + fff2
      break;

    case "4":
      var ff0 = $(f0).val();
      var ff1 = $(f1).val();
      var ff2 = $(f2).val();
      var ff3 = $(f3).val();
      var fff0 = Number(ff0.replace(/[^0-9]/g, '')); // 整数以外の文字列を削除
      var fff1 = Number(ff1.replace(/[^0-9]/g, '')); // 整数以外の文字列を削除
      var fff2 = Number(ff2.replace(/[^0-9]/g, '')); // 整数以外の文字列を削除
      var fff3 = Number(ff3.replace(/[^0-9]/g, '')); // 整数以外の文字列を削除
      total_all = fff0 + fff1 + fff2 + fff3
      break;

      case "5":
      var ff0 = $(f0).val();
      var ff1 = $(f1).val();
      var ff2 = $(f2).val();
      var ff3 = $(f3).val();
      var ff4 = $(f4).val();
      var fff0 = Number(ff0.replace(/[^0-9]/g, '')); // 整数以外の文字列を削除
      var fff1 = Number(ff1.replace(/[^0-9]/g, '')); // 整数以外の文字列を削除
      var fff2 = Number(ff2.replace(/[^0-9]/g, '')); // 整数以外の文字列を削除
      var fff3 = Number(ff3.replace(/[^0-9]/g, '')); // 整数以外の文字列を削除
      var fff4 = Number(ff4.replace(/[^0-9]/g, '')); // 整数以外の文字列を削除
      total_all = fff0 + fff1 + fff2 + fff3 + fff4
      break;
  };

        var aa = $(a).val();
        var aaa = Number(aa.replace(/[^0-9]/g, '')); // 整数以外の文字列を削除

        var bb = $(b).val();
        var bbb = Number(bb.replace(/[^0-9]/g, '')); // 整数以外の文字列を削除

        var cc = $(c).val();
        var ccc = Number(cc.replace(/[^0-9]/g, '')); // 整数以外の文字列を削除

        var total = total_all + aaa + bbb + ccc;

    tagOutput.val(total);
});
};

    

    a.on('change', function() {
      var cc0 = $(c0).val();
      switch (cc0) {
        case "1":
          var ff0 = $(f0).val();
          var fff0 = Number(ff0.replace(/[^0-9]/g, '')); // 整数以外の文字列を削除
          total_all = fff0
          break;

        case "2":
          var ff0 = $(f0).val();
          var ff1 = $(f1).val();
          var fff0 = Number(ff0.replace(/[^0-9]/g, '')); // 整数以外の文字列を削除
          var fff1 = Number(ff1.replace(/[^0-9]/g, '')); // 整数以外の文字列を削除
          total_all = fff0 + fff1
          break;

        case "3":
          var ff0 = $(f0).val();
          var ff1 = $(f1).val();
          var ff2 = $(f2).val();
          var fff0 = Number(ff0.replace(/[^0-9]/g, '')); // 整数以外の文字列を削除
          var fff1 = Number(ff1.replace(/[^0-9]/g, '')); // 整数以外の文字列を削除
          var fff2 = Number(ff2.replace(/[^0-9]/g, '')); // 整数以外の文字列を削除
          total_all = fff0 + fff1 + fff2
          break;

        case "4":
          var ff0 = $(f0).val();
          var ff1 = $(f1).val();
          var ff2 = $(f2).val();
          var ff3 = $(f3).val();
          var fff0 = Number(ff0.replace(/[^0-9]/g, '')); // 整数以外の文字列を削除
          var fff1 = Number(ff1.replace(/[^0-9]/g, '')); // 整数以外の文字列を削除
          var fff2 = Number(ff2.replace(/[^0-9]/g, '')); // 整数以外の文字列を削除
          var fff3 = Number(ff3.replace(/[^0-9]/g, '')); // 整数以外の文字列を削除
          total_all = fff0 + fff1 + fff2 + fff3
          break;

          case "5":
          var ff0 = $(f0).val();
          var ff1 = $(f1).val();
          var ff2 = $(f2).val();
          var ff3 = $(f3).val();
          var ff4 = $(f4).val();
          var fff0 = Number(ff0.replace(/[^0-9]/g, '')); // 整数以外の文字列を削除
          var fff1 = Number(ff1.replace(/[^0-9]/g, '')); // 整数以外の文字列を削除
          var fff2 = Number(ff2.replace(/[^0-9]/g, '')); // 整数以外の文字列を削除
          var fff3 = Number(ff3.replace(/[^0-9]/g, '')); // 整数以外の文字列を削除
          var fff4 = Number(ff4.replace(/[^0-9]/g, '')); // 整数以外の文字列を削除
          total_all = fff0 + fff1 + fff2 + fff3 + fff4
          break;
      };
          var aa = $(a).val();
          var aaa = Number(aa.replace(/[^0-9]/g, '')); // 整数以外の文字列を削除

          var bb = $(b).val();
          var bbb = Number(bb.replace(/[^0-9]/g, '')); // 整数以外の文字列を削除

          var cc = $(c).val();
          var ccc = Number(cc.replace(/[^0-9]/g, '')); // 整数以外の文字列を削除

          var cc0 = $(c0).val();

          if (cc0 > 0) {
            var total = total_all + aaa + bbb + ccc;
          }else{
            var total = aaa + bbb + ccc;
              }
          
        tagOutput.val(total);
    });


    b.on('change', function() {
      var cc0 = $(c0).val();
      switch (cc0) {
        case "1":
          var ff0 = $(f0).val();
          var fff0 = Number(ff0.replace(/[^0-9]/g, '')); // 整数以外の文字列を削除
          total_all = fff0
          break;

        case "2":
          var ff0 = $(f0).val();
          var ff1 = $(f1).val();
          var fff0 = Number(ff0.replace(/[^0-9]/g, '')); // 整数以外の文字列を削除
          var fff1 = Number(ff1.replace(/[^0-9]/g, '')); // 整数以外の文字列を削除
          total_all = fff0 + fff1
          break;

        case "3":
          var ff0 = $(f0).val();
          var ff1 = $(f1).val();
          var ff2 = $(f2).val();
          var fff0 = Number(ff0.replace(/[^0-9]/g, '')); // 整数以外の文字列を削除
          var fff1 = Number(ff1.replace(/[^0-9]/g, '')); // 整数以外の文字列を削除
          var fff2 = Number(ff2.replace(/[^0-9]/g, '')); // 整数以外の文字列を削除
          total_all = fff0 + fff1 + fff2
          break;

        case "4":
          var ff0 = $(f0).val();
          var ff1 = $(f1).val();
          var ff2 = $(f2).val();
          var ff3 = $(f3).val();
          var fff0 = Number(ff0.replace(/[^0-9]/g, '')); // 整数以外の文字列を削除
          var fff1 = Number(ff1.replace(/[^0-9]/g, '')); // 整数以外の文字列を削除
          var fff2 = Number(ff2.replace(/[^0-9]/g, '')); // 整数以外の文字列を削除
          var fff3 = Number(ff3.replace(/[^0-9]/g, '')); // 整数以外の文字列を削除
          total_all = fff0 + fff1 + fff2 + fff3
          break;

          case "5":
          var ff0 = $(f0).val();
          var ff1 = $(f1).val();
          var ff2 = $(f2).val();
          var ff3 = $(f3).val();
          var ff4 = $(f4).val();
          var fff0 = Number(ff0.replace(/[^0-9]/g, '')); // 整数以外の文字列を削除
          var fff1 = Number(ff1.replace(/[^0-9]/g, '')); // 整数以外の文字列を削除
          var fff2 = Number(ff2.replace(/[^0-9]/g, '')); // 整数以外の文字列を削除
          var fff3 = Number(ff3.replace(/[^0-9]/g, '')); // 整数以外の文字列を削除
          var fff4 = Number(ff4.replace(/[^0-9]/g, '')); // 整数以外の文字列を削除
          total_all = fff0 + fff1 + fff2 + fff3 + fff4
          break;
      };
          var aa = $(a).val();
          var aaa = Number(aa.replace(/[^0-9]/g, '')); // 整数以外の文字列を削除

          var bb = $(b).val();
          var bbb = Number(bb.replace(/[^0-9]/g, '')); // 整数以外の文字列を削除

          var cc = $(c).val();
          var ccc = Number(cc.replace(/[^0-9]/g, '')); // 整数以外の文字列を削除

          var cc0 = $(c0).val();

          if (cc0 > 0) {
            var total = total_all + aaa + bbb + ccc;
          }else{
            var total = aaa + bbb + ccc;
              }
          
        tagOutput.val(total);
    });

    c.on('change', function() {
      var cc0 = $(c0).val();
      switch (cc0) {
        case "1":
          var ff0 = $(f0).val();
          var fff0 = Number(ff0.replace(/[^0-9]/g, '')); // 整数以外の文字列を削除
          total_all = fff0
          break;

        case "2":
          var ff0 = $(f0).val();
          var ff1 = $(f1).val();
          var fff0 = Number(ff0.replace(/[^0-9]/g, '')); // 整数以外の文字列を削除
          var fff1 = Number(ff1.replace(/[^0-9]/g, '')); // 整数以外の文字列を削除
          total_all = fff0 + fff1
          break;

        case "3":
          var ff0 = $(f0).val();
          var ff1 = $(f1).val();
          var ff2 = $(f2).val();
          var fff0 = Number(ff0.replace(/[^0-9]/g, '')); // 整数以外の文字列を削除
          var fff1 = Number(ff1.replace(/[^0-9]/g, '')); // 整数以外の文字列を削除
          var fff2 = Number(ff2.replace(/[^0-9]/g, '')); // 整数以外の文字列を削除
          total_all = fff0 + fff1 + fff2
          break;

        case "4":
          var ff0 = $(f0).val();
          var ff1 = $(f1).val();
          var ff2 = $(f2).val();
          var ff3 = $(f3).val();
          var fff0 = Number(ff0.replace(/[^0-9]/g, '')); // 整数以外の文字列を削除
          var fff1 = Number(ff1.replace(/[^0-9]/g, '')); // 整数以外の文字列を削除
          var fff2 = Number(ff2.replace(/[^0-9]/g, '')); // 整数以外の文字列を削除
          var fff3 = Number(ff3.replace(/[^0-9]/g, '')); // 整数以外の文字列を削除
          total_all = fff0 + fff1 + fff2 + fff3
          break;

          case "5":
          var ff0 = $(f0).val();
          var ff1 = $(f1).val();
          var ff2 = $(f2).val();
          var ff3 = $(f3).val();
          var ff4 = $(f4).val();
          var fff0 = Number(ff0.replace(/[^0-9]/g, '')); // 整数以外の文字列を削除
          var fff1 = Number(ff1.replace(/[^0-9]/g, '')); // 整数以外の文字列を削除
          var fff2 = Number(ff2.replace(/[^0-9]/g, '')); // 整数以外の文字列を削除
          var fff3 = Number(ff3.replace(/[^0-9]/g, '')); // 整数以外の文字列を削除
          var fff4 = Number(ff4.replace(/[^0-9]/g, '')); // 整数以外の文字列を削除
          total_all = fff0 + fff1 + fff2 + fff3 + fff4
          break;
      };
          var aa = $(a).val();
          var aaa = Number(aa.replace(/[^0-9]/g, '')); // 整数以外の文字列を削除

          var bb = $(b).val();
          var bbb = Number(bb.replace(/[^0-9]/g, '')); // 整数以外の文字列を削除

          var cc = $(c).val();
          var ccc = Number(cc.replace(/[^0-9]/g, '')); // 整数以外の文字列を削除

          var cc0 = $(c0).val();

          if (cc0 > 0) {
            var total = total_all + aaa + bbb + ccc;
          }else{
            var total = aaa + bbb + ccc;
              }
          
        tagOutput.val(total);
    });
  });
});