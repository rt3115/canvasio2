
var username = getURLParameter('username');
var email = getURLParameter('email');
var date = getURLParameter('date');
var pass = getURLParameter('pass');

function checkEmail(email) {
    var dotcount = 0
    /*for (i = 0; i < email.length; {
        if (email.value[i] == ".") {
            return true;
        }
    }*/
    return true;
}

function getURLParameter(param) {
    var pageURL = window.location.search.substring(1);
    var URLVariables = pageURL.split('&');
    for (var i = 0; i < URLVariables.length; i++) {
        var parameterName = URLVariables[i].split('=');
        if (parameterName[0] == param) {
            if (decodeURIComponent(parameterName[1]) == null) {
                return parameterName[1]
            } else {
                return decodeURIComponent(parameterName[1].replace(/\+/g, " "));
            }
        }
    }
    return false;
}

function checkFields() {
    var email = document.getElementById("email");

    var fixString = "Please fix the following: \n";
    if (!checkEmail(email.value)) {
                fixString += "Enter valid email. \n";
        email.style.backgroundColor = "#CCCC00";
        alert(fixString);
        return false;
    }
    else {
        return true;
    }
}


var nameLabel = document.getElementById("first-name");
var emailLabel = document.getElementById("email");
var passLabel = document.getElementById("pass");
var dateLabel = document.getElementById("date");

if (nameLabel != null &&
    emailLabel != null &&
    passLabel != null &&
    dateLabel != null)
{
    nameLabel.value = username != false ? username : "";
    emailLabel.value = email != false ? email : "";
    passLabel.value = pass != false ? pass : "";
    dateLabel.value = date != false ? date : "";
}
    