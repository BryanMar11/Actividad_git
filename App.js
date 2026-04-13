let pila = [];

function push() {
  const valor = document.getElementById("valor").value;
  pila.push(valor);
  mostrarPila();
}

function pop() {
  pila.pop();
  mostrarPila();
}

function mostrarPila() {
  const lista = document.getElementById("listaPila");
  lista.innerHTML = "";

  for (let i = pila.length - 1; i >= 0; i--) {
    let li = document.createElement("li");
    li.textContent = pila[i];
    lista.appendChild(li);
  }
}