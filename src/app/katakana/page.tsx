import type { Metadata } from "next";
import KatakanaPageClient from "./KatakanaPageClient";

export const metadata: Metadata = {
  title: "おしごとJapanese | 仕事のカタカナ語 Business Katakana",
  description: "職場でよく使うカタカナ語を10のユニットで学べます。単語・クイズで実践的に練習できます。Learn business katakana words used in Japanese workplaces.",
  alternates: {
    canonical: "https://oshigoto-japanese.com/katakana",
  },
};

export default function KatakanaPage() {
  return <KatakanaPageClient />;
}
