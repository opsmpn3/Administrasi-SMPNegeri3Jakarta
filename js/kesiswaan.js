const dataSiswa = [
    { bulan: "Juli",  kelas: ["17/19/36", "18/18/36", "17/19/36", "15/21/36", "19/16/35", "22/13/35", "19/17/36", "22/14/36", "149/137/286"] },
    { bulan: "Agustus",  kelas: ["17/19/36", "18/18/36", "17/19/36", "15/21/36", "19/16/35", "22/13/35", "19/17/36", "22/14/36", "149/137/286"] },
    { bulan: "September",  kelas: ["17/19/36", "18/18/36", "17/19/36", "15/21/36", "19/16/35", "22/13/35", "19/17/36", "22/14/36", "149/137/286"] },
    { bulan: "Oktober",  kelas: ["17/19/36", "18/18/36", "17/19/36", "15/21/36", "19/16/35", "22/13/35", "19/17/36", "22/14/36", "149/137/286"] },
    { bulan: "November",  kelas: ["17/19/36", "18/18/36", "17/19/36", "15/21/36", "19/16/35", "22/13/35", "19/17/36", "22/14/36", "149/137/286"] },
    { bulan: "Desember",  kelas: ["17/19/36", "18/18/36", "17/19/36", "15/21/36", "19/16/35", "22/13/35", "19/17/36", "22/14/36", "149/137/286"] },
    { bulan: "Januari",  kelas: ["17/19/36", "18/18/36", "17/19/36", "15/21/36", "18/18/36", "22/14/36", "19/17/36", "22/14/36", "148/140/288"] },
    { bulan: "Februari",  kelas: ["17/19/36", "18/18/36", "17/19/36", "15/21/36", "18/18/36", "22/14/36", "19/17/36", "22/14/36", "148/140/288"] },
];

const tableBody = document.getElementById("tableBody");

// Menampilkan data ke dalam tabel
dataSiswa.forEach((row) => {
    let tr = document.createElement("tr");

    // Tambahkan kolom bulan
    let tdBulan = document.createElement("td");
    tdBulan.textContent = row.bulan;
    tr.appendChild(tdBulan);

    // Tambahkan kolom nilai tiap kelas
    row.kelas.forEach((nilai) => {
        let td = document.createElement("td");
        td.textContent = nilai;
        tr.appendChild(td);
    });

    tableBody.appendChild(tr);
});






//BREADCRUMB EKSTRAKURIKULER//
// Data for the chart
 // Data for the chart
 const ekskulData = {
    labels: ['Seni Musik', 'Seni Tari', 'Olahraga Bola Voli', 'Pramuka', 'Robotika', 'Debating'],
    datasets: [{
        label: 'Jumlah Peserta',
        data: [120, 90, 80, 150, 70, 60],
        backgroundColor: [
            'rgba(54, 162, 235, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(255, 99, 132, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
        ],
        borderColor: [
            'rgba(54, 162, 235, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(255, 99, 132, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 1
    }]
};

// Configuration options
const ekskulConfig = {
    type: 'bar',
    data: ekskulData,
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
};
