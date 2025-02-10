document.addEventListener("DOMContentLoaded", function () {
    const sarprasData = [
        { no: 1, nama: "Laboratorium", jenis: "Ruang", kondisi: "Baik" },
        { no: 2, nama: "Perpustakaan", jenis: "Ruang", kondisi: "Baik" },
        { no: 3, nama: "Lapangan", jenis: "Fasilitas", kondisi: "Baik" }
    ];

    const sarprasTableBody = document.getElementById("sarprasTableBody");
    sarprasData.forEach(data => {
        sarprasTableBody.innerHTML += `
            <tr>
                <td>${data.no}</td>
                <td>${data.nama}</td>
                <td>${data.jenis}</td>
                <td>${data.kondisi}</td>
            </tr>
        `;
    });

    document.getElementById("passwordForm").addEventListener("submit", function (event) {
        event.preventDefault();
        const passwordInput = document.getElementById("password").value;
        if (passwordInput === "sarpras123") {
            document.getElementById("sarprasContent").style.display = "block";
        } else {
            alert("Password salah!");
        }
    });
});


document.getElementById('adminLoginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    const adminUsername = document.getElementById('adminUsername').value;
    const adminPassword = document.getElementById('adminPassword').value;
    const adminLoginMessage = document.getElementById('adminLoginMessage');

    // Predefined admin credentials
    const admin = { username: 'sarpras', password: '20102470', link: 'https://drive.google.com/drive/folders/1wGfEF3l0mUVqIdKluZh7BbWaIHjOeuc4?usp=sharing' };

    if (adminUsername === admin.username && adminPassword === admin.password) {
        adminLoginMessage.textContent = 'Login successful!';
        adminLoginMessage.style.color = 'green';
        // Redirect to the admin Google Drive folder link
        window.location.href = admin.link;
    } else {
        adminLoginMessage.textContent = 'Invalid username or password.';
        adminLoginMessage.style.color = 'red';
    }
});
