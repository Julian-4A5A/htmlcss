function setCookie(cname, cvalue, expires) {
    var d = new Date();
    d.setTime(d.getTime() + (expires*24*60*60*1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + "; " + expires;
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1);
        if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
    }
    return "";
}

function checkCookie() {
    var user = getCookie("username");
    if (user != "") {
        alert("Welcome again " + user);
    } else {
        user = prompt("Please enter your name:", "");
        if (user != "" && user != null) {
            setCookie("username", user, 365);
        }
    }
}

function login() {
    
    //zo ja roep setCookie aan met "user", waarde van inputveld, 5 dagen)
    //redirect naar nieuwe pagina
    
    //zo nee : geef melding
}
var users = new Array();
var passes = new Array();

function init(){
	users.push("Docent");
	passes.push("123");
	users.push("Student");
	passes.push("1234");
	users.push("Admin");
	passes.push("Admin");	
}

function login(){
	var gevonden= false;
	
	for(var i = 0;i<users.length;i++){
		if(document.getElementById("user").value == users[i]){
			if(document.getElementById("pass").value == passes[i]){
				gevonden = true;
		}
	}
	if (gevonden) {
	

	setCookie("userid", document.getElementById("user").value, 10);
	    window.open("stap2.html");
	}
	else {
            users = alert("Please enter your name:", "");
	}
	
}}



function toonCookie () {
    document.getElementById("result").innerHTML = "Hallo " +  getCookie("userid");
}


function deleteCookie(){
document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC";
}