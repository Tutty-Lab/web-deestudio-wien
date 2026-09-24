export const DRAFTS = [
  {
    key: "a",
    name: "Classic",
    title: "Draft A — Classic",
    desc: "Sát với Monlis nhất: hero đen trắng full màn hình, chữ in hoa lớn “JA! DAS IST DEE STUDIO!”, 2 thẻ studio dạng lưới, ảnh chuyển từ đen trắng sang màu khi hover.",
    cover: "/images/site/g-11.34.webp",
    dark: false,
  },
  {
    key: "b",
    name: "Split",
    title: "Draft B — Split",
    desc: "Hero chia đôi màn hình, mỗi nửa là một tiệm và mở rộng khi hover. Phong cách editorial trắng, dịch vụ đánh số, bảng giá nổi bật.",
    cover: "/images/site/g-10.12-1-1.webp",
    dark: false,
  },
  {
    key: "c",
    name: "Noir",
    title: "Draft C — Noir",
    desc: "Toàn trang nền đen sang trọng, hero slideshow, chữ serif nghiêng kết hợp in hoa, tab chuyển nhanh giữa 2 tiệm, dịch vụ cuộn ngang.",
    cover: "/images/ig/ig09.jpg",
    dark: true,
  },
] as const;

export type DraftKey = (typeof DRAFTS)[number]["key"];
export const isDraft = (k: string): k is DraftKey => DRAFTS.some((d) => d.key === k);
