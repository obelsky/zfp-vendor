# 🎯 INSTRUKCE: Git + Vercel Deployment

**Quick guide pro nasazení ZFP Vendor na zfpvendor.cz**

---

## ✅ Soubory které POTŘEBUJEŠ (14x)

Stáhni z Claudea tyto soubory:

```
1.  login.html
2.  home.html
3.  proc-mit-web.html
4.  sluzby.html
5.  automatizace.html
6.  jak-to-funguje.html
7.  kontakt.html
8.  styles.css
9.  app.js
10. auth.js
11. logo.jpg
12. vercel.json
13. EMAILJS-SETUP.md
14. README.md
```

❌ **NEPOTŘEBUJEŠ:** index.html, sluzby-backup.html, automatizace-new.html, README-ASSETS.md, zfp-vendor-*.html

---

## 📂 Krok 1: Zkopíruj soubory

```bash
# V terminálu:
cd ~/Dokumenty/moje-weby/vendor

# Zkontroluj že máš 14 souborů:
ls -1

# Mělo by to ukázat:
# EMAILJS-SETUP.md
# README.md
# app.js
# auth.js
# automatizace.html
# home.html
# jak-to-funguje.html
# kontakt.html
# login.html
# logo.jpg
# proc-mit-web.html
# sluzby.html
# styles.css
# vercel.json
```

---

## 🔧 Krok 2: Git + GitHub

```bash
# Inicializuj Git
git init

# Přidej soubory
git add .

# První commit
git commit -m "Initial commit: ZFP Vendor with password protection"

# Připoj GitHub remote
git remote add origin https://github.com/TVUJ-GITHUB-USERNAME/zfp-vendor.git

# Push
git branch -M main
git push -u origin main
```

**POZNÁMKA:** Před tímto musíš vytvořit prázdný repo na github.com:
- Jdi na github.com → New repository
- Název: `zfp-vendor`
- Public nebo Private
- ❌ NEZAŠKRTÁVEJ "Add README"
- Create repository

---

## 🚀 Krok 3: Vercel Deploy

1. **Jdi na vercel.com** → Login (přes GitHub)
2. **New Project**
3. **Import Git Repository** → vyber `zfp-vendor`
4. **Settings:**
   - Framework Preset: **Other**
   - Build Command: **(nech prázdné)**
   - Output Directory: **(nech prázdné)**
5. **Deploy**

Za 30 sekund budeš mít web na: `https://zfp-vendor-xxx.vercel.app`

---

## 🌐 Krok 4: Custom doména

**Ve Vercelu:**
1. Tvůj projekt → **Settings** → **Domains**
2. **Add Domain** → zadej `zfpvendor.cz`
3. Vercel ti ukáže DNS záznamy

**U registrátora (Wedos/Forpsi):**

Přidej tyto záznamy:

```
Typ: A
Název: @
Hodnota: 76.76.21.21

Typ: CNAME
Název: www
Hodnota: cname.vercel-dns.com
```

**Počkej 1-24 hodin** → `https://zfpvendor.cz` bude živě! ✅

---

## 📧 Krok 5: EmailJS (DŮLEŽITÉ!)

Formulář zatím NEFUNGUJE! Musíš nastavit EmailJS.

**Postupuj podle:** `EMAILJS-SETUP.md`

**Zkratka:**
1. Zaregistruj se na emailjs.com
2. Připoj Gmail: o.belsky@zfpakademie.cz
3. Vytvoř template
4. Zkopíruj: Public Key, Service ID, Template ID
5. Uprav `kontakt.html` (řádky 93 a 106)
6. Commitni + pushni

---

## 🔄 Aktualizace webu

```bash
# 1. Uprav soubory lokálně

# 2. Commit
git add .
git commit -m "Update: popis změny"

# 3. Push
git push

# 4. Vercel AUTOMATICKY deployuje! 🎉
```

---

## ✅ Final Checklist

- [ ] 14 souborů ve složce `/vendor`
- [ ] `git init` + commit + push
- [ ] GitHub repo vytvořen
- [ ] Vercel deploy OK
- [ ] Test URL funguje (zfp-vendor-xxx.vercel.app)
- [ ] EmailJS nastaveno
- [ ] Formulář otestován
- [ ] Custom doména přidána
- [ ] DNS záznamy nastaveny
- [ ] Web živě na zfpvendor.cz
- [ ] Password `vendorpartner` funguje
- [ ] **HOTOVO!** 🚀

---

## 🐛 Problémy?

**Logo se nezobrazuje:**
- Zkontroluj že `logo.jpg` je v rootu

**Heslo nefunguje:**
- Zkontroluj že píšeš: `vendorpartner` (malá písmena)

**Formulář neodesílá:**
- Nastav EmailJS (EMAILJS-SETUP.md)

**Doména nefunguje:**
- Počkej 24h na DNS propagaci

---

**Kontakt:** o.belsky@zfpakademie.cz | +420 739 677 452

**ZFP GROUP © 2024**
