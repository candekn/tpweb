var images = [
	'img/paso1.png',
	'img/paso2.png',
	'img/paso3.png',
	]
var num=0;
var nombre, apellido, dni, mail, mensaje;
	function siguiente(){
		var slider = document.getElementById("slider");
		num++;
		if(num>=images.length){
			num=0;
		}
			slider.src= images[num];
	}
	function prev(){
		var slider= document.getElementById("slider");
		num--;
		if(num<0){
			num= images.length-1;
		}
			slider.src =images[num];
	}
var expresion=/\w+@[a-z]+\.[a-z]/;
	/*function verificar(){
		nombre=document.getElementById("cnombre").value;
		apellido=document.getElementById("capellido").value;
		dni=document.getElementById("cdni").value;
		mail=document.getElementById("cmail").value;
		mensaje=document.getElementById("cmsj").value;
		if(nombre.length<4||nombre.length>16){
			alert("Nombre inválido");
			return false;
		}
		else if(apellido.length<4||apellido.length>16){
			alert("Apellido invalido");
			return false;
		}
		else if(dni.length!=8){
			alert("El DNI debe contener 8 números");
			return false;
		}
		else if(mail=="" || !expresion.test(mail)){
			alert("E-mail inválido");
			return false;
		}
		else if(mensaje.length<5){
			alert("Mensaje muy corto!");
			return false;
		}
		else{
			return true;
		}
	}
	*/