var username = getURLParameter('username');
var pass = getURLParameter('pass');
var email = getURLParameter('email');
var birthday = getURLParameter('date');

var emailLabel = document.getElementById("email");
var userLabel = document.getElementById("username");
var passLabel = document.getElementById("password");
var dateLabel = document.getElementById("birthday");


function getURLParameter(param) {
    var pageURL = window.location.search.substring(1);
    var URLVariables = pageURL.split('&');
    for (var i = 0; i < URLVariables.length; i++) {
        var parameterName = URLVariables[i].split('=');
        if (parameterName[0] === param) {
            if (decodeURIComponent(parameterName[1]) == null) {
                return parameterName[1]
            } else {
                return decodeURIComponent(parameterName[1].replace(/\+/g, " "));
            }
        }
    }
    return false;
}

if (username != null && userLabel!=null) {
    userLabel.textContent = username
    alert();
}
if (pass != null && passLabel != null) {
    passLabel.textContent = pass
}
if (email != null && emailLabel != null) {
    emailLabel.textContent = email
}
if (birthday != null && dateLabel != null) {
    dateLabel.textContent = birthday
}
