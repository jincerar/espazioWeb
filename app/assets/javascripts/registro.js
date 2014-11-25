servicio = null;

$(document).ready(function() {

  $('#btn-otro').click(function(){
  	servicio = 'Otro';
  	if ( $('#otro-input').hasClass('hidden') ){
  		$('#otro-input').removeClass('hidden');
  	}

  });

  $('#btn-rento').click(function(){
  	servicio = 'Rento';
  	if ( !$('#otro-input').hasClass('hidden') ){
  		$('#otro-input').addClass('hidden');
  	}

  });

  $('#btn-busco').click(function(){
  	servicio = 'Busco lugar';
  	if ( !$('#otro-input').hasClass('hidden') ){
  		$('#otro-input').addClass('hidden');
  	}

  });

  $('#submit-registration').click(function(e) {
        e.preventDefault();
    });

  $('#registration-form').validate();


});

function validate(){
	var nombre = '';
	var apellido = '';
	var email = '';
	var otro = ''; 
	var descripcion = '';
	var comentarios = '';
	var complete = true;

	//Get User inputs
	nombre = $('#nombreIn').val();
	apellido = $('#apellidoIn').val();
	email = $('#emailIn').val();
	descripcion = $('#descripcionIn').val();
	comentarios = $('#comentariosIn').val();

	if(servicio == 'Otro'){
		otro = $('#otroIn').val();
		if( otro == ''){
			complete = false;
			$('#ocupacionFrm').addClass('has-error has-feedback');
		}
	}

	if (nombre == ''){
		complete = false;
		$('#nombreFrm').addClass('has-error has-feedback');
	}

	if (apellido == ''){
		complete = false;
		$('#apellidoFrm').addClass('has-error has-feedback');
	}

	if (email == '' || !IsEmail(email)){
		complete = false;
		$('#emailFrm').addClass('has-error has-feedback');
	}

	if(!complete){
		alert("Por favor llena los campos requeridos");
	}else{
    
	    var Registro = Parse.Object.extend("Registro");
	    var usuario = new Registro();
	    usuario.set("nombre", nombre);
	    usuario.set("apellido", apellido);
	    usuario.set("email", email);
	    usuario.set("servicio", servicio);
	    usuario.set("otro", otro);
	    usuario.set("descripcion", descripcion);
	    usuario.set("comentarios", comentarios);

	    usuario.save(null, {
		  success: function() {
		    alert('¡Gracias! Muy pronto nos pondremos en contacto contigo.');
		    window.location = 'http://espazio.tk';
		  },
		  error: function(gameScore, error) {
		    alert('Error al registrar los datos, inténtalo de nuevo.');
		  }
		});
	}

}

function IsEmail(email) {
  var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  return regex.test(email);
}