// Data Pegawai
// Data Pendidik (Sesuai dengan daftar yang diberikan)
const pendidikData = [
    { no: 1, nama: "Irwanto Sumantri, S.Pd", nip: "196510101988031014", jabatan: "Kepala Sekolah", foto: "assets/images/user.jpg" },
    { no: 2, nama: "Drs. Sulaeman", nip: "196706191995121002", jabatan: "Guru", foto: "assets/images/user.jpg" },
    { no: 3, nama: "Drs. Herru Tri Handaka", nip: "196505171998021002", jabatan: "Guru", foto: "assets/images/user.jpg" },
    { no: 4, nama: "Dra. Atin Supryatin", nip: "196711041997032001", jabatan: "Guru", foto: "assets/images/user.jpg" },
    { no: 5, nama: "Dra. Yenidar", nip: "197004271998022002", jabatan: "Guru", foto: "assets/images/user.jpg" },
    { no: 6, nama: "Dra. Retnowati", nip: "196903102008012027", jabatan: "Wakasek Bid. Sarpras", foto: "assets/images/user.jpg" },
    { no: 7, nama: "Yani Samsuwati, S.Pd", nip: "196608292008012008", jabatan: "Guru", foto: "assets/images/user.jpg" },
    { no: 8, nama: "Drs. Tunggul Hutagaol", nip: "196808012016111001", jabatan: "Guru", foto: "assets/images/user.jpg" },
    { no: 9, nama: "Suhanah, S.Pd", nip: "196606022016102001", jabatan: "Guru", foto: "assets/images/user.jpg" },
    { no: 10, nama: "Nina Komala Sari, S.Pd", nip: "197101262017082001", jabatan: "Guru", foto: "assets/images/user.jpg" },
    { no: 11, nama: "Dra. Maryatun", nip: "196601252007012010", jabatan: "Guru", foto: "assets/images/user.jpg" },
    { no: 12, nama: "Dra. Magda Ctellah Matindas", nip: "196505172016062001", jabatan: "Guru", foto: "assets/images/user.jpg" },
    { no: 13, nama: "Dra. Kusmiyati", nip: "196901052017062001", jabatan: "Guru", foto: "assets/images/user.jpg" },
    { no: 14, nama: "Muthoharoh, S.Pd.I", nip: "198902052015042004", jabatan: "Wakasek Bid. Akademik", foto: "assets/images/user.jpg" },
    { no: 15, nama: "Mariam Giselle Andrea Luciano, S.Pd", nip: "199212162019032008", jabatan: "Guru", foto: "assets/images/user.jpg" },
    { no: 16, nama: "Septia Saraswati, S.Pd", nip: "199009012020122018", jabatan: "Wakasek Bid. Kesiswaan", foto: "assets/images/user.jpg" },
    { no: 17, nama: "Ina Musdalifa, S.Pd", nip: "197009112022212003", jabatan: "Guru", foto: "assets/images/user.jpg" },
    { no: 17, nama: "Henrikus Wawan Kurniawan, S.Pd", nip: "199507132023211013", jabatan: "Staff Bid. Kesiswaan", foto: "assets/images/user.jpg" },
    { no: 17, nama: "Dewi Komalasari. S.E", nip: "197806092022212006", jabatan: "Staff Bid. Sarpras", foto: "assets/images/user.jpg" },
    { no: 18, nama: "Purnakarta, S.Pd", nip: "198112092022211006", jabatan: "Guru", foto: "assets/images/user.jpg" },
    { no: 19, nama: "Rahmad Hafido Prayoga, S.Pd", nip: "199304292022211007", jabatan: "Guru", foto: "assets/images/user.jpg" },
    { no: 20, nama: "Khonsa Tsabita Baityhaq, S.Pd", nip: "199603122022212015", jabatan: "Guru", foto: "assets/images/user.jpg" },
    { no: 21, nama: "Hanny Sugiharyani, S.Pd", nip: "199702182022212012", jabatan: "Guru", foto: "assets/images/user.jpg" },
    { no: 22, nama: "Raka Prasetyo, M.Pd", nip: "199410092023211018", jabatan: "Guru", foto: "assets/images/user.jpg" },
    { no: 23, nama: "Gita Marlinda, M.Pd", nip: "199103312023212031", jabatan: "Guru", foto: "assets/images/user.jpg" },
    { no: 24, nama: "Maizal, S.Pd", nip: "196605132023211001", jabatan: "Guru", foto: "assets/images/user.jpg" },
    { no: 25, nama: "Achmad Darojih, S.Pd.I", nip: "197308152023211001", jabatan: "Guru", foto: "assets/images/user.jpg" },
    { no: 26, nama: "Riris, S.Pd", nip: "198305112023212024", jabatan: "Guru", foto: "assets/images/user.jpg" },
    { no: 27, nama: "Arni Purwati, S.Pd", nip: "199210242023212044", jabatan: "Guru", foto: "assets/images/user.jpg" },
    { no: 28, nama: "Citra Febrianti, S.Pd", nip: "199102122023212043", jabatan: "Guru", foto: "assets/images/user.jpg" },
    { no: 29, nama: "Vivi Rizky Awalia, S.Sn", nip: "199206032023212037", jabatan: "Guru", foto: "assets/images/user.jpg" },
    { no: 30, nama: "Siti Nurhaeni, S.Pd.", nip: "199205282023212029", jabatan: "Guru", foto: "assets/images/user.jpg" },
    { no: 31, nama: "Nur Aini, S.Pd", nip: "197901132024212001", jabatan: "Guru", foto: "assets/images/user.jpg" },
    { no: 32, nama: "Aries Andesko Syamsirman, S.Pd", nip: "1005790", jabatan: "Guru", foto: "assets/images/user.jpg" }
];

// Data Tendik (Sesuai dengan daftar yang diberikan)
const tendikData = [
    { no: 1, nama: "Sri Sariwani", nip: "", jabatan: "Kasatlak", foto: "assets/images/user.jpg" },
    { no: 2, nama: "Dian Setiawati, S.E", nip: "1016569", jabatan: "Tenaga Administrasi", foto: "assets/images/dian_setiawati.jpg" },
    { no: 3, nama: "Sulasto, S.Pd", nip: "1016578", jabatan: "Tenaga Administrasi", foto: "assets/images/sulasto.jpg" },
    { no: 4, nama: "Riyan Heriyanto, S.Kom", nip: "1020259", jabatan: "Tenaga Administrasi", foto: "assets/images/riyan_heriyanto.jpg" },
    { no: 5, nama: "Jojor Sinaga, S.Kom", nip: "1016550", jabatan: "Tenaga Administrasi", foto: "assets/images/johor_sinaga.jpg" },
    { no: 6, nama: "Saprudin", nip: "1016568", jabatan: "Tenaga Administrasi", foto: "assets/images/saprudin.jpg" },
    { no: 7, nama: "Siswanto", nip: "1016571", jabatan: "Tenaga Administrasi", foto: "assets/images/siswanto.jpg" },
    { no: 8, nama: "Lulu Firdaus", nip: "1026286", jabatan: "Tenaga Administrasi", foto: "assets/images/lulu_firdaus.jpg" },
    { no: 9, nama: "Sunaryo", nip: "1016570", jabatan: "Tenaga Administrasi", foto: "assets/images/sunaryo.jpg" },
    { no: 10, nama: "Fauziah Utami, S.Kom", nip: "1030678", jabatan: "Tenaga Kebersihan", foto: "assets/images/fauziah_utami.jpg" },
    { no: 11, nama: "Ahmad Fauzi", nip: "1016573", jabatan: "Tenaga Kebersihan", foto: "assets/images/ahmad_fauzi.jpg" },
    { no: 12, nama: "Iyan Sopian", nip: "1016575", jabatan: "Penjaga Sekolah", foto: "assets/images/iyan_sopian.jpg" }
];

// Fungsi untuk mengisi tabel pegawai
function populateTable() {
    const pendidikTableBody = document.getElementById('pendidikTableBody');
    const tendikTableBody = document.getElementById('tendikTableBody');

    pendidikTableBody.innerHTML = ""; // Bersihkan tabel sebelum menambahkan data
    tendikTableBody.innerHTML = "";

    pendidikData.forEach((pegawai, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${pegawai.no}</td>
            <td>${pegawai.nama}</td>
            <td>${pegawai.nip}</td>
            <td>${pegawai.jabatan}</td>
            <td><button class="btn btn-info" onclick="showDetail(${index}, 'pendidik')">Detail</button></td>
        `;
        pendidikTableBody.appendChild(row);
    });

    tendikData.forEach((pegawai, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${pegawai.no}</td>
            <td>${pegawai.nama}</td>
            <td>${pegawai.nip}</td>
            <td>${pegawai.jabatan}</td>
            <td><button class="btn btn-info" onclick="showDetail(${index}, 'tendik')">Detail</button></td>
        `;
        tendikTableBody.appendChild(row);
    });
}


// Fungsi untuk menampilkan detail pegawai
function showDetail(index, jenis) {
    let pegawai;
    if (jenis === 'pendidik') {
        pegawai = pendidikData[index];
    } else if (jenis === 'tendik') {
        pegawai = tendikData[index];
    }

    document.getElementById('modalFoto').src = pegawai.foto;
    document.getElementById('modalNama').textContent = pegawai.nama;
    document.getElementById('modalNip').textContent = pegawai.nip;
    document.getElementById('modalJabatan').textContent = pegawai.jabatan;
    const detailModal = new bootstrap.Modal(document.getElementById('detailModal'));
    detailModal.show();
}

// Inisialisasi tabel
populateTable();


function showMessage(element, message, color) {
    element.textContent = message;
    element.style.color = color;

    setTimeout(() => {
        element.textContent = "";
    }, 3000);
}

// Login Pegawai
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const loginMessage = document.getElementById('loginMessage');

    const users = [
        { username: '134026', password: '123456', link: 'https://drive.google.com/drive/folders/141_l3p_4Cltx0OkxqwJiVJmwqwCJpw0a?usp=drive_link' },
        { username: '156434', password: '123456', link: 'https://drive.google.com/drive/folders/1AFcrB54jQdB3r2caKzGkZyPWN-w5IUK1?usp=sharing' },
        { username: '139160', password: '123456', link: 'https://drive.google.com/drive/folders/1fiANOzPlkV78QVB0' }
    ];

    const user = users.find(u => u.username === username && u.password === password);

    if (user) {
        showMessage(loginMessage, 'Login berhasil! Mengalihkan...', 'green');
        setTimeout(() => { window.location.href = user.link; }, 2000);
    } else {
        showMessage(loginMessage, 'Username atau password salah.', 'red');
    }
});

// Login Admin
document.getElementById('adminLoginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const adminUsername = document.getElementById('adminUsername').value;
    const adminPassword = document.getElementById('adminPassword').value;
    const adminLoginMessage = document.getElementById('adminLoginMessage');

    const admin = { username: 'kepegawaian', password: '20102470', link: 'https://drive.google.com/drive/folders/1h3RkjH2E7JBx8feuOuFdCwIWDG7wOmtu?usp=sharing' };

    if (adminUsername === admin.username && adminPassword === admin.password) {
        showMessage(adminLoginMessage, 'Login berhasil! Mengalihkan...', 'green');
        setTimeout(() => { window.location.href = admin.link; }, 2000);
    } else {
        showMessage(adminLoginMessage, 'Username atau password salah.', 'red');
    }
});

