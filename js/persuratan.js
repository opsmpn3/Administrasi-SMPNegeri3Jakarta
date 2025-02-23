
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const loginMessage = document.getElementById('loginMessage');

    // Predefined user credentials
    const users = [
        { username: '134026', password: '123456', link: 'https://drive.google.com/drive/folders/141_l3p_4Cltx0OkxqwJiVJmwqwCJpw0a?usp=drive_link' },
        { username: '156434', password: '123456', link: 'https://drive.google.com/drive/folders/1AFcrB54jQdB3r2caKzGkZyPWN-w5IUK1?usp=sharing' },
        { username: '139160', password: '123456', link: 'https://drive.google.com/drive/folders/1fiANOzPlkV78QVB0' }
    ];

    // Check if the entered credentials match any user
    const user = users.find(u => u.username === username && u.password === password);

    if (user) {
        loginMessage.textContent = 'Login successful!';
        loginMessage.style.color = 'green';
        // Redirect to the Google Drive folder link
        window.location.href = user.link;
    } else {
        loginMessage.textContent = 'Invalid username or password.';
        loginMessage.style.color = 'red';
    }
});

document.getElementById('adminLoginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    const adminUsername = document.getElementById('adminUsername').value;
    const adminPassword = document.getElementById('adminPassword').value;
    const adminLoginMessage = document.getElementById('adminLoginMessage');

    // Predefined admin credentials
    const admin = { username: 'persuratan', password: '20102470', link: 'https://drive.google.com/drive/folders/187fL_WiBW3B3VHz-bk-20jrizGvqQnQW?usp=sharing' };

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