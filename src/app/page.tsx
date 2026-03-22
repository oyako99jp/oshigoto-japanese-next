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
        * { box-sizing: border-box; }
        .tp-nav-link { font-family: 'Plus Jakarta Sans', sans-serif; font-weight: 900; text-transform: uppercase; letter-spacing: 0.1em; font-size: 14px; color: #000000; text-decoration: none; transition: color 0.1s; }
        .tp-nav-link:hover { color: #0055BF; }
        .tp-hover-shift { transition: transform 0.1s, box-shadow 0.1s; }
        .tp-hover-shift:hover { transform: translate(-4px, -4px); box-shadow: 12px 12px 0px 0px #000000; }
        .tp-hover-shift:active { transform: translate(2px, 2px); box-shadow: 4px 4px 0px 0px #000000; }
        .tp-course-card { transition: transform 0.2s; }
        .tp-course-card:hover { transform: translateY(-8px); }
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

      {/* Course Categories */}
      <section id="courses-section" style={{ padding: "96px 32px", background: white }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ marginBottom: 64, borderBottom: `8px solid ${black}`, paddingBottom: 16, display: "inline-block" }}>
            <h2 style={{ fontSize: 36, fontWeight: 900, letterSpacing: "0.1em", textTransform: "uppercase", margin: 0, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>COURSE CATEGORIES</h2>
          </div>
          <div className="tp-courses-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 32 }}>
            {/* IT Engineer */}
            <div className="tp-course-card" style={{ border: `4px solid ${black}`, background: blue, padding: 32, display: "flex", flexDirection: "column", justifyContent: "space-between", minHeight: 400, boxShadow: shadowBlack }}>
              <div>
                <span style={{ background: white, color: blue, fontSize: 11, fontWeight: 900, letterSpacing: "0.1em", padding: "4px 12px", border: `2px solid ${black}`, textTransform: "uppercase", marginBottom: 24, display: "inline-block" }}>公開中</span>
                <h3 style={{ fontSize: 40, fontWeight: 900, color: white, lineHeight: 1.1, marginBottom: 16, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>IT<br />ENGINEER</h3>
              </div>
              <button className="tp-enroll-btn" onClick={() => router.push("/it")}>受講する</button>
            </div>
            {/* Fashion */}
            <div className="tp-course-card" style={{ border: `4px solid ${black}`, background: red, padding: 32, display: "flex", flexDirection: "column", justifyContent: "space-between", minHeight: 400, boxShadow: shadowBlack, opacity: 0.9 }}>
              <div>
                <span style={{ background: black, color: white, fontSize: 11, fontWeight: 900, letterSpacing: "0.1em", padding: "4px 12px", border: `2px solid ${white}`, textTransform: "uppercase", marginBottom: 24, display: "inline-block" }}>COMING SOON</span>
                <h3 style={{ fontSize: 40, fontWeight: 900, color: white, lineHeight: 1.1, marginBottom: 16, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>RETAIL &<br />APPAREL</h3>
              </div>
              <div style={{ color: white, fontWeight: 900, opacity: 0.5, textAlign: "right", fontSize: 20 }}>02</div>
            </div>
            {/* Medical */}
            <div className="tp-course-card" style={{ border: `4px solid ${black}`, background: "#00A859", padding: 32, display: "flex", flexDirection: "column", justifyContent: "space-between", minHeight: 400, boxShadow: shadowBlack, opacity: 0.9 }}>
              <div>
                <span style={{ background: black, color: white, fontSize: 11, fontWeight: 900, letterSpacing: "0.1em", padding: "4px 12px", border: `2px solid ${white}`, textTransform: "uppercase", marginBottom: 24, display: "inline-block" }}>COMING SOON</span>
                <h3 style={{ fontSize: 40, fontWeight: 900, color: white, lineHeight: 1.1, marginBottom: 16, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>MEDICAL<br />CARE</h3>
              </div>
              <div style={{ color: white, fontWeight: 900, opacity: 0.5, textAlign: "right", fontSize: 20 }}>03</div>
            </div>
            {/* Travel */}
            <div className="tp-course-card" style={{ border: `4px solid ${black}`, background: yellow, padding: 32, display: "flex", flexDirection: "column", justifyContent: "space-between", minHeight: 400, boxShadow: shadowBlack, opacity: 0.9 }}>
              <div>
                <span style={{ background: black, color: white, fontSize: 11, fontWeight: 900, letterSpacing: "0.1em", padding: "4px 12px", border: `2px solid ${white}`, textTransform: "uppercase", marginBottom: 24, display: "inline-block" }}>COMING SOON</span>
                <h3 style={{ fontSize: 40, fontWeight: 900, color: black, lineHeight: 1.1, marginBottom: 16, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>TRAVEL<br />JAPAN</h3>
              </div>
              <div style={{ color: black, fontWeight: 900, opacity: 0.3, textAlign: "right", fontSize: 20 }}>04</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features/Editorial Section */}
      <section id="about-section" className="tp-features-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", borderBottom: `4px solid ${black}` }}>
        <div style={{ padding: 64, display: "flex", flexDirection: "column", justifyContent: "center", borderRight: `4px solid ${black}`, background: white }}>
          <h3 style={{ fontSize: 36, fontWeight: 900, marginBottom: 24, textTransform: "uppercase", lineHeight: 1.1, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>NOT TEXTBOOK.<br />REAL WORKPLACE.</h3>
          <p style={{ fontSize: 20, fontWeight: 700, marginBottom: 32, lineHeight: 1.8 }}>
            Most Japanese courses teach you to order coffee.<br />
            We teach you the Japanese your colleagues<br />
            actually use — built for your industry.<br />
            <br />
            職場で即使える日本語を、<br />
            業界別に学べるコースです。
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {[
              { color: blue, label: "Industry Specific Curriculum" },
              { color: red, label: "Real-world Business Scenarios" },
              { color: yellow, label: "Free to Start, Easy to Use" },
            ].map(item => (
              <div key={item.label} style={{ display: "flex", alignItems: "center", gap: 16 }}>
                <div style={{ width: 32, height: 32, background: item.color, border: `2px solid ${black}`, flexShrink: 0 }} />
                <span style={{ fontWeight: 900, fontSize: 13, textTransform: "uppercase", letterSpacing: "0.1em" }}>{item.label}</span>
              </div>
            ))}
          </div>
        </div>
        <div style={{ position: "relative", minHeight: 500 }}>
          <img
            alt="Students studying"
            src="/top_2.png"
            style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", filter: "grayscale(100%)" }}
          />
          <div style={{ position: "absolute", inset: 0, background: "rgba(0,85,191,0.2)", mixBlendMode: "multiply" }} />
          <div style={{ position: "absolute", bottom: 48, left: 48, right: 48, background: white, border: `4px solid ${black}`, padding: 32, boxShadow: shadowBlack }}>
            <p style={{ fontSize: 22, fontWeight: 900, fontStyle: "italic", margin: 0 }}>"THE MOST DIRECT PATH TO WORKING IN JAPAN."</p>
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
