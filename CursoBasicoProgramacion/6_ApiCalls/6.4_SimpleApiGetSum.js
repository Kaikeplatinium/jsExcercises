async function fetchGet(url) {
  const response = await fetch(url, {
    method: "GET",
  });
  const data = await response.json();
  return data;
}

async function getFact() {
  let respuesta = await fetchGet("https://catfact.ninja/facts");
  let sumador=0;

  respuesta.data.forEach((pancho) => {
    sumador = sumador + pancho.length
  });
 console.log(sumador)
 return sumador
}

getFact();