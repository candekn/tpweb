 $.datepicker.regional['es'] = {
 closeText: 'Cerrar',
 prevText: '< Ant',
 nextText: 'Sig >',
 currentText: 'Hoy',
 monthNames: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
 monthNamesShort: ['Ene','Feb','Mar','Abr', 'May','Jun','Jul','Ago','Sep', 'Oct','Nov','Dic'],
 dayNames: ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'],
 dayNamesShort: ['Dom','Lun','Mar','Mié','Juv','Vie','Sáb'],
 dayNamesMin: ['Do','Lu','Ma','Mi','Ju','Vi','Sá'],
 weekHeader: 'Mm',
 dateFormat: 'dd/mm/yy',
 firstDay: 1,
 isRTL: false,
 showMonthAfterYear: false,
 yearSuffix: ''
 };
 $.datepicker.setDefaults($.datepicker.regional['es']);


$(function () {
	var prod=0;
	$(".sumap").click(function(){
prod++;
		$("#imgcarrito").text(prod);
});
		
		 $("#cfechanacimiento").datepicker({ minDate: "-99Y", maxDate: "-1D"});
	var listaTags = [ 
		"Vestido",
      "Remerona",
	  "Pin-Up",
      "Vestido Pin-up",
      "3/4 Manga Marinera",
      "Vestido Marinero Two Colors",
      "Remerona Rayada de Invierno",
      "Remera 3/4 Botones",
      "Vestido Floreado",  
    ];
   
	 $( "#buscar" ).autocomplete({
      source: listaTags
   
    });
	$("#textor").keyup(function(){
		var texto=$("#textor").val();
		$("#textop").text(texto);
		
	})
	var opcion;
	$("#coloresr").change(function(){
	opcion = $("#coloresr option:selected").text();
	switch(opcion){
		case "Blanco": $("#imgperso").css("background-image", 'url(./img/r1.png)');
								$("#textop").css("color", "black");
					break;
		case "Negro": $("#imgperso").css("background-image", 'url(./img/r2.png)');
								$("#textop").css("color", "white");
					break;
		case "Azul": $("#imgperso").css("background-image", 'url(./img/r3.png)');
					break;
		case "Violeta": $("#imgperso").css("background-image", 'url(./img/r4.png)');
					break;
		case "Rojo": $("#imgperso").css("background-image", 'url(./img/r5.png)');
					break;
		default: $("#imgperso").css("background-image", 'url(./img/r1.png)');
					$("#textop").css("color", "black");
					break;
	}
	})
	var expresion=/\w+@[a-z]+\.[a-z]/;
	var nombre, apellido, dni, mail, msj;
	$("#cenviar").click(function(){
		nombre=$("#cnombre").val();
		apellido=$("#capellido").val();
		dni=$("#cdni").val();
		mail=$("#cmail").val();
		msj=$("#cmsj").val();
		if(nombre.length<4||nombre.length>15){
			$("#errorn").css("display", "block");
			return false;
		}
		else if(apellido.length<4||apellido>15){
			$("#errora").css("display", "block");
			return false;
		}
		else if(dni.length!=8){
			$("#errordni").css("display","block");
			return false;
		}
		else if(mail=="" || !expresion.test(mail)){
			$("#errormail").css("display","block");
			return false;
		}
		else if(msj.length<5){
			$("#errormsj").css("display","block");
			return false;
		}
		else{
			return true;
		}
	})
	
});