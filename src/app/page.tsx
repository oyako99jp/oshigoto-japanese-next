"use client";

import { useRouter } from "next/navigation";

const blue = "#0055BF";
const red = "#E3000B";
const yellow = "#FFD500";
const black = "#000000";
const white = "#FFFFFF";
const shadowBlack = "8px 8px 0px 0px #000000";

export default function TopPage() {
  const router = useRouter();

  return (
    <div style={{ background: white, fontFamily: "'Plus Jakarta Sans', sans-serif", color: black, minWidth: 0 }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@700;800&family=Manrope:wght@800&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,700,0,0&display=swap');
        * { box-sizing: border-box; }
        .material-symbols-outlined { font-family: 'Material Symbols Outlined'; font-variation-settings: 'FILL' 0, 'wght' 700, 'GRAD' 0, 'opsz' 24; font-style: normal; display: inline-block; line-height: 1; text-transform: none; letter-spacing: normal; word-wrap: normal; white-space: nowrap; direction: ltr; }
        .tp-nav-link { font-family: 'Plus Jakarta Sans', sans-serif; font-weight: 900; text-transform: uppercase; letter-spacing: 0.1em; font-size: 14px; color: #000000; text-decoration: none; transition: color 0.1s; }
        .tp-nav-link:hover { color: #0055BF; }
        .tp-hover-shift { transition: transform 0.1s, box-shadow 0.1s; }
        .tp-hover-shift:hover { transform: translate(-4px, -4px); box-shadow: 12px 12px 0px 0px #000000; }
        .tp-hover-shift:active { transform: translate(2px, 2px); box-shadow: 4px 4px 0px 0px #000000; }
        .tp-course-card { transition: transform 0.2s; }
        .tp-course-card:hover { transform: translateY(-8px); }
        .tp-feature-card { transition: transform 0.075s, box-shadow 0.075s; cursor: default; }
        .tp-feature-card:hover { transform: translate(1px, 1px); box-shadow: none !important; }
        .tp-footer-link { font-family: 'Manrope', sans-serif; font-weight: 900; text-transform: uppercase; letter-spacing: 0.2em; font-size: 10px; color: #000000; text-decoration: none; padding: 4px 8px; transition: background 0.1s; }
        .tp-footer-link:hover { background: #ffffff; }
        .tp-login-btn { font-family: 'Plus Jakarta Sans', sans-serif; font-weight: 900; text-transform: uppercase; letter-spacing: 0.1em; font-size: 14px; color: #0055BF; border: 4px solid #0055BF; padding: 8px 24px; background: none; cursor: pointer; transition: background 0.15s, color 0.15s; }
        .tp-login-btn:hover { background: #0055BF; color: #ffffff; }
        .tp-enroll-btn { width: 100%; background: #ffffff; color: #000000; font-weight: 900; padding: 16px; border: 4px solid #000000; text-transform: uppercase; cursor: pointer; font-size: 16px; font-family: 'Plus Jakarta Sans', sans-serif; transition: background 0.15s; }
        .tp-enroll-btn:hover { background: #FFD500; }
        @media (max-width: 768px) {
          .tp-hero-grid { grid-template-columns: 1fr !important; }
          .tp-courses-grid { grid-template-columns: 1fr !important; }
          .tp-features-grid { grid-template-columns: 1fr !important; }
          .tp-features-cards { grid-template-columns: 1fr !important; }
          .tp-cta-buttons { flex-direction: column !important; align-items: center !important; }
          .tp-nav-links { display: none !important; }
        }
      `}</style>

      {/* TopNavBar */}
      <nav style={{ display: "flex", justifyContent: "space-between", alignItems: "center", width: "100%", padding: "0 32px", height: 80, background: white, borderBottom: `4px solid ${black}` }}>
        <img src="/logo.png" alt="おしごとJapanese" style={{ height: 28, maxWidth: "60vw", objectFit: "contain", display: "block" }} />
        <div className="tp-nav-links" style={{ display: "flex", gap: 48 }}>
          <a href="#courses-section" className="tp-nav-link">COURSES</a>
          <a href="#about-section" className="tp-nav-link">ABOUT</a>
          <a href="/contact" className="tp-nav-link">CONTACT</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section style={{ position: "relative", width: "100%", minHeight: 819, display: "flex", alignItems: "center", overflow: "hidden", borderBottom: `4px solid ${black}` }}>
        <div style={{ position: "absolute", top: 0, right: 0, width: "50%", height: "100%", background: red, zIndex: 0, transform: "translateX(48px) skewX(6deg)", borderLeft: `4px solid ${black}` }} />
        <div style={{ position: "absolute", bottom: 40, left: 80, width: 256, height: 256, background: yellow, zIndex: 0, border: `4px solid ${black}`, boxShadow: shadowBlack }} />
        <div className="tp-hero-grid" style={{ maxWidth: 1280, margin: "0 auto", padding: "60px 32px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "center", position: "relative", zIndex: 1, width: "100%" }}>
          <div>
            <h1 style={{ fontSize: "clamp(44px, 7vw, 96px)", fontWeight: 900, letterSpacing: "-0.05em", lineHeight: 1, marginBottom: 32, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              Japanese that works<br />
              <span style={{ background: blue, color: white, padding: "0 16px", display: "inline-block", transform: "rotate(-1deg)" }}>AT WORK.</span>
            </h1>
          </div>
          <div style={{ position: "relative" }}>
            <div style={{ position: "absolute", inset: 0, background: blue, transform: "translate(16px, 16px)", border: `4px solid ${black}` }} />
            <img
              alt="Business professionals collaborating"
              src="/top_kv.png"
              style={{ position: "relative", zIndex: 1, width: "100%", aspectRatio: "4/3", objectFit: "cover", border: `4px solid ${black}`, filter: "grayscale(100%)", display: "block" }}
            />
          </div>
        </div>
      </section>

      {/* Feature Section - このサイトでできること */}
      <section id="about-section" style={{ background: white, borderTop: `4px solid ${black}`, borderBottom: `4px solid ${black}`, padding: "96px 32px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          {/* Centered Title */}
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <h2 style={{ fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 900, lineHeight: 1.1, margin: 0, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>このサイトでできること</h2>
            <h3 style={{ fontSize: "clamp(16px, 2vw, 22px)", fontWeight: 700, margin: "8px 0 0 0", color: "#555", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>What You Can Do</h3>
          </div>
          {/* 2x2 Card Grid */}
          <div className="tp-features-cards" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32 }}>
            {[
              { color: blue, iconColor: white, icon: "menu_book", labelJP: "単語を学ぶ", labelEN: "Learn Vocabulary", desc: "各ユニットの業界特化単語を学べます。/ Learn industry-specific words for your field." },
              { color: red, iconColor: white, icon: "forum", labelJP: "会話を練習する", labelEN: "Practice Conversations", desc: "実際の職場シーンの会話例で練習できます。/ Practice with real workplace dialogue scenes." },
              { color: yellow, iconColor: black, icon: "quiz", labelJP: "クイズで確認する", labelEN: "Test Yourself", desc: "クイズで理解度を確認できます。/ Check your understanding with quizzes." },
              { color: black, iconColor: white, icon: "groups", labelJP: "ロールプレイをする", labelEN: "Try Role-Play", desc: "実践的なシナリオで練習できます。/ Practice with real-world role-play scenarios." },
            ].map(item => (
              <div key={item.labelJP} style={{ border: `4px solid ${black}`, boxShadow: "8px 8px 0px 0px rgba(0,0,0,1)", background: white, padding: 32, display: "flex", gap: 24, alignItems: "flex-start" }}>
                <div style={{ width: 56, height: 56, background: item.color, border: `4px solid ${black}`, flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <span className="material-symbols-outlined" style={{ color: item.iconColor, fontSize: 30 }}>{item.icon}</span>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                  <p style={{ fontWeight: 900, fontSize: 18, lineHeight: 1.2, margin: 0, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                    {item.labelJP} <span style={{ fontSize: 13, fontWeight: 700, opacity: 0.6 }}>{item.labelEN}</span>
                  </p>
                  <p style={{ fontWeight: 500, fontSize: 14, lineHeight: 1.7, margin: 0 }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Course Categories */}
      <section id="courses-section" style={{ padding: "96px 32px", background: white }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ marginBottom: 64, borderBottom: `8px solid ${black}`, paddingBottom: 16, display: "inline-block" }}>
            <h2 style={{ fontSize: 36, fontWeight: 900, letterSpacing: "0.1em", textTransform: "uppercase", margin: 0, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>COURSE CATEGORIES</h2>
          </div>
          <div className="tp-courses-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 32 }}>
            {/* IT Engineer */}
            <div className="tp-course-card" onClick={() => router.push("/it")} style={{ border: `4px solid ${black}`, background: blue, padding: 32, display: "flex", flexDirection: "column", justifyContent: "space-between", minHeight: 400, boxShadow: shadowBlack, cursor: "pointer" }}>
              <div>
                <span style={{ background: white, color: blue, fontSize: 11, fontWeight: 900, letterSpacing: "0.1em", padding: "4px 12px", border: `2px solid ${black}`, textTransform: "uppercase", marginBottom: 24, display: "inline-block" }}>公開中</span>
                <h3 style={{ fontSize: 32, fontWeight: 900, color: white, lineHeight: 1.2, marginBottom: 8, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>ITのビジネス日本語</h3>
                <p style={{ fontSize: 14, fontWeight: 500, color: white, margin: "0 0 16px", letterSpacing: "0.05em" }}>JAPANESE FOR IT</p>
                <p style={{ fontSize: 13, fontWeight: 500, color: white, lineHeight: 1.7, margin: 0, opacity: 0.9 }}>朝会・コードレビュー・クライアント対応など、職場で即使える日本語を学べます。Business Japanese for IT engineers working in Japan.</p>
              </div>
              <button className="tp-enroll-btn" onClick={() => router.push("/it")}>受講する</button>
            </div>
            {/* Interview & Career */}
            <div className="tp-course-card" onClick={() => router.push("/interview")} style={{ border: `4px solid ${black}`, background: red, padding: 32, display: "flex", flexDirection: "column", justifyContent: "space-between", minHeight: 400, boxShadow: shadowBlack, cursor: "pointer" }}>
              <div>
                <span style={{ background: white, color: red, fontSize: 11, fontWeight: 900, letterSpacing: "0.1em", padding: "4px 12px", border: `2px solid ${black}`, textTransform: "uppercase", marginBottom: 24, display: "inline-block" }}>公開中</span>
                <h3 style={{ fontSize: 32, fontWeight: 900, color: white, lineHeight: 1.2, marginBottom: 8, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>面接の日本語</h3>
                <p style={{ fontSize: 14, fontWeight: 500, color: white, margin: "0 0 16px", letterSpacing: "0.05em" }}>INTERVIEW JAPANESE</p>
                <p style={{ fontSize: 13, fontWeight: 500, color: white, lineHeight: 1.7, margin: 0, opacity: 0.9 }}>履歴書・自己PR・よくある質問など、面接で即使える日本語を学べます。Interview Japanese for job seekers in Japan.</p>
              </div>
              <button className="tp-enroll-btn" onClick={() => router.push("/interview")}>受講する</button>
            </div>
            {/* Katakana */}
            <div className="tp-course-card" onClick={() => router.push("/katakana")} style={{ border: `4px solid ${black}`, background: yellow, padding: 32, display: "flex", flexDirection: "column", justifyContent: "space-between", minHeight: 400, boxShadow: shadowBlack, cursor: "pointer" }}>
              <div>
                <span style={{ background: blue, color: white, fontSize: 11, fontWeight: 900, letterSpacing: "0.1em", padding: "4px 12px", border: `2px solid ${black}`, textTransform: "uppercase", marginBottom: 24, display: "inline-block" }}>公開中</span>
                <h3 style={{ fontSize: 32, fontWeight: 900, color: black, lineHeight: 1.2, marginBottom: 8, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>仕事のカタカナ語</h3>
                <p style={{ fontSize: 14, fontWeight: 500, color: black, margin: "0 0 16px", letterSpacing: "0.05em" }}>BUSINESS KATAKANA</p>
                <p style={{ fontSize: 13, fontWeight: 500, color: black, lineHeight: 1.7, margin: 0, opacity: 0.85 }}>職場でよく使うカタカナ語を学べます。</p>
              </div>
              <button className="tp-enroll-btn" onClick={(e) => { e.stopPropagation(); router.push("/katakana"); }}>受講する</button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ display: "flex", justifyContent: "space-between", alignItems: "center", width: "100%", padding: "40px 32px", background: yellow, borderTop: `4px solid ${black}`, flexWrap: "wrap", gap: 16 }}>
        <div style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.2em", fontSize: 10, color: black }}>
          © おしごとJapanese
        </div>
        <div style={{ display: "flex", gap: 32, flexWrap: "wrap" }}>
          <a href="/privacy" className="tp-footer-link">PRIVACY POLICY</a>
          <a href="/contact" className="tp-footer-link">CONTACT</a>
        </div>
      </footer>
    </div>
  );
}
