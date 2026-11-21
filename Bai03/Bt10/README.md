# BÀI 10. LIÊN KẾT HAI COLLECTION TRONG MONGODB

**Sinh viên:** Nguyễn Đức Dưỡng  
**Mã sinh viên:** CĐ-CNTT18B06  
**Môn học:** Node.js và MongoDB  
**Bài thực hành:** Bài 3 — Module, File System và cơ sở dữ liệu

## 1. Mục tiêu bài thực hành

- Tạo collection `departments` lưu thông tin các khoa.
- Tạo collection `students_join` lưu thông tin sinh viên.
- Sử dụng `aggregate()` và `$lookup` để liên kết hai collection.
- Hiển thị danh sách sinh viên kèm tên khoa tương ứng.

## 2. Công nghệ sử dụng

- Node.js
- MongoDB
- MongoDB Node.js Driver
- Visual Studio Code

## 3. Cấu trúc thư mục

```text
Bt10/
├── bai10.js
└── README.md
```

## 4. Nội dung thực hiện

**Collection departments:**
- CNTT — Công nghệ thông tin
- QTKD — Quản trị kinh doanh
- KETOAN — Kế toán

**Collection students_join:**

Thêm 5 sinh viên với các thông tin:
- Mã sinh viên (`masv`)
- Họ tên (`hoten`)
- Mã khoa (`makhoa`)

**Liên kết dữ liệu:**

Sử dụng `aggregate()` kết hợp với `$lookup` để liên kết trường `makhoa` của collection `students_join` với trường `makhoa` của collection `departments`.

Sau khi liên kết, chương trình hiển thị mã sinh viên, họ tên, mã khoa và tên khoa.

## 5. Cách chạy chương trình

**Bước 1:** Mở Terminal tại thư mục Bt10.

**Bước 2:** Cài đặt thư viện MongoDB:

```bash
npm install mongodb
```

**Bước 3:** Đảm bảo MongoDB Server đang hoạt động.

**Bước 4:** Chạy chương trình:

```bash
node bai10.js
```

## 6. Kết quả đạt được

- Kết nối MongoDB thành công.
- Tạo và thêm dữ liệu vào hai collection.
- Liên kết dữ liệu bằng `aggregate()` và `$lookup` thành công.
- Hiển thị danh sách 5 sinh viên cùng tên khoa tương ứng.
- Hoàn thành yêu cầu bài thực hành.

## 7. Hình ảnh minh chứng

**Ảnh 1:** Giao diện code chương trình `bai10.js`.

**Ảnh 2:** Kết quả chạy chương trình trên Terminal.

**Ảnh 3:** Dữ liệu trong collection `departments` và `students_join` (nếu có).

---

**KẾT LUẬN:** Qua bài thực hành, em đã hiểu cách sử dụng `aggregate()` và `$lookup` trong MongoDB để liên kết dữ liệu giữa hai collection và hiển thị thông tin đầy đủ hơn.
