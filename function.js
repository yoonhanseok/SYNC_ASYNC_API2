



$(document).ready(function(){

  var dateData = new Date();
  var nowDate = `${dateData.getFullYear()}-0${dateData.getMonth()+1}-${dateData.getDate()}`;

  // console.log("API_호출 START");

// ===== API 1 START =====
  $.ajax({
    url: "https://Ilruwain.com/api/testApi1",
    type: "get",
    data: {date: nowDate, user: "test1"},
    success: function(data) {
      var api1Hash = JSON.parse(data.test_data).hash;
      var api1Hash2 = JSON.parse(data.test_data).hash2;
      console.log("API1_hash= "+api1Hash);
      console.log("API1_hash2= "+api1Hash2);

      // ===== API 2 START =====
      $.ajax({
        url: "https://Ilruwain.com/api/testApi2",
        type: "post",
        data: {hash1: api1Hash, hash2: api1Hash2},
        success: function(data) {
          var api2Hash3 = JSON.parse(data.hashed_data).hash3;
          var api2Hash4 = JSON.parse(data.hashed_data).hash4;
          $(".diaryWritten").text('');
          console.log("API2_출력: ~에게 줬다.");
          console.log("API2_hash3= "+api2Hash3);
          console.log("API2_hash4= "+api2Hash4);

          // ===== API 3 START =====
          $.ajax({
            url: "https://Ilruwain.com/api/testApi3",
            type: "post",
            data: {hash1: api1Hash, type: "text"},
            success: function(data) {
              var name = data.name;
              var text = data.text;
              $(".diaryWritten").append(name+" ");
              $(".diaryWritten").append(text+" ");
              console.log("API3_출력: ~가, ~을");
              console.log("API3_name= "+name);
              console.log("API3_text= "+text);
              $(".diaryWritten").append(api2Hash4+" 줬다.");
            },
            error: function(data) {
              if(data.status === 500) {
                alert("서버에 오류가 발생했습니다");
              } else {
                alert(data.message + data.code);
              }
            },
          });
          // ===== API 3 END =====
        },
        error: function(data) {
          if(data.status === 500) {
            alert("서버에 오류가 발생했습니다");
          } else {
            alert(data.message + data.code);
          }
        },
      });
      // ===== API 2 END =====

      // ===== API 4 START =====
      $.ajax({
        url: "https://Ilruwain.com/api/testApi4",
        type: "get",
        data: {user: "test2", hash1: api1Hash},
        success: function(data) {
          var api1Hash5 = data.hash5;
          console.log("API4_hash5= "+api1Hash5);

          // ===== API 5 START =====
          $.ajax({
            url: "https://Ilruwain.com/api/testApi5",
            type: "post",
            data: {user: "test2", hash5: api1Hash5},
            success: function(data) {
              var title = data.title;
              console.log("API5_title= "+title);
              // console.log("API_호출 END");
              console.log("API5_출력: 제목, 로딩중");
              $(".diaryTitle").append(title);
              $(".diaryWritten").append("로딩중...");

            },
            error: function(data) {
              if(data.status === 500) {
                alert("서버에 오류가 발생했습니다");
              } else {
                alert(data.message + data.code);
              }
            },
          });
          // ===== API 5 END =====
        },
        error: function(data) {
          if(data.status === 500) {
            alert("서버에 오류가 발생했습니다");
          } else {
            alert(data.message + data.code);
          }
        },
      });
      // ===== API 4 END =====
    },
    error: function(data) {
      if(data.status === 500) {
        alert("서버에 오류가 발생했습니다");
      } else {
        alert(data.message + data.code);
      }
    },
  });
  // ===== API 1 END =====

}); // doument.ready.function END

//
//
// $(document).ready(function(){
//
// // ===== API NO.1 =====
//   var dateData = new Date();
//   var nowDate = `${dateData.getFullYear()}-0${dateData.getMonth()+1}-${dateData.getDate()}`;
//
//   var api1Hash;
//   var api1Hash2;
//   var api1Hash3;
//   var api1Hash4;
//   var api1Hash5;
//   var name;
//   var text;
//
// // ===== API 1 START =====
//   $.ajax({
//     url: "https://Ilruwain.com/api/testApi1",
//     type: "get",
//     data: {date: nowDate, user: "test1"},
//     async: false,
//     success: function(data) {
//       api1Hash = JSON.parse(data.test_data).hash;
//       api1Hash2 = JSON.parse(data.test_data).hash2;
//       console.log("API1_hash= "+api1Hash);
//       console.log("API1_hash2= "+api1Hash2);
//     },
//     error: function(data) {
//       if(data.status === 500) {
//         alert("서버에 오류가 발생했습니다");
//       } else {
//         alert(data.message + data.code);
//       }
//     },
//   });
//   // ===== API 1 END =====
//
//
//
// // ===== API 2 START =====
//   $.ajax({
//     url: "https://Ilruwain.com/api/testApi2",
//     type: "post",
//     data: {hash1: api1Hash, hash2: api1Hash2},
//     async: true,
//     success: function(data) {
//       api1Hash3 = JSON.parse(data.hashed_data).hash3;
//       api1Hash4 = JSON.parse(data.hashed_data).hash4;
//       $(".diaryWritten").append(api1Hash4+" 줬다.");
//       console.log("API2_hash3= "+api1Hash3);
//       console.log("API2_hash4= "+api1Hash4);
//     },
//     error: function(data) {
//       if(data.status === 500) {
//         alert("서버에 오류가 발생했습니다");
//       } else {
//         alert(data.message + data.code);
//       }
//     },
//   });
// // ===== API 2 END =====
//
//
// // ===== API 3 START =====
//   $.ajax({
//     url: "https://Ilruwain.com/api/testApi3",
//     type: "post",
//     data: {hash1: api1Hash, type: "text"},
//     async: true,
//     success: function(data) {
//       name = data.name;
//       text = data.text;
//       $(".diaryWritten").empty();
//       $(".diaryWritten").append(name+" ");
//       $(".diaryWritten").append(text+" ");
//       console.log("name= "+name);
//       console.log("text= "+text);
//     },
//     error: function(data) {
//       if(data.status === 500) {
//         alert("서버에 오류가 발생했습니다");
//       } else {
//         alert(data.message + data.code);
//       }
//     },
//   });
// // ===== API 3 END =====
//
//
// // ===== API 4 START =====
//   $.ajax({
//     url: "https://Ilruwain.com/api/testApi4",
//     type: "get",
//     data: {user: "test2", hash1: api1Hash},
//     async: false,
//     success: function(data) {
//       api1Hash5 = data.hash5;
//       console.log("API2_hash5= "+api1Hash5);
//     },
//     error: function(data) {
//       if(data.status === 500) {
//         alert("서버에 오류가 발생했습니다");
//       } else {
//         alert(data.message + data.code);
//       }
//     },
//   });
// // ===== API 4 END =====
//
//
// // ===== API 5 START =====
//   $.ajax({
//     url: "https://Ilruwain.com/api/testApi5",
//     type: "post",
//     data: {user: "test2", hash5: api1Hash5},
//     async: false,
//     success: function(data) {
//       title = data.title;
//       $(".diaryTitle").append(title);
//       $(".diaryWritten").append("로딩중...");
//       console.log("title= "+title);
//     },
//     error: function(data) {
//       if(data.status === 500) {
//         alert("서버에 오류가 발생했습니다");
//       } else {
//         alert(data.message + data.code);
//       }
//     },
//   });
// // ===== API 5 END =====
//
// setTimeout(function(){
//   console.log(
//     "Hash1="+api1Hash,
//     "Hash2="+api1Hash2,
//     "Hash3="+api1Hash3,
//     "Hash4="+api1Hash4,
//     "Hash5="+api1Hash5,
//     "name="+name,
//     "text="+text,
//     "title="+title,
//   );
// }, 2000);
//
//
// }); // doument.ready.function END
