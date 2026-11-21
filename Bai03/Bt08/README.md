# BÀI 08 – QUẢN LÝ TẬP TIN VỚI FILE SYSTEM

**Họ tên:** Nguyễn Đức Dưỡng  
**Mã sinh viên:** CĐ-CNTT18B06  
**Môn học:** Module, File System và cơ sở dữ liệu

## 1. Yêu cầu bài thực hành:
- Sử dụng module `fs` tạo thư mục `data`.
- Tạo tập tin `ghichu.txt` và ghi ít nhất 3 dòng nội dung.
- Đổi tên tập tin thành `ghichu_moi.txt` bằng `fs.rename()`.
- Đọc và hiển thị nội dung sau khi đổi tên.
- Tạo tập tin `tam.txt`, sau đó xóa bằng `fs.unlink()`.
- Hiển thị thông báo kết quả từng thao tác.

## 2. Các lệnh sử dụng:
- `fs.mkdirSync()`: Tạo thư mục.
- `fs.writeFileSync()`: Ghi nội dung vào tập tin.
- `fs.renameSync()`: Đổi tên tập tin.
- `fs.readFileSync()`: Đọc nội dung tập tin.
- `fs.unlinkSync()`: Xóa tập tin.

## 3. Cách chạy chương trình:
Mở Terminal tại thư mục Bt08 và nhập:

```bash
node bai08.js
```

## 4. Kết quả thực hiện:
Chương trình tạo thư mục data, ghi nội dung vào ghichu.txt, đổi tên thành ghichu_moi.txt, đọc nội dung sau khi đổi tên và tạo rồi xóa tập tin tam.txt thành công.

## 5. Hình ảnh minh chứng:
- Ảnh 1: Nội dung mã nguồn bai08.js.
- Ảnh 2: Kết quả chạy chương trình trên Terminal.
- Ảnh 3: Thư mục data và tập tin ghichu_moi.txt.
- Ảnh 4: Nội dung tập tin ghichu_moi.txt.

## 6. Kết luận
Hoàn thành bài thực hành quản lý tập tin bằng module File System trong Node.js.
