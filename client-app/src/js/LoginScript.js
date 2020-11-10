
var username = getURLParameter('username');
var pass = getURLParameter('pass');
function getUsername() {
    return username;
}

function getPass() {
    return pass;
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

var nameLabel = document.getElementById("username");
if (nameLabel != null) {
    nameLabel.value = getUsername() != false ? getUsername() : "";
}
if (passLabel != null) {
    var passLabel = document.getElementById("pass");
    passLabel.value = getPass() != false ? getPass() : "";
}
