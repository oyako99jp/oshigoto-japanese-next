import type { Metadata } from "next";
import { unitDataMap } from "../../data";
import UnitPageClient from "./UnitPageClient";

type Props = { params: Promise<{ id: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const unit = unitDataMap[Number(id)];
  if (!unit) return {};
  return {
    title: `Unit${id} | ITエンジニアのためのビジネス日本語 | おしごとJapanese`,
    description: `Unit${id}「${unit.title}」のビジネス日本語を学びます。単語・会話・クイズ・ロールプレイで実践的に練習できます。`,
  };
}

export default async function UnitPage({ params }: Props) {
  const { id } = await params;
  return <UnitPageClient id={id} />;
}
