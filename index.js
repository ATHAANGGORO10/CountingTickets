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

    if (tujuan == "Jakarta") {
        ht = 10000;
    } else if (tujuan == "Cirebon") {
        ht = 15000;
    } else {
        ht = 20000;
    }
    sub = jumlahtiket * ht;
    if (document.fform.imember.checked == true) {
        diskon = 0.10 * sub;
    } else {
        diskon = 0.0;
    }

    total = sub - diskon;
    document.fform.otiket.value = ht.toLocaleString(ht);
    document.fform.osub.value = sub.toLocaleString(sub);
    document.fform.odiskon.value = diskon.toLocaleString(diskon);
    document.fform.ototal.value = total.toLocaleString(total);
};