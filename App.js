let pila = [];
let cola = [];

// -------- PILA --------
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
  if (!lista) return;

  lista.innerHTML = "";
  for (let i = pila.length - 1; i >= 0; i--) {
    let li = document.createElement("li");
    li.textContent = pila[i];
    lista.appendChild(li);
  }
}

// -------- COLA --------
function enqueue() {
  const valor = document.getElementById("valor").value;
  cola.push(valor);
  mostrarCola();
}

function dequeue() {
  cola.shift();
  mostrarCola();
}

function mostrarCola() {
  const lista = document.getElementById("listaCola");
  if (!lista) return;

  lista.innerHTML = "";
  for (let i = 0; i < cola.length; i++) {
    let li = document.createElement("li");
    li.textContent = cola[i];
    lista.appendChild(li);
  }
}