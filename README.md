# Dee Studio — Website Redesign (Drafts)

Next.js 16 static site gộp 2 tiệm trong một website, phong cách đen trắng theo mon-lis.de.
Base code từ `Tutty-Lab/web-kyonails-frankfurt`.

| Studio | Brand | Adresse | Telefon | Buchung |
| --- | --- | --- | --- | --- |
| Neubaugürtel | Dee Studio | Neubaugürtel 23a, 1150 Wien | +43 660 6868888 | Treatwell `dee-studio` |
| Fasangasse | Vanilla by Dee / Hi Nails | Fasangasse 32, 1030 Wien | +43 660 9333999 | Treatwell `hi-nails-salon` |

## Routes

- `/` — trang chọn draft (cho khách review)
- `/a`, `/b`, `/c` — 3 draft trang chủ (Classic / Split / Noir)
- `/{draft}/studio/{neubauguertel|fasangasse}` — trang từng studio
- `/{draft}/preise` — bảng giá

Toàn bộ nội dung nằm trong `src/data/site.ts`: studio, dịch vụ, bảng giá, gallery, FAQ.

## Dev

```bash
npm install
npm run dev
npm run build   # static export → ./out
```

## Sau khi khách chốt draft

1. Chuyển home của draft đã chọn thành `src/app/page.tsx`; bỏ `[draft]`, `DraftBar` và `drafts.ts`.
2. Bỏ `robots: noindex` trong `src/app/layout.tsx`.
3. Điền Impressum / Datenschutz (hiện đang là link `#`).
4. `./out` là static HTML, deploy được trên Vercel hoặc upload thẳng lên Hostinger (`public_html`).

## Cần khách xác nhận

- Giá Lashes / Head Spa, và mỗi tiệm có những dịch vụ nào.
- Ảnh Instagram đang gán cho Fasangasse; ảnh web cũ gán cho Neubaugürtel.
- Giờ mở cửa Fasangasse lấy theo Google Maps: Mo–Fr 9–19, Sa 9–18.
- Nội dung FAQ / Garantie đang là bản nháp.
