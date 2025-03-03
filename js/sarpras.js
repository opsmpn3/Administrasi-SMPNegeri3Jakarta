// Data Ruangan dengan KODE, GEDUNG, dan LANTAI
const dataRuangan = [
    { kode: "101001", gedung: "SMP Negeri 3 Jakarta", lantai: 1, nama: "Kelas IX A" },
    { kode: "101002", gedung: "SMP Negeri 3 Jakarta", lantai: 1, nama: "Kelas IX B" },
    { kode: "101003", gedung: "SMP Negeri 3 Jakarta", lantai: 1, nama: "Kelas IX C" },
    { kode: "101004", gedung: "SMP Negeri 3 Jakarta", lantai: 1, nama: "Kelas IX D" },
    { kode: "101005", gedung: "SMP Negeri 3 Jakarta", lantai: 1, nama: "Kelas IX E" },
    { kode: "101006", gedung: "SMP Negeri 3 Jakarta", lantai: 1, nama: "Kelas IX F" },
    { kode: "101007", gedung: "SMP Negeri 3 Jakarta", lantai: 1, nama: "Kelas IX G" },
    { kode: "101008", gedung: "SMP Negeri 3 Jakarta", lantai: 1, nama: "Kelas IX H" },
    { kode: "101009", gedung: "SMP Negeri 3 Jakarta", lantai: 1, nama: "Kelas VIII A" },
    { kode: "101010", gedung: "SMP Negeri 3 Jakarta", lantai: 1, nama: "Kelas VIII B" },
    { kode: "101011", gedung: "SMP Negeri 3 Jakarta", lantai: 1, nama: "Kelas VIII C" },
    { kode: "101012", gedung: "SMP Negeri 3 Jakarta", lantai: 1, nama: "Kelas VIII D" },
    { kode: "101013", gedung: "SMP Negeri 3 Jakarta", lantai: 1, nama: "Kelas VIII E" },
    { kode: "101014", gedung: "SMP Negeri 3 Jakarta", lantai: 1, nama: "Kelas VIII F" },
    { kode: "101015", gedung: "SMP Negeri 3 Jakarta", lantai: 1, nama: "Kelas VIII G" },
    { kode: "101016", gedung: "SMP Negeri 3 Jakarta", lantai: 1, nama: "Kelas VIII H" },
    { kode: "101017", gedung: "SMP Negeri 3 Jakarta", lantai: 1, nama: "Kelas VII A" },
    { kode: "101018", gedung: "SMP Negeri 3 Jakarta", lantai: 1, nama: "Kelas VII B" },
    { kode: "101019", gedung: "SMP Negeri 3 Jakarta", lantai: 1, nama: "Kelas VII C" },
    { kode: "101020", gedung: "SMP Negeri 3 Jakarta", lantai: 1, nama: "Kelas VII D" },
    { kode: "101021", gedung: "SMP Negeri 3 Jakarta", lantai: 1, nama: "Kelas VII E" },
    { kode: "101022", gedung: "SMP Negeri 3 Jakarta", lantai: 1, nama: "Kelas VII F" },
    { kode: "101023", gedung: "SMP Negeri 3 Jakarta", lantai: 1, nama: "Kelas VII G" },
    { kode: "101024", gedung: "SMP Negeri 3 Jakarta", lantai: 1, nama: "Kelas VII H" },
    { kode: "101025", gedung: "SMP Negeri 3 Jakarta", lantai: 1, nama: "Ruang Kepala Sekolah" },
    { kode: "101026", gedung: "SMP Negeri 3 Jakarta", lantai: 1, nama: "Ruang Wakil/Staff" },
    { kode: "101027", gedung: "SMP Negeri 3 Jakarta", lantai: 1, nama: "Ruang Guru" },
    { kode: "101028", gedung: "SMP Negeri 3 Jakarta", lantai: 1, nama: "Ruang Tata Usaha" },
    { kode: "101029", gedung: "SMP Negeri 3 Jakarta", lantai: 1, nama: "Ruang Perpustakaan" },
    { kode: "101030", gedung: "SMP Negeri 3 Jakarta", lantai: 1, nama: "Ruang BK" },
    { kode: "101031", gedung: "SMP Negeri 3 Jakarta", lantai: 1, nama: "Ruang OSIS" },
    { kode: "101032", gedung: "SMP Negeri 3 Jakarta", lantai: 1, nama: "Ruang Pramuka" },
    { kode: "101033", gedung: "SMP Negeri 3 Jakarta", lantai: 1, nama: "Ruang Lab. IPA" },
    { kode: "101034", gedung: "SMP Negeri 3 Jakarta", lantai: 1, nama: "Ruang Lab. Bahasa" },
    { kode: "101035", gedung: "SMP Negeri 3 Jakarta", lantai: 1, nama: "Ruang Lab. TIK" },
    { kode: "101036", gedung: "SMP Negeri 3 Jakarta", lantai: 1, nama: "Ruang Gudang" },
    { kode: "101037", gedung: "SMP Negeri 3 Jakarta", lantai: 1, nama: "Ruang Tata Boga" },
    { kode: "101038", gedung: "SMP Negeri 3 Jakarta", lantai: 1, nama: "Kamar Mandi Guru/Siswa" },
    { kode: "101039", gedung: "SMP Negeri 3 Jakarta", lantai: 1, nama: "Rumah Dinas" },
    { kode: "101040", gedung: "SMP Negeri 3 Jakarta", lantai: 1, nama: "Masjid" },
    { kode: "101041", gedung: "SMP Negeri 3 Jakarta", lantai: 1, nama: "Aula" }
];

let sortAscending = true;

// Fungsi untuk menampilkan data di tabel
function loadTable() {
    const ruanganBody = document.getElementById("ruanganBody");
    ruanganBody.innerHTML = "";

    dataRuangan.forEach(item => {
        let row = `<tr>
            <td>${item.kode}</td>
            <td>${item.gedung}</td>
            <td>${item.lantai}</td>
            <td>${item.nama}</td>
        </tr>`;
        ruanganBody.innerHTML += row;
    });
}

// Fungsi untuk sorting tabel
function sortTable(colIndex) {
    sortAscending = !sortAscending;
    const keys = ["kode", "gedung", "lantai", "nama"];

    dataRuangan.sort((a, b) => {
        let valA = String(a[keys[colIndex]]).toUpperCase();
        let valB = String(b[keys[colIndex]]).toUpperCase();
        return sortAscending ? valA.localeCompare(valB) : valB.localeCompare(valA);
    });

    loadTable();
}

// Memuat data saat halaman selesai dimuat
document.addEventListener("DOMContentLoaded", function () {
    loadTable();
});
