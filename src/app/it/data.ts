// data.ts - すべてのユニットデータ

export const units = [
  { id: 1, title: "自己紹介・初日の挨拶", titleEn: "Self-Introduction & First Day", available: true },
  { id: 2, title: "朝会", titleEn: "Morning Meeting", available: true },
  { id: 3, title: "質問・確認の仕方", titleEn: "How to Ask & Confirm", available: true },
  { id: 4, title: "スケジュール・締め切りの調整", titleEn: "Schedule & Deadline Management", available: true },
  { id: 5, title: "メール・Slackの基本", titleEn: "Email & Slack Basics", available: true },
  { id: 6, title: "仕様確認・要件定義", titleEn: "Spec Review & Requirements", available: true },
  { id: 7, title: "バグ報告・トラブル対応", titleEn: "Bug Reports & Troubleshooting", available: true },
  { id: 8, title: "コードレビュー", titleEn: "Code Reviews", available: true },
  { id: 9, title: "ミーティング・会議", titleEn: "Meetings & Conferences", available: true },
  { id: 10, title: "プロジェクト管理", titleEn: "Project Management", available: true },
  { id: 11, title: "テスト・品質確認", titleEn: "Testing & Quality Assurance", available: true },
  { id: 12, title: "報告・連絡・相談", titleEn: "Reporting & Communication", available: true },
  { id: 13, title: "依頼・お願いの仕方", titleEn: "Making Requests", available: true },
  { id: 14, title: "断る・調整する", titleEn: "Declining & Adjusting", available: true },
  { id: 15, title: "フィードバックを受ける・与える", titleEn: "Giving & Receiving Feedback", available: true },
  { id: 16, title: "雑談・社内イベント", titleEn: "Small Talk & Office Events", available: true },
  { id: 17, title: "クライアント・顧客対応", titleEn: "Client Communication", available: true },
  { id: 18, title: "障害対応・緊急時の日本語", titleEn: "Incident Response", available: true },
  { id: 19, title: "昇進・評価面談", titleEn: "Performance Reviews", available: true },
  { id: 20, title: "転職・退職の日本語", titleEn: "Job Changes & Resignation", available: true },
];

// ---- UNIT 1 DATA ----
export const unit1Vocab = [
  { id: 1, jp: "自己紹介", reading: "じこしょうかい", en: "self-introduction", example: "自己紹介をさせてください。", exampleEn: "Please allow me to introduce myself." },
  { id: 2, jp: "よろしくお願いします", reading: "よろしくおねがいします", en: "pleased to meet you / I'm in your care", example: "どうぞよろしくお願いします。", exampleEn: "I look forward to working with you." },
  { id: 3, jp: "担当", reading: "たんとう", en: "in charge of / responsible for", example: "フロントエンドを担当しています。", exampleEn: "I'm in charge of frontend development." },
  { id: 4, jp: "所属", reading: "しょぞく", en: "belong to / affiliation", example: "開発部に所属しています。", exampleEn: "I belong to the development department." },
  { id: 5, jp: "経験", reading: "けいけん", en: "experience", example: "Pythonの経験が3年あります。", exampleEn: "I have 3 years of experience with Python." },
  { id: 6, jp: "得意", reading: "とくい", en: "good at / specialty", example: "データ分析が得意です。", exampleEn: "I'm good at data analysis." },
  { id: 7, jp: "苦手", reading: "にがて", en: "not good at / weakness", example: "敬語がまだ苦手です。", exampleEn: "I'm not yet good at keigo." },
  { id: 8, jp: "出身", reading: "しゅっしん", en: "from / hometown", example: "インド出身です。", exampleEn: "I'm from India." },
  { id: 9, jp: "部署", reading: "ぶしょ", en: "department", example: "どの部署ですか？", exampleEn: "Which department are you in?" },
  { id: 10, jp: "役職", reading: "やくしょく", en: "position / title", example: "役職は何ですか？", exampleEn: "What is your position?" },
  { id: 11, jp: "入社", reading: "にゅうしゃ", en: "joining a company", example: "今月入社しました。", exampleEn: "I joined the company this month." },
  { id: 12, jp: "前職", reading: "ぜんしょく", en: "previous job", example: "前職はエンジニアでした。", exampleEn: "My previous job was as an engineer." },
  { id: 13, jp: "参加する", reading: "さんかする", en: "to join / participate", example: "プロジェクトに参加します。", exampleEn: "I will join the project." },
  { id: 14, jp: "ご指導ください", reading: "ごしどうください", en: "please guide me", example: "ご指導よろしくお願いします。", exampleEn: "Please guide and support me." },
  { id: 15, jp: "不明な点", reading: "ふめいなてん", en: "unclear points", example: "不明な点があれば聞いてください。", exampleEn: "Please ask if there's anything unclear." },
];

export const unit1ITRoles = [
  { jp: "フロントエンド", reading: "ふろんとえんど", en: "Frontend" },
  { jp: "バックエンド", reading: "ばっくえんど", en: "Backend" },
  { jp: "インフラ", reading: "いんふら", en: "Infrastructure" },
  { jp: "フルスタック", reading: "ふるすたっく", en: "Full Stack" },
  { jp: "クラウド", reading: "くらうど", en: "Cloud" },
  { jp: "セキュリティ", reading: "せきゅりてぃ", en: "Security" },
  { jp: "データベース", reading: "でーたべーす", en: "Database" },
  { jp: "ネットワーク", reading: "ねっとわーく", en: "Network" },
  { jp: "QA・テスト", reading: "きゅーえー・てすと", en: "QA / Testing" },
  { jp: "プロダクトマネージャー", reading: "ぷろだくとまねーじゃー", en: "Product Manager (PM)" },
  { jp: "スクラムマスター", reading: "すくらむますたー", en: "Scrum Master" },
  { jp: "テックリード", reading: "てっくりーど", en: "Tech Lead (TL)" },
];

export const unit1Conversations = [
  {
    id: 1, title: "全体朝会での自己紹介", sceneEn: "A new member introduces themselves at the Monday morning meeting.",
    lines: [
      { speaker: "司会者", role: "MC", jp: "では、新しいメンバーから自己紹介をお願いします。", en: "Now, please have the new member introduce themselves." },
      { speaker: "Alex", role: "You", jp: "はじめまして。今月入社したAlexと申します。前職ではインドでバックエンドエンジニアとして3年間働いていました。こちらでは引き続きバックエンドを担当する予定です。Pythonが得意ですが、日本語はまだ勉強中です。どうぞよろしくお願いします。", en: "Nice to meet everyone. My name is Alex and I joined this month. At my previous job in India, I worked as a backend engineer for 3 years. I plan to continue in backend here. I'm good at Python, but still studying Japanese. I look forward to working with you all." },
      { speaker: "上司", role: "Manager", jp: "Alexさん、よろしくお願いします。不明な点があればいつでも聞いてください。", en: "Welcome, Alex. Please feel free to ask anytime if there's anything unclear." },
      { speaker: "Alex", role: "You", jp: "ありがとうございます。ご指導よろしくお願いします。", en: "Thank you very much. I look forward to your guidance." },
    ]
  },
  {
    id: 2, title: "チームメンバーとの1対1", sceneEn: "After the morning meeting, a colleague starts a conversation.",
    lines: [
      { speaker: "田中", role: "Colleague", jp: "Alexさん、田中です。同じバックエンドチームです。よろしくお願いします。", en: "Hi Alex, I'm Tanaka. I'm also on the backend team. Nice to meet you." },
      { speaker: "Alex", role: "You", jp: "田中さん、よろしくお願いします。担当は何ですか？", en: "Nice to meet you, Tanaka-san. What are you in charge of?" },
      { speaker: "田中", role: "Colleague", jp: "私はデータベースとインフラを担当しています。Alexさんはどんな言語が得意ですか？", en: "I'm in charge of the database and infrastructure. What languages are you good at?" },
      { speaker: "Alex", role: "You", jp: "PythonとGoが得意です。クラウドの経験も少しあります。田中さんはどのくらいこの会社にいますか？", en: "I'm good at Python and Go. I also have a little cloud experience. How long have you been here?" },
      { speaker: "田中", role: "Colleague", jp: "3年です。わからないことがあれば何でも聞いてください。", en: "3 years. Please feel free to ask me anything." },
      { speaker: "Alex", role: "You", jp: "ありがとうございます。心強いです。よろしくお願いします。", en: "Thank you, that's very reassuring. I look forward to working with you." },
    ]
  },
  {
    id: 3, title: "上司への挨拶", sceneEn: "Visiting your manager's office on your first day (formal keigo).",
    lines: [
      { speaker: "Alex", role: "You", jp: "失礼します。今月入社しましたAlexと申します。本日からお世話になります。どうぞよろしくお願いいたします。", en: "Excuse me. My name is Alex and I joined this month. I'm in your care from today. I look forward to working with you." },
      { speaker: "部長", role: "Dept. Head", jp: "Alexさん、よく来てくれました。どうぞ座ってください。前職ではどのようなお仕事をされていましたか？", en: "Alex, welcome. Please have a seat. What kind of work did you do at your previous job?" },
      { speaker: "Alex", role: "You", jp: "はい、前職ではバックエンド開発を担当しておりました。主にPythonを使用しておりました。", en: "Yes, I was in charge of backend development. I mainly used Python." },
      { speaker: "部長", role: "Dept. Head", jp: "そうですか。こちらでもその経験を活かしてください。わからないことがあれば、担当の田中に相談してください。", en: "I see. Please make use of that experience here. If you have questions, please consult Tanaka." },
      { speaker: "Alex", role: "You", jp: "ありがとうございます。精一杯頑張ります。ご指導よろしくお願いいたします。", en: "Thank you very much. I will do my best. I look forward to your guidance." },
    ]
  },
];

export const unit1AnswerVariants = {
  "入社": ["入社", "にゅうしゃ"],
  "お願い": ["お願い", "おねがい"],
  "点": ["点", "てん"],
  "指導": ["指導", "しどう"],
  "お世話": ["お世話", "おせわ"],
  "頑張": ["頑張", "がんば"],
  "おり": ["おり"],
};

export const unit1Quiz = [
  { id: 1, type: "choice", question: "はじめまして。今月＿＿＿したAlexと申します。", choices: ["退社", "入社", "在社", "出社"], answer: "入社", hint: "Joining a company for the first time" },
  { id: 2, type: "choice", question: "どうぞよろしく＿＿＿します。", choices: ["お知らせ", "お返事", "お願い", "お仕事"], answer: "お願い", hint: "A set phrase used when asking for someone's support" },
  { id: 3, type: "choice", question: "不明な＿＿＿があればいつでも聞いてください。", choices: ["話", "点", "件", "事"], answer: "点", hint: "Used in the fixed phrase 不明な___" },
  { id: 4, type: "choice", question: "ご＿＿＿よろしくお願いします。（上司に対して）", choices: ["報告", "確認", "連絡", "指導"], answer: "指導", hint: "Asking a senior to teach and guide you" },
  { id: 5, type: "choice", question: "失礼します。本日から＿＿＿になります。", choices: ["ご連絡", "お仕事", "お世話", "お願い"], answer: "お世話", hint: "A set phrase: 本日から___になります" },
  { id: 6, type: "choice", question: "精一杯＿＿＿ります。", choices: ["帰", "休", "頑張", "やめ"], answer: "頑張", hint: "Expressing your best effort" },
  { id: 7, type: "choice", question: "前職ではバックエンド開発を担当して＿＿＿ました。（上司への挨拶）", choices: ["なり", "いり", "あり", "おり"], answer: "おり", hint: "Humble/keigo form of ～しています" },
  { id: 8, type: "multi", question: "前職では＿＿＿エンジニアとして働いていました。", choices: ["フロントエンド", "バックエンド", "インフラ", "フルスタック"], answer: "all", hint: "All correct — choose your role!" },
];

export const unit1Roleplay = [
  { key: "A", label: "全体朝会での自己紹介", descJp: "あなたは入社初日の新入社員です。月曜日の朝会で全員の前で自己紹介をします。AIが司会者と同僚の役を演じます。", desc: "You are a new employee introducing yourself at the Monday morning meeting. The AI plays the MC and colleagues.", points: ["基本的な自己紹介ができる", "担当・スキルを説明できる", "「よろしくお願いします」を適切に使える"] },
  { key: "B", label: "同僚との会話", descJp: "朝会の後、隣の席の田中さんが話しかけてきます。職場での自然な日常会話を練習しましょう。", desc: "A colleague starts talking to you after the meeting. Practice casual workplace Japanese.", points: ["質問に適切に答えられる", "自分からも質問できる", "「心強いです」など感謝・共感の表現が使える"] },
  { key: "C", label: "上司への挨拶", descJp: "初日に上司（部長）の部屋に挨拶に行きます。謙譲語など丁寧な敬語を意識して話しましょう。", desc: "Visit your manager's office on your first day. Practice formal keigo.", points: ["「失礼します」で入室できる", "謙譲語（〜しております）が使える", "「ご指導よろしくお願いいたします」が言える"] },
];

// ---- UNIT 2 DATA ----
export const unit2Vocab = [
  { id: 1, jp: "朝会", reading: "あさかい", en: "morning meeting", example: "朝会で進捗を報告します。", exampleEn: "I will report progress at the morning meeting." },
  { id: 2, jp: "進捗", reading: "しんちょく", en: "progress", example: "進捗を報告します。", exampleEn: "I will report on the progress." },
  { id: 3, jp: "完了", reading: "かんりょう", en: "completion / done", example: "タスクが完了しました。", exampleEn: "The task is complete." },
  { id: 4, jp: "予定", reading: "よてい", en: "plan / schedule", example: "今日の予定を話します。", exampleEn: "I will talk about today's plan." },
  { id: 5, jp: "課題", reading: "かだい", en: "issue / task / challenge", example: "課題があります。", exampleEn: "There is an issue." },
  { id: 6, jp: "対応中", reading: "たいおうちゅう", en: "currently handling / in progress", example: "バグに対応中です。", exampleEn: "I'm currently handling the bug." },
  { id: 7, jp: "確認中", reading: "かくにんちゅう", en: "currently checking / under review", example: "仕様を確認中です。", exampleEn: "I'm currently checking the specs." },
  { id: 8, jp: "共有する", reading: "きょうゆうする", en: "to share (information)", example: "情報を共有します。", exampleEn: "I will share the information." },
  { id: 9, jp: "報告する", reading: "ほうこくする", en: "to report", example: "状況を報告します。", exampleEn: "I will report the situation." },
  { id: 10, jp: "引き続き", reading: "ひきつづき", en: "continuing / as before", example: "引き続き対応します。", exampleEn: "I will continue to handle it." },
  { id: 11, jp: "作業する", reading: "さぎょうする", en: "to work on", example: "PRのレビューを作業します。", exampleEn: "I will work on the PR review." },
  { id: 12, jp: "遅延", reading: "ちえん", en: "delay", example: "遅延が発生しました。", exampleEn: "A delay has occurred." },
  { id: 13, jp: "見込み", reading: "みこみ", en: "estimate / outlook", example: "完了の見込みは明日です。", exampleEn: "The estimated completion is tomorrow." },
  { id: 14, jp: "懸念", reading: "けねん", en: "concern / worry", example: "一点懸念があります。", exampleEn: "I have one concern." },
  { id: 15, jp: "以上です", reading: "いじょうです", en: "that's all / end of report", example: "私からは以上です。", exampleEn: "That's all from me." },
  { id: 16, jp: "バグ", reading: "ばぐ", en: "bug", example: "バグが発生しました。", exampleEn: "A bug has occurred." },
  { id: 17, jp: "発生", reading: "はっせい", en: "occurrence / to occur", example: "問題が発生しました。", exampleEn: "A problem has occurred." },
];

export const unit2Conversations = [
  {
    id: 1, title: "朝会での報告（順調な場合）", sceneEn: "Reporting progress at the morning standup. Everything is on track.",
    lines: [
      { speaker: "リーダー", role: "Lead", jp: "では、Alexさんから報告をお願いします。", en: "Alex, please go ahead with your report." },
      { speaker: "Alex", role: "You", jp: "はい。昨日はログイン機能の実装を完了しました。今日は引き続きAPIの結合テストを作業する予定です。特に問題はありません。以上です。", en: "Yes. Yesterday I completed the login feature. Today I plan to continue working on the API integration tests. No particular issues. That's all from me." },
      { speaker: "リーダー", role: "Lead", jp: "ありがとうございます。予定通りですね。引き続きよろしくお願いします。", en: "Thank you. Right on schedule. Please keep it up." },
      { speaker: "Alex", role: "You", jp: "はい、よろしくお願いします。", en: "Yes, I will." },
    ]
  },
  {
    id: 2, title: "遅延の報告", sceneEn: "Reporting a delay due to an issue.",
    lines: [
      { speaker: "リーダー", role: "Lead", jp: "Alexさん、進捗はどうですか？", en: "Alex, how is the progress?" },
      { speaker: "Alex", role: "You", jp: "はい、報告します。昨日からAPIの仕様を確認中ですが、一点懸念があります。レスポンスの形式がドキュメントと異なっていて、対応中です。完了の見込みは明日になりそうです。遅延が発生して申し訳ありません。", en: "Yes, I'll report. I've been checking the API specs since yesterday, but I have one concern. The response format differs from the documentation, and I'm currently handling it. Estimated completion is tomorrow. I'm sorry for the delay." },
      { speaker: "リーダー", role: "Lead", jp: "わかりました。田中さんと共有して、一緒に確認してもらえますか？", en: "I see. Could you share that with Tanaka and check it together?" },
      { speaker: "Alex", role: "You", jp: "はい、すぐに共有します。ありがとうございます。", en: "Yes, I'll share it right away. Thank you." },
    ]
  },
  {
    id: 3, title: "上司からの質問への応答", sceneEn: "Being asked for more details by a manager after reporting.",
    lines: [
      { speaker: "Alex", role: "You", jp: "昨日は決済機能のテストを作業しました。今日は課題の修正を対応する予定です。以上です。", en: "Yesterday I worked on testing the payment feature. Today I plan to handle fixing the issues. That's all from me." },
      { speaker: "部長", role: "Manager", jp: "Alexさん、課題というのは具体的にどんな内容ですか？", en: "Alex, what specifically are the issues you mentioned?" },
      { speaker: "Alex", role: "You", jp: "はい。バグが2件発生していまして、原因を調査中です。午前中に原因を特定できる見込みです。", en: "Yes. Two bugs have occurred, and I'm currently investigating the cause. I expect to identify the cause by this morning." },
      { speaker: "部長", role: "Manager", jp: "わかりました。進捗を随時共有してください。", en: "I see. Please share the progress as things develop." },
      { speaker: "Alex", role: "You", jp: "はい、わかりました。随時報告します。", en: "Yes, understood. I will report as things develop." },
    ]
  },
];

export const unit2Quiz = [
  { id: 1, type: "choice", question: "昨日はログイン機能の実装を＿＿＿しました。\n（タスクが終わった場合）", choices: ["報告", "完了", "確認", "開始"], answer: "完了", hint: "The task is fully done" },
  { id: 2, type: "choice", question: "今日は＿＿＿きAPIの結合テストに取り組む予定です。\n（昨日に続いて同じ作業をする）", choices: ["引き続", "引き上", "引き受", "引き出"], answer: "引き続", hint: "Continuing the same work as before" },
  { id: 3, type: "choice", question: "APIの仕様がドキュメントと異なっていて、現在＿＿＿中です。\n（問題に取り組んでいる）", choices: ["確認", "報告", "完了", "対応"], answer: "対応", hint: "Actively handling/dealing with a problem" },
  { id: 4, type: "choice", question: "原因を調査＿＿＿です。\n（今まさに調べている）", choices: ["予定", "完了", "中", "済み"], answer: "中", hint: "Currently in the middle of doing something" },
  { id: 5, type: "choice", question: "まだ確実ではありませんが、午前中に原因を特定できる＿＿＿です。\n（確実ではないが、そうなりそうな見通し）", choices: ["課題", "懸念", "予定", "見込み"], answer: "見込み", hint: "An uncertain but likely outlook — not a firm plan" },
  { id: 6, type: "choice", question: "一点＿＿＿があります。\n（不安・心配なことがある）", choices: ["遅延", "進捗", "課題", "懸念"], answer: "懸念", hint: "A worry or concern you want to raise" },
  { id: 7, type: "choice", question: "この情報を田中さんと＿＿＿してください。\n（他の人にも知らせる）", choices: ["確認", "対応", "報告", "共有"], answer: "共有", hint: "Making information available to others" },
  { id: 8, type: "choice", question: "私からは＿＿＿です。\n（朝会での報告を終える一言）", choices: ["終了", "完了", "以上", "報告"], answer: "以上", hint: "A set closing phrase used at the end of a report" },
  { id: 9, type: "multi", question: "今日は＿＿＿を作業する予定です。", choices: ["APIのテスト", "バグの修正", "コードレビュー", "ドキュメントの作成"], answer: "all", hint: "All correct — choose what fits your situation!" },
];

export const unit2Roleplay = [
  { key: "A", label: "朝会での報告（順調な場合）", descJp: "毎朝の朝会で進捗を報告します。問題なく順調な場合の練習です。「完了・予定・以上です」を使いましょう。", desc: "Report your progress at the morning meeting. Practice when everything is on track.", points: ["完了・予定が言える", "「引き続き対応します」が使える", "「以上です」で報告を締められる"] },
  { key: "B", label: "遅延の報告", descJp: "問題が発生して遅延が見込まれる状況を報告します。謝罪と対応策も伝えましょう。", desc: "Report a delay due to an issue. Practice apologizing and explaining your plan.", points: ["懸念・遅延・見込みが伝えられる", "「申し訳ありません」と謝罪できる", "対応策を共有できる"] },
  { key: "C", label: "上司からの質問への応答", descJp: "報告後に上司から詳細を聞かれる場面です。落ち着いて具体的に答えましょう。", desc: "Answer detailed questions from your manager after reporting.", points: ["課題の内容を具体的に説明できる", "原因・見込みが伝えられる", "「随時報告します」が使える"] },
];

// ---- UNIT 3 DATA ----
export const unit3Vocab = [
  { id: 1, jp: "確認", reading: "かくにん", en: "confirmation / to check", example: "確認してもよいですか？", exampleEn: "May I check on this?" },
  { id: 2, jp: "質問", reading: "しつもん", en: "question", example: "質問があります。", exampleEn: "I have a question." },
  { id: 3, jp: "仕様", reading: "しよう", en: "specification", example: "仕様を確認したいです。", exampleEn: "I'd like to check the specification." },
  { id: 4, jp: "認識", reading: "にんしき", en: "understanding / recognition", example: "認識が合っているか確認したいです。", exampleEn: "I'd like to confirm our understanding matches." },
  { id: 5, jp: "共通認識", reading: "きょうつうにんしき", en: "shared understanding", example: "共通認識を持ちましょう。", exampleEn: "Let's make sure we have a shared understanding." },
  { id: 6, jp: "おっしゃる通り", reading: "おっしゃるとおり", en: "as you say / exactly right", example: "おっしゃる通りです。", exampleEn: "Exactly as you say." },
  { id: 7, jp: "ご確認ください", reading: "ごかくにんください", en: "please confirm / please check", example: "こちらをご確認ください。", exampleEn: "Please check this." },
  { id: 8, jp: "いただけますか", reading: "いただけますか", en: "could you please～", example: "教えていただけますか？", exampleEn: "Could you please tell me?" },
  { id: 9, jp: "よろしいでしょうか", reading: "よろしいでしょうか", en: "is it alright? / may I?", example: "この方向でよろしいでしょうか？", exampleEn: "Is this direction alright?" },
  { id: 10, jp: "つまり", reading: "つまり", en: "in other words / so", example: "つまり、こういうことでしょうか？", exampleEn: "In other words, is this what you mean?" },
  { id: 11, jp: "念のため", reading: "ねんのため", en: "just to be sure", example: "念のため確認します。", exampleEn: "I'll check just to be sure." },
  { id: 12, jp: "ご認識", reading: "ごにんしき", en: "your understanding (polite)", example: "ご認識に相違はありますか？", exampleEn: "Is there any difference in your understanding?" },
  { id: 13, jp: "相違", reading: "そうい", en: "discrepancy / difference", example: "相違があれば教えてください。", exampleEn: "Please let me know if there is any discrepancy." },
  { id: 14, jp: "伺う", reading: "うかがう", en: "to ask / to visit (humble)", example: "伺ってもよろしいでしょうか？", exampleEn: "May I ask you something?" },
  { id: 15, jp: "ご教示ください", reading: "ごきょうじください", en: "please instruct / please inform", example: "ご教示いただけますと幸いです。", exampleEn: "I would be grateful if you could inform me." },
];

export const unit3Conversations = [
  {
    id: 1, title: "仕様について同僚に質問する", sceneEn: "During development, you have an unclear spec and ask your colleague Tanaka.",
    lines: [
      { speaker: "Alex", role: "You", jp: "田中さん、少しよろしいですか？仕様について質問があるのですが。", en: "Tanaka-san, do you have a moment? I have a question about the specs." },
      { speaker: "田中", role: "Colleague", jp: "はい、どうぞ。", en: "Sure, go ahead." },
      { speaker: "Alex", role: "You", jp: "ログイン画面のエラーメッセージの仕様なのですが、ドキュメントに記載がなくて。どのように表示すればよいか、教えていただけますか？", en: "It's about the error message spec for the login screen — it's not in the documentation. Could you tell me how it should be displayed?" },
      { speaker: "田中", role: "Colleague", jp: "ああ、そこはまだ未定なんです。一旦「入力内容をご確認ください」と表示する方向で進めてもらえますか？", en: "Ah, that part hasn't been decided yet. Could you proceed with displaying 'Please check your input' for now?" },
      { speaker: "Alex", role: "You", jp: "わかりました。念のため確認ですが、日本語と英語の両方が必要でしょうか？", en: "Understood. Just to be sure — do we need both Japanese and English?" },
      { speaker: "田中", role: "Colleague", jp: "今回は日本語のみで大丈夫です。", en: "Japanese only is fine for now." },
      { speaker: "Alex", role: "You", jp: "ありがとうございます。確認できました。", en: "Thank you. I've confirmed everything I needed." },
    ]
  },
  {
    id: 2, title: "上司に認識確認をする", sceneEn: "Checking with your manager to confirm your understanding of a task.",
    lines: [
      { speaker: "Alex", role: "You", jp: "部長、少し伺ってもよろしいでしょうか？", en: "Manager, may I ask you something?" },
      { speaker: "部長", role: "Manager", jp: "どうぞ。", en: "Go ahead." },
      { speaker: "Alex", role: "You", jp: "今回の決済機能についてですが、私の認識では今月末までにフロントエンドの実装を完了させる予定です。この方向でよろしいでしょうか？", en: "Regarding the payment feature — my understanding is that we plan to complete the frontend implementation by end of this month. Is this direction correct?" },
      { speaker: "部長", role: "Manager", jp: "はい、おっしゃる通りです。バックエンドとの結合テストは来月を予定しています。", en: "Yes, that's exactly right. The integration testing with the backend is planned for next month." },
      { speaker: "Alex", role: "You", jp: "ありがとうございます。つまり、今月はフロントエンドのみに集中すればよいということでしょうか？", en: "Thank you. So in other words, I should focus only on the frontend this month?" },
      { speaker: "部長", role: "Manager", jp: "その通りです。ご認識に相違はないですね。", en: "That's right. There's no discrepancy in our understanding." },
      { speaker: "Alex", role: "You", jp: "承知しました。念のためSlackに内容をまとめてご共有します。", en: "Understood. Just to be sure, I'll summarize the details and share them on Slack." },
    ]
  },
  {
    id: 3, title: "Slackでの確認依頼", sceneEn: "Sending a confirmation request to a colleague or manager on Slack.",
    lines: [
      { speaker: "Alex→田中", role: "Slack (casual)", jp: "田中さん、お疲れ様です。\nログイン画面のエラーメッセージの仕様について確認したいことがあります。\nお時間のあるときに教えていただけますか？", en: "Hi Tanaka-san, thanks for your hard work.\nI have something I'd like to check about the error message spec for the login screen.\nCould you let me know when you have a moment?" },
      { speaker: "Alex→部長", role: "Slack (formal)", jp: "部長、お疲れ様です。\n決済機能の実装方針について、念のためご確認いただけますでしょうか。\n・今月末までにフロントエンドの実装を完了させる\n・バックエンドとの結合テストは来月を予定する\nご認識に相違がなければ、このまま進めさせていただきます。\nよろしくお願いいたします。", en: "Hello, thank you for your hard work.\nCould you please confirm the implementation plan for the payment feature, just to be sure?\n· Complete frontend implementation by end of this month\n· Integration testing with backend planned for next month\nIf there is no discrepancy in our understanding, I will proceed as planned.\nThank you very much." },
    ]
  },
];

export const unit3Quiz = [
  { id: 1, type: "choice", question: "田中さんに話しかけます。ビジネスの場で最も丁寧な声かけ表現はどれですか？\n田中さん、少し＿＿＿ですか？", choices: ["暇", "大丈夫", "よろしい", "いい"], answer: "よろしい", hint: "The only appropriate expression in a business setting" },
  { id: 2, type: "choice", question: "目上の人に対して、謙譲語を使う場面です。\n教えて＿＿＿けますか？（謙譲語）", choices: ["くれ", "もら", "くださ", "いただ"], answer: "いただ", hint: "Humble form — the subject is yourself receiving the favor" },
  { id: 3, type: "choice", question: "上司に対して進める方向性を確認します。最も丁寧なビジネス表現はどれですか？\nこの方向で＿＿＿でしょうか？", choices: ["正しい", "大丈夫", "いい", "よろしい"], answer: "よろしい", hint: "The only natural and polite expression for confirming with a superior" },
  { id: 4, type: "choice", question: "確認済みでも、もう一度念を押して確認したいときの表現です。\n＿＿＿確認ですが、日本語のみで大丈夫でしょうか？", choices: ["安全の", "確認の", "念のため", "一応の"], answer: "念のため", hint: "A set phrase meaning 'just to be safe / just to be sure'" },
  { id: 5, type: "choice", question: "相手の説明を自分の言葉で言い換えて理解を確認します。\n＿＿＿、今月はフロントエンドのみに集中すればよいということでしょうか？", choices: ["しかし", "なぜなら", "つまり", "それでも"], answer: "つまり", hint: "Used to paraphrase or summarize what was just said" },
  { id: 6, type: "choice", question: "自分の理解が正しいかを述べる、ビジネスで最も一般的な表現はどれですか？\n私の＿＿＿では今月末までに実装を完了させる予定です。", choices: ["希望", "予想", "意見", "認識"], answer: "認識", hint: "The standard business term for confirming one's understanding of a situation" },
  { id: 7, type: "choice", question: "相手の理解との違いがないか確認するフォーマルな表現です。\nご＿＿＿に相違がなければ、このまま進めさせていただきます。", choices: ["同意", "確認", "理解", "認識"], answer: "認識", hint: "ご___に相違がない is a set business phrase" },
  { id: 8, type: "choice", question: "部長に話しかける場面です。「聞く」の謙譲語を使います。\n部長、少し＿＿＿てもよろしいでしょうか？", choices: ["確認し", "質問し", "聞い", "伺っ"], answer: "伺っ", hint: "Humble form of 聞く／訪ねる — used when speaking to superiors" },
];

export const unit3Roleplay = [
  { key: "A", label: "同僚への質問", descJp: "開発中に仕様が不明な点があります。同僚の田中さんに声をかけて、丁寧に質問してみましょう。「少しよろしいですか」「教えていただけますか」を使いましょう。", desc: "You have an unclear spec during development. Approach your colleague Tanaka and ask politely.", points: ["「少しよろしいですか」で声をかけられる", "「教えていただけますか」が使える", "「念のため確認ですが」で念押しができる"] },
  { key: "B", label: "上司への認識確認", descJp: "タスクの方向性について上司に確認します。自分の認識を述べてから、合っているか確認しましょう。謙譲語「伺う」を使って丁寧に切り出します。", desc: "Confirm your understanding of a task with your manager. State your understanding first, then check if it's correct.", points: ["「伺ってもよろしいでしょうか」で切り出せる", "「私の認識では〜」と自分の理解を述べられる", "「つまり〜ということでしょうか」で言い換え確認ができる"] },
  { key: "C", label: "Slackメッセージ作成", descJp: "上司に確認依頼のSlackメッセージを書きます。箇条書きで要点をまとめて、丁寧に送りましょう。「お疲れ様です」で始め、「よろしくお願いいたします」で締めます。", desc: "Write a confirmation request message to your manager on Slack. Use bullet points and polite language.", points: ["「お疲れ様です」で始められる", "箇条書きで要点を整理できる", "「ご認識に相違がなければ〜」が使える"] },
];

// ---- UNIT 5 DATA ----
export const unit5Vocab = [
  { id: 1, jp: "お疲れ様です", reading: "おつかれさまです", en: "thanks for your hard work / hello (workplace greeting)", example: "お疲れ様です。田中です。", exampleEn: "Hello, this is Tanaka." },
  { id: 2, jp: "お世話になっております", reading: "おせわになっております", en: "thank you for your continued support (formal email opener)", example: "お世話になっております。Alexです。", exampleEn: "Thank you for your continued support. This is Alex." },
  { id: 3, jp: "件名", reading: "けんめい", en: "subject (of email)", example: "件名を確認してください。", exampleEn: "Please check the subject line." },
  { id: 4, jp: "添付", reading: "てんぷ", en: "attachment", example: "添付ファイルをご確認ください。", exampleEn: "Please check the attached file." },
  { id: 5, jp: "ご連絡", reading: "ごれんらく", en: "contact / communication (polite)", example: "ご連絡ありがとうございます。", exampleEn: "Thank you for your message." },
  { id: 6, jp: "ご返信", reading: "ごへんしん", en: "reply (polite)", example: "ご返信をお待ちしております。", exampleEn: "I look forward to your reply." },
  { id: 7, jp: "取り急ぎ", reading: "とりいそぎ", en: "for the time being / quickly", example: "取り急ぎご連絡いたします。", exampleEn: "I am writing to you quickly for now." },
  { id: 8, jp: "以下", reading: "いか", en: "below / the following", example: "以下をご確認ください。", exampleEn: "Please check the following." },
  { id: 9, jp: "ご査収", reading: "ごさしゅう", en: "please receive and review", example: "ご査収のほどよろしくお願いいたします。", exampleEn: "Please receive and review the enclosed." },
  { id: 10, jp: "承知しました", reading: "しょうちしました", en: "understood / noted (formal)", example: "承知しました。対応いたします。", exampleEn: "Understood. I will handle it." },
  { id: 11, jp: "了解しました", reading: "りょうかいしました", en: "understood / got it (less formal)", example: "了解しました。確認します。", exampleEn: "Got it. I will check." },
  { id: 12, jp: "ご不明な点", reading: "ごふめいなてん", en: "any unclear points (polite)", example: "ご不明な点はご連絡いただけますと幸いです。", exampleEn: "Please feel free to contact us if you have any questions." },
  { id: 13, jp: "よろしくお願いいたします", reading: "よろしくおねがいいたします", en: "best regards / thank you (formal closing)", example: "どうぞよろしくお願いいたします。", exampleEn: "Thank you very much. / Best regards." },
  { id: 14, jp: "ご確認のほど", reading: "ごかくにんのほど", en: "please kindly confirm", example: "ご確認のほどよろしくお願いいたします。", exampleEn: "I would appreciate your confirmation." },
  { id: 15, jp: "お手数ですが", reading: "おてすうですが", en: "sorry to trouble you / I know it's a bother", example: "お手数ですが、ご対応いただけますか。", exampleEn: "Sorry to trouble you, but could you please handle this?" },
];

export const unit5Conversations = [
  {
    id: 1, title: "社内メール（上司への報告）", sceneEn: "Sending a progress report email to your manager.",
    lines: [
      { speaker: "件名", role: "Subject", jp: "決済機能実装の進捗報告", en: "Progress Report: Payment Feature Implementation" },
      { speaker: "Alex→部長", role: "Email", jp: "部長\n\nお疲れ様です。Alexでございます。\n\n決済機能の実装につきまして、進捗をご報告申し上げます。\n\n【現状】\n・フロントエンドの実装：完了\n・バックエンドとの結合テスト：対応中（完了の見込みは今週末）\n\n【懸念事項】\n・一点、APIのレスポンス速度に課題がございます。現在調査中でございます。\n\nご不明な点がございましたら、ご連絡いただけますと幸いです。\nどうぞよろしくお願いいたします。\n\nAlex", en: "Manager,\n\nHello, this is Alex.\n\nI would like to report on the progress of the payment feature implementation.\n\n[Current Status]\n· Frontend implementation: Complete\n· Integration testing with backend: In progress (expected completion by end of this week)\n\n[Concerns]\n· There is one issue with the API response speed. Currently under investigation.\n\nPlease feel free to contact me if you have any questions.\nBest regards,\n\nAlex" },
    ]
  },
  {
    id: 2, title: "社外メール（クライアントへの連絡）", sceneEn: "Sending a document to a client and requesting their confirmation.",
    lines: [
      { speaker: "件名", role: "Subject", jp: "仕様書のご送付について", en: "Regarding the Submission of the Specification Document" },
      { speaker: "Alex→山田様", role: "Email", jp: "〇〇株式会社\n山田様\n\nお世話になっております。\n△△株式会社のAlexと申します。\n\n先日ご依頼いただきました仕様書を作成いたしましたので、添付ファイルにてお送りいたします。\n\nご査収のほどよろしくお願いいたします。\nお手数ですが、内容をご確認いただき、ご意見・ご不明な点がございましたらご連絡いただけますと幸いです。\n\nご確認のほどよろしくお願いいたします。\n\nAlex\n△△株式会社", en: "Mr./Ms. Yamada,\n〇〇 Corporation\n\nThank you for your continued support.\nMy name is Alex from △△ Corporation.\n\nI have prepared the specification document you requested, and I am sending it as an attachment.\n\nPlease receive and review the enclosed document.\nI apologize for the trouble, but I would appreciate it if you could review the contents and contact us if you have any questions.\n\nThank you very much for your confirmation.\n\nAlex\n△△ Corporation" },
    ]
  },
  {
    id: 3, title: "Slackでのやり取り", sceneEn: "Checking and requesting tasks with a colleague on Slack.",
    lines: [
      { speaker: "Alex", role: "You", jp: "お疲れ様です。決済機能のPRレビューをお願いしたいのですが、お時間いただけますか？", en: "Hi, thanks for your hard work. Could I ask you to review the PR for the payment feature? Do you have time?" },
      { speaker: "田中", role: "Colleague", jp: "了解しました！今日の午後に確認します。", en: "Got it! I'll check it this afternoon." },
      { speaker: "Alex", role: "You", jp: "ありがとうございます。以下にPRのリンクを貼ります。ご確認のほどよろしくお願いします。", en: "Thank you. I'll post the PR link below. I appreciate your review." },
      { speaker: "田中", role: "Colleague", jp: "承知しました。確認後にコメントします。", en: "Understood. I'll leave comments after reviewing." },
      { speaker: "Alex", role: "You", jp: "お手数ですが、よろしくお願いいたします。", en: "Sorry for the trouble, and thank you very much." },
    ]
  },
];

export const unit5Quiz = [
  { id: 1, type: "choice", question: "社内メールや口頭で同僚・上司に話しかける時の基本的な挨拶は？\n＿＿＿。田中です。", choices: ["はじめまして", "こんにちは", "お疲れ様です", "よろしくお願いします"], answer: "お疲れ様です", hint: "The standard workplace greeting used any time of day" },
  { id: 2, type: "choice", question: "社外メールの書き出しとして最も適切な表現はどれですか？\n＿＿＿。△△株式会社のAlexと申します。", choices: ["お疲れ様です", "こんにちは", "よろしくお願いします", "お世話になっております"], answer: "お世話になっております", hint: "The only correct opening phrase for external business emails" },
  { id: 3, type: "choice", question: "クライアントに資料を送る際の表現です。\n＿＿＿のほどよろしくお願いいたします。（資料を受け取って確認してください）", choices: ["ご連絡", "ご返信", "ご確認", "ご査収"], answer: "ご査収", hint: "A set phrase used specifically when sending documents or files" },
  { id: 4, type: "choice", question: "上司からの依頼に対して、最も丁寧な返答はどれですか？", choices: ["わかりました", "オッケーです", "了解しました", "承知しました"], answer: "承知しました", hint: "The most formal and humble way to say 'understood'" },
  { id: 5, type: "choice", question: "同僚へのSlackメッセージです。タスクを依頼した後の締めの一言。\nお＿＿＿ですが、よろしくお願いいたします。", choices: ["忙しい", "邪魔", "時間", "手数"], answer: "手数", hint: "A set phrase apologizing for the trouble of making a request" },
  { id: 6, type: "choice", question: "メールで添付ファイルを送る際の表現です。\n＿＿＿ファイルをご確認ください。", choices: ["送付", "参考", "同封", "添付"], answer: "添付", hint: "The correct term for a file attached to an email" },
  { id: 7, type: "choice", question: "急ぎの連絡をする際のビジネスメールの書き出し表現です。\n＿＿＿ご連絡いたします。", choices: ["急いで", "すぐに", "とりあえず", "取り急ぎ"], answer: "取り急ぎ", hint: "A formal set phrase meaning 'quickly for now' — not casual" },
  { id: 8, type: "choice", question: "上司へのメールの締めとして最も丁寧な表現はどれですか？", choices: ["よろしく", "よろしくね", "よろしくお願いします", "よろしくお願いいたします"], answer: "よろしくお願いいたします", hint: "いたします is the humble form of します — most appropriate for superiors" },
];

export const unit5Roleplay = [
  { key: "A", label: "社内報告メール", descJp: "上司に進捗報告メールを書きます。件名・書き出し・本文・締めの構成を意識しましょう。「お疲れ様です」「ご報告申し上げます」「よろしくお願いいたします」を使います。", desc: "Write a progress report email to your manager. Focus on subject, opening, body, and closing.", points: ["「お疲れ様です。〇〇でございます」で始められる", "「ご報告申し上げます」が使える", "「よろしくお願いいたします」で締められる"] },
  { key: "B", label: "社外連絡メール", descJp: "クライアントに資料を送付するメールを書きます。「お世話になっております」で始め、「ご査収のほど」「お手数ですが」などの定型表現を使いましょう。", desc: "Write an email to a client sending a document. Use polite keigo and set phrases.", points: ["「お世話になっております」で始められる", "「添付ファイル」「ご査収のほど」が使える", "「ご確認のほどよろしくお願いいたします」で締められる"] },
  { key: "C", label: "Slackでの依頼", descJp: "同僚にSlackでタスクの依頼をします。「了解しました」と「承知しました」の使い分けを意識しながら、簡潔かつ丁寧に伝えましょう。", desc: "Request a task from a colleague on Slack. Be concise but polite.", points: ["「了解しました」と「承知しました」を使い分けられる", "「以下をご確認ください」が使える", "「お手数ですが」で依頼を締められる"] },
];
export const unit4Vocab = [
  { id: 1, jp: "締め切り", reading: "しめきり", en: "deadline", example: "締め切りはいつですか？", exampleEn: "When is the deadline?" },
  { id: 2, jp: "期限", reading: "きげん", en: "due date / time limit", example: "期限までに完了します。", exampleEn: "I will complete it by the due date." },
  { id: 3, jp: "納期", reading: "のうき", en: "delivery date", example: "納期を確認したいです。", exampleEn: "I'd like to confirm the delivery date." },
  { id: 4, jp: "前倒し", reading: "まえだおし", en: "moving up / ahead of schedule", example: "前倒しできますか？", exampleEn: "Can we move it up?" },
  { id: 5, jp: "後ろ倒し", reading: "うしろだおし", en: "pushing back / delaying", example: "後ろ倒しをお願いしたいです。", exampleEn: "I'd like to request pushing the deadline back." },
  { id: 6, jp: "調整する", reading: "ちょうせいする", en: "to adjust / to coordinate", example: "スケジュールを調整します。", exampleEn: "I will adjust the schedule." },
  { id: 7, jp: "余裕", reading: "よゆう", en: "margin / leeway / spare time", example: "余裕を持って進めます。", exampleEn: "I will proceed with some leeway." },
  { id: 8, jp: "間に合う", reading: "まにあう", en: "to make it in time", example: "締め切りに間に合います。", exampleEn: "I will make it in time for the deadline." },
  { id: 9, jp: "間に合わない", reading: "まにあわない", en: "cannot make it in time", example: "間に合わないかもしれません。", exampleEn: "I might not make it in time." },
  { id: 10, jp: "優先順位", reading: "ゆうせんじゅんい", en: "priority", example: "優先順位を確認したいです。", exampleEn: "I'd like to confirm the priority." },
  { id: 11, jp: "工数", reading: "こうすう", en: "man-hours / work estimate", example: "工数がかかりすぎています。", exampleEn: "It's taking too many man-hours." },
  { id: 12, jp: "巻き返す", reading: "まきかえす", en: "to catch up / recover", example: "来週巻き返します。", exampleEn: "I will catch up next week." },
  { id: 13, jp: "ご調整ください", reading: "ごちょうせいください", en: "please adjust / please coordinate", example: "ご調整いただけますか？", exampleEn: "Could you please make the adjustment?" },
  { id: 14, jp: "想定", reading: "そうてい", en: "assumption / estimate", example: "想定より時間がかかっています。", exampleEn: "It's taking longer than estimated." },
  { id: 15, jp: "承認", reading: "しょうにん", en: "approval", example: "承認をいただけますか？", exampleEn: "Could I have your approval?" },
];

export const unit4Conversations = [
  {
    id: 1, title: "締め切りの確認と進捗報告", sceneEn: "Reporting progress to your manager while confirming the deadline.",
    lines: [
      { speaker: "Alex", role: "You", jp: "部長、少し伺ってもよろしいでしょうか。決済機能の納期についてなのですが。", en: "Manager, may I ask you something? It's about the delivery date for the payment feature." },
      { speaker: "部長", role: "Manager", jp: "はい、どうぞ。", en: "Go ahead." },
      { speaker: "Alex", role: "You", jp: "現在、想定より工数がかかっていまして、今月末の締め切りに間に合わないかもしれません。", en: "Currently, it's taking more man-hours than estimated, and I might not make the end-of-month deadline." },
      { speaker: "部長", role: "Manager", jp: "どのくらい遅れそうですか？", en: "How much of a delay are you expecting?" },
      { speaker: "Alex", role: "You", jp: "3日から5日ほど後ろ倒しになる見込みです。来週から巻き返しますので、できれば締め切りをご調整いただけますでしょうか。", en: "I expect a delay of about 3 to 5 days. I plan to catch up from next week, so could you please adjust the deadline if possible?" },
      { speaker: "部長", role: "Manager", jp: "わかりました。今回は来月5日を新しい締め切りにしましょう。余裕を持って進めてください。", en: "Understood. Let's make the 5th of next month the new deadline. Please proceed with some leeway." },
      { speaker: "Alex", role: "You", jp: "ありがとうございます。承認いただきありがとうございます。来月5日までに必ず完了させます。", en: "Thank you very much for your approval. I will definitely complete it by the 5th of next month." },
    ]
  },
  {
    id: 2, title: "締め切りの延長をお願いする", sceneEn: "An unexpected issue has come up and you need to politely request a deadline extension.",
    lines: [
      { speaker: "Alex", role: "You", jp: "田中さん、少しよろしいですか。スケジュールについて相談があるのですが。", en: "Tanaka-san, do you have a moment? I'd like to discuss the schedule." },
      { speaker: "田中", role: "Colleague", jp: "はい、どうぞ。", en: "Sure, go ahead." },
      { speaker: "Alex", role: "You", jp: "APIの仕様変更が発生しまして、想定より対応に時間がかかっています。誠に恐れ入りますが、締め切りを3日後ろ倒しにしていただくことは可能でしょうか。", en: "A spec change came up for the API, and it's taking longer than expected to handle. I'm truly sorry to ask, but would it be possible to push the deadline back by 3 days?" },
      { speaker: "田中", role: "Colleague", jp: "3日ですか。優先順位を確認しますね。他のタスクとの兼ね合いもありますので。", en: "3 days? Let me check the priorities. There are other tasks to consider as well." },
      { speaker: "Alex", role: "You", jp: "ご迷惑をおかけして申し訳ありません。もし難しい場合は、優先順位を調整していただけますか？", en: "I'm sorry for the inconvenience. If that's difficult, could you help adjust the priorities?" },
      { speaker: "田中", role: "Colleague", jp: "わかりました。3日の延長で調整します。次回からは早めに共有してください。", en: "Understood. I'll adjust for a 3-day extension. Please share updates earlier next time." },
      { speaker: "Alex", role: "You", jp: "ありがとうございます。以後気をつけます。", en: "Thank you very much. I'll be more careful going forward." },
    ]
  },
  {
    id: 3, title: "タスクの優先順位を調整する", sceneEn: "Multiple tasks overlap and you ask your manager to confirm and adjust priorities.",
    lines: [
      { speaker: "Alex", role: "You", jp: "部長、現在複数のタスクが重なっていまして、優先順位を確認させていただいてもよろしいでしょうか。", en: "Manager, I currently have multiple overlapping tasks, and I'd like to confirm the priorities if that's alright." },
      { speaker: "部長", role: "Manager", jp: "はい、どうぞ。何がありますか？", en: "Sure. What do you have?" },
      { speaker: "Alex", role: "You", jp: "決済機能の実装、バグ修正、そして新機能のドキュメント作成の3つです。全て今週末が締め切りなのですが、工数的に全て間に合わない状況です。", en: "There are three: the payment feature implementation, bug fixes, and documentation for the new feature. All have this Friday as the deadline, but in terms of man-hours, I can't make all of them in time." },
      { speaker: "部長", role: "Manager", jp: "それでは、決済機能を最優先にしてください。バグ修正は来週前倒しで対応、ドキュメントは来週末でよいです。", en: "In that case, please prioritize the payment feature. Handle the bug fixes with an early start next week, and the documentation can be done by the end of next week." },
      { speaker: "Alex", role: "You", jp: "承知しました。では決済機能を優先し、バグ修正・ドキュメントの締め切りを調整するということですね。念のためSlackに内容をまとめてご共有します。", en: "Understood. So I'll prioritize the payment feature, and adjust the deadlines for the bug fixes and documentation. Just to be sure, I'll summarize and share this on Slack." },
      { speaker: "部長", role: "Manager", jp: "よろしくお願いします。", en: "Please do." },
    ]
  },
];

export const unit4Quiz = [
  { id: 1, type: "choice", question: "現在、想定より＿＿＿がかかりすぎていまして、締め切りに間に合わないかもしれません。\n（IT業務で作業量の見積もりを表す専門用語）", choices: ["予算", "費用", "工数", "人数"], answer: "工数", hint: "The IT term for estimated work volume / man-hours" },
  { id: 2, type: "choice", question: "3日から5日ほど＿＿＿になる見込みです。\n（締め切りが遅くなること）", choices: ["前倒し", "調整", "延期", "後ろ倒し"], answer: "後ろ倒し", hint: "Pushing the deadline to a later date" },
  { id: 3, type: "choice", question: "締め切りをご＿＿＿いただけますでしょうか。\n（相手に変更・修正をお願いする）", choices: ["確認", "報告", "共有", "調整"], answer: "調整", hint: "Asking someone to make a change or modification" },
  { id: 4, type: "choice", question: "想定＿＿＿時間がかかっています。\n（見積もりを超えていることを表す自然なビジネス表現）", choices: ["どおりに", "通りに", "未満で", "以上に"], answer: "以上に", hint: "Expressing that something exceeds the original estimate" },
  { id: 5, type: "choice", question: "誠に＿＿＿ますが、締め切りを後ろ倒しにしていただくことは可能でしょうか。\n（丁寧な依頼の前置き・恐縮の表現）", choices: ["困り", "残念に思い", "申し訳あり", "恐れ入り"], answer: "恐れ入り", hint: "The most formal and polite way to preface a request" },
  { id: 6, type: "choice", question: "複数のタスクが重なっていまして、＿＿＿を確認させていただいてもよろしいでしょうか。\n（どのタスクを先にやるべきかの順番）", choices: ["作業順", "スケジュール", "工数", "優先順位"], answer: "優先順位", hint: "The order in which tasks should be tackled" },
  { id: 7, type: "choice", question: "来週から＿＿＿しますので、ご安心ください。\n（遅れを取り戻すこと）", choices: ["調整", "確認", "報告", "巻き返"], answer: "巻き返", hint: "To recover from a delay and catch up" },
  { id: 8, type: "choice", question: "余裕を＿＿＿て進めてください。\n（時間的・精神的なゆとりを持って）", choices: ["作っ", "考え", "確認し", "持っ"], answer: "持っ", hint: "余裕を___つ is a fixed expression" },
];

export const unit4Roleplay = [
  { key: "A", label: "締め切りの確認と報告", descJp: "上司に締め切りを確認しながら、進捗と遅延の見込みを報告します。丁寧に状況を説明し、締め切りの調整をお願いしましょう。", desc: "Report your progress and a possible delay to your manager while confirming the deadline.", points: ["「想定より工数がかかっています」が使える", "「間に合わないかもしれません」と報告できる", "「ご調整いただけますでしょうか」と依頼できる"] },
  { key: "B", label: "締め切り延長のお願い", descJp: "予期しない問題が発生し、締め切りの延長をお願いします。謝罪と理由を添えて丁寧に依頼しましょう。「恐れ入りますが」を使って切り出します。", desc: "Request a deadline extension due to an unexpected issue. Apologize and explain the reason politely.", points: ["「恐れ入りますが」で丁寧に切り出せる", "「後ろ倒しにしていただけますか」が使える", "「以後気をつけます」で締められる"] },
  { key: "C", label: "優先順位の調整", descJp: "複数タスクが重なった状況を上司に説明し、優先順位の確認と調整をお願いします。状況を整理して簡潔に伝えましょう。", desc: "Explain to your manager that multiple tasks overlap and ask for help adjusting priorities.", points: ["「優先順位を確認させていただけますか」が使える", "タスクを箇条書きで整理して伝えられる", "「念のためSlackにまとめてご共有します」で締められる"] },
];
// ---- UNIT 6 DATA ----
export const unit6Vocab = [
  { id: 1, jp: "仕様", reading: "しよう", en: "specification / spec", example: "仕様を確認してください。", exampleEn: "Please check the specification." },
  { id: 2, jp: "要件", reading: "ようけん", en: "requirement", example: "要件を整理しましょう。", exampleEn: "Let's organize the requirements." },
  { id: 3, jp: "要件定義", reading: "ようけんていぎ", en: "requirements definition", example: "要件定義のミーティングを開きます。", exampleEn: "We will hold a requirements definition meeting." },
  { id: 4, jp: "仕様書", reading: "しようしょ", en: "specification document", example: "仕様書を作成しました。", exampleEn: "I have created the specification document." },
  { id: 5, jp: "機能", reading: "きのう", en: "function / feature", example: "この機能はどう動きますか？", exampleEn: "How does this feature work?" },
  { id: 6, jp: "非機能要件", reading: "ひきのうようけん", en: "non-functional requirements", example: "非機能要件も定義する必要があります。", exampleEn: "Non-functional requirements also need to be defined." },
  { id: 7, jp: "ユースケース", reading: "ゆーすけーす", en: "use case", example: "ユースケースを洗い出してください。", exampleEn: "Please identify all the use cases." },
  { id: 8, jp: "スコープ", reading: "すこーぷ", en: "scope", example: "スコープを明確にしましょう。", exampleEn: "Let's clarify the scope." },
  { id: 9, jp: "前提条件", reading: "ぜんていじょうけん", en: "precondition / assumption", example: "前提条件を確認してください。", exampleEn: "Please confirm the preconditions." },
  { id: 10, jp: "制約", reading: "せいやく", en: "constraint / restriction", example: "技術的な制約があります。", exampleEn: "There are technical constraints." },
  { id: 11, jp: "洗い出す", reading: "あらいだす", en: "to identify / to uncover all items", example: "課題を洗い出しました。", exampleEn: "I have identified all the issues." },
  { id: 12, jp: "すり合わせ", reading: "すりあわせ", en: "alignment / coordination", example: "認識のすり合わせをしましょう。", exampleEn: "Let's align our understanding." },
  { id: 13, jp: "合意する", reading: "ごういする", en: "to agree / to reach consensus", example: "仕様に合意しました。", exampleEn: "We have agreed on the specifications." },
  { id: 14, jp: "変更依頼", reading: "へんこういらい", en: "change request", example: "変更依頼が来ました。", exampleEn: "A change request has come in." },
  { id: 15, jp: "影響範囲", reading: "えいきょうはんい", en: "scope of impact", example: "影響範囲を調査します。", exampleEn: "I will investigate the scope of impact." },
];

export const unit6Conversations = [
  {
    id: 1, title: "仕様確認のミーティング", sceneEn: "A requirements review meeting to confirm the spec for a new login feature.",
    lines: [
      { speaker: "リーダー", role: "Lead", jp: "では今日は新しいログイン機能の要件定義を進めましょう。Alexさん、まず現状の仕様書を共有してもらえますか？", en: "Let's move forward with the requirements definition for the new login feature today. Alex, could you first share the current specification document?" },
      { speaker: "Alex", role: "You", jp: "はい。仕様書を画面に共有します。現状では、ユーザー名とパスワードによるログイン機能を想定しています。", en: "Yes. I'll share the spec document on screen. Currently, we're assuming a login feature using username and password." },
      { speaker: "リーダー", role: "Lead", jp: "ありがとうございます。ソーシャルログインの機能はスコープに含まれていますか？", en: "Thank you. Is social login functionality included in the scope?" },
      { speaker: "Alex", role: "You", jp: "現時点ではスコープ外です。前提条件として、今回はメールアドレスとパスワードのみとしています。", en: "It's currently out of scope. As a precondition, we've limited it to email address and password only this time." },
      { speaker: "リーダー", role: "Lead", jp: "わかりました。では制約として仕様書に明記しておきましょう。他に洗い出すべき要件はありますか？", en: "Understood. Let's clearly state that as a constraint in the spec document. Are there any other requirements we need to identify?" },
      { speaker: "Alex", role: "You", jp: "はい、非機能要件として、ログイン処理は3秒以内に完了することを要件として追加したいです。", en: "Yes, I'd like to add as a non-functional requirement that the login process must complete within 3 seconds." },
      { speaker: "リーダー", role: "Lead", jp: "いいですね。では今の内容で合意しましょう。仕様書を更新してチームと共有してください。", en: "Sounds good. Let's agree on the current content. Please update the spec document and share it with the team." },
      { speaker: "Alex", role: "You", jp: "承知しました。本日中に更新して共有します。", en: "Understood. I will update and share it by end of today." },
    ]
  },
  {
    id: 2, title: "クライアントへの要件確認", sceneEn: "Confirming requirements with a client who has requested a new feature.",
    lines: [
      { speaker: "Alex", role: "You", jp: "山田様、本日はお時間をいただきありがとうございます。新機能のご要件について、すり合わせをしたいと思います。", en: "Thank you for your time today, Yamada-san. I'd like to align our understanding of the requirements for the new feature." },
      { speaker: "山田", role: "Client", jp: "こちらこそよろしくお願いします。ざっくり言うと、ユーザーが購入履歴を確認できる機能がほしいんです。", en: "Thank you as well. To put it broadly, we'd like a feature that allows users to check their purchase history." },
      { speaker: "Alex", role: "You", jp: "ありがとうございます。確認ですが、表示する履歴の期間はどのくらいを想定されていますか？", en: "Thank you. Just to confirm — what period of history are you thinking of displaying?" },
      { speaker: "山田", role: "Client", jp: "過去1年分で十分です。", en: "One year back should be sufficient." },
      { speaker: "Alex", role: "You", jp: "承知しました。また、ユースケースとして、スマートフォンからも確認できる必要はありますか？", en: "Understood. Also, as a use case — does it need to be viewable from smartphones as well?" },
      { speaker: "山田", role: "Client", jp: "はい、スマートフォン対応は必須です。", en: "Yes, smartphone support is essential." },
      { speaker: "Alex", role: "You", jp: "わかりました。では、過去1年分の購入履歴表示、スマートフォン対応という要件で認識しております。この内容で合意いただけますでしょうか？", en: "I see. So my understanding of the requirements is: displaying purchase history for the past year, with smartphone support. Could you agree to this?" },
      { speaker: "山田", role: "Client", jp: "はい、その通りです。よろしくお願いします。", en: "Yes, that's correct. Thank you." },
      { speaker: "Alex", role: "You", jp: "ありがとうございます。確認した内容を仕様書にまとめてお送りします。", en: "Thank you. I will compile the confirmed content into a spec document and send it to you." },
    ]
  },
  {
    id: 3, title: "変更依頼への対応", sceneEn: "A client requests a change after the spec was already agreed upon.",
    lines: [
      { speaker: "山田", role: "Client", jp: "Alexさん、申し訳ないのですが、先日合意した仕様に変更依頼があります。購入履歴に加えて、閲覧履歴も表示したいんです。", en: "Alex, I'm sorry, but I have a change request for the spec we agreed on the other day. In addition to purchase history, we'd also like to display browsing history." },
      { speaker: "Alex", role: "You", jp: "承知しました。変更依頼の内容は確認しました。影響範囲を調査してから、スケジュールへの影響をご連絡してもよろしいでしょうか。", en: "Understood. I have noted the change request. May I investigate the scope of impact first and then inform you of any schedule implications?" },
      { speaker: "山田", role: "Client", jp: "はい、もちろんです。いつ頃ご連絡いただけますか？", en: "Yes, of course. When can I expect to hear from you?" },
      { speaker: "Alex", role: "You", jp: "明日の午前中に調査結果をご報告します。追加工数と納期への影響を合わせてお伝えします。", en: "I will report the investigation results tomorrow morning. I will also inform you of any additional man-hours and impact on the delivery date." },
      { speaker: "山田", role: "Client", jp: "ありがとうございます。よろしくお願いします。", en: "Thank you. I appreciate it." },
      { speaker: "Alex", role: "You", jp: "こちらこそよろしくお願いします。変更依頼の詳細を改めてメールでご送付いただけますか？", en: "Likewise. Could you send the details of the change request by email as well?" },
    ]
  },
];

export const unit6Quiz = [
  { id: 1, type: "choice", question: "今回の開発で実現する機能の一覧や条件のことを何といいますか？\n＿＿＿を整理しましょう。", choices: ["仕様書", "要件", "スコープ", "ユースケース"], answer: "要件", hint: "The conditions and features that a system must fulfill" },
  { id: 2, type: "choice", question: "今回はソーシャルログインは＿＿＿外です。\n（この開発では対象にしない）", choices: ["スコープ", "要件", "制約", "影響範囲"], answer: "スコープ", hint: "The boundary of what is included in this project" },
  { id: 3, type: "choice", question: "開発を始める前に確認しておくべき条件のことを何といいますか？\n＿＿＿を確認してください。", choices: ["合意", "制約", "前提条件", "ユースケース"], answer: "前提条件", hint: "Conditions that must be true before development begins" },
  { id: 4, type: "choice", question: "認識の＿＿＿をしましょう。\n（お互いの理解が合っているか確認・調整すること）", choices: ["確認", "すり合わせ", "洗い出し", "合意"], answer: "すり合わせ", hint: "The process of aligning mutual understanding between parties" },
  { id: 5, type: "choice", question: "今まで出ていなかった課題をすべて明らかにすることを何といいますか？\n課題を＿＿＿ました。", choices: ["整理し", "共有し", "洗い出し", "合意し"], answer: "洗い出し", hint: "To uncover and list all items — often used for issues or requirements" },
  { id: 6, type: "choice", question: "仕様の変更を正式に依頼することを何といいますか？\n＿＿＿が届きました。", choices: ["仕様書", "要件定義", "影響範囲", "変更依頼"], answer: "変更依頼", hint: "A formal request to change something already agreed upon" },
  { id: 7, type: "choice", question: "変更があった場合、どこに影響が出るか調べることを何といいますか？\n＿＿＿を調査します。", choices: ["前提条件", "非機能要件", "影響範囲", "スコープ"], answer: "影響範囲", hint: "The extent of areas affected by a change" },
  { id: 8, type: "choice", question: "処理速度やセキュリティなど、機能そのものではない条件を何といいますか？", choices: ["ユースケース", "仕様書", "非機能要件", "要件定義"], answer: "非機能要件", hint: "Requirements related to performance, security, and reliability — not features themselves" },
];

export const unit6Roleplay = [
  { key: "A", label: "仕様確認ミーティング", descJp: "チームリーダーと新機能の仕様確認ミーティングを行います。要件・スコープ・前提条件を明確にしながら、最終的に合意を取りましょう。", desc: "Hold a spec review meeting with your team leader for a new feature. Clarify requirements, scope, and preconditions, and reach agreement.", points: ["「スコープに含まれていますか？」と確認できる", "「前提条件として〜としています」が使える", "「合意しましょう」「承知しました」で締められる"] },
  { key: "B", label: "クライアントへの要件確認", descJp: "クライアントから要件を聞き出し、認識のすり合わせをします。不明な点は丁寧に質問し、最後に合意を確認しましょう。", desc: "Gather requirements from a client and align understanding. Ask politely about unclear points and confirm agreement at the end.", points: ["「確認ですが、〜はどのくらいを想定されていますか？」が使える", "「ユースケースとして〜は必要ですか？」と質問できる", "「この内容で合意いただけますでしょうか？」が使える"] },
  { key: "C", label: "変更依頼への対応", descJp: "クライアントから変更依頼が来ました。影響範囲の調査を伝えた上で、スケジュールへの影響を確認します。冷静かつ丁寧に対応しましょう。", desc: "A client has submitted a change request. Inform them you will investigate the impact, and discuss schedule implications.", points: ["「影響範囲を調査します」が使える", "「追加工数と納期への影響をお伝えします」が言える", "「詳細をメールでご送付いただけますか？」と依頼できる"] },
];

export const unit7Vocab = [
  { id: 1, jp: "バグ", reading: "ばぐ", en: "bug", example: "バグを発見しました。", exampleEn: "I found a bug." },
  { id: 2, jp: "不具合", reading: "ふぐあい", en: "defect / malfunction", example: "不具合が発生しています。", exampleEn: "A defect has occurred." },
  { id: 3, jp: "エラー", reading: "えらー", en: "error", example: "エラーが出ています。", exampleEn: "An error is occurring." },
  { id: 4, jp: "再現する", reading: "さいげんする", en: "to reproduce (a bug)", example: "バグを再現できました。", exampleEn: "I was able to reproduce the bug." },
  { id: 5, jp: "再現しない", reading: "さいげんしない", en: "cannot reproduce", example: "こちらでは再現しません。", exampleEn: "I cannot reproduce it on my end." },
  { id: 6, jp: "原因", reading: "げんいん", en: "cause / root cause", example: "原因を調査中です。", exampleEn: "I am currently investigating the cause." },
  { id: 7, jp: "調査する", reading: "ちょうさする", en: "to investigate", example: "原因を調査します。", exampleEn: "I will investigate the cause." },
  { id: 8, jp: "修正する", reading: "しゅうせいする", en: "to fix / to correct", example: "バグを修正しました。", exampleEn: "I fixed the bug." },
  { id: 9, jp: "暫定対応", reading: "ざんていたいおう", en: "temporary fix / workaround", example: "まず暫定対応をします。", exampleEn: "I will apply a temporary fix first." },
  { id: 10, jp: "恒久対応", reading: "こうきゅうたいおう", en: "permanent fix", example: "来週恒久対応をします。", exampleEn: "I will apply a permanent fix next week." },
  { id: 11, jp: "手順", reading: "てじゅん", en: "steps / procedure", example: "再現手順を教えてください。", exampleEn: "Please tell me the steps to reproduce it." },
  { id: 12, jp: "ログ", reading: "ろぐ", en: "log", example: "ログを確認してください。", exampleEn: "Please check the log." },
  { id: 13, jp: "切り分ける", reading: "きりわける", en: "to isolate / to narrow down", example: "原因を切り分けています。", exampleEn: "I am isolating the cause." },
  { id: 14, jp: "影響範囲", reading: "えいきょうはんい", en: "scope of impact", example: "影響範囲を確認します。", exampleEn: "I will check the scope of impact." },
  { id: 15, jp: "報告する", reading: "ほうこくする", en: "to report", example: "バグを報告します。", exampleEn: "I will report the bug." },
];

export const unit7Conversations = [
  {
    id: 1, title: "バグ発見の報告", sceneEn: "You found a bug during testing and report it to your team leader.",
    lines: [
      { speaker: "Alex", role: "You", jp: "リーダー、少しよろしいですか。テスト中にバグを発見しました。", en: "Leader, do you have a moment? I found a bug during testing." },
      { speaker: "リーダー", role: "Lead", jp: "どんなバグですか？", en: "What kind of bug is it?" },
      { speaker: "Alex", role: "You", jp: "ログイン画面で、パスワードを3回間違えてもアカウントがロックされない不具合です。パスワードを3回以上間違えて入力するだけで再現できます。", en: "It's a defect where the account doesn't get locked even after entering the wrong password 3 times on the login screen. It can be reproduced simply by entering the wrong password 3 or more times." },
      { speaker: "リーダー", role: "Lead", jp: "それは重大なバグですね。影響範囲はどのくらいですか？", en: "That's a serious bug. What is the scope of impact?" },
      { speaker: "Alex", role: "You", jp: "全ユーザーに影響があります。現在、原因を調査中です。", en: "It affects all users. I am currently investigating the cause." },
      { speaker: "リーダー", role: "Lead", jp: "わかりました。急いで対応してください。進捗は随時共有してください。", en: "Understood. Please handle it urgently. Keep sharing progress as things develop." },
      { speaker: "Alex", role: "You", jp: "はい、まず暫定対応をしてから、恒久対応を進めます。", en: "Yes, I will first apply a temporary fix, then work on the permanent fix." },
    ]
  },
  {
    id: 2, title: "原因調査の報告", sceneEn: "Reporting the result of your bug investigation to the team.",
    lines: [
      { speaker: "Alex", role: "You", jp: "リーダー、バグの調査結果をご報告します。", en: "Leader, I'd like to report the results of the bug investigation." },
      { speaker: "リーダー", role: "Lead", jp: "どうでしたか？", en: "What did you find?" },
      { speaker: "Alex", role: "You", jp: "ログを確認したところ、ログイン失敗回数のカウント処理に問題がありました。条件分岐のコードが誤っていたことが原因です。", en: "After checking the log, I found a problem in the process that counts failed login attempts. The cause was an error in the conditional branching code." },
      { speaker: "リーダー", role: "Lead", jp: "原因が特定できたんですね。修正はどのくらいかかりますか？", en: "So you've identified the cause. How long will the fix take?" },
      { speaker: "Alex", role: "You", jp: "暫定対応は本日中に完了できます。恒久対応は明日の午前中を予定しています。", en: "The temporary fix can be completed today. The permanent fix is planned for tomorrow morning." },
      { speaker: "リーダー", role: "Lead", jp: "わかりました。修正後はテストをしっかり行ってください。", en: "Understood. Please make sure to test thoroughly after the fix." },
      { speaker: "Alex", role: "You", jp: "はい、修正後に再現しないことを確認してからリリースします。", en: "Yes, I will confirm it cannot be reproduced after the fix before releasing." },
    ]
  },
  {
    id: 3, title: "クライアントへの不具合報告", sceneEn: "Reporting a bug to a client and explaining the response plan.",
    lines: [
      { speaker: "Alex", role: "You", jp: "山田様、お世話になっております。Alexでございます。システムの不具合についてご連絡させていただきます。", en: "Yamada-san, thank you for your continued support. This is Alex. I'm contacting you regarding a system defect." },
      { speaker: "山田", role: "Client", jp: "不具合ですか。どのような問題ですか？", en: "A defect? What kind of issue is it?" },
      { speaker: "Alex", role: "You", jp: "ログイン機能に不具合が発生しており、一部のユーザーがログインできない状況です。大変ご迷惑をおかけして申し訳ございません。", en: "A defect has occurred in the login feature, and some users are unable to log in. I sincerely apologize for the inconvenience." },
      { speaker: "山田", role: "Client", jp: "いつ頃直りますか？", en: "When will it be fixed?" },
      { speaker: "Alex", role: "You", jp: "現在、原因を切り分けております。本日中に暫定対応を行い、明日の午前中に恒久対応を完了させる予定です。", en: "We are currently isolating the cause. We plan to apply a temporary fix today and complete the permanent fix tomorrow morning." },
      { speaker: "山田", role: "Client", jp: "わかりました。対応状況を随時ご連絡ください。", en: "Understood. Please keep me updated on the response status." },
      { speaker: "Alex", role: "You", jp: "はい、対応が完了次第、すぐにご連絡いたします。ご不便をおかけして大変申し訳ございません。", en: "Yes, I will contact you as soon as the response is complete. We are truly sorry for the inconvenience." },
    ]
  },
];

export const unit7Quiz = [
  { id: 1, type: "choice", question: "テスト中に問題を見つけました。\nバグを＿＿＿しました。", choices: ["修正", "発見", "調査", "報告"], answer: "発見", hint: "To find or discover something" },
  { id: 2, type: "choice", question: "同じバグを自分の環境でも起こせるか確認することを何といいますか？\nバグを＿＿＿する。", choices: ["修正", "調査", "再現", "切り分け"], answer: "再現", hint: "Making the same problem happen again intentionally" },
  { id: 3, type: "choice", question: "バグの＿＿＿を調査しています。\n（なぜ起きたか）", choices: ["手順", "ログ", "原因", "影響範囲"], answer: "原因", hint: "The reason why the bug occurred" },
  { id: 4, type: "choice", question: "まずは＿＿＿対応をして、来週に恒久対応をします。\n（とりあえずの一時的な修正）", choices: ["暫定", "緊急", "一時", "仮"], answer: "暫定", hint: "A temporary measure applied before the full fix" },
  { id: 5, type: "choice", question: "どこに問題があるか範囲を絞ることを何といいますか？\n原因を＿＿＿ています。", choices: ["調査し", "修正し", "切り分け", "報告し"], answer: "切り分け", hint: "To isolate and narrow down the source of a problem" },
  { id: 6, type: "choice", question: "バグがどの範囲のユーザーに影響しているか確認します。\n＿＿＿を確認します。", choices: ["原因", "手順", "ログ", "影響範囲"], answer: "影響範囲", hint: "How widely the bug affects users or systems" },
  { id: 7, type: "choice", question: "修正後に同じバグが起きないか確認しました。\n修正後に＿＿＿しないことを確認しました。", choices: ["発生", "再現", "修正", "調査"], answer: "再現", hint: "The bug should no longer be reproducible after the fix" },
  { id: 8, type: "choice", question: "クライアントへのメールで謝罪の表現として最も丁寧なのはどれですか？", choices: ["すみません", "申し訳ありません", "ごめんなさい", "申し訳ございません"], answer: "申し訳ございません", hint: "The most formal and humble apology in business Japanese" },
];

export const unit7Roleplay = [
  { key: "A", label: "バグ発見の報告", descJp: "テスト中にバグを発見し、リーダーに報告します。バグの内容・再現手順・影響範囲を簡潔に伝え、対応方針を確認しましょう。", desc: "You found a bug during testing and report it to your leader. Clearly explain the bug, reproduction steps, and scope of impact.", points: ["「バグを発見しました」と報告できる", "再現手順を説明できる", "「暫定対応・恒久対応」を使い分けられる"] },
  { key: "B", label: "原因調査の報告", descJp: "バグの原因調査が完了し、結果をリーダーに報告します。ログや調査結果をもとに、原因と対応スケジュールを伝えましょう。", desc: "Report your bug investigation results to the leader. Explain the cause and your planned fix schedule based on log findings.", points: ["「ログを確認したところ〜」が使える", "「原因は〜でした」と説明できる", "暫定・恒久対応のスケジュールが伝えられる"] },
  { key: "C", label: "クライアントへの不具合報告", descJp: "クライアントにシステムの不具合を報告します。丁寧に謝罪しながら、現状と対応予定を説明しましょう。「申し訳ございません」を使います。", desc: "Report a system defect to a client. Apologize politely and explain the current situation and fix schedule.", points: ["「不具合が発生しており〜」と状況説明できる", "「申し訳ございません」で丁寧に謝罪できる", "「対応が完了次第ご連絡します」が言える"] },
];

// ---- UNIT 8 DATA ----
export const unit8Vocab = [
  { id: 1, jp: "コードレビュー", reading: "こーどれびゅー", en: "code review", example: "コードレビューをお願いします。", exampleEn: "Please review my code." },
  { id: 2, jp: "プルリクエスト", reading: "ぷるりくえすと", en: "pull request (PR)", example: "プルリクエストを出しました。", exampleEn: "I submitted a pull request." },
  { id: 3, jp: "指摘", reading: "してき", en: "feedback / pointing out an issue", example: "指摘ありがとうございます。", exampleEn: "Thank you for your feedback." },
  { id: 4, jp: "修正する", reading: "しゅうせいする", en: "to fix / to revise", example: "指摘箇所を修正しました。", exampleEn: "I fixed the pointed-out areas." },
  { id: 5, jp: "承認する", reading: "しょうにんする", en: "to approve", example: "PRを承認しました。", exampleEn: "I approved the PR." },
  { id: 6, jp: "差し戻す", reading: "さしもどす", en: "to send back / to request changes", example: "修正が必要なので差し戻します。", exampleEn: "I'm sending it back as it needs revision." },
  { id: 7, jp: "コメント", reading: "こめんと", en: "comment", example: "コメントを確認してください。", exampleEn: "Please check the comments." },
  { id: 8, jp: "意図", reading: "いと", en: "intention / purpose", example: "このコードの意図を教えてください。", exampleEn: "Could you explain the intention of this code?" },
  { id: 9, jp: "可読性", reading: "かどくせい", en: "readability", example: "可読性を上げてほしいです。", exampleEn: "I'd like you to improve the readability." },
  { id: 10, jp: "リファクタリング", reading: "りふぁくたりんぐ", en: "refactoring", example: "リファクタリングを提案します。", exampleEn: "I suggest refactoring." },
  { id: 11, jp: "ご確認ください", reading: "ごかくにんください", en: "please review / please check", example: "修正しましたのでご確認ください。", exampleEn: "I have made revisions, so please check." },
  { id: 12, jp: "ご指摘の通り", reading: "ごしてきのとおり", en: "as you pointed out", example: "ご指摘の通り修正しました。", exampleEn: "I revised it as you pointed out." },
  { id: 13, jp: "仕様通り", reading: "しようどおり", en: "as per the spec", example: "仕様通りの実装です。", exampleEn: "It is implemented as per the spec." },
  { id: 14, jp: "意図的", reading: "いとてき", en: "intentional", example: "これは意図的な実装です。", exampleEn: "This is an intentional implementation." },
  { id: 15, jp: "対応しました", reading: "たいおうしました", en: "I have addressed it", example: "全ての指摘に対応しました。", exampleEn: "I have addressed all the feedback." },
  { id: 16, jp: "おっしゃる通り", reading: "おっしゃるとおり", en: "as you say / exactly right", example: "おっしゃる通りです。修正します。", exampleEn: "Exactly as you say. I will fix it." },
];

export const unit8Conversations = [
  {
    id: 1, title: "PRのレビュー依頼", sceneEn: "Asking a colleague to review your pull request on Slack.",
    lines: [
      { speaker: "Alex", role: "You", jp: "田中さん、お疲れ様です。ログイン機能のプルリクエストを出しましたので、コードレビューをお願いできますか？", en: "Hi Tanaka-san, thanks for your hard work. I've submitted a pull request for the login feature — could I ask you to do a code review?" },
      { speaker: "田中", role: "Colleague", jp: "了解しました。今日の午後に確認します。", en: "Got it. I'll take a look this afternoon." },
      { speaker: "Alex", role: "You", jp: "ありがとうございます。急ぎではないので、お時間のあるときで大丈夫です。PRのリンクをSlackに貼ります。", en: "Thank you. It's not urgent, so whenever you have time is fine. I'll post the PR link on Slack." },
      { speaker: "田中", role: "Colleague", jp: "わかりました。コメントしたら連絡しますね。", en: "Sure. I'll let you know once I've left comments." },
      { speaker: "Alex", role: "You", jp: "よろしくお願いします。", en: "Thank you very much." },
    ]
  },
  {
    id: 2, title: "レビューコメントへの対応", sceneEn: "Responding to review comments left by a colleague.",
    lines: [
      { speaker: "田中", role: "Colleague", jp: "Alexさん、レビューしました。2点ほど指摘があります。", en: "Alex, I've done the review. I have a couple of points of feedback." },
      { speaker: "Alex", role: "You", jp: "ありがとうございます。確認します。", en: "Thank you. I'll check them." },
      { speaker: "田中", role: "Colleague", jp: "1点目は、このメソッドの可読性を上げてほしいです。変数名が少しわかりにくいです。2点目は、エラーハンドリングが不足しています。", en: "First, I'd like you to improve the readability of this method. The variable names are a bit hard to understand. Second, the error handling is insufficient." },
      { speaker: "Alex", role: "You", jp: "ご指摘ありがとうございます。1点目は変数名を修正します。2点目のエラーハンドリングについてですが、これは仕様通りの実装です。仕様書の3ページをご確認いただけますか？", en: "Thank you for your feedback. For the first point, I'll fix the variable names. Regarding the second point about error handling — this is implemented as per the spec. Could you check page 3 of the spec document?" },
      { speaker: "田中", role: "Colleague", jp: "なるほど、仕様書を確認しました。おっしゃる通りですね。では1点目の修正をお願いします。", en: "I see, I checked the spec. You're right. Then please make the fix for the first point." },
      { speaker: "Alex", role: "You", jp: "承知しました。修正しましたのでご確認ください。", en: "Understood. I've made the revision, so please check." },
    ]
  },
  {
    id: 3, title: "レビュアーとしてフィードバックする", sceneEn: "You are reviewing a colleague's PR and leaving constructive feedback.",
    lines: [
      { speaker: "Alex", role: "You", jp: "田中さん、PRを確認しました。全体的に良い実装だと思います。1点だけ確認させてください。", en: "Tanaka-san, I reviewed your PR. I think it's overall a good implementation. Just one thing I'd like to check." },
      { speaker: "田中", role: "Colleague", jp: "はい、どうぞ。", en: "Sure, go ahead." },
      { speaker: "Alex", role: "You", jp: "この部分のコードの意図を教えていただけますか？リファクタリングできるかもしれないと思いまして。", en: "Could you explain the intention of this part of the code? I thought it might be possible to refactor it." },
      { speaker: "田中", role: "Colleague", jp: "ああ、ここは意図的な実装です。パフォーマンスを優先してこの書き方にしました。", en: "Ah, this is an intentional implementation. I wrote it this way to prioritize performance." },
      { speaker: "Alex", role: "You", jp: "なるほど、理解しました。ではコメントとして理由を書いておくと、他のメンバーにもわかりやすいと思います。", en: "I see, understood. In that case, I think adding the reason as a comment would make it easier for other team members to understand." },
      { speaker: "田中", role: "Colleague", jp: "良い提案ですね。コメントを追加します。", en: "Good suggestion. I'll add a comment." },
      { speaker: "Alex", role: "You", jp: "よろしくお願いします。修正後に承認します。", en: "Thank you. I'll approve it after the revision." },
    ]
  },
];

export const unit8Quiz = [
  { id: 1, type: "choice", question: "コードの変更をチームに確認してもらうために出すものを何といいますか？\n＿＿＿を出しました。", choices: ["コメント", "プルリクエスト", "指摘", "承認"], answer: "プルリクエスト", hint: "A request for teammates to review your code changes" },
  { id: 2, type: "choice", question: "レビュアーから問題点を教えてもらうことを何といいますか？\n＿＿＿ありがとうございます。", choices: ["承認", "差し戻し", "指摘", "コメント"], answer: "指摘", hint: "When someone points out an issue or area for improvement" },
  { id: 3, type: "choice", question: "レビューでOKが出て、マージできる状態になることを何といいますか？\nPRを＿＿＿しました。", choices: ["指摘", "差し戻", "対応", "承認"], answer: "承認", hint: "The reviewer gives the green light to merge" },
  { id: 4, type: "choice", question: "修正が必要で、もう一度やり直してもらう場合の表現はどれですか？\n＿＿＿します。", choices: ["承認", "差し戻", "指摘", "対応"], answer: "差し戻", hint: "Sending the PR back for more changes" },
  { id: 5, type: "choice", question: "レビューで指摘を受けました。「わかりました、その通りです」という意味で最も丁寧な返答はどれですか？", choices: ["おっしゃる通りです", "そうですね", "わかりました", "確認します"], answer: "おっしゃる通りです", hint: "A formal phrase agreeing with what someone said" },
  { id: 6, type: "choice", question: "コードが読みやすいかどうかを表す言葉は何ですか？\n＿＿＿を上げてほしいです。", choices: ["意図", "仕様", "可読性", "意図的"], answer: "可読性", hint: "How easy the code is to read and understand" },
  { id: 7, type: "choice", question: "このコードはわざとこのように書きました。という場合の表現はどれですか？\nこれは＿＿＿な実装です。", choices: ["仕様通り", "意図的", "可読性", "対応済み"], answer: "意図的", hint: "Describing something done on purpose, not by accident" },
  { id: 8, type: "choice", question: "レビューが終わり、指摘された箇所を全て直しました。リーダーへの報告として最も適切な表現はどれですか？", choices: ["全ての指摘を確認しました", "全ての指摘に対応しました", "全ての指摘を承認しました", "全ての指摘を差し戻しました"], answer: "全ての指摘に対応しました", hint: "Reporting that you have taken action on all comments" },
];

export const unit8Roleplay = [
  { key: "A", label: "PRのレビュー依頼", descJp: "同僚にSlackでプルリクエストのレビューを依頼します。丁寧にお願いし、リンクを共有しましょう。", desc: "Ask a colleague on Slack to review your pull request. Make a polite request and share the link.", points: ["「プルリクエストを出しました」が使える", "「お時間のあるときで大丈夫です」と配慮できる", "「よろしくお願いします」で締められる"] },
  { key: "B", label: "レビューコメントへの対応", descJp: "レビューで指摘を受けました。素直に修正するものと、仕様通りで問題ないものを区別して丁寧に対応しましょう。", desc: "You received review comments. Politely respond — fix what needs fixing, and explain what is intentional or spec-compliant.", points: ["「ご指摘ありがとうございます」と感謝できる", "「仕様通りの実装です」と説明できる", "「修正しましたのでご確認ください」が使える"] },
  { key: "C", label: "レビュアーとしてフィードバック", descJp: "あなたが同僚のコードをレビューします。良い点を認めつつ、改善点は建設的に伝えましょう。", desc: "You are reviewing a colleague's code. Acknowledge the good parts and give constructive feedback on areas to improve.", points: ["「全体的に良い実装だと思います」と肯定から入れる", "「このコードの意図を教えていただけますか？」と質問できる", "「〜するとわかりやすいと思います」と提案できる"] },
];

// ---- UNIT 9 DATA ----
export const unit9Vocab = [
  { id: 1, jp: "議題", reading: "ぎだい", en: "agenda item / topic", example: "本日の議題を確認します。", exampleEn: "Let's confirm today's agenda." },
  { id: 2, jp: "議事録", reading: "ぎじろく", en: "meeting minutes", example: "議事録を作成しました。", exampleEn: "I have created the meeting minutes." },
  { id: 3, jp: "司会", reading: "しかい", en: "facilitator / chairperson", example: "本日の司会を担当します。", exampleEn: "I will be facilitating today's meeting." },
  { id: 4, jp: "発言する", reading: "はつげんする", en: "to speak up / to make a comment", example: "発言してもよろしいですか？", exampleEn: "May I say something?" },
  { id: 5, jp: "確認する", reading: "かくにんする", en: "to confirm / to check", example: "議題を確認します。", exampleEn: "I will confirm the agenda." },
  { id: 6, jp: "提案する", reading: "ていあんする", en: "to propose / to suggest", example: "別の方法を提案します。", exampleEn: "I'd like to propose another approach." },
  { id: 7, jp: "賛成する", reading: "さんせいする", en: "to agree / to be in favor", example: "その案に賛成です。", exampleEn: "I agree with that proposal." },
  { id: 8, jp: "反対する", reading: "はんたいする", en: "to disagree / to object", example: "その点については反対です。", exampleEn: "I disagree on that point." },
  { id: 9, jp: "持ち越す", reading: "もちこす", en: "to carry over / to defer", example: "次回に持ち越しましょう。", exampleEn: "Let's defer it to next time." },
  { id: 10, jp: "決定する", reading: "けっていする", en: "to decide / to finalize", example: "この方向で決定しましょう。", exampleEn: "Let's finalize this direction." },
  { id: 11, jp: "宿題", reading: "しゅくだい", en: "action item / homework (meeting context)", example: "宿題を確認します。", exampleEn: "Let's confirm the action items." },
  { id: 12, jp: "アジェンダ", reading: "あじぇんだ", en: "agenda", example: "アジェンダを共有します。", exampleEn: "I will share the agenda." },
  { id: 13, jp: "ファシリテーター", reading: "ふぁしりてーたー", en: "facilitator", example: "ファシリテーターを担当します。", exampleEn: "I will serve as the facilitator." },
  { id: 14, jp: "よろしいでしょうか", reading: "よろしいでしょうか", en: "is that alright? / shall we?", example: "この方向でよろしいでしょうか？", exampleEn: "Is this direction alright?" },
  { id: 15, jp: "以上で終わります", reading: "いじょうでおわります", en: "that concludes the meeting", example: "以上で本日のミーティングを終わります。", exampleEn: "That concludes today's meeting." },
];

export const unit9Conversations = [
  {
    id: 1, title: "ミーティングの進行", sceneEn: "Alex is facilitating the weekly team meeting.",
    lines: [
      { speaker: "Alex", role: "You", jp: "では、本日のミーティングを始めます。本日の議題は3点です。まず進捗確認、次にスケジュール調整、最後に来週の宿題の確認です。よろしいでしょうか。", en: "Let's begin today's meeting. We have 3 agenda items today. First, a progress check, then schedule adjustment, and finally confirming next week's action items. Is that alright?" },
      { speaker: "田中", role: "Colleague", jp: "はい、よろしくお願いします。", en: "Yes, please go ahead." },
      { speaker: "Alex", role: "You", jp: "では最初の議題、進捗確認から始めます。田中さん、いかがですか？", en: "Let's start with the first agenda item — the progress check. Tanaka-san, how are things?" },
      { speaker: "田中", role: "Colleague", jp: "はい。先週のタスクは予定通り完了しました。", en: "Yes. Last week's tasks were completed as planned." },
      { speaker: "Alex", role: "You", jp: "ありがとうございます。では次の議題に移ります。", en: "Thank you. Let's move on to the next agenda item." },
    ]
  },
  {
    id: 2, title: "意見を述べる・提案する", sceneEn: "During a meeting, Alex speaks up to propose an idea.",
    lines: [
      { speaker: "リーダー", role: "Lead", jp: "新しいシステムの導入について、皆さんのご意見をお聞きしたいです。", en: "I'd like to hear everyone's opinions on introducing the new system." },
      { speaker: "Alex", role: "You", jp: "発言してもよろしいですか？", en: "May I say something?" },
      { speaker: "リーダー", role: "Lead", jp: "どうぞ。", en: "Please go ahead." },
      { speaker: "Alex", role: "You", jp: "ありがとうございます。新システムの導入には賛成です。ただ、導入時期について提案があります。来月よりも再来月の方が、チームの準備が整うと思います。", en: "Thank you. I'm in favor of introducing the new system. However, I have a suggestion regarding the timing. I think the month after next would be better than next month for the team to be ready." },
      { speaker: "リーダー", role: "Lead", jp: "なるほど。田中さんはいかがですか？", en: "I see. What do you think, Tanaka-san?" },
      { speaker: "田中", role: "Colleague", jp: "私もAlexさんの意見に賛成です。", en: "I also agree with Alex's opinion." },
      { speaker: "リーダー", role: "Lead", jp: "わかりました。では再来月の導入で決定しましょう。", en: "Understood. Then let's finalize introducing it the month after next." },
      { speaker: "Alex", role: "You", jp: "ありがとうございます。議事録に反映しておきます。", en: "Thank you. I'll reflect that in the meeting minutes." },
    ]
  },
  {
    id: 3, title: "ミーティングのクローズ", sceneEn: "Wrapping up the meeting with action items and next steps.",
    lines: [
      { speaker: "Alex", role: "You", jp: "では、本日の宿題を確認します。田中さんは来週までにAPIの仕様書を作成。私はスケジュールを更新してチームに共有。この2点でよろしいでしょうか。", en: "Let's confirm today's action items. Tanaka-san will create the API spec document by next week. I will update the schedule and share it with the team. Are these two points correct?" },
      { speaker: "田中", role: "Colleague", jp: "はい、問題ありません。", en: "Yes, no problem." },
      { speaker: "リーダー", role: "Lead", jp: "次回のミーティングはいつですか？", en: "When is the next meeting?" },
      { speaker: "Alex", role: "You", jp: "来週の月曜日、同じ時間を予定しています。問題なければこの場で決定しましょう。", en: "It's planned for next Monday at the same time. If there are no issues, let's finalize it here." },
      { speaker: "リーダー", role: "Lead", jp: "わかりました。では来週月曜日で。", en: "Understood. Then next Monday it is." },
      { speaker: "Alex", role: "You", jp: "ありがとうございます。議事録は本日中に共有します。以上で本日のミーティングを終わります。お疲れ様でした。", en: "Thank you. I will share the meeting minutes by end of today. That concludes today's meeting. Good work, everyone." },
    ]
  },
];

export const unit9Quiz = [
  { id: 1, type: "choice", question: "ミーティングで話し合う内容のリストを何といいますか？\n本日の＿＿＿を確認します。", choices: ["議事録", "宿題", "議題", "司会"], answer: "議題", hint: "The list of topics to be discussed in a meeting" },
  { id: 2, type: "choice", question: "ミーティング後に決定事項や話し合いの内容をまとめた文書を何といいますか？", choices: ["アジェンダ", "議事録", "宿題", "議題"], answer: "議事録", hint: "A written record of what was discussed and decided" },
  { id: 3, type: "choice", question: "ミーティングで自分の意見を言いたいときの表現はどれですか？", choices: ["発言してもよろしいですか？", "話してもいいですか？", "意見があります", "ちょっといいですか？"], answer: "発言してもよろしいですか？", hint: "The most formal and polite way to ask permission to speak" },
  { id: 4, type: "choice", question: "その案に＿＿＿です。\n（同意する・支持する）", choices: ["反対", "提案", "賛成", "決定"], answer: "賛成", hint: "Expressing agreement or support for a proposal" },
  { id: 5, type: "choice", question: "今日中に決められない議題を次回に回すことを何といいますか？\n次回に＿＿＿しましょう。", choices: ["決定", "提案", "持ち越", "確認"], answer: "持ち越", hint: "Deferring a topic to the next meeting" },
  { id: 6, type: "choice", question: "ミーティング後に各担当者に割り当てられた作業や確認事項のことを何といいますか？\n＿＿＿を確認します。", choices: ["議題", "アジェンダ", "宿題", "議事録"], answer: "宿題", hint: "A casual but common term in Japanese IT workplaces for tasks assigned after a meeting" },
  { id: 7, type: "choice", question: "ミーティングを正式に締めくくる一言として最も適切なのはどれですか？", choices: ["以上で本日のミーティングを終わります", "では終わりにします", "お疲れ様でした", "ミーティングを閉じます"], answer: "以上で本日のミーティングを終わります", hint: "A fixed formal phrase — the first word signals the end of proceedings" },
  { id: 8, type: "choice", question: "上司に方向性を確認する場面です。最もフォーマルで適切な表現はどれですか？", choices: ["この方向でよろしいでしょうか？", "この方向でいいですか？", "この方向で大丈夫でしょうか？", "この方向で問題ないですか？"], answer: "この方向でよろしいでしょうか？", hint: "よろしいでしょうか is the most formal — the others are too casual for a manager" },
];

export const unit9Roleplay = [
  { key: "A", label: "ミーティングの進行", descJp: "あなたが司会としてチームミーティングを進行します。議題を確認し、発言を促しながら会議をスムーズに進めましょう。", desc: "You are facilitating a team meeting. Confirm the agenda, invite speakers, and keep the meeting on track.", points: ["「本日の議題は〜です」と説明できる", "「では次の議題に移ります」が使える", "「よろしいでしょうか？」で確認できる"] },
  { key: "B", label: "意見を述べる・提案する", descJp: "ミーティングで意見を求められました。自分の意見を述べ、提案をします。「発言してもよろしいですか？」から始めましょう。", desc: "You are asked for your opinion in a meeting. Share your view and make a proposal.", points: ["「発言してもよろしいですか？」と許可を求められる", "「賛成ですが、〜という提案があります」が使える", "「議事録に反映します」で締められる"] },
  { key: "C", label: "ミーティングのクローズ", descJp: "ミーティングの終盤で宿題を確認し、次回の日程を決めてミーティングを締めくくります。", desc: "At the end of a meeting, confirm action items, schedule the next meeting, and formally close.", points: ["「本日の宿題を確認します」が使える", "「問題なければこの場で決定しましょう」が言える", "「以上で本日のミーティングを終わります」で締められる"] },
];

// ---- UNIT 10 DATA ----
export const unit10Vocab = [
  { id: 1, jp: "マイルストーン", reading: "まいるすとーん", en: "milestone", example: "マイルストーンを確認しましょう。", exampleEn: "Let's check the milestones." },
  { id: 2, jp: "ガントチャート", reading: "がんとちゃーと", en: "Gantt chart", example: "ガントチャートを更新しました。", exampleEn: "I updated the Gantt chart." },
  { id: 3, jp: "タスク管理", reading: "たすくかんり", en: "task management", example: "タスク管理ツールを使っています。", exampleEn: "I use a task management tool." },
  { id: 4, jp: "進捗管理", reading: "しんちょくかんり", en: "progress management", example: "進捗管理をしっかり行いましょう。", exampleEn: "Let's manage progress carefully." },
  { id: 5, jp: "リスク", reading: "りすく", en: "risk", example: "リスクを洗い出してください。", exampleEn: "Please identify all the risks." },
  { id: 6, jp: "リスク管理", reading: "りすくかんり", en: "risk management", example: "リスク管理が重要です。", exampleEn: "Risk management is important." },
  { id: 7, jp: "スプリント", reading: "すぷりんと", en: "sprint", example: "今スプリントの目標を確認します。", exampleEn: "Let's confirm this sprint's goals." },
  { id: 8, jp: "バックログ", reading: "ばっくろぐ", en: "backlog", example: "バックログを整理しましょう。", exampleEn: "Let's organize the backlog." },
  { id: 9, jp: "ステークホルダー", reading: "すてーくほるだー", en: "stakeholder", example: "ステークホルダーに報告します。", exampleEn: "I will report to the stakeholders." },
  { id: 10, jp: "ボトルネック", reading: "ぼとるねっく", en: "bottleneck", example: "ボトルネックを特定しました。", exampleEn: "I identified the bottleneck." },
  { id: 11, jp: "進捗報告", reading: "しんちょくほうこく", en: "progress report", example: "週次で進捗報告を行います。", exampleEn: "We will do weekly progress reports." },
  { id: 12, jp: "炎上する", reading: "えんじょうする", en: "to go off the rails / to blow up (project)", example: "プロジェクトが炎上しています。", exampleEn: "The project is going off the rails." },
  { id: 13, jp: "巻き取る", reading: "まきとる", en: "to take over / to absorb a task", example: "そのタスクを巻き取ります。", exampleEn: "I will take over that task." },
  { id: 14, jp: "リソース", reading: "りそーす", en: "resource (people/time/budget)", example: "リソースが不足しています。", exampleEn: "We are short on resources." },
  { id: 15, jp: "納品する", reading: "のうひんする", en: "to deliver / to submit a deliverable", example: "来週納品する予定です。", exampleEn: "We plan to deliver next week." },
];

export const unit10Conversations = [
  {
    id: 1, title: "プロジェクトの進捗報告", sceneEn: "Alex gives a weekly progress report to the project manager.",
    lines: [
      { speaker: "Alex", role: "You", jp: "では、今週の進捗報告をします。マイルストーン1の設計フェーズは予定通り完了しました。現在はマイルストーン2の実装フェーズに入っています。", en: "Let me give this week's progress report. Milestone 1, the design phase, was completed as planned. We are currently in Milestone 2, the implementation phase." },
      { speaker: "PM", role: "PM", jp: "順調ですね。リスクはありますか？", en: "That's on track. Are there any risks?" },
      { speaker: "Alex", role: "You", jp: "はい、1点リスクがあります。外部APIの仕様変更が発生する可能性があり、その場合は工数が増える見込みです。リスク管理として、代替案を検討中です。", en: "Yes, there is one risk. There is a possibility of an external API spec change, which could increase the man-hours needed. As a risk management measure, we are looking into alternatives." },
      { speaker: "PM", role: "PM", jp: "わかりました。ステークホルダーへの報告はどうしますか？", en: "Understood. What about reporting to the stakeholders?" },
      { speaker: "Alex", role: "You", jp: "来週の定例ミーティングで報告する予定です。リスクと対応策をまとめた資料を準備します。", en: "I plan to report at next week's regular meeting. I will prepare a document summarizing the risks and countermeasures." },
    ]
  },
  {
    id: 2, title: "プロジェクトの炎上対応", sceneEn: "The project is falling behind and Alex discusses recovery measures with the team.",
    lines: [
      { speaker: "PM", role: "PM", jp: "Alexさん、現状プロジェクトが炎上気味です。ボトルネックはどこだと思いますか？", en: "Alex, the project is currently going off the rails. Where do you think the bottleneck is?" },
      { speaker: "Alex", role: "You", jp: "バックログの整理ができておらず、タスク管理が追いついていない状態です。また、リソースが不足しているため、優先度の高いタスクに集中できていません。", en: "The backlog has not been properly organized, and task management is falling behind. Also, due to a shortage of resources, we cannot focus on high-priority tasks." },
      { speaker: "PM", role: "PM", jp: "改善策はありますか？", en: "Do you have any improvement measures?" },
      { speaker: "Alex", role: "You", jp: "はい。まずバックログを整理して優先順位を明確にします。次に、田中さんに一部タスクを巻き取っていただけないか相談します。スプリントの目標も現実的な範囲に見直したいと思います。", en: "Yes. First, I will organize the backlog and clarify priorities. Next, I will consult with Tanaka-san about taking over some tasks. I'd also like to review the sprint goals to a more realistic scope." },
      { speaker: "PM", role: "PM", jp: "わかりました。早急に対応しましょう。進捗は毎日共有してください。", en: "Understood. Let's take action quickly. Please share progress daily." },
      { speaker: "Alex", role: "You", jp: "はい、毎日進捗報告します。納品日には間に合わせます。", en: "Yes, I will report progress daily. I will make sure we deliver by the deadline." },
    ]
  },
  {
    id: 3, title: "スプリント計画のミーティング", sceneEn: "Planning the tasks and goals for the next sprint.",
    lines: [
      { speaker: "Alex", role: "You", jp: "では、次のスプリントの計画を始めます。今回のスプリントの目標は、ログイン機能の実装完了です。バックログから優先度の高いタスクを3つ選びました。", en: "Let's begin planning the next sprint. The goal of this sprint is to complete the implementation of the login feature. I've selected 3 high-priority tasks from the backlog." },
      { speaker: "田中", role: "Colleague", jp: "リソースは足りていますか？", en: "Are there enough resources?" },
      { speaker: "Alex", role: "You", jp: "工数を計算したところ、今のリソースでギリギリ間に合う見込みです。ただ、リスクとして外部要因による遅延の可能性があります。", en: "After calculating the man-hours, it looks like we can barely make it with current resources. However, there is a risk of delays due to external factors." },
      { speaker: "田中", role: "Colleague", jp: "もし遅れそうなら早めに教えてください。タスクを巻き取ります。", en: "If it looks like we'll fall behind, please let me know early. I'll take over some tasks." },
      { speaker: "Alex", role: "You", jp: "ありがとうございます。ガントチャートを更新して共有しますので、確認をお願いします。", en: "Thank you. I will update and share the Gantt chart, so please check it." },
      { speaker: "田中", role: "Colleague", jp: "わかりました。マイルストーンに向けて頑張りましょう。", en: "Got it. Let's do our best toward the milestone." },
    ]
  },
];

export const unit10Quiz = [
  { id: 1, type: "choice", question: "プロジェクトの重要な節目・目標地点のことを何といいますか？\n＿＿＿を確認しましょう。", choices: ["スプリント", "バックログ", "マイルストーン", "リソース"], answer: "マイルストーン", hint: "A key checkpoint or goal in a project timeline" },
  { id: 2, type: "choice", question: "アジャイル開発で、一定期間（1〜2週間）の作業単位のことを何といいますか？", choices: ["マイルストーン", "スプリント", "バックログ", "ガントチャート"], answer: "スプリント", hint: "A fixed time period used in agile development to complete a set of tasks" },
  { id: 3, type: "choice", question: "まだ着手していないタスクの一覧のことを何といいますか？\n＿＿＿を整理しましょう。", choices: ["ガントチャート", "リスク", "マイルストーン", "バックログ"], answer: "バックログ", hint: "A list of tasks or features that have not yet been started" },
  { id: 4, type: "choice", question: "プロジェクトが問題続きで手に負えない状態になることを日本語で何といいますか？\nプロジェクトが＿＿＿しています。", choices: ["炎上", "遅延", "リスク", "ボトルネック"], answer: "炎上", hint: "A uniquely Japanese expression for a project that has gone completely off the rails" },
  { id: 5, type: "choice", question: "プロジェクトの進行を遅らせている原因・詰まっている箇所を何といいますか？", choices: ["リスク", "リソース", "ボトルネック", "バックログ"], answer: "ボトルネック", hint: "The part of a process that slows everything else down" },
  { id: 6, type: "choice", question: "人員・時間・予算など、プロジェクトに必要なものをまとめて何といいますか？\n＿＿＿が不足しています。", choices: ["リスク", "リソース", "ステークホルダー", "スプリント"], answer: "リソース", hint: "People, time, and budget needed to complete a project" },
  { id: 7, type: "choice", question: "他のメンバーのタスクを引き受けることを何といいますか？\nそのタスクを＿＿＿ます。", choices: ["巻き返し", "巻き取り", "引き継ぎ", "引き受け"], answer: "巻き取り", hint: "Taking over a task from someone else — common in Japanese IT teams" },
  { id: 8, type: "choice", question: "プロジェクトの関係者・利害関係者のことを何といいますか？\n＿＿＿に報告します。", choices: ["ファシリテーター", "スクラムマスター", "ステークホルダー", "プロダクトオーナー"], answer: "ステークホルダー", hint: "People who have an interest in or are affected by the project" },
];

export const unit10Roleplay = [
  { key: "A", label: "進捗報告", descJp: "プロジェクトマネージャーに週次の進捗報告をします。マイルストーンの状況・リスク・ステークホルダーへの対応を簡潔に伝えましょう。", desc: "Give a weekly progress report to the project manager. Clearly communicate milestone status, risks, and stakeholder communication plans.", points: ["「マイルストーン〜は予定通り完了しました」が使える", "「リスクとして〜の可能性があります」が言える", "「対応策をまとめた資料を準備します」で締められる"] },
  { key: "B", label: "炎上プロジェクトの対応", descJp: "プロジェクトが炎上しています。ボトルネックを特定し、バックログの整理やリソース調整など具体的な改善策を提案しましょう。", desc: "The project is off the rails. Identify the bottleneck and propose concrete improvements like backlog organization and resource adjustment.", points: ["「ボトルネックは〜です」と特定できる", "「バックログを整理して優先順位を明確にします」が使える", "「納品日には間に合わせます」と意志を伝えられる"] },
  { key: "C", label: "スプリント計画", descJp: "次のスプリントのタスクと目標を計画します。バックログから優先度の高いタスクを選び、リソースとリスクを確認しましょう。", desc: "Plan the tasks and goals for the next sprint. Select high-priority items from the backlog and check resources and risks.", points: ["「スプリントの目標は〜です」と説明できる", "「リスクとして〜の可能性があります」が使える", "「ガントチャートを更新して共有します」が言える"] },
];

// ---- UNIT 11 DATA ----
export const unit11Vocab = [
  { id: 1, jp: "テスト", reading: "てすと", en: "test / testing", example: "テストを実施します。", exampleEn: "We will conduct testing." },
  { id: 2, jp: "単体テスト", reading: "たんたいてすと", en: "unit test", example: "単体テストを書きました。", exampleEn: "I wrote unit tests." },
  { id: 3, jp: "結合テスト", reading: "けつごうてすと", en: "integration test", example: "結合テストを実施中です。", exampleEn: "We are currently conducting integration testing." },
  { id: 4, jp: "受け入れテスト", reading: "うけいれてすと", en: "acceptance test / UAT", example: "受け入れテストをクライアントと行います。", exampleEn: "We will conduct acceptance testing with the client." },
  { id: 5, jp: "テストケース", reading: "てすとけーす", en: "test case", example: "テストケースを作成しました。", exampleEn: "I created the test cases." },
  { id: 6, jp: "テスト仕様書", reading: "てすとしようしょ", en: "test specification document", example: "テスト仕様書を確認してください。", exampleEn: "Please check the test specification document." },
  { id: 7, jp: "品質", reading: "ひんしつ", en: "quality", example: "品質を確保することが重要です。", exampleEn: "Ensuring quality is important." },
  { id: 8, jp: "品質確認", reading: "ひんしつかくにん", en: "quality assurance / QA", example: "品質確認を行います。", exampleEn: "We will conduct quality assurance." },
  { id: 9, jp: "合格", reading: "ごうかく", en: "pass (a test)", example: "全てのテストケースが合格しました。", exampleEn: "All test cases passed." },
  { id: 10, jp: "失敗", reading: "しっぱい", en: "fail (a test)", example: "2件テストが失敗しました。", exampleEn: "2 tests failed." },
  { id: 11, jp: "網羅する", reading: "もうらする", en: "to cover / to be comprehensive", example: "全ての条件を網羅してください。", exampleEn: "Please cover all conditions." },
  { id: 12, jp: "回帰テスト", reading: "かいきてすと", en: "regression test", example: "修正後に回帰テストを行います。", exampleEn: "We will run regression tests after the fix." },
  { id: 13, jp: "デバッグ", reading: "でばっぐ", en: "debug", example: "デバッグ中です。", exampleEn: "I am currently debugging." },
  { id: 14, jp: "リリース判定", reading: "りりーすはんてい", en: "release decision / go/no-go", example: "リリース判定会議を開きます。", exampleEn: "We will hold a release decision meeting." },
  { id: 15, jp: "本番環境", reading: "ほんばんかんきょう", en: "production environment", example: "本番環境にデプロイします。", exampleEn: "We will deploy to the production environment." },
];

export const unit11Conversations = [
  {
    id: 1, title: "テスト結果の報告", sceneEn: "Reporting test results to the team leader after completing testing.",
    lines: [
      { speaker: "Alex", role: "You", jp: "リーダー、テストの結果をご報告します。テストケースは全部で30件実施しました。28件合格、2件失敗です。", en: "Leader, I'd like to report the test results. We ran a total of 30 test cases. 28 passed and 2 failed." },
      { speaker: "リーダー", role: "Lead", jp: "失敗した2件はどんな内容ですか？", en: "What were the 2 failed cases about?" },
      { speaker: "Alex", role: "You", jp: "1件はログアウト後にセッションが残るバグです。もう1件はパスワードリセットのメールが届かない不具合です。現在デバッグ中です。", en: "One is a bug where the session remains after logout. The other is a defect where the password reset email is not delivered. I am currently debugging both." },
      { speaker: "リーダー", role: "Lead", jp: "修正後は回帰テストも必ず行ってください。", en: "After fixing, please make sure to run regression tests as well." },
      { speaker: "Alex", role: "You", jp: "はい、修正後に回帰テストを実施します。全テストケースが合格したらリリース判定をお願いします。", en: "Yes, I will run regression tests after fixing. Once all test cases pass, I'd like to request a release decision." },
    ]
  },
  {
    id: 2, title: "テストケースのレビュー", sceneEn: "Asking a colleague to review your test cases before testing begins.",
    lines: [
      { speaker: "Alex", role: "You", jp: "田中さん、テストケースを作成しました。レビューをお願いできますか？", en: "Tanaka-san, I've created the test cases. Could I ask you to review them?" },
      { speaker: "田中", role: "Colleague", jp: "もちろんです。どのくらいのケースを作りましたか？", en: "Of course. How many cases did you create?" },
      { speaker: "Alex", role: "You", jp: "単体テストが15件、結合テストが10件です。正常系と異常系を網羅するように作成しました。", en: "15 unit test cases and 10 integration test cases. I created them to cover both normal and abnormal patterns." },
      { speaker: "田中", role: "Colleague", jp: "いいですね。テスト仕様書も合わせて確認していいですか？", en: "Sounds good. May I also check the test specification document at the same time?" },
      { speaker: "Alex", role: "You", jp: "はい、合わせて共有します。気になる点があればコメントをお願いします。", en: "Yes, I'll share it together. Please leave comments if anything stands out." },
      { speaker: "田中", role: "Colleague", jp: "わかりました。今日中に確認します。", en: "Got it. I'll review it by end of today." },
    ]
  },
  {
    id: 3, title: "リリース判定会議", sceneEn: "Presenting the test results at a release decision meeting.",
    lines: [
      { speaker: "Alex", role: "You", jp: "では、リリース判定のご報告をします。全30件のテストケースが合格しました。修正後の回帰テストも問題ありませんでした。", en: "Let me present the release decision report. All 30 test cases passed. The regression tests after the fix also showed no issues." },
      { speaker: "PM", role: "PM", jp: "品質確認は完了していますか？", en: "Has quality assurance been completed?" },
      { speaker: "Alex", role: "You", jp: "はい、品質確認も完了しています。本番環境へのデプロイ準備が整っています。", en: "Yes, quality assurance is also complete. We are ready to deploy to the production environment." },
      { speaker: "PM", role: "PM", jp: "リリース後に問題が発生した場合の対応はできていますか？", en: "Are you prepared in case issues occur after release?" },
      { speaker: "Alex", role: "You", jp: "はい、ロールバック手順を準備しています。問題が発生した場合はすぐに対応できます。", en: "Yes, I have prepared rollback procedures. If any issues occur, we can respond immediately." },
      { speaker: "PM", role: "PM", jp: "わかりました。リリースを承認します。", en: "Understood. I approve the release." },
      { speaker: "Alex", role: "You", jp: "ありがとうございます。本日の夜間に本番環境へデプロイします。", en: "Thank you. We will deploy to the production environment tonight." },
    ]
  },
];

export const unit11Quiz = [
  { id: 1, type: "choice", question: "個々の関数やモジュールを単独でテストすることを何といいますか？", choices: ["結合テスト", "回帰テスト", "単体テスト", "受け入れテスト"], answer: "単体テスト", hint: "Testing individual functions or modules in isolation" },
  { id: 2, type: "choice", question: "複数のモジュールを組み合わせて動作を確認するテストを何といいますか？", choices: ["単体テスト", "結合テスト", "回帰テスト", "受け入れテスト"], answer: "結合テスト", hint: "Testing how multiple modules work together" },
  { id: 3, type: "choice", question: "バグ修正後に、修正が他の機能に影響していないか確認するテストを何といいますか？", choices: ["単体テスト", "結合テスト", "受け入れテスト", "回帰テスト"], answer: "回帰テスト", hint: "Checking that a fix hasn't broken anything else" },
  { id: 4, type: "choice", question: "テストケースが全条件をカバーしているかどうかを表す言葉はどれですか？\n全ての条件を＿＿＿してください。", choices: ["確認", "合格", "網羅", "実施"], answer: "網羅", hint: "Ensuring all possible conditions are covered" },
  { id: 5, type: "choice", question: "テストが問題なく通過したことを何といいますか？\nテストが＿＿＿しました。", choices: ["完了", "合格", "成功", "通過"], answer: "合格", hint: "The standard term used when a test case passes" },
  { id: 6, type: "choice", question: "テストが完了し、システムをリリースしてよいかどうかを判断することを何といいますか？", choices: ["進捗報告", "スプリント計画", "リリース判定", "品質確認"], answer: "リリース判定", hint: "The overall process of deciding whether a system is ready to release — not just a meeting" },
  { id: 7, type: "choice", question: "実際にユーザーが使う本番の環境のことを何といいますか？\n＿＿＿にデプロイします。", choices: ["テスト環境", "開発環境", "本番環境", "ステージング環境"], answer: "本番環境", hint: "The live environment where real users interact with the system" },
  { id: 8, type: "choice", question: "リリース後に問題が発生したとき、以前の状態に戻すことを何といいますか？", choices: ["デバッグ", "ロールバック", "リリース判定", "回帰テスト"], answer: "ロールバック", hint: "Reverting to a previous stable version after a failed release" },
];

export const unit11Roleplay = [
  { key: "A", label: "テスト結果の報告", descJp: "テスト完了後にリーダーへ結果を報告します。合格・失敗の件数を伝え、失敗したケースの内容と今後の対応を説明しましょう。", desc: "Report test results to your leader. Share pass/fail counts and explain failed cases and next steps.", points: ["「テストケースは〜件合格、〜件失敗です」が言える", "失敗の内容を具体的に説明できる", "「回帰テストを実施します」が使える"] },
  { key: "B", label: "テストケースのレビュー依頼", descJp: "作成したテストケースを同僚にレビューしてもらいます。テストの種類・件数・網羅範囲を説明しましょう。", desc: "Ask a colleague to review your test cases. Explain the types, number, and coverage of your tests.", points: ["「単体テスト・結合テスト」を使い分けられる", "「正常系と異常系を網羅しました」が言える", "「気になる点があればコメントをお願いします」で締められる"] },
  { key: "C", label: "リリース判定会議", descJp: "リリース判定会議でテスト結果を報告し、本番環境へのデプロイ承認を求めます。品質確認の完了とロールバック準備も伝えましょう。", desc: "Present test results at a release decision meeting and request approval to deploy to production.", points: ["「全テストケースが合格しました」と報告できる", "「品質確認も完了しています」が言える", "「ロールバック手順を準備しています」が使える"] },
];

// ---- UNIT 12 DATA ----
export const unit12Vocab = [
  { id: 1, jp: "報告", reading: "ほうこく", en: "report", example: "進捗を報告します。", exampleEn: "I will report the progress." },
  { id: 2, jp: "連絡", reading: "れんらく", en: "communication / notification", example: "変更があれば連絡します。", exampleEn: "I will notify you if there are any changes." },
  { id: 3, jp: "相談", reading: "そうだん", en: "consultation / asking for advice", example: "困ったことがあれば相談してください。", exampleEn: "Please consult me if you have any problems." },
  { id: 4, jp: "ほうれんそう", reading: "ほうれんそう", en: "reporting, notifying, consulting (ホウレンソウ)", example: "ほうれんそうを徹底しましょう。", exampleEn: "Let's be thorough with reporting, notifying, and consulting." },
  { id: 5, jp: "共有する", reading: "きょうゆうする", en: "to share (information)", example: "情報を共有します。", exampleEn: "I will share the information." },
  { id: 6, jp: "周知する", reading: "しゅうちする", en: "to inform everyone / to circulate", example: "チームに周知します。", exampleEn: "I will inform the whole team." },
  { id: 7, jp: "エスカレーション", reading: "えすかれーしょん", en: "escalation", example: "上司にエスカレーションします。", exampleEn: "I will escalate to my manager." },
  { id: 8, jp: "取り次ぐ", reading: "とりつぐ", en: "to pass on / to transfer (a call or message)", example: "担当者に取り次ぎます。", exampleEn: "I will transfer you to the person in charge." },
  { id: 9, jp: "確認が取れ次第", reading: "かくにんがとれしだい", en: "as soon as I confirm", example: "確認が取れ次第ご連絡します。", exampleEn: "I will contact you as soon as I confirm." },
  { id: 10, jp: "折り返し", reading: "おりかえし", en: "callback / return call", example: "折り返しご連絡します。", exampleEn: "I will call you back." },
  { id: 11, jp: "申し伝える", reading: "もうしつたえる", en: "to pass on a message (humble)", example: "担当者に申し伝えます。", exampleEn: "I will pass the message on to the person in charge." },
  { id: 12, jp: "了承する", reading: "りょうしょうする", en: "to acknowledge / to accept", example: "内容を了承しました。", exampleEn: "I have acknowledged the content." },
  { id: 13, jp: "速やかに", reading: "すみやかに", en: "promptly / quickly", example: "速やかに対応します。", exampleEn: "I will handle it promptly." },
  { id: 14, jp: "齟齬", reading: "そご", en: "discrepancy / miscommunication", example: "齟齬が生じないようにしましょう。", exampleEn: "Let's make sure there are no discrepancies." },
  { id: 15, jp: "認識合わせ", reading: "にんしきあわせ", en: "alignment of understanding", example: "認識合わせをしましょう。", exampleEn: "Let's align our understanding." },
];

export const unit12Conversations = [
  {
    id: 1, title: "上司への報告・連絡", sceneEn: "Proactively reporting a task update and a concern to your manager.",
    lines: [
      { speaker: "Alex", role: "You", jp: "部長、少しよろしいでしょうか。ご報告とご連絡があります。", en: "Manager, do you have a moment? I have a report and a notification for you." },
      { speaker: "部長", role: "Manager", jp: "どうぞ。", en: "Go ahead." },
      { speaker: "Alex", role: "You", jp: "まずご報告ですが、ログイン機能の実装が本日完了しました。予定通りです。次にご連絡ですが、来週のリリーススケジュールに変更が生じる可能性があります。クライアントから追加要望が来ておりまして。", en: "First, my report: the login feature implementation was completed today, as planned. Next, my notification: there may be a change to next week's release schedule. We received an additional request from the client." },
      { speaker: "部長", role: "Manager", jp: "わかりました。追加要望の内容は？", en: "I see. What is the additional request about?" },
      { speaker: "Alex", role: "You", jp: "詳細はまだ確認中です。確認が取れ次第、改めてご報告します。", en: "I'm still confirming the details. I will report back as soon as I have confirmed." },
      { speaker: "部長", role: "Manager", jp: "わかった。速やかに確認してください。", en: "Understood. Please confirm promptly." },
      { speaker: "Alex", role: "You", jp: "はい、承知しました。", en: "Yes, understood." },
    ]
  },
  {
    id: 2, title: "困ったことを相談する", sceneEn: "Consulting your team leader about a problem you're struggling with.",
    lines: [
      { speaker: "Alex", role: "You", jp: "リーダー、少しご相談があるのですが、お時間よろしいでしょうか。", en: "Leader, I have something I'd like to consult you about. Do you have a moment?" },
      { speaker: "リーダー", role: "Lead", jp: "もちろん。どうぞ。", en: "Of course. Go ahead." },
      { speaker: "Alex", role: "You", jp: "APIの結合テストで想定外のエラーが発生していまして、自分では原因が特定できていません。お知恵をお借りできますか？", en: "An unexpected error is occurring during the API integration tests, and I haven't been able to identify the cause myself. Could I borrow your wisdom?" },
      { speaker: "リーダー", role: "Lead", jp: "どんなエラーですか？", en: "What kind of error is it?" },
      { speaker: "Alex", role: "You", jp: "認証トークンが正しく渡されないエラーです。ログを確認しても原因が分からず、このまま進めてよいか判断がつかなかったのでご相談しました。", en: "It's an error where the authentication token is not being passed correctly. I checked the logs but couldn't find the cause, and I wasn't sure whether to proceed, so I came to consult you." },
      { speaker: "リーダー", role: "Lead", jp: "なるほど。一緒に確認しましょう。こういうことはすぐに相談してください。", en: "I see. Let's check it together. Please consult me right away for things like this." },
      { speaker: "Alex", role: "You", jp: "ありがとうございます。以後気をつけます。", en: "Thank you. I'll be more mindful going forward." },
    ]
  },
  {
    id: 3, title: "チームへの周知・情報共有", sceneEn: "Sharing an important update with the team on Slack.",
    lines: [
      { speaker: "Alex→チーム", role: "Slack", jp: "お疲れ様です。チームの皆さんにご連絡があります。\n\n来週月曜日のリリーススケジュールが変更になりました。クライアントからの追加要望対応のため、リリースを1週間延期します。\n\n詳細は添付の更新済みガントチャートをご確認ください。ご不明な点があれば気軽に声をかけてください。\n\nご迷惑をおかけして申し訳ありません。引き続きよろしくお願いします。", en: "Hi team, I have an announcement for everyone.\n\nThe release schedule for next Monday has changed. Due to handling an additional client request, we will postpone the release by one week.\n\nPlease check the attached updated Gantt chart for details. Feel free to reach out if you have any questions.\n\nI apologize for the inconvenience. Thank you for your continued support." },
      { speaker: "田中", role: "Colleague", jp: "了解しました。更新版のガントチャート確認しました。", en: "Got it. I've checked the updated Gantt chart." },
      { speaker: "山本", role: "Colleague", jp: "承知しました。スケジュール調整します。", en: "Understood. I'll adjust my schedule." },
      { speaker: "Alex", role: "You", jp: "ご確認ありがとうございます。認識合わせができて助かります。", en: "Thank you for confirming. It's helpful to have our understanding aligned." },
    ]
  },
];

export const unit12Quiz = [
  { id: 1, type: "choice", question: "日本のビジネス現場で重視される「報告・連絡・相談」をまとめた言葉は何ですか？", choices: ["ビジネスマナー", "ほうれんそう", "コミュニケーション", "チームワーク"], answer: "ほうれんそう", hint: "A Japanese business acronym combining the first characters of 報告・連絡・相談" },
  { id: 2, type: "choice", question: "自分で解決できない問題を上司に引き継いで対応してもらうことを何といいますか？", choices: ["周知", "取り次ぎ", "エスカレーション", "折り返し"], answer: "エスカレーション", hint: "Passing a problem up to a higher level for resolution" },
  { id: 3, type: "choice", question: "情報をチーム全員に知らせることを何といいますか？\nチームに＿＿＿します。", choices: ["報告", "連絡", "相談", "周知"], answer: "周知", hint: "Making sure everyone is informed — not just one person" },
  { id: 4, type: "choice", question: "確認でき次第すぐに連絡するという表現はどれですか？", choices: ["折り返しご連絡します", "速やかにご連絡します", "確認が取れ次第ご連絡します", "後ほどご連絡します"], answer: "確認が取れ次第ご連絡します", hint: "A conditional phrase meaning 'as soon as I've confirmed'" },
  { id: 5, type: "choice", question: "電話で担当者が不在のとき、後でかけ直すことを何といいますか？\n＿＿＿ご連絡します。", choices: ["確認が取れ次第", "速やかに", "折り返し", "改めて"], answer: "折り返し", hint: "A callback — calling someone back after they called you" },
  { id: 6, type: "choice", question: "伝言を相手に伝えることを謙譲語で何といいますか？\n担当者に＿＿＿します。", choices: ["伝えます", "申し伝えます", "お伝えします", "ご連絡します"], answer: "申し伝えます", hint: "The most humble form of passing on a message to a third party" },
  { id: 7, type: "choice", question: "お互いの理解が一致しているか確認・調整することを何といいますか？", choices: ["齟齬", "周知", "認識合わせ", "エスカレーション"], answer: "認識合わせ", hint: "Making sure everyone has the same understanding" },
  { id: 8, type: "choice", question: "コミュニケーション不足などで生じる「食い違い」や「ズレ」のことを何といいますか？", choices: ["連絡漏れ", "齟齬", "認識合わせ", "周知不足"], answer: "齟齬", hint: "A formal word for a discrepancy or mismatch in understanding" },
];

export const unit12Roleplay = [
  { key: "A", label: "上司への報告・連絡", descJp: "上司に対してタスクの完了報告と、スケジュール変更の可能性を連絡します。「報告」と「連絡」を区別しながら、簡潔に伝えましょう。", desc: "Report a completed task and notify your manager of a possible schedule change. Distinguish between 報告 and 連絡.", points: ["「ご報告とご連絡があります」で切り出せる", "「確認が取れ次第ご報告します」が使える", "「速やかに確認します」で締められる"] },
  { key: "B", label: "困ったことを相談する", descJp: "自分では解決できない問題をリーダーに相談します。問題の内容と、なぜ相談が必要かを明確に伝えましょう。「お知恵をお借りできますか？」を使います。", desc: "Consult your leader about a problem you can't solve alone. Clearly explain the issue and why you need help.", points: ["「ご相談があるのですが」と切り出せる", "「お知恵をお借りできますか？」が使える", "「以後気をつけます」で締められる"] },
  { key: "C", label: "チームへの情報共有", descJp: "Slackでチーム全員にスケジュール変更を周知します。変更内容・理由・対応を簡潔にまとめて伝えましょう。「認識合わせ」を意識して締めましょう。", desc: "Announce a schedule change to the whole team on Slack. Summarize the change, reason, and next steps clearly.", points: ["「チームの皆さんにご連絡があります」で始められる", "変更理由と詳細を簡潔に伝えられる", "「認識合わせができて助かります」で締められる"] },
];

// ---- UNIT 13 DATA ----
export const unit13Vocab = [
  { id: 1, jp: "お願いする", reading: "おねがいする", en: "to request / to ask a favor", example: "確認をお願いします。", exampleEn: "Please check this for me." },
  { id: 2, jp: "依頼する", reading: "いらいする", en: "to make a formal request", example: "レビューを依頼しました。", exampleEn: "I made a request for a review." },
  { id: 3, jp: "〜していただけますか", reading: "〜していただけますか", en: "Could you please ~? (polite request)", example: "資料を送っていただけますか。", exampleEn: "Could you please send me the document?" },
  { id: 4, jp: "〜をお願いできますか", reading: "〜をおねがいできますか", en: "Would it be possible to ask you to ~?", example: "明日までにレビューをお願いできますか。", exampleEn: "Would it be possible to ask you to review this by tomorrow?" },
  { id: 5, jp: "ご確認をお願いします", reading: "ごかくにんをおねがいします", en: "Please review / Please check", example: "ご確認をお願いします。", exampleEn: "Please review this." },
  { id: 6, jp: "ご対応をお願いします", reading: "ごたいおうをおねがいします", en: "Please handle / Please take care of this", example: "早急にご対応をお願いします。", exampleEn: "Please handle this urgently." },
  { id: 7, jp: "お手数ですが", reading: "おてすうですが", en: "Sorry to trouble you, but... / I know it's a bother, but...", example: "お手数ですが、修正をお願いします。", exampleEn: "Sorry to trouble you, but could you make the correction?" },
  { id: 8, jp: "よろしければ", reading: "よろしければ", en: "If it's alright with you / If possible", example: "よろしければ、確認していただけますか。", exampleEn: "If it's alright with you, could you check this?" },
  { id: 9, jp: "急ぎで", reading: "いそぎで", en: "urgently / as soon as possible", example: "急ぎで確認をお願いします。", exampleEn: "Please check this urgently." },
  { id: 10, jp: "〜までにお願いします", reading: "〜までにおねがいします", en: "Please do ~ by...", example: "金曜日までにお願いします。", exampleEn: "Please do this by Friday." },
  { id: 11, jp: "お時間をいただけますか", reading: "おじかんをいただけますか", en: "Could you spare some time for me?", example: "少しお時間をいただけますか。", exampleEn: "Could you spare a little time for me?" },
  { id: 12, jp: "ご都合はいかがでしょうか", reading: "ごつごうはいかがでしょうか", en: "How is your availability? / Does that work for you?", example: "来週、ご都合はいかがでしょうか。", exampleEn: "How is your availability next week?" },
  { id: 13, jp: "お力添えをお願いします", reading: "おちからぞえをおねがいします", en: "I would appreciate your support / Please lend me your help", example: "プロジェクトへのお力添えをお願いします。", exampleEn: "I would appreciate your support on the project." },
  { id: 14, jp: "ご協力をお願いします", reading: "ごきょうりょくをおねがいします", en: "Please cooperate / Your cooperation is appreciated", example: "調査へのご協力をお願いします。", exampleEn: "Your cooperation with the survey is appreciated." },
  { id: 15, jp: "承知しました", reading: "しょうちしました", en: "Understood / I'll take care of it", example: "承知しました。すぐに対応します。", exampleEn: "Understood. I'll handle it right away." },
];

export const unit13Conversations = [
  {
    id: 1, title: "同僚へのレビュー依頼", sceneEn: "Asking a colleague to review your pull request on Slack.",
    lines: [
      { speaker: "Alex", role: "You", jp: "田中さん、お疲れ様です。お手数ですが、プルリクエストのレビューをお願いできますか？", en: "Hi Tanaka-san. Sorry to trouble you, but could I ask you to review my pull request?" },
      { speaker: "田中", role: "Colleague", jp: "もちろんです。いつまでに必要ですか？", en: "Of course. By when do you need it?" },
      { speaker: "Alex", role: "You", jp: "急ぎではないのですが、よろしければ明日の午前中までにお願いできますか。", en: "It's not urgent, but if it's alright with you, could you do it by tomorrow morning?" },
      { speaker: "田中", role: "Colleague", jp: "わかりました。明日の午前中に確認します。", en: "Got it. I'll check it tomorrow morning." },
      { speaker: "Alex", role: "You", jp: "ありがとうございます。よろしくお願いします。", en: "Thank you. I appreciate it." },
    ]
  },
  {
    id: 2, title: "上司へのサポート依頼", sceneEn: "Asking your team leader for support because you are stuck on a task.",
    lines: [
      { speaker: "Alex", role: "You", jp: "リーダー、少しお時間をいただけますか。ご相談があります。", en: "Leader, could you spare a little time for me? I have something to discuss." },
      { speaker: "リーダー", role: "Lead", jp: "いいですよ。どうしましたか？", en: "Sure. What's the matter?" },
      { speaker: "Alex", role: "You", jp: "データベースの設計で詰まっているところがあります。お力添えをお願いできますか。", en: "I'm stuck on part of the database design. Could I ask for your support?" },
      { speaker: "リーダー", role: "Lead", jp: "もちろんです。どこで詰まっていますか？", en: "Of course. Where exactly are you stuck?" },
      { speaker: "Alex", role: "You", jp: "テーブルのリレーション設計なんですが、正規化をどこまでするか判断できなくて。ご意見をいただけると助かります。", en: "It's about the table relationship design — I can't decide how far to normalize it. I'd really appreciate your input." },
      { speaker: "リーダー", role: "Lead", jp: "なるほど。一緒に考えましょう。設計書を見せてください。", en: "I see. Let's think it through together. Please show me the design document." },
      { speaker: "Alex", role: "You", jp: "ありがとうございます。お手数をおかけします。", en: "Thank you. Sorry for the trouble." },
    ]
  },
  {
    id: 3, title: "クライアントへの資料依頼", sceneEn: "Emailing a client to request documents needed for the project.",
    lines: [
      { speaker: "Alex", role: "You", jp: "山田様、お世話になっております。Alexでございます。\n\nプロジェクトの要件定義を進めるにあたり、現行システムの仕様書をご提供いただけますでしょうか。", en: "Yamada-san, thank you for your continued support. This is Alex.\n\nIn order to proceed with the project's requirements definition, could you provide us with the specifications document for your current system?" },
      { speaker: "山田", role: "Client", jp: "承知しました。いつまでに必要ですか？", en: "Understood. By when do you need it?" },
      { speaker: "Alex", role: "You", jp: "お手数ですが、今週金曜日までにお願いできますでしょうか。ご都合が難しければ、ご連絡いただけますと幸いです。", en: "Sorry to trouble you, but could we ask for it by this Friday? If that timing is difficult, please let us know." },
      { speaker: "山田", role: "Client", jp: "金曜日ですね。問題ありません。送ります。", en: "By Friday, understood. That's fine. I'll send it." },
      { speaker: "Alex", role: "You", jp: "ありがとうございます。ご協力をお願いします。よろしくお願いいたします。", en: "Thank you very much. We appreciate your cooperation." },
    ]
  },
];

export const unit13Quiz = [
  { id: 1, type: "choice", question: "同僚にレビューを頼むとき、最も自然な表現はどれですか？", choices: ["レビューしてください。", "レビューをお願いできますか。", "レビューしろ。", "レビューはどうですか。"], answer: "レビューをお願いできますか。", hint: "A polite indirect request form often used between colleagues" },
  { id: 2, type: "choice", question: "相手に手間をかけることを申し訳なく思いながら依頼するときの前置きはどれですか？", choices: ["よろしければ", "急ぎで", "お手数ですが", "承知しました"], answer: "お手数ですが", hint: "A phrase that acknowledges you're causing inconvenience before making a request" },
  { id: 3, type: "choice", question: "「もし可能であれば」という意味で依頼を和らげるときに使う表現はどれですか？", choices: ["お手数ですが", "よろしければ", "急ぎで", "ご都合はいかがでしょうか"], answer: "よろしければ", hint: "A softening phrase meaning 'if it's alright with you'" },
  { id: 4, type: "choice", question: "締め切りを伝えながら依頼するとき、＿＿に入る表現はどれですか？\n「金曜日＿＿お願いします。」", choices: ["まで", "までに", "ごろに", "ぐらい"], answer: "までに", hint: "The particle combination used to set a deadline for a request" },
  { id: 5, type: "choice", question: "依頼を受けて「わかりました、やります」と伝える最もフォーマルな表現はどれですか？", choices: ["わかりました", "了解です", "承知しました", "オーケーです"], answer: "承知しました", hint: "The most formal and professional way to confirm you've understood and will comply" },
  { id: 6, type: "choice", question: "上司に声をかけて今すぐ相談したいとき、最も自然な一言はどれですか？", choices: ["少しお時間をいただけますか。", "ご都合はいかがでしょうか。", "いつがよろしいでしょうか。", "お手すきの際にご相談させてください。"], answer: "少しお時間をいただけますか。", hint: "Three of these are used to schedule a future meeting. Which one is the only phrase that asks for time right now, in the moment?" },
  { id: 7, type: "choice", question: "クライアントから仕様書をもらう必要があります。先方に負担をかけることを意識しながら期限を伝えて依頼するとき、最も適切な表現はどれですか？", choices: ["お手数ですが、来週月曜日までにご送付をお願いできますでしょうか。", "来週月曜日までに仕様書をご送付いただきたく存じます。", "よろしければ、来週月曜日までにご送付をお願いできますか。", "来週月曜日までにご送付いただければ幸いです。"], answer: "お手数ですが、来週月曜日までにご送付をお願いできますでしょうか。", hint: "The question specifies being mindful of the burden on the other person. Which opening phrase directly expresses that awareness?" },
  { id: 8, type: "choice", question: "緊急のバグ対応をチームメンバーに依頼するとき、最も適切な表現はどれですか？", choices: ["お手数ですが、急ぎでご対応をお願いできますか。", "よろしければ、急ぎでご対応可能でしょうか。", "ご都合がよければ、早めにご対応をお願いします。", "ご確認のほど、よろしくお願いいたします。"], answer: "お手数ですが、急ぎでご対応をお願いできますか。", hint: "Three of these either soften the urgency too much or lack a clear action request. Which one correctly combines urgency with a polite direct ask?" },
];

export const unit13Roleplay = [
  { key: "A", label: "同僚へのレビュー依頼", descJp: "プルリクエストのレビューを同僚に依頼します。締め切りを伝えながら、丁寧にお願いしましょう。「お手数ですが」「よろしければ」を活用してください。", desc: "Ask a colleague to review your pull request. Politely communicate the deadline using softening phrases.", points: ["「お手数ですが〜お願いできますか」が使える", "締め切りを「〜までに」で伝えられる", "「よろしくお願いします」で締められる"] },
  { key: "B", label: "上司へのサポート依頼", descJp: "タスクで詰まっていることを上司に伝え、サポートを依頼します。問題を具体的に説明し、「お力添え」を求めましょう。", desc: "Tell your leader you're stuck on a task and ask for support. Explain the issue clearly and request their help.", points: ["「お時間をいただけますか」と切り出せる", "「お力添えをお願いできますか」が使える", "「お手数をおかけします」で感謝が伝えられる"] },
  { key: "C", label: "クライアントへの資料依頼", descJp: "クライアントに必要な資料の提供を依頼するメールを送ります。締め切りを丁寧に伝え、柔軟な姿勢も示しましょう。", desc: "Send an email to a client requesting necessary documents. Communicate the deadline politely while showing flexibility.", points: ["「〜をご提供いただけますでしょうか」が使える", "「お手数ですが〜までにお願いできますでしょうか」と伝えられる", "「ご協力をお願いします」で締められる"] },
];

// ---- UNIT 14 DATA ----
export const unit14Vocab = [
  { id: 1, jp: "お断りする", reading: "おことわりする", en: "to decline / to refuse (polite)", example: "今回はお断りさせていただきます。", exampleEn: "I'm afraid I must decline this time." },
  { id: 2, jp: "難しい", reading: "むずかしい", en: "difficult / not possible (indirect refusal)", example: "その日程は難しいです。", exampleEn: "That schedule is difficult (for me)." },
  { id: 3, jp: "対応しかねます", reading: "たいおうしかねます", en: "I'm unable to handle that / that's beyond what I can do", example: "その件については対応しかねます。", exampleEn: "I'm unable to handle that matter." },
  { id: 4, jp: "調整する", reading: "ちょうせいする", en: "to adjust / to coordinate", example: "スケジュールを調整します。", exampleEn: "I will adjust the schedule." },
  { id: 5, jp: "代替案", reading: "だいたいあん", en: "alternative proposal / alternative plan", example: "代替案をご提案します。", exampleEn: "I would like to propose an alternative." },
  { id: 6, jp: "優先順位", reading: "ゆうせんじゅんい", en: "priority / order of priority", example: "優先順位を確認させてください。", exampleEn: "Please let me confirm the priorities." },
  { id: 7, jp: "工数", reading: "こうすう", en: "man-hours / effort required", example: "工数が足りません。", exampleEn: "We don't have enough man-hours." },
  { id: 8, jp: "キャパシティ", reading: "きゃぱしてぃ", en: "capacity / bandwidth", example: "現在キャパシティがいっぱいです。", exampleEn: "My capacity is currently full." },
  { id: 9, jp: "持ち帰る", reading: "もちかえる", en: "to take back / to check internally before answering", example: "一度持ち帰って確認します。", exampleEn: "I'll take this back and check internally." },
  { id: 10, jp: "検討する", reading: "けんとうする", en: "to consider / to look into", example: "上司に相談して検討します。", exampleEn: "I will consult my manager and consider it." },
  { id: 11, jp: "折り合いをつける", reading: "おりあいをつける", en: "to reach a compromise / to find a middle ground", example: "双方で折り合いをつけましょう。", exampleEn: "Let's find a middle ground together." },
  { id: 12, jp: "ご容赦ください", reading: "ごようしゃください", en: "please forgive us / please understand", example: "ご容赦いただけますと幸いです。", exampleEn: "We would appreciate your understanding." },
  { id: 13, jp: "スコープ外", reading: "すこーぷがい", en: "out of scope", example: "その機能は今回のスコープ外です。", exampleEn: "That feature is out of scope for this time." },
  { id: 14, jp: "仕切り直す", reading: "しきりなおす", en: "to start over / to reset and try again", example: "一度仕切り直しましょう。", exampleEn: "Let's reset and start over." },
  { id: 15, jp: "前向きに検討する", reading: "まえむきにけんとうする", en: "to consider positively / to look into it favorably", example: "前向きに検討いたします。", exampleEn: "We will look into it favorably." },
];

export const unit14Conversations = [
  {
    id: 1, title: "追加依頼を断る", sceneEn: "A colleague asks you to take on an extra task, but your plate is already full.",
    lines: [
      { speaker: "田中", role: "Colleague", jp: "Alexさん、急で申し訳ないんですが、このタスクも担当してもらえますか？", en: "Alex-san, sorry for the short notice, but could you also take on this task?" },
      { speaker: "Alex", role: "You", jp: "ありがとうございます。ただ、現在キャパシティがいっぱいで、今週中の対応は難しい状況です。", en: "Thank you for thinking of me. However, my capacity is currently full, and it would be difficult to handle it within this week." },
      { speaker: "田中", role: "Colleague", jp: "そうですか。来週以降なら大丈夫ですか？", en: "I see. Would next week or later be okay?" },
      { speaker: "Alex", role: "You", jp: "来週でしたら対応できます。優先順位を確認させてください。どのタスクを先にすべきでしょうか？", en: "I can handle it next week. Could I confirm the priority? Which task should I do first?" },
      { speaker: "田中", role: "Colleague", jp: "では、今のタスクを優先してください。こちらは来週お願いします。", en: "In that case, please prioritize your current task. I'll ask you about this one next week." },
      { speaker: "Alex", role: "You", jp: "承知しました。来週対応いたします。", en: "Understood. I'll handle it next week." },
    ]
  },
  {
    id: 2, title: "クライアントの要望をスコープ外として断る", sceneEn: "A client requests an additional feature mid-project. You need to decline and propose an alternative.",
    lines: [
      { speaker: "山田", role: "Client", jp: "Alexさん、追加で検索機能もつけてもらえませんか？", en: "Alex-san, could you also add a search feature?" },
      { speaker: "Alex", role: "You", jp: "ご要望ありがとうございます。ただ、検索機能は今回のスコープ外となっております。現在の工数では対応しかねる状況です。", en: "Thank you for the request. However, the search feature is out of scope for this project. Given our current man-hours, I'm afraid we're unable to accommodate it." },
      { speaker: "山田", role: "Client", jp: "そうですか。何とかなりませんか？", en: "I see. Is there any way to make it work?" },
      { speaker: "Alex", role: "You", jp: "一度持ち帰って上司に相談し、検討させてください。代替案として、次フェーズに含める形でご提案できるかもしれません。", en: "Let me take this back and consult with my manager. As an alternative, we may be able to propose including it in the next phase." },
      { speaker: "山田", role: "Client", jp: "わかりました。ご検討よろしくお願いします。", en: "Understood. Thank you for looking into it." },
      { speaker: "Alex", role: "You", jp: "ご要望に沿えず申し訳ありません。前向きに検討いたしますので、ご容赦いただけますと幸いです。", en: "I'm sorry we can't accommodate your request as-is. We will look into it favorably, and we appreciate your understanding." },
    ]
  },
  {
    id: 3, title: "会議のスケジュール調整", sceneEn: "You need to reschedule a meeting because of a conflict.",
    lines: [
      { speaker: "Alex", role: "You", jp: "田中さん、来週火曜日の打ち合わせの件ですが、別の予定と重なってしまいました。日程を調整していただくことは可能でしょうか。", en: "Tanaka-san, regarding the meeting next Tuesday — I have a conflicting appointment. Would it be possible to reschedule?" },
      { speaker: "田中", role: "Colleague", jp: "わかりました。いつが大丈夫ですか？", en: "I see. When would work for you?" },
      { speaker: "Alex", role: "You", jp: "水曜日か木曜日の午後でしたら対応可能です。ご都合はいかがでしょうか。", en: "Wednesday or Thursday afternoon would work for me. How is your availability?" },
      { speaker: "田中", role: "Colleague", jp: "木曜日の14時はいかがですか？", en: "How about Thursday at 2pm?" },
      { speaker: "Alex", role: "You", jp: "木曜日の14時、問題ありません。ありがとうございます。急な変更をお願いしてしまい、大変失礼しました。", en: "Thursday at 2pm works perfectly. Thank you. I sincerely apologize for the sudden change." },
      { speaker: "田中", role: "Colleague", jp: "いえいえ、大丈夫です。では木曜日に。", en: "Not at all, it's fine. See you Thursday then." },
    ]
  },
];

export const unit14Quiz = [
  { id: 1, type: "choice", question: "「その日程は無理です」をビジネスで使う間接的な断り方にするとどうなりますか？", choices: ["その日程はできません。", "その日程は難しい状況です。", "その日程はNGです。", "その日程は無理です。"], answer: "その日程は難しい状況です。", hint: "Japanese business culture prefers indirect refusals. Which phrase softens 'impossible' into something more professional?" },
  { id: 2, type: "choice", question: "相手の要望に応えられないことを丁寧に伝えるとき、最も適切な表現はどれですか？\n「その件については＿＿＿。」", choices: ["できません", "無理です", "対応しかねます", "やりません"], answer: "対応しかねます", hint: "This humble-form expression is the standard polite way to say you're unable to do something in business Japanese" },
  { id: 3, type: "choice", question: "すぐに返答できないとき、社内で確認してから回答すると伝える表現はどれですか？", choices: ["後で連絡します。", "一度持ち帰って確認します。", "今はわかりません。", "上司に聞いてみます。"], answer: "一度持ち帰って確認します。", hint: "A set phrase used in meetings or client situations when you need to check internally before committing to an answer" },
  { id: 4, type: "choice", question: "クライアントの追加要望が契約範囲に含まれていないと伝えるとき、何と言いますか？", choices: ["それは契約に入っていません。", "その機能は今回のスコープ外です。", "それはできません。", "追加料金が必要です。"], answer: "その機能は今回のスコープ外です。", hint: "A project management term used to professionally explain that something falls outside the agreed boundaries" },
  { id: 5, type: "choice", question: "断った後に別の解決策を提示するとき、使う表現はどれですか？", choices: ["でも、こうすればできます。", "代替案をご提案します。", "別の方法があります。", "これならどうですか。"], answer: "代替案をご提案します。", hint: "The formal business term for offering an alternative option after declining the original request" },
  { id: 6, type: "choice", question: "「今は対応できないが、将来的には検討したい」とクライアントに伝えるとき、最も適切な表現はどれですか？", choices: ["今は無理ですが、また考えます。", "今回は対応しかねますが、前向きに検討いたします。", "次回以降に対応します。", "スコープ外ですが、次のフェーズで対応します。"], answer: "今回は対応しかねますが、前向きに検討いたします。", hint: "This combination politely closes the door now while leaving it open for the future — a key skill in client communication" },
  { id: 7, type: "choice", question: "会議の日程を変更してほしいとお願いするとき、最も丁寧な表現はどれですか？", choices: ["日程を変えてください。", "日程を変更していただけますか。", "日程を調整していただくことは可能でしょうか。", "日程の変更をお願いします。"], answer: "日程を調整していただくことは可能でしょうか。", hint: "When making a request that inconveniences someone, adding 'is it possible?' makes it sound less demanding" },
  { id: 8, type: "choice", question: "自分のミスで迷惑をかけたことへの謝罪と理解を求めるとき、最もフォーマルな表現はどれですか？", choices: ["すみませんでした。許してください。", "申し訳ありません。ご容赦いただけますと幸いです。", "ご迷惑をおかけしました。よろしくお願いします。", "失礼しました。ご理解をお願いします。"], answer: "申し訳ありません。ご容赦いただけますと幸いです。", hint: "「ご容赦いただけますと幸いです」is a formal set phrase for asking forgiveness — more polished than simply saying 'please understand'" },
];

export const unit14Roleplay = [
  { key: "A", label: "追加依頼を断る", descJp: "同僚から急な追加タスクを依頼されます。現在のキャパシティを理由に断りつつ、代替案（来週対応・優先順位の確認）を提示しましょう。", desc: "A colleague asks you to take on an extra task. Decline due to your current workload, and offer an alternative such as handling it next week.", points: ["「キャパシティがいっぱいで難しい状況です」が言える", "「優先順位を確認させてください」が使える", "代替案を提示して前向きに締められる"] },
  { key: "B", label: "クライアントの要望を断る", descJp: "クライアントからスコープ外の追加機能を求められます。丁寧に断り、持ち帰って検討する姿勢を示しながら、次フェーズへの代替案を提案しましょう。", desc: "A client requests an out-of-scope feature. Decline politely, offer to check internally, and propose an alternative for the next phase.", points: ["「スコープ外で対応しかねます」が言える", "「一度持ち帰って検討します」が使える", "「前向きに検討いたします」で前向きに締められる"] },
  { key: "C", label: "会議のスケジュール調整", descJp: "予定が重なり、会議の日程変更をお願いします。丁寧に状況を説明し、代わりの日程を複数提案して相手の都合を確認しましょう。", desc: "You have a scheduling conflict and need to reschedule a meeting. Explain the situation politely and propose alternative times.", points: ["「日程を調整していただくことは可能でしょうか」が言える", "代替日程を「〜か〜でしたら対応可能です」で提示できる", "「急な変更をお願いして失礼しました」と締められる"] },
];

// ---- UNIT 15 DATA ----
export const unit15Vocab = [
  { id: 1, jp: "フィードバック", reading: "ふぃーどばっく", en: "feedback", example: "フィードバックをありがとうございます。", exampleEn: "Thank you for the feedback." },
  { id: 2, jp: "ご指摘", reading: "ごしてき", en: "your point / your correction (respectful)", example: "ご指摘ありがとうございます。", exampleEn: "Thank you for pointing that out." },
  { id: 3, jp: "改善する", reading: "かいぜんする", en: "to improve / to make better", example: "次回までに改善します。", exampleEn: "I will improve it by next time." },
  { id: 4, jp: "修正する", reading: "しゅうせいする", en: "to correct / to revise", example: "ご指摘の箇所を修正しました。", exampleEn: "I have corrected the part you pointed out." },
  { id: 5, jp: "認識不足", reading: "にんしきぶそく", en: "lack of understanding / insufficient awareness", example: "私の認識不足でした。", exampleEn: "It was due to my lack of understanding." },
  { id: 6, jp: "勉強になりました", reading: "べんきょうになりました", en: "I learned a lot / that was very informative", example: "大変勉強になりました。", exampleEn: "I learned a great deal from that." },
  { id: 7, jp: "おっしゃる通りです", reading: "おっしゃるとおりです", en: "You are absolutely right", example: "おっしゃる通りです。すぐに対応します。", exampleEn: "You are absolutely right. I will address it immediately." },
  { id: 8, jp: "今後気をつけます", reading: "こんごきをつけます", en: "I will be more careful going forward", example: "ご指摘ありがとうございます。今後気をつけます。", exampleEn: "Thank you for pointing that out. I will be more careful going forward." },
  { id: 9, jp: "率直に言うと", reading: "そっちょくにいうと", en: "to be frank / to put it directly", example: "率直に言うと、もう少し改善が必要です。", exampleEn: "To be frank, it needs a bit more improvement." },
  { id: 10, jp: "気になった点", reading: "きになったてん", en: "points that caught my attention / concerns", example: "気になった点をいくつかお伝えします。", exampleEn: "Let me share a few points that caught my attention." },
  { id: 11, jp: "良かった点", reading: "よかったてん", en: "things that were good / strengths", example: "まず良かった点からお伝えします。", exampleEn: "Let me start with the things that were good." },
  { id: 12, jp: "改善の余地がある", reading: "かいぜんのよちがある", en: "there is room for improvement", example: "この部分にはまだ改善の余地があります。", exampleEn: "There is still room for improvement in this part." },
  { id: 13, jp: "具体的には", reading: "ぐたいてきには", en: "specifically / more concretely", example: "具体的には、この図が分かりにくいです。", exampleEn: "Specifically, this diagram is hard to understand." },
  { id: 14, jp: "参考にします", reading: "さんこうにします", en: "I will take that as a reference / I will keep that in mind", example: "ご意見、参考にします。", exampleEn: "I will keep your opinion in mind." },
  { id: 15, jp: "前向きに受け止める", reading: "まえむきにうけとめる", en: "to take something positively / to accept constructively", example: "フィードバックを前向きに受け止めます。", exampleEn: "I will take the feedback constructively." },
];

export const unit15Conversations = [
  {
    id: 1, title: "コードレビューのフィードバックを受ける", sceneEn: "Your team leader gives feedback on your code. You receive it professionally and ask for clarification.",
    lines: [
      { speaker: "リーダー", role: "Lead", jp: "Alexさん、コードレビューの結果をお伝えします。全体的には良くできていましたが、気になった点がいくつかあります。", en: "Alex-san, let me share the code review results. Overall it was well done, but there are a few points that caught my attention." },
      { speaker: "Alex", role: "You", jp: "ありがとうございます。ぜひお聞かせください。", en: "Thank you. Please go ahead." },
      { speaker: "リーダー", role: "Lead", jp: "まず、エラーハンドリングが不足している箇所があります。具体的には、APIの呼び出し部分です。", en: "First, there are some areas where error handling is insufficient. Specifically, the API call section." },
      { speaker: "Alex", role: "You", jp: "おっしゃる通りです。認識不足でした。すぐに修正します。", en: "You are absolutely right. It was due to my lack of understanding. I will fix it right away." },
      { speaker: "リーダー", role: "Lead", jp: "あと、変数名がもう少し分かりやすいと良いですね。", en: "Also, the variable names could be a bit clearer." },
      { speaker: "Alex", role: "You", jp: "ご指摘ありがとうございます。具体的にはどの変数でしょうか？", en: "Thank you for pointing that out. Which variables specifically?" },
      { speaker: "リーダー", role: "Lead", jp: "この`data1`や`tmp`のような名前です。処理の内容が分かる名前にしましょう。", en: "Names like `data1` and `tmp`. Let's use names that reflect what they actually contain." },
      { speaker: "Alex", role: "You", jp: "承知しました。大変勉強になりました。修正して再度確認をお願いします。", en: "Understood. I learned a great deal. I will make the revisions and ask for your review again." },
    ]
  },
  {
    id: 2, title: "後輩にフィードバックを与える", sceneEn: "You are reviewing a junior colleague's document and giving constructive feedback.",
    lines: [
      { speaker: "Alex", role: "You", jp: "田中さん、資料を確認しました。全体の構成はとても分かりやすかったです。良かった点からお伝えしますね。", en: "Tanaka-san, I reviewed your document. The overall structure was very clear. Let me start with the things that were good." },
      { speaker: "田中", role: "Colleague", jp: "ありがとうございます。", en: "Thank you." },
      { speaker: "Alex", role: "You", jp: "図を使った説明が特に効果的でした。ただ、気になった点もいくつかあります。率直に言うと、数字の根拠が不足している部分があります。", en: "The explanations using diagrams were especially effective. However, there are a few points that caught my attention. To be frank, there are some parts where the data sources aren't clear enough." },
      { speaker: "田中", role: "Colleague", jp: "具体的にはどの部分でしょうか？", en: "Which parts specifically?" },
      { speaker: "Alex", role: "You", jp: "3ページ目のコスト比較の箇所です。改善の余地があると思います。出典を追加してもらえますか？", en: "The cost comparison on page 3. I think there is room for improvement there. Could you add the sources?" },
      { speaker: "田中", role: "Colleague", jp: "わかりました。修正します。", en: "Understood. I'll make the corrections." },
      { speaker: "Alex", role: "You", jp: "全体的には良い資料です。修正後にまた見せてください。", en: "Overall it's a good document. Please show me again after you've made the revisions." },
    ]
  },
  {
    id: 3, title: "上司からの厳しいフィードバックを受ける", sceneEn: "Your manager gives you critical feedback about a presentation. You accept it professionally and show commitment to improvement.",
    lines: [
      { speaker: "部長", role: "Manager", jp: "Alexさん、今日のプレゼンについてフィードバックがあります。率直に言うと、もう少し準備が必要だったと感じました。", en: "Alex-san, I have feedback about today's presentation. To be frank, I felt a bit more preparation was needed." },
      { speaker: "Alex", role: "You", jp: "ご指摘ありがとうございます。具体的にはどの点でしょうか？", en: "Thank you for the feedback. Which points specifically?" },
      { speaker: "部長", role: "Manager", jp: "質問への回答が曖昧でした。数字の裏付けも不足していました。", en: "Your answers to questions were vague. The data to back up your numbers was also insufficient." },
      { speaker: "Alex", role: "You", jp: "おっしゃる通りです。準備が不十分でした。大変申し訳ありません。", en: "You are absolutely right. My preparation was insufficient. I sincerely apologize." },
      { speaker: "部長", role: "Manager", jp: "次回はしっかり準備してください。", en: "Please prepare thoroughly for next time." },
      { speaker: "Alex", role: "You", jp: "はい、フィードバックを前向きに受け止めます。具体的には、想定質問を事前に準備し、データの裏付けを強化します。今後気をつけます。", en: "Yes, I will take this feedback constructively. Specifically, I will prepare anticipated questions in advance and strengthen the data backing. I will be more careful going forward." },
      { speaker: "部長", role: "Manager", jp: "期待しています。", en: "I'm counting on you." },
    ]
  },
];

export const unit15Quiz = [
  { id: 1, type: "choice", question: "上司に間違いを指摘されたとき、最も適切な第一声はどれですか？", choices: ["すみません。", "ご指摘ありがとうございます。", "わかりました。", "そうですね。"], answer: "ご指摘ありがとうございます。", hint: "In Japanese business culture, the standard professional response to being corrected is to first thank the person for the feedback" },
  { id: 2, type: "choice", question: "相手の意見が正しいと認めるとき、最もフォーマルな表現はどれですか？", choices: ["そうですね。", "確かにそうです。", "おっしゃる通りです。", "なるほどです。"], answer: "おっしゃる通りです。", hint: "This expression uses the honorific form of 言う and is the most respectful way to agree with someone senior" },
  { id: 3, type: "choice", question: "フィードバックを受けて自分の理解が足りなかったと認めるとき、何と言いますか？", choices: ["知りませんでした。", "私の認識不足でした。", "勉強不足でした。", "わかっていませんでした。"], answer: "私の認識不足でした。", hint: "A formal, professional way to acknowledge that you lacked sufficient understanding — more polished than simply saying you didn't know" },
  { id: 4, type: "choice", question: "後輩の資料にフィードバックをするとき、どの順番で伝えるのが最も効果的ですか？", choices: ["改善点だけを伝える", "良かった点から伝え、その後改善点を伝える", "改善点を先に伝え、最後に良かった点を伝える", "改善点を伝えた後、励ます"], answer: "良かった点から伝え、その後改善点を伝える", hint: "Starting with positives before moving to areas for improvement is the standard approach for constructive feedback in Japanese workplaces" },
  { id: 5, type: "choice", question: "フィードバックで改善すべき点を具体的に説明するとき、最も自然な導入はどれですか？", choices: ["例えば、", "具体的には、", "つまり、", "要するに、"], answer: "具体的には、", hint: "This phrase signals that you are about to give a specific example or detail — essential when giving actionable feedback" },
  { id: 6, type: "choice", question: "「まだ完璧ではないが、良くなる可能性がある」と伝えるとき、最も適切な表現はどれですか？", choices: ["まだ足りません。", "もっと頑張ってください。", "改善の余地があります。", "よくないですね。"], answer: "改善の余地があります。", hint: "This phrase frames criticism positively — it acknowledges potential rather than simply pointing out a flaw" },
  { id: 7, type: "choice", question: "厳しいフィードバックを受けた後、今後の改善を約束するとき、最も自然な表現はどれですか？", choices: ["次は頑張ります。", "肝に銘じます。", "今後気をつけます。", "もうしません。"], answer: "今後気をつけます。", hint: "The 今後 (going forward) makes this more professional and forward-looking. 肝に銘じます is a strong expression but sounds overly dramatic for everyday feedback" },
  { id: 8, type: "choice", question: "フィードバックをポジティブに捉えて成長につなげる姿勢を示すとき、何と言いますか？", choices: ["参考にします。", "フィードバックを前向きに受け止めます。", "勉強になりました。", "ありがとうございます。"], answer: "フィードバックを前向きに受け止めます。", hint: "This phrase explicitly communicates a constructive mindset — it tells the other person you're taking their feedback seriously and positively" },
];

export const unit15Roleplay = [
  { key: "A", label: "コードレビューのフィードバックを受ける", descJp: "リーダーからコードレビューの結果を受けます。感謝を伝え、指摘を認め、不明な点は具体的に質問しましょう。", desc: "Receive code review feedback from your leader. Express gratitude, acknowledge the points raised, and ask for clarification where needed.", points: ["「ご指摘ありがとうございます」で受け止められる", "「おっしゃる通りです。認識不足でした」が使える", "「具体的にはどの部分でしょうか」と質問できる"] },
  { key: "B", label: "後輩にフィードバックを与える", descJp: "後輩の資料をレビューし、フィードバックを伝えます。良かった点から始め、改善点は「具体的には」を使って明確に伝えましょう。", desc: "Review a junior colleague's document and give feedback. Start with positives, then give specific, actionable suggestions for improvement.", points: ["「良かった点からお伝えします」と切り出せる", "「率直に言うと〜改善の余地があります」が使える", "「具体的には」で改善点を明確に伝えられる"] },
  { key: "C", label: "厳しいフィードバックを受ける", descJp: "上司から厳しいフィードバックを受けます。防御的にならず、指摘を認め、具体的な改善策を述べて前向きな姿勢を示しましょう。", desc: "Receive critical feedback from your manager. Avoid being defensive — acknowledge the points, and show commitment with specific improvement actions.", points: ["「おっしゃる通りです」と素直に認められる", "「フィードバックを前向きに受け止めます」が使える", "具体的な改善策を述べて「今後気をつけます」で締められる"] },
];

// ---- UNIT 16 DATA ----
export const unit16Vocab = [
  { id: 1, jp: "お疲れ様です", reading: "おつかれさまです", en: "Good work / Hello (workplace greeting)", example: "お疲れ様です。今日もよろしくお願いします。", exampleEn: "Good work today. Looking forward to working with you." },
  { id: 2, jp: "よろしくお願いします", reading: "よろしくおねがいします", en: "Pleased to meet you / I'm counting on you", example: "今後ともよろしくお願いします。", exampleEn: "I look forward to working with you going forward." },
  { id: 3, jp: "雑談", reading: "ざっだん", en: "small talk / casual conversation", example: "昼休みに雑談しました。", exampleEn: "We had some small talk during lunch." },
  { id: 4, jp: "忘年会", reading: "ぼうねんかい", en: "year-end party", example: "忘年会の幹事になりました。", exampleEn: "I became the organizer of the year-end party." },
  { id: 5, jp: "歓迎会", reading: "かんげいかい", en: "welcome party", example: "新入社員の歓迎会を開きます。", exampleEn: "We will hold a welcome party for the new employee." },
  { id: 6, jp: "送別会", reading: "そうべつかい", en: "farewell party", example: "田中さんの送別会を企画しています。", exampleEn: "We are planning a farewell party for Tanaka-san." },
  { id: 7, jp: "幹事", reading: "かんじ", en: "organizer / coordinator (of a party)", example: "今回の飲み会の幹事は私です。", exampleEn: "I am the organizer of this gathering." },
  { id: 8, jp: "出欠", reading: "しゅっけつ", en: "attendance / RSVP", example: "出欠を確認してください。", exampleEn: "Please confirm your attendance." },
  { id: 9, jp: "お世話になっております", reading: "おせわになっております", en: "Thank you for your continued support (standard business greeting)", example: "いつもお世話になっております。", exampleEn: "Thank you for your continued support." },
  { id: 10, jp: "ご苦労様です", reading: "ごくろうさまです", en: "Good work (said to subordinates only)", example: "ご苦労様です。ゆっくり休んでください。", exampleEn: "Good work. Please get some rest." },
  { id: 11, jp: "お先に失礼します", reading: "おさきにしつれいします", en: "Excuse me for leaving first", example: "お先に失礼します。お疲れ様でした。", exampleEn: "Excuse me for leaving first. Good work today." },
  { id: 12, jp: "飲み会", reading: "のみかい", en: "drinking party / after-work drinks", example: "今夜飲み会があります。", exampleEn: "There is a drinking party tonight." },
  { id: 13, jp: "幹事を務める", reading: "かんじをつとめる", en: "to serve as organizer", example: "今回は私が幹事を務めます。", exampleEn: "I will serve as the organizer this time." },
  { id: 14, jp: "お互い様", reading: "おたがいさま", en: "we're in the same boat / it goes both ways", example: "助けてもらってありがとうございました。お互い様ですよ。", exampleEn: "Thank you so much for helping me. We're in the same boat." },
  { id: 15, jp: "近況", reading: "きんきょう", en: "recent news / how things have been lately", example: "近況を教えてください。", exampleEn: "Please tell me how things have been lately." },
];

export const unit16Conversations = [
  {
    id: 1, title: "職場での朝の雑談", sceneEn: "Monday morning small talk with a colleague before the workday starts.",
    lines: [
      { speaker: "田中", role: "Colleague", jp: "お疲れ様です。週末はどうでしたか？", en: "Morning! How was your weekend?" },
      { speaker: "Alex", role: "You", jp: "お疲れ様です。友人と近くの公園に行ってきました。天気も良くて気持ちよかったです。田中さんは？", en: "Morning! I went to a nearby park with a friend. The weather was nice, it was great. How about you, Tanaka-san?" },
      { speaker: "田中", role: "Colleague", jp: "私は家でゆっくりしていました。最近仕事が忙しかったので。", en: "I relaxed at home. Work has been busy lately." },
      { speaker: "Alex", role: "You", jp: "それは大事ですね。ゆっくり休めましたか？", en: "That's important. Were you able to get some good rest?" },
      { speaker: "田中", role: "Colleague", jp: "おかげさまで。さて、今週もよろしくお願いします。", en: "Thanks to you asking. Well then, looking forward to this week." },
      { speaker: "Alex", role: "You", jp: "こちらこそ、よろしくお願いします。", en: "Likewise, I'm looking forward to it." },
    ]
  },
  {
    id: 2, title: "忘年会の案内", sceneEn: "You are the organizer of the year-end party and announce it to the team on Slack.",
    lines: [
      { speaker: "Alex→チーム", role: "Slack", jp: "お疲れ様です。今年の忘年会についてご案内します。\n\n日時：12月20日（金）19時〜\n場所：新宿の居酒屋「さくら」\n会費：4,000円\n\nお手数ですが、12月10日までに出欠をお知らせください。ご不明な点は気軽に声をかけてください。よろしくお願いします。", en: "Hi team, here is the announcement for this year's year-end party.\n\nDate: Friday, December 20th, from 7pm\nLocation: Izakaya 'Sakura' in Shinjuku\nCost: ¥4,000\n\nSorry for the trouble, but please let me know your attendance by December 10th. Feel free to reach out with any questions. Thank you." },
      { speaker: "田中", role: "Colleague", jp: "幹事ありがとうございます！参加します。", en: "Thanks for organizing! I'll attend." },
      { speaker: "山本", role: "Colleague", jp: "ありがとうございます。参加予定です。", en: "Thank you. I'm planning to attend." },
      { speaker: "Alex", role: "You", jp: "ありがとうございます。当日楽しみましょう！他の方も引き続きよろしくお願いします。", en: "Thank you both. Let's have a great time! I look forward to hearing from the rest of you as well." },
    ]
  },
  {
    id: 3, title: "退社時の挨拶", sceneEn: "Leaving the office while colleagues are still working.",
    lines: [
      { speaker: "Alex", role: "You", jp: "田中さん、お先に失礼します。お疲れ様でした。", en: "Tanaka-san, excuse me for leaving first. Good work today." },
      { speaker: "田中", role: "Colleague", jp: "お疲れ様でした。", en: "Good work today." },
      { speaker: "Alex", role: "You", jp: "ありがとうございます。明日もよろしくお願いします。", en: "Thank you. Looking forward to tomorrow." },
      { speaker: "田中", role: "Colleague", jp: "はい、また明日。ゆっくり休んでください。", en: "Yes, see you tomorrow. Please get some rest." },
      { speaker: "Alex", role: "You", jp: "ありがとうございます。", en: "Thank you." },
    ]
  },
];

export const unit16Quiz = [
  { id: 1, type: "choice", question: "職場で同僚とすれ違ったときの最も一般的な挨拶はどれですか？", choices: ["こんにちは。", "お疲れ様です。", "ご苦労様です。", "よろしくお願いします。"], answer: "お疲れ様です。", hint: "This is the standard all-purpose workplace greeting used between colleagues at any time of day" },
  { id: 2, type: "choice", question: "「ご苦労様です」について正しい説明はどれですか？", choices: ["誰にでも使える丁寧な挨拶", "上司が部下に使う表現", "部下が上司に使う表現", "社外の人に使う表現"], answer: "上司が部下に使う表現", hint: "This greeting has a hierarchical nuance — using it to a superior is considered rude in Japanese business culture" },
  { id: 3, type: "choice", question: "先に退社するとき、残っている同僚に使う最もビジネスらしい表現はどれですか？", choices: ["さようなら。", "また明日。", "お先に失礼します。", "お疲れ様でした。"], answer: "お先に失礼します。", hint: "A set phrase used when leaving before others — it acknowledges that you're departing while they continue working" },
  { id: 4, type: "choice", question: "飲み会や社内イベントの企画・進行をまとめる担当者のことを何といいますか？", choices: ["リーダー", "幹事", "司会", "担当者"], answer: "幹事", hint: "This role involves coordinating logistics like venue booking, collecting RSVPs, and managing payments" },
  { id: 5, type: "choice", question: "社内イベントの案内で参加・不参加を確認することを何といいますか？", choices: ["アンケート", "出欠", "確認", "調査"], answer: "出欠", hint: "A compound word combining 出席 (attendance) and 欠席 (absence) — used for RSVPs in Japanese workplaces" },
  { id: 6, type: "choice", question: "新しく入社した社員を歓迎するために開くパーティーを何といいますか？", choices: ["忘年会", "送別会", "歓迎会", "飲み会"], answer: "歓迎会", hint: "The 歓 character means 'welcome with joy' — this party is specifically for welcoming newcomers" },
  { id: 7, type: "choice", question: "メールや会話の冒頭で、ビジネス上の関係者に使う定番の挨拶はどれですか？", choices: ["お世話になっております。", "お疲れ様です。", "よろしくお願いします。", "はじめまして。"], answer: "お世話になっております。", hint: "This is the standard opening phrase for business emails and calls to external contacts or established business relationships" },
  { id: 8, type: "choice", question: "雑談で相手の最近の様子を聞きたいとき、最も自然な表現はどれですか？", choices: ["最近どうですか？", "近況を教えてください。", "元気ですか？", "何かありましたか？"], answer: "最近どうですか？", hint: "In casual workplace small talk, this is the most natural and commonly used phrase to check in on how someone has been" },
];

export const unit16Roleplay = [
  { key: "A", label: "朝の雑談", descJp: "月曜の朝、同僚と週末の話をします。相手の話に興味を持ちながら、自分の近況も自然に伝えましょう。「お疲れ様です」で始めて「よろしくお願いします」で締めましょう。", desc: "Monday morning small talk with a colleague. Show interest in their weekend and share your own naturally.", points: ["「お疲れ様です」で自然に会話を始められる", "相手の話に「それは大事ですね」などで反応できる", "「今週もよろしくお願いします」で締められる"] },
  { key: "B", label: "社内イベントの案内", descJp: "忘年会や歓迎会の幹事として、チームへの案内文を作ります。日時・場所・会費・出欠締切を明確に伝えましょう。", desc: "As the organizer, write an announcement for a team event. Clearly communicate date, location, cost, and RSVP deadline.", points: ["「幹事」として案内文を丁寧に書ける", "「出欠をお知らせください」が使える", "「ご不明な点は気軽に声をかけてください」で締められる"] },
  { key: "C", label: "退社時の挨拶", descJp: "先に退社するとき、残っている同僚に挨拶します。「お先に失礼します」を使い、明日への言葉で締めましょう。", desc: "Leave the office while colleagues are still working. Use the appropriate farewell and close with a forward-looking remark.", points: ["「お先に失礼します」が自然に使える", "「お疲れ様でした」を適切なタイミングで使える", "「明日もよろしくお願いします」で締められる"] },
];

// ---- UNIT 17 DATA ----
export const unit17Vocab = [
  { id: 1, jp: "ご要望", reading: "ごようぼう", en: "your request / your needs (respectful)", example: "ご要望をお聞かせください。", exampleEn: "Please share your needs with us." },
  { id: 2, jp: "ご提案", reading: "ごていあん", en: "proposal / suggestion (respectful)", example: "新しいご提案があります。", exampleEn: "We have a new proposal for you." },
  { id: 3, jp: "ご確認", reading: "ごかくにん", en: "your confirmation / your review (respectful)", example: "内容のご確認をお願いします。", exampleEn: "Please review the contents." },
  { id: 4, jp: "承ります", reading: "うけたまわります", en: "I will take care of it / certainly (very formal)", example: "ご注文を承ります。", exampleEn: "I will take your order." },
  { id: 5, jp: "かしこまりました", reading: "かしこまりました", en: "Certainly / Understood (very formal, used with clients)", example: "かしこまりました。すぐに対応いたします。", exampleEn: "Certainly. I will take care of it immediately." },
  { id: 6, jp: "〜いたします", reading: "〜いたします", en: "I will ~ (humble form of します)", example: "確認いたします。", exampleEn: "I will confirm." },
  { id: 7, jp: "〜でございます", reading: "〜でございます", en: "It is ~ (very formal form of です)", example: "担当のAlexでございます。", exampleEn: "I am Alex, your contact person." },
  { id: 8, jp: "お伺いする", reading: "おうかがいする", en: "to visit / to ask (humble)", example: "来週お伺いしてもよろしいでしょうか。", exampleEn: "Would it be alright if I visited next week?" },
  { id: 9, jp: "ご不明な点", reading: "ごふめいなてん", en: "any questions / anything unclear", example: "ご不明な点がございましたら、お知らせください。", exampleEn: "Please let us know if you have any questions." },
  { id: 10, jp: "お手数をおかけします", reading: "おてすうをおかけします", en: "Sorry to trouble you / Sorry for the inconvenience", example: "お手数をおかけしますが、よろしくお願いします。", exampleEn: "Sorry to trouble you, but thank you for your cooperation." },
  { id: 11, jp: "ご迷惑をおかけします", reading: "ごめいわくをおかけします", en: "Sorry for the inconvenience / Sorry to cause you trouble", example: "ご迷惑をおかけして申し訳ありません。", exampleEn: "I sincerely apologize for the inconvenience." },
  { id: 12, jp: "引き続き", reading: "ひきつづき", en: "continuing / as before / going forward", example: "引き続きよろしくお願いいたします。", exampleEn: "Thank you for your continued support." },
  { id: 13, jp: "ご検討のほど", reading: "ごけんとうのほど", en: "please consider / we hope you will consider", example: "ご検討のほど、よろしくお願いいたします。", exampleEn: "We hope you will give this your consideration." },
  { id: 14, jp: "取り急ぎ", reading: "とりいそぎ", en: "for the time being / in haste (used in quick emails)", example: "取り急ぎご連絡まで。", exampleEn: "I am writing briefly to let you know." },
  { id: 15, jp: "ご査収ください", reading: "ごさしゅうください", en: "Please find the enclosed document / Please receive this", example: "資料をお送りします。ご査収ください。", exampleEn: "I am sending the document. Please find it enclosed." },
];

export const unit17Conversations = [
  {
    id: 1, title: "クライアントへの初回連絡", sceneEn: "Introducing yourself to a new client via Slack for the first time.",
    lines: [
      { speaker: "Alex", role: "You", jp: "山田様\n\nお世話になっております。このたび担当となりましたAlexでございます。\n\nご連絡が遅くなり、大変失礼いたしました。今後のプロジェクトについて、一度お打ち合わせのお時間をいただけますでしょうか。\n\nご都合の良い日時をお知らせいただければ幸いです。ご不明な点がございましたら、お気軽にご連絡ください。\n\n引き続きよろしくお願いいたします。", en: "Yamada-san,\n\nThank you for your continued support. I am Alex, your newly assigned contact.\n\nI apologize for the late introduction. I would like to request a meeting to discuss the upcoming project.\n\nPlease let us know a date and time that works for you. If you have any questions, please feel free to contact me.\n\nThank you for your continued support." },
      { speaker: "山田", role: "Client", jp: "Alexさん、ご連絡ありがとうございます。来週の火曜日か水曜日の午後はいかがでしょうか。", en: "Alex-san, thank you for reaching out. How about next Tuesday or Wednesday afternoon?" },
      { speaker: "Alex", role: "You", jp: "かしこまりました。では来週火曜日の14時はいかがでしょうか。場所はご指定いただければ、お伺いいたします。", en: "Certainly. How about next Tuesday at 2pm? Please let us know the location and we will come to you." },
      { speaker: "山田", role: "Client", jp: "火曜日の14時で問題ありません。弊社にお越しください。", en: "Tuesday at 2pm works fine. Please come to our office." },
      { speaker: "Alex", role: "You", jp: "ありがとうございます。それでは火曜日にお伺いいたします。どうぞよろしくお願いいたします。", en: "Thank you. We will visit on Tuesday then. We look forward to meeting you." },
    ]
  },
  {
    id: 2, title: "提案書の送付", sceneEn: "Sending a proposal document to a client via Slack.",
    lines: [
      { speaker: "Alex", role: "You", jp: "山田様\n\nお世話になっております。Alexでございます。\n\n先日のお打ち合わせを踏まえ、ご提案書をお送りいたします。ご査収ください。\n\nご要望いただいた検索機能とダッシュボード機能についても盛り込んでおります。ご不明な点やご要望がございましたら、お気軽にお知らせください。\n\nご検討のほど、よろしくお願いいたします。", en: "Yamada-san,\n\nThank you for your continued support. This is Alex.\n\nBased on our recent meeting, I am sending you our proposal. Please find it enclosed.\n\nWe have also included the search function and dashboard feature you requested. Please feel free to let us know if you have any questions or additional requests.\n\nWe hope you will give this your consideration." },
      { speaker: "山田", role: "Client", jp: "ありがとうございます。確認して、来週中にフィードバックをお送りします。", en: "Thank you. I will review it and send you feedback by next week." },
      { speaker: "Alex", role: "You", jp: "ありがとうございます。お手数をおかけしますが、よろしくお願いいたします。ご不明な点がございましたらいつでもご連絡ください。", en: "Thank you. Sorry for the trouble, but we appreciate it. Please don't hesitate to contact us if anything is unclear." },
    ]
  },
  {
    id: 3, title: "クレームへの対応", sceneEn: "A client reports a system issue. You respond professionally and explain the next steps.",
    lines: [
      { speaker: "山田", role: "Client", jp: "Alexさん、システムにエラーが出て、一部の機能が使えない状態です。早急に対応してください。", en: "Alex-san, there is an error in the system and some features are unavailable. Please handle this urgently." },
      { speaker: "Alex", role: "You", jp: "山田様、ご連絡ありがとうございます。ご不便をおかけして大変申し訳ございません。現在状況を確認しております。", en: "Yamada-san, thank you for letting us know. We sincerely apologize for the inconvenience. We are currently investigating the situation." },
      { speaker: "山田", role: "Client", jp: "いつ頃復旧しますか？", en: "When will it be restored?" },
      { speaker: "Alex", role: "You", jp: "現在原因を調査中でございます。1時間以内に状況をご報告いたします。ご迷惑をおかけして誠に申し訳ありません。", en: "We are currently investigating the cause. We will report back within one hour. We sincerely apologize for the inconvenience." },
      { speaker: "山田", role: "Client", jp: "わかりました。報告をお待ちします。", en: "Understood. I'll wait for your update." },
      { speaker: "Alex", role: "You", jp: "かしこまりました。取り急ぎご連絡まで申し上げます。引き続きよろしくお願いいたします。", en: "Certainly. I am writing quickly to keep you informed. Thank you for your continued patience." },
    ]
  },
];

export const unit17Quiz = [
  { id: 1, type: "choice", question: "クライアントに「わかりました、対応します」と伝えるとき、最もフォーマルな表現はどれですか？", choices: ["わかりました。", "かしこまりました。", "了解しました。", "はい、対応します。"], answer: "かしこまりました。", hint: "This is the most formal of all acknowledgment expressions and is reserved primarily for client-facing situations" },
  { id: 2, type: "choice", question: "クライアントへのメールで「します」を最も丁寧にした表現はどれですか？\n「確認＿＿。」", choices: ["します", "いたします", "申し上げます", "ございます"], answer: "いたします", hint: "The humble form of する — standard in client emails to show respect through lowering your own actions" },
  { id: 3, type: "choice", question: "クライアントに「ですよ」をフォーマルにした表現はどれですか？\n「担当のAlexです」→「担当のAlex＿＿。」", choices: ["でございます", "であります", "でいらっしゃいます", "でおります"], answer: "でございます", hint: "The most formal equivalent of です — used in client introductions and formal business contexts" },
  { id: 4, type: "choice", question: "クライアントを訪問する際、「行く」の謙譲語として最も丁寧でフォーマルな表現はどれですか？", choices: ["参ります", "行かせていただきます", "お伺いいたします", "訪問いたします"], answer: "お伺いいたします", hint: "Combining the humble prefix お, the humble verb 伺う, and いたします creates the most formal layered expression for visiting a client" },
  { id: 5, type: "choice", question: "メールで資料を添付して送るとき、受け取ってもらうよう伝える定型表現はどれですか？", choices: ["受け取ってください。", "ご確認ください。", "ご査収ください。", "ご覧ください。"], answer: "ご査収ください。", hint: "A set phrase used specifically when sending documents or files — it asks the recipient to receive and review them" },
  { id: 6, type: "choice", question: "クライアントに迷惑をかけたことを謝罪するとき、最も丁寧な表現はどれですか？", choices: ["すみません。", "申し訳ありません。", "ご迷惑をおかけして申し訳ございません。", "失礼しました。"], answer: "ご迷惑をおかけして申し訳ございません。", hint: "This phrase explicitly acknowledges the inconvenience caused before apologizing — essential in client-facing apologies" },
  { id: 7, type: "choice", question: "急いで短い連絡メールを送るとき、メールの締めとして使う表現はどれですか？", choices: ["以上、よろしくお願いいたします。", "取り急ぎご連絡まで。", "引き続きよろしくお願いいたします。", "何卒よろしくお願いいたします。"], answer: "取り急ぎご連絡まで。", hint: "A set closing phrase for brief, urgent emails — signals that a more detailed follow-up will come later" },
  { id: 8, type: "choice", question: "提案書を送った後、クライアントに検討を依頼するとき、最も自然な締めの表現はどれですか？", choices: ["よく考えてください。", "ご検討のほど、よろしくお願いいたします。", "ご返答をお待ちしております。", "ご連絡をお待ちしております。"], answer: "ご検討のほど、よろしくお願いいたします。", hint: "A polished closing phrase that respectfully asks for consideration without pressuring — standard after sending proposals" },
];

export const unit17Roleplay = [
  { key: "A", label: "クライアントへの初回連絡メール", descJp: "新規担当としてクライアントに自己紹介メールを送ります。丁寧な敬語を使い、打ち合わせの日程調整をお願いしましょう。", desc: "Send an introductory email to a new client as their newly assigned contact. Use formal keigo and request a meeting.", points: ["「担当となりました〜でございます」と自己紹介できる", "「お打ち合わせのお時間をいただけますでしょうか」が使える", "「引き続きよろしくお願いいたします」で締められる"] },
  { key: "B", label: "提案書の送付メール", descJp: "打ち合わせを踏まえた提案書をメールで送ります。「ご査収ください」「ご検討のほど」を使って丁寧に締めましょう。", desc: "Send a proposal document by email following a meeting. Use formal closing phrases to wrap up professionally.", points: ["「先日のお打ち合わせを踏まえ」と文脈を示せる", "「ご査収ください」が使える", "「ご検討のほど、よろしくお願いいたします」で締められる"] },
  { key: "C", label: "クレーム対応", descJp: "クライアントからシステムエラーの連絡が来ます。謝罪し、現状を説明し、対応の見通しを伝えましょう。「かしこまりました」「ご迷惑をおかけして申し訳ございません」を使います。", desc: "Handle a client complaint about a system error. Apologize, explain the situation, and communicate next steps.", points: ["「ご不便をおかけして申し訳ございません」と謝罪できる", "「現在確認しております」と現状を伝えられる", "「取り急ぎご連絡させていただきました」で素早く締められる"] },
];

// ---- UNIT 18 DATA ----
export const unit18Vocab = [
  { id: 1, jp: "障害", reading: "しょうがい", en: "system failure / outage / incident", example: "本番環境で障害が発生しました。", exampleEn: "A system failure has occurred in the production environment." },
  { id: 2, jp: "発生する", reading: "はっせいする", en: "to occur / to break out", example: "エラーが発生しています。", exampleEn: "An error has occurred." },
  { id: 3, jp: "影響範囲", reading: "えいきょうはんい", en: "scope of impact / affected area", example: "影響範囲を確認中です。", exampleEn: "We are currently confirming the scope of impact." },
  { id: 4, jp: "切り分け", reading: "きりわけ", en: "isolation / triage (of a problem)", example: "原因の切り分けを行っています。", exampleEn: "We are performing problem isolation." },
  { id: 5, jp: "復旧", reading: "ふっきゅう", en: "restoration / recovery", example: "復旧作業を進めています。", exampleEn: "We are proceeding with the restoration work." },
  { id: 6, jp: "暫定対応", reading: "ざんていたいおう", en: "temporary fix / workaround", example: "まず暫定対応を実施します。", exampleEn: "We will first implement a temporary fix." },
  { id: 7, jp: "恒久対応", reading: "こうきゅうたいおう", en: "permanent fix / long-term solution", example: "恒久対応は来週実施予定です。", exampleEn: "The permanent fix is scheduled for next week." },
  { id: 8, jp: "ロールバック", reading: "ろーるばっく", en: "rollback", example: "ロールバックを実施しました。", exampleEn: "We have performed a rollback." },
  { id: 9, jp: "エスカレーション", reading: "えすかれーしょん", en: "escalation", example: "上長にエスカレーションします。", exampleEn: "I will escalate to my manager." },
  { id: 10, jp: "一次対応", reading: "いちじたいおう", en: "first response / initial response", example: "一次対応として再起動を試みます。", exampleEn: "As a first response, we will try restarting." },
  { id: 11, jp: "根本原因", reading: "こんぽんげんいん", en: "root cause", example: "根本原因を調査中です。", exampleEn: "We are investigating the root cause." },
  { id: 12, jp: "再発防止策", reading: "さいはつぼうしさく", en: "preventive measures / measures to prevent recurrence", example: "再発防止策を検討します。", exampleEn: "We will consider preventive measures." },
  { id: 13, jp: "障害報告書", reading: "しょうがいほうこくしょ", en: "incident report", example: "障害報告書を作成しました。", exampleEn: "We have created an incident report." },
  { id: 14, jp: "対応中", reading: "たいおうちゅう", en: "currently handling / in progress", example: "現在対応中です。", exampleEn: "We are currently handling this." },
  { id: 15, jp: "復旧見込み", reading: "ふっきゅうみこみ", en: "estimated restoration time / expected recovery", example: "復旧見込みは2時間後です。", exampleEn: "The estimated restoration time is 2 hours." },
];

export const unit18Conversations = [
  {
    id: 1, title: "障害発生の第一報", sceneEn: "You detect a system outage and immediately report it to your team leader.",
    lines: [
      { speaker: "Alex", role: "You", jp: "リーダー、至急ご報告です。本番環境で障害が発生しています。ログイン機能が使用できない状態です。", en: "Leader, urgent report. A system failure has occurred in the production environment. The login function is currently unavailable." },
      { speaker: "リーダー", role: "Lead", jp: "わかった。影響範囲は？", en: "Understood. What is the scope of impact?" },
      { speaker: "Alex", role: "You", jp: "現在確認中ですが、全ユーザーに影響が出ている可能性があります。発生時刻は10時15分頃です。", en: "We are currently confirming, but it is possible that all users are affected. The issue began at around 10:15am." },
      { speaker: "リーダー", role: "Lead", jp: "すぐに原因の切り分けを始めてください。クライアントへの連絡も必要です。", en: "Please start problem isolation immediately. We also need to notify the client." },
      { speaker: "Alex", role: "You", jp: "承知しました。切り分けを開始します。クライアントへは私から連絡します。30分後に状況を報告します。", en: "Understood. I will begin isolation. I will contact the client myself. I will report back in 30 minutes." },
      { speaker: "リーダー", role: "Lead", jp: "頼みます。対応中は随時状況を共有してください。", en: "I'm counting on you. Please keep sharing updates as you work through this." },
    ]
  },
  {
    id: 2, title: "クライアントへの障害連絡", sceneEn: "Contacting the client to report the system failure and explain the response plan.",
    lines: [
      { speaker: "Alex", role: "You", jp: "山田様、お世話になっております。Alexでございます。現在、システムで障害が発生しており、ログイン機能に影響が出ております。ご不便をおかけして誠に申し訳ありません。", en: "Yamada-san, thank you for your continued support. This is Alex. We are currently experiencing a system failure affecting the login function. We sincerely apologize for the inconvenience." },
      { speaker: "山田", role: "Client", jp: "いつ復旧しますか？", en: "When will it be restored?" },
      { speaker: "Alex", role: "You", jp: "現在原因の切り分けを行っております。復旧見込みは1時間後を予定しております。一次対応として、まず暫定対応を実施いたします。", en: "We are currently performing problem isolation. The estimated restoration time is approximately one hour. As our first response, we will implement a temporary fix." },
      { speaker: "山田", role: "Client", jp: "わかりました。状況を随時教えてください。", en: "Understood. Please keep me updated on the situation." },
      { speaker: "Alex", role: "You", jp: "かしこまりました。30分ごとに状況をご報告いたします。復旧次第、速やかにご連絡いたします。", en: "Certainly. We will provide updates every 30 minutes. We will notify you promptly once the system is restored." },
    ]
  },
  {
    id: 3, title: "障害収束後の報告", sceneEn: "Reporting to the team after the incident is resolved and presenting preventive measures.",
    lines: [
      { speaker: "Alex", role: "You", jp: "皆さん、障害が復旧しましたのでご報告します。復旧時刻は12時30分です。影響を受けたユーザーは約500名でした。", en: "Everyone, I'd like to report that the system has been restored. Restoration time was 12:30pm. Approximately 500 users were affected." },
      { speaker: "リーダー", role: "Lead", jp: "根本原因は何でしたか？", en: "What was the root cause?" },
      { speaker: "Alex", role: "You", jp: "デプロイ時の設定ミスが根本原因でした。ロールバックで対応し、現在は正常に動作しています。", en: "A configuration error during deployment was the root cause. We addressed it with a rollback and the system is now operating normally." },
      { speaker: "リーダー", role: "Lead", jp: "再発防止策はどうしますか？", en: "What will you do to prevent recurrence?" },
      { speaker: "Alex", role: "You", jp: "デプロイ前のチェックリストを強化します。また、恒久対応として自動テストを追加する予定です。障害報告書は本日中に提出いたします。", en: "We will strengthen the pre-deployment checklist. As a permanent fix, we plan to add automated testing. I will submit the incident report by end of today." },
      { speaker: "リーダー", role: "Lead", jp: "わかりました。クライアントへの最終報告もお願いします。", en: "Understood. Please also send the final report to the client." },
      { speaker: "Alex", role: "You", jp: "はい、クライアントへの報告と再発防止策の説明も合わせて行います。", en: "Yes, I will also explain the preventive measures to the client at the same time." },
    ]
  },
];

export const unit18Quiz = [
  { id: 1, type: "choice", question: "本番環境でシステムが停止した状態を何といいますか？", choices: ["エラー", "障害", "インシデント", "クラッシュ"], answer: "障害", hint: "This word refers specifically to a serious system failure or outage that disrupts service — more severe than a bug or minor error" },
  { id: 2, type: "choice", question: "障害対応で最初に行う問題の特定・絞り込み作業を何といいますか？", choices: ["調査", "切り分け", "復旧", "報告"], answer: "切り分け", hint: "The process of isolating which component or layer is causing the problem — a key first step in incident response" },
  { id: 3, type: "choice", question: "障害が発生した場合、根本的な原因を何といいますか？", choices: ["発生原因", "根本原因", "直接原因", "主な原因"], answer: "根本原因", hint: "The fundamental underlying cause of a problem — not just the immediate trigger but the deeper reason it happened" },
  { id: 4, type: "choice", question: "問題のあるデプロイを以前の安定バージョンに戻す操作を何といいますか？", choices: ["リセット", "ロールバック", "リストア", "リカバリー"], answer: "ロールバック", hint: "A specific operation in deployment — reverting to a previous version when a new release causes issues" },
  { id: 5, type: "choice", question: "障害が直るまでの間、一時的に問題を回避する対応を何といいますか？", choices: ["恒久対応", "一次対応", "暫定対応", "緊急対応"], answer: "暫定対応", hint: "A temporary fix that stabilizes the situation while a proper solution is developed — the opposite of a permanent fix" },
  { id: 6, type: "choice", question: "クライアントに障害の復旧予定時刻を伝えるとき、何という表現を使いますか？", choices: ["復旧見込みは〜です。", "復旧時刻は〜です。", "復旧完了は〜です。", "復旧まで〜かかります。"], answer: "復旧見込みは〜です。", hint: "「見込み」means estimate or expectation — this phrase is used when the restoration time is not yet certain but projected" },
  { id: 7, type: "choice", question: "同じ障害が再び起きないようにするための対策を何といいますか？", choices: ["障害報告書", "恒久対応", "再発防止策", "根本原因分析"], answer: "再発防止策", hint: "Measures specifically designed to prevent the same incident from happening again — a key deliverable after every incident" },
  { id: 8, type: "choice", question: "障害発生時に自分の対応範囲を超えた場合、上司や上位チームに対応を引き継ぐことを何といいますか？", choices: ["エスカレーション", "報告", "相談", "アサイン"], answer: "エスカレーション", hint: "The formal process of handing off an issue to a higher level when it exceeds your authority or capability to resolve" },
];

export const unit18Roleplay = [
  { key: "A", label: "障害発生の第一報", descJp: "本番環境で障害が発生しました。リーダーに第一報を入れます。発生状況・影響範囲・対応方針を簡潔に伝えましょう。", desc: "A production system failure has occurred. Report it to your leader immediately. Communicate the situation, scope, and response plan concisely.", points: ["「至急ご報告です。障害が発生しています」と切り出せる", "「影響範囲は現在確認中です」が使える", "「30分後に状況を報告します」と対応方針を伝えられる"] },
  { key: "B", label: "クライアントへの障害連絡", descJp: "障害発生をクライアントに連絡します。謝罪し、現状と復旧見込みを伝え、定期的な状況報告を約束しましょう。", desc: "Notify the client of the system failure. Apologize, communicate the current status and recovery estimate, and commit to regular updates.", points: ["「ご不便をおかけして申し訳ありません」と謝罪できる", "「復旧見込みは〜を予定しております」が使える", "「30分ごとに状況をご報告いたします」と約束できる"] },
  { key: "C", label: "障害収束後の報告", descJp: "障害が収束しました。チームに復旧報告をします。根本原因・対応内容・再発防止策をまとめて報告しましょう。", desc: "The incident has been resolved. Report to the team. Summarize the root cause, response taken, and preventive measures.", points: ["「障害が復旧しましたのでご報告します」と切り出せる", "「根本原因は〜でした」と説明できる", "「再発防止策として〜を実施します」が言える"] },
];

// ---- UNIT 19 DATA ----
export const unit19Vocab = [
  { id: 1, jp: "評価面談", reading: "ひょうかめんだん", en: "performance review / evaluation meeting", example: "今月、評価面談があります。", exampleEn: "I have a performance review this month." },
  { id: 2, jp: "目標設定", reading: "もくひょうせってい", en: "goal setting", example: "来期の目標設定をします。", exampleEn: "I will set goals for next term." },
  { id: 3, jp: "振り返り", reading: "ふりかえり", en: "reflection / review (of past performance)", example: "今期の振り返りをしましょう。", exampleEn: "Let's review this term's performance." },
  { id: 4, jp: "達成する", reading: "たっせいする", en: "to achieve / to accomplish", example: "目標を達成しました。", exampleEn: "I achieved my goal." },
  { id: 5, jp: "未達", reading: "みたつ", en: "not achieved / falling short of target", example: "今期は目標が未達でした。", exampleEn: "I fell short of my target this term." },
  { id: 6, jp: "強み", reading: "つよみ", en: "strength / strong point", example: "自分の強みはコミュニケーション力です。", exampleEn: "My strength is communication skills." },
  { id: 7, jp: "課題", reading: "かだい", en: "challenge / area for improvement", example: "技術力の向上が課題です。", exampleEn: "Improving my technical skills is my challenge." },
  { id: 8, jp: "貢献する", reading: "こうけんする", en: "to contribute", example: "チームの成果に貢献できました。", exampleEn: "I was able to contribute to the team's results." },
  { id: 9, jp: "昇進", reading: "しょうしん", en: "promotion", example: "来期の昇進を目指しています。", exampleEn: "I am aiming for a promotion next term." },
  { id: 10, jp: "キャリアパス", reading: "きゃりあぱす", en: "career path", example: "将来のキャリアパスについて相談したいです。", exampleEn: "I would like to discuss my future career path." },
  { id: 11, jp: "自己評価", reading: "じこひょうか", en: "self-evaluation / self-assessment", example: "自己評価シートを提出しました。", exampleEn: "I submitted my self-evaluation sheet." },
  { id: 12, jp: "期待に応える", reading: "きたいにこたえる", en: "to meet expectations / to live up to expectations", example: "来期は期待に応えられるよう頑張ります。", exampleEn: "I will do my best to meet expectations next term." },
  { id: 13, jp: "スキルアップ", reading: "すきるあっぷ", en: "skill improvement / upskilling", example: "来期はスキルアップに注力します。", exampleEn: "I will focus on improving my skills next term." },
  { id: 14, jp: "取り組む", reading: "とりくむ", en: "to work on / to tackle", example: "新しい課題に積極的に取り組みます。", exampleEn: "I will actively tackle new challenges." },
  { id: 15, jp: "成長する", reading: "せいちょうする", en: "to grow / to develop", example: "今期は大きく成長できたと思います。", exampleEn: "I feel I was able to grow significantly this term." },
];

export const unit19Conversations = [
  {
    id: 1, title: "上期の振り返り", sceneEn: "Your manager asks you to reflect on your performance in the first half of the year.",
    lines: [
      { speaker: "部長", role: "Manager", jp: "Alexさん、今期の振り返りをしましょう。自己評価はいかがですか？", en: "Alex-san, let's review your performance this term. How would you assess yourself?" },
      { speaker: "Alex", role: "You", jp: "ありがとうございます。今期は新機能の開発を予定通り完了でき、リリースにも貢献できたと思っています。チームへの貢献という点では、コードレビューも積極的に行いました。", en: "Thank you. This term, I was able to complete the new feature development on schedule and felt I contributed to the release. In terms of contributing to the team, I also actively participated in code reviews." },
      { speaker: "部長", role: "Manager", jp: "よく頑張りましたね。課題はありましたか？", en: "You worked hard. Were there any challenges?" },
      { speaker: "Alex", role: "You", jp: "はい、クライアントとのコミュニケーションが課題でした。技術的な内容を分かりやすく説明するスキルをもっと磨く必要があると感じています。", en: "Yes, communication with clients was a challenge. I feel I need to further develop my skills in explaining technical content in an easy-to-understand way." },
      { speaker: "部長", role: "Manager", jp: "自己分析がしっかりできていますね。来期の目標は何を考えていますか？", en: "You have a strong sense of self-awareness. What goals are you considering for next term?" },
      { speaker: "Alex", role: "You", jp: "来期はクライアント対応のスキルアップに注力したいと思っています。また、チームリーダーとしての経験も積みたいと考えています。", en: "Next term, I would like to focus on improving my client communication skills. I also want to gain experience as a team leader." },
    ]
  },
  {
    id: 2, title: "昇進についての相談", sceneEn: "You want to ask your manager about the possibility of a promotion and what you need to work on.",
    lines: [
      { speaker: "Alex", role: "You", jp: "部長、少しよろしいでしょうか。来期の昇進について相談させていただきたいのですが。", en: "Manager, do you have a moment? I would like to discuss the possibility of a promotion next term." },
      { speaker: "部長", role: "Manager", jp: "もちろんです。どうぞ。", en: "Of course. Go ahead." },
      { speaker: "Alex", role: "You", jp: "来期は上位職へのステップアップを目指したいと考えています。そのために、今何が足りないか、率直にご意見をいただけますか。", en: "I would like to aim for a step up to the next level next term. To that end, could I ask for your frank opinion on what I still need to work on?" },
      { speaker: "部長", role: "Manager", jp: "積極的ですね。技術力は十分ですが、チーム全体を引っ張るリーダーシップがもう少し必要です。後輩の育成にも取り組んでみてください。", en: "You're proactive. Your technical skills are solid, but you need a bit more leadership to drive the whole team. I'd also like you to work on developing junior members." },
      { speaker: "Alex", role: "You", jp: "ありがとうございます。具体的な課題が分かりました。後輩の育成と、チームをまとめる役割に積極的に取り組みます。来期は期待に応えられるよう頑張ります。", en: "Thank you. Now I have a clear picture of what I need to work on. I will actively take on the role of developing junior members and bringing the team together. I will do my best to meet your expectations next term." },
      { speaker: "部長", role: "Manager", jp: "期待しています。キャリアパスについては引き続き一緒に考えましょう。", en: "I'm counting on you. Let's continue to think through your career path together." },
    ]
  },
  {
    id: 3, title: "目標設定の面談", sceneEn: "Setting goals for the next term with your manager during a goal-setting meeting.",
    lines: [
      { speaker: "部長", role: "Manager", jp: "では来期の目標設定をしましょう。何を目標にしたいですか？", en: "Let's set your goals for next term. What would you like to aim for?" },
      { speaker: "Alex", role: "You", jp: "3点考えています。1つ目は新規プロジェクトのリードエンジニアを務めること、2つ目はクライアント対応力の向上、3つ目は後輩2名のメンタリングです。", en: "I have three things in mind. First, to serve as lead engineer on the new project. Second, to improve my client communication skills. Third, to mentor two junior members." },
      { speaker: "部長", role: "Manager", jp: "いい目標ですね。具体的な数字や基準はありますか？", en: "Those are good goals. Do you have specific numbers or criteria in mind?" },
      { speaker: "Alex", role: "You", jp: "クライアント対応については、面談でのフィードバックスコアを現在の3.5から4.0以上に上げることを目標にしたいと思います。", en: "For client communication, I would like to aim to raise my feedback score in meetings from the current 3.5 to 4.0 or above." },
      { speaker: "部長", role: "Manager", jp: "具体的で良いですね。目標達成に向けてサポートします。", en: "That's specific and measurable. I will support you in achieving your goals." },
      { speaker: "Alex", role: "You", jp: "ありがとうございます。成長できるよう積極的に取り組みます。よろしくお願いします。", en: "Thank you. I will actively work to grow. I look forward to your guidance." },
    ]
  },
];

export const unit19Quiz = [
  { id: 1, type: "choice", question: "評価面談で上司に自分の成果を伝えるとき、最も適切な表現はどれですか？", choices: ["目標を全部やりました。", "目標を達成しました。", "目標通りにできました。", "予定通りに進みました。"], answer: "目標を達成しました。", hint: "The standard business Japanese expression for successfully completing a goal or target" },
  { id: 2, type: "choice", question: "目標に届かなかったことを正直に伝えるとき、最も適切な表現はどれですか？", choices: ["今期は目標が未達でした。", "目標に失敗しました。", "目標が全然できませんでした。", "目標に届きませんでした。"], answer: "今期は目標が未達でした。", hint: "A neutral, professional term used in performance reviews to acknowledge falling short of targets without sounding overly negative" },
  { id: 3, type: "choice", question: "評価面談で自分の弱点や改善すべき点のことを何といいますか？", choices: ["弱み", "問題点", "課題", "失敗"], answer: "課題", hint: "This word frames areas needing improvement as 'challenges to tackle' rather than weaknesses — more constructive in a Japanese business context" },
  { id: 4, type: "choice", question: "来期の昇進を目指したいと上司に伝えるとき、最も自然な表現はどれですか？", choices: ["昇進したいです。", "昇進を考えています。", "来期の昇進を目指しています。", "昇進させてください。"], answer: "来期の昇進を目指しています。", hint: "Framing your ambition as something you are 'aiming for' shows initiative and determination without sounding demanding" },
  { id: 5, type: "choice", question: "上司に率直な意見をもらいたいときの表現として、最も自然なものはどれですか？", choices: ["本当のことを言ってください。", "率直にご意見をいただけますか。", "正直に教えてください。", "遠慮なく言ってください。"], answer: "率直にご意見をいただけますか。", hint: "A polite way to invite candid feedback — using 率直に signals that you want honest input, not just positive comments" },
  { id: 6, type: "choice", question: "来期の目標として「スキルを伸ばしたい」と伝えるとき、最もビジネスらしい表現はどれですか？", choices: ["スキルを上げたいです。", "もっと上手くなりたいです。", "スキルアップに注力したいと思っています。", "勉強を頑張ります。"], answer: "スキルアップに注力したいと思っています。", hint: "「注力する」(to focus effort on) combined with 「スキルアップ」creates a forward-looking, professional goal statement" },
  { id: 7, type: "choice", question: "上司に期待に応えると約束するとき、最も適切な表現はどれですか？", choices: ["頑張ります。", "期待を裏切りません。", "来期は期待に応えられるよう頑張ります。", "絶対にやります。"], answer: "来期は期待に応えられるよう頑張ります。", hint: "This phrase explicitly references meeting expectations and frames your commitment in a forward-looking, humble way" },
  { id: 8, type: "choice", question: "自分の得意なことを面談で伝えるとき、何と言いますか？", choices: ["自分の強みは〜です。", "私が上手いのは〜です。", "私の長所は〜です。", "〜は問題ありません。"], answer: "自分の強みは〜です。", hint: "The standard expression in performance review contexts for describing your positive attributes and capabilities" },
];

export const unit19Roleplay = [
  { key: "A", label: "上期の振り返り", descJp: "上司に今期の振り返りを求められます。達成したこと・課題・来期の目標を具体的に伝えましょう。自己評価を前向きに、かつ正直に述べることがポイントです。", desc: "Your manager asks you to reflect on this term. Share what you achieved, your challenges, and your goals for next term honestly and constructively.", points: ["「〜に貢献できました」で成果を伝えられる", "「〜が課題でした」と正直に課題を述べられる", "「来期は〜に注力したいと思っています」で目標を伝えられる"] },
  { key: "B", label: "昇進についての相談", descJp: "上司に昇進を目指していることと、そのために必要なことを相談します。積極的な姿勢を見せながら、率直なフィードバックを求めましょう。", desc: "Tell your manager you are aiming for a promotion and ask for frank feedback on what you need to develop. Show initiative throughout.", points: ["「昇進を目指したい」と積極的に伝えられる", "「率直にご意見をいただけますか」が使える", "「期待に応えられるよう頑張ります」で締められる"] },
  { key: "C", label: "目標設定の面談", descJp: "来期の目標を上司と話し合います。具体的な数字や行動を交えて目標を説明し、前向きな姿勢で締めましょう。", desc: "Discuss your goals for next term with your manager. Explain your targets with specific numbers or actions and close on a positive note.", points: ["複数の目標を整理して伝えられる", "「具体的には〜を目標にしたいと思います」が使える", "「積極的に取り組みます」で前向きに締められる"] },
];

// ---- UNIT 20 DATA ----
export const unit20Vocab = [
  { id: 1, jp: "退職する", reading: "たいしょくする", en: "to resign / to leave a company", example: "来月退職することになりました。", exampleEn: "I have decided to resign next month." },
  { id: 2, jp: "退職届", reading: "たいしょくとどけ", en: "resignation letter / notice of resignation", example: "退職届を提出しました。", exampleEn: "I submitted my resignation letter." },
  { id: 3, jp: "引き継ぎ", reading: "ひきつぎ", en: "handover / transition of duties", example: "引き継ぎをしっかり行います。", exampleEn: "I will make sure to do a thorough handover." },
  { id: 4, jp: "お世話になりました", reading: "おせわになりました", en: "Thank you for everything (said when leaving)", example: "大変お世話になりました。", exampleEn: "Thank you so much for everything." },
  { id: 5, jp: "転職する", reading: "てんしょくする", en: "to change jobs", example: "来月、転職します。", exampleEn: "I will be changing jobs next month." },
  { id: 6, jp: "一身上の都合", reading: "いっしんじょうのつごう", en: "personal reasons (standard phrase for resignation)", example: "一身上の都合により退職いたします。", exampleEn: "I will be resigning for personal reasons." },
  { id: 7, jp: "後任", reading: "こうにん", en: "successor / replacement", example: "後任の担当者をご紹介します。", exampleEn: "Allow me to introduce my successor." },
  { id: 8, jp: "最終出社日", reading: "さいしゅうしゅっしゃび", en: "last day of work", example: "最終出社日は3月31日です。", exampleEn: "My last day of work is March 31st." },
  { id: 9, jp: "ご挨拶", reading: "ごあいさつ", en: "farewell greeting / formal greeting", example: "退職のご挨拶をさせていただきます。", exampleEn: "Allow me to give my farewell greeting." },
  { id: 10, jp: "大変お世話になりました", reading: "たいへんおせわになりました", en: "Thank you very much for all your support", example: "在職中は大変お世話になりました。", exampleEn: "Thank you very much for all your support during my time here." },
  { id: 11, jp: "ご活躍をお祈りします", reading: "ごかつやくをおいのりします", en: "I wish you continued success", example: "皆様のご活躍をお祈りしております。", exampleEn: "I wish you all continued success." },
  { id: 12, jp: "今後ともよろしくお願いします", reading: "こんごともよろしくおねがいします", en: "I hope we can stay in touch / I look forward to our continued relationship", example: "退職後も今後ともよろしくお願いします。", exampleEn: "I hope we can stay in touch even after I leave." },
  { id: 13, jp: "在職中", reading: "ざいしょくちゅう", en: "during my time at the company", example: "在職中はお世話になりました。", exampleEn: "Thank you for your support during my time at the company." },
  { id: 14, jp: "円満退職", reading: "えんまんたいしょく", en: "amicable resignation / leaving on good terms", example: "円満退職を心がけます。", exampleEn: "I will aim to leave on good terms." },
  { id: 15, jp: "お引き立てをいただき", reading: "おひきたてをいただき", en: "having received your generous support / patronage", example: "長年お引き立てをいただき、ありがとうございました。", exampleEn: "Thank you for your generous support over the years." },
];

export const unit20Conversations = [
  {
    id: 1, title: "上司への退職の申し出", sceneEn: "Telling your manager that you have decided to resign.",
    lines: [
      { speaker: "Alex", role: "You", jp: "部長、折り入ってご相談があります。少しお時間をいただけますか。", en: "Manager, I have something important I need to discuss with you. Could you spare a moment?" },
      { speaker: "部長", role: "Manager", jp: "どうぞ。", en: "Go ahead." },
      { speaker: "Alex", role: "You", jp: "実は、一身上の都合により、来月末をもって退職させていただきたいと考えています。", en: "The truth is, I would like to resign at the end of next month for personal reasons." },
      { speaker: "部長", role: "Manager", jp: "そうですか。突然ですね。理由を聞いてもいいですか？", en: "I see. That's quite sudden. May I ask the reason?" },
      { speaker: "Alex", role: "You", jp: "新しいキャリアに挑戦したいという思いが強くなりまして。引き継ぎはしっかり行いますので、よろしくお願いします。", en: "I have a strong desire to take on a new career challenge. I will make sure to do a thorough handover, so please count on me for that." },
      { speaker: "部長", role: "Manager", jp: "わかりました。残念ですが、引き継ぎをしっかりお願いします。退職届は人事部に提出してください。", en: "I understand. It's a shame, but please make sure to do a thorough handover. Please submit your resignation letter to HR." },
      { speaker: "Alex", role: "You", jp: "はい、承知しました。最終出社日まで精一杯務めます。", en: "Yes, understood. I will give my best until my last day." },
    ]
  },
  {
    id: 2, title: "チームへの退職の挨拶", sceneEn: "Sending a farewell message to your team on your last day.",
    lines: [
      { speaker: "Alex→チーム", role: "Slack", jp: "皆さん、お疲れ様です。本日が最終出社日となりました。退職のご挨拶をさせてください。\n\n在職中は大変お世話になりました。皆さんと一緒に仕事ができたことを、心より感謝しています。特に、困ったときにいつも助けていただいたことは忘れません。\n\n退職後も、皆さんのご活躍をお祈りしております。今後ともよろしくお願いします。\n\nありがとうございました。", en: "Hi everyone. Today is my last day. Please allow me to say my farewells.\n\nThank you so much for everything during my time here. I am truly grateful to have been able to work alongside all of you. In particular, I will never forget how you always helped me when I was struggling.\n\nEven after I leave, I will be wishing you all continued success. I hope we can stay in touch.\n\nThank you." },
      { speaker: "田中", role: "Colleague", jp: "Alexさん、本当にお世話になりました。新天地でのご活躍をお祈りしています！", en: "Alex-san, thank you so much for everything. Wishing you great success in your new chapter!" },
      { speaker: "山本", role: "Colleague", jp: "一緒に働けて良かったです。またいつか！", en: "It was great working with you. Until we meet again!" },
      { speaker: "Alex", role: "You", jp: "皆さん、ありがとうございます。また機会があればぜひ一緒に仕事しましょう。お元気で！", en: "Thank you everyone. If the opportunity arises, let's definitely work together again. Take care!" },
    ]
  },
  {
    id: 3, title: "クライアントへの退職挨拶メール", sceneEn: "Sending a farewell email to a client and introducing your successor.",
    lines: [
      { speaker: "Alex", role: "You", jp: "山田様\n\nお世話になっております。Alexでございます。\n\nこの度、一身上の都合により、3月31日をもって退職することになりました。在職中は大変お引き立てをいただき、誠にありがとうございました。\n\n後任は田中（tanaka@example.com）が担当いたします。近日中にご挨拶に伺いますので、引き続きよろしくお願いいたします。\n\n山田様のますますのご活躍をお祈り申し上げます。大変お世話になりました。", en: "Yamada-san,\n\nThank you for your continued support. This is Alex.\n\nI am writing to let you know that I will be leaving the company on March 31st for personal reasons. Thank you so very much for your generous support during my time here.\n\nMy successor, Tanaka (tanaka@example.com), will be taking over. They will be in touch shortly to introduce themselves. Thank you for your continued support going forward.\n\nI wish you continued great success. Thank you for everything." },
      { speaker: "山田", role: "Client", jp: "Alexさん、ご連絡ありがとうございます。大変残念ですが、新しいご活躍をお祈りしています。田中さんにもよろしくお伝えください。", en: "Alex-san, thank you for letting me know. It's very sad news, but I wish you great success in your next chapter. Please give my regards to Tanaka-san." },
      { speaker: "Alex", role: "You", jp: "山田様、温かいお言葉をありがとうございます。田中にもお伝えします。今後ともどうぞよろしくお願いいたします。", en: "Yamada-san, thank you for your kind words. I will pass them on to Tanaka. I hope you will continue to support us going forward." },
    ]
  },
];

export const unit20Quiz = [
  { id: 1, type: "choice", question: "退職理由を上司に伝えるとき、個人的な事情を簡潔に表す定型表現はどれですか？", choices: ["個人的な理由で", "私の都合で", "一身上の都合により", "自分の事情で"], answer: "一身上の都合により", hint: "A set formal phrase used in resignation letters and verbal resignations — it keeps the reason vague while being entirely professional" },
  { id: 2, type: "choice", question: "退職時、会社やお世話になった人に感謝を伝えるときの定番表現はどれですか？", choices: ["ありがとうございました。", "大変お世話になりました。", "感謝しております。", "お礼申し上げます。"], answer: "大変お世話になりました。", hint: "The 大変 intensifier is what makes this the standard and most heartfelt farewell expression in Japanese workplaces" },
  { id: 3, type: "choice", question: "退職するとき、担当業務を次の人に引き渡す作業を何といいますか？", choices: ["担当変更", "業務移管", "引き継ぎ", "交代"], answer: "引き継ぎ", hint: "The standard term for the process of transferring your responsibilities, knowledge, and ongoing tasks to your successor" },
  { id: 4, type: "choice", question: "退職することを正式に会社に届け出る書類を何といいますか？", choices: ["辞表", "退職届", "退職願", "申請書"], answer: "退職届", hint: "This document formally notifies the company of your resignation — 退職願 is a request, while this is a definitive notice" },
  { id: 5, type: "choice", question: "最終出社日にチームに送るメッセージの書き出しとして最も自然なものはどれですか？", choices: ["今日で終わりです。", "退職のご挨拶をさせてください。", "お別れの挨拶をします。", "最後のメッセージです。"], answer: "退職のご挨拶をさせてください。", hint: "A polite and humble way to introduce a farewell message — using させてください adds a sense of asking permission to address the group" },
  { id: 6, type: "choice", question: "退職後も相手との関係を大切にしたいと伝えるとき、最も自然な表現はどれですか？", choices: ["また連絡します。", "友達でいてください。", "今後ともよろしくお願いします。", "引き続き仲良くしてください。"], answer: "今後ともよろしくお願いします。", hint: "A versatile phrase that expresses a wish to maintain the relationship going forward — appropriate for both colleagues and clients" },
  { id: 7, type: "choice", question: "退職後の相手の活躍を祈る表現として、最もフォーマルなものはどれですか？", choices: ["頑張ってください。", "うまくいくといいですね。", "ご活躍をお祈りしております。", "またいつか会いましょう。"], answer: "ご活躍をお祈りしております。", hint: "A formal closing expression wishing continued success — 「お祈りしております」 is the humble, polite form of wishing someone well" },
  { id: 8, type: "choice", question: "クライアントへの退職挨拶メールで、後任を紹介するときの自然な表現はどれですか？", choices: ["次は田中がやります。", "田中に変わります。", "後任は田中が担当いたします。", "田中に引き継ぎました。"], answer: "後任は田中が担当いたします。", hint: "Using 後任 (successor) combined with 担当いたします is the professional way to introduce your replacement to a client" },
];

export const unit20Roleplay = [
  { key: "A", label: "上司への退職の申し出", descJp: "上司に退職の意思を伝えます。「一身上の都合」を使い、感謝を述べ、引き継ぎへの意欲を示しましょう。円満退職を意識した丁寧な伝え方を練習します。", desc: "Tell your manager you are resigning. Use the standard phrase for personal reasons, express gratitude, and show commitment to a proper handover.", points: ["「一身上の都合により退職したい」と伝えられる", "「在職中はお世話になりました」と感謝を述べられる", "「引き継ぎはしっかり行います」と約束できる"] },
  { key: "B", label: "チームへの退職挨拶", descJp: "最終出社日にチームへのお別れメッセージを書きます。感謝・思い出・今後の応援の3点を盛り込んで、温かく締めましょう。", desc: "Write a farewell message to your team on your last day. Include gratitude, a personal memory, and good wishes for the future.", points: ["「大変お世話になりました」で感謝が伝えられる", "「皆さんのご活躍をお祈りしております」が使える", "「今後ともよろしくお願いします」で締められる"] },
  { key: "C", label: "クライアントへの退職挨拶メール", descJp: "クライアントに退職の連絡と後任の紹介メールを送ります。在職中の感謝と後任への引き継ぎを丁寧に伝えましょう。", desc: "Send a farewell email to a client, announcing your resignation and introducing your successor. Express gratitude and ensure a smooth handover.", points: ["「一身上の都合により退職することになりました」と伝えられる", "「お引き立てをいただき、ありがとうございました」が使える", "「後任は〜が担当いたします」と後任を紹介できる"] },
];

// ============================================================
// APP ROOT
// ============================================================
export const unitDataMap = {
  1: { id: 1, title: "自己紹介・初日の挨拶", titleEn: "Self-Introduction & First Day", vocab: unit1Vocab, itRoles: unit1ITRoles, conversations: unit1Conversations, quiz: unit1Quiz, answerVariants: unit1AnswerVariants, quizTip: "Choose the best answer. Kanji, hiragana and katakana are all accepted.", roleplay: unit1Roleplay },
  2: { id: 2, title: "朝会", titleEn: "Morning Meeting", vocab: unit2Vocab, itRoles: null, conversations: unit2Conversations, quiz: unit2Quiz, answerVariants: {}, quizTip: "Choose the best word to complete each sentence.", roleplay: unit2Roleplay },
  3: { id: 3, title: "質問・確認の仕方", titleEn: "How to Ask & Confirm", vocab: unit3Vocab, itRoles: null, conversations: unit3Conversations, quiz: unit3Quiz, answerVariants: {}, quizTip: "Choose the most appropriate expression for each business situation.", roleplay: unit3Roleplay },
  4: { id: 4, title: "スケジュール・締め切りの調整", titleEn: "Schedule & Deadline Management", vocab: unit4Vocab, itRoles: null, conversations: unit4Conversations, quiz: unit4Quiz, answerVariants: {}, quizTip: "Choose the most appropriate word for each business situation.", roleplay: unit4Roleplay },
  5: { id: 5, title: "メール・Slackの基本", titleEn: "Email & Slack Basics", vocab: unit5Vocab, itRoles: null, conversations: unit5Conversations, quiz: unit5Quiz, answerVariants: {}, quizTip: "Choose the most appropriate expression for each email or chat situation.", roleplay: unit5Roleplay },
  6: { id: 6, title: "仕様確認・要件定義", titleEn: "Spec Review & Requirements", vocab: unit6Vocab, itRoles: null, conversations: unit6Conversations, quiz: unit6Quiz, answerVariants: {}, quizTip: "Choose the most appropriate word for each business situation.", roleplay: unit6Roleplay },
  7: { id: 7, title: "バグ報告・トラブル対応", titleEn: "Bug Reports & Troubleshooting", vocab: unit7Vocab, itRoles: null, conversations: unit7Conversations, quiz: unit7Quiz, answerVariants: {}, quizTip: "Choose the most appropriate expression for each situation.", roleplay: unit7Roleplay },
  8: { id: 8, title: "コードレビュー", titleEn: "Code Reviews", vocab: unit8Vocab, itRoles: null, conversations: unit8Conversations, quiz: unit8Quiz, answerVariants: {}, quizTip: "Choose the most appropriate expression for each situation.", roleplay: unit8Roleplay },
  9: { id: 9, title: "ミーティング・会議", titleEn: "Meetings & Conferences", vocab: unit9Vocab, itRoles: null, conversations: unit9Conversations, quiz: unit9Quiz, answerVariants: {}, quizTip: "Choose the most appropriate expression for each situation.", roleplay: unit9Roleplay },
  10: { id: 10, title: "プロジェクト管理", titleEn: "Project Management", vocab: unit10Vocab, itRoles: null, conversations: unit10Conversations, quiz: unit10Quiz, answerVariants: {}, quizTip: "Choose the most appropriate expression for each situation.", roleplay: unit10Roleplay },
  11: { id: 11, title: "テスト・品質確認", titleEn: "Testing & Quality Assurance", vocab: unit11Vocab, itRoles: null, conversations: unit11Conversations, quiz: unit11Quiz, answerVariants: {}, quizTip: "Choose the most appropriate expression for each situation.", roleplay: unit11Roleplay },
  12: { id: 12, title: "報告・連絡・相談", titleEn: "Reporting & Communication", vocab: unit12Vocab, itRoles: null, conversations: unit12Conversations, quiz: unit12Quiz, answerVariants: {}, quizTip: "Choose the most appropriate expression for each situation.", roleplay: unit12Roleplay },
  13: { id: 13, title: "依頼・お願いの仕方", titleEn: "Making Requests", vocab: unit13Vocab, itRoles: null, conversations: unit13Conversations, quiz: unit13Quiz, answerVariants: {}, quizTip: "Choose the most appropriate expression for each situation.", roleplay: unit13Roleplay },
  14: { id: 14, title: "断る・調整する", titleEn: "Declining & Adjusting", vocab: unit14Vocab, itRoles: null, conversations: unit14Conversations, quiz: unit14Quiz, answerVariants: {}, quizTip: "Choose the most appropriate expression for each situation.", roleplay: unit14Roleplay },
  15: { id: 15, title: "フィードバックを受ける・与える", titleEn: "Giving & Receiving Feedback", vocab: unit15Vocab, itRoles: null, conversations: unit15Conversations, quiz: unit15Quiz, answerVariants: {}, quizTip: "Choose the most appropriate expression for each situation.", roleplay: unit15Roleplay },
  16: { id: 16, title: "雑談・社内イベント", titleEn: "Small Talk & Office Events", vocab: unit16Vocab, itRoles: null, conversations: unit16Conversations, quiz: unit16Quiz, answerVariants: {}, quizTip: "Choose the most appropriate expression for each situation.", roleplay: unit16Roleplay },
  17: { id: 17, title: "クライアント・顧客対応", titleEn: "Client Communication", vocab: unit17Vocab, itRoles: null, conversations: unit17Conversations, quiz: unit17Quiz, answerVariants: {}, quizTip: "Choose the most appropriate expression for each situation.", roleplay: unit17Roleplay },
  18: { id: 18, title: "障害対応・緊急時の日本語", titleEn: "Incident Response", vocab: unit18Vocab, itRoles: null, conversations: unit18Conversations, quiz: unit18Quiz, answerVariants: {}, quizTip: "Choose the most appropriate expression for each situation.", roleplay: unit18Roleplay },
  19: { id: 19, title: "昇進・評価面談", titleEn: "Performance Reviews", vocab: unit19Vocab, itRoles: null, conversations: unit19Conversations, quiz: unit19Quiz, answerVariants: {}, quizTip: "Choose the most appropriate expression for each situation.", roleplay: unit19Roleplay },
  20: { id: 20, title: "転職・退職の日本語", titleEn: "Job Changes & Resignation", vocab: unit20Vocab, itRoles: null, conversations: unit20Conversations, quiz: unit20Quiz, answerVariants: {}, quizTip: "Choose the most appropriate expression for each situation.", roleplay: unit20Roleplay },
};
