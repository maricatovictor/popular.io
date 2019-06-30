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


//REFERÊNCIA PARA MINHA DATA BASE
var myFirebase = firebase.database().ref();

//BANCO DE DADOS EM QUE VOU ADICIONAR ELEMENTOS
var ref = myFirebase.child("users");

// ref.push({
//     "name": "Brener",
//     "Idade": "22",
//     "Fé": "com fé"
// });

function registerUser(){
    ref.push({
        "Nome": $('#username').val(),
        "Senha": $('#password').val(),
        "Idade": "",
        "imgURL": "",
        "Curso": ""
    });
    $('#username').val('');
}