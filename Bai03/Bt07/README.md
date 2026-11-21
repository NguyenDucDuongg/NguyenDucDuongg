# BÀI 07 – XỬ LÝ THAM SỐ URL TRÊN WEB SERVER

**Họ tên:** Nguyễn Đức Dưỡng  
**Mã sinh viên:** CĐ-CNTT18B06  
**Môn học:** Module, File System và cơ sở dữ liệu

## 1. Yêu cầu bài thực hành

- Sử dụng module `http` và đối tượng `URL`.
- Tạo Web Server tại cổng 3001.
- Xử lý đường dẫn `/hello?name=Minh`.
- Xử lý đường dẫn `/sum?a=10&b=20`.
- Kiểm tra tham số bị thiếu hoặc không hợp lệ.

## 2. Cách chạy chương trình

Mở Terminal tại thư mục Bt07 và chạy:

```bash
node bai07.js
```

## 3. Các địa chỉ kiểm tra

- `http://localhost:3001/hello?name=Minh`
- `http://localhost:3001/sum?a=10&b=20`
- `http://localhost:3001/hello`
- `http://localhost:3001/sum?a=abc&b=20`

## 4. Kết quả

Web Server hoạt động tại cổng 3001, xử lý tham số URL, hiển thị lời chào, tính tổng hai số và thông báo lỗi khi dữ liệu không hợp lệ.

## 5. Hình ảnh minh chứng

- Ảnh 1: Mã nguồn bai07.js.
- Ảnh 2: Terminal chạy Web Server.
- Ảnh 3: Kết quả Xin chào Minh.
- Ảnh 4: Kết quả Tổng = 30.
- Ảnh 5: Kết quả kiểm tra lỗi.

## 6. Kết luận

Hoàn thành bài thực hành xử lý tham số URL trên Web Server bằng Node.js.
