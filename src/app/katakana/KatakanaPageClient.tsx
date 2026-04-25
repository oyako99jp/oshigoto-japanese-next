"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { katakanaUnits, katakanaDataMap } from "./data";

// ============================================================
// PROGRESS HELPERS
// ============================================================
const STORAGE_KEY = "katakana-progress";
const DEFAULT_PROGRESS: { completed: number[]; inProgress: number[] } = { completed: [], inProgress: [] };

function loadProgress(): { completed: number[]; inProgress: number[] } {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : DEFAULT_PROGRESS;
  } catch {
    return DEFAULT_PROGRESS;
  }
}

function saveProgress(p: { completed: number[]; inProgress: number[] }) {
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify(p)); } catch {}
}

// ============================================================
// HOOKS & CONSTANTS
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
  primary: "#0055BF",
  primaryLight: "#0055BF",
  primaryBg: "#e8f0ff",
  accent: "#E3000B",
  text: "#000000",
  textLight: "#555555",
  gray: "#555555",
  grayLight: "#e0e0e0",
  grayBg: "#f5f5f5",
  white: "#ffffff",
};

// ============================================================
// SHARED COMPONENTS
// ============================================================
function Header({ isPC }: { isPC: boolean }) {
  const router = useRouter();
  return (
    <div style={{ width: "100%", background: colors.primary, color: colors.white }}>
      <div style={{ maxWidth: 1080, margin: "0 auto", padding: isPC ? "18px 24px" : "14px 16px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div>
          <h1 style={{ margin: 0, fontSize: isPC ? 22 : 18, fontWeight: 800 }}>仕事のカタカナ語</h1>
          <p style={{ margin: 0, opacity: 0.85, fontSize: isPC ? 14 : 12 }}>Business Katakana Words — おしごとJAPANESE</p>
        </div>
        <button onClick={() => router.push("/")} style={{ background: "rgba(255,255,255,0.15)", border: "1px solid rgba(255,255,255,0.3)", color: colors.white, cursor: "pointer", fontSize: 13, padding: "6px 14px", fontWeight: 600 }}>← Home</button>
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
          <button onClick={() => router.push("/")} style={{ background: "none", border: "none", color: "#aaaaaa", cursor: "pointer", fontSize: 13, textDecoration: "underline", padding: 0 }}>おしごとJAPANESE</button>
          <button onClick={() => router.push("/privacy")} style={{ background: "none", border: "none", color: "#aaaaaa", cursor: "pointer", fontSize: 13, textDecoration: "underline", padding: 0 }}>プライバシーポリシー</button>
          <button onClick={() => router.push("/contact")} style={{ background: "none", border: "none", color: "#aaaaaa", cursor: "pointer", fontSize: 13, textDecoration: "underline", padding: 0 }}>お問い合わせ</button>
        </div>
      </div>
    </div>
  );
}

function SectionTab({ sections, active, onChange, isPC }: { sections: { id: string; label: string }[]; active: string; onChange: (id: string) => void; isPC: boolean }) {
  return (
    <div style={{ borderBottom: "2px solid #dddddd", display: "flex", gap: 0, marginBottom: 24, overflowX: "auto", overflowY: "hidden", WebkitOverflowScrolling: "touch", whiteSpace: "nowrap" }}>
      {sections.map(s => (
        <button key={s.id} onClick={() => onChange(s.id)} style={{ background: "none", border: "none", borderBottom: active === s.id ? `2px solid ${colors.primary}` : "2px solid transparent", marginBottom: -2, padding: "10px 20px", fontWeight: active === s.id ? 700 : 400, color: active === s.id ? colors.primary : colors.gray, cursor: "pointer", fontSize: isPC ? 13 : 12, display: "inline-block", whiteSpace: "nowrap", flexShrink: 0 }}>{s.label}</button>
      ))}
    </div>
  );
}

// ============================================================
// VOCAB SECTION
// ============================================================
function VocabCard({ word, index }: { word: { id: number; jp: string; reading: string; en: string; example: string; exampleEn: string }; index: number }) {
  const [flipped, setFlipped] = useState(false);
  return (
    <div onClick={() => setFlipped(f => !f)} style={{ background: flipped ? colors.primaryBg : colors.white, border: `1px solid ${flipped ? colors.primaryLight : colors.grayLight}`, borderRadius: 0, padding: "16px 18px", cursor: "pointer", transition: "all 0.2s", boxShadow: "0 1px 3px rgba(0,0,0,0.1)" }}>
      <div style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
        <div style={{ width: 28, height: 28, borderRadius: 0, background: colors.primaryLight, flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", color: colors.white, fontWeight: 700, fontSize: 12 }}>{index + 1}</div>
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: 20, fontWeight: 700, color: colors.text }}>{word.jp}</div>
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

function VocabSection({ vocab }: { vocab: { id: number; jp: string; reading: string; en: string; example: string; exampleEn: string }[] }) {
  return (
    <div>
      <div style={{ background: colors.primaryBg, borderRadius: 0, padding: "14px 18px", marginBottom: 20, borderLeft: `4px solid ${colors.primaryLight}` }}>
        <div style={{ fontSize: 13, fontWeight: 600, color: colors.primary }}>How to use</div>
        <div style={{ fontSize: 13, color: colors.gray, marginTop: 4 }}>Tap each card to reveal the meaning and example sentence.</div>
      </div>
      <h3 style={{ fontSize: 15, fontWeight: 700, color: colors.text, marginBottom: 14 }}>Vocabulary ({vocab.length} words)</h3>
      <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        {vocab.map((w, i) => <VocabCard key={w.id} word={w} index={i} />)}
      </div>
    </div>
  );
}

// ============================================================
// QUIZ SECTION
// ============================================================
function QuizCard({ q }: { q: { id: number; question: string; options: string[]; correct: number; explanation: string } }) {
  const [selected, setSelected] = useState<number | null>(null);
  const [checked, setChecked] = useState(false);
  const isCorrect = selected === q.correct;

  const reset = () => { setSelected(null); setChecked(false); };

  const optionStyle = (i: number) => {
    if (!checked) {
      return {
        border: `2px solid ${selected === i ? colors.primary : colors.grayLight}`,
        background: selected === i ? colors.primaryBg : colors.white,
        color: selected === i ? colors.primary : colors.text,
      };
    }
    if (i === q.correct) return { border: "2px solid #22c55e", background: "#f0fdf4", color: "#16a34a" };
    if (i === selected && i !== q.correct) return { border: "2px solid #ef4444", background: "#fef2f2", color: "#dc2626" };
    return { border: `2px solid ${colors.grayLight}`, background: colors.white, color: colors.textLight };
  };

  return (
    <div style={{ background: colors.white, border: `1px solid ${colors.grayLight}`, borderRadius: 0, padding: "18px 20px", marginBottom: 14 }}>
      <div style={{ fontSize: 12, fontWeight: 700, color: colors.primaryLight, marginBottom: 10 }}>Q{q.id}</div>
      <div style={{ fontSize: 15, color: colors.text, marginBottom: 16, lineHeight: 1.8 }}>{q.question}</div>
      <div style={{ display: "flex", flexDirection: "column", gap: 8, marginBottom: 14 }}>
        {q.options.map((opt, i) => (
          <button
            key={i}
            onClick={() => { if (!checked) { setSelected(i); } }}
            style={{ padding: "10px 16px", borderRadius: 0, cursor: checked ? "default" : "pointer", fontWeight: 500, fontSize: 14, textAlign: "left", transition: "all 0.15s", ...optionStyle(i) }}
          >
            {String.fromCharCode(65 + i)}. {opt}
          </button>
        ))}
      </div>
      <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
        <button onClick={() => setChecked(true)} disabled={selected === null || checked} style={{ background: selected !== null && !checked ? colors.primary : colors.grayLight, color: selected !== null && !checked ? colors.white : colors.textLight, border: "none", borderRadius: 0, padding: "8px 20px", cursor: selected !== null && !checked ? "pointer" : "default", fontWeight: 600, fontSize: 13 }}>Check</button>
        <button onClick={reset} style={{ background: colors.grayLight, color: colors.gray, border: "none", borderRadius: 0, padding: "8px 16px", cursor: "pointer", fontSize: 13 }}>Reset</button>
        {checked && <span style={{ fontSize: 14, fontWeight: 700, color: isCorrect ? "#22c55e" : "#ef4444" }}>{isCorrect ? "Correct!" : "Try again"}</span>}
      </div>
      {checked && (
        <div style={{ marginTop: 12, background: isCorrect ? "#f0fdf4" : "#fef9c3", borderRadius: 0, padding: "10px 14px", fontSize: 13, color: isCorrect ? "#16a34a" : "#854d0e", borderLeft: `3px solid ${isCorrect ? "#22c55e" : "#eab308"}` }}>
          <span style={{ fontWeight: 700 }}>解説：</span>{q.explanation}
        </div>
      )}
    </div>
  );
}

function QuizSection({ quiz }: { quiz: { id: number; question: string; options: string[]; correct: number; explanation: string }[] }) {
  return (
    <div>
      <div style={{ background: colors.primaryBg, borderRadius: 0, padding: "14px 18px", marginBottom: 20, borderLeft: `4px solid ${colors.primaryLight}` }}>
        <div style={{ fontSize: 13, fontWeight: 600, color: colors.primary }}>Practice Quiz</div>
        <div style={{ fontSize: 13, color: colors.gray, marginTop: 4 }}>Select the best answer for each question. Read the explanation after checking.</div>
      </div>
      {quiz.map(q => <QuizCard key={q.id} q={q} />)}
    </div>
  );
}

// ============================================================
// COMPLETE MODAL
// ============================================================
function CompleteModal({ unit, onClose }: { unit: { id: number; title: string; titleEn: string }; onClose: () => void }) {
  return (
    <div style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.5)", zIndex: 1000, display: "flex", alignItems: "center", justifyContent: "center", padding: 24 }}>
      <div style={{ background: colors.white, borderRadius: 0, padding: 36, maxWidth: 400, width: "100%", textAlign: "center", boxShadow: "0 20px 60px rgba(0,0,0,0.3)" }}>
        <div style={{ fontSize: 40, marginBottom: 12 }}>🎉</div>
        <div style={{ fontSize: 22, fontWeight: 800, color: colors.text, marginBottom: 8 }}>Unit {unit.id} Complete!</div>
        <div style={{ fontSize: 15, color: colors.gray, marginBottom: 4 }}>{unit.title}</div>
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
const UNIT_SECTIONS = [
  { id: "vocab", label: "Vocabulary" },
  { id: "quiz", label: "Practice Quiz" },
];
const SECTION_ORDER = ["vocab", "quiz"];

function UnitPage({ unitId, onBack, onComplete, unitCompleted }: { unitId: number; onBack: () => void; onComplete: (id: number) => void; unitCompleted: boolean }) {
  const width = useWindowWidth();
  const isPC = width >= 768;
  const [section, setSection] = useState("vocab");
  const [showModal, setShowModal] = useState(false);

  const unitData = katakanaDataMap[unitId];
  if (!unitData) return null;

  const currentIdx = SECTION_ORDER.indexOf(section);

  const handleComplete = () => { onComplete(unitData.id); setShowModal(true); };

  const content = (
    <div style={{ background: colors.white, borderRadius: 0, padding: isPC ? 28 : 20, boxShadow: "0 4px 24px rgba(0,0,0,0.08)" }}>
      <button onClick={onBack} style={{ background: "none", border: "none", color: colors.primaryLight, cursor: "pointer", fontSize: 14, fontWeight: 600, marginBottom: 16, padding: 0 }}>← Back to Units</button>
      <div style={{ marginBottom: 20 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 6, flexWrap: "wrap" }}>
          <span style={{ background: colors.primaryLight, color: colors.white, borderRadius: 0, padding: "4px 12px", fontSize: 13, fontWeight: 700 }}>Unit {unitData.id}</span>
          <span style={{ fontSize: 13, color: colors.gray }}>Business Katakana</span>
          {unitCompleted && <span style={{ background: "#dcfce7", color: "#16a34a", borderRadius: 0, padding: "4px 10px", fontSize: 12, fontWeight: 700 }}>Completed</span>}
        </div>
        <h2 style={{ margin: 0, fontSize: isPC ? 22 : 18, fontWeight: 800, color: colors.text }}>{unitData.title}</h2>
        <p style={{ margin: "6px 0 0", fontSize: 14, color: colors.gray }}>{unitData.titleEn}</p>
      </div>
      <SectionTab sections={UNIT_SECTIONS} active={section} onChange={setSection} isPC={isPC} />
      {section === "vocab" && <VocabSection vocab={unitData.vocab} />}
      {section === "quiz" && <QuizSection quiz={unitData.quiz} />}
      <div style={{ display: "flex", gap: 10, marginTop: 28, justifyContent: "space-between" }}>
        {currentIdx > 0
          ? <button onClick={() => setSection(SECTION_ORDER[currentIdx - 1])} style={{ background: colors.grayLight, color: colors.gray, border: "none", borderRadius: 0, padding: "10px 20px", cursor: "pointer", fontWeight: 600, fontSize: 14 }}>← 前へ / Prev</button>
          : <div />}
        {currentIdx < SECTION_ORDER.length - 1
          ? <button onClick={() => setSection(SECTION_ORDER[currentIdx + 1])} style={{ background: colors.primaryLight, color: colors.white, border: "none", borderRadius: 0, padding: "10px 24px", cursor: "pointer", fontWeight: 600, fontSize: 14 }}>次へ / Next →</button>
          : <button onClick={handleComplete} style={{ background: unitCompleted ? "#22c55e" : "linear-gradient(135deg,#16a34a,#22c55e)", color: colors.white, border: "none", borderRadius: 0, padding: "10px 24px", cursor: "pointer", fontWeight: 700, fontSize: 14 }}>{unitCompleted ? "Completed!" : "Unit完了 / Mark Complete"}</button>}
      </div>
      {showModal && <CompleteModal unit={unitData} onClose={() => { setShowModal(false); onBack(); }} />}
    </div>
  );

  const sidebar = (
    <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
      <div style={{ background: colors.white, borderRadius: 0, padding: 20, boxShadow: "0 2px 12px rgba(0,0,0,0.07)" }}>
        <h3 style={{ margin: "0 0 14px", fontSize: 14, fontWeight: 700, color: colors.text }}>Unit {unitData.id} Contents</h3>
        {UNIT_SECTIONS.map(s => (
          <button key={s.id} onClick={() => setSection(s.id)} style={{ display: "block", width: "100%", textAlign: "left", background: section === s.id ? colors.primaryBg : "none", border: "none", borderRadius: 0, padding: "8px 12px", cursor: "pointer", fontSize: 13, fontWeight: section === s.id ? 700 : 400, color: section === s.id ? colors.primary : colors.gray, marginBottom: 4 }}>{s.label}</button>
        ))}
        <div style={{ borderTop: `1px solid ${colors.grayLight}`, paddingTop: 12, marginTop: 8, fontSize: 12, color: colors.textLight }}>
          {unitData.vocab.length} words · {unitData.quiz.length} quiz questions
        </div>
      </div>
      <div style={{ background: colors.primaryBg, borderRadius: 0, padding: "14px 16px", borderLeft: `3px solid ${colors.primary}` }}>
        <div style={{ fontSize: 12, fontWeight: 700, color: colors.primary, marginBottom: 6 }}>このユニットについて</div>
        <div style={{ fontSize: 12, color: colors.gray, lineHeight: 1.7 }}>職場でよく使うカタカナ語を単語カードで学び、クイズで確認しましょう。</div>
      </div>
    </div>
  );

  return (
    <div style={{ minHeight: "100vh", width: "100vw", background: "#f5f5f5", fontFamily: "'Plus Jakarta Sans', sans-serif", display: "flex", flexDirection: "column" }}>
      <Header isPC={isPC} />
      <div style={{ width: "100%", maxWidth: 1080, margin: "0 auto", padding: isPC ? "24px 24px 48px" : "16px 12px 40px", flex: 1 }}>
        {isPC ? <div style={{ display: "grid", gridTemplateColumns: "1fr 300px", gap: 24, alignItems: "start" }}>{content}{sidebar}</div> : content}
      </div>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;600;700;800&display=swap');`}</style>
      <Footer />
    </div>
  );
}

// ============================================================
// TOP PAGE
// ============================================================
function TopPage({ onSelectUnit, progress }: { onSelectUnit: (unit: { id: number; title: string; titleEn: string; available: boolean }) => void; progress: { completed: number[]; inProgress: number[] } }) {
  const width = useWindowWidth();
  const isPC = width >= 768;
  const TOTAL = katakanaUnits.length;
  const pct = Math.round((progress.completed.length / TOTAL) * 100);

  const UnitCard = ({ unit }: { unit: { id: number; title: string; titleEn: string; available: boolean } }) => {
    const done = progress.completed.includes(unit.id);
    const inProg = progress.inProgress.includes(unit.id);
    const bg = done ? "#dcfce7" : inProg ? "#fef9c3" : unit.available ? colors.primaryBg : colors.grayBg;
    const border = done ? "#86efac" : inProg ? "#fde047" : unit.available ? "#bfdbfe" : colors.grayLight;
    const numBg = done ? "#22c55e" : inProg ? "#eab308" : unit.available ? colors.primaryLight : "#cbd5e1";
    return (
      <div
        onClick={() => unit.available && onSelectUnit(unit)}
        style={{ background: bg, border: `1px solid ${border}`, borderRadius: 0, padding: "13px 15px", cursor: unit.available ? "pointer" : "default", display: "flex", alignItems: "center", gap: 12, transition: "background 0.15s" }}
        onMouseEnter={e => { if (unit.available) { (e.currentTarget as HTMLDivElement).style.background = done ? "#bbf7d0" : inProg ? "#fef08a" : "#dbeafe"; } }}
        onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.background = bg; }}
      >
        <div style={{ width: 34, height: 34, borderRadius: 0, background: numBg, flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", color: colors.white, fontWeight: 700, fontSize: 13 }}>{done ? "✓" : unit.id}</div>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ fontSize: 14, fontWeight: 600, color: unit.available || done ? colors.text : colors.textLight, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{unit.title}</div>
          <div style={{ fontSize: 11, color: colors.gray, marginTop: 2 }}>{unit.titleEn}</div>
        </div>
        {unit.available
          ? <span style={{ color: colors.primaryLight, fontSize: 18 }}>→</span>
          : <span style={{ fontSize: 11, color: colors.textLight, background: colors.grayLight, borderRadius: 0, padding: "2px 7px", whiteSpace: "nowrap" }}>Soon</span>}
      </div>
    );
  };

  const main = (
    <div style={{ background: colors.white, borderRadius: 0, padding: isPC ? 28 : 20, boxShadow: "0 4px 24px rgba(0,0,0,0.08)" }}>
      <div style={{ marginBottom: 24, padding: "18px 22px", border: "1px solid #dddddd", background: "#f8faff" }}>
        <h3 style={{ margin: "0 0 12px", fontSize: 16, fontWeight: 700, color: colors.primary }}>このコースについて / About This Course</h3>
        <p style={{ margin: 0, fontSize: 14, color: colors.gray, lineHeight: 1.8 }}>
          職場でよく使うカタカナ語を10のユニットで学べます。単語カードで意味と例文を確認し、クイズで理解を定着させましょう。<br />
          Learn business katakana words used daily in Japanese workplaces — 10 units, 10 words each, with vocabulary cards and practice quizzes.
        </p>
      </div>
      <div style={{ marginBottom: 24 }}>
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
          <span style={{ fontSize: 14, fontWeight: 600, color: colors.primary }}>Your Progress</span>
          <span style={{ fontSize: 13, color: colors.gray }}>{progress.completed.length} / {TOTAL} units</span>
        </div>
        <div style={{ background: colors.grayLight, borderRadius: 0, height: 10, overflow: "hidden" }}>
          <div style={{ width: `${pct}%`, height: "100%", background: "linear-gradient(90deg,#3b82f6,#1d4ed8)", borderRadius: 0, transition: "width 0.6s" }} />
        </div>
        <div style={{ textAlign: "right", marginTop: 4, fontSize: 12, color: colors.textLight }}>{pct}% complete</div>
      </div>
      <h2 style={{ fontSize: 15, fontWeight: 700, color: colors.text, marginBottom: 14, marginTop: 0 }}>Units — Business Katakana</h2>
      <div style={{ display: "flex", flexDirection: "column", gap: 9 }}>
        {katakanaUnits.map(u => <UnitCard key={u.id} unit={u} />)}
      </div>
    </div>
  );

  const sidebar = (
    <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
      <div style={{ background: colors.white, borderRadius: 0, padding: 20, boxShadow: "0 2px 12px rgba(0,0,0,0.07)" }}>
        <h3 style={{ margin: "0 0 16px", fontSize: 14, fontWeight: 700, color: colors.text }}>Stats</h3>
        {[
          { label: "Completed", value: progress.completed.length, color: "#22c55e" },
          { label: "Remaining", value: TOTAL - progress.completed.length, color: colors.primaryLight },
          { label: "Total Units", value: TOTAL, color: colors.gray },
        ].map(s => (
          <div key={s.label} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
            <span style={{ fontSize: 13, color: colors.gray }}>{s.label}</span>
            <span style={{ fontSize: 18, fontWeight: 700, color: s.color }}>{s.value}</span>
          </div>
        ))}
        <div style={{ borderTop: `1px solid ${colors.grayLight}`, paddingTop: 12, fontSize: 12, color: colors.textLight, textAlign: "center" }}>10 words + 5 quiz questions per unit</div>
      </div>
      <div style={{ background: colors.primaryBg, borderRadius: 0, padding: "16px", borderLeft: `3px solid ${colors.primary}` }}>
        <div style={{ fontSize: 13, fontWeight: 700, color: colors.primary, marginBottom: 8 }}>学習のポイント</div>
        {["単語カードをタップして意味を確認", "例文で使い方を覚える", "クイズで理解を確かめる"].map((tip, i) => (
          <div key={i} style={{ display: "flex", gap: 8, alignItems: "flex-start", marginBottom: 6 }}>
            <span style={{ color: colors.primary, fontWeight: 700, flexShrink: 0 }}>·</span>
            <span style={{ fontSize: 12, color: colors.gray }}>{tip}</span>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div style={{ minHeight: "100vh", width: "100vw", background: "#f5f5f5", fontFamily: "'Plus Jakarta Sans', sans-serif", display: "flex", flexDirection: "column" }}>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;600;700;800&display=swap');`}</style>
      <Header isPC={isPC} />
      <div style={{ width: "100%", background: colors.primary, padding: isPC ? "48px 24px" : "32px 16px", textAlign: "center" }}>
        <div style={{ maxWidth: 1080, margin: "0 auto" }}>
          <h2 style={{ margin: "0 0 12px", fontSize: isPC ? 28 : 22, fontWeight: 800, color: colors.white }}>仕事のカタカナ語</h2>
          <p style={{ margin: 0, fontSize: isPC ? 16 : 14, color: "rgba(255,255,255,0.85)", lineHeight: 1.8 }}>
            職場でよく使うカタカナ語を学べます。単語・クイズで実践的に練習できます。
          </p>
        </div>
      </div>
      <div style={{ width: "100%", maxWidth: 1080, margin: "0 auto", padding: isPC ? "24px 24px 48px" : "16px 12px 40px", flex: 1 }}>
        {isPC ? <div style={{ display: "grid", gridTemplateColumns: "1fr 300px", gap: 24, alignItems: "start" }}>{main}{sidebar}</div> : main}
      </div>
      <Footer />
    </div>
  );
}

// ============================================================
// ROOT EXPORT
// ============================================================
export default function KatakanaPageClient() {
  const [progress, setProgress] = useState(DEFAULT_PROGRESS);
  const [activeUnitId, setActiveUnitId] = useState<number | null>(null);

  useEffect(() => { setProgress(loadProgress()); }, []);

  const handleSelectUnit = (unit: { id: number; title: string; titleEn: string; available: boolean }) => {
    if (!progress.completed.includes(unit.id) && !progress.inProgress.includes(unit.id)) {
      const updated = { ...progress, inProgress: [...progress.inProgress, unit.id] };
      setProgress(updated);
      saveProgress(updated);
    }
    setActiveUnitId(unit.id);
  };

  const handleComplete = (unitId: number) => {
    if (progress.completed.includes(unitId)) return;
    const updated = {
      completed: [...progress.completed, unitId],
      inProgress: progress.inProgress.filter(id => id !== unitId),
    };
    setProgress(updated);
    saveProgress(updated);
  };

  const handleBack = () => setActiveUnitId(null);

  if (activeUnitId !== null) {
    return (
      <UnitPage
        unitId={activeUnitId}
        onBack={handleBack}
        onComplete={handleComplete}
        unitCompleted={progress.completed.includes(activeUnitId)}
      />
    );
  }

  return <TopPage onSelectUnit={handleSelectUnit} progress={progress} />;
}
