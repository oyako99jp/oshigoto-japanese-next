import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "プライバシーポリシー | おしごとJapanese",
  description: "おしごとJapaneseのプライバシーポリシーです。",
};

const BLACK = "#000000";
const WHITE = "#FFFFFF";
const BLUE = "#003f91";
const YELLOW = "#FFD500";
const YELLOW_LIGHT = "#ffe174";

export default function PrivacyPage() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        background: "#f9f9f9",
        fontFamily: "'Plus Jakarta Sans', sans-serif",
        color: BLACK,
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@500;700;800;900&display=swap');
        * { box-sizing: border-box; }

        .p-nav-back {
          color: ${BLACK};
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-weight: 800;
          font-size: 12px;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          text-decoration: none;
          white-space: nowrap;
        }
        .p-nav-back:hover { text-decoration: underline; }

        .p-doc-link {
          display: inline-block;
          color: ${BLUE};
          font-weight: 700;
          font-size: 14px;
          text-decoration: none;
          margin-bottom: 32px;
        }
        .p-doc-link:hover { text-decoration: underline; }

        .p-section { margin-top: 48px; }
        .p-section:first-child { margin-top: 0; }

        .p-section h2 {
          font-size: clamp(16px, 2.5vw, 20px);
          font-weight: 900;
          color: ${BLUE};
          margin: 0 0 16px;
          letter-spacing: -0.02em;
        }
        .p-section h2 span {
          display: block;
          font-size: 12px;
          font-weight: 700;
          color: ${BLACK};
          opacity: 0.6;
          margin-top: 2px;
        }
        .p-section p {
          font-weight: 500;
          line-height: 1.9;
          font-size: clamp(13px, 1.5vw, 15px);
          margin: 0 0 12px;
        }
        .p-section p:last-child { margin-bottom: 0; }
        .p-section a {
          color: ${BLUE};
          font-weight: 700;
          word-break: break-all;
        }

        .p-cta {
          display: inline-flex;
          align-items: center;
          gap: 16px;
          background: ${YELLOW_LIGHT};
          border: 4px solid ${BLACK};
          box-shadow: 8px 8px 0px 0px rgba(0,0,0,1);
          padding: 16px 32px;
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-weight: 900;
          font-size: clamp(13px, 2vw, 16px);
          text-transform: uppercase;
          letter-spacing: -0.01em;
          text-decoration: none;
          color: ${BLACK};
          transition: transform 0.075s, box-shadow 0.075s;
        }
        .p-cta:hover {
          transform: translate(4px, 4px);
          box-shadow: 4px 4px 0px 0px rgba(0,0,0,1);
        }
        .p-cta:active {
          transform: translate(8px, 8px);
          box-shadow: none;
        }
      `}</style>

      {/* ── Nav ── */}
      <nav
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
          padding: "24px 32px",
          position: "sticky",
          top: 0,
          zIndex: 50,
          background: WHITE,
          borderBottom: `4px solid ${BLACK}`,
        }}
      >
        <a href="https://oshigoto-japanese.com/" style={{ display: "flex", alignItems: "center" }}>
          <img
            src="/logo.png"
            alt="おしごとJapanese"
            style={{ height: 28, maxWidth: "55vw", objectFit: "contain", display: "block" }}
          />
        </a>
      </nav>

      {/* ── Main ── */}
      <main
        style={{
          maxWidth: 896,
          width: "100%",
          margin: "0 auto",
          padding: "clamp(32px, 5vw, 48px) clamp(16px, 4vw, 24px)",
        }}
      >
        {/* Document Card */}
        <div
          style={{
            background: WHITE,
            border: `4px solid ${BLACK}`,
            boxShadow: "8px 8px 0px 0px rgba(0,0,0,1)",
            padding: "clamp(24px, 5vw, 64px)",
          }}
        >
          <h1
            style={{
              fontSize: "clamp(26px, 5vw, 44px)",
              fontWeight: 900,
              color: BLUE,
              letterSpacing: "-0.03em",
              lineHeight: 1.1,
              margin: "0 0 48px",
            }}
          >
            プライバシーポリシー / Privacy Policy
          </h1>

          <div>
            {/* 1. 運営者 */}
            <div className="p-section">
              <h2>
                1. 運営者について
                <span>Operator Info</span>
              </h2>
              <p>
                当サイト「おしごとJAPANESE」は、ビジネス日本語の習得を目指す学習者のために運営されています。
                利用者の皆様のプライバシー保護を最優先事項として取り組んでいます。
              </p>
              <p>This website &ldquo;Oshigoto Japanese&rdquo; is operated for learners aiming to master business Japanese.</p>
            </div>

            {/* 2. 個人情報 */}
            <div className="p-section">
              <h2>
                2. 個人情報の取り扱いについて
                <span>Personal Information</span>
              </h2>
              <p>
                お問い合わせフォームにご入力いただいたお名前・メールアドレス・お問い合わせ内容は、お問い合わせへの返答のみに使用し、
                目的以外では利用いたしません。
              </p>
              <p>
                フォームはGoogleフォームを使用しており、入力情報はGoogleのサーバーに保存されます。
              </p>
              <p>
                Googleのプライバシーポリシー：{" "}
                <a
                  href="https://policies.google.com/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://policies.google.com/privacy
                </a>
              </p>
            </div>

            {/* 3. 広告 */}
            <div className="p-section">
              <h2>
                3. 広告について
                <span>Advertisements</span>
              </h2>
              <p>
                当サイトでは、第三者配信の広告サービス（Google AdSense等）を利用しています。
              </p>
              <p>
                広告配信事業者は、ユーザーの興味に応じた広告を表示するため、クッキー（Cookie）を使用することがあります。
                クッキーを無効にすることで収集を拒否することが可能です。
              </p>
            </div>

            {/* 4. アクセス解析 */}
            <div className="p-section">
              <h2>
                4. アクセス解析について
                <span>Analytics</span>
              </h2>
              <p>
                当サイトでは、Googleによるアクセス解析ツール「Googleアナリティクス」を利用しています。
                このツールはトラフィックデータの収集のためにクッキーを使用しています。
                このデータは匿名で収集されており、個人を特定するものではありません。
                クッキーを無効にすることで収集を拒否することが可能です。
              </p>
            </div>

            {/* 5. 免責事項 */}
            <div className="p-section">
              <h2>
                5. 免責事項
                <span>Disclaimer</span>
              </h2>
              <p>
                当サイトのコンテンツ・情報につきまして、可能な限り正確な情報を掲載するよう努めておりますが、
                誤情報が入り込んだり、情報が古くなっていることもございます。当サイトに掲載された内容によって生じた損害等の一切の責任を負いかねますのでご了承ください。
              </p>
              <p>
                また、本免責事項、および当サイトに掲載しているすべての記事は、予告なしに変更・削除されることがあります。あらかじめご了承下さい。
              </p>
            </div>

            {/* 6. ポリシー変更 */}
            <div className="p-section">
              <h2>
                6. プライバシーポリシーの変更
                <span>Changes</span>
              </h2>
              <p>
                当サイトは、個人情報に関して適用される日本の法令を遵守するとともに、本ポリシーの内容を適宜見直しその改善に努めます。
                修正された最新のプライバシーポリシーは常に本ページにて開示されます。本ポリシーは予告なく変更する場合があります。
              </p>
            </div>
          </div>

          {/* Date line */}
          <div
            style={{
              marginTop: 48,
              paddingTop: 24,
              borderTop: "2px solid rgba(0,0,0,0.1)",
              fontSize: 13,
              fontWeight: 700,
              opacity: 0.6,
              fontStyle: "italic",
            }}
          >
            最終更新: 2024.05.20
          </div>
        </div>

        {/* CTA below card */}
        <div style={{ display: "flex", justifyContent: "center", marginTop: 48 }}>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLScDkxzSlprADqEgGtR0XA3kNUofXgL-HMoXXc5yZ0KBxBhBCw/viewform?usp=dialog"
            target="_blank"
            rel="noopener noreferrer"
            className="p-cta"
          >
            More Questions? お問い合わせはこちらから
            <span style={{ fontSize: "1.4em", fontWeight: 900, lineHeight: 1 }}>→</span>
          </a>
        </div>
      </main>

      {/* ── Footer ── */}
      <footer
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
          padding: "clamp(24px, 4vw, 32px) clamp(16px, 4vw, 32px)",
          gap: 16,
          background: YELLOW,
          borderTop: `4px solid ${BLACK}`,
          fontFamily: "'Plus Jakarta Sans', sans-serif",
        }}
      >
        <div
          style={{
            fontWeight: 900,
            fontSize: 11,
            color: BLACK,
            textTransform: "uppercase",
            letterSpacing: "0.1em",
          }}
        >
          © おしごとJAPANESE
        </div>
        <div style={{ display: "flex", gap: 32 }}>
          <a
            href="/privacy"
            style={{
              color: BLACK,
              fontWeight: 900,
              fontSize: 11,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              textDecoration: "none",
            }}
          >
            Privacy Policy
          </a>
          <a
            href="/contact"
            style={{
              color: BLACK,
              fontWeight: 900,
              fontSize: 11,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              textDecoration: "none",
            }}
          >
            Contact
          </a>
        </div>
      </footer>
    </div>
  );
}
