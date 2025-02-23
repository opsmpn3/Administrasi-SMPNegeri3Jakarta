// main.js

//## 1. Fade-in Effect on Scroll Using Intersection Observer

/**
 * Description: This section of the code implements a fade-in effect for elements with the class `fade-in` when they enter the viewport. 
 * The `IntersectionObserver` API is used to detect when these elements intersect with the viewport, and a CSS class `visible` is added to trigger the fade-in animation.
 */
document.addEventListener("DOMContentLoaded", function () {
    // 📌 Efek Fade-in Saat Scroll dengan Intersection Observer
    const fadeElements = document.querySelectorAll(".fade-in");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target); // Hentikan observasi setelah elemen terlihat
            }
        });
    }, { threshold: 0.2 });

    fadeElements.forEach(el => observer.observe(el));
});

//## 2. Blocking Unauthorized Requests

/**
 * Description: This function intercepts `fetch` and `XMLHttpRequest` calls to block requests to specified URLs. 
 * If a request URL contains any of the blocked URLs, the request is aborted and a warning is logged to the console.
 */
(function() {
    const blockedURLs = ["play.google.com/log"];

    const originalFetch = window.fetch;
    window.fetch = function(url, options) {
        if (blockedURLs.some(blocked => url.includes(blocked))) {
            console.warn("Blocked unauthorized request to:", url);
            return Promise.reject(new Response(null, { status: 401 }));
        }
        return originalFetch(url, options);
    };

    const originalOpen = XMLHttpRequest.prototype.open;
    XMLHttpRequest.prototype.open = function(method, url) {
        if (blockedURLs.some(blocked => url.includes(blocked))) {
            console.warn("Blocked unauthorized request to:", url);
            this.abort(); // Gunakan abort() untuk membatalkan request
            return;
        }
        return originalOpen.apply(this, arguments);
    };
})();

//## 3. Lightbox Gallery Implementation

/**
 * Description: This section sets up a lightbox gallery for images with the class `gallery-item`. 
 * When an image is clicked, it is displayed in a modal along with navigation buttons to view previous and next images.
 */
document.addEventListener("DOMContentLoaded", function () {
    const galleryItems = document.querySelectorAll(".gallery-item");
    const lightboxImage = document.getElementById("lightboxImage");
    const lightboxCaption = document.getElementById("lightboxCaption");
    const modal = new bootstrap.Modal(document.getElementById("lightboxModal"));
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");

    let currentIndex = 0; // Indeks gambar yang sedang ditampilkan

    // Simpan semua gambar dalam array
    const images = Array.from(galleryItems).map(img => ({
        src: img.src,
        alt: img.alt
    }));

    // Fungsi untuk menampilkan gambar di modal
    function showImage(index) {
        currentIndex = index;
        lightboxImage.src = images[currentIndex].src;
        lightboxCaption.textContent = images[currentIndex].alt;
        modal.show();
        updateButtons();
    }

    // Fungsi untuk update tombol navigasi
    function updateButtons() {
        prevBtn.style.display = currentIndex === 0 ? "none" : "block";
        nextBtn.style.display = currentIndex === images.length - 1 ? "none" : "block";
    }

    // Tambahkan event listener untuk setiap gambar
    galleryItems.forEach((item, index) => {
        item.addEventListener("click", () => showImage(index));
    });

    // Event listener tombol prev & next
    prevBtn.addEventListener("click", () => {
        if (currentIndex > 0) showImage(currentIndex - 1);
    });

    nextBtn.addEventListener("click", () => {
        if (currentIndex < images.length - 1) showImage(currentIndex + 1);
    });

    // Tutup modal jika klik di luar gambar
    document.getElementById("lightboxModal").addEventListener("click", (e) => {
        if (e.target === e.currentTarget) modal.hide();
    });
});



//## 5. Real-time Date and Time Update

/**
 * Description: This function updates the date and time displayed on the webpage every second. 
 * It retrieves the current date and time, formats it, and updates the content of elements with IDs `hari-tanggal` and `jam`.
 */
function updateTime() {
    const now = new Date();
    const hari = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];
    const bulan = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];

    let jam = now.getHours().toString().padStart(2, '0');
    let menit = now.getMinutes().toString().padStart(2, '0');
    let detik = now.getSeconds().toString().padStart(2, '0');

    let tanggal = now.getDate();
    let namaHari = hari[now.getDay()];
    let namaBulan = bulan[now.getMonth()];
    let tahun = now.getFullYear();

    document.getElementById("jam").innerHTML = `${jam}:${menit}:${detik}`;
    document.getElementById("hari-tanggal").innerHTML = `${namaHari}, ${tanggal} ${namaBulan} ${tahun}`;
}

// Perbarui jam setiap detik
setInterval(updateTime, 1000);
updateTime(); // Panggil langsung agar tidak delay 1 detik saat load pertama

//## 6. Chart.js Bar Chart Implementation
document.addEventListener('DOMContentLoaded', function () {
    var ctx = document.getElementById('statistikChart').getContext('2d');
    var statistikChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['2022', '2023', '2024', '2025'],
            datasets: [{
                label: 'Pendidik',
                data: [35, 36, 36, 34],
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1
            }, {
                label: 'Tendik',
                data: [11, 11, 11, 12],
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1
            }, {
                label: 'Siswa',
                data: [851, 850, 850, 850],
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
});
