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
    username = 'victoooor'
    getCurrentVotes(username);
}

function votePerson2(){
    username = 'bernardobarros'
    getCurrentVotes(username);
}

async function getCurrentVotes(username){

    var query = ref.orderByChild('user').equalTo(username);

    await query.once('value', data => {
        data.forEach(userSnapshot => {
            let key = userSnapshot.key;
            let votes = userSnapshot.val().qtdVotos;
            updateVotes(votes, key)
        });
    });   

}

async function updateVotes(votes, key){
    votes = votes+1
    ref.child(key).update({
        'qtdVotos': votes,
    });
}