import type { Metadata } from "next";
import ITPageClient from "./ITPageClient";

export const metadata: Metadata = {
  title: "おしごとJapanese | ITエンジニアのためのビジネス日本語 Business Japanese for IT Engineers",
  description: "ITエンジニア向けの職場日本語学習コース。朝会・コードレビュー・クライアント対応など、実際の職場で使う表現を20のユニットで学びます。Business Japanese course for IT engineers working in Japan.",
  alternates: {
    canonical: "https://oshigoto-japanese.com/it",
  },
};

export default function ITPage() {
  return <ITPageClient />;
}
