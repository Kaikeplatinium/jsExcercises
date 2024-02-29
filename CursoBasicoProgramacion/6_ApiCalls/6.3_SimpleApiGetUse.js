async function fetchGet(url) {
	const response = await fetch(url, {
		method: 'GET'
	});
	const data = await response.json();
	return data;
}

async function getFact() {
    let respuesta =  await fetchGet("https://catfact.ninja/breeds")
	let todasLasRazas = []
	respuesta.data.forEach(pancho => {
		todasLasRazas.push(pancho.breed)
	});
	console.log(todasLasRazas);
}

getFact()