$(document).ready(function(){
    $('#logout').click(function(){
        document.cookie = 'token=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
        $(location).attr('href','https://social-advisor-web.herokuapp.com/');
    });
})
