# EPBOX ENGINEERING - Digital Business Card

Sebuah vCard digital yang interaktif dan dinamis untuk EPBOX ENGINEERING, dirancang dengan animasi modern dan fitur interaktif.

## 🎯 Fitur Utama

### ✨ Animasi & Efek Visual
- **Animasi Masuk**: Kartu muncul dengan efek fade-in dan scale
- **Hover Effects**: Efek lift dan shadow saat hover
- **Parallax Background**: Pola background bergerak mengikuti mouse
- **Ripple Effect**: Efek gelombang saat klik pada elemen kontak
- **Floating Animations**: Logo dan badge bergerak halus

### 📱 Interaktivitas
- **Click to WhatsApp**: Klik nomor telepon untuk langsung WhatsApp
- **Click to Email**: Klik email untuk membuka aplikasi email
- **Click to Map**: Klik alamat untuk membuka Google Maps
- **Click to Website**: Klik website untuk membuka LinkedIn
- **Copy to Clipboard**: Klik kanan untuk menyalin informasi kontak
- **Modal Popups**: Klik logo atau badge ISO untuk informasi detail

### 🎨 Desain Responsif
- **Desktop**: Layout horizontal dengan semua elemen
- **Mobile**: Layout vertikal yang dioptimalkan untuk layar kecil
- **Tablet**: Adaptasi otomatis untuk berbagai ukuran layar

### ♿ Aksesibilitas
- **Keyboard Navigation**: Navigasi dengan arrow keys
- **Screen Reader Support**: Label dan alt text yang tepat
- **Focus Indicators**: Indikator fokus yang jelas
- **High Contrast**: Warna yang kontras tinggi

## 🚀 Cara Menggunakan

### 1. Buka File
```bash
# Buka file HTML di browser
epbox-vcard.html
```

### 2. Interaksi Dasar
- **Hover** pada elemen untuk melihat efek visual
- **Klik** pada informasi kontak untuk aksi langsung
- **Klik kanan** pada kontak untuk menyalin ke clipboard
- **Klik** pada logo untuk informasi perusahaan
- **Klik** pada badge ISO untuk detail sertifikasi

### 3. Navigasi Keyboard
- **Tab**: Navigasi antar elemen
- **Arrow Keys**: Navigasi antar item kontak
- **Enter/Space**: Aktifkan elemen yang dipilih
- **Escape**: Tutup modal popup

## 📁 Struktur File

```
epbox-vcard/
├── epbox-vcard.html          # File HTML utama
├── epbox-vcard.css           # Styling dan animasi
├── epbox-vcard.js            # Interaktivitas dan fungsi
├── epbox-vcard-plus.html     # Versi Plus dengan fitur tambahan
├── epbox-vcard-plus.css      # Styling untuk versi Plus
└── README.md                 # Dokumentasi ini
```

## 🎨 Kustomisasi

### Mengubah Informasi Kontak
Edit bagian berikut di `epbox-vcard.html`:

```html
<!-- Telepon -->
<a href="https://wa.me/6285175052607?text=Hello%20EPBOX%20ENGINEERING%2C%20I%27d%20like%20to%20get%20in%20touch." class="contact-link">+62 811 1112 9835</a>

<!-- Email -->
<a href="mailto:erping@epbox-engg.com?subject=Inquiry%20-%20EPBOX%20ENGINEERING&body=Hello%20EPBOX%20ENGINEERING%2C%20I%27d%20like%20to%20get%20in%20touch%20about..." class="contact-link">erping@epbox-engg.com</a>

<!-- Alamat -->
<a href="https://maps.app.goo.gl/XvGmQaDwxwCqbVcZ9" class="contact-link">1 Sunview Roadf Ecotect@sunview Singapore 627615</a>

<!-- Website -->
<a href="https://www.linkedin.com/company/epbox-engineering/posts/?feedView=all" class="contact-link">https://epbox-engg.com</a>
```

### Mengubah Warna
Edit variabel CSS di `epbox-vcard.css`:

```css
/* Warna utama */
--primary-color: #1a365d;
--secondary-color: #2d5aa0;
--accent-color: #f8f9fa;
```

### Mengubah Animasi
Sesuaikan durasi dan timing di CSS:

```css
/* Durasi animasi */
transition: all 0.3s ease;
animation-duration: 2s;
```

## 🌐 Browser Support

- ✅ Chrome 60+
- ✅ Firefox 55+
- ✅ Safari 12+
- ✅ Edge 79+
- ✅ Mobile browsers

## 📱 Fitur Mobile

- **Touch Gestures**: Responsif terhadap sentuhan
- **Viewport Optimization**: Dioptimalkan untuk layar kecil
- **Touch Feedback**: Efek visual saat disentuh
- **Mobile Navigation**: Navigasi yang mudah di mobile

## 🔧 Teknologi yang Digunakan

- **HTML5**: Struktur semantik
- **CSS3**: Animasi dan styling modern
- **JavaScript ES6+**: Interaktivitas dan fungsi
- **Font Awesome**: Ikon yang konsisten
- **CSS Grid & Flexbox**: Layout yang responsif

## 🎯 Fitur Khusus

### Modal Popup
- **Company Info**: Informasi detail perusahaan
- **ISO Details**: Penjelasan sertifikasi ISO 9001
- **Responsive Design**: Modal yang menyesuaikan ukuran layar

### Copy to Clipboard
- **Modern API**: Menggunakan Clipboard API
- **Fallback**: Dukungan untuk browser lama
- **Visual Feedback**: Notifikasi saat berhasil menyalin

### Parallax Effect
- **Mouse Tracking**: Background mengikuti gerakan mouse
- **Smooth Movement**: Pergerakan yang halus dan natural
- **Performance Optimized**: Efek yang tidak membebani browser

### Versi Plus
- **Dark Mode**: Toggle tema gelap/terang
- **Enhanced Animations**: Animasi yang lebih halus
- **Interactive Hints**: Petunjuk interaksi yang otomatis hilang

## 🚀 Deployment

### Local Development
```bash
# Buka file HTML langsung di browser
open epbox-vcard.html
```

### Web Server
```bash
# Menggunakan Python
python -m http.server 8000

# Menggunakan Node.js
npx serve .

# Menggunakan PHP
php -S localhost:8000
```

### Production
- Upload semua file ke web server
- Pastikan semua path relatif benar
- Test di berbagai browser dan device

## 📞 Support

Untuk pertanyaan atau masalah:
- Email: erping@epbox-engg.com
- Phone: +62 811 1112 9835
- Address: 1 Sunview Roadf Ecotect@sunview Singapore 627615

## 📄 License

© 2024 EPBOX ENGINEERING. All rights reserved.

---

**EPBOX ENGINEERING** - Beyond Boundaries, We Command Control
