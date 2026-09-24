import HomeA from "@/drafts/HomeA";
import HomeB from "@/drafts/HomeB";
import HomeC from "@/drafts/HomeC";

export default async function DraftHome({ params }: { params: Promise<{ draft: string }> }) {
  const { draft } = await params;
  if (draft === "b") return <HomeB />;
  if (draft === "c") return <HomeC />;
  return <HomeA />;
}
