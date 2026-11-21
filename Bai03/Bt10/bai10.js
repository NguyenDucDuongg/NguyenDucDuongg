
const { MongoClient } = require("mongodb");

// ======================================
// 1. KET NOI MONGODB
// ======================================
const uri = "mongodb://127.0.0.1:27017";
const client = new MongoClient(uri);

// Mau hien thi terminal
const mau = {
    reset: "\x1b[0m",
    xanh: "\x1b[32m",
    do: "\x1b[31m",
    vang: "\x1b[33m",
    xanhDuong: "\x1b[36m",
    tim: "\x1b[35m",
    dam: "\x1b[1m"
};

// Ham hien thi tieu de
function tieuDe(noiDung) {
    console.log("\n" + mau.xanhDuong + mau.dam);
    console.log("======================================================");
    console.log("       " + noiDung);
    console.log("======================================================");
    console.log(mau.reset);
}

// Ham thong bao
function thanhCong(noiDung) {
    console.log(mau.xanh + " [THANH CONG] " + noiDung + mau.reset);
}

function thongTin(noiDung) {
    console.log(mau.vang + " [THONG TIN] " + noiDung + mau.reset);
}

function loi(noiDung) {
    console.log(mau.do + " [LOI] " + noiDung + mau.reset);
}

// ======================================
// 2. CHUONG TRINH CHINH
// ======================================
async function main() {
    try {
        tieuDe("BAI 10 - LIEN KET HAI COLLECTION");

        await client.connect();
        thanhCong("Ket noi MongoDB thanh cong!");

        const db = client.db("qlsinhvien");

        const departments = db.collection("departments");
        const students = db.collection("students_join");

        thongTin("Database: qlsinhvien");
        thongTin("Collection khoa: departments");
        thongTin("Collection sinh vien: students_join");

        // ======================================
        // 3. TAO DU LIEU KHOA
        // ======================================
        tieuDe("THEM DU LIEU KHOA");

        // Xoa du lieu cu trong collection bai 10
        await departments.deleteMany({});

        const danhSachKhoa = [
            {
                makhoa: "CNTT",
                tenkhoa: "Cong nghe thong tin"
            },
            {
                makhoa: "QTKD",
                tenkhoa: "Quan tri kinh doanh"
            },
            {
                makhoa: "KETOAN",
                tenkhoa: "Ke toan"
            }
        ];

        const ketQuaKhoa = await departments.insertMany(danhSachKhoa);

        thanhCong(`Da them ${ketQuaKhoa.insertedCount} khoa!`);

        const dsKhoa = await departments.find({}).toArray();

        console.log("\nDANH SACH KHOA:");
        dsKhoa.forEach((khoa, index) => {
            console.log(
                `${index + 1}. ${khoa.makhoa} - ${khoa.tenkhoa}`
            );
        });

        // ======================================
        // 4. TAO DU LIEU SINH VIEN
        // ======================================
        tieuDe("THEM DU LIEU SINH VIEN");

        // Xoa du lieu cu trong collection bai 10
        await students.deleteMany({});

        const danhSachSinhVien = [
            {
                masv: "SV201",
                hoten: "Nguyen Duc Duong",
                makhoa: "CNTT"
            },
            {
                masv: "SV202",
                hoten: "Nguyen Van An",
                makhoa: "QTKD"
            },
            {
                masv: "SV203",
                hoten: "Tran Thi Binh",
                makhoa: "CNTT"
            },
            {
                masv: "SV204",
                hoten: "Le Van Nam",
                makhoa: "KETOAN"
            },
            {
                masv: "SV205",
                hoten: "Pham Thi Hoa",
                makhoa: "QTKD"
            }
        ];

        const ketQuaSinhVien = await students.insertMany(danhSachSinhVien);

        thanhCong(`Da them ${ketQuaSinhVien.insertedCount} sinh vien!`);

        const dsSinhVien = await students.find({}).toArray();

        console.log("\nDANH SACH SINH VIEN:");
        dsSinhVien.forEach((sv, index) => {
            console.log(
                `${index + 1}. ${sv.masv} - ${sv.hoten} - ${sv.makhoa}`
            );
        });

        // ======================================
        // 5. LIEN KET BANG AGGREGATE VA LOOKUP
        // ======================================
        tieuDe("THUC HIEN AGGREGATE VA LOOKUP");

        const ketQua = await students.aggregate([
            {
                $lookup: {
                    from: "departments",
                    localField: "makhoa",
                    foreignField: "makhoa",
                    as: "thongTinKhoa"
                }
            },
            {
                $unwind: "$thongTinKhoa"
            },
            {
                $project: {
                    _id: 0,
                    masv: 1,
                    hoten: 1,
                    makhoa: 1,
                    tenkhoa: "$thongTinKhoa.tenkhoa"
                }
            },
            {
                $sort: {
                    masv: 1
                }
            }
        ]).toArray();

        thanhCong("Da lien ket hai collection thanh cong!");

        // ======================================
        // 6. HIEN THI KET QUA
        // ======================================
        tieuDe("KET QUA LIEN KET SINH VIEN VA KHOA");

        console.log(
            "STT".padEnd(5) +
            "MA SINH VIEN".padEnd(15) +
            "HO TEN".padEnd(23) +
            "MA KHOA".padEnd(12) +
            "TEN KHOA"
        );

        console.log("-".repeat(85));

        ketQua.forEach((sv, index) => {
            console.log(
                String(index + 1).padEnd(5) +
                sv.masv.padEnd(15) +
                sv.hoten.padEnd(23) +
                sv.makhoa.padEnd(12) +
                sv.tenkhoa
            );
        });

        // ======================================
        // 7. THONG KE
        // ======================================
        tieuDe("THONG KE KET QUA");

        console.log("Tong so khoa:                  ", dsKhoa.length);
        console.log("Tong so sinh vien:              ", dsSinhVien.length);
        console.log("So sinh vien co thong tin khoa: ", ketQua.length);

        thanhCong("HOAN THANH BAI THUC HANH 10!");

    } catch (error) {
        loi(error.message);
    } finally {
        await client.close();
        thongTin("Da dong ket noi MongoDB!");
    }
}

main();
