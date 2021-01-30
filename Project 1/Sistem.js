var rose = {
  tipe: "Rose",
  harga: 120000000}
var gold = {
  tipe: "Gold",
  harga: 300000000
}
var platinum = {
  tipe: "Platinum",
  harga: 360000000
}

document.write("<h1>Selamat datang di Jual-jual rumah</h1>")

function setTipe(){

  var tipeRumah = document.getElementById('tipeRumah');
  document.getElementById('tipe').innerHTML = tipeRumah.value;
  
}

var rumahnya = document.getElementById('tipe')
if (rumahnya == "Rose"){
  document.write("<h2>Tipe Rumah: Rose</h2>")
}
