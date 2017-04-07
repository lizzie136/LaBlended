var config = require("../config");
var database = config.firebase.database;

function loginInit(){
    var loginForm = document.getElementById("login");
    if(loginForm) loginForm.addEventListener("submit", validateLogin);
}

function login(user, password){
    return database.ref('/users/'+user).once('value').then(function(snapshot) {
        if(snapshot.exists() && password == snapshot.val().password){

            window.location = "index.html";
        }else{
            console.log("error en passowrd o algo");
        }   
    });  
}

function validateLogin(e){
    e.preventDefault();
    debugger;
    var userNode = document.getElementsByName("username")[0]; 
    var passwordNode =document.getElementsByName("password")[0];

    if(validateUser(userNode) && validatePassword(passwordNode)){
        login(userNode.value, passwordNode.value);
    }
}

function isEmpty(element){
    return element == undefined || element.value == undefined || element.value.trim() == "";
}

function validateUser(element){
    return element!=undefined && !isEmpty(element) && /^[a-zA-Z0-9]*$/.test(element.value);
}

function validatePassword(element){
    return element!=undefined && !isEmpty(element) && /^[a-zA-Z0-9]*$/.test(element.value);
}

module.exports = {
    init: loginInit,
    login: login,
    validate: validateLogin
};