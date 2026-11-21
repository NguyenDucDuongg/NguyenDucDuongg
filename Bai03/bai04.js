
const { MongoClient } = require("mongodb");

const uri = "mongodb://127.0.0.1:27017";
const client = new MongoClient(uri);

async function main() {
    try {
        await client.connect();

        console.log("Ket noi MongoDB thanh cong!");

        const db = client.db("qlsinhvien");
        const students = db.collection("students");

        const sinhVien = [
            {
                masv: "CD-CNTT18B06",
                hoten: "Nguyen Duc Duong",
                tuoi: 20,
                diem: 8.5
            },
            {
                masv: "SV002",
                hoten: "Nguyen Van An",
                tuoi: 20,
                diem: 7.5
            },
            {
                masv: "SV003",
                hoten: "Tran Thi Binh",
                tuoi: 21,
                diem: 9.0
            }
        ];

        const result = await students.insertMany(sinhVien);

        console.log("Them thanh cong:", result.insertedCount);

        console.log("\n===== DANH SACH SINH VIEN =====");

        const danhSach = await students.find({}).toArray();

        danhSach.forEach((sv, index) => {
            console.log("\nSinh vien:", index + 1);
            console.log("Ma SV:", sv.masv);
            console.log("Ho ten:", sv.hoten);
            console.log("Tuoi:", sv.tuoi);
            console.log("Diem:", sv.diem);
        });

    } catch (error) {
        console.log("Loi:", error);
    } finally {
        await client.close();
        console.log("\nDa dong ket noi MongoDB!");
    }
}

main();
