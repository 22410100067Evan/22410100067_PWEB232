function toggleInputFields(shape) {
    var balokInputs = document.getElementById('balokInputs');
    var kubusInputs = document.getElementById('kubusInputs');
    var balokCheckbox = document.getElementById('balokCB');
    var kubusCheckbox = document.getElementById('kubusCB');
  
    if (shape === 'balok') {
        balokInputs.style.display = 'block';
        kubusInputs.style.display = 'none';
        kubusCheckbox.checked = false;
    } else if (shape === 'kubus') {
        balokInputs.style.display = 'none';
        kubusInputs.style.display = 'block';
        balokCheckbox.checked = false;
    }
  }
  
  function hitungVolume() {
    var hasilField = document.getElementById('hasil');
    var balokCheckbox = document.getElementById('balokCB');
    var kubusCheckbox = document.getElementById('kubusCB');
  
    if (balokCheckbox.checked) {
        var panjang = parseFloat(document.getElementById('panjang').value);
        var lebar = parseFloat(document.getElementById('lebar').value);
        var tinggi = parseFloat(document.getElementById('tinggi').value);
        var volume = panjang * lebar * tinggi;
        hasilField.value = volume;
    } else if (kubusCheckbox.checked) {
        var sisi = parseFloat(document.getElementById('sisi').value);
        var volume = sisi * sisi * sisi;
        hasilField.value = volume;
    } else {
        hasilField.value = "Pilih salah satu .";
    }
  }
  
