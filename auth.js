// Kontrola autentizace - spustí se na každé chráněné stránce
(function() {
    const isAuthenticated = sessionStorage.getItem('zfp_vendor_auth') === 'authenticated';
    
    if (!isAuthenticated) {
        window.location.href = 'login.html';
    }
})();

// Funkce pro odhlášení (volitelné - můžete přidat tlačítko do menu)
function logout() {
    sessionStorage.removeItem('zfp_vendor_auth');
    window.location.href = 'login.html';
}
