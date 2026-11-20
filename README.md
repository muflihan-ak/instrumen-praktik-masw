# instrumen-praktik-masw

Mesin dokumen **Instrumen Ujian Praktik Asesmen Madrasah** untuk Madrasah Aliyah Syubbanul Wathon, Tegalrejo. Mesin ini dipakai oleh skill Gemini `instrumen-ujian-praktik-umum-masw` dan `instrumen-ujian-praktik-pai-arab-masw`.

Gemini cukup menulis **data isi** (`window.INSTRUMEN` berisi konfig, isi, dan siswa, sekitar 10 KB). Mesin di repo ini merender 9 komponen A4, toolbar 4 menu (Unggah Cover, Unggah Kop, Unduh Word .docx, Unduh PDF tanpa dialog cetak), kop otomatis, serta pemeriksaan otomatis (data siswa diverifikasi dengan hash, level C3–C6, integrasi KBC SK Dirjen Pendis 6077/2025, dan halaman yang melebihi A4).

## Isi repo

| Path | Fungsi |
|---|---|
| `mesin/mesin-instrumen.js` | Mesin v2.2.0 |
| `assets/kop-masw.png` | Kop resmi madrasah (1000 px) yang dimuat mesin |
| `uji/` | Alat uji kelayakan Canvas |

## Alamat mesin yang dipakai skill

- Utama (versi dikunci): `https://cdn.jsdelivr.net/gh/muflihan-ak/instrumen-praktik-masw@v2.2.0/mesin/mesin-instrumen.js`
- Cadangan (GitHub Pages): `https://muflihan-ak.github.io/instrumen-praktik-masw/mesin/mesin-instrumen.js`

## Ketentuan

- Repo **Public**. **DILARANG** menaruh data pribadi (nama, NIS, NISN siswa, atau data guru) di repo ini. Mesin hanya menyimpan jumlah siswa dan hash per rombel untuk verifikasi.
- Setiap perubahan mesin dirilis dengan **tag versi baru** (misalnya `v2.2.1`), lalu alamat di skill diperbarui. Tag yang sudah dirilis jangan diubah, agar dokumen lama tetap stabil.
- Hanya pengelola (Kepala Madrasah/tim TI) yang boleh punya akses tulis.
