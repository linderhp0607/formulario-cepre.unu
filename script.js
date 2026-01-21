function nextStep(step) {
  
    const steps = document.querySelectorAll('.form-step');
    steps.forEach(stepDiv => {
      stepDiv.classList.remove('active');  
      stepDiv.style.display = 'none';  
    });
  

    const currentStep = document.getElementById('step' + step);
    currentStep.classList.add('active');  
    currentStep.style.display = 'block';  
  }

  
  let pagosExistentes = [1]; 


document.getElementById('agregarPago').addEventListener('click', function () {
 
  const nuevoPagoId = getNextPagoId();

  
  const nuevoPago = document.createElement('div');
  nuevoPago.classList.add('pago-section');
  nuevoPago.id = `pago_${nuevoPagoId}`;
  nuevoPago.innerHTML = `
    <h5>PAGO_${nuevoPagoId}</h5>
    <label>Ubicación del pago - PAGO_${nuevoPagoId}:</label>
    <select id="ubiPago_${nuevoPagoId}" name="ubiPago_${nuevoPagoId}" required>
      <option value="">elegir</option>
      <option value="cuotaUni">RECAUDACIÓN BBVA N°13248</option>
      <option value="fraccionado">ADMISIÓN UNU</option>
      <option value="parentesco">POSGRADO UNU</option>
      <option value="beca">CONVENIO MUNICIPALIDAD</option>
    </select><br>

    <label>Nro. de Operación - PAGO_${nuevoPagoId}</label>
    <input type="text" name="nroOpera_${nuevoPagoId}" id="nroOpera_${nuevoPagoId}" pattern="\\d*" title="Solo se permiten números" required><br>

    <label>Monto de pago - PAGO_${nuevoPagoId}</label>
    <input type="text" name="montoPago_${nuevoPagoId}" id="montoPago_${nuevoPagoId}" pattern="\\d*" title="Solo se permiten números" required><br>

    <label>Fecha de pago - PAGO_${nuevoPagoId}</label>
    <input type="date" name="fechaPago_${nuevoPagoId}" id="fechaPago_${nuevoPagoId}" required><br>

    <!-- Botón para quitar esta sección -->
    <button type="button" class="quitarPago" onclick="quitarPago(${nuevoPagoId})">Quitar</button>
  `;

  
  document.getElementById('contenedorPagos').appendChild(nuevoPago);


  pagosExistentes.push(nuevoPagoId);
});


function getNextPagoId() {
 
  let idDisponible = 1;
  while (pagosExistentes.includes(idDisponible)) {
    idDisponible++;
  }
  return idDisponible;
}


function quitarPago(idPago) {
  const pago = document.getElementById(`pago_${idPago}`);
  pago.remove(); 


  const index = pagosExistentes.indexOf(idPago);
  if (index > -1) {
    pagosExistentes.splice(index, 1);
  }
}


  

  