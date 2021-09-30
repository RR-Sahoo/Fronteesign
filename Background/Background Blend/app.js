/* para añadir reglas CSS  de manera dinámica*/
var s = document.createElement('style');
var elInput = document.querySelector("input[type='range']");
var radioValue = "diference";
var thisColor = "#abcdef";
var thisForm = document.forms[0]
var radios = thisForm.BM;
var BMcolor = document.querySelector("#BMcolor");
var HEXpattern = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;

document.head.appendChild(s);


thisForm.addEventListener("submit",function(e){e.preventDefault();},false);


BMcolor.addEventListener("change", function(e){console.log(this.value)
if(HEXpattern.test(this.value)){thisColor = this.value;}else{thisColor = "#abcdef"} 
getStyles(s,elInput.value,thisColor,radioValue);
},false);
 

for( var i = 0; i<radios.length; i++){
 radios[i].addEventListener("change", function(){	
 if(this.checked ===true){radioValue = this.value;}
 
 getStyles(s,elInput.value,thisColor,radioValue);

 }, false);
}


elInput.addEventListener('input',function(){ 
	getStyles(s,elInput.value,thisColor,radioValue);
}, false);

function getStyles(s,elInputValue,thisColor,radioValue){
	/* cambia el estilo del TRACK */
s.textContent ="input[type=range]::-webkit-slider-runnable-track{background:-webkit-linear-gradient(0deg, transparent "+elInputValue+"%, "+thisColor+" "+elInputValue+"%),0% 0% no-repeat  border-box url(http://c1.staticflickr.com/5/4049/4545882390_a5c0128dda_z.jpg);background-blend-mode: "+radioValue+";}\n"
s.textContent +="input[type=range]::-moz-range-track{background:-moz-linear-gradient(0deg, transparent "+elInputValue+"%, "+thisColor+" "+elInputValue+"%),0% 0% no-repeat  border-box url(http://c1.staticflickr.com/5/4049/4545882390_a5c0128dda_z.jpg);background-blend-mode: "+radioValue+";}";
}
