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
- Domain mặc định `https://deestudio.at`. Nếu khác, đặt `NEXT_PUBLIC_SITE_URL` trên Vercel.
- Google Analytics: đặt `NEXT_PUBLIC_GA_ID` (dạng `G-XXXXXXX`) trên Vercel. GA chỉ tải sau khi khách bấm „Alle akzeptieren“ trong cookie banner.
- Gửi sitemap lên Google Search Console sau khi trỏ domain.

## Dữ liệu chính

- Bảng giá: `src/data/prices.ts` theo PDF chính thức (10/2026). Massage toàn thân lấy từ Treatwell.
- Impressum/Datenschutz: `src/data/legal.ts`. Cần khách xác nhận „Einzelunternehmen“ và cơ quan quản lý (MBA 15).
- FAQ: `src/data/faq.ts` (trang chủ, Dee Studio, Vanilla) kèm JSON-LD FAQPage.
- Ảnh gốc khách gửi (HEIC, PDF) để ngoài repo; bản web nằm trong `public/images/studio` và `public/images/headspa`.

## Cần khách cung cấp

- Mã Google Analytics (G-...).
- Review thật từ Google/Treatwell (có đồng ý) cho `REVIEWS`. Không dùng review bịa (UWG).
- Ảnh mẫu móng làm tại Vanilla by Dee (hiện Galerie Vanilla chỉ có ảnh nội thất).
- Tên/ảnh team, xác nhận quy trình vệ sinh, duyệt bản nháp tiếng Đức.

## Ghi chú pháp lý

- Font (Josefin Sans, Montserrat, Cormorant Garamond) theo SIL OFL, self-host qua next/font, không gọi Google Fonts.
- Google Maps chỉ tải sau khi khách bấm "Karte laden".
- Đã loại ảnh có watermark của tiệm khác ("LYLY NAILS") và ảnh khuyến mãi hết hạn.
