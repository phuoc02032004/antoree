## Tính năng chính

*   **Khám phá khóa học:** Duyệt qua các khóa học theo danh mục, tìm kiếm theo từ khóa và lọc theo giá (truy cập vào `http://localhost:5173/courses`).
*   **Gợi ý khóa học:** Nhận các gợi ý khóa học phù hợp dựa trên sở thích hoặc lịch sử xem.
*   **Quản lý danh mục:** Xem và lọc các khóa học theo danh mục.
*   **Danh sách yêu thích:** Thêm và quản lý các khóa học yêu thích (truy cập: `http://localhost:5173/favorites`).
*   **Lịch sử xem:** Theo dõi các khóa học đã xem gần đây (truy cập: `http://localhost:5173/courses`).
*   **Giỏ hàng:** Thêm khóa học vào giỏ hàng và quản lý các mục trong giỏ hàng (truy cập: `http://localhost:5173/cart`).
*   **Phân trang:** Dễ dàng điều hướng qua các trang khóa học.
*   **Giao diện người dùng thân thiện:** Thiết kế đáp ứng, dễ sử dụng trên nhiều thiết bị.

## Công nghệ sử dụng

*   **Frontend:**
    *   React
    *   TypeScript
    *   Vite
    *   Tailwind CSS
    *   Shadcn/ui (cho các thành phần UI)
    *   Redux
*   **API Integration:** Axios

## Cài đặt

Để chạy dự án này cục bộ, hãy làm theo các bước sau:

1.  **Clone repository:**
    ```bash
    git clone [URL_REPOSITORY_CỦA_BẠN]
    cd antoree
    ```

2.  **Cài đặt các dependencies:**
    ```bash
    npm install
    # hoặc
    yarn install
    ```

3.  **Cấu hình biến môi trường:**
    Tạo một file `.env` ở thư mục gốc của dự án và thêm các biến môi trường cần thiết (bước này hiện tại chưa cần vì đã mockdata). Ví dụ:
    ```
    VITE_API_BASE_URL=http://localhost:3000/api
    ```
    (Thay đổi URL API của bạn nếu cần)

## Cách chạy ứng dụng

Để khởi động ứng dụng ở chế độ phát triển:

```bash
npm run dev
# hoặc
yarn dev
```

Ứng dụng sẽ chạy trên `http://localhost:5173` (hoặc một cổng khác nếu 5173 đã được sử dụng).

## Cấu trúc thư mục chính

```
antoree/
├── public/
├── src/
│   ├── api/             # Các dịch vụ gọi API
│   ├── assets/          # Hình ảnh, icon, v.v.
│   ├── components/      # Các thành phần UI có thể tái sử dụng
│   │   ├── Course/
│   │   ├── Home/
│   │   ├── layout/
│   │   ├── Loading/
│   │   └── ui/          # Các thành phần Shadcn/ui
│   ├── data/            # Dữ liệu giả định hoặc dữ liệu tĩnh
│   ├── hooks/           # Các React Hooks tùy chỉnh
│   ├── lib/             # Các hàm tiện ích chung
│   ├── pages/           # Các trang chính của ứng dụng
│   │   └── Auth/
│   ├── routes/          # Định tuyến ứng dụng
│   └── types/           # Định nghĩa kiểu TypeScript
├── .gitignore           # Các file và thư mục bị bỏ qua bởi Git
├── components.json      # Cấu hình Shadcn/ui
├── eslint.config.js     # Cấu hình ESLint
├── index.html           # File HTML chính
├── package.json         # Thông tin dự án và dependencies
├── package-lock.json    # Khóa dependencies
├── README.md            # File README của dự án
├── tailwind.config.js   # Cấu hình Tailwind CSS
├── tsconfig.json        # Cấu hình TypeScript
├── tsconfig.app.json    # Cấu hình TypeScript cho ứng dụng
├── tsconfig.node.json   # Cấu hình TypeScript cho Node.js
├── vercel.json          # Cấu hình Vercel (nếu có)
└── vite.config.ts       # Cấu hình Vite
```

## Đóng góp

Nếu bạn muốn đóng góp vào dự án, vui lòng fork repository và tạo một pull request.


