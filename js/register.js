//默认账户
var user = new Map([["admin","668"]])
//验证登录并发送session
function login(){
    var username = document.getElementById("login-username").value;
    var password = document.getElementById("login-password").value;
    if(user.get(username)==password){
        window.localStorage.setItem("login-username",JSON.stringify(username));     
        alert("登录成功");
        window.location.href="index.html";
    }else{
        alert("用户名或密码错误");
    }
}
//注册账户
function register(){
    var username = document.getElementById("register-username").value;
    var password = document.getElementById("register-password").value; 
    user.set(username,password);
    alert("注册成功，账号仅供临时使用");
    document.getElementById("register-username").value="";
    document.getElementById("register-password").value="";
    

}

//--------登录模块切换--------

function hidereg(){
    document.getElementById("reg").style.display="none";
    document.getElementById("sign").style.display="flex";
    document.getElementById("bt1").style.backgroundColor="rgba(0,0,0,0.4)"
    document.getElementById("bt2").style.backgroundColor="rgba(245,222,179,0.3)"
}
function hidesign(){
    document.getElementById("sign").style.display="none";
    document.getElementById("reg").style.display="flex";
    document.getElementById("bt2").style.backgroundColor="rgba(0,0,0,0.4)"
    document.getElementById("bt1").style.backgroundColor="rgba(245,222,179,0.3)"
}

//打开时默认加载登录模块 隐藏注册模块
window.onload = function(){
    document.getElementById("reg").style.display="none";
    document.getElementById("bt1").style.backgroundColor="rgba(0,0,0,0.4)"
}