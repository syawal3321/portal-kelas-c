# Portal Kelas C Ilmu Komputer

Website portal informasi mahasiswa Kelas C Program Studi Ilmu Komputer Fakultas Teknologi Informasi Universitas Sembilan Belas November Kolaka.

Proyek ini dibuat sebagai portal digital yang menyediakan informasi akademik, dokumentasi kegiatan, pengumuman, jadwal kuliah, pengelolaan kas kelas, arsip dokumen, voting mahasiswa, dan berbagai kebutuhan administrasi kelas dalam satu platform.

---

# Features

## Academic Features

- Jadwal Perkuliahan
- Pengumuman Kelas
- Dokumen Akademik
- Timeline Kegiatan
- Agenda Mahasiswa
- Data Mahasiswa

## Organization Features

- Struktur Pengurus
- Organisasi Kelas
- Voting Mahasiswa
- Kotak Aspirasi
- Dokumentasi Kegiatan

## Financial Features

- Kas Kelas
- Arsip Kas
- Transparansi Keuangan

## User Experience

- Mobile First Design
- Responsive Layout
- Dark Mode
- Animated Counter
- Scroll Reveal Animation
- Lightbox Gallery
- Search System
- Pagination System
- Toast Notification
- Smooth Scroll

---

# Pages

- Home
- Pengurus
- Organisasi
- Kas
- Mahasiswa
- Jadwal
- Pengumuman
- Galeri
- Dokumen
- Kontak
- Timeline
- Prestasi
- Agenda
- Arsip Kas
- Voting

---

# Tech Stack

- HTML5
- CSS3
- Vanilla JavaScript
- GitHub Pages

---

# Folder Structure

```text
portal-kelas-c/
│
├── index.html
├── pengurus.html
├── organisasi.html
├── kas.html
├── mahasiswa.html
├── jadwal.html
├── pengumuman.html
├── galeri.html
├── dokumen.html
├── kontak.html
├── timeline.html
├── prestasi.html
├── agenda.html
├── arsip-kas.html
├── voting.html
│
├── assets/
│   ├── images/
│   ├── icons/
│   ├── logos/
│   └── documents/
│
├── css/
│   └── style.css
│
├── js/
│   └── script.js
│
└── README.md
```

---

# Installation

Clone repository:

```bash
git clone https://github.com/username/portal-kelas-c.git
```

Masuk ke folder proyek:

```bash
cd portal-kelas-c
```

Buka file:

```bash
index.html
```

atau menggunakan browser.

---

# Run on Termux

Update package:

```bash
pkg update && pkg upgrade -y
```

Install Git:

```bash
pkg install git -y
```

Install NodeJS:

```bash
pkg install nodejs -y
```

Clone repository:

```bash
git clone https://github.com/username/portal-kelas-c.git
```

Masuk ke folder:

```bash
cd portal-kelas-c
```

Jalankan local server:

```bash
npx serve .
```

atau

```bash
python -m http.server 8000
```

Akses:

```text
http://localhost:8000
```

---

# Deploy to GitHub Pages

Buat repository baru di GitHub.

Push project:

```bash
git init

git add .

git commit -m "Initial Commit"

git branch -M main

git remote add origin https://github.com/username/repository.git

git push -u origin main
```

Masuk ke:

```text
Settings
→ Pages
→ Source
→ Deploy from branch
→ main
→ root
→ Save
```

Tunggu beberapa menit.

Website akan tersedia di:

```text
https://username.github.io/repository/
```

---

# Screenshot

## Homepage

```text
assets/screenshots/home.png
```

## Mahasiswa

```text
assets/screenshots/mahasiswa.png
```

## Jadwal

```text
assets/screenshots/jadwal.png
```

## Pengumuman

```text
assets/screenshots/pengumuman.png
```

## Kas

```text
assets/screenshots/kas.png
```

## Voting

```text
assets/screenshots/voting.png
```

---

# Roadmap

- Authentication System
- Admin Dashboard
- Online Attendance
- Assignment Management
- File Upload System
- Database Integration
- REST API
- Progressive Web App
- Notification System

---

# Contributing

Pull Request dan Issue sangat terbuka untuk pengembangan proyek ini.

Langkah kontribusi:

1. Fork repository
2. Buat branch baru
3. Commit perubahan
4. Push branch
5. Buat Pull Request

---

# License

MIT License

Copyright (c) 2026

Portal Kelas C Ilmu Komputer
Universitas Sembilan Belas November Kolaka

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files.
