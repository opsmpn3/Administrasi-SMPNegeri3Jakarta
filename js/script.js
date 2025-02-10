document.addEventListener("DOMContentLoaded", function () {

    // 1. Navbar Responsif (Optimal)
    function adjustNavbar() {
        const offcanvasNavbar = document.getElementById("offcanvasNavbar");
        const screenWidth = window.innerWidth;

        // Gunakan class Bootstrap untuk breakpoint (lebih handal)
        if (screenWidth < 992) { // Atau gunakan breakpoint Bootstrap:  if (window.matchMedia('(max-width: 991.98px)').matches) {
            offcanvasNavbar.classList.add("offcanvas-end");
        } else {
            offcanvasNavbar.classList.remove("offcanvas-end");
        }
    }

    adjustNavbar();
    window.addEventListener("resize", adjustNavbar);


    // 2. Tab (Jika Digunakan - Pastikan Elemennya Ada)
    const triggerTabList = document.querySelectorAll('#myTab button'); // Pastikan #myTab ada di HTML Anda
    if (triggerTabList.length > 0) { // Cek apakah elemen ditemukan sebelum menjalankan loop
        triggerTabList.forEach(triggerEl => {
            const tabTrigger = new bootstrap.Tab(triggerEl);
            triggerEl.addEventListener('click', event => {
                event.preventDefault();
                tabTrigger.show();
            });
        });
    }

    // 3. Tanggal & Waktu (Optimal)
    function updateDateTime() {
        const now = new Date();
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        const tanggalWaktuElement = document.getElementById("tanggal-waktu"); // Amankan pemilihan elemen
        if (tanggalWaktuElement) { // Periksa apakah elemen ditemukan
            tanggalWaktuElement.textContent = now.toLocaleDateString("id-ID", options);
        }
    }

    updateDateTime(); // Panggil sekali saat DOMContentLoaded
    setInterval(updateDateTime, 1000); // Update setiap detik (opsional, jika ingin waktu yang berjalan)


    // 4. Visitor Counter (Optimal & Aman)
    let count = localStorage.getItem("visitor-count");
    count = count ? parseInt(count) + 1 : 1; // Gunakan ternary operator dan pastikan count adalah integer
    localStorage.setItem("visitor-count", count);

    const visitorCountElement = document.getElementById("visitor-count"); // Amankan pemilihan elemen
    if (visitorCountElement) { // Periksa apakah elemen ditemukan
      visitorCountElement.textContent = count;
    }

});