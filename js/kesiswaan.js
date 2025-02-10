document.addEventListener("DOMContentLoaded", function() {
    // Data Siswa
    const dataSiswa = [
        { kelas: 'Kelas 7', lakiLaki: 150, perempuan: 140 },
        { kelas: 'Kelas 8', lakiLaki: 160, perempuan: 150 },
        { kelas: 'Kelas 9', lakiLaki: 170, perempuan: 160 }
    ];

    let totalLakiLaki = 0;
    let totalPerempuan = 0;

    dataSiswa.forEach(item => {
        totalLakiLaki += item.lakiLaki;
        totalPerempuan += item.perempuan;
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${item.kelas}</td>
            <td>${item.lakiLaki}</td>
            <td>${item.perempuan}</td>
            <td>${item.lakiLaki + item.perempuan}</td>
        `;
        document.getElementById('data-siswa-tbody').appendChild(row);
    });

    document.getElementById('total-laki-laki').textContent = totalLakiLaki;
    document.getElementById('total-perempuan').textContent = totalPerempuan;
    document.getElementById('total-siswa').textContent = totalLakiLaki + totalPerempuan;

    // Forum PPDB
    const ppdbData = [
        { nama: 'Juknis PPDB 2023', link: 'downloads/juknis_ppdb_2023.pdf' },
        { nama: 'Juknis PPDB 2024', link: 'downloads/juknis_ppdb_2024.pdf' }
    ];

    ppdbData.forEach(item => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${item.nama}</td>
            <td><a href="${item.link}" class="btn btn-success" download>Unduh</a></td>
        `;
        document.getElementById('ppdb-tbody').appendChild(row);
    });

    // Forum KJP
    const kjpData = [
        { nama: 'Juknis KJP 2023', link: 'downloads/juknis_kjp_2023.pdf' },
        { nama: 'Juknis KJP 2024', link: 'downloads/juknis_kjp_2024.pdf' }
    ];

    kjpData.forEach(item => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${item.nama}</td>
            <td><a href="${item.link}" class="btn btn-success" download>Unduh</a></td>
        `;
        document.getElementById('kjp-tbody').appendChild(row);
    });

    // Forum PIP
    const pipData = [
        { nama: 'Juknis PIP 2023', link: 'downloads/juknis_pip_2023.pdf' },
        { nama: 'Juknis PIP 2024', link: 'downloads/juknis_pip_2024.pdf' }
    ];

    pipData.forEach(item => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${item.nama}</td>
            <td><a href="${item.link}" class="btn btn-success" download>Unduh</a></td>
        `;
        document.getElementById('pip-tbody').appendChild(row);
    });

    // Kelulusan
    document.getElementById('kelulusan-link').href = 'downloads/kelulusan.pdf';
});
