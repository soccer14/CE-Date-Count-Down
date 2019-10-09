/* ======================================================================
  Seyram Gbeblewou log in credentials
====================================================================== */
// Loop through Array of sample Username and password Objects
var objPeople = [
	{ // Object @ 0 index
		username: "seyram",
		password: "gbeblewou"
	},
	{ // Object @ 1 index
		username: "marvin",
		password: "blanko"
	},
	{ // Object @ 2 index
		username: "mark",
		password: "bernardo"
	},
	{ // Object @ 2 index
		username: "#",
		password: "#"
	}

]

function getInfo() {
	var username = document.getElementById('username').value
	var password = document.getElementById('password').value

	for(var i = 0; i < objPeople.length; i++) {
		// checks if user input matches username and password
		if(username == objPeople[i].username && password == objPeople[i].password) {
			//window.open("home.html")
			window.open("home.html");

            return
		}
	}
    // lets you kow if you have the right ID and pass
    alert("Password OR ID is wrong lets Give It another try")
}
