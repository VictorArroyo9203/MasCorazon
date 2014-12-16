function a()
			{
				myform.submit();
			}




function validarN(){
	
    if (document.myform.TextBox2.value == null || document.myform.TextBox2.value.length < 3 || /^\s+$/.test(document.myform.TextBox2.value))
		{
			alert("Introduce un Nombre, o el Nombre es muy corto");
			//document.myform.Nombre.value = "";
			document.myform.TextBox2.focus()
			return false;
		}
	}	
		
function validarA(){
    if (document.myform.TextBox3.value == null || document.myform.TextBox3.value.length < 3 || /^\s+$/.test(document.myform.TextBox3.value))
		{
			alert("Introduce un Apellido, o el Apellido es muy corto");
			//document.myform.Apellido.value = "";
			document.myform.TextBox3.focus()
			return false;
		}	
	}


function validarD(){		
    if (document.myform.TextBox1.value == null || document.myform.TextBox1.value.length < 8 || /^\s+$/.test(document.myform.TextBox1.value))
		{
			alert("Introduce Documento valido, o el Documento es muy corto");
			//document.myform.Documento.value = "";
			document.myform.TextBox1.focus()
			return false;
		}
	}
	
function validarU(){
	if(document.myform.Usuario.value== null || document.myform.Usuario.value.length < 5 || /^\s+$/.test(document.myform.Usuario.value))
		{
			alert("Introduce un USUARIO, o el USUARIO es muy corto");
			//document.myform.Usuario.value = "";
			document.myform.Usuario.focus()
			return false;
		}
	}
	
	function validarC(){
	    if (document.myform.TextBox5.value == null || document.myform.TextBox5.value.length < 6 || /^\s+$/.test(document.myform.TextBox5.value))
		{
			alert("Introduce  Contraseña, o el Contraseña es muy corto");
			//document.getElementById("document.myform.Clave.value");
			document.myform.TextBox5.focus()
			return false;
		}
	}

function validarCC(){
		var pass = document.myform.Clave.value;
		var pass2 = document.myform.Clave2.value;

		if(pass != pass2)
		{
			alert("las contraseñas no son iguales");
			document.myform.Clave2.value = "";
			document.myform.Clave2.focus()
			
		}


	//if (document.myform.Clave.value == document.myform.Clave2.value)
	    //{
			//myform.submit();
		//}
	//else
	//{		
		    //alert('no son iguales las contraseñas!');
		   //*document.myform.Clave.value = "";
           //document.myform.Clave2.value = "";		   
		  // document.myform.Clave2.focus()
		//return false;
	//}
	}
	
function validarE(){
    if (/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.([a-zA-Z]{2,4})+$/.test(document.myform.TextBox4.value))
		{
			
		}
		else
		{
        if (document.myform.TextBox4.value == null || document.myform.TextBox4.value.length < 1 || /^\s+$/.test(document.myform.TextBox4.value))
			{
			
			}
			else
			{
				alert("Debes escribir un correo valido");
				//document.getElementById("document.myform.Correo.value");
				document.myform.TextBox4.focus()
				return false;
			}
		}
	}
	
function campos_vacios(){
    if (document.myform.num.value == null || document.myform.num.value.length < 8 || /^\s+$/.test(document.myform.num.value))
		{
			alert("Introduce un Documento de identidad, o el Documentos es muy corto");
			//document.myform.Nombre.value = "";
			document.myform.num.focus()
			return false;
		}
    if (document.myform.TextBox2.value == null || document.myform.TextBox2.value.length < 3 || /^\s+$/.test(document.myform.TextBox2.value))
		{
			alert("Introduce un Nombre, o el Nombre es muy corto");
			//document.myform.Apellido.value = "";
			document.myform.TextBox2.focus()
			return false;
		}	
    if (document.myform.TextBox3.value == null || document.myform.TextBox3.value.length < 3 || /^\s+$/.test(document.myform.TextBox3.value))
		{
        alert("Introduce Apellido valido, o el Apellido es muy corto");
			//document.myform.Documento.value = "";
			document.myform.TextBox3.focus()
			return false;
		}
   
    if (document.myform.TextBox4.value == null || document.myform.TextBox4.value.length < 6 || /^\s+$/.test(document.myform.TextBox4.value))
		{
        alert("Introduce  Email, o el Email es muy corto");
			//document.getElementById("document.myform.Clave.value");
			document.myform.TextBox4.focus()
			return false;
		}

    if (document.myform.TextBox5.value == null || document.myform.TextBox5.value.length < 6 || /^\s+$/.test(document.myform.TextBox5.value)) {
        alert("Introduce  Contraseña, o la Contraseña es muy corta");
        //document.getElementById("document.myform.Clave.value");
        document.myform.TextBox5.focus()
        return false;
    }


    function registrado() {

        url = "Registrado.html";
        $(location).attr('href', url);
    }


}
	

