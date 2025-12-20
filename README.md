# 🚀 ZFP Vendor - Deployment Guide

Kompletní návod jak dostat web na **zfpvendor.cz**

## 📁 Soubory (14 celkem)

```
✓ login.html              - Vstupní stránka s heslem  
✓ home.html               - Homepage
✓ proc-mit-web.html       - YMYL, E-E-A-T, SEO stránka
✓ sluzby.html             - Katalog (cena 7950 Kč)
✓ automatizace.html       - 4 moduly
✓ jak-to-funguje.html     - Proces
✓ kontakt.html            - Kontakt (o.belsky@zfpakademie.cz)
✓ styles.css
✓ app.js
✓ auth.js                 - Password protection
✓ logo.jpg
✓ vercel.json
✓ EMAILJS-SETUP.md
✓ README.md
```

## 🔐 Password

- Vstup: **login.html**
- Heslo: **`vendorpartner`**
- Po přihlášení: sessionStorage → přístup

## 📋 Git → GitHub → Vercel

### 1. Lokální setup
```bash
cd ~/Dokumenty/moje-weby/vendor
git init
git add .
git commit -m "Initial commit: ZFP Vendor"
```

### 2. GitHub
```bash
git remote add origin https://github.com/TVUJ-USERNAME/zfp-vendor.git
git branch -M main
git push -u origin main
```

### 3. Vercel
1. vercel.com → Login
2. New Project → Import zfp-vendor
3. Framework: Other
4. Deploy 🚀

### 4. Doména zfpvendor.cz
**Vercel:** Settings → Domains → Add `zfpvendor.cz`

**DNS záznamy:**
```
A @ 76.76.21.21
CNAME www cname.vercel-dns.com
```

Propagace: 1-24h

## 📧 EmailJS

Formulář potřebuje EmailJS setup!

**Viz:** EMAILJS-SETUP.md

## ✅ Checklist

- [ ] 14 souborů ve složce
- [ ] Git push na GitHub
- [ ] Vercel deploy
- [ ] EmailJS setup
- [ ] DNS záznamy
- [ ] Test hesla: `vendorpartner`
- [ ] **LIVE!** 🎉

## 📞 Kontakty

- E-mail: o.belsky@zfpakademie.cz
- Tel: +420 739 677 452
- Lokalita: Břeclav

---

**ZFP GROUP © 2024**
