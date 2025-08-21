// Ambil semua elemen dengan kelas 'dropdown-toggle'
const dropdownToggles = document.querySelectorAll('.dropdown-toggle');

dropdownToggles.forEach(toggle => {
  toggle.addEventListener('click', function(event) {
    // Mencegah browser berpindah halaman
    event.preventDefault();

    // Dapatkan elemen dropdown-content yang terkait
    const dropdownContent = this.nextElementSibling;
    
    // Toggle (menambah/menghapus) kelas 'hidden'
    dropdownContent.classList.toggle('hidden');
  });
});

// Tutup dropdown saat mengklik di luar area menu
document.addEventListener('click', function(event) {
  dropdownToggles.forEach(toggle => {
    const dropdownContent = toggle.nextElementSibling;
    const isClickInsideMenu = toggle.contains(event.target) || dropdownContent.contains(event.target);
    
    // Jika klik tidak berada di dalam menu dropdown, tutup
    if (!isClickInsideMenu) {
      dropdownContent.classList.add('hidden');
    }
  });
});