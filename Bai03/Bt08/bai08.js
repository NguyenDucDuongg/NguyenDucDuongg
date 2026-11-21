
const fs = require("fs").promises;
const path = require("path");

const mau = {
    reset: "\x1b[0m",
    xanh: "\x1b[32m",
    do: "\x1b[31m",
    vang: "\x1b[33m",
    xanhDuong: "\x1b[36m",
    dam: "\x1b[1m"
};

function tieuDe() {
    console.log("\n" + mau.xanhDuong + mau.dam);
    console.log("==============================================");
    console.log("       CHUONG TRINH QUAN LY TAP TIN NODE.JS");
    console.log("==============================================" + mau.reset);
}

function thanhCong(thongBao) {
    console.log(`${mau.xanh}[THANH CONG] ${thongBao}${mau.reset}`);
}

function thongTin(thongBao) {
    console.log(`${mau.xanhDuong}[THONG TIN] ${thongBao}${mau.reset}`);
}

function canhBao(thongBao) {
    console.log(`${mau.vang}[CANH BAO] ${thongBao}${mau.reset}`);
}

async function main() {
    const thuMuc = path.join(__dirname, "data");

    const fileCu = path.join(thuMuc, "ghichu.txt");
    const fileMoi = path.join(thuMuc, "ghichu_moi.txt");
    const fileTam = path.join(thuMuc, "tam.txt");

    let soThaoTac = 0;

    try {
        tieuDe();

        console.log("\n" + mau.dam + "1. TAO THU MUC DATA" + mau.reset);

        await fs.mkdir(thuMuc, { recursive: true });
        thanhCong("Da tao hoac kiem tra thu muc data!");
        soThaoTac++;

        console.log("\n" + mau.dam + "2. GHI NOI DUNG VAO FILE" + mau.reset);

        const noiDung = [
            "HO TEN: Nguyen Duc Duong",
            "MA SINH VIEN: CD-CNTT18B06",
            "BAI THUC HANH: QUAN LY TAP TIN NODE.JS",
            "MON HOC: MODULE, FILE SYSTEM VA CO SO DU LIEU"
        ].join("\n");

        await fs.writeFile(fileCu, noiDung, "utf8");
        thanhCong("Da ghi noi dung vao ghichu.txt!");
        soThaoTac++;

        console.log("\n" + mau.dam + "3. DOI TEN TAP TIN" + mau.reset);

        await fs.rename(fileCu, fileMoi);
        thanhCong("ghichu.txt -> ghichu_moi.txt");
        soThaoTac++;

        console.log("\n" + mau.dam + "4. DOC NOI DUNG TAP TIN" + mau.reset);

        const noiDungDoc = await fs.readFile(fileMoi, "utf8");

        console.log(mau.xanhDuong + "----------------------------------------------");
        console.log(noiDungDoc);
        console.log("----------------------------------------------" + mau.reset);

        thanhCong("Doc tap tin ghichu_moi.txt thanh cong!");
        soThaoTac++;

        console.log("\n" + mau.dam + "5. TAO TAP TIN TAM" + mau.reset);

        await fs.writeFile(fileTam, "Day la tap tin tam duoc tao boi Node.js.", "utf8");
        thanhCong("Da tao file tam.txt!");
        soThaoTac++;

        console.log("\n" + mau.dam + "6. XOA TAP TIN TAM" + mau.reset);

        await fs.unlink(fileTam);
        thanhCong("Da xoa tam.txt thanh cong!");
        soThaoTac++;

        console.log("\n" + mau.xanh + mau.dam);
        console.log("==============================================");
        console.log("             HOAN THANH CHUONG TRINH");
        console.log("==============================================" + mau.reset);

        thongTin(`Tong so thao tac thanh cong: ${soThaoTac}`);
        thongTin("Tap tin ket qua: data/ghichu_moi.txt");

    } catch (error) {
        console.log(`\n${mau.do}[LOI] ${error.message}${mau.reset}`);
        console.log(`${mau.vang}Vui long kiem tra lai tap tin va thu muc.${mau.reset}`);
    }
}

main();
