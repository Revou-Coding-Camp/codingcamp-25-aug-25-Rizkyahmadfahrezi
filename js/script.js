
    const name = prompt("Masukkan nama kamu:");

    // Jika ada nama diinput, update teks welcome
    if (name) {
      document.getElementById("welcomeText").textContent = `Hi ${name}, Welcome To Our Website`;
    }
const form = document.getElementById("messageForm");

form.addEventListener("submit", function (event) {
  event.preventDefault(); 

  const name = document.getElementById("name").value;
  const date = document.getElementById("Date").value;
  const gender = document.querySelector('input[name="Gender"]:checked').value;
  const message = document.getElementById("message").value;

  function showTime() {
    const now = new Date();
    document.getElementById("currentTime").textContent = now.toString();
  }

  // jalankan sekali saat load
  showTime();

  // update setiap detik
  setInterval(showTime, 1000);


  // tampilkan ke display area
  document.getElementById("displayName").textContent = name;
  document.getElementById("displayDate").textContent = date;
  document.getElementById("displayGender").textContent = gender;
  document.getElementById("displayMessage").textContent = message;

  
  form.reset();
});
