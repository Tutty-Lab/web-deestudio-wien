# Dee Studio Wien — Website

Next.js 16 static site gộp 2 tiệm Dee Studio trong một website, phong cách đen trắng theo mon-lis.de.
Khách đã chốt phương án A (Classic).

| Studio | Brand | Adresse | Telefon | Buchung |
| --- | --- | --- | --- | --- |
| Neubaugürtel | Dee Studio (có Head Spa) | Neubaugürtel 23a, 1150 Wien | +43 660 6868888 | Treatwell `dee-studio` |
| Fasangasse | Vanilla by Dee / Hi Nails | Fasangasse 32, 1030 Wien | +43 660 9333999 | Treatwell `hi-nails-salon` |

## Cấu trúc

Trang chủ là trang giới thiệu chung; mỗi studio là một site con riêng, có menu, footer và nút đặt lịch riêng.

- `/`: trang giới thiệu chung: Thư ngỏ, Vision/Mission/Philosophie, Team, Hygiene, chọn studio, Bewertungen, Magazin
- `/magazin` và `/magazin/{slug}`: bài viết SEO (nội dung trong `src/data/magazin.ts`)
- `/dee-studio`: Dee Studio, Neubaugürtel (Nails, Lashes, Head Spa)
  - `/dee-studio/head-spa`
  - `/dee-studio/galerie` và 7 trang SEO `/dee-studio/galerie/{stil}`: french-nails-wien, chrome-nails-wien,
    nail-art-wien, xxl-naegel-wien, acrylnaegel-wien, babyboomer-naegel-wien, wimpernverlaengerung-wien
  - `/dee-studio/preise`
- `/vanilla-by-dee`: Vanilla by Dee, Fasangasse (Nails, Pediküre)
  - `/vanilla-by-dee/preise`
- `/sitemap.xml`, `/robots.txt`: sinh tự động

Mỗi studio trong `STUDIOS` (`src/data/site.ts`) tự bật các trang của mình:
`headSpa: true` thì có trang Head Spa, `gallery: true` thì có Galerie và các trang SEO,
`services` quyết định dịch vụ hiển thị. Khi Vanilla có ảnh riêng, bật `gallery` là có ngay galerie.

Nội dung trang chủ: `src/data/home.ts`. Nội dung studio: `src/data/site.ts` (studio, dịch vụ, Head Spa, giá, FAQ) và `src/data/gallery.ts` (ảnh + trang SEO).

## Thêm ảnh hoặc kiểu móng mới

1. Đặt ảnh vào `public/images/nails/` với tên mô tả có từ khóa, ví dụ `french-nails-rosa-kurz-wien.webp`.
2. Thêm một mục vào `GALLERY` trong `src/data/gallery.ts`: alt tiếng Đức mô tả rõ ảnh, `styles` là các trang SEO mà ảnh thuộc về.
3. Kiểu móng mới: thêm một mục vào `STYLES` (slug dạng `keyword-wien`, title tối đa ~60 ký tự,
   description tối đa ~155 ký tự, intro và FAQ viết riêng cho trang đó). Sitemap và footer tự cập nhật.

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
- Điền Impressum / Datenschutz (hiện là link `#`).
- Gửi sitemap lên Google Search Console sau khi trỏ domain.

## Cần khách cung cấp

- Tên và ảnh thật của team (hiện chỉ có 3 nhóm: Nail, Lash, Head Spa, không có tên người).
- Xác nhận các quy trình vệ sinh trong `HYGIENE` (`src/data/home.ts`).
- Review thật (Google/Treatwell, có sự đồng ý) để đưa vào `REVIEWS`. Không dùng review bịa (UWG). Điểm Google 4,8 trong `RATING` cần cập nhật khi thay đổi.
- Ảnh massage (hiện dùng ảnh phòng pedicure).
- Duyệt lại thư ngỏ, tầm nhìn, sứ mệnh, triết lý và 3 bài Magazin.

- Ảnh tiệm Vanilla by Dee (Fasangasse): hiện chưa có, đang dùng ảnh mẫu móng.
- Ảnh Head Spa sạch (ảnh hiện tại còn chữ của Instagram).
- Thêm ảnh cho từng kiểu móng, đặc biệt Chrome (2 ảnh), French, Babyboomer, Wimpern (3 ảnh).
  Trang SEO càng nhiều ảnh thật càng tốt.
- Bảng giá của Vanilla by Dee: hiện dùng chung bảng giá của Dee Studio, cần khách xác nhận.

## Ghi chú pháp lý

- Font (Josefin Sans, Montserrat, Cormorant Garamond) theo SIL OFL, self-host qua next/font, không gọi Google Fonts.
- Google Maps chỉ tải sau khi khách bấm "Karte laden".
- Đã loại ảnh có watermark của tiệm khác ("LYLY NAILS") và ảnh khuyến mãi hết hạn.
