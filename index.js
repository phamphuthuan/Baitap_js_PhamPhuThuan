// Bài 1
function tong_luong(){
    var soGioLam = document.getElementById("so_gio_lam").value;
    var luongMotNgay = document.getElementById("luong_mot_ngay").value;

    var tongLuong = 0;
    tongLuong = soGioLam * luongMotNgay;
    document.getElementById(`tongLuong`).innerHTML = tongLuong.toLocaleString();
}

//Bài 2
function trung_Binh(){
    var soThuNhat = document.getElementById("so1").value;
    var soThuHai = document.getElementById("so2").value;
    var soThuBa = document.getElementById("so3").value;
    var soThuTu = document.getElementById("so4").value;
    var soThuNam = document.getElementById("so5").value;

    var soTrungBinh = (Number(soThuNhat) + Number(soThuHai) + Number(soThuBa) + Number(soThuTu) + Number(soThuNam))/5;
    console.log(soTrungBinh);

    document.getElementById(`trungBinh`).innerHTML = soTrungBinh;
}

//Bài 3
function quy_doi(){
    var soTien = document.getElementById("soTien").value;
    var rate = 23500;
    var vnd = soTien * rate;
    var quyDoiTien = new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND',
      }).format(vnd);

      document.getElementById(`quyDoi`).innerHTML = quyDoiTien;
}

// Bài 4
function tinh(){
    var chieuDai = document.getElementById("chieuDai").value;
    var chieuRong = document.getElementById("chieuRong").value;

    var dienTich = chieuDai * chieuRong;
    var chuVi = 2 * (Number(chieuDai) + Number(chieuRong));

    document.getElementById(`chuVi`).innerHTML = chuVi;
    document.getElementById(`dienTich`).innerHTML = dienTich;
}

//Bài 5
function tinhKySo(){
    var soNguyen = document.getElementById("soNguyen").value;

    var donVi = soNguyen % 10;
    var hangChuc = Math.floor(soNguyen/10);

    var tongKySo = donVi + hangChuc;
    document.getElementById(`tongKySo`).innerHTML = tongKySo;
}