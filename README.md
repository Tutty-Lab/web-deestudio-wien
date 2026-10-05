# Dee Studio Wien — Website

Next.js 16 static site gộp 2 tiệm Dee Studio trong một website, phong cách đen trắng theo mon-lis.de.
Khách đã chốt phương án A (Classic).

| Studio | Brand | Adresse | Telefon | Buchung |
| --- | --- | --- | --- | --- |
| Neubaugürtel | Dee Studio (có Head Spa) | Neubaugürtel 23a, 1150 Wien | +43 660 6868888 | Treatwell `dee-studio` |
| Fasangasse | Vanilla by Dee / Hi Nails | Fasangasse 32, 1030 Wien | +43 660 9333999 | Treatwell `hi-nails-salon` |

## Cấu trúc (spec 04.10.2026)

Site chung (Start) + 2 sub-site studio có cùng bộ trang. Tổng 20 trang.

- `/`: Hero, chọn studio, thư ngỏ (rút gọn), Vision/Mission (rút gọn), Hygiene (3/6), Team, Bewertungen (rút gọn), Magazin
- `/ueber-uns`, `/philosophie`, `/hygiene`: nội dung đầy đủ, khối „Mehr über Dee Studio“
- `/bewertungen`: điểm Google theo studio + review thật. Khi `REVIEWS` rỗng: noindex, không vào sitemap, không xuất JSON-LD Review
- `/magazin`, `/magazin/{slug}`: 3 bài
- `/impressum`, `/datenschutz`
- `/dee-studio`: Übersicht, `/leistungen`, `/preise`, `/galerie`, `/head-spa`
- `/vanilla-by-dee`: Übersicht, `/leistungen`, `/preise`, `/galerie` (noindex đến khi có ảnh riêng)

Landing studio: Hero, bảng giá đầy đủ (lọc theo nhóm, mục menu „Preise“ nhảy tới đây), Leistungen, Head Spa (Dee), Das Studio, Galerie (8 ảnh), FAQ, Kontakt, khối về Start.

Dữ liệu:
- `src/data/site.ts`: `STUDIOS` (mỗi studio có `prices`, `services`, cờ `headSpa`), `SERVICES` (mô tả Leistungen, thời gian), `HEAD_SPA`
- `src/data/gallery.ts`: `GALLERY` (mỗi ảnh có `studio` và `styles`), `STYLES` (bộ lọc), `GALLERY_TEXT`
- `src/data/home.ts`: thư ngỏ, giá trị, team, hygiene, `REVIEWS`, `RATINGS`
- `src/data/magazin.ts`: bài viết

## Thêm ảnh

1. Đặt ảnh vào `public/images/...` với tên mô tả có từ khóa.
2. Thêm vào `GALLERY`: alt tiếng Đức, `studio` (slug), `styles` (slug bộ lọc). Galerie của studio chỉ hiện ảnh của chính nó; khi Vanilla có ảnh, trang tự bỏ noindex và vào sitemap.

## Dev

```bash
npm install
npm run dev
npm run build   # static export → ./out
```

## Deploy

Connect repo trên Vercel: Framework Preset **Next.js**, để mặc định các thiết lập build.
`./out` là HTML tĩnh, cũng có thể upload thẳng lên Hostinger (`public_html`).

## Trước khi go-live

- Bỏ `robots: noindex` trong `src/app/layout.tsx`.
- Domain mặc định là `https://deestudio.at` (dùng cho canonical, sitemap, JSON-LD). Nếu khác, đặt
  `NEXT_PUBLIC_SITE_URL` trên Vercel.
- Điền các mục `[bitte ergänzen]` trong `/impressum` (chủ doanh nghiệp, UID, GISA/Firmenbuch, Gewerbe, Behörde) và duyệt `/datenschutz`.
- Gửi sitemap lên Google Search Console sau khi trỏ domain.

## Cần khách cung cấp

- Tên và ảnh thật của team (hiện chỉ có 3 nhóm: Nail, Lash, Head Spa, không có tên người).
- Xác nhận các quy trình vệ sinh trong `HYGIENE` (`src/data/home.ts`).
- Review thật (Google/Treatwell, có sự đồng ý) để đưa vào `REVIEWS`. Không dùng review bịa (UWG). Điểm Google 4,8 trong `RATING` cần cập nhật khi thay đổi.
- Ảnh massage (hiện dùng ảnh phòng pedicure).
- Duyệt lại thư ngỏ, tầm nhìn, sứ mệnh, triết lý và 3 bài Magazin.

- Ảnh tiệm Vanilla by Dee (Fasangasse): hiện chưa có, đang dùng ảnh mẫu móng.
- Ảnh Head Spa sạch (ảnh hiện tại còn chữ của Instagram).
- Mô tả dài và thời gian cho từng dịch vụ (trang Leistungen, hiện là bản nháp).
- Điểm Google của Vanilla by Dee.
- Bảng giá Vanilla lấy từ Treatwell hi-nails-salon (giá gốc trước giảm giờ thấp điểm), cần khách xác nhận.

## Ghi chú pháp lý

- Font (Josefin Sans, Montserrat, Cormorant Garamond) theo SIL OFL, self-host qua next/font, không gọi Google Fonts.
- Google Maps chỉ tải sau khi khách bấm "Karte laden".
- Đã loại ảnh có watermark của tiệm khác ("LYLY NAILS") và ảnh khuyến mãi hết hạn.
