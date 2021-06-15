Function displaystoryGenerator(){
   var msg;
   msg=document.getElementById("writestory");
   msg.outHTML =""
}


function jumpBox(list) {
   location.href = list.options[list.selectedIndex].value
   


  form.story.value = (" It was a dark and stormy night. A shot rang out! A " + " noun " + noun.value + 
   \n" slammed. The maid  " + form.pastTenseVerb.value + " .suddenly, a " + form.adjective.value + 
   \n" ship appeared on the horizon! While millions of people " + form.pastTenseVerb2.value + 
   \n", the king lived in luxury. Meanwhile, on a " + form.adjective2.value + 
   \n" farm in Kansas, a boy was growing up. ");
} 


function ClearData(form) {
   form.noun.value = "";
   form.pastTenseVerb.value = "";
   form.adjective.value = "";
   form.pastTenseVerb2.value = "";
   form.adjective2.value = "";
  
   }
