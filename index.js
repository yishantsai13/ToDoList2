var nav1 = document.querySelector(".nav1");
var nav2 = document.querySelector(".nav2");
var nav3 = document.querySelector(".nav3");
var sign="default";
function addFavorite(e){
  var add=e.className.substr(-1,1);
  document.querySelector(".star-"+add).style.display="inline";
  document.querySelector(".tasks"+add).style.backgroundColor="#FFF2DC";
  document.querySelector(".star-o-"+add).style.display="none";
  window.localStorage.setItem("favorite"+add,"true");
  updates(sign);
}
function deleteFavorite(e){
  var deleteCont=e.className.substr(-1,1);
  document.querySelector(".star-o-"+deleteCont).style.display="inline";
  document.querySelector(".tasks"+deleteCont).style.backgroundColor="#F2F2F2";
  document.querySelector(".star-"+deleteCont).style.display="none";
  window.localStorage.setItem("favorite"+deleteCont,"false");
  updates(sign);
}
function enterMyTasks(sign){
  showAddTask();
  updates(sign);
  nav1.style.color="#FFFFFF";
  nav1.style.borderBottom="5px solid #00408B";
  nav2.style.color="#00408B";
  nav2.style.border="0px";
  nav3.style.color="#00408B";
  nav3.style.border="0px";
  for (var mytasks=0; mytasks<window.localStorage.length; mytasks=mytasks+4){
    if(window.localStorage.getItem("checkbox"+mytasks)=="true"){
      document.querySelector(".li"+mytasks).style.display="block";
    }else{
      document.querySelector(".li"+mytasks).style.display="block";
      document.querySelector(".checkbox"+mytasks).checked=false;
      document.querySelector(".todo"+mytasks).innerHTML=window.localStorage.getItem("todo"+mytasks);
      document.querySelector(".todo"+mytasks).style.color="#000000";
    }
  }
  countTask(sign);
}
function enterInProgress(sign){
  showAddTask();
  updates(sign);
  nav2.style.color="#FFFFFF";
  nav2.style.borderBottom="5px solid #00408B";
  nav1.style.color="#00408B";
  nav1.style.border="0px";
  nav3.style.color="#00408B";
  nav3.style.border="0px";
  for (var inprogress=0; inprogress<window.localStorage.length; inprogress=inprogress+4){
    if(window.localStorage.getItem("checkbox"+inprogress)=="true"){
      document.querySelector(".li"+inprogress).style.display="none";
    }else{
      document.querySelector(".checkbox"+inprogress).checked=false;
      document.querySelector(".li"+inprogress).style.display="block";
      document.querySelector(".todo"+inprogress).innerHTML=window.localStorage.getItem("todo"+inprogress);
      document.querySelector(".todo"+inprogress).style.color="#000000";
    }
  }
  countTask(sign);
}
function enterCompleted(sign){
  showAddTask();
  updates(sign);
  nav3.style.color="#FFFFFF";
  nav3.style.borderBottom="5px solid #00408B";
  nav1.style.color="#00408B";
  nav1.style.border="0px";
  nav2.style.color="#00408B";
  nav2.style.border="0px";
  for (var completed=0; completed<window.localStorage.length; completed=completed+4){
    if(window.localStorage.getItem("checkbox"+completed)=="false"){
      document.querySelector(".li"+completed).style.display="none";
    }else{
      document.querySelector(".li"+completed).style.display="block";
      document.querySelector(".todo"+completed).innerHTML="<s>"+window.localStorage.getItem("todo"+completed)+"</s>";
      document.querySelector(".checkbox"+completed).checked=true;
      document.querySelector(".todo"+completed).style.color="#9B9B9B";
    }
  }
  countTask(sign);
}
function showInputTask(){
  document.getElementById("addtasks").style.display="none";
  document.getElementById("inputTasks").style.display = "block";
  document.getElementById("deadline_date").value="";
  document.getElementById("deadline_time").value="";
  document.getElementById("comment").value="";
}
function showAddTask(){
  document.getElementById("addtasks").style.display="block";
  document.getElementById("inputTasks").style.display = "none";
}
function init(sign){
  for(var init=0;init<window.localStorage.length;init=init+4){
    document.getElementById("task").innerHTML="<li class='li"+init+"'><div class='tasks tasks"+init+"''><div class='firstline'><input type='checkbox' class='checkbox checkbox"+init+"' onclick='finishTask(\"default\")'><p class='todo todo"+init+"'>"+window.localStorage.getItem('todo'+init)+"</p><div class='star star-"+init+"' onclick='deleteFavorite(this)'><i class='fa fa-star' aria-hidden='true'></i></div><div class='star-o star-o-"+init+"' onclick='addFavorite(this)'><i class='fa fa-star-o' aria-hidden='true'></i></div><div class='trash trash-"+init+"' onclick='deleteTask(\"default\","+init+")'><i class='fa fa-trash' aria-hidden='true'></i></div></div><div class='secondline'><p class='calender_date calender_date"+init+"'>"+window.localStorage.getItem('calender_date'+init)+"</p></div></div></li>"+document.getElementById("task").innerHTML;
  }
  updates(sign);
}
function updates(sign){
  for (var updates_count=0; updates_count<window.localStorage.length; updates_count=updates_count+4){
      if(window.localStorage.getItem("checkbox"+updates_count)=="true"){
        document.querySelector(".todo"+updates_count).innerHTML="<s>"+window.localStorage.getItem("todo"+updates_count)+"</s>";
        document.querySelector(".checkbox"+updates_count).checked=true;
        document.querySelector(".todo"+updates_count).style.color="#9B9B9B";
      }else{
        document.querySelector(".checkbox"+updates_count).checked=false;
        document.querySelector(".todo"+updates_count).innerHTML=window.localStorage.getItem("todo"+updates_count);
        document.querySelector(".todo"+updates_count).style.color="#000000";
      }
      if(window.localStorage.getItem("favorite"+updates_count)=="true"){
        document.querySelector(".star-"+updates_count).style.display="inline";
        document.querySelector(".star-o-"+updates_count).style.display="none";
        document.querySelector(".tasks"+updates_count).style.backgroundColor="#FFF2DC";
      }else{
        document.querySelector(".star-o-"+updates_count).style.display="inline";
        document.querySelector(".star-"+updates_count).style.display="none";
        document.querySelector(".tasks"+updates_count).style.backgroundColor="#F2F2F2";
      }
    
  }
  countTask(sign);
}
function countTask(sign){
  var count_task=0;
  if(sign=="default"){
    for(var count_default=0;count_default<window.localStorage.length;count_default=count_default+4){
      if(window.localStorage.getItem("checkbox"+count_default)=="false"){
        count_task=count_task+1;
      }
    }
    document.getElementById("bottom").innerHTML="<p><i>"+count_task+" tasks left</i></p>";
  }else if(sign=="completed"){
    for(var count_completed=0;count_completed<window.localStorage.length;count_completed=count_completed+4){
      if(window.localStorage.getItem("checkbox"+count_completed)=="true"){
        count_task=count_task+1;
      }
    }
    document.getElementById("bottom").innerHTML="<p><i>"+count_task+" tasks has completed</i></p>";
  }else{
    alert("ERROR");
  }
}
function finishTask(sign){
  for(var x=0;x<window.localStorage.length;x=x+4){
    if(document.querySelector(".checkbox"+x).checked){
      window.localStorage.setItem('checkbox'+x,"true");
    }else{
      window.localStorage.setItem('checkbox'+x,"false");
    }
  }
  updates(sign);
}
function addTask(sign){
  showAddTask();
  var i=localStorage.length;
  window.localStorage.setItem("checkbox"+i, "false");
  window.localStorage.setItem("favorite"+i, "false");
  window.localStorage.setItem("todo"+i, document.getElementById("comment").value);
  window.localStorage.setItem("calender_date"+i, document.getElementById("deadline_date").value+" "+document.getElementById("deadline_time").value); 
  document.getElementById("task").innerHTML="<li class='li"+i+"'><div class='tasks tasks"+i+"'><div class='firstline'><input type='checkbox' class='checkbox checkbox"+i+"' onclick='finishTask(\"default\")'><p class='todo todo"+i+"'>"+window.localStorage.getItem('todo'+i)+"</p><div class='star star-"+i+"' onclick='deleteFavorite(this)'><i class='fa fa-star' aria-hidden='true'></i></div><div class='star-o star-o-"+i+"' onclick='addFavorite(this)'><i class='fa fa-star-o' aria-hidden='true'></i></div><div class='trash trash-"+i+"' onclick='deleteTask(\"default\","+i+")'><i class='fa fa-trash' aria-hidden='true'></i></div></div><div class='secondline'><p class='calender_date calender_date"+i+"'>"+window.localStorage.getItem('calender_date'+i)+"</p></div></div></li>"+document.getElementById("task").innerHTML;
  updates(sign);
}
function deleteTask(sign,number){
  window.localStorage.removeItem("checkbox"+number);
  window.localStorage.removeItem("favorite"+number);
  window.localStorage.removeItem("todo"+number);
  window.localStorage.removeItem("calender_date"+number);
  document.querySelector(".li"+number).remove();
  updates(sign);
}