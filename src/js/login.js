module.exports = {
    init: loginInit,
    login: login,
    validate: validateLogin

};

function loginInit(){
    var loginForm = document.getElementById("login");
    if(loginForm) loginForm.addEventListener("submit", validateLogin);
}

function login(user, password){
    var config = {
        apiKey: "AIzaSyBpHfxeWPUVgKpKLxTHip0cvZ_sT0s8BwA",
        authDomain: "lablended.firebaseio.com",
        databaseURL: "https://lablended.firebaseio.com",
        storageBucket: "lablended.appspot.com",
        messagingSenderId: "",
    };

    firebase.initializeApp(config);

    var database = firebase.database();

    return firebase.database().ref('/users/'+user).once('value').then(function(snapshot) {
        if(snapshot.exists() && password == snapshot.val().password){

            window.location = "index.html";
        }else{
            console.log("error en passowrd o algo");
        }
        
    });  
}


function validateLogin(e){
    e.preventDefault();
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