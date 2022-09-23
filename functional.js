
$(document).ready(function(){

// ===== API NO.1 =====
  var nowDate = Date(); // yyyy-mm-dd로 아직 변환 못해서 임의로 넣어둠
  console.log(nowDate);

  $.ajax({
    url: "https://Ilruwain.com/api/testApi1",
    type: "get",
    data: {date: "2022-09-22", user: "test1"}, //임의로 날짜 넣어봄
    dataType: "JSON",
    success: function(data) {
      var api1Hash = JSON.parse(data.test_data).hash;
      // test_data 값의 문자열 타입을 객체로 바꾸고, hash 값 추출
      var api1Hash2 = JSON.parse(data.test_data).hash2;
      // test_data 값의 문자열 타입을 객체로 바꾸고, hash2 값 추출

      // console.log(data);
      // console.log(data.test_data);
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
  $.ajax({
    url: "https://Ilruwain.com/api/testApi2",
    type: "post",
    data: {hash1: api1Hash, hash2: api1Hash2},
    dataType: "JSON",
    async: false,
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




}); // doument.ready.function END
