"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { units, unitDataMap } from "./data";

const DEFAULT_PROGRESS = { completed: [], inProgress: [] };
async function loadProgress() {
  try { const r = await window.localStorage.get("progress"); return r ? JSON.parse(r.value) : DEFAULT_PROGRESS; }
  catch { return DEFAULT_PROGRESS; }
}
async function saveProgress(p) {
  try { await window.localStorage.set("progress", JSON.stringify(p)); } catch {}
}

// ============================================================
// HOOKS & UTILS
// ============================================================
function useWindowWidth() {
  const [w, setW] = useState(0);
  useEffect(() => {
    setW(window.innerWidth);
    const h = () => setW(window.innerWidth);
    window.addEventListener("resize", h);
    return () => window.removeEventListener("resize", h);
  }, []);
  return w;
}

const colors = {
  primary: "#14469e", primaryLight: "#1a56c4", primaryBg: "#f0f4fb",
  success: "#22c55e", successBg: "#dcfce7",
  gray: "#555555", grayLight: "#dddddd", grayBg: "#f5f5f5",
  white: "#ffffff", text: "#111111", textLight: "#888888",
};

const checkAnswer = (input, correct, variants) => {
  const v = (variants && variants[correct]) ? variants[correct] : [correct];
  return v.some(x => x === input.trim());
};

// ============================================================
// SHARED COMPONENTS
// ============================================================
function AdBanner({ horizontal = false }) {
  return (
    <div style={{ border: `2px dashed ${colors.primaryLight}`, borderRadius: 0, background: colors.primaryBg, display: "flex", flexDirection: horizontal ? "row" : "column", alignItems: "center", justifyContent: "center", padding: horizontal ? "12px 20px" : "28px 16px", color: colors.primaryLight, textAlign: "center", gap: 10, minHeight: horizontal ? 60 : 220 }}>
      <div style={{ fontSize: 12, fontWeight: 700, color: colors.primaryLight }}>AD</div>
      <div>
        <div style={{ fontSize: 12, fontWeight: 700, color: colors.primaryLight }}>Advertisement</div>
        <div style={{ fontSize: 10, color: colors.gray }}>Google AdSense · {horizontal ? "320×50" : "300×250"}</div>
      </div>
    </div>
  );
}

function SectionTab({ sections, active, onChange, isPC }) {
  return (
    <div style={{ borderBottom: "2px solid #dddddd", display: "flex", gap: 0, marginBottom: 24, overflowX: "auto", overflowY: "hidden", WebkitOverflowScrolling: "touch", whiteSpace: "nowrap" }}>
      {sections.map(s => (
        <button key={s.id} onClick={() => onChange(s.id)} style={{ background: "none", border: "none", borderBottom: active === s.id ? "2px solid #14469e" : "2px solid transparent", marginBottom: -2, padding: "10px 20px", fontWeight: active === s.id ? 700 : 400, color: active === s.id ? "#14469e" : "#555555", cursor: "pointer", fontSize: isPC ? 13 : 12, display: "inline-block", whiteSpace: "nowrap", flexShrink: 0 }}>{s.label}</button>
      ))}
    </div>
  );
}

function Header({ isPC }) {
  const router = useRouter();
  return (
    <div style={{ width: "100%", background: "#14469e", color: colors.white }}>
      <div style={{ maxWidth: 1080, margin: "0 auto", padding: isPC ? "18px 24px" : "14px 16px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div>
          <h1 style={{ margin: 0, fontSize: isPC ? 22 : 18, fontWeight: 800 }}>ITエンジニアのためのビジネス日本語</h1>
          <p style={{ margin: 0, opacity: 0.85, fontSize: isPC ? 14 : 12 }}>おしごとJAPANESE</p>
        </div>
        <button onClick={() => router.push("/")} style={{ background: "none", border: "none", color: colors.white, cursor: "pointer", fontSize: 13, fontWeight: 600, padding: 0, opacity: 0.85 }}>← トップへ</button>
      </div>
    </div>
  );
}

function Footer() {
  const router = useRouter();
  return (
    <div style={{ width: "100%", background: "#111111", color: "#ffffff" }}>
      <div style={{ maxWidth: 1080, margin: "0 auto", padding: "24px", textAlign: "center" }}>
        <div style={{ fontSize: 13, marginBottom: 12 }}>© おしごとJapanese</div>
        <div style={{ display: "flex", gap: 24, justifyContent: "center" }}>
          <button onClick={() => router.push("/")} style={{ background: "none", border: "none", color: "#aaaaaa", cursor: "pointer", fontSize: 13, textDecoration: "underline", padding: 0 }}>← トップへ戻る</button>
          <button onClick={() => router.push("/privacy")} style={{ background: "none", border: "none", color: "#aaaaaa", cursor: "pointer", fontSize: 13, textDecoration: "underline", padding: 0 }}>プライバシーポリシー</button>
          <button onClick={() => router.push("/contact")} style={{ background: "none", border: "none", color: "#aaaaaa", cursor: "pointer", fontSize: 13, textDecoration: "underline", padding: 0 }}>お問い合わせ</button>
        </div>
      </div>
    </div>
  );
}

function PrivacyPage() {
  const width = useWindowWidth();
  const isPC = width >= 768;
  const router = useRouter();
  return (
    <div style={{ minHeight: "100vh", width: "100vw", background: "#f5f5f5", fontFamily: "'Segoe UI', sans-serif", display: "flex", flexDirection: "column" }}>
      <Header isPC={isPC} />
      <div style={{ width: "100%", maxWidth: 800, margin: "0 auto", padding: isPC ? "32px 24px 48px" : "20px 16px 40px", flex: 1 }}>
        <div style={{ background: "#ffffff", padding: isPC ? 36 : 24, boxShadow: "0 4px 24px rgba(0,0,0,0.08)" }}>
          <button onClick={() => router.push("/it")} style={{ background: "none", border: "none", color: "#14469e", cursor: "pointer", fontSize: 14, fontWeight: 600, marginBottom: 20, padding: 0 }}>← ホームに戻る / Back to Home</button>
          <h1 style={{ fontSize: isPC ? 24 : 20, fontWeight: 800, color: "#14469e", marginBottom: 28 }}>プライバシーポリシー / Privacy Policy</h1>
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
      <Footer />
    </div>
  );
}

function ContactPage() {
  const width = useWindowWidth();
  const isPC = width >= 768;
  const router = useRouter();
  return (
    <div style={{ minHeight: "100vh", width: "100vw", background: "#f5f5f5", fontFamily: "'Segoe UI', sans-serif", display: "flex", flexDirection: "column" }}>
      <Header isPC={isPC} />
      <div style={{ width: "100%", maxWidth: 800, margin: "0 auto", padding: isPC ? "32px 24px 48px" : "20px 16px 40px", flex: 1 }}>
        <div style={{ background: "#ffffff", padding: isPC ? 36 : 24, boxShadow: "0 4px 24px rgba(0,0,0,0.08)" }}>
          <button onClick={() => router.push("/it")} style={{ background: "none", border: "none", color: "#14469e", cursor: "pointer", fontSize: 14, fontWeight: 600, marginBottom: 20, padding: 0 }}>← ホームに戻る / Back to Home</button>
          <h1 style={{ fontSize: isPC ? 24 : 20, fontWeight: 800, color: "#14469e", marginBottom: 12 }}>お問い合わせ / Contact Us</h1>
          <p style={{ fontSize: 14, color: "#555555", lineHeight: 1.8, marginBottom: 24 }}>ご質問・ご意見はこちらからお送りください。/ Please send your questions or feedback using the form below.</p>
          <iframe src="https://docs.google.com/forms/d/e/1FAIpQLScDkxzSlprADqEgGtR0XA3kNUofXgL-HMoXXc5yZ0KBxBhBCw/viewform?embedded=true" width="100%" height="691" frameBorder={0} style={{ border: 0 }}>読み込んでいます…</iframe>
        </div>
      </div>
      <Footer />
    </div>
  );
}

// ============================================================
// VOCAB SECTION
// ============================================================
function VocabCard({ word, index }) {
  const [flipped, setFlipped] = useState(false);
  return (
    <div onClick={() => setFlipped(f => !f)} style={{ background: flipped ? colors.primaryBg : colors.white, border: `1px solid ${flipped ? colors.primaryLight : colors.grayLight}`, borderRadius: 0, padding: "16px 18px", cursor: "pointer", transition: "all 0.2s", boxShadow: "0 1px 3px rgba(0,0,0,0.1)" }}>
      <div style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
        <div style={{ width: 28, height: 28, borderRadius: 0, background: colors.primaryLight, flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", color: colors.white, fontWeight: 700, fontSize: 12 }}>{index + 1}</div>
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: 18, fontWeight: 700, color: colors.text }}>{word.jp}</div>
          <div style={{ fontSize: 12, color: colors.gray, marginTop: 2 }}>{word.reading}</div>
          {flipped && (
            <div style={{ marginTop: 10, paddingTop: 10, borderTop: `1px solid ${colors.grayLight}` }}>
              <div style={{ fontSize: 14, fontWeight: 600, color: colors.primaryLight, marginBottom: 8 }}>{word.en}</div>
              <div style={{ fontSize: 13, color: colors.text, background: colors.white, borderRadius: 0, padding: "8px 12px" }}><span style={{ fontWeight: 600 }}>例：</span>{word.example}</div>
              <div style={{ fontSize: 12, color: colors.gray, marginTop: 4, fontStyle: "italic" }}>{word.exampleEn}</div>
            </div>
          )}
        </div>
        <div style={{ fontSize: 16, color: colors.textLight }}>{flipped ? "▲" : "▼"}</div>
      </div>
    </div>
  );
}

function VocabSection({ vocab, itRoles }) {
  return (
    <div>
      <div style={{ background: colors.primaryBg, borderRadius: 0, padding: "14px 18px", marginBottom: 20, borderLeft: `4px solid ${colors.primaryLight}` }}>
        <div style={{ fontSize: 13, fontWeight: 600, color: colors.primary }}>How to use</div>
        <div style={{ fontSize: 13, color: colors.gray, marginTop: 4 }}>Tap each card to reveal the meaning and example sentence.</div>
      </div>
      <h3 style={{ fontSize: 15, fontWeight: 700, color: colors.text, marginBottom: 14 }}>Vocabulary ({vocab.length} words)</h3>
      <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: itRoles ? 28 : 0 }}>
        {vocab.map((w, i) => <VocabCard key={w.id} word={w} index={i} />)}
      </div>
      {itRoles && (
        <>
          <h3 style={{ fontSize: 15, fontWeight: 700, color: colors.text, marginBottom: 14 }}>IT Roles & Departments</h3>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(180px,1fr))", gap: 10 }}>
            {itRoles.map((r, i) => (
              <div key={i} style={{ background: colors.white, border: `1px solid ${colors.grayLight}`, borderRadius: 0, padding: "12px 14px" }}>
                <div style={{ fontSize: 15, fontWeight: 700, color: colors.text }}>{r.jp}</div>
                <div style={{ fontSize: 11, color: colors.gray, margin: "2px 0" }}>{r.reading}</div>
                <div style={{ fontSize: 12, color: colors.primaryLight, fontWeight: 600 }}>{r.en}</div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

// ============================================================
// CONVERSATION SECTION
// ============================================================
function ConversationSection({ conversations }) {
  const [active, setActive] = useState(conversations[0].id);
  const [showEn, setShowEn] = useState({});
  const conv = conversations.find(c => c.id === active);

  const speakerColor = s => {
    if (s === "Alex") return { bg: colors.primaryBg, border: colors.grayLight, badge: colors.primary };
    return { bg: colors.grayBg, border: colors.grayLight, badge: colors.gray };
  };

  return (
    <div>
      <div style={{ display: "flex", gap: 8, marginBottom: 20, flexWrap: "wrap" }}>
        {conversations.map(c => (
          <button key={c.id} onClick={() => { setActive(c.id); setShowEn({}); }} style={{ padding: "8px 14px", borderRadius: 0, border: "none", borderBottom: active === c.id ? `2px solid ${colors.primary}` : "2px solid transparent", cursor: "pointer", fontWeight: active === c.id ? 700 : 400, fontSize: 13, background: "none", color: active === c.id ? colors.primary : colors.gray }}>会話 {c.id}</button>
        ))}
      </div>
      <div style={{ background: colors.primaryBg, borderRadius: 0, padding: "14px 18px", marginBottom: 20, borderLeft: `4px solid ${colors.primaryLight}` }}>
        <div style={{ fontSize: 14, fontWeight: 700, color: colors.primary }}>{conv.title}</div>
        <div style={{ fontSize: 13, color: colors.gray, marginTop: 2 }}>{conv.sceneEn}</div>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 16 }}>
        {conv.lines.map((line, i) => {
          const c = speakerColor(line.speaker);
          return (
            <div key={i} style={{ background: c.bg, border: `1px solid ${c.border}`, borderRadius: 0, padding: "14px 16px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
                <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
                  <span style={{ background: c.badge, color: colors.white, borderRadius: 0, padding: "2px 10px", fontSize: 12, fontWeight: 700 }}>{line.speaker}</span>
                  <span style={{ fontSize: 11, color: colors.gray }}>{line.role}</span>
                </div>
                <button onClick={() => setShowEn(p => ({ ...p, [i]: !p[i] }))} style={{ background: "none", border: `1px solid ${colors.grayLight}`, borderRadius: 0, padding: "2px 8px", cursor: "pointer", fontSize: 11, color: colors.gray }}>EN {showEn[i] ? "▲" : "▼"}</button>
              </div>
              <div style={{ fontSize: 15, color: colors.text, lineHeight: 1.7 }}>{line.jp}</div>
              {showEn[i] && <div style={{ fontSize: 13, color: colors.gray, marginTop: 8, fontStyle: "italic", borderTop: `1px solid ${c.border}`, paddingTop: 8 }}>{line.en}</div>}
            </div>
          );
        })}
      </div>
    </div>
  );
}

// ============================================================
// QUIZ SECTION
// ============================================================
function ChoiceQuiz({ q, variants }) {
  const [selected, setSelected] = useState(null);
  const [checked, setChecked] = useState(false);
  const isAll = q.answer === "all";
  const isCorrect = isAll ? true : selected === q.answer;

  // Shuffle choices once on mount
  const [shuffled] = useState(() => [...q.choices].sort(() => Math.random() - 0.5));

  return (
    <div style={{ background: colors.white, border: `1px solid ${colors.grayLight}`, borderRadius: 0, padding: "18px 20px", marginBottom: 14 }}>
      <div style={{ fontSize: 12, fontWeight: 700, color: colors.primaryLight, marginBottom: 10 }}>{isAll ? "Multiple choice (all correct)" : "Multiple choice"}</div>
      <div style={{ fontSize: 15, color: colors.text, marginBottom: 6, lineHeight: 1.8 }}>{q.question}</div>
      <div style={{ fontSize: 13, color: colors.gray, marginBottom: 14, fontStyle: "italic" }}>Hint: {q.hint}</div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginBottom: 14 }}>
        {shuffled.map((c, i) => (
          <button key={i} onClick={() => { setSelected(c); setChecked(false); }} style={{ padding: "8px 18px", borderRadius: 0, cursor: "pointer", fontWeight: 600, fontSize: 14, border: `2px solid ${selected === c ? colors.primary : colors.grayLight}`, background: selected === c ? colors.primaryBg : colors.white, color: selected === c ? colors.primary : colors.text }}>{c}</button>
        ))}
      </div>
      <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
        <button onClick={() => setChecked(true)} disabled={!selected} style={{ background: selected ? colors.primary : colors.grayLight, color: selected ? colors.white : colors.textLight, border: "none", borderRadius: 0, padding: "8px 20px", cursor: selected ? "pointer" : "default", fontWeight: 600, fontSize: 13 }}>Check</button>
        <button onClick={() => { setSelected(null); setChecked(false); }} style={{ background: colors.grayLight, color: colors.gray, border: "none", borderRadius: 0, padding: "8px 16px", cursor: "pointer", fontSize: 13 }}>Reset</button>
        {checked && <span style={{ fontSize: 14, fontWeight: 700, color: isCorrect ? "#22c55e" : "#ef4444" }}>{isCorrect ? "Correct!" : "Try again"}</span>}
      </div>
      {checked && !isCorrect && (
        <div style={{ marginTop: 10, background: "#fef2f2", borderRadius: 0, padding: "8px 14px", fontSize: 13, color: "#dc2626" }}>Answer: {q.answer}</div>
      )}
      {checked && isAll && (
        <div style={{ marginTop: 10, background: "#f0fdf4", borderRadius: 0, padding: "8px 14px", fontSize: 13, color: "#16a34a" }}>All options are correct — choose what fits your situation!</div>
      )}
    </div>
  );
}

function QuizSection({ quiz, variants, tip }) {
  return (
    <div>
      <div style={{ background: colors.primaryBg, borderRadius: 0, padding: "14px 18px", marginBottom: 20, borderLeft: `4px solid ${colors.primaryLight}` }}>
        <div style={{ fontSize: 13, fontWeight: 600, color: colors.primary }}>Practice Tips</div>
        <div style={{ fontSize: 13, color: colors.gray, marginTop: 4 }}>{tip || "Choose the best answer for each question."}</div>
      </div>
      {quiz.map(q => <ChoiceQuiz key={q.id} q={q} variants={variants} />)}
    </div>
  );
}

// ============================================================
// ROLEPLAY SECTION
// ============================================================
function RoleplaySection({ scenarios }) {
  const [active, setActive] = useState(scenarios[0].key);
  const s = scenarios.find(x => x.key === active);
  return (
    <div>
      <div style={{ background: colors.primaryBg, borderRadius: 0, padding: "14px 18px", marginBottom: 20, borderLeft: `4px solid ${colors.primaryLight}` }}>
        <div style={{ fontSize: 13, fontWeight: 600, color: colors.primary }}>Roleplay Practice</div>
        <div style={{ fontSize: 13, color: colors.gray, marginTop: 4 }}>Choose a scenario and review before practicing.</div>
      </div>
      <div style={{ display: "flex", gap: 8, marginBottom: 16, flexWrap: "wrap" }}>
        {scenarios.map(sc => (
          <button key={sc.key} onClick={() => setActive(sc.key)} style={{ padding: "8px 16px", borderRadius: 0, border: "none", borderBottom: active === sc.key ? `2px solid ${colors.primary}` : "2px solid transparent", cursor: "pointer", fontWeight: active === sc.key ? 700 : 400, fontSize: 13, background: "none", color: active === sc.key ? colors.primary : colors.gray }}>Scenario {sc.key}</button>
        ))}
      </div>
      <div style={{ background: colors.white, border: `1px solid ${colors.grayLight}`, borderRadius: 0, padding: "18px 20px", marginBottom: 16 }}>
        <div style={{ fontSize: 15, fontWeight: 700, color: colors.text, marginBottom: 12 }}>{s.label}</div>
        <div style={{ background: colors.primaryBg, borderRadius: 0, padding: "12px 14px", marginBottom: 12 }}>
          <div style={{ fontSize: 12, fontWeight: 700, color: colors.primary, marginBottom: 4 }}>JP シナリオ説明</div>
          <div style={{ fontSize: 13, color: colors.text, lineHeight: 1.7 }}>{s.descJp}</div>
        </div>
        <div style={{ background: colors.grayBg, borderRadius: 0, padding: "12px 14px", marginBottom: 12 }}>
          <div style={{ fontSize: 12, fontWeight: 700, color: colors.gray, marginBottom: 4 }}>EN Scenario</div>
          <div style={{ fontSize: 13, color: colors.gray, lineHeight: 1.7 }}>{s.desc}</div>
        </div>
        <div style={{ fontSize: 12, fontWeight: 700, color: colors.text, marginBottom: 8 }}>練習ポイント / Learning Goals</div>
        {s.points.map((p, i) => (
          <div key={i} style={{ display: "flex", gap: 8, alignItems: "flex-start", marginBottom: 6 }}>
            <span style={{ color: colors.primaryLight, fontWeight: 700, flexShrink: 0 }}>·</span>
            <span style={{ fontSize: 13, color: colors.text }}>{p}</span>
          </div>
        ))}
      </div>
      <div style={{ background: colors.primary, borderRadius: 0, padding: "28px 24px", textAlign: "center", color: colors.white }}>
        <div style={{ fontSize: 17, fontWeight: 800, marginBottom: 8 }}>AI会話練習 / AI Conversation Practice</div>
        <div style={{ fontSize: 14, opacity: 0.9, marginBottom: 6, lineHeight: 1.7 }}>AIと実際に日本語で会話する練習ができます。</div>
        <div style={{ fontSize: 13, opacity: 0.8, marginBottom: 20, lineHeight: 1.7 }}>Practice real Japanese conversations with AI — coming soon as a premium feature.</div>
        <div style={{ display: "inline-block", background: "rgba(255,255,255,0.15)", border: "2px solid rgba(255,255,255,0.4)", borderRadius: 0, padding: "8px 24px", fontSize: 13, fontWeight: 700 }}>Coming Soon — Premium Feature</div>
      </div>
    </div>
  );
}

// ============================================================
// COMPLETE MODAL
// ============================================================
function CompleteModal({ unit, onClose }) {
  return (
    <div style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.5)", zIndex: 1000, display: "flex", alignItems: "center", justifyContent: "center", padding: 24 }}>
      <div style={{ background: colors.white, borderRadius: 0, padding: 36, maxWidth: 400, width: "100%", textAlign: "center", boxShadow: "0 20px 60px rgba(0,0,0,0.3)" }}>
        <div style={{ fontSize: 22, fontWeight: 800, color: colors.text, marginBottom: 8 }}>Unit {unit.id} Complete!</div>
        <div style={{ fontSize: 15, color: colors.gray, marginBottom: 6 }}>{unit.title}</div>
        <div style={{ fontSize: 13, color: colors.gray, marginBottom: 24, fontStyle: "italic" }}>{unit.titleEn}</div>
        <div style={{ background: "#f0fdf4", borderRadius: 0, padding: "14px 20px", marginBottom: 24 }}>
          <div style={{ fontSize: 13, color: "#16a34a", fontWeight: 600 }}>進捗が保存されました / Progress saved!</div>
        </div>
        <button onClick={onClose} style={{ background: colors.primaryLight, color: colors.white, border: "none", borderRadius: 0, padding: "12px 32px", cursor: "pointer", fontWeight: 700, fontSize: 15, width: "100%" }}>← ユニット一覧に戻る / Back to Units</button>
      </div>
    </div>
  );
}

// ============================================================
// UNIT PAGE (generic)
// ============================================================
function UnitPage({ unitData, onBack, onComplete, unitCompleted }) {
  const width = useWindowWidth();
  const isPC = width >= 768;
  const [section, setSection] = useState("vocab");
  const [showModal, setShowModal] = useState(false);
  const sectionOrder = ["vocab", "conv", "quiz", "roleplay"];
  const sections = [
    { id: "vocab", label: "Vocabulary" },
    { id: "conv", label: "Conversations" },
    { id: "quiz", label: "Practice" },
    { id: "roleplay", label: "Roleplay" },
  ];
  const currentIdx = sectionOrder.indexOf(section);

  const handleComplete = () => { onComplete(unitData.id); setShowModal(true); };

  const content = (
    <div style={{ background: colors.white, borderRadius: 0, padding: isPC ? 28 : 20, boxShadow: "0 4px 24px rgba(0,0,0,0.08)" }}>
      <button onClick={onBack} style={{ background: "none", border: "none", color: colors.primaryLight, cursor: "pointer", fontSize: 14, fontWeight: 600, marginBottom: 16, padding: 0 }}>← Back to Units</button>
      <div style={{ marginBottom: 20 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 6, flexWrap: "wrap" }}>
          <span style={{ background: colors.primaryLight, color: colors.white, borderRadius: 0, padding: "4px 12px", fontSize: 13, fontWeight: 700 }}>Unit {unitData.id}</span>
          <span style={{ fontSize: 13, color: colors.gray }}>IT Industry</span>
          {unitCompleted && <span style={{ background: "#dcfce7", color: "#16a34a", borderRadius: 0, padding: "4px 10px", fontSize: 12, fontWeight: 700 }}>Completed</span>}
        </div>
        <h2 style={{ margin: 0, fontSize: isPC ? 22 : 18, fontWeight: 800, color: colors.text }}>{unitData.title}</h2>
        <p style={{ margin: "6px 0 0", fontSize: 14, color: colors.gray }}>{unitData.titleEn}</p>
      </div>
      <SectionTab sections={sections} active={section} onChange={setSection} isPC={isPC} />
      {section === "vocab" && <VocabSection vocab={unitData.vocab} itRoles={unitData.itRoles} />}
      {section === "conv" && <ConversationSection conversations={unitData.conversations} />}
      {section === "quiz" && <QuizSection quiz={unitData.quiz} variants={unitData.answerVariants} tip={unitData.quizTip} />}
      {section === "roleplay" && <RoleplaySection scenarios={unitData.roleplay} />}
      <div style={{ display: "flex", gap: 10, marginTop: 28, justifyContent: "space-between" }}>
        {currentIdx > 0
          ? <button onClick={() => setSection(sectionOrder[currentIdx - 1])} style={{ background: colors.grayLight, color: colors.gray, border: "none", borderRadius: 0, padding: "10px 20px", cursor: "pointer", fontWeight: 600, fontSize: 14 }}>← 前へ / Prev</button>
          : <div />}
        {currentIdx < sectionOrder.length - 1
          ? <button onClick={() => setSection(sectionOrder[currentIdx + 1])} style={{ background: colors.primaryLight, color: colors.white, border: "none", borderRadius: 0, padding: "10px 24px", cursor: "pointer", fontWeight: 600, fontSize: 14 }}>次へ / Next →</button>
          : <button onClick={handleComplete} style={{ background: unitCompleted ? "#22c55e" : "linear-gradient(135deg,#16a34a,#22c55e)", color: colors.white, border: "none", borderRadius: 0, padding: "10px 24px", cursor: "pointer", fontWeight: 700, fontSize: 14 }}>{unitCompleted ? "Completed!" : "Unit完了 / Mark Complete"}</button>
        }
      </div>
      {showModal && <CompleteModal unit={unitData} onClose={() => { setShowModal(false); onBack(); }} />}
    </div>
  );

  const sidebar = (
    <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
      <div style={{ background: colors.white, borderRadius: 0, padding: 20, boxShadow: "0 4px 24px rgba(0,0,0,0.08)" }}>
        <div style={{ fontSize: 11, fontWeight: 600, color: colors.textLight, marginBottom: 12, letterSpacing: 1 }}>SPONSORED</div>
        <AdBanner />
      </div>
      <div style={{ background: colors.white, borderRadius: 0, padding: 20, boxShadow: "0 2px 12px rgba(0,0,0,0.07)" }}>
        <h3 style={{ margin: "0 0 14px", fontSize: 14, fontWeight: 700, color: colors.text }}>Unit {unitData.id} Contents</h3>
        {sections.map(s => (
          <button key={s.id} onClick={() => setSection(s.id)} style={{ display: "block", width: "100%", textAlign: "left", background: section === s.id ? colors.primaryBg : "none", border: "none", borderRadius: 0, padding: "8px 12px", cursor: "pointer", fontSize: 13, fontWeight: section === s.id ? 700 : 400, color: section === s.id ? colors.primary : colors.gray, marginBottom: 4 }}>{s.label}</button>
        ))}
      </div>
    </div>
  );

  return (
    <div style={{ minHeight: "100vh", width: "100vw", background: "#f5f5f5", fontFamily: "'Segoe UI', sans-serif" }}>
      <Header isPC={isPC} />
      <div style={{ width: "100%", maxWidth: 1080, margin: "0 auto", padding: isPC ? "24px 24px 48px" : "16px 12px 40px" }}>
        {isPC ? <div style={{ display: "grid", gridTemplateColumns: "1fr 300px", gap: 24, alignItems: "start" }}>{content}{sidebar}</div> : content}
      </div>
      <style>{`@keyframes pulse{0%,100%{opacity:.3;transform:scale(.8)}50%{opacity:1;transform:scale(1.2)}}`}</style>
      <Footer />
    </div>
  );
}

// ============================================================
// TOP PAGE
// ============================================================
function HeroSection({ onStart }: { onStart: () => void }) {
  return (
    <div style={{ width: "100%", backgroundImage: "url('/hero.png')", backgroundSize: "cover", backgroundPosition: "center", padding: "80px 24px", textAlign: "center", position: "relative" }}>
      <div style={{ position: "absolute", background: "rgba(14, 42, 100, 0.65)", inset: 0 }} />
      <div style={{ maxWidth: 1080, margin: "0 auto", position: "relative" }}>
        <h2 style={{ margin: "0 0 16px", fontSize: 32, fontWeight: 800, color: "#ffffff" }}>Business Japanese for IT Engineers</h2>
        <p style={{ margin: "0 0 32px", fontSize: 16, color: "rgba(255,255,255,0.85)", lineHeight: 1.8 }}>
          Learn the Japanese you actually need at work.<br />
          20 units covering real IT workplace situations,<br />
          from daily standups to client communication.
        </p>
        <button onClick={onStart} style={{ background: "#ffffff", color: "#14469e", border: "none", borderRadius: 0, padding: "14px 36px", fontSize: 16, fontWeight: 700, cursor: "pointer" }}
          onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.background = "#e8eef8"; }}
          onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.background = "#ffffff"; }}>
          Start Learning →
        </button>
      </div>
    </div>
  );
}

function AboutCourse() {
  return (
    <div style={{ marginBottom: 24, padding: "18px 22px", border: "1px solid #dddddd", background: "#f8faff" }}>
      <h3 style={{ margin: "0 0 12px", fontSize: 16, fontWeight: 700, color: "#14469e" }}>このコースについて / About This Course</h3>
      <p style={{ margin: 0, fontSize: 14, color: "#555555", lineHeight: 1.8 }}>
        おしごとJapaneseは、ITエンジニア向けの職場日本語学習コースです。朝会での報告、コードレビュー、クライアント対応など、実際の職場で使う表現を20のユニットで学びます。JLPT N2以上を目標とする方に最適です。
      </p>
    </div>
  );
}


function TopPage({ onSelectUnit, progress }) {
  const router = useRouter();
  const width = useWindowWidth();
  const isPC = width >= 768;
  const pct = Math.round((progress.completed.length / 20) * 100);

  const UnitCard = ({ unit }) => {
    const done = progress.completed.includes(unit.id);
    const inProg = progress.inProgress.includes(unit.id);
    const bg = done ? "#dcfce7" : inProg ? "#fef9c3" : unit.available ? colors.primaryBg : colors.grayBg;
    const border = done ? "#86efac" : inProg ? "#fde047" : unit.available ? "#bfdbfe" : colors.grayLight;
    const numBg = done ? "#22c55e" : inProg ? "#eab308" : unit.available ? colors.primaryLight : "#cbd5e1";
    return (
      <div onClick={() => unit.available && onSelectUnit(unit)} style={{ background: bg, border: `1px solid ${border}`, borderRadius: 0, padding: "13px 15px", cursor: unit.available ? "pointer" : "default", display: "flex", alignItems: "center", gap: 12, transition: "background 0.15s" }}
        onMouseEnter={e => { if (unit.available) { e.currentTarget.style.background = done ? "#bbf7d0" : inProg ? "#fef08a" : "#dbeafe"; }}}
        onMouseLeave={e => { e.currentTarget.style.background = bg; }}>
        <div style={{ width: 34, height: 34, borderRadius: 0, background: numBg, flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", color: colors.white, fontWeight: 700, fontSize: 13 }}>{done ? "✓" : unit.id}</div>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ fontSize: 14, fontWeight: 600, color: unit.available || done ? colors.text : colors.textLight, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{unit.title}</div>
          <div style={{ fontSize: 11, color: colors.gray, marginTop: 2 }}>{unit.titleEn}</div>
        </div>
        {unit.available ? <span style={{ color: colors.primaryLight, fontSize: 18 }}>→</span> : <span style={{ fontSize: 11, color: colors.textLight, background: colors.grayLight, borderRadius: 0, padding: "2px 7px", whiteSpace: "nowrap" }}>Soon</span>}
      </div>
    );
  };

  const main = (
    <div style={{ background: colors.white, borderRadius: 0, padding: isPC ? 28 : 20, boxShadow: "0 4px 24px rgba(0,0,0,0.08)" }}>
      <AboutCourse />
      <div style={{ marginBottom: 24 }}>
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
          <span style={{ fontSize: 14, fontWeight: 600, color: colors.primary }}>Your Progress</span>
          <span style={{ fontSize: 13, color: colors.gray }}>{progress.completed.length} / 20 units</span>
        </div>
        <div style={{ background: colors.grayLight, borderRadius: 0, height: 10, overflow: "hidden" }}>
          <div style={{ width: `${pct}%`, height: "100%", background: "linear-gradient(90deg,#3b82f6,#1d4ed8)", borderRadius: 0, transition: "width 0.6s" }} />
        </div>
        <div style={{ textAlign: "right", marginTop: 4, fontSize: 12, color: colors.textLight }}>{pct}% complete</div>
      </div>
      {!isPC && <div style={{ marginBottom: 20 }}><div style={{ fontSize: 11, fontWeight: 600, color: colors.textLight, marginBottom: 8, letterSpacing: 1 }}>SPONSORED</div><AdBanner horizontal /></div>}
      <h2 style={{ fontSize: 15, fontWeight: 700, color: colors.text, marginBottom: 14, marginTop: 0 }}>Units — IT Industry</h2>
      <div style={{ display: "flex", flexDirection: "column", gap: 9 }}>
        {units.map(u => <UnitCard key={u.id} unit={u} />)}
      </div>
    </div>
  );

  const sidebar = (
    <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
      <div style={{ background: colors.white, borderRadius: 0, padding: 20, boxShadow: "0 4px 24px rgba(0,0,0,0.08)" }}>
        <div style={{ fontSize: 11, fontWeight: 600, color: colors.textLight, marginBottom: 12, letterSpacing: 1 }}>SPONSORED</div>
        <AdBanner />
      </div>
      <div style={{ background: colors.white, borderRadius: 0, padding: 20, boxShadow: "0 2px 12px rgba(0,0,0,0.07)" }}>
        <h3 style={{ margin: "0 0 16px", fontSize: 14, fontWeight: 700, color: colors.text }}>Stats</h3>
        {[{ label: "Completed", value: progress.completed.length, color: "#22c55e" }, { label: "Remaining", value: 20 - progress.completed.length, color: colors.primaryLight }, { label: "Total Units", value: 20, color: colors.gray }].map(s => (
          <div key={s.label} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
            <span style={{ fontSize: 13, color: colors.gray }}>{s.label}</span>
            <span style={{ fontSize: 18, fontWeight: 700, color: s.color }}>{s.value}</span>
          </div>
        ))}
        <div style={{ borderTop: `1px solid ${colors.grayLight}`, paddingTop: 12, fontSize: 12, color: colors.textLight, textAlign: "center" }}>Target: JLPT N2+ · IT Industry</div>
      </div>
    </div>
  );

  return (
    <div style={{ minHeight: "100vh", width: "100vw", background: "#f5f5f5", fontFamily: "'Segoe UI', sans-serif" }}>
      <Header isPC={isPC} />
      <HeroSection onStart={() => router.push("/it")} />
      <div id="units-section" style={{ width: "100%", maxWidth: 1080, margin: "0 auto", padding: isPC ? "24px 24px 48px" : "16px 12px 40px" }}>
        {isPC ? <div style={{ display: "grid", gridTemplateColumns: "1fr 300px", gap: 24, alignItems: "start" }}>{main}{sidebar}</div> : main}
      </div>
      <Footer />
    </div>
  );
}

export default function ITPageClient() {
  const router = useRouter();
  const [progress, setProgress] = useState(DEFAULT_PROGRESS);
  useEffect(() => { loadProgress().then(setProgress); }, []);

  const handleSelectUnit = (unit) => {
    if (!progress.completed.includes(unit.id) && !progress.inProgress.includes(unit.id)) {
      const updated = { ...progress, inProgress: [...progress.inProgress, unit.id] };
      setProgress(updated);
      saveProgress(updated);
    }
    router.push(`/it/unit/${unit.id}`);
  };

  const handleComplete = async (unitId) => {
    if (progress.completed.includes(unitId)) return;
    const updated = { completed: [...progress.completed, unitId], inProgress: progress.inProgress.filter(id => id !== unitId) };
    setProgress(updated);
    await saveProgress(updated);
  };

  return <TopPage onSelectUnit={handleSelectUnit} progress={progress} />;
}
