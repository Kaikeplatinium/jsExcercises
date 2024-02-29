async function fetchGet(url) {
	const response = await fetch(url, {
		method: 'GET'
	});
	const data = await response.json();
	return data;
}

async function getFact() {
    let respuesta =  await fetchGet("https://catfact.ninja/fact")
    console.log(respuesta);
}

getFact()