$(function(){

    let users = document.querySelector("#madId");
    let user = document.querySelector("#madPw");

    let btn = document.querySelector("#loginbtn");

    btn.addEventListener("click", function(){
        let userId = users.value;
        let password = user.value;

        if (userId == "" && password == "") {
            alert("아이디와 비밀번호를 입력해주세요");
        } else if (userId == "") {
            alert("아이디를 입력해주세요");
        } else if (password == "") {
            alert("비밀번호를 입력해주세요");
        } else {
            alert("환영합니다.");
        }
    });

    users.addEventListener("focus", function(){
        users.value = "";
        user.value = "";
    });

})



// 로그인 버튼 클릭 이벤트

