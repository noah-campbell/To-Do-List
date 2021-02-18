var tasks = [];

function checkForTask() {
	if(document.getElementById("input").value===" ") { 
            document.getElementById("btn").disabled = true; 
    } else { 
            document.getElementById("btn").disabled = false;
    }
}

function addTask() {
	tasks.push(document.getElementById("input").value);
	document.getElementById("list").innerHTML = tasks.join("<br />");
	document.getElementById("input").value="";

	console.log(tasks);
}
