# BÀI 9: XÓA DỮ LIỆU CÓ ĐIỀU KIỆN TRONG MONGODB

**Sinh viên:** Nguyễn Đức Dưỡng  
**Mã sinh viên:** CĐ-CNTT18B06

## 1. Mục tiêu
- Kết nối MongoDB với database `qlsinhvien`.
- Sử dụng collection `students_test`.
- Thêm 5 sinh viên mẫu.
- Sử dụng `deleteOne()` để xóa sinh viên theo mã.
- Sử dụng `deleteMany()` để xóa sinh viên có điểm dưới 5.
- Hiển thị số bản ghi đã xóa và danh sách sinh viên còn lại.

## 2. Các lệnh thực hiện

Cài đặt thư viện MongoDB:

```bash
npm install mongodb
```

Chạy chương trình:

```bash
node bai09.js
```

## 3. Kết quả
- Thêm thành công 5 sinh viên.
- Xóa 1 sinh viên bằng `deleteOne()`.
- Xóa 2 sinh viên có điểm dưới 5 bằng `deleteMany()`.
- Còn lại 2 sinh viên trong collection `students_test`.

## 4. Minh chứng
Đính kèm ảnh mã nguồn và ảnh kết quả chạy chương trình tại đây.
