document.addEventListener("DOMContentLoaded", function () {
    console.log("📌 inventaris.js Loaded!");

    const modalKIB = document.getElementById("modalKIB");
    const modalInstance = new bootstrap.Modal(modalKIB);

    // 📌 Fungsi untuk menampilkan modal KIB dengan informasi yang sesuai
    document.querySelectorAll(".kib-card").forEach(card => {
        card.addEventListener("click", function () {
            const title = this.getAttribute("data-title");
            const description = this.getAttribute("data-description");

            document.getElementById("modalKIBTitle").textContent = title;
            document.getElementById("modalKIBDescription").textContent = description;

            modalInstance.show();
        });
    });

    console.log("✅ Event Listener Modal KIB Berhasil Ditambahkan!");

    // 📌 Pastikan modal bisa dibuka kembali setelah ditutup
    modalKIB.addEventListener("hidden.bs.modal", function () {
        console.log("📌 Modal KIB Ditutup.");
    });
});


document.addEventListener("DOMContentLoaded", function () {
    loadReferensiTable();
    loadKIRTable();
});

// Data Referensi
const dataReferensi = [
    { bahan: "Kayu", asal: "Milik Pemda DKI", satuan: "M1", statusTanah: "Milik Pemda DKI", kondisi: "Baik" },
    { bahan: "Besi", asal: "Milik Negara", satuan: "M2", statusTanah: "Milik Negara", kondisi: "Rusak Ringan" },
    { bahan: "Rotan", asal: "Hak Pakai", satuan: "M3", statusTanah: "Hak Pakai", kondisi: "Rusak Berat" }
];

// Data KIR
const dataKIR = [
    { kode: "101001", gedung: "SMP NEGERI 3", lantai: "1", ruangan: "KELAS IX A" },
    { kode: "101002", gedung: "SMP NEGERI 3", lantai: "1", ruangan: "KELAS IX B" },
    { kode: "101003", gedung: "SMP NEGERI 3", lantai: "1", ruangan: "KELAS IX C" }
];

// Fungsi Memuat Tabel Referensi
function loadReferensiTable() {
    const referensiBody = document.getElementById("referensiBody");

    if (!referensiBody) {
        console.error("Elemen referensiBody tidak ditemukan!");
        return;
    }

    referensiBody.innerHTML = "";  // Kosongkan sebelum menambahkan data

    dataReferensi.forEach(item => {
        let row = referensiBody.insertRow();
        row.insertCell(0).innerText = item.bahan;
        row.insertCell(1).innerText = item.asal;
        row.insertCell(2).innerText = item.satuan;
        row.insertCell(3).innerText = item.statusTanah;
        row.insertCell(4).innerText = item.kondisi;
    });
}

// Fungsi Memuat Tabel KIR
function loadKIRTable() {
    const kirBody = document.getElementById("kirBody");

    if (!kirBody) {
        console.error("Elemen kirBody tidak ditemukan!");
        return;
    }

    kirBody.innerHTML = "";  // Kosongkan sebelum menambahkan data

    dataKIR.forEach(item => {
        let row = kirBody.insertRow();
        row.insertCell(0).innerText = item.kode;
        row.insertCell(1).innerText = item.gedung;
        row.insertCell(2).innerText = item.lantai;
        row.insertCell(3).innerText = item.ruangan;
    });
}

// Fungsi Sorting Tabel
function sortTable(colIndex, tableId) {
    const tableBody = document.getElementById(tableId);
    if (!tableBody) {
        console.error("Tabel dengan ID " + tableId + " tidak ditemukan!");
        return;
    }

    const rows = Array.from(tableBody.rows);

    rows.sort((a, b) => {
        let valA = a.cells[colIndex].innerText.trim();
        let valB = b.cells[colIndex].innerText.trim();
        let isNumeric = !isNaN(parseFloat(valA)) && isFinite(valA);
        return isNumeric ? parseFloat(valA) - parseFloat(valB) : valA.localeCompare(valB);
    });

    tableBody.innerHTML = "";
    rows.forEach(row => tableBody.appendChild(row));
}

// Pencarian di Tabel KIR
document.getElementById("searchInput").addEventListener("input", function () {
    let filter = this.value.toUpperCase();
    let rows = document.getElementById("kirBody").getElementsByTagName("tr");

    for (let row of rows) {
        let ruangan = row.cells[3].innerText.toUpperCase();
        row.style.display = ruangan.includes(filter) ? "" : "none";
    }
});
