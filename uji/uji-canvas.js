/* Uji kelayakan Canvas Gemini untuk mesin Instrumen Ujian Praktik MASW.
   Menguji: (1) skrip eksternal termuat, (2) ambil gambar kop lintas domain (CORS) -> Base64,
   (3) unduh file (Blob), (4) unggah file, (5) dialog cetak. Tidak memuat data pribadi. */
(function () {
  "use strict";
  var VERSI = "uji-1";
  var sumber = (document.currentScript && document.currentScript.src) || "";
  var dasar = sumber.replace(/\/uji\/uji-canvas\.js.*$/, "/");
  var host = /jsdelivr/.test(sumber) ? "jsDelivr" : (/github\.io/.test(sumber) ? "GitHub Pages" : "lain");
  if (window.__UJI_MASW__) return; window.__UJI_MASW__ = true;

  var css = document.createElement("style");
  css.textContent = "#uji-masw{font-family:Arial,sans-serif;max-width:640px;margin:16px auto;padding:16px;border:2px solid #0b6b3a;border-radius:10px;background:#fff}" +
    "#uji-masw h2{margin:0 0 8px;color:#0b6b3a;font-size:18px}#uji-masw li{margin:6px 0;font-size:14px}" +
    "#uji-masw button,#uji-masw label.b{background:#0b6b3a;color:#fff;border:0;border-radius:6px;padding:8px 12px;margin:4px 4px 0 0;cursor:pointer;font-size:13px;display:inline-block}" +
    "#uji-masw input[type=file]{display:none}#uji-masw img{max-width:100%;margin-top:8px;border:1px solid #ccc}" +
    "#uji-masw .ok{color:#0b6b3a;font-weight:bold}#uji-masw .no{color:#b00020;font-weight:bold}#uji-masw .wait{color:#8a6d00}";
  document.head.appendChild(css);

  var box = document.createElement("div"); box.id = "uji-masw";
  box.innerHTML = "<h2>Uji Canvas \u00b7 Mesin Instrumen MASW</h2>" +
    "<ul>" +
    "<li id='u1'><span class='ok'>\u2714</span> 1. Skrip eksternal termuat dari <b>" + host + "</b> (versi " + VERSI + ")</li>" +
    "<li id='u2'><span class='wait'>\u2026</span> 2. Mengambil gambar kop dari repo\u2026</li>" +
    "<li id='u3'><span class='wait'>\u25cb</span> 3. Unduh file \u2014 klik tombol <b>Uji Unduh</b></li>" +
    "<li id='u4'><span class='wait'>\u25cb</span> 4. Unggah file \u2014 klik <b>Uji Unggah</b>, pilih gambar apa saja</li>" +
    "<li id='u5'><span class='wait'>\u25cb</span> 5. Cetak/PDF \u2014 klik <b>Uji Cetak</b>, lihat apakah dialog cetak muncul</li>" +
    "</ul>" +
    "<button id='bUnduh'>Uji Unduh</button><label class='b'>Uji Unggah<input type='file' id='fUnggah' accept='image/*'></label><button id='bCetak'>Uji Cetak</button>" +
    "<div id='kopPrev'></div><p style='font-size:12px;color:#555'>Kirimkan tangkapan layar kotak ini ke Claude.</p>";
  (document.body || document.documentElement).appendChild(box);
  var tandai = function (id, ok, teks) { document.getElementById(id).innerHTML = "<span class='" + (ok ? "ok'>\u2714" : "no'>\u2718") + "</span> " + teks; };

  fetch(dasar + "assets/kop-masw.png", { mode: "cors" })
    .then(function (r) { if (!r.ok) throw new Error("HTTP " + r.status); return r.blob(); })
    .then(function (b) { return new Promise(function (res) { var fr = new FileReader(); fr.onload = function () { res(fr.result); }; fr.readAsDataURL(b); }); })
    .then(function (data) { tandai("u2", true, "2. Kop terambil lintas domain dan diubah ke Base64 (" + Math.round(data.length / 1024) + " KB) \u2014 siap untuk ekspor Word");
      document.getElementById("kopPrev").innerHTML = "<img alt='kop' src='" + data + "'>"; })
    .catch(function (e) { tandai("u2", false, "2. Gagal mengambil kop: " + e.message); });

  document.getElementById("bUnduh").onclick = function () {
    try { var blob = new Blob(["Uji unduh Mesin Instrumen MASW berhasil.\r\n"], { type: "text/plain" });
      var a = document.createElement("a"); a.href = URL.createObjectURL(blob); a.download = "uji-unduh-masw.txt"; document.body.appendChild(a); a.click(); a.remove();
      tandai("u3", true, "3. Perintah unduh dijalankan \u2014 cek apakah file <b>uji-unduh-masw.txt</b> benar-benar terunduh");
    } catch (e) { tandai("u3", false, "3. Unduh gagal: " + e.message); }
  };
  document.getElementById("fUnggah").onchange = function (ev) {
    var f = ev.target.files[0]; if (!f) return; var fr = new FileReader();
    fr.onload = function () { tandai("u4", true, "4. Unggah berhasil: " + f.name + " (" + Math.round(f.size / 1024) + " KB)"); };
    fr.onerror = function () { tandai("u4", false, "4. Unggah gagal membaca file"); }; fr.readAsDataURL(f);
  };
  document.getElementById("bCetak").onclick = function () {
    tandai("u5", true, "5. Perintah cetak dijalankan \u2014 catat apakah dialog cetak muncul atau tidak");
    setTimeout(function () { try { window.print(); } catch (e) { tandai("u5", false, "5. Cetak diblokir: " + e.message); } }, 100);
  };
})();
