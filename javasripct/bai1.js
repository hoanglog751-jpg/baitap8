// 1. Tạo đối tượng thuVien
const thuVien = {
    danhSachSach: [],

    // 2. Phương thức thêm sách
    themSach: function (tieuDe, tacGia, namXuatBan) {
        const sachMoi = {
            tieuDe: tieuDe,
            tacGia: tacGia,
            namXuatBan: namXuatBan,
            daMuon: false
        };

        this.danhSachSach.push(sachMoi);
        console.log(`Đã thêm sách: ${tieuDe}`);
    },

    // 3. Phương thức tìm sách theo tiêu đề
    timSach: function (tieuDe) {
        for (let sach of this.danhSachSach) {
            if (sach.tieuDe === tieuDe) {
                return sach;
            }
        }
        return null;
    },

    // 4. Phương thức mượn sách
    muonSach: function (tieuDe) {
        const sach = this.timSach(tieuDe);

        if (sach === null) {
            console.log("Không tìm thấy sách");
        } else if (sach.daMuon === false) {
            sach.daMuon = true;
            console.log(`Mượn sách "${tieuDe}" thành công`);
        } else {
            console.log(`Sách "${tieuDe}" đã được mượn`);
        }
    }
    
};
thuVien.themSach("Lập trình JavaScript", "Nguyễn Văn A", 2024);
thuVien.themSach("HTML & CSS", "Trần Văn B", 2023);

thuVien.muonSach("Lập trình JavaScript");
thuVien.muonSach("Lập trình JavaScript");
thuVien.muonSach("Python cơ bản");

