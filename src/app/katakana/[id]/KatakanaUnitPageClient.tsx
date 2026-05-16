"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { katakanaDataMap } from "../../data";

// ============================================================
// HOOKS
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

// ============================================================
// CONSTANTS
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

const colors = {
  yellow: "#FFD500",
  blue: "#0055BF",
  black: "#000000",
  white: "#ffffff",
  gray: "#555555",
  grayLight: "#e0e0e0",
  grayBg: "#f5f5f5",
  primary: "#FFD500",
  primaryBg: "#fffde6",
  accent: "#0055BF",
  text: "#000000",
  textLight: "#555555",
};

// ============================================================
// HEADER / FOOTER
// ============================================================
function Header({ isPC }: { isPC: boolean }) {
  const router = useRouter();
  return (
    <div style={{ width: "100%", background: colors.yellow, borderBottom: `3px solid ${colors.black}` }}>
      <div style={{ maxWidth: 1080, margin: "0 auto", padding: isPC ? "16px 24px" : "12px 16px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div>
          <div style={{ fontSize: isPC ? 20 : 16, fontWeight: 900, color: colors.black, letterSpacing: "0.02em" }}>仕事のカタカナ語</div>
          <div style={{ fontSize: isPC ? 12 : 11, color: colors.black, opacity: 0.65, fontWeight: 600, letterSpacing: "0.08em" }}>おしごとJAPANESE</div>
        </div>
        <button
          onClick={() => router.push("/katakana")}
          style={{ background: "none", border: `2px solid ${colors.black}`, color: colors.black, cursor: "pointer", fontSize: 13, padding: "6px 14px", fontWeight: 700 }}
        >
          ← ユニット一覧
        </button>
      </div>
    </div>
  );
}

function Footer() {
  const router = useRouter();
  return (
    <div style={{ width: "100%", background: colors.black, color: colors.white }}>
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
    <div style={{ borderBottom: `2px solid ${colors.grayLight}`, display: "flex", gap: 0, marginBottom: 24 }}>
      {sections.map(s => (
        <button
          key={s.id}
          onClick={() => onChange(s.id)}
          style={{ background: "none", border: "none", borderBottom: active === s.id ? `2px solid ${colors.accent}` : "2px solid transparent", marginBottom: -2, padding: "10px 20px", fontWeight: active === s.id ? 700 : 400, color: active === s.id ? colors.accent : colors.gray, cursor: "pointer", fontSize: isPC ? 13 : 12 }}
        >
          {s.label}
        </button>
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
    <div
      onClick={() => setFlipped(f => !f)}
      style={{ background: flipped ? colors.primaryBg : colors.white, border: `1px solid ${flipped ? colors.yellow : colors.grayLight}`, borderLeft: flipped ? `3px solid ${colors.yellow}` : `1px solid ${colors.grayLight}`, padding: "16px 18px", cursor: "pointer", transition: "all 0.2s" }}
    >
      <div style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
        <div style={{ width: 28, height: 28, background: colors.yellow, border: `1px solid ${colors.black}`, flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontSize: 12, color: colors.black }}>{index + 1}</div>
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: 18, fontWeight: 700, color: colors.text }}>{word.jp}</div>
          <div style={{ fontSize: 12, color: colors.gray, marginTop: 2 }}>{word.reading}</div>
          {flipped && (
            <div style={{ marginTop: 10, paddingTop: 10, borderTop: `1px solid ${colors.grayLight}` }}>
              <div style={{ fontSize: 14, fontWeight: 600, color: colors.accent, marginBottom: 8 }}>{word.en}</div>
              <div style={{ fontSize: 13, color: colors.text, background: colors.white, padding: "8px 12px", border: `1px solid ${colors.grayLight}` }}>
                <span style={{ fontWeight: 600 }}>例：</span>{word.example}
              </div>
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
      <div style={{ background: colors.primaryBg, padding: "14px 18px", marginBottom: 20, borderLeft: `4px solid ${colors.yellow}` }}>
        <div style={{ fontSize: 13, fontWeight: 600, color: colors.accent }}>How to use</div>
        <div style={{ fontSize: 13, color: colors.gray, marginTop: 4 }}>各カードをタップして意味と例文を確認しましょう。</div>
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
function QuizSection({ quiz }: { quiz: { id: number; question: string; options: string[]; correct: number; explanation: string }[] }) {
  const [idx, setIdx] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [checked, setChecked] = useState(false);
  const [score, setScore] = useState(0);
  const [done, setDone] = useState(false);

  const q = quiz[idx];
  const total = quiz.length;

  const handleCheck = () => {
    if (selected === null) return;
    if (selected === q.correct) setScore(s => s + 1);
    setChecked(true);
  };

  const handleNext = () => {
    if (idx < total - 1) {
      setIdx(i => i + 1);
      setSelected(null);
      setChecked(false);
    } else {
      setDone(true);
    }
  };

  const handleRestart = () => {
    setIdx(0);
    setSelected(null);
    setChecked(false);
    setScore(0);
    setDone(false);
  };

  if (done) {
    const pct = Math.round((score / total) * 100);
    return (
      <div style={{ textAlign: "center", padding: "32px 0" }}>
        <div style={{ fontSize: 48, marginBottom: 12 }}>{pct >= 60 ? "🎉" : "💪"}</div>
        <div style={{ fontSize: 22, fontWeight: 900, marginBottom: 8 }}>{score} / {total}</div>
        <div style={{ fontSize: 14, color: colors.gray, marginBottom: 24 }}>{pct}% correct</div>
        <button onClick={handleRestart} style={{ background: colors.yellow, color: colors.black, border: `2px solid ${colors.black}`, padding: "10px 28px", fontWeight: 700, fontSize: 14, cursor: "pointer", boxShadow: `3px 3px 0 ${colors.black}` }}>
          もう一度 / Try Again
        </button>
      </div>
    );
  }

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
        <span style={{ fontSize: 13, fontWeight: 700, color: colors.gray }}>Q{idx + 1} / {total}</span>
        <div style={{ flex: 1, margin: "0 12px", background: colors.grayLight, height: 6, overflow: "hidden" }}>
          <div style={{ width: `${(idx / total) * 100}%`, height: "100%", background: colors.yellow, transition: "width 0.4s" }} />
        </div>
      </div>

      <div style={{ background: colors.white, border: `1px solid ${colors.grayLight}`, borderLeft: `4px solid ${colors.yellow}`, padding: "20px 22px", marginBottom: 20 }}>
        <div style={{ fontSize: 16, fontWeight: 700, color: colors.text, lineHeight: 1.7 }}>{q.question}</div>
        {checked && (
          <div style={{ marginTop: 12, padding: "10px 14px", background: colors.primaryBg, borderLeft: `3px solid ${colors.yellow}`, fontSize: 13, color: colors.gray }}>
            💡 {q.explanation}
          </div>
        )}
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 20 }}>
        {q.options.map((opt, i) => {
          const isCorrect = checked && i === q.correct;
          const isWrong = checked && selected === i && i !== q.correct;
          return (
            <button
              key={i}
              onClick={() => !checked && setSelected(i)}
              style={{
                background: isCorrect ? "#dcfce7" : isWrong ? "#fee2e2" : selected === i ? colors.primaryBg : colors.white,
                border: `2px solid ${isCorrect ? "#86efac" : isWrong ? "#fca5a5" : selected === i ? colors.yellow : colors.grayLight}`,
                borderLeft: `4px solid ${isCorrect ? "#22c55e" : isWrong ? "#ef4444" : selected === i ? colors.yellow : colors.grayLight}`,
                padding: "12px 16px",
                textAlign: "left",
                cursor: checked ? "default" : "pointer",
                fontWeight: selected === i || isCorrect ? 700 : 400,
                fontSize: 14,
                color: colors.text,
                display: "flex",
                alignItems: "center",
                gap: 10,
              }}
            >
              <span style={{ width: 22, height: 22, background: isCorrect ? "#22c55e" : isWrong ? "#ef4444" : selected === i ? colors.yellow : colors.grayLight, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11, fontWeight: 900, color: isCorrect || isWrong ? colors.white : colors.gray, flexShrink: 0 }}>
                {isCorrect ? "✓" : isWrong ? "✗" : String.fromCharCode(65 + i)}
              </span>
              {opt}
            </button>
          );
        })}
      </div>

      {!checked
        ? <button onClick={handleCheck} disabled={selected === null} style={{ background: selected !== null ? colors.accent : colors.grayLight, color: selected !== null ? colors.white : colors.gray, border: "none", padding: "12px 28px", fontWeight: 700, fontSize: 14, cursor: selected !== null ? "pointer" : "default", width: "100%" }}>
            回答する / Check
          </button>
        : <button onClick={handleNext} style={{ background: colors.accent, color: colors.white, border: "none", padding: "12px 28px", fontWeight: 700, fontSize: 14, cursor: "pointer", width: "100%" }}>
            {idx < total - 1 ? "次へ / Next →" : "結果を見る / Finish"}
          </button>
      }
    </div>
  );
}

// ============================================================
// COMPLETE MODAL
// ============================================================
function CompleteModal({ unitId, title, onClose }: { unitId: number; title: string; onClose: () => void }) {
  return (
    <div style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.5)", zIndex: 1000, display: "flex", alignItems: "center", justifyContent: "center", padding: 24 }}>
      <div style={{ background: colors.white, padding: 36, maxWidth: 400, width: "100%", textAlign: "center", border: `3px solid ${colors.black}`, boxShadow: `6px 6px 0 ${colors.black}` }}>
        <div style={{ fontSize: 22, fontWeight: 800, color: colors.text, marginBottom: 8 }}>Unit {unitId} Complete! 🎉</div>
        <div style={{ fontSize: 15, color: colors.gray, marginBottom: 24 }}>{title}</div>
        <div style={{ background: colors.primaryBg, padding: "14px 20px", marginBottom: 24, border: `1px solid ${colors.yellow}` }}>
          <div style={{ fontSize: 13, color: colors.accent, fontWeight: 600 }}>進捗が保存されました / Progress saved!</div>
        </div>
        <button onClick={onClose} style={{ background: colors.yellow, color: colors.black, border: `2px solid ${colors.black}`, padding: "12px 32px", cursor: "pointer", fontWeight: 700, fontSize: 15, width: "100%", boxShadow: `3px 3px 0 ${colors.black}` }}>
          ← ユニット一覧に戻る
        </button>
      </div>
    </div>
  );
}

// ============================================================
// MAIN UNIT PAGE
// ============================================================
function UnitPage({ unitId, unitCompleted, onComplete }: { unitId: number; unitCompleted: boolean; onComplete: (id: number) => void }) {
  const router = useRouter();
  const width = useWindowWidth();
  const isPC = width >= 768;
  const [section, setSection] = useState("vocab");
  const [showModal, setShowModal] = useState(false);

  const unitData = katakanaDataMap[unitId];
  if (!unitData) return null;

  const sections = [
    { id: "vocab", label: "Vocabulary" },
    { id: "quiz", label: "Quiz" },
  ];

  const handleComplete = () => {
    onComplete(unitId);
    setShowModal(true);
  };

  const content = (
    <div style={{ background: colors.white, padding: isPC ? 28 : 20, boxShadow: "0 4px 24px rgba(0,0,0,0.08)", border: `1px solid ${colors.grayLight}` }}>
      <button onClick={() => router.push("/katakana")} style={{ background: "none", border: "none", color: colors.accent, cursor: "pointer", fontSize: 14, fontWeight: 600, marginBottom: 16, padding: 0 }}>
        ← ユニット一覧に戻る
      </button>
      <div style={{ marginBottom: 20 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 6, flexWrap: "wrap" }}>
          <span style={{ background: colors.yellow, color: colors.black, border: `2px solid ${colors.black}`, padding: "4px 12px", fontSize: 13, fontWeight: 700 }}>Unit {unitId}</span>
          {unitCompleted && <span style={{ background: "#dcfce7", color: "#16a34a", padding: "4px 10px", fontSize: 12, fontWeight: 700 }}>✓ Completed</span>}
        </div>
        <h2 style={{ margin: 0, fontSize: isPC ? 22 : 18, fontWeight: 800, color: colors.text }}>{unitData.title}</h2>
        <p style={{ margin: "6px 0 0", fontSize: 14, color: colors.gray }}>{unitData.titleEn}</p>
      </div>

      <SectionTab sections={sections} active={section} onChange={setSection} isPC={isPC} />

      {section === "vocab" && <VocabSection vocab={unitData.vocab} />}
      {section === "quiz" && <QuizSection quiz={unitData.quiz} />}

      <div style={{ display: "flex", justifyContent: "flex-end", marginTop: 28 }}>
        <button
          onClick={handleComplete}
          style={{ background: unitCompleted ? "#22c55e" : colors.yellow, color: unitCompleted ? colors.white : colors.black, border: `2px solid ${colors.black}`, padding: "10px 24px", cursor: "pointer", fontWeight: 700, fontSize: 14, boxShadow: `3px 3px 0 ${colors.black}` }}
        >
          {unitCompleted ? "✓ Completed!" : "Unit完了 / Mark Complete"}
        </button>
      </div>
      {showModal && <CompleteModal unitId={unitId} title={unitData.title} onClose={() => { setShowModal(false); router.push("/katakana"); }} />}
    </div>
  );

  const sidebar = (
    <div style={{ background: colors.white, padding: 20, boxShadow: "0 2px 12px rgba(0,0,0,0.07)", border: `1px solid ${colors.grayLight}` }}>
      <h3 style={{ margin: "0 0 14px", fontSize: 14, fontWeight: 700, color: colors.text }}>Unit {unitId} Contents</h3>
      {sections.map(s => (
        <button key={s.id} onClick={() => setSection(s.id)} style={{ display: "block", width: "100%", textAlign: "left", background: section === s.id ? colors.primaryBg : "none", border: "none", padding: "8px 12px", cursor: "pointer", fontSize: 13, fontWeight: section === s.id ? 700 : 400, color: section === s.id ? colors.accent : colors.gray, marginBottom: 4 }}>
          {s.label}
        </button>
      ))}
    </div>
  );

  return (
    <div style={{ minHeight: "100vh", width: "100vw", background: "#f5f5f5", fontFamily: "'Plus Jakarta Sans', sans-serif", display: "flex", flexDirection: "column" }}>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;600;700;800;900&display=swap');`}</style>
      <Header isPC={isPC} />
      <div style={{ width: "100%", maxWidth: 1080, margin: "0 auto", padding: isPC ? "24px 24px 48px" : "16px 12px 40px", flex: 1 }}>
        {isPC ? <div style={{ display: "grid", gridTemplateColumns: "1fr 300px", gap: 24, alignItems: "start" }}>{content}{sidebar}</div> : content}
      </div>
      <Footer />
    </div>
  );
}

// ============================================================
// DEFAULT EXPORT
// ============================================================
export default function KatakanaUnitPageClient({ id }: { id: string }) {
  const unitId = Number(id);
  const [progress, setProgress] = useState(DEFAULT_PROGRESS);

  useEffect(() => { setProgress(loadProgress()); }, []);

  const handleComplete = (uid: number) => {
    if (progress.completed.includes(uid)) return;
    const updated = {
      completed: [...progress.completed, uid],
      inProgress: progress.inProgress.filter(id => id !== uid),
    };
    setProgress(updated);
    saveProgress(updated);
  };

  const unitData = katakanaDataMap[unitId];
  if (!unitData) return null;

  return (
    <UnitPage
      unitId={unitId}
      unitCompleted={progress.completed.includes(unitId)}
      onComplete={handleComplete}
    />
  );
}
