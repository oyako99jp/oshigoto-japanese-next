import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "お問い合わせ | おしごとJapanese",
  description: "おしごとJapaneseへのお問い合わせと運営者情報です。",
};

const BLACK = "#000000";
const WHITE = "#FFFFFF";
const BLUE = "#0055BF";
const YELLOW = "#FFD500";
const GRAY_CELL = "#e2e2e2";

export default function ContactPage() {
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

        .c-nav-back {
          color: ${BLACK};
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-weight: 800;
          font-size: 12px;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          text-decoration: none;
          white-space: nowrap;
        }
        .c-nav-back:hover { text-decoration: underline; }

        .c-table-row {
          display: grid;
          grid-template-columns: 1fr;
          border-bottom: 4px solid ${BLACK};
        }
        .c-table-row:last-child { border-bottom: none; }
        @media (min-width: 640px) {
          .c-table-row { grid-template-columns: 1fr 2fr; }
          .c-cell-label { border-bottom: none; border-right: 4px solid ${BLACK}; }
        }

        .c-cell-label {
          background: ${GRAY_CELL};
          padding: 24px;
          border-bottom: 4px solid ${BLACK};
        }
        .c-cell-value {
          background: ${WHITE};
          padding: 24px;
          display: flex;
          align-items: center;
        }

        .c-cta {
          display: flex;
          width: 100%;
          background: ${BLUE};
          color: ${WHITE};
          border: 4px solid ${BLACK};
          box-shadow: 8px 8px 0px 0px rgba(0,0,0,1);
          padding: 24px 40px;
          align-items: center;
          justify-content: center;
          gap: 8px;
          flex-direction: column;
          text-decoration: none;
          cursor: pointer;
          transition: transform 0.075s, box-shadow 0.075s;
        }
        .c-cta:hover {
          transform: translate(4px, 4px);
          box-shadow: 4px 4px 0px 0px rgba(0,0,0,1);
        }
        .c-cta:active {
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
          maxWidth: 1024,
          width: "100%",
          margin: "0 auto",
          padding: "clamp(40px, 6vw, 96px) clamp(16px, 4vw, 24px)",
        }}
      >
        {/* Hero */}
        <section style={{ marginBottom: 80 }}>
          <h1
            style={{
              fontSize: "clamp(36px, 7vw, 72px)",
              fontWeight: 900,
              color: BLACK,
              textTransform: "uppercase",
              lineHeight: 1.0,
              letterSpacing: "-0.04em",
              margin: "0 0 32px",
            }}
          >
            CONTACT / お問い合わせ
          </h1>
          <div style={{ width: "100%", height: 16, background: BLACK }} />
        </section>

        {/* Company Details Card */}
        <div style={{ marginBottom: 32 }}>
          <div
            style={{
              border: `4px solid ${BLACK}`,
              background: WHITE,
              boxShadow: "12px 12px 0px 0px rgba(0,0,0,1)",
              overflow: "hidden",
            }}
          >
            {/* Card header */}
            <div
              style={{
                background: BLACK,
                color: WHITE,
                padding: "16px 24px",
              }}
            >
              <h2
                style={{
                  fontWeight: 900,
                  fontSize: "clamp(16px, 2.5vw, 22px)",
                  textTransform: "uppercase",
                  letterSpacing: "-0.02em",
                  margin: 0,
                }}
              >
                ABOUT THIS SITE / 運営者情報
              </h2>
            </div>

            {/* Table rows */}
            <div>
              {/* Site Name */}
              <div className="c-table-row">
                <div className="c-cell-label">
                  <span
                    style={{
                      fontWeight: 900,
                      fontSize: 12,
                      textTransform: "uppercase",
                      letterSpacing: "0.05em",
                      display: "block",
                    }}
                  >
                    Site Name
                  </span>
                  <span style={{ fontWeight: 700, fontSize: 16 }}>サイト名</span>
                </div>
                <div className="c-cell-value">
                  <span
                    style={{
                      fontWeight: 900,
                      fontSize: "clamp(18px, 3vw, 24px)",
                      textTransform: "uppercase",
                      color: BLUE,
                    }}
                  >
                    おしごとJapanese
                  </span>
                </div>
              </div>

              {/* Operator */}
              <div className="c-table-row">
                <div className="c-cell-label">
                  <span
                    style={{
                      fontWeight: 900,
                      fontSize: 12,
                      textTransform: "uppercase",
                      letterSpacing: "0.05em",
                      display: "block",
                    }}
                  >
                    Operator
                  </span>
                  <span style={{ fontWeight: 700, fontSize: 16 }}>運営者</span>
                </div>
                <div className="c-cell-value">
                  <div>
                    <div style={{ fontWeight: 700, fontSize: "clamp(14px, 2vw, 18px)" }}>
                      おしごとJAPANESE 運営委員会
                    </div>
                    <div style={{ fontWeight: 500, fontSize: 13, color: "#555", marginTop: 4 }}>
                      Oshigoto Japanese Editorial Committee
                    </div>
                  </div>
                </div>
              </div>

              {/* URL */}
              <div className="c-table-row">
                <div className="c-cell-label">
                  <span
                    style={{
                      fontWeight: 900,
                      fontSize: 12,
                      textTransform: "uppercase",
                      letterSpacing: "0.05em",
                      display: "block",
                    }}
                  >
                    URL
                  </span>
                  <span style={{ fontWeight: 700, fontSize: 16 }}>ウェブサイト</span>
                </div>
                <div className="c-cell-value">
                  <a
                    href="https://oshigoto-japanese.com"
                    style={{
                      fontWeight: 700,
                      fontSize: "clamp(13px, 2vw, 18px)",
                      textDecoration: "underline",
                      textDecorationColor: YELLOW,
                      textDecorationThickness: 4,
                      textUnderlineOffset: 4,
                      color: BLACK,
                      wordBreak: "break-all",
                    }}
                  >
                    https://oshigoto-japanese.com
                  </a>
                </div>
              </div>

              {/* Purpose */}
              <div className="c-table-row">
                <div className="c-cell-label">
                  <span
                    style={{
                      fontWeight: 900,
                      fontSize: 12,
                      textTransform: "uppercase",
                      letterSpacing: "0.05em",
                      display: "block",
                    }}
                  >
                    Purpose
                  </span>
                  <span style={{ fontWeight: 700, fontSize: 16 }}>目的</span>
                </div>
                <div className="c-cell-value">
                  <div>
                    <div style={{ fontWeight: 700, fontSize: "clamp(13px, 1.8vw, 16px)", lineHeight: 1.7 }}>
                      日本で働く外国人・働きたい外国人のための、職場で使えるビジネス日本語を提供。
                    </div>
                    <div style={{ fontWeight: 500, fontSize: 13, color: "#555", marginTop: 4, lineHeight: 1.6 }}>
                      Practical business Japanese for foreign nationals working or looking to work in Japan.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLScDkxzSlprADqEgGtR0XA3kNUofXgL-HMoXXc5yZ0KBxBhBCw/viewform?usp=dialog"
          target="_blank"
          rel="noopener noreferrer"
          className="c-cta"
        >
          <span
            style={{
              fontWeight: 900,
              fontSize: "clamp(20px, 4vw, 30px)",
              textTransform: "uppercase",
              letterSpacing: "-0.03em",
            }}
          >
            問い合わせフォームを開く
          </span>
          <span style={{ fontWeight: 700, fontSize: "clamp(14px, 2vw, 20px)", opacity: 0.8 }}>
            Open Contact Form
          </span>
          <span
            style={{
              fontSize: "clamp(28px, 4vw, 40px)",
              fontWeight: 900,
              lineHeight: 1,
              marginTop: 8,
            }}
          >
            →
          </span>
        </a>
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
          padding: "clamp(24px, 4vw, 48px) clamp(16px, 4vw, 32px)",
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
        <div style={{ display: "flex", gap: 40 }}>
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
