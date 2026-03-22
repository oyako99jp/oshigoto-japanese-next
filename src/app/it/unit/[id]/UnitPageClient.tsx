"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { unitDataMap } from "../../data";

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
// UNIT PAGE
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
// DEFAULT EXPORT
// ============================================================
export default function UnitPageClient({ id }: { id: string }) {
  const router = useRouter();
  const unitId = Number(id);
  const unitData = unitDataMap[unitId];
  if (!unitData) return null;
  return (
    <UnitPage
      unitData={unitData}
      onBack={() => router.push("/it")}
      onComplete={() => {}}
      unitCompleted={false}
    />
  );
}
