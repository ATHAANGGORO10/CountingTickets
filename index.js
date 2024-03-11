function hitungtotal() {
    var nama = document.fform.inama.value.trim();
    var tujuan = document.fform.itujuan.value.trim();
    var jumlahtiket = parseFloat(document.fform.ijumlah.value.trim());

    if (nama === '' || tujuan === '' || isNaN(jumlahtiket) || jumlahtiket <= 0) {
        Swal.fire({
            icon: 'error',
            title: 'Isi Data Terlebih Dahulu',
        });
        return;
    }

    var hargaPerKota = {
        "Jakarta": 10000,
        "Surabaya": 15000,
        "Medan": 12000,
        "Bandung": 25000,
        "Makassar": 18000,
        "Palembang": 20000,
        "Tangerang": 13000,
        "Semarang": 22000,
        "Depok": 17000,
        "Padang": 16000,
        "Bandar Lampung": 19000,
        "Bekasi": 14000,
        "Banjarmasin": 23000,
        "Pekanbaru": 20000,
        "Denpasar": 25000,
        "Batam": 18000,
        "Samarinda": 21000,
        "Balikpapan": 19000,
        "Manado": 24000,
        "Mataram": 20000,
        "Pontianak": 23000,
        "Kupang": 22000,
        "Malang": 18000,
        "Jambi": 20000,
        "Surakarta": 16000,
        "Padang Sidempuan": 17000,
        "Tarakan": 21000,
        "Ambon": 22000,
        "Palu": 19000,
        "Ternate": 24000,
        "Kendari": 17000,
        "Gorontalo": 21000,
        "Parepare": 18000,
        "Bima": 20000,
        "Bontang": 24000,
        "Lhokseumawe": 23000,
        "Binjai": 22000,
        "Yogyakarta": 17000,
        "Pangkalpinang": 20000,
        "Probolinggo": 18000,
        "Cilegon": 21000,
        "Cimahi": 18000,
        "Pematangsiantar": 23000,
        "Tegal": 22000,
        "Kendal": 17000,
        "Salatiga": 19000,
        "Pekalongan": 20000,
        "Magelang": 18000,
        "Sibolga": 21000,
        "Padang Panjang": 18000,
        "Sungai Penuh": 17000,
        "Sawahlunto": 19000,
        "Tarutung": 21000,
        "Gunungsitoli": 22000,
        "Sidikalang": 17000,
        "Sibolga": 20000,
        "Pematangsiantar": 21000,
        "Tebing Tinggi": 19000,
        "Pagar Alam": 20000,
        "Lubuklinggau": 18000,
        "Prabumulih": 21000,
        "Palembang": 22000,
        "Pangkalpinang": 23000,
        "Tanjab Barat": 18000,
        "Bengkulu": 19000,
        "Bandar Lampung": 20000,
        "Metro": 22000,
        "Bekasi": 21000,
        "Depok": 18000,
        "Bogor": 19000,
        "Cilegon": 20000,
        "Serang": 22000,
        "Tangerang": 18000,
        "Cimahi": 19000,
        "Banjar": 20000,
        "Bandung": 22000,
        "Bekasi": 19000,
        "Cimahi": 20000,
        "Cirebon": 18000,
        "Sukabumi": 19000,
        "Tasikmalaya": 20000,
        "Banjar": 18000,
        "Ciamis": 19000,
        "Kuningan": 21000,
        "Sumedang": 22000,
        "Garut": 18000,
        "Purwakarta": 19000,
        "Karawang": 20000,
        "Indramayu": 18000,
        "Subang": 19000,
        "Pangandaran": 20000,
        "Purwokerto": 21000,
        "Banjar": 22000,
        "Cilacap": 18000,
        "Tegal": 19000,
        "Pekalongan": 20000,
        "Pemalang": 18000,
        "Tegal": 19000,
        "Salatiga": 20000,
        "Magelang": 18000,
        "Surakarta": 19000,
        "Sukoharjo": 20000,
        "Wonogiri": 18000,
        "Karanganyar": 19000,
        "Sragen": 20000,
        "Grobogan": 18000,
        "Blora": 19000,
        "Rembang": 20000,
        "Pati": 18000,
        "Kudus": 19000,
        "Jepara": 20000,
        "Demak": 18000,
        "Semarang": 19000,
        "Temanggung": 20000,
        "Kendal": 18000,
        "Batang": 19000,
        "Pekalongan": 20000,
        "Pemalang": 18000,
        "Tegal": 19000,
        "Brebes": 20000
    };      

    var ht = hargaPerKota[tujuan] || 0;
    var sub = jumlahtiket * ht;
    var diskon = document.fform.imember.checked ? 0.10 * sub : 0.0;
    var total = sub - diskon;

    localStorage.setItem('nama', nama);
    localStorage.setItem('tujuan', tujuan);
    localStorage.setItem('jumlahtiket', jumlahtiket);
    localStorage.setItem('otiket', ht.toLocaleString('id-ID'));
    localStorage.setItem('osub', sub.toLocaleString('id-ID'));
    localStorage.setItem('odiskon', diskon.toLocaleString('id-ID'));
    localStorage.setItem('ototal', total.toLocaleString('id-ID'));
    document.fform.otiket.value = ht.toLocaleString('id-ID');
    document.fform.osub.value = sub.toLocaleString('id-ID');
    document.fform.odiskon.value = diskon.toLocaleString('id-ID');
    document.fform.ototal.value = total.toLocaleString('id-ID');
};

window.onload = function () {
    document.fform.inama.value = localStorage.getItem('nama') || '';
    document.fform.ijumlah.value = localStorage.getItem('jumlahtiket') || '';
    document.fform.otiket.value = localStorage.getItem('otiket') || '';
    document.fform.osub.value = localStorage.getItem('osub') || '';
    document.fform.odiskon.value = localStorage.getItem('odiskon') || '';
    document.fform.ototal.value = localStorage.getItem('ototal') || '';
};

document.querySelector('button[type="reset"]').addEventListener('click', function () {
    var nama = document.fform.inama.value.trim();
    var tujuan = document.fform.itujuan.value.trim();
    var jumlahtiket = parseFloat(document.fform.ijumlah.value.trim());

    if (nama === '' || tujuan === '' || isNaN(jumlahtiket) || jumlahtiket <= 0) {
        Swal.fire({
            icon: 'error',
            title: 'Silahkan Isi Terlebih Dahulu Datanya',
        });
        return;
    }
    Swal.fire({
        title: 'Apakah Kamu Ingin Mengulang?',
        icon: 'question',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Ya',
        cancelButtonText: 'Tidak'
    }).then((result) => {
        if (result.isConfirmed) {
            localStorage.removeItem('nama');
            localStorage.removeItem('jumlahtiket');
            localStorage.removeItem('otiket');
            localStorage.removeItem('osub');
            localStorage.removeItem('odiskon');
            localStorage.removeItem('ototal');

            document.fform.inama.value = '';
            document.fform.ijumlah.value = '';
            document.fform.otiket.value = '';
            document.fform.osub.value = '';
            document.fform.odiskon.value = '';
            document.fform.ototal.value = '';

            Swal.fire('Berhasil direset!', '', 'success');
        }
    });
});

(() => {
    'use strict';
    const getStoredTheme = () => localStorage.getItem('theme');
    const setStoredTheme = theme => localStorage.setItem('theme', theme);
    const getPreferredTheme = () => {
        const storedTheme = getStoredTheme();
        if (storedTheme) {
            return storedTheme;
        }
        return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    };
    const setTheme = theme => {
        if (theme === 'auto' && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            document.documentElement.setAttribute('data-bs-theme', 'dark');
        } else {
            document.documentElement.setAttribute('data-bs-theme', theme);
        }
    };
    setTheme(getPreferredTheme());
    const updateDarkModeStatus = () => {
        const darkModeStatus = document.getElementById('darkModeStatus');
        if (darkModeStatus) {
            const currentTheme = getStoredTheme() || getPreferredTheme();
            darkModeStatus.textContent = ` (${currentTheme === 'dark' ? 'Dark' : 'Light'} Mode)`;
        }
    };
    const updateIcon = () => {
        const currentTheme = getStoredTheme() || getPreferredTheme();
        const icon = document.getElementById('darkModeIcon');
        if (icon) {
            icon.classList.remove('bi-moon-stars-fill');
            if (currentTheme === 'dark') {
                icon.classList.add('bi-moon-stars-fill', 'text-light');
            } else {
                icon.classList.add('bi-cloud-sun-fill', 'text-dark');
            }
        }
    };
    const toggleTheme = () => {
        const currentTheme = getStoredTheme() || getPreferredTheme();
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        setStoredTheme(newTheme);
        setTheme(newTheme);
        updateDarkModeStatus();
        updateIcon();
    };
    const darkModeToggle = document.getElementById('darkModeToggle');
    if (darkModeToggle) {
        darkModeToggle.addEventListener('click', toggleTheme);
    };
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
        const storedTheme = getStoredTheme();
        if (storedTheme !== 'light' && storedTheme !== 'dark') {
            setTheme(getPreferredTheme());
            updateDarkModeStatus();
            updateIcon();
        }
    });
    updateDarkModeStatus();
    updateIcon();
})();