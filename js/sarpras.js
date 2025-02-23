

// Data Ruangan dan Fasilitas
const dataRuangan = [
    { nama: "KELAS IX A", fasilitas: "Proyektor, AC, Papan Tulis" },
    { nama: "KELAS IX B", fasilitas: "Proyektor, Kipas Angin, Papan Tulis" },
    { nama: "KELAS IX C", fasilitas: "AC, Papan Tulis, Lemari" },
    { nama: "KELAS IX D", fasilitas: "Proyektor, Kipas Angin" },
    { nama: "KELAS IX E", fasilitas: "AC, Papan Tulis" },
    { nama: "KELAS IX F", fasilitas: "Proyektor, Meja Guru, Papan Tulis" },
    { nama: "KELAS IX G", fasilitas: "Kipas Angin, Meja Guru, Lemari" },
    { nama: "KELAS IX H", fasilitas: "AC, Papan Tulis, Kursi Murid" },
    { nama: "KELAS VIII A", fasilitas: "Proyektor, Kipas Angin, Meja Guru" },
    { nama: "KELAS VIII B", fasilitas: "AC, Lemari, Papan Tulis" },
    { nama: "KELAS VIII C", fasilitas: "Kipas Angin, Meja Guru, Kursi Murid" },
    { nama: "KELAS VIII D", fasilitas: "AC, Papan Tulis, Lemari" },
    { nama: "KELAS VIII E", fasilitas: "Proyektor, Kipas Angin, Meja Guru" },
    { nama: "KELAS VIII F", fasilitas: "Papan Tulis, Lemari, Kursi Murid" },
    { nama: "KELAS VIII G", fasilitas: "AC, Meja Guru, Papan Tulis" },
    { nama: "KELAS VIII H", fasilitas: "Proyektor, Kipas Angin, Lemari" },
    { nama: "KELAS VII A", fasilitas: "Kipas Angin, Papan Tulis, Kursi Murid" },
    { nama: "KELAS VII B", fasilitas: "AC, Meja Guru, Lemari" },
    { nama: "KELAS VII C", fasilitas: "Proyektor, Kipas Angin, Meja Guru" },
    { nama: "KELAS VII D", fasilitas: "AC, Papan Tulis, Lemari" },
    { nama: "KELAS VII E", fasilitas: "Papan Tulis, Kursi Murid, Lemari" },
    { nama: "KELAS VII F", fasilitas: "Proyektor, Kipas Angin, Meja Guru" },
    { nama: "KELAS VII G", fasilitas: "AC, Papan Tulis, Kursi Murid" },
    { nama: "KELAS VII H", fasilitas: "Kipas Angin, Meja Guru, Lemari" }
];

// Fungsi untuk menampilkan data di tabel
function loadTable() {
    const ruanganBody = document.getElementById("ruanganBody");
    ruanganBody.innerHTML = "";
    dataRuangan.forEach(item => {
        let row = `<tr>
            <td>${item.nama}</td>
            <td>${item.fasilitas}</td>
        </tr>`;
        ruanganBody.innerHTML += row;
    });
}

// Fungsi untuk sorting tabel
function sortTable(colIndex) {
    const tableBody = document.getElementById("ruanganBody");
    const rows = [...tableBody.rows];

    rows.sort((a, b) => {
        let valA = a.cells[colIndex].innerText.trim().toUpperCase();
        let valB = b.cells[colIndex].innerText.trim().toUpperCase();
        return valA.localeCompare(valB);
    });

    tableBody.innerHTML = "";
    rows.forEach(row => tableBody.appendChild(row));
}

// Fungsi pencarian berdasarkan nama ruangan
document.getElementById("searchInput").addEventListener("input", function () {
    let filter = this.value.toUpperCase();
    let rows = document.getElementById("ruanganBody").getElementsByTagName("tr");

    for (let row of rows) {
        let namaRuangan = row.cells[0].innerText.toUpperCase();
        row.style.display = namaRuangan.includes(filter) ? "" : "none";
    }
});

// Memuat data saat halaman selesai dimuat
document.addEventListener("DOMContentLoaded", function () {
    loadTable();
});