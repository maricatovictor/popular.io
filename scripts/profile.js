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

var userProfile = {};

function getHTMLElements(){
    userProfilePicture = document.getElementById('profileImage');
    imageUrlPlaceholder = document.getElementById('userImageURL');
    namePlaceholder = document.getElementById('userProfileName');
    agePlaceholder = document.getElementById('userAge');
    hobbiesPlaceholder = document.getElementById('userHobbies');
    helloUser = document.getElementById('helloUser');
}

async function readUserProfile(){
    await getHTMLElements();

    username='brenerbarros';

    var query = ref.orderByChild('user').equalTo(username);


    await query.once('value', data => {
        data.forEach(userSnapshot => {
            let user = userSnapshot.val();
            let key = userSnapshot.key;
            userProfile.profileName = user.profileName;
            userProfile.idade = user.idade;
            userProfile.imageURL = user.imgURL;
            userProfile.hobbies = user.hobbies;
            userProfile.key = key;
        });
    });   

    updateHTMLElements(userProfile);

}


function updateHTMLElements(userProfile){
    if(userProfile.profileName.length > 0) helloUser.innerHTML = "Olá " + userProfile.profileName
    namePlaceholder.placeholder = userProfile.profileName || namePlaceholder.placeholder;
    agePlaceholder.placeholder = userProfile.idade || agePlaceholder.placeholder;
    hobbiesPlaceholder.placeholder = userProfile.hobbies || hobbiesPlaceholder.placeholder;
    imageUrlPlaceholder.placeholder = userProfile.imageURL || imageUrlPlaceholder.placeholder;
    userProfilePicture.src = setProfileImage();
}

function setProfileImage(){
    defaultImg = "https://image.flaticon.com/icons/png/512/17/17004.png"
    if(userProfile.imageURL === undefined || userProfile.imageURL.length == 0){
        return defaultImg;
    }
    else{
        return userProfile.imageURL;
    }
}

function updateUserProfile(){
    getHTMLElements();
    
    ref.child(userProfile.key).update({
        'profileName': updateString(namePlaceholder),
        'idade': updateString(agePlaceholder),
        'imgURL': updateString(imageUrlPlaceholder),
        "hobbies": updateString(hobbiesPlaceholder)
    });
}

function updateString(input){
    if(input.value.length > 0){
        return input.value;
    }
    else{
        return input.placeholder;
    }

}