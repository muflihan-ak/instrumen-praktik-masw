# instrumen-masw

Mesin dokumen **Instrumen Ujian Praktik Asesmen Madrasah** untuk Madrasah Aliyah Syubbanul Wathon, Tegalrejo. File ini dipakai oleh skill Gemini `instrumen-ujian-praktik-umum-masw` dan `instrumen-ujian-praktik-pai-arab-masw`.

Gemini cukup menulis **isi dokumen** (konfigurasi guru, CP, TP, kisi-kisi, LKPD, kartu soal, rubrik). Tampilan A4, toolbar, ekspor Word (.docx), cetak PDF, kop, dan pemeriksaan otomatis disediakan oleh mesin di repo ini. Hasilnya, dokumen dibuat lebih cepat dan fiturnya tidak bisa hilang.

## Isi repo

| Path | Fungsi |
|---|---|
| `assets/kop-masw.png` | Kop resmi madrasah (versi ringan, 1000 px) |
| `uji/uji-canvas.js` | Skrip uji kelayakan Canvas Gemini |
| `uji/halaman-uji.html` | Halaman yang ditempel ke Canvas untuk pengujian |
| `mesin/` | *(tahap berikutnya)* mesin instrumen versi 2.2 |

## Ketentuan penting

- Repo ini **Public**, karena jsDelivr hanya bisa membaca repo publik.
- **DILARANG menaruh data pribadi** (nama, NIS, NISN siswa, atau data guru) di repo ini. Data siswa tetap disimpan di dalam skill Gemini dan disisipkan ke dokumen saat dibuat.
- Setiap rilis mesin diberi tag versi (misalnya `v2.2.0`), dan skill memanggil versi yang dikunci, misalnya `https://cdn.jsdelivr.net/gh/<akun>/instrumen-masw@v2.2.0/mesin/mesin-instrumen.js`. Dengan begitu, perubahan di repo tidak tiba-tiba mengubah dokumen guru.
- Hanya pengelola (Kepala Madrasah/tim TI) yang boleh punya akses tulis ke repo.
