const dk1 = document.getElementById('dk1')
const dk2 = document.getElementById('dk2')
const login = document.getElementsByClassName('login')
const close = document.getElementById('close')
const close1 = document.getElementById('close1')
const register = document.getElementById('register');
const btn2 =document.getElementById('btn2')

function tat (){
    login[0].style.display = 'none';
}
close.addEventListener('click',tat)
function tat1 (){
    register.style.display ='none';
}
close1.addEventListener('click',tat1)
/* login */
function dangnhap(){
    login[0].style.display ='block';
}
dk1.addEventListener('click',dangnhap);
const btn1 = document.getElementById('btn1')

let emailInput = document.getElementById("floatingInput");
let passwordInput = document.getElementById("floatingPassword");
let telInput = document.getElementById("tel")
function fcLogin(){
if (emailInput.value === "" || passwordInput.value === "") {
    alert("Vui lòng nhập đầy đủ tài khoản và mật khẩu!")
}else{
    alert("Đăng nhập thành công!")
    window.location.href = "heading.html";
}
}
btn1.addEventListener('click',fcLogin)

/* Register2 */
function dangky(){
    register.style.display = 'block';
}
dk2.addEventListener('click',dangky);

function dangky2(){
    close.addEventListener('click',tat)
    login[0].style.display = 'none';
    register.style.display = 'block';
}
btn2.addEventListener('click',dangky2)

const register2 = document.getElementById('register2')
function dangky3(){
    login[0].style.display = 'none';
    register.style.display = 'block';
}
register2.addEventListener('click',dangky3)

const btnRGT = document.getElementById('btnRGT')
let emailInput1 = document.getElementById("registerEmail");
let passwordInput1 = document.getElementById("registerPW");
let CFPasswordInput1 = document.getElementById("CFRegisterPW")
let telInput1 = document.getElementById("tel")
function fcRegister(){
if (emailInput1.value === "" || passwordInput1.value === ""|| CFPasswordInput1.value === ""||telInput1.value === "") {
    alert("Vui lòng nhập đầy đủ các trường !")
}else{
    alert("Đăng ký thành công!")
    window.location.href = "heading.html";
}
}
btnRGT.addEventListener('click',fcRegister)

const loginRGT = document.getElementById('loginRGT')
function loginRGT1(){
    
    register.style.display ='none';
    login[0].style.display ='block';
}
    loginRGT.addEventListener('click',loginRGT1)
