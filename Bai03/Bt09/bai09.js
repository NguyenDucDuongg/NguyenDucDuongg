
const { MongoClient } = require("mongodb");

const uri = "mongodb://127.0.0.1:27017";
const client = new MongoClient(uri);

const mau = {
    reset: "\x1b[0m",
    xanh: "\x1b[32m",
    do: "\x1b[31m",
    vang: "\x1b[33m",
    xanhDuong: "\x1b[36m",
    dam: "\x1b[1m",
    tim: "\x1b[35m"
};

function tieuDe(noiDung) {
    console.log("\n" + mau.xanhDuong + mau.dam);
    console.log("==================================================");
    console.log("       " + noiDung);
    console.log("==================================================");
    console.log(mau.reset);
}

function thanhCong(noiDung) {
    console.log(mau.xanh + " [THANH CONG] " + noiDung + mau.reset);
}

function thongTin(noiDung) {
    console.log(mau.vang + " [THONG TIN] " + noiDung + mau.reset);
}

function hienThiDanhSach(danhSach) {
    console.log("\n" + mau.tim + mau.dam);
    console.log("--------------------------------------------------------------");
    console.log(" STT | MA SINH VIEN | HO TEN              | TUOI | DIEM");
    console.log("--------------------------------------------------------------");
    console.log(mau.reset);

    if (danhSach.length === 0) {
        thongTin("Khong co sinh vien nao!");
        return;
    }

    danhSach.forEach((sv, index) => {
        const stt = String(index + 1).padEnd(3);
        const ma = sv.masv.padEnd(12);
        const ten = sv.hoten.padEnd(19);

        console.log(
            ` ${stt} | ${ma} | ${ten} | ${String(sv.tuoi).padEnd(4)} | ${sv.diem}`
        );
    });

    console.log(mau.tim + "--------------------------------------------------------------" + mau.reset);
}

async function main() {
    try {
        tieuDe("BAI 9 - XOA DU LIEU MONGODB");

        await client.connect();
        thanhCong("Ket noi MongoDB thanh cong!");

        const db = client.db("qlsinhvien");
        const students = db.collection("students_test");

        thongTin("Database: qlsinhvien");
        thongTin("Collection: students_test");

        await students.deleteMany({});

        const danhSachSinhVien = [
            { masv: "SV101", hoten: "Nguyen Duc Duong", tuoi: 20, diem: 8.5 },
            { masv: "SV102", hoten: "Nguyen Van An", tuoi: 21, diem: 7.5 },
            { masv: "SV103", hoten: "Tran Thi Binh", tuoi: 20, diem: 4.5 },
            { masv: "SV104", hoten: "Le Van Nam", tuoi: 22, diem: 3.5 },
            { masv: "SV105", hoten: "Pham Thi Hoa", tuoi: 19, diem: 9.0 }
        ];

        const themMoi = await students.insertMany(danhSachSinhVien);

        tieuDe("KET QUA THEM DU LIEU");
        thanhCong(`Da them ${themMoi.insertedCount} sinh vien!`);

        console.log("\nDANH SACH SINH VIEN BAN DAU:");
        const banDau = await students.find({}).toArray();
        hienThiDanhSach(banDau);

        tieuDe("THAO TAC DELETEONE");

        const maSV = "SV102";
        const xoaMot = await students.deleteOne({ masv: maSV });

        if (xoaMot.deletedCount > 0) {
            thanhCong(`Da xoa sinh vien co ma ${maSV}`);
        } else {
            thongTin(`Khong tim thay sinh vien co ma ${maSV}`);
        }

        console.log("So ban ghi da xoa:", xoaMot.deletedCount);

        tieuDe("THAO TAC DELETEMANY");

        const xoaNhieu = await students.deleteMany({
            diem: { $lt: 5 }
        });

        thanhCong(`Da xoa ${xoaNhieu.deletedCount} sinh vien co diem duoi 5!`);

        tieuDe("DANH SACH SINH VIEN CON LAI");

        const conLai = await students.find({}).sort({ masv: 1 }).toArray();
        hienThiDanhSach(conLai);

        tieuDe("THONG KE KET QUA");

        console.log("Tong so sinh vien ban dau :", banDau.length);
        console.log("Xoa bang deleteOne()      :", xoaMot.deletedCount);
        console.log("Xoa bang deleteMany()     :", xoaNhieu.deletedCount);
        console.log("So sinh vien con lai      :", conLai.length);

        thanhCong("HOAN THANH BAI THUC HANH 9!");

    } catch (error) {
        console.log(mau.do + "\n[LOI] " + error.message + mau.reset);
    } finally {
        await client.close();
        thongTin("Da dong ket noi MongoDB!");
    }
}

main();
