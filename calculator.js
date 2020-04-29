function insert(num){
	document.form.textview.value=document.form.textview.value+num;
}
function equal(){
	 var evaluation=document.form.textview.value;

if (evaluation){
     document.form.textview.value=eval(evaluation);}
}

function clean(){
	 document.form.textview.value="";
}

function backspace(){
	 var evaluation=document.form.textview.value;
	 document.form.textview.value=evaluation.substring(0, evaluation.length-1);
}