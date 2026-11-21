
const { MongoClient } = require("mongodb");

const uri = "mongodb://127.0.0.1:27017";
const client = new MongoClient(uri);

async function main() {
    try {
        // Ket noi MongoDB
        await client.connect();
        console.log("Ket noi MongoDB thanh cong!");

        // Chon database va collection
        const db = client.db("qlsinhvien");
        const students = db.collection("students");

        // 1. Tim sinh vien co diem >= 7
        // 2. Sap xep diem giam dan
        console.log("\n===== DANH SACH SINH VIEN CO DIEM >= 7 =====");

        const danhSach = await students
            .find({ diem: { $gte: 7 } })
            .sort({ diem: -1 })
            .toArray();

        danhSach.forEach((sv, index) => {
            console.log("\nSinh vien:", index + 1);
            console.log("Ma SV:", sv.masv);
            console.log("Ho ten:", sv.hoten);
            console.log("Diem:", sv.diem);
        });

        // 3. Cap nhat diem sinh vien theo ma SV
        const maSV = "SV002";
        const diemMoi = 8.8;

        const ketQua = await students.updateOne(
            { masv: maSV },
            { $set: { diem: diemMoi } }
        );

        if (ketQua.matchedCount > 0) {
            console.log("\nCap nhat diem thanh cong!");
        } else {
            console.log("\nKhong tim thay sinh vien co ma:", maSV);
        }

        // 4. Hien thi thong tin sau cap nhat
        console.log("\n===== THONG TIN SAU CAP NHAT =====");

        const sinhVien = await students.findOne({ masv: maSV });

        if (sinhVien) {
            console.log("Ma SV:", sinhVien.masv);
            console.log("Ho ten:", sinhVien.hoten);
            console.log("Diem moi:", sinhVien.diem);
        }

    } catch (error) {
        console.log("Loi:", error);
    } finally {
        await client.close();
        console.log("\nDa dong ket noi MongoDB!");
    }
}

main();
