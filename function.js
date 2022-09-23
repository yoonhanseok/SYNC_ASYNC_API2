


$(document).ready(function(){

// ===== API NO.1 =====
  var dateData = new Date();
  var nowDate = `${dateData.getFullYear()}-0${dateData.getMonth()+1}-${dateData.getDate()}`;

  var api1Hash = "";
  var api1Hash2 = "";
  var ajaxCallFunction = function (url, type, async, data, successCallBack) {
    $.ajax({
      url: url,
      type: type,
      async: async,
      data: data,
      success: successCallBack,
      error: function(data) {
        if(data.status === 500) {
          alert("서버에 오류가 발생했습니다");
        } else {
          alert(data.message + data.code);
        }
      },
    });
  };

  var api1 = ajaxCallFunction(
    "https://Ilruwain.com/api/testApi1",
    "get",
    true,
    {date: nowDate, user: "test1"},
    function(data) {
    var api1Hash = JSON.parse(data.test_data).hash;
    var api1Hash2 = JSON.parse(data.test_data).hash2;
    console.log("Hash 값: "+api1Hash);
    console.log("Hash2 값: "+api1Hash2);
    },
  );

  console.log(api1);

  // var api1 =
  // $.ajax({
  //   url: "https://Ilruwain.com/api/testApi1",
  //   type: "get",
  //   data: {date: nowDate, user: "test1"},
  //   success: function(data) {
  //     var api1Hash = JSON.parse(data.test_data).hash;
  //     // test_data 값의 문자열 타입을 객체로 바꾸고, hash 값 추출
  //     var api1Hash2 = JSON.parse(data.test_data).hash2;
  //     // test_data 값의 문자열 타입을 객체로 바꾸고, hash2 값 추출
  //
  //     //지역변수로 만든 api1Hash를 리턴해서 변수api1에 담아볼까 했는데, 나 작동하지 않음
  //
  //     // return JSON.stringify(api1Hash);
  //
  //     console.log("Hash 값: "+api1Hash);
  //     console.log("Hash2 값: "+api1Hash2);
  //   },
  //   error: function(data) {
  //     if(data.status === 500) {
  //       alert("서버에 오류가 발생했습니다");
  //     } else {
  //       alert(data.message + data.code);
  //     }
  //   },
  // });

 var api1Hash = "";


}); // doument.ready.function END
