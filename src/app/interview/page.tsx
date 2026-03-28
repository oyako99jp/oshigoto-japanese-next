import type { Metadata } from "next";
import InterviewPageClient from "./InterviewPageClient";

export const metadata: Metadata = {
  title: "就職・転職面接のための日本語 | おしごとJapanese",
  description: "日本での就職・転職面接に特化した日本語学習コース。自己PR・志望動機・よくある質問・ビジネス敬語・逆質問など、面接の全ステップを10ユニットで学習。Japanese for Job Interviews.",
  alternates: {
    canonical: "https://oshigoto-japanese.com/interview",
  },
};

export default function InterviewPage() {
  return <InterviewPageClient />;
}
