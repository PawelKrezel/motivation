function CreateGroup(){
	if(typeof(Storage) !== "undefined") {
	    if (localStorage.GroupCount) {
	      localStorage.GroupCount = Number(localStorage.GroupCount)+1;
	    } else {
	      localStorage.GroupCount = 1;
	    }
	}

	let name = prompt("How do you wanna name this group?", "New Group "+localStorage.GroupCount);
	if(name != null && name != "" && name != NaN){
		let id = "gr"+localStorage.GroupCount;

		let Group = {
			gr_ID: id,
			gr_name: name,
			gr_size: 0,
			gr_done_tasks: 0
		}

		let Group_serial = JSON.stringify(Group);
		localStorage.setItem(id, Group_serial);

		if(localStorage.getItem("ListOfGroups") == null){
			localStorage.setItem("ListOfGroups", "[]");
		}

		let old_list = JSON.parse(localStorage.getItem("ListOfGroups"));
		old_list.push(id);
		localStorage.setItem("ListOfGroups", JSON.stringify(old_list));

		RenderChallenges();
	}
}

function RenderChallenges(){
	if(localStorage.getItem("ListOfGroups") != null){

		let container = document.getElementById("challenges_container");
		container.innerHTML="";
		let ListOfGroups = JSON.parse(localStorage.getItem("ListOfGroups"));
		for(var i=0; i<ListOfGroups.length; i++){
			let group = ListOfGroups[i];

			group = JSON.parse(localStorage.getItem(group));
			container.innerHTML+='<section class="well" id="'+group.gr_id+'">'+'<h4>'+group.gr_name+' <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-plus-square" onclick="AddTask('+group.gr_id+')"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="12" y1="8" x2="12" y2="16"></line><line x1="8" y1="12" x2="16" y2="12"></line></svg></h4>'+'</section>';
		}
		
	}
}

function AddTask(ID_group){
	if(typeof(Storage) !== "undefined") {
	    if (localStorage.TaskCount) {
	      localStorage.TaskCount = Number(localStorage.TaskCount)+1;
	    } else {
	      localStorage.TaskCount = 1;
	    }
	}

	let task_name = prompt("Type in your task!", ":D");
	if(task_name != null && task_name != "" && task_name != NaN){
		let id = "ts"+localStorage.TaskCount;

		let Task = {
			ts_ID: id,
			ts_name: task_name,
			ts_Group: ID_group,
			ts_status: 0
		}
		let Task_serial = JSON.stringify(Task);
		localStorage.setItem(id, Task_serial);

		if(localStorage.getItem("ListOfTasks") == null){
		localStorage.setItem("ListOfTasks", "[]");
		}

		let old_list = JSON.parse(localStorage.getItem("ListOfTasks"));
		old_list.push(id);
		localStorage.setItem("ListOfTasks", JSON.stringify(old_list));
	}
}

function RenderTasks(){
	if(localStorage.getItem("ListOfTasks") != null){
		let ListOfTasks = JSON.parse(localStorage.getItem("ListOfTasks"));
	}
}
RenderChallenges();