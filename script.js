// Ambil semua tombol
const createBtn = document.getElementById("create-btn");
const openBtn = document.getElementById("open-btn");
const historyBtn = document.getElementById("history-btn");
const aboutBtn = document.getElementById("about-btn");

// Efek klik animasi kecil
function buttonClickEffect(btn) {
  btn.style.transform = "scale(0.95)";
  setTimeout(() => {
    btn.style.transform = "scale(1)";
  }, 150);
}

// Event listeners
createBtn.addEventListener("click", () => {
  buttonClickEffect(createBtn);
  alert("Fitur 'Create' akan mengarahkan ke halaman pembuatan puzzle 🧩");
  // window.location.href = "create.html"; // aktifkan kalau halaman sudah ada
});

openBtn.addEventListener("click", () => {
  buttonClickEffect(openBtn);
  alert("Fitur 'Open' masih dalam pengembangan 🚧");
});

historyBtn.addEventListener("click", () => {
  buttonClickEffect(historyBtn);
  alert("Fitur 'History' masih dalam pengembangan 📜");
});

aboutBtn.addEventListener("click", () => {
  buttonClickEffect(aboutBtn);
  alert("Tentang PYCOLO 💡\nGame logika seru untuk anak-anak belajar berpikir lewat simbol dan angka!");
});

// Efek hover lucu buat tombol
const buttons = document.querySelectorAll(".menu-btn");
buttons.forEach(btn => {
  btn.addEventListener("mouseenter", () => {
    btn.style.transition = "transform 0.2s ease";
    btn.style.transform = "scale(1.05)";
  });
  btn.addEventListener("mouseleave", () => {
    btn.style.transform = "scale(1)";
  });
});
