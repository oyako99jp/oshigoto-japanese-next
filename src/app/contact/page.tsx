import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "お問い合わせ・運営者情報 | おしごとJapanese",
  description: "おしごとJapaneseへのお問い合わせと運営者情報ページです。",
};

export default function ContactPage() {
  return (
    <div style={{ minHeight: "100vh", width: "100vw", background: "#f5f5f5", fontFamily: "'Segoe UI', sans-serif", display: "flex", flexDirection: "column" }}>
      <div style={{ width: "100%", maxWidth: 800, margin: "0 auto", padding: "32px 24px 48px", flex: 1 }}>
        <div style={{ background: "#ffffff", padding: 36, boxShadow: "0 4px 24px rgba(0,0,0,0.08)" }}>
          <a href="/it" style={{ color: "#14469e", fontSize: 14, fontWeight: 600, marginBottom: 20, display: "inline-block", textDecoration: "none" }}>← ホームに戻る / Back to Home</a>
          <h1 style={{ fontSize: 24, fontWeight: 800, color: "#14469e", marginBottom: 12 }}>お問い合わせ / Contact Us</h1>
          <p style={{ fontSize: 14, color: "#555555", lineHeight: 1.8, marginBottom: 24 }}>ご質問・ご意見はこちらからお送りください。/ Please send your questions or feedback using the form below.</p>
          <iframe src="https://docs.google.com/forms/d/e/1FAIpQLScDkxzSlprADqEgGtR0XA3kNUofXgL-HMoXXc5yZ0KBxBhBCw/viewform?embedded=true" width="100%" height="691" frameBorder={0} style={{ border: 0 }}>読み込んでいます…</iframe>

          <div style={{ marginTop: 48, paddingTop: 32, borderTop: "1px solid #e0e0e0" }}>
            <h2 style={{ fontSize: 18, fontWeight: 800, color: "#14469e", marginBottom: 20 }}>運営者情報 / About This Site</h2>
            <table style={{ width: "100%", fontSize: 14, color: "#333333", borderCollapse: "collapse" }}>
              <tbody>
                <tr style={{ borderBottom: "1px solid #f0f0f0" }}>
                  <th style={{ textAlign: "left", padding: "12px 0", fontWeight: 700, width: "30%", color: "#555555" }}>サイト名</th>
                  <td style={{ padding: "12px 0" }}>おしごとJapanese</td>
                </tr>
                <tr style={{ borderBottom: "1px solid #f0f0f0" }}>
                  <th style={{ textAlign: "left", padding: "12px 0", fontWeight: 700, color: "#555555" }}>運営者</th>
                  <td style={{ padding: "12px 0" }}>おしごとJAPANESE 運営委員会</td>
                </tr>
                <tr style={{ borderBottom: "1px solid #f0f0f0" }}>
                  <th style={{ textAlign: "left", padding: "12px 0", fontWeight: 700, color: "#555555" }}>サイトURL</th>
                  <td style={{ padding: "12px 0" }}>
                    <a href="https://oshigoto-japanese.com" style={{ color: "#14469e" }}>https://oshigoto-japanese.com</a>
                  </td>
                </tr>
                <tr>
                  <th style={{ textAlign: "left", padding: "12px 0", fontWeight: 700, color: "#555555", verticalAlign: "top" }}>目的</th>
                  <td style={{ padding: "12px 0", lineHeight: 1.8 }}>日本で働く外国人ITエンジニアを対象に、職場で使えるビジネス日本語を提供することを目的としています。</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
