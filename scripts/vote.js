firebase.initializeApp({
    apiKey: "AIzaSyBbaRADtykb9iHcE7k7HdRbwSgOGCfgCQM",
    authDomain: "populario.firebaseapp.com",
    databaseURL: "https://populario.firebaseio.com",
    projectId: "populario",
    storageBucket: "populario.appspot.com",
    messagingSenderId: "467616813003",
    appId: "1:467616813003:web:0232d5948c6a35eb"
});

var myFirebase = firebase.database().ref();

var ref = myFirebase.child("users");

function loadUsers(){
    getHTMLElements();


    personKey = generatePersonKey();
}


function generatePersonKey(){
    Math.floor(Math.random())
}
function getHTMLElements(){
    img1 = document.getElementById('pessoa1');
    img2 = document.getElementById('pessoa2');
}

function votePerson1(){
    key = 1
    current_votes = getCurrentVotes(key) + 1;
    writeCurrentVotes(key);
}

function votePerson2(){
    key = 2
    current_votes = getCurrentVotes(key) + 1;
    writeCurrentVotes(key, current_votes);
}

async function getCurrentVotes(key){

    var query = ref.child('users').child(key);

    await query.once('value', data => {
        data.forEach(userSnapshot => {
            let user = userSnapshot.val();
            let key = userSnapshot.key;
            votes = user.qtdVotos;
            return votes;
        });
    });   
}

async function writeCurrentVotes(key, current_votes){

}