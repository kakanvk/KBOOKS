function setAccount(){
    var name = document.getElementById("name");
    var username = document.getElementById("username");
    var password = document.getElementById("password");
    var password2 = document.getElementById("password2");
    
    if(!name.value || !username.value || !password.value || !password2.value){
      alert("Không được bỏ trống thông tin");
      return false;
    }   
    else if(!isNaN(name.value)){
      alert("Tên không hợp lệ");
      name.value="";
      name.focus();
      return false;
    }
    else if(window.localStorage.getItem(username.value)){
      alert("Tên đăng nhập đã được sử dụng");
      username.focus();
      return false;
    } 
    else if(password.value != password2.value){
      alert("Mật khẩu không khớp");
      password2.focus();
    } 
    else { 
      const account = {
        name: name.value,
        username: username.value,
        password: password.value,
      }
      window.localStorage.setItem(username.value, JSON.stringify(account));
      alert("Tạo tài khoản thành công");
      window.location.href = "/login";
      return true;
    }
  }
  
  function CheckLogin(){
    var username = document.getElementById("username");
    var password = document.getElementById("password");
    
    if(!username.value || !password.value){
      alert("Không được bỏ trống thông tin");
      return false;
    } 
    else if(window.localStorage.getItem(username.value)){
      var data = JSON.parse(window.localStorage.getItem(username.value));
    } else alert("Tài khoản không tồn tại");    
  
    if(data.password === password.value){
      window.localStorage.setItem("isLogin", 'true');
      window.localStorage.setItem("CurrentAccount", username.value);
      alert("Đăng nhập thành công");
      window.location.href = "/";
    } else {
      alert("Mật khẩu không chính xác");
    }
  }
  
  function signout(){
    window.localStorage.removeItem("CurrentAccount");
    window.localStorage.setItem("isLogin", 'false');
    window.location.href = "/";
  }