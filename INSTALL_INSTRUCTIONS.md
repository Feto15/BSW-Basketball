# 🏀 Instruksi Instalasi BSW Basketball Website

## Langkah-langkah untuk menjalankan website:

### 1️⃣ Install Dependencies

Buka terminal di folder project ini, kemudian jalankan:

```bash
npm install
```

atau jika menggunakan pnpm:

```bash
pnpm install
```

**Ini akan menginstall:**
- Astro
- Tailwind CSS
- @astrojs/tailwind

### 2️⃣ Jalankan Development Server

Setelah instalasi selesai, jalankan:

```bash
npm run dev
```

atau:

```bash
pnpm dev
```

### 3️⃣ Buka Browser

Website akan berjalan di:
```
http://localhost:4321
```

Buka URL tersebut di browser Anda.

---

## ✅ Yang Sudah Dibuat:

- ✅ Header dengan navigasi sticky
- ✅ Hero section dengan background
- ✅ Section About BSW
- ✅ Programs Overview (3 program)
- ✅ Why Choose BSW
- ✅ Latest News
- ✅ Gallery
- ✅ Testimonials
- ✅ Contact Form
- ✅ Footer

## 🎨 Warna yang Digunakan:

- **Lime Accent**: #d4ff00 (lime-400), #bfe600 (lime-500)
- **Neutral**: #f5f5f5 (neutral-50), #1a1a1a (neutral-900)

---

## 🔧 Jika Ada Masalah:

### Problem: Warna tidak muncul
**Solusi**: Pastikan sudah run `npm install` dan restart dev server

### Problem: Port 4321 sudah digunakan
**Solusi**: 
```bash
npm run dev -- --port 3000
```

### Problem: Module tidak ditemukan
**Solusi**: Hapus folder `node_modules` dan `package-lock.json`, lalu install ulang:
```bash
rm -rf node_modules package-lock.json
npm install
```

---

## 📝 Next Steps:

1. Ganti placeholder images dengan foto basketball asli
2. Tambahkan form handling untuk contact form
3. Sesuaikan konten teks sesuai kebutuhan
4. Deploy ke hosting (Vercel/Netlify/etc)
