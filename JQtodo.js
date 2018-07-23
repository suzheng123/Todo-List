//check off/back li by click
$("ul").on("click","li", function(){
	$(this).toggleClass("completed");
})

//click X to delete todo
$("ul").on("click","span",(function(e){
	//parent() indicates the li where the clicked span locates in
	$(this).parent().fadeOut(500,function(){ //'this' refers to span
		$(this).remove(); //'this' refers to the li
	}); 
	e.stopPropagation();//add event e to stop the 
}))						//click effect to parent

$("input[type='text']").keypress(function(e2){
	if(e2.which===13) { //keycode for 'enter' is 13
		var todoText= $(this).val()//grab todo text
		$(this).val("")
		$("ul").append("<li><span><i class='fa fa-trash'></i></span> "+todoText+"</li>")
	}
})

$("#pencil").click(function(){
	$("input[type='text']").fadeToggle();
})

var trash=document.querySelectorAll('#trash');
for(i=0;i<trash.length;i++){
	trash[i].addEventListener("mouseover",function(){
		this.classList.add("selected");
	});

	trash[i].addEventListener("mouseout",function(){
		this.classList.remove("selected");
	})
}