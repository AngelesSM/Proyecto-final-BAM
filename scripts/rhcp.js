var cantidad,precio,desc,compra,pagar;

	precio = parseFloat(prompt("Ingresar precio"));
	cantidad = parseFloat(prompt("Ingresar cantidad"));

	compra = precio*cantidad;
	desc = compra*0.15;
	pagar = compra-desc;