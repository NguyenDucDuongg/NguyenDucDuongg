
const http = require("http");

const server = http.createServer((req, res) => {
    const url = new URL(req.url, `http://${req.headers.host}`);

    res.setHeader("Content-Type", "text/plain; charset=utf-8");

    if (url.pathname === "/hello") {
        const name = url.searchParams.get("name");

        if (!name || !name.trim()) {
            res.statusCode = 400;
            res.end("Loi: Thieu tham so name!");
            return;
        }

        res.end(`Xin chao ${name.trim()}`);
    }

    // Xu ly duong dan /sum
    else if (url.pathname === "/sum") {
        const a = url.searchParams.get("a");
        const b = url.searchParams.get("b");

        if (a === null || b === null || a.trim() === "" || b.trim() === "") {
            res.statusCode = 400;
            res.end("Loi: Vui long nhap day du tham so a va b!");
            return;
        }

        const soA = Number(a);
        const soB = Number(b);

        if (!Number.isFinite(soA) || !Number.isFinite(soB)) {
            res.statusCode = 400;
            res.end("Loi: a va b phai la so hop le!");
            return;
        }

        res.end(`Tong = ${soA + soB}`);
    }

    else {
        res.statusCode = 404;
        res.end("Loi: Khong tim thay duong dan!");
    }
});

server.listen(3001, () => {
    console.log("Web Server dang chay tai http://localhost:3001");
});
