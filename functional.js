


$(document).ready(function(){

  var dateData = new Date();
  var nowDate = `${dateData.getFullYear()}-0${dateData.getMonth()+1}-${dateData.getDate()}`;

  console.log("API_호출 START");

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
          function api2Process() {
          $(".diaryWritten").append(api2Hash4+" 줬다.");
          console.log("API2_출력");
          };
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
              function api3Process() {
              $(".diaryWritten").empty();
              $(".diaryWritten").append(name+" ");
              $(".diaryWritten").append(text+" ");
              console.log("API3_출력");
              };
              console.log("API3_name= "+name);
              console.log("API3_text= "+text);

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
                      // function api5_title(title){
                      console.log("API5_title= "+title);
                      console.log("API_호출 END");
                        $(".diaryTitle").append(title);
                        $(".diaryWritten").append("로딩중...");
                        api3Process();
                        api2Process()
                      // };
                      console.log("API5_출력");
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
