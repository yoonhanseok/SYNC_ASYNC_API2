//
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
//
// }); // doument.ready.function END
