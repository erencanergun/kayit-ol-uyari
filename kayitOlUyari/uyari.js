document.getElementById('hesapOlusturButon').addEventListener('click', function() {
    var adSoyad = document.getElementById('adSoyad').value;
    var kullaniciAdi = document.getElementById('kullaniciAdi').value;
    var email = document.getElementById('email').value;
    var sifre = document.getElementById('sifre').value;
    var sifreTekrar = document.getElementById('sifreTekrar').value;

    // Herhangi bir alan boşsa uyarı ver
    if (!adSoyad || !kullaniciAdi || !email || !sifre || !sifreTekrar) {
        alert('Lütfen tüm alanları doldurunuz.');
        return false; // Form gönderimini durdur
    }

    // Diğer kontroller ve form gönderimi burada yapılabilir
});

// Butonun id'sini 'hesapOlusturButon' olarak ayarlayın veya mevcut id'yi bu kodla eşleştirin
