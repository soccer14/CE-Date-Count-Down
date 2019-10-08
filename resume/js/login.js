/* ======================================================================
  Seyram Gbeblewou log in credentials
====================================================================== */
// Loop through Array of sample Username and password Objects
var objPeople = [
	{ // Object @ 0 index
		username: "sam",
		password: "Gbe"
	},
	{ // Object @ 1 index
		username: "matt",
		password: "Kelly"
	},
	{ // Object @ 2 index
		username: "mallorie",
		password: "Kelly"
	}

]

function getInfo() {
	var username = document.getElementById('username').value
	var password = document.getElementById('password').value

	for(var i = 0; i < objPeople.length; i++) {
		// checks if user input matches username and password
		if(username == objPeople[i].username && password == objPeople[i].password) {
			document.home.html
            return
		}
	}
    // lets you kow if you have the right ID and pass
    alert("Password OR ID is wrong lets Give It another try")
}
