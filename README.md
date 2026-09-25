# Dee Studio Wien — Website

Next.js 16 static site gộp 2 tiệm Dee Studio trong một website, phong cách đen trắng theo mon-lis.de.
Khách đã chốt phương án A (Classic).

| Studio | Brand | Adresse | Telefon | Buchung |
| --- | --- | --- | --- | --- |
| Neubaugürtel | Dee Studio (có Head Spa) | Neubaugürtel 23a, 1150 Wien | +43 660 6868888 | Treatwell `dee-studio` |
| Fasangasse | Vanilla by Dee / Hi Nails | Fasangasse 32, 1030 Wien | +43 660 9333999 | Treatwell `hi-nails-salon` |

## Routes

- `/`: trang chủ, có khối Head Spa nổi bật ngay dưới hero
- `/head-spa`: landing page quảng bá Head Spa (Dee Studio Neubaugürtel)
- `/studio/neubauguertel`, `/studio/fasangasse`: trang từng tiệm
- `/preise`: bảng giá

Toàn bộ nội dung nằm trong `src/data/site.ts`: studio, dịch vụ, Head Spa, bảng giá, gallery, FAQ.

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
- Điền Impressum / Datenschutz (hiện là link `#`).
- Xác nhận giá Head Spa và Lashes (hiện để "auf Anfrage").
- Xác nhận ảnh cho từng tiệm; ảnh hiện tại là ảnh demo lấy từ Instagram và web cũ.
- Nội dung Head Spa, FAQ, Garantie đang là bản nháp.
