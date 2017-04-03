var bath = new Room ("bath");
var kitchen = new Room ("kitchen");
var living = new Room ("living");
var study = new Room ("study");
var bed = new Room ("bed");
var hall = new Room ("hall");

function Room (name) {
	this.name = name;
	this.roomView = function (){
		console.log(this.name);
		document.getElementById("bath").style.display = "none";
		document.getElementById("kitchen").style.display = "none";
		document.getElementById("living").style.display = "none";
		document.getElementById("study").style.display = "none";
		document.getElementById("bed").style.display = "none";
		document.getElementById("hall").style.display = "none";
		document.getElementById(name).style.display = "block";
	}
}
