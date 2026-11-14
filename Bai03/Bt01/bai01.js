class SinhVien {
    constructor(ma, hoTen, tuoi, diem) {
        this.ma = ma;
        this.hoTen = hoTen;
        this.tuoi = tuoi;
        this.diem = diem;
    }
}

const danhSachSinhVien = [
    new SinhVien("SV01", "Cao Lương Khôi", 21, 8.5),
    new SinhVien("SV02", "Cao Đình Phong", 21, 4.5),
    new SinhVien("SV03", "Nguyễn Cường", 21, 7.0),
    new SinhVien("SV04", "Đrao Phạm Y Duy", 21, 6.5),
    new SinhVien("SV05", "Nguyễn Thị Mỹ Linh", 21, 3.5)
];

const sinhVienDat = danhSachSinhVien.filter(
    (sv) => sv.diem >= 5
);

console.log("DANH SACH SINH VIEN DAT YEU CAU:");
console.log(sinhVienDat);
