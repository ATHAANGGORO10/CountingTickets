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

    var ht = 0.0;
    var sub = 0.0;
    var diskon = 0.0;
    var total = 0.0;

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
        "Samarinda": 23000,
        "Ternate": 24000,
    };

    ht = hargaPerKota[tujuan] || 0;
    sub = jumlahtiket * ht;
    if (document.fform.imember.checked == true) {
        diskon = 0.10 * sub;
    } else {
        diskon = 0.0;
    }

    total = sub - diskon;
    document.fform.otiket.value = ht.toLocaleString('id-ID');
    document.fform.osub.value = sub.toLocaleString('id-ID');
    document.fform.odiskon.value = diskon.toLocaleString('id-ID');
    document.fform.ototal.value = total.toLocaleString('id-ID');
};
