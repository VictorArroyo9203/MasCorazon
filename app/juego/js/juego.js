$(document).ready(function(){
	value = 50;
	updateVida(value);
	$(".arrastrable").draggable({
		
		start: function () {
			/*if ($("img.suelta").attr('id')=='bueno') {
				$("img.suelta").attr("src","images/nino_bueno1.png");
			} else {
				$("img.suelta").attr("src","images/nino_malo1.png");
			}
			if ($(this).attr('elemento')=='manzana') {
				$(this).prepend('<div class="tooltip">Pérdida de peso, Regula la glucosa en sangre<div>')
			} else if ($(this).attr('elemento')=='humburguesa') {
				$(this).prepend('<div class="tooltip">El comsumo de muchas hamburguesas puede cuasar enfermades cardiovasculares<div>')
			} else if ($(this).attr('elemento')=='ensalada') {
				$(this).prepend('<div class="tooltip">Toma por constumbre comer muchas verduras!<div>')
			}
			if ($(this).attr('elemento')=='xbox') {
				$(this).prepend('<div class="tooltip">No tengas una vida sedentaria<div>')
			} else if ($(this).attr('elemento')=='soccer') {
				$(this).prepend('<div class="tooltip">Hacer deporte es muy bueno para tu corazon<div>')
			} else if ($(this).attr('elemento')=='bici') {
				$(this).prepend('<div class="tooltip">Tener una rutina de ejercicios es muy bueno para tu salud<div>')
			}*/
		},
		revert:true,
		stop: function ()  {
			$('.tooltip').remove()
			if ($('.arrastrable').attr('id')=='bueno') {
				$('.nino').attr('style', '')
			}
		}
	});
	$(".malo.arrastrable").draggable({revert:true});
	$(".arrastrable").data("soltado", false);
	$(".suelta").data("numsoltar", 90);

	$(".suelta").droppable({ 
	   drop: function( event, ui ) { 
	      if (!ui.draggable.data("soltado")){ 
	        var elem = $(this);
	        
		    
	         if (ui.draggable.attr('id')=='bueno') {
		        elem.data("numsoltar", elem.data("numsoltar") + 5);
		        $("img.suelta").attr("src","src/nino_bueno.png");
		        elem.prepend('<img id="punto" src="src/mas5.png" style="position: absolute; top:50% z-index: 1" />');
		        var div=$("#punto");
		        div.animate({height:'300px', width:'300px', opacity:'0', bottom:'100%', display: 'none'},1000);
		        if (value>=100) {
		        	jConfirm("Has llegado al nivel maximo... <br>¿quieres jugar de nuevo?", "¡Muy Bien!", function(r) {  
					    if(r) {  
					        value = 50;
							updateVida(value);
							$("img.suelta").attr("src","src/nino_bueno.png");
					    } else {  
					        window.location = '../Menu.html';
					    }  
					});
		        } else {
		        	loading(); 
		        }
		     } else if (ui.draggable.attr('id')=='malo') {
		     	elem.data("numsoltar", elem.data("numsoltar") - 5);
		     	$("img.suelta").attr("src","src/nino_malo.png");
		     	elem.prepend('<img id="punto" src="src/menos5.png" style="position: absolute; bottom:50% z-index: 1" />');
		        var div=$("#punto");
		        div.animate({height:'300px', width:'300px', opacity:'0', top:'100%', display: 'none'},1000);
		     	downloading();
		     } else {
		     	$("img.suelta").attr("src","src/nino_muerto.png");
		     	elem.data("numsoltar", elem.data("numsoltar") - 99);
		        elem.prepend('<img id="punto" src="src/mas5.png" style="position: absolute; top:50% z-index: 1" />');
		        var div=$("#punto");
		        div.animate({height:'300px', width:'300px', opacity:'0', bottom:'100%', display: 'none'},1000);
		        matar(); 
		     }
	      } 
	   }, 
	   /*out: function( event, ui ) { 
	      if (ui.draggable.data("soltado")){ 
	         ui.draggable.data("soltado", false); 
	         var elem = $(this); 
	         elem.data("numsoltar", elem.data("numsoltar") - 1); 
	         elem.html("Llevo " + elem.data("numsoltar") + " elementos soltados"); 
	      } 
	   } */
	});

	//soltar solo elementos rojos 
	$("#nino").droppable("option", "accept", ".arrastrable");

 
    var loading = function() { 
        value += 5;       
        updateVida(value);
    }; 
    var downloading = function() { 
        value += -5; 
        updateVida(value);

        if (value==0) {matar()};

    }; 
    var matar = function() { 

        value += -99; 
        updateVida(value);
        jConfirm("¡Tu personaje ha muerto! <br>¿quieres jugar de nuevo?", "Has fallado...", function(r) {  
		    if(r) {  
		        value = 50;
				updateVida(value);
				$("img.suelta").attr("src","src/nino_bueno.png");
		    } else {  
		        window.location = '../Menu.html';
		    }  
		});  
    }; 
});

