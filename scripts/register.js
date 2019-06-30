$(window).on('load', function(){
    // localStorage.setItem("username", "Brener");
    // console.log(localStorage.getItem('username'));
    getUsers();
});

//INICIALIZANDO FIREBASE
firebase.initializeApp({
    apiKey: "AIzaSyBbaRADtykb9iHcE7k7HdRbwSgOGCfgCQM",
    authDomain: "populario.firebaseapp.com",
    databaseURL: "https://populario.firebaseio.com",
    projectId: "populario",
    storageBucket: "populario.appspot.com",
    messagingSenderId: "467616813003",
    appId: "1:467616813003:web:0232d5948c6a35eb"
});

let myFirebase = firebase.database();
let users = [];
function getUsers(){
    myFirebase.ref('users/').on("value", function(snap){
        users.push(snap.val());
    });
}

function validateUser(){
    let name = $('#username').val();
    let pass = $('#password').val();
    if(pass.length >= 8 && name.length > 3){
        $('.register__container input').each(function(){
            $(this).css('border', 'none');
        });

        for(let i = 0; i < users[0].length; i++){
            if(name == users[0][i].user){
                $('.user__validate').css('display', 'block').fadeOut(1500);
                break;
            }
            else if(i == users[0].length - 1){
                registerUser();
                toggleRegister();
            }
        }
    }
    else{
        console.log('Senha 8 caraceres e nome 4 caracteres')
        $('.register__container input').each(function(){
            $(this).css('border', '1px solid red');
        });
    }
}

function registerUser(){
    myFirebase.ref("users/"+users[0].length).set({
        "user": $('#username').val(),
        "nome": "",
        "senha": $('#password').val(),
        "idade": "",
        "imgURL": "",
        "curso": "",
        "qtdVotos": ""
    });
    console.log('registrado!');
}