import type { Metadata } from "next";
import { katakanaDataMap } from "../../data";
import KatakanaUnitPageClient from "./KatakanaUnitPageClient";

type Props = { params: Promise<{ id: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const unit = katakanaDataMap[Number(id)];
  if (!unit) return {};
  return {
    title: `Unit${id} | 仕事のカタカナ語 | おしごとJapanese`,
    description: `Unit${id}「${unit.title}」のビジネスカタカナ語を学びます。単語カードとクイズで実践的に練習できます。`,
  };
}

export default async function KatakanaUnitPage({ params }: Props) {
  const { id } = await params;
  return <KatakanaUnitPageClient id={id} />;
}
