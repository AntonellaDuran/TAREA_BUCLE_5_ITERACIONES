function CALCULO() {
	const digito1 = parseInt(document.getElementById("digito1").value);
	const digito2 = parseInt(document.getElementById("digito2").value);

	for(var i=1; i<=5; i++){
		switch(i){
			//Verificamos el resultado de la primera iteracion
			case 1:
				var ITERACION_SUMA=digito1+digito2;
				alert("El resultado de la suma es :"+ITERACION_SUMA);
				(document.getElementById("ITERACION_SUMA").textContent) = `ITERACION_SUMA: ${digito1 + digito2}`;
				break;
			//Verificamos el resultado de la segunda iteracion	
			case 2:
				var ITERACION_RESTA=digito1-digito2;
				alert("El resultado de la resta es :" +ITERACION_RESTA);
				document.getElementById("ITERACION_RESTA").textContent = `ITERACION_RESTA: ${digito1 - digito2}`;
				break;
				//Verificamos el resultado de la tercera iteracion
			case 3:
				
				var ITERACION_MULTIPLICACION=digito1*digito2;
				alert("El resultado de la multiplicacion es : "+ITERACION_MULTIPLICACION);
				document.getElementById("ITERACION_MULTIPLICACION").textContent = `ITERACION_MULTIPLICACION: ${digito1 * digito2}`;
				break;
				//Verificamos el resultado de la cuarta iteracion
			case 4:
				var ITERACION_DIVISION=digito1/digito2;
				alert("El resultado de La division es : "+ITERACION_DIVISION);
				document.getElementById("ITERACION_DIVISION").textContent = `ITERACION_DIVISION: ${digito1 / digito2}`;
				break;
				//Verificamos el resultado de la quinta iteracion
			case 5:
				var ITERACION_MODULO=digito1%digito2;
				alert("El resultado del  modulo es : "+ITERACION_MODULO)
				document.getElementById("ITERACION_MODULO").textContent = `ITERACION_MODULO: ${digito1 % digito2}`;

		}

}
}

