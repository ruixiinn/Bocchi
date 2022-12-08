//获取session里username的value值
window.onload = function(){
    var link = document.getElementById("link").href;
    var login = document.getElementById("login").innerText;
    var valu = window.localStorage.getItem("login-username");
   if(valu==null){ 
    var logout = document.getElementById("logout").style.display="none";
    }else{
    document.getElementById("login").innerHTML=valu;
    document.getElementById("link").href ="home.html";
    document.getElementById("header").style.backgroundImage="linear-gradient(rgba(0,0,0,2),rgba(0,0,0,0.3)),url(imgs/img_2.jpg)";
}
    var logout = document.getElementById("logout")
    logout.onclick=function(){
        if (msg=confirm("确定注销账号吗?")){
           window.localStorage.clear();
        alert("账户已注销"); 
        }
        
        
    }
}
