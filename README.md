# <!DOCTYPE html>
<html>
<head>
    <title>Kami Akan Segera Kembali</title>
    <style>
        body {
            background-color: #f0f0f0;
            font-family: sans-serif;
            text-align: center;
        }

        h1 {
            color: #333;
        }

        #countdown {
            font-size: 2em;
            color: #007bff;
        }
    </style>
</head>
<body>
    <h1>Kami Akan Segera Kembali</h1>
    <p>Kami sedang melakukan pemeliharaan. Situs web ini akan segera online kembali.</p>
    <div id="countdown"></div>

    <script>
        const targetDate = new Date("2024-03-15T00:00:00"); // Ganti dengan tanggal Anda

        function updateCountdown() {
            const now = new Date().getTime();
            const distance = targetDate.getTime() - now;

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            document.getElementById("countdown").innerHTML = `${days} hari, ${hours} jam, ${minutes} menit, ${seconds} detik`;

            if (distance < 0) {
                clearInterval(countdownInterval);
                document.getElementById("countdown").innerHTML = "Situs web sudah online!";
                // Atau, alihkan pengguna ke halaman lain:
                // window.location.href = "https://www.example.com";
            }
        }

        updateCountdown();
        const countdownInterval = setInterval(updateCountdown, 1000);
    </script>
</body>
</html>
