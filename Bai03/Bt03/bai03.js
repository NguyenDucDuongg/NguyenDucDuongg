
const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname, 'thongtin.txt');

const hoTen = 'Nguyễn Đức Dưỡng';
const maSinhVien = 'CĐ-CNTT18B06';
const tenLop = 'CĐ-CNTT18B06';

fs.writeFile('thongtin.txt', 
    `Họ tên: ${hoTen}\nMã sinh viên: ${maSinhVien}\n`,
    (err) => {
        if (err) throw err;

        console.log('Đã tạo tập tin thongtin.txt thành công!');

         fs.readFile('thongtin.txt', 'utf8', (err, data) => {
            if (err) throw err;

            console.log('\nNỘI DUNG BAN ĐẦU:');
            console.log(data);

            fs.appendFile('thongtin.txt',
                `Tên lớp: ${tenLop}\n`,
                (err) => {
                    if (err) throw err;

                    console.log('Đã ghi nối tên lớp thành công!');

                     fs.readFile('thongtin.txt', 'utf8', (err, data) => {
                        if (err) throw err;

                        console.log('\nNỘI DUNG SAU KHI CẬP NHẬT:');
                        console.log(data);
                    });
                }
            );
        });
    }
);
