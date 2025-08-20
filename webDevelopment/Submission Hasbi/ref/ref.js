// Data layanan
const layanan = [
  "Pembuatan Website",
  "Desain Grafis",
  "Digital Marketing",
  "SEO & Analytics",
  "Hosting & Domain"
];

// Isi dropdown via JS
const dropdown = document.getElementById("layananDropdown");

layanan.forEach(item => {
  const link = document.createElement("a");
  link.href = "#";
  link.textContent = item;
  dropdown.appendChild(link);
});

// Logika klik di mobile (maks. 767px)
const toggleBtn = document.querySelector(".dropdown-toggle");
const dropdownItem = document.querySelector(".dropdown");

toggleBtn.addEventListener("click", function (e) {
  // Cek ukuran layar
  if (window.innerWidth < 768) {
    dropdownItem.classList.toggle("open");
  }
});

// Tutup dropdown jika klik di luar (khusus mobile)
document.addEventListener("click", function (e) {
  if (window.innerWidth < 768) {
    if (!dropdownItem.contains(e.target)) {
      dropdownItem.classList.remove("open");
    }
  }
});
