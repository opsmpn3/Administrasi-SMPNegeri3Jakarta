document.addEventListener("DOMContentLoaded", function () {
    console.log("profil.js loaded ✅");

    // 📌 Data Riwayat Kepala Sekolah
    const kepalaSekolahData = [
        { no: 1, nama: "Joko", periode: "1963" },
        { no: 2, nama: "Supena Bratamidjaya", periode: "1968 - 1979" },
        { no: 3, nama: "Padmah", periode: "1979 - 1983" },
        { no: 4, nama: "Mulyono Padmorejo", periode: "1983 - 1988" },
        { no: 5, nama: "ASM. Tambunan", periode: "1988 - 1992" },
        { no: 6, nama: "Samsudin", periode: "1992 - 1994" },
        { no: 7, nama: "H. Untung, BA.", periode: "1994 - 1998" },
        { no: 8, nama: "Dra. Hj. Trisnowati", periode: "1998 - 2002" },
        { no: 9, nama: "Drs. Aceng Kodir", periode: "2002 - 2005" },
        { no: 10, nama: "Lestari Endang Wijani, S.Pd", periode: "2005 - 2009" },
        { no: 11, nama: "Drs. H. Alwi H. Jasin, M.M", periode: "2009 - 2010" },
        { no: 12, nama: "Drs. H. M. Said Jamaluddin, M.Pd", periode: "2010 - 2014" },
        { no: 13, nama: "Subarno, S.Pd. M.M", periode: "2014 - 2018" },
        { no: 14, nama: "Dra. Nunuk Astutiningtyas, M.Pd", periode: "2018 - 2021" },
        { no: 15, nama: "Irwanto Sumantri, S.Pd", periode: "2021 - Sekarang" }
    ];    

    // 📌 Mengisi Tabel Riwayat Kepala Sekolah
    function populateKepalaSekolahTable() {
        const tableBody = document.querySelector("#kepala-sekolah-table tbody");
        if (!tableBody) return console.error("Tabel kepala sekolah tidak ditemukan!");

        tableBody.innerHTML = "";
        kepalaSekolahData.forEach((kepsek) => {
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${kepsek.no}</td>
                                <td>${kepsek.nama}</td>
                <td>${kepsek.periode}</td>
            `;
            tableBody.appendChild(row);
        });

        console.log("Riwayat Kepala Sekolah berhasil dimasukkan ke tabel 📜");
    }

    populateKepalaSekolahTable();

    // 📌 Efek Fade-in saat Scroll
    const fadeElements = document.querySelectorAll(".fade-in");

    function checkScroll() {
        fadeElements.forEach(el => {
            if (el.getBoundingClientRect().top < window.innerHeight - 100) {
                el.classList.add("visible");
            }
        });
    }

    window.addEventListener("scroll", checkScroll);
    checkScroll(); // Jalankan saat halaman dimuat

    // 📌 Tambahkan fitur zoom pada gambar Struktur Organisasi
    document.querySelectorAll(".zoomable").forEach(img => {
        img.style.cursor = "pointer";
        img.addEventListener("click", function () {
            showZoomImage(this.src, this.alt);
        });
    });

    // 📌 Fungsi untuk menampilkan modal zoom
    function showZoomImage(src, alt) {
        document.getElementById("modalZoomImage").src = src;
        document.getElementById("modalZoomTitle").textContent = alt;
        const zoomModal = new bootstrap.Modal(document.getElementById("zoomModal"));
        zoomModal.show();
    }
});

