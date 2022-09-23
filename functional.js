


$(document).ready(function(){

// ===== API NO.1 =====
  var dateData = new Date(); // yyyy-mm-dd로 아직 변환 못해서 임의로 넣어둠
  var nowDate = `${dateData.getFullYear()}-0${dateData.getMonth()+1}-${dateData.getDate()}`;
  // Month는 한 자리수 일 경우 앞에 0이 붙는 알고리즘이 들어가야 하는데, 일단은 임시로 앞에 0을 넣어두었음

  console.log(nowDate);

  var api1 =
  $.ajax({
    url: "https://Ilruwain.com/api/testApi1",
    type: "get",
    data: {date: nowDate, user: "test1"},
    success: function(data) {
      var api1Hash = JSON.parse(data.test_data).hash;
      // test_data 값의 문자열 타입을 객체로 바꾸고, hash 값 추출
      var api1Hash2 = JSON.parse(data.test_data).hash2;
      // test_data 값의 문자열 타입을 객체로 바꾸고, hash2 값 추출

      //지역변수로 만든 api1Hash를 리턴해서 변수api1에 담아볼까 했는데, 나 작동하지 않음

      // return JSON.stringify(api1Hash);

      console.log("Hash 값: "+api1Hash);
      console.log("Hash2 값: "+api1Hash2);
    },
    error: function(data) {
      if(data.status === 500) {
        alert("서버에 오류가 발생했습니다");
      } else {
        alert(data.message + data.code);
      }
    },
  });

// ===== API NO.1 END =====


// ===== API NO.2 =====
var api2 =
  $.ajax({
    url: "https://Ilruwain.com/api/testApi2",
    type: "post",
    data: {hash1: api1Hash, hash2: api1Hash2},
    dataType: "JSON",
    // async: false,
    success: function(data) {
      var api3hash3 = JSON.parse(data.hashed_data).hash3;
      // test_data 값의 문자열 타입을 객체로 바꾸고, hash 값 추출

      var api3hash4 = JSON.parse(data.hashed_data).hash4;
      // test_data 값의 문자열 타입을 객체로 바꾸고, hash 값 추출

      $(".diaryWritten").append(api3hash4);
      console.log(api3hash4);
    },
    error: function(data) {
      if(data.status === 500) {
        alert("서버에 오류가 발생했습니다");
      } else {
        alert(data.message + data.code);
      }
    },
  });
// ===== API NO.2 END =====


// ===== API NO.3 =====
var api3 =
  $.ajax({
    url: "https://Ilruwain.com/api/testApi3",
    type: "post",
    data: {hash1: api1Hash, type: "text"},
    dataType: "JSON",
    success: function(data) {
      var api3Name = data.name;
      var api3Text = data.text;
      var api3Sentence = data.name + data.text;
  
      $(".diaryWritten").append(api3Name+api3Text);
      console.log(api3Name+api3Text);
      console.log(api3Sentence);
    },
    error: function(data) {
      if(data.status === 500) {
        alert("서버에 오류가 발생했습니다");
      } else {
        alert(data.message + data.code);
      }
    },
  });
// ===== API NO.3 END =====

console.log(api1);
console.log(api2);
console.log(api3);


}); // doument.ready.function END
