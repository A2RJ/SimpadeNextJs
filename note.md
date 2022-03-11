# Notes

- Tidak bisa panggil getServerSideProps() di child component

# GIT

- git status
- git checkout -b <branch>
- git add .
- git commit -m "message"
- git push origin <branch>
- git checkout main
- git merge --no-ff <branch> / git merge <branch>
- git push origin main

# Goals SMARTER

- spesific (Fokus)
- measurable (Terukur dengan angka lebih baik - cara mengukur tujuan kamu - tracking ulang(waktu yg diluangkan))
- Attainable (Kata kerja - Saya akan refactor code)
- Relevant (Buat goals yg logis realistis sesuai kemampuan)
- Timely (Batasan waktu yg dihabiskan dan diperlukan)
- Evaluate (Evaluasi - Apakah usaha yg di lakukan sudah sesuai dengan goals? apa yg harus diperbaiki lagi?)
- Reward (Motivasi )

# Life time

- Time management (Berapa jam yg dihabiskan untuk mencapai goals / goals yg diinginkan dihari tersebut)
- Active learning / tetap belajar dengan metode yg sesuai dengan kemampuan kamu
- Temukan learning style (Visual, Auditory, Kinestetik)

# Progress

- Form
  -- Kantor Pajak
  -- Wajib Pajak
  -- Petugas Lapangan
- Auth
  -- Login
  -- Logout
- Middleware
  -- Verifikasi Token (Jika token tidak valid, maka redirect ke login)
  -- Verifikasi Role (Jika role tidak sesuai, maka redirect ke login atau dashboard)

# Perlu testing

- Bagaimana jika token expired lalu diubah (ex: merubah expired) dan lakukan request atau set manual ke cookie?
- antisipasi simpan data user login
- middelware api mengecek token dan setiap user request maka akan disimpan (ex: userId, route, role, dateTime)
