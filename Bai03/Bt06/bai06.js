
const { tinhDiemTB, xepLoai } = require("./xulyDiem");

// Danh sach 3 sinh vien
const danhSachSinhVien = [
    {
        hoTen: "Nguyen Duc Duong",
        diemToan: 9,
        diemLy: 8,
        diemHoa: 8.5
    },
    {
        hoTen: "Nguyen Van An",
        diemToan: 7,
        diemLy: 6,
        diemHoa: 7
    },
    {
        hoTen: "Tran Thi Binh",
        diemToan: 4,
        diemLy: 5,
        diemHoa: 4.5
    }
];

// Hien thi ket qua
console.log("===== KET QUA HOC TAP =====");

danhSachSinhVien.forEach((sv, index) => {
    const diemTB = tinhDiemTB(
        sv.diemToan,
        sv.diemLy,
        sv.diemHoa
    );

    const loai = xepLoai(diemTB);

    console.log("\nSinh vien:", index + 1);
    console.log("Ho ten:", sv.hoTen);
    console.log("Diem trung binh:", diemTB.toFixed(2));
    console.log("Xep loai:", loai);
});
