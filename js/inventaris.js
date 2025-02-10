document.getElementById('adminLoginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Mencegah form submit

    const adminUsername = document.getElementById('adminUsername').value.trim();
    const adminPassword = document.getElementById('adminPassword').value.trim();
    const adminLoginMessage = document.getElementById('adminLoginMessage');

    // Data login admin
    const admin = { 
        username: 'inventaris', 
        password: '20102470', 
        link: 'https://drive.google.com/drive/folders/1f4IM0UTgnRln1_7DebkYrMUYOaQlMnd8?usp=sharing' 
    };

    if (adminUsername === admin.username && adminPassword === admin.password) {
        adminLoginMessage.innerHTML = `<div class="alert alert-success">Login berhasil! Mengalihkan...</div>`;
        setTimeout(() => { window.location.href = admin.link; }, 2000);
    } else {
        adminLoginMessage.innerHTML = `<div class="alert alert-danger">Username atau password salah.</div>`;
        setTimeout(() => { adminLoginMessage.innerHTML = ""; }, 3000);
    }
});
