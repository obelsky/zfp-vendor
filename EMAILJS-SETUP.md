# 📧 EmailJS Setup - Návod krok za krokem

EmailJS umožňuje odesílat e-maily z kontaktního formuláře přímo do vaší schránky **bez backendu**.

## 🚀 Krok 1: Registrace na EmailJS

1. Jdi na **https://www.emailjs.com/**
2. Klikni **Sign Up** (nebo **Start for Free**)
3. Zaregistruj se (je to zdarma pro 200 e-mailů/měsíc)
4. Ověř e-mail

---

## ⚙️ Krok 2: Připoj e-mailovou službu

1. Po přihlášení jdi na **Email Services**
2. Klikni **Add New Service**
3. Vyber **Gmail** (nebo jiný provider)
4. **Pro Gmail:**
   - Klikni **Connect Account**
   - Přihlas se do **o.belsky@zfpakademie.cz**
   - Povol přístup EmailJS
5. **Service ID** si poznamenej (např. `service_abc123`)

---

## 📝 Krok 3: Vytvoř e-mailovou šablonu

1. Jdi na **Email Templates**
2. Klikni **Create New Template**
3. Nastav šablonu:

```
Subject: 
Nová zpráva z webu ZFP Vendor od {{from_name}}

Body:
Ahoj,

máš novou zprávu z kontaktního formuláře na zfpvendor.cz:

OD: {{from_name}}
E-MAIL: {{reply_to}}
ROLE: {{user_role}}

ZPRÁVA:
{{message}}

---
Odesláno ze ZFP Vendor webu
```

4. Klikni **Save**
5. **Template ID** si poznamenej (např. `template_xyz789`)

---

## 🔑 Krok 4: Získej Public Key

1. Jdi na **Account** → **General**
2. Najdi **Public Key** (např. `aBcDeFgHiJkLmNoPqRsTu`)
3. Zkopíruj ho

---

## 💻 Krok 5: Aktualizuj kontakt.html

Otevři `kontakt.html` a **nahraď tyto hodnoty:**

```javascript
// Na řádku cca 93:
emailjs.init("YOUR_PUBLIC_KEY"); 
// Změň na:
emailjs.init("aBcDeFgHiJkLmNoPqRsTu"); // Tvůj Public Key

// Na řádku cca 106:
emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', this)
// Změň na:
emailjs.sendForm('service_abc123', 'template_xyz789', this)
```

### **Kompletní úprava:**

```javascript
// EmailJS inicializace
(function() {
    emailjs.init("aBcDeFgHiJkLmNoPqRsTu"); // NAHRAĎ SVÝM PUBLIC KEY
})();

document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const submitBtn = this.querySelector('button[type="submit"]');
    const formStatus = document.getElementById('formStatus');
    
    submitBtn.disabled = true;
    submitBtn.textContent = 'Odesílání...';
    formStatus.style.display = 'none';
    
    // NAHRAĎ service_abc123 a template_xyz789 SVÝMI HODNOTAMI
    emailjs.sendForm('service_abc123', 'template_xyz789', this)
        .then(function() {
            formStatus.style.display = 'block';
            formStatus.style.color = '#28a745';
            formStatus.textContent = '✓ Zpráva byla úspěšně odeslána!';
            document.getElementById('contactForm').reset();
            submitBtn.disabled = false;
            submitBtn.textContent = 'Odeslat zprávu';
        }, function(error) {
            formStatus.style.display = 'block';
            formStatus.style.color = '#dc3545';
            formStatus.textContent = '✗ Chyba při odesílání. Zkuste to znovu.';
            submitBtn.disabled = false;
            submitBtn.textContent = 'Odeslat zprávu';
        });
});
```

---

## ✅ Krok 6: Otestuj formulář

1. **Uložíš** změny v `kontakt.html`
2. **Commitneš** a pushneš na GitHub
3. **Vercel automaticky deployuje** novou verzi
4. **Otevřeš** web na zfpvendor.cz
5. **Vyplníš** kontaktní formulář
6. **Klikneš** Odeslat
7. **Zkontroluj** doručenou poštu na **o.belsky@zfpakademie.cz**

---

## 🎯 Checklist

- [ ] Zaregistrován na EmailJS
- [ ] Připojena Gmail služba (o.belsky@zfpakademie.cz)
- [ ] Vytvořena e-mailová šablona
- [ ] Zkopírován Public Key
- [ ] Zkopírován Service ID
- [ ] Zkopírován Template ID
- [ ] Upraveno kontakt.html (3 hodnoty)
- [ ] Commitnuto a pushnuto na GitHub
- [ ] Otestováno na live webu
- [ ] E-mail doručen ✉️

---

## 🐛 Řešení problémů

**E-mail se neodešle:**
- Otevři Developer Console (F12) → Console
- Hledej chybové hlášky
- Zkontroluj, že jsi správně nahradil všechny 3 hodnoty

**Gmail blokuje odeslání:**
- Jdi do Gmail nastavení → Security
- Povol "Less secure app access" (nebo použij App Password)

**Formulář se odešle, ale e-mail nepřijde:**
- Zkontroluj SPAM složku
- Ověř, že EmailJS Service je správně připojený na o.belsky@zfpakademie.cz

---

**Hotovo!** 🎉 Formulář bude odesílat e-maily přímo na o.belsky@zfpakademie.cz
