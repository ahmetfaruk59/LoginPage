const inputs = document.querySelectorAll(".input");


function addcl(){
	let parent = this.parentNode.parentNode;
	parent.classList.add("focus");
}

function remcl(){
	let parent = this.parentNode.parentNode;
	if(this.value == ""){
		parent.classList.remove("focus");
	}
}


inputs.forEach(input => {
	input.addEventListener("focus", addcl);
	input.addEventListener("blur", remcl);
});

const formm=document.querySelector(".formmm");
const link=formm.children[formm.children.length-2];


link.addEventListener("click",sil);

function sil(){
inputs[0].value="";
inputs[1].value="";
document.querySelectorAll(".input-div")[0].classList.remove("focus");
document.querySelectorAll(".input-div")[1].classList.remove("focus");
}

inputs[0].addEventListener("keypress",change);
function change(e){
inputs[1].placeholder=e.target.value;

}
