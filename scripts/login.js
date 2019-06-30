$(window).on('load', function(){
    
});

function toggleRegister(){
    $('.login__modal').toggleClass('register');

    if($('.login__modal').hasClass('register')){
        $('.login__container').fadeToggle(300);

        setTimeout(() => {
            $('.register__container').fadeToggle(300);
            $('.register__container').css('display', 'flex');
        }, 300);
    }
    else{
        $('.register__container').fadeToggle(300);

        setTimeout(() => {
            $('.login__container').fadeToggle(300);
            $('.login__container').css('display', 'flex');
        }, 300);
    }
}

function tryLogin(){
    let name = $('#user').val();
    let pass = $('#pass').val();
    
    for(let i = 0; i < users[0].length; i++){
        if(name == users[0][i].user && pass == users[0][i].senha){
            console.log('logado');
            localStorage.setItem("username", name);
            break;
        }
        else if(i == users[0].length - 1){
            $('.login__container input').each(function(){
                $(this).css('border', '1px solid red');
            });
        }
    }
}