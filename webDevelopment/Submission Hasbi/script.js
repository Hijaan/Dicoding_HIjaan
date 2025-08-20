const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Data layanan
const layanan = [
  "Pembuatan Website",
  "Desain Grafis",
  "Digital Marketing",
  "SEO & Analytics",
  "Hosting & Domain"
];

// Ambil elemen dropdown
const dropdown = document.getElementById("layananDropdown");

// Generate item dropdown secara dinamis
layanan.forEach(item => {
  const link = document.createElement("a");
  link.href = "#"; // bisa diganti ke halaman terkait
  link.textContent = item;
  dropdown.appendChild(link);
});
