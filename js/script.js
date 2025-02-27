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

// Daftar halaman yang akan dicari
const pages = [
    "daftar-kir.html", "kiba.html", "kibb.html", "kibc.html", "kibd.html",
    "kibe.html", "kibf.html", "statistik-kir.html", "cuti.html", "data-pendidik.html",
    "data-tendik.html", "kartu-pegawai.html", "kenaikan-pangkat.html", "mutasi.html",
    "penghargaan.html", "pensiun.html", "presensi.html", "statistik-pegawai.html",
    "tamsil.html", "tunjangan.html", "ekstrakurikuler.html", "prestasi.html",
    "surat-keterangan-aktif.html", "surat-keterangan-kehilangan.html", "kantin.html",
    "laboratorium.html", "perpustakaan.html", "ruang-gudang.html", "ruang-guru.html",
    "ruang-kelas.html", "ruang-konseling.html", "ruang-pimpinan.html", "ruang-sirkulasi.html",
    "ruang-tatausaha.html", "ruang-uks.html", "tempat-bermain.html", "tempat-ibadah.html",
    "toilet.html", "dashboard.html", "index.html", "inventaris.html", "kepegawaian.html",
    "kesiswaan.html", "kontak.html", "login.html", "persuratan.html", "profil.html",
    "profiluser.html", "sarpras.html"
];

// Fungsi utama untuk pencarian
function searchSite() {
    let inputDesktop = document.getElementById("searchInput");
    let inputMobile = document.getElementById("searchInputMobile");
    
    let input = (inputDesktop?.value || inputMobile?.value || "").trim().toLowerCase();
    let modalResult = document.getElementById("modalResult");
    let searchModal = new bootstrap.Modal(document.getElementById("searchModal"));
    let foundResults = [];

    if (!input) {
        modalResult.innerHTML = `<li class="list-group-item text-danger">⚠️ Masukkan kata kunci untuk mencari!</li>`;
        searchModal.show();
        return;
    }

    modalResult.innerHTML = `<li class="list-group-item text-warning">🔎 Sedang mencari...</li>`;
    searchModal.show();

    let promises = pages.map(page => fetch(page)
        .then(response => {
            if (!response.ok) throw new Error(`Halaman ${page} tidak ditemukan`);
            return response.text();
        })
        .then(html => {
            let doc = new DOMParser().parseFromString(html, "text/html");
            let bodyText = doc.body.innerText.toLowerCase();

            if (bodyText.includes(input)) {
                let snippet = getSnippet(bodyText, input);
                foundResults.push(`
                    <li class="list-group-item">
                        <a href="${page}" class="text-primary">🔗 ${capitalize(page.replace(".html", ""))}</a>
                        <p class="text-muted small">${snippet}</p>
                    </li>
                `);
            }
        })
        .catch(error => console.warn(error))
    );

    Promise.all(promises).then(() => {
        if (foundResults.length > 0) {
            modalResult.innerHTML = `<li class="list-group-item active">✅ ${foundResults.length} hasil ditemukan:</li>` + foundResults.join("");
        } else {
            modalResult.innerHTML = `<li class="list-group-item text-danger">❌ Tidak ada hasil ditemukan untuk "<strong>${input}</strong>".</li>`;
        }
    });
}

// Fungsi untuk menampilkan cuplikan teks yang mengandung kata kunci
function getSnippet(text, keyword) {
    let index = text.indexOf(keyword);
    if (index === -1) return "";
    
    let start = Math.max(0, index - 30);
    let end = Math.min(text.length, index + 30);
    let snippet = text.substring(start, end);

    return `...${highlightText(snippet, keyword)}...`;
}

// Fungsi untuk memberi highlight pada teks yang ditemukan
function highlightText(text, keyword) {
    let regex = new RegExp(`(${keyword})`, "gi");
    return text.replace(regex, `<mark>$1</mark>`);
}

// Fungsi untuk mengubah teks menjadi format kapital
function capitalize(text) {
    return text.charAt(0).toUpperCase() + text.slice(1);
}

// ✅ Event Listener untuk Desktop & Mobile
document.getElementById("searchInput")?.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        searchSite();
    }
});

document.getElementById("searchInputMobile")?.addEventListener("input", function(event) {
    if (event.target.value.length > 2) { // Minimal 3 huruf sebelum pencarian
        searchSite();
    }
});



