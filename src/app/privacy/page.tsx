import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "プライバシーポリシー | おしごとJapanese",
  description: "おしごとJapaneseのプライバシーポリシーページです。",
};

export default function PrivacyPage() {
  return (
    <div style={{ minHeight: "100vh", width: "100vw", background: "#f5f5f5", fontFamily: "'Segoe UI', sans-serif", display: "flex", flexDirection: "column" }}>
      <div style={{ width: "100%", maxWidth: 800, margin: "0 auto", padding: "32px 24px 48px", flex: 1 }}>
        <div style={{ background: "#ffffff", padding: 36, boxShadow: "0 4px 24px rgba(0,0,0,0.08)" }}>
          <a href="/it" style={{ color: "#14469e", fontSize: 14, fontWeight: 600, marginBottom: 20, display: "inline-block", textDecoration: "none" }}>← ホームに戻る / Back to Home</a>
          <h1 style={{ fontSize: 24, fontWeight: 800, color: "#14469e", marginBottom: 28 }}>プライバシーポリシー / Privacy Policy</h1>
          <div style={{ fontSize: 14, color: "#333333", lineHeight: 1.9 }}>
            <h2 style={{ fontSize: 16, fontWeight: 700, color: "#14469e", marginBottom: 8, marginTop: 24 }}>1. 運営者について</h2>
            <p style={{ margin: "0 0 8px" }}>当サイト「おしごとJapanese」は、日本語学習コンテンツを提供するウェブサイトです。</p>
            <p style={{ margin: 0 }}>This website "Oshigoto Japanese" provides Japanese language learning content.</p>
            <h2 style={{ fontSize: 16, fontWeight: 700, color: "#14469e", marginBottom: 8, marginTop: 24 }}>2. 個人情報の取り扱いについて</h2>
            <p style={{ margin: "0 0 8px" }}>お問い合わせフォームにご入力いただいたお名前・メールアドレス・お問い合わせ内容は、お問い合わせへの返答のみに使用し、第三者への提供は行いません。</p>
            <p style={{ margin: "0 0 8px" }}>フォームはGoogleフォームを使用しており、入力情報はGoogleのサーバーに保存されます。</p>
            <p style={{ margin: 0 }}>Googleのプライバシーポリシーについては以下をご参照ください：<br /><a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" style={{ color: "#14469e" }}>https://policies.google.com/privacy</a></p>
            <h2 style={{ fontSize: 16, fontWeight: 700, color: "#14469e", marginBottom: 8, marginTop: 24 }}>3. 広告について</h2>
            <p style={{ margin: "0 0 8px" }}>当サイトはGoogle AdSenseを利用しています。</p>
            <p style={{ margin: 0 }}>Googleはcookieを使用してユーザーに適切な広告を配信します。詳細はGoogleのポリシーをご参照ください。</p>
            <h2 style={{ fontSize: 16, fontWeight: 700, color: "#14469e", marginBottom: 8, marginTop: 24 }}>4. アクセス解析について</h2>
            <p style={{ margin: "0 0 8px" }}>当サイトはGoogle Analyticsを使用してアクセス情報を収集しています。</p>
            <p style={{ margin: 0 }}>収集される情報は匿名であり、個人を特定するものではありません。</p>
            <h2 style={{ fontSize: 16, fontWeight: 700, color: "#14469e", marginBottom: 8, marginTop: 24 }}>5. 免責事項</h2>
            <p style={{ margin: "0 0 8px" }}>当サイトのコンテンツは正確性を期していますが、内容の完全性・正確性を保証するものではありません。</p>
            <h2 style={{ fontSize: 16, fontWeight: 700, color: "#14469e", marginBottom: 8, marginTop: 24 }}>6. プライバシーポリシーの変更</h2>
            <p style={{ margin: 0 }}>本ポリシーは予告なく変更する場合があります。</p>
          </div>
        </div>
      </div>
    </div>
  );
}
