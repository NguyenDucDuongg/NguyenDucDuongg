
// Import module http
const http = require('http');

// Thông tin sinh viên
const hoTen = 'Nguyễn Đức Dưỡng';
const maSinhVien = 'CĐ-CNTT18B06';

// Tạo Web Server
const server = http.createServer((req, res) => {

    // Truy cập trang chủ
    if (req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });

        res.end(`
            <h1>Xin chào!</h1>
            <h2>${hoTen}</h2>
            <p>Mã sinh viên: ${maSinhVien}</p>
        `);
    }

    // Truy cập trang giới thiệu
    else if (req.url === '/about') {
        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });

        res.end(`
            <h1>Giới thiệu bản thân</h1>
            <p>Họ và tên: ${hoTen}</p>
            <p>Mã sinh viên: ${maSinhVien}</p>
            <p>Chuyên ngành: Công nghệ thông tin</p>
            <p>Đây là bài thực hành tạo Web Server với Node.js.</p>
        `);
    }

    // Đường dẫn không tồn tại
    else {
        res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });

        res.end('<h1>404 - Không tìm thấy trang!</h1>');
    }

});

// Khởi động Server tại cổng 3000
server.listen(3000, () => {
    console.log('Server đang chạy tại http://localhost:3000');
});
