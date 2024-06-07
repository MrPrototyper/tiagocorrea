$(document).ready(function () {
    function login(callback) {
        $.ajax({
            type: 'POST',
            url: 'https://resourcesasaservice.com/login',
            contentType: 'application/json',
            data: JSON.stringify({ 'username': 'meuUserSecreto', 'password': 'meuPasswordSecreto' }),            
            success: function (response) {                
                callback(response.access_token);
            },
            error: function (xhr, status, error) {                
                alert('Login failed: ' + error);
            }
        });
    }    
    $("form[name='contact']").submit(function (event) {        
        event.preventDefault();
        login(function (token) {            
            var formData = {
                'recipient': 'tiagoc.mail@gmail.com',
                'subject': 'Personal Portfolio Contact Form Submission',
                'body': $('textarea[name=message]').val(),
                'sender': {
                    'name': $('input[name=name]').val(),
                    'email': $('input[name=email]').val()
                }
            };            
            $.ajax({
                type: 'POST',
                url: 'https://resourcesasaservice.com/send_email',
                headers: {
                    'Authorization': 'Bearer ' + token
                },
                contentType: 'application/json',
                data: JSON.stringify(formData),
                success: function (response) {                    
                    alert('Thanks for the contact!');                            
                },
                error: function (xhr, status, error) {
                    alert('Your email could not be sent, please reach out to me on LinkedIn!');
                }
            });
        });
    });
});