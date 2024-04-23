function hitungBalok() {
    const panjang = parseFloat(document.getElementById("panjangBalok").value);
    const lebar = parseFloat(document.getElementById("lebarBalok").value);
    const tinggi = parseFloat(document.getElementById("tinggiBalok").value);
  
    const hasil = panjang * lebar * tinggi;
    document.getElementById("hasilBalok").textContent = hasil;
  }
  
  function hitungKubus() {
    const sisi = parseFloat(document.getElementById("sisiKubus").value);
  
    const hasil = Math.pow(sisi, 3);
    document.getElementById("hasilKubus").textContent = hasil;
  }
  
  function hitungTabung() {
    const jari = parseFloat(document.getElementById("jariTabung").value);
    const tinggi = parseFloat(document.getElementById("tinggiTabung").value);
  
    const hasil = Math.PI * Math.pow(jari, 2) * tinggi;
    document.getElementById("hasilTabung").textContent = hasil.toFixed(2);
  }
  
  function hitungLuasBalok() {
    const panjang = parseFloat(document.getElementById("panjangLuasBalok").value);
    const lebar = parseFloat(document.getElementById("lebarLuasBalok").value);
    const tinggi = parseFloat(document.getElementById("tinggiLuasBalok").value);
  
    const hasil = 2 * (panjang * lebar + panjang * tinggi + lebar * tinggi);
    document.getElementById("hasilLuasBalok").textContent = hasil;
  }
  
  function hitungLuasKubus() {
    const sisi = parseFloat(document.getElementById("sisiLuasKubus").value);
  
    const hasil = 6 * Math.pow(sisi, 2);
    document.getElementById("hasilLuasKubus").textContent = hasil;
  }
  
  function hitungLuasTabung() {
    const jari = parseFloat(document.getElementById("jariLuasTabung").value);
    const tinggi = parseFloat(document.getElementById("tinggiLuasTabung").value);
  
    const hasil = 2 * Math.PI * jari * (jari + tinggi);
    document.getElementById("hasilLuasTabung").textContent = hasil.toFixed(2);
  }
  
  document.getElementById("balokCheckbox").addEventListener("change", function () {
    document.getElementById("balok").classList.toggle("hidden");
    document.getElementById("luasBalok").classList.toggle("hidden");
});

document.getElementById("kubusCheckbox").addEventListener("change", function () {
    document.getElementById("kubus").classList.toggle("hidden");
    document.getElementById("luasKubus").classList.toggle("hidden");
});

document.getElementById("tabungCheckbox").addEventListener("change", function () {
    document.getElementById("tabung").classList.toggle("hidden");
    document.getElementById("luasTabung").classList.toggle("hidden");
});

