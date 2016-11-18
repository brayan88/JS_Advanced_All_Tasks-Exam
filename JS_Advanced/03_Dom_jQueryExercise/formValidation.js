function validate() {
    let valid =true;
    let company=document.getElementById('company');
    company.addEventListener('click',function () {
        $('#companyInfo').css('display', 'inline');
    });
    $('#submit').on('click',function (ev) {
        (function checkUser() {
            let usernameRegEx =/[^A-Za-z0-9]+/g;
            let username = $('#username').val();
            if (username.length < 3 || username.length > 20||username.match(usernameRegEx)) {
                $('#username').css('border-color', 'red');
                return valid=false;
            }
        })();
        (function checkPass() {
            let passRegEx =/[^A-Za-z0-9_]+/g;
            let password = $('#password').val();
            let confPass = $('#confirm-password').val();
            if (password.length < 5 || password.length > 15||password.match(passRegEx)||password!=confPass) {
                $('#password').css('border-color', 'red');
                $('#confirm-password').css('border-color', 'red');
                return valid=false;
            }
        })();
        (function checkEmail() {
            let emailRegex =/^.*@.*\..*$/g;
            let email = $('#email').val();
            if (!email.match(emailRegex)) {
                $('#email').css('border-color', 'red');
                return valid = false;
            }
        })();
        (function checkBox() {
            if(document.getElementById('company').checked){
                let companyNum =$('#companyNumber').val();
                if(companyNum<1000||companyNum>9999) {
                    $('#companyNumber').css('border-color', 'red');
                    return valid = false;
                }
            }
        })();
        if(valid){
            $('#valid').css('display','inline');
        }
        ev.preventDefault()
    })
}
