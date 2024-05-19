$(document).ready(function () {
    // Function to handle login
    function login(callback) {
        $.ajax({
            type: 'POST',
            url: 'http://54.159.113.234:5000/login', // Replace with your Flask login endpoint URL
            contentType: 'application/json',
            data: JSON.stringify({ 'username': 'meuUserSecreto', 'password': 'meuPasswordSecreto' }), // Replace with your actual credentials
            success: function (response) {
                // Callback with token
                console.log(response)
                callback(response.access_token);
            },
            error: function (xhr, status, error) {
                // Handle error response
                alert('Login failed: ' + error);
            }
        });
    }

    // Function to handle form submission after login
    $("form[name='contact']").submit(function (event) {
        // Prevent default form submission
        event.preventDefault();

        // Call login function
        login(function (token) {
            // Get form data
            var formData = {
                'recipient': 'tiagoc.mail@gmail.com', // Replace with recipient email
                'subject': 'Personal Portfolio Contact Form Submission',
                'body': $('textarea[name=message]').val(),
                'sender': {
                    'name': $('input[name=name]').val(),
                    'email': $('input[name=email]').val()
                }
            };

            // Send AJAX request to Flask endpoint with JWT token
            $.ajax({
                type: 'POST',
                url: 'http://54.159.113.234:5000/send_email',
                headers: {
                    'Authorization': 'Bearer ' + token // Include JWT token in Authorization header
                },
                contentType: 'application/json',
                data: JSON.stringify(formData),
                success: function (response) {
                    // Handle successful response
                    alert('Thanks for the contact!');                            
                },
                error: function (xhr, status, error) {
                    // Handle error response
                    alert('Your email could not be sent, please reach out to me on LinkedIn!');
                }
            });
        });
    });
});