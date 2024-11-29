document.getElementById('btn-siguiente').addEventListener('click', function() {
    document.getElementById('vista1').classList.add('d-none');
    document.getElementById('vista2').classList.remove('d-none');
});

document.getElementById('btn-volver-vista1').addEventListener('click', function() {
    document.getElementById('vista2').classList.add('d-none');
    document.getElementById('vista1').classList.remove('d-none');
});

document.getElementById('btn-siguiente-vista3').addEventListener('click', function() {
    document.getElementById('vista2').classList.add('d-none');
    document.getElementById('vista3').classList.remove('d-none');
});

document.getElementById('btn-volver-vista2').addEventListener('click', function() {
    document.getElementById('vista3').classList.add('d-none');
    document.getElementById('vista2').classList.remove('d-none');
});

document.getElementById('aceptarDatosVista1').addEventListener('change', function() {
    const continuarBtn = document.getElementById('btn-continuar-vista1');
    continuarBtn.disabled = !this.checked;
});

document.addEventListener("DOMContentLoaded", () => {
    const aceptarDatosCheckbox = document.getElementById("aceptarDatosVista1");
    const preguntasContainer = document.getElementById("preguntas");
    const btnSiguiente = document.getElementById("btn-siguiente");

    btnSiguiente.disabled = true;

    aceptarDatosCheckbox.addEventListener("change", () => {
      if (aceptarDatosCheckbox.checked) {
        preguntasContainer.classList.remove("d-none");
        btnSiguiente.disabled = false;
      } else {
        preguntasContainer.classList.add("d-none");
        btnSiguiente.disabled = true;
      }
    });

    btnSiguiente.addEventListener("click", () => {
      if (!aceptarDatosCheckbox.checked) {
        alert("Debe aceptar el tratamiento de datos para continuar.");
        return;
      }

      alert("Formulario completado. Navegar a la siguiente vista.");
    });
  });
  

  document.getElementById('acepto-terminos').addEventListener('change', function() {
    const continuarBtn = document.getElementById('btn-continuar');
    continuarBtn.disabled = !this.checked;
  
    if (this.checked) {
      document.getElementById('texto-argumentativo').classList.remove('d-none');
    } else {
      document.getElementById('texto-argumentativo').classList.add('d-none');
    }
  });
  
  document.getElementById('texto').addEventListener('input', function() {
    const texto = this.value.trim();
    const palabras = texto.split(/\s+/).filter(palabra => palabra !== "");
    const contador = document.getElementById('contador-palabras');
    
    contador.textContent = palabras.length;
  
    if (palabras.length > 4000) {
      this.value = palabras.slice(0, 4000).join(" ");
      alert("Has alcanzado el límite de 4000 palabras.");
    }
  });