
/* -- Função abrir o menu quando o = é clicado -- */

function toggle(){
	var sec = document.getElementById('sec');
	var nav = document.getElementById('navigation');
	var abt = document.getElementById('about');
	var hea = document.getElementById('header');
	var tec = document.getElementById('tech');
	var ser = document.getElementById('serv');
	var kno = document.getElementById('know');
	var ass = document.getElementById('ass');
	var con = document.getElementById('contact');
	var abb = document.getElementById('aboutb');
	var foo = document.getElementById('foo');

	sec.classList.toggle('active');
	nav.classList.toggle('active');
	abt.classList.toggle('active');
	hea.classList.toggle('active');
	tec.classList.toggle('active');
	ser.classList.toggle('active');
	kno.classList.toggle('active');
	ass.classList.toggle('active');
	con.classList.toggle('active');
	abb.classList.toggle('active');
	foo.classList.toggle('active');

}

/* -- Função fechar o menu quando um <ul> é clicado -- */


function myFunction() {
 	var sec = document.getElementById('sec');
	var nav = document.getElementById('navigation');
	var abt = document.getElementById('about');
	var hea = document.getElementById('header');
	var tec = document.getElementById('tech');
	var ser = document.getElementById('serv');
	var kno = document.getElementById('know');
	var ass = document.getElementById('ass');
	var con = document.getElementById('contact');
	var abb = document.getElementById('aboutb');
	var foo = document.getElementById('foo');
  
	sec.classList.remove("active");
	nav.classList.remove("active");
	abt.classList.remove("active");
	hea.classList.remove("active");
	tec.classList.remove("active");
	ser.classList.remove("active");
	know.classList.remove("active");
	ass.classList.remove("active");
	con.classList.remove("active");
	abb.classList.remove("active");
	foo.classList.remove("active");

}

/* -- Função Loader Hidden -- */

setTimeout(function(){
  let loaded = document.getElementById('loaderpage');
  loaded.className += 'loaded';
}, 3000);