// data.ts - カタカナビジネス語彙 ユニットデータ

type VocabItem = {
  id: number;
  jp: string;
  reading: string;
  en: string;
  example: string;
  exampleEn: string;
};

type QuizItem = {
  id: number;
  question: string;
  options: string[];
  correct: number;
  explanation: string;
};

type UnitData = {
  id: number;
  title: string;
  titleEn: string;
  vocab: VocabItem[];
  quiz: QuizItem[];
};

export const katakanaUnits = [
  { id: 1, title: "ビジネス基本", titleEn: "Business Basics", available: true },
  { id: 2, title: "コミュニケーション", titleEn: "Communication", available: true },
  { id: 3, title: "プロジェクト管理", titleEn: "Project Management", available: true },
  { id: 4, title: "職場の人間関係", titleEn: "Workplace Relationships", available: true },
  { id: 5, title: "数字・評価", titleEn: "Numbers & Evaluation", available: true },
  { id: 6, title: "資料・書類", titleEn: "Documents & Materials", available: true },
  { id: 7, title: "会議・打ち合わせ", titleEn: "Meetings", available: true },
  { id: 8, title: "IT・デジタル共通", titleEn: "IT & Digital", available: true },
  { id: 9, title: "営業・顧客対応", titleEn: "Sales & Customer Service", available: true },
  { id: 10, title: "キャリア・成長", titleEn: "Career & Growth", available: true },
];

// ---- UNIT 1: ビジネス基本 ----
const unit1Data: UnitData = {
  id: 1,
  title: "ビジネス基本",
  titleEn: "Business Basics",
  vocab: [
    { id: 1, jp: "アジェンダ", reading: "あじぇんだ", en: "agenda", example: "会議のアジェンダを事前に共有します。", exampleEn: "I will share the meeting agenda in advance." },
    { id: 2, jp: "コンセンサス", reading: "こんせんさす", en: "consensus", example: "チーム全員のコンセンサスを得ました。", exampleEn: "We gained consensus from the entire team." },
    { id: 3, jp: "マイルストーン", reading: "まいるすとーん", en: "milestone", example: "第1フェーズのマイルストーンは来月です。", exampleEn: "The milestone for Phase 1 is next month." },
    { id: 4, jp: "ミッション", reading: "みっしょん", en: "mission", example: "会社のミッションを全員で共有します。", exampleEn: "We share the company's mission with everyone." },
    { id: 5, jp: "ビジョン", reading: "びじょん", en: "vision", example: "5年後のビジョンを描いています。", exampleEn: "We are drawing a vision for 5 years ahead." },
    { id: 6, jp: "バジェット", reading: "ばじぇっと", en: "budget", example: "このプロジェクトのバジェットを確認してください。", exampleEn: "Please confirm the budget for this project." },
    { id: 7, jp: "プライオリティ", reading: "ぷらいおりてぃ", en: "priority", example: "タスクのプライオリティを決めましょう。", exampleEn: "Let's decide the priority of tasks." },
    { id: 8, jp: "コスト", reading: "こすと", en: "cost", example: "コストを抑える方法を考えました。", exampleEn: "I thought of ways to reduce costs." },
    { id: 9, jp: "リソース", reading: "りそーす", en: "resource", example: "プロジェクトに必要なリソースを確保します。", exampleEn: "We will secure the resources needed for the project." },
    { id: 10, jp: "ストラテジー", reading: "すとらてじー", en: "strategy", example: "来年のストラテジーを検討しています。", exampleEn: "We are considering the strategy for next year." },
  ],
  quiz: [
    { id: 1, question: "「会議の議題や進行計画」を表すカタカナ語は？", options: ["アジェンダ", "ストラテジー", "マイルストーン", "コスト"], correct: 0, explanation: "アジェンダ（agenda）は会議の議題や進行計画を意味します。" },
    { id: 2, question: "チーム全員が同意した状態を「＿＿を得た」と言います。空欄に入る言葉は？", options: ["マイルストーン", "コンセンサス", "バジェット", "リソース"], correct: 1, explanation: "コンセンサス（consensus）は全員の合意・同意を意味します。" },
    { id: 3, question: "プロジェクトの「予算」を英語由来のカタカナで言うと？", options: ["プライオリティ", "ビジョン", "バジェット", "ミッション"], correct: 2, explanation: "バジェット（budget）はプロジェクトや業務の予算を指します。" },
    { id: 4, question: "「どのタスクを先にやるべきか」の優先順位を表すカタカナ語は？", options: ["コスト", "ビジョン", "ストラテジー", "プライオリティ"], correct: 3, explanation: "プライオリティ（priority）は優先順位のことです。" },
    { id: 5, question: "プロジェクトの重要な節目・区切りを何といいますか？", options: ["マイルストーン", "リソース", "ミッション", "コンセンサス"], correct: 0, explanation: "マイルストーン（milestone）はプロジェクトの重要な節目や目標点を意味します。" },
  ],
};

// ---- UNIT 2: コミュニケーション ----
const unit2Data: UnitData = {
  id: 2,
  title: "コミュニケーション",
  titleEn: "Communication",
  vocab: [
    { id: 1, jp: "フィードバック", reading: "ふぃーどばっく", en: "feedback", example: "上司からフィードバックをもらいました。", exampleEn: "I received feedback from my supervisor." },
    { id: 2, jp: "ブレスト", reading: "ぶれすと", en: "brainstorming (abbreviated)", example: "新企画のアイデアをブレストしましょう。", exampleEn: "Let's brainstorm ideas for a new project." },
    { id: 3, jp: "プレゼン", reading: "ぷれぜん", en: "presentation (abbreviated)", example: "来週、取引先にプレゼンをします。", exampleEn: "Next week I will give a presentation to the client." },
    { id: 4, jp: "ネゴシエーション", reading: "ねごしえーしょん", en: "negotiation", example: "価格のネゴシエーションが必要です。", exampleEn: "Price negotiation is necessary." },
    { id: 5, jp: "アポ", reading: "あぽ", en: "appointment (abbreviated)", example: "明日の午後、アポを入れてもいいですか？", exampleEn: "Can I schedule an appointment for tomorrow afternoon?" },
    { id: 6, jp: "レスポンス", reading: "れすぽんす", en: "response", example: "メールへのレスポンスが早い人は信頼されます。", exampleEn: "People who respond to emails quickly are trusted." },
    { id: 7, jp: "コンファーム", reading: "こんふぁーむ", en: "confirm", example: "会議の日程をコンファームしてください。", exampleEn: "Please confirm the meeting schedule." },
    { id: 8, jp: "エスカレーション", reading: "えすかれーしょん", en: "escalation", example: "問題が解決しない場合はエスカレーションします。", exampleEn: "If the issue is not resolved, we will escalate it." },
    { id: 9, jp: "クレーム", reading: "くれーむ", en: "complaint", example: "お客様からクレームが入りました。", exampleEn: "We received a complaint from a customer." },
    { id: 10, jp: "コミットメント", reading: "こみっとめんと", en: "commitment", example: "期限へのコミットメントが重要です。", exampleEn: "Commitment to deadlines is important." },
  ],
  quiz: [
    { id: 1, question: "「ブレインストーミング」の職場での短縮形は？", options: ["プレゼン", "ブレスト", "レスポンス", "アポ"], correct: 1, explanation: "ブレスト（ブレインストーミング）は自由にアイデアを出し合う会議スタイルです。" },
    { id: 2, question: "「お客様からの苦情・不満の申し立て」を表すカタカナ語は？", options: ["クレーム", "エスカレーション", "フィードバック", "コミットメント"], correct: 0, explanation: "クレーム（claim）は日本語では苦情・不満の申し立てを意味します（英語のclaimとは意味が異なります）。" },
    { id: 3, question: "問題を上位の担当者や上司に引き継ぐことを何といいますか？", options: ["コンファーム", "アポ", "ネゴシエーション", "エスカレーション"], correct: 3, explanation: "エスカレーション（escalation）は問題を上位に報告・引き継ぐことです。" },
    { id: 4, question: "「アポイントメント」の短縮形は？", options: ["アポ", "コンファーム", "レスポンス", "プレゼン"], correct: 0, explanation: "アポは「アポイントメント」の略で、約束・面会の予約のことです。" },
    { id: 5, question: "「価格や条件について話し合い、合意を目指すこと」を何といいますか？", options: ["フィードバック", "コミットメント", "プレゼン", "ネゴシエーション"], correct: 3, explanation: "ネゴシエーション（negotiation）は交渉という意味です。" },
  ],
};

// ---- UNIT 3: プロジェクト管理 ----
const unit3Data: UnitData = {
  id: 3,
  title: "プロジェクト管理",
  titleEn: "Project Management",
  vocab: [
    { id: 1, jp: "スケジュール", reading: "すけじゅーる", en: "schedule", example: "プロジェクトのスケジュールを確認してください。", exampleEn: "Please check the project schedule." },
    { id: 2, jp: "タスク", reading: "たすく", en: "task", example: "今日のタスクをリストアップしました。", exampleEn: "I listed today's tasks." },
    { id: 3, jp: "デッドライン", reading: "でっどらいん", en: "deadline", example: "このレポートのデッドラインはいつですか？", exampleEn: "What is the deadline for this report?" },
    { id: 4, jp: "フェーズ", reading: "ふぇーず", en: "phase", example: "プロジェクトは現在フェーズ2です。", exampleEn: "The project is currently in Phase 2." },
    { id: 5, jp: "スプリント", reading: "すぷりんと", en: "sprint", example: "2週間のスプリントで開発を進めます。", exampleEn: "We will proceed with development in 2-week sprints." },
    { id: 6, jp: "バックログ", reading: "ばっくろぐ", en: "backlog", example: "バックログからタスクを選んで着手します。", exampleEn: "I will pick tasks from the backlog and start work." },
    { id: 7, jp: "デリバリー", reading: "でりばりー", en: "delivery", example: "成果物のデリバリーは来週を予定しています。", exampleEn: "Delivery of the deliverables is scheduled for next week." },
    { id: 8, jp: "リリース", reading: "りりーす", en: "release", example: "新機能のリリースは月末です。", exampleEn: "The new feature release is at the end of the month." },
    { id: 9, jp: "ステークホルダー", reading: "すてーくほるだー", en: "stakeholder", example: "ステークホルダーへの報告が必要です。", exampleEn: "We need to report to stakeholders." },
    { id: 10, jp: "スコープ", reading: "すこーぷ", en: "scope", example: "プロジェクトのスコープを明確にしましょう。", exampleEn: "Let's clarify the project scope." },
  ],
  quiz: [
    { id: 1, question: "「提出期限・締め切り」を表すカタカナ語は？", options: ["スプリント", "フェーズ", "デッドライン", "スコープ"], correct: 2, explanation: "デッドライン（deadline）は作業の締め切り・期限を意味します。" },
    { id: 2, question: "アジャイル開発でよく使われる「短い開発サイクル」のことを何といいますか？", options: ["バックログ", "スプリント", "リリース", "デリバリー"], correct: 1, explanation: "スプリント（sprint）はアジャイル開発で使う1〜4週間の開発サイクルです。" },
    { id: 3, question: "プロジェクトに関係するすべての利害関係者を何といいますか？", options: ["ステークホルダー", "スコープ", "フェーズ", "バックログ"], correct: 0, explanation: "ステークホルダー（stakeholder）はプロジェクトに影響を受ける関係者全員を指します。" },
    { id: 4, question: "まだ着手していないタスクの一覧・積み残しのことを何といいますか？", options: ["タスク", "デリバリー", "バックログ", "スケジュール"], correct: 2, explanation: "バックログ（backlog）は未着手のタスク一覧や積み残し作業のことです。" },
    { id: 5, question: "プロジェクトで扱う業務や機能の「対象範囲」を何といいますか？", options: ["スプリント", "スコープ", "フェーズ", "リリース"], correct: 1, explanation: "スコープ（scope）はプロジェクトで扱う業務や機能の範囲を意味します。" },
  ],
};

// ---- UNIT 4: 職場の人間関係 ----
const unit4Data: UnitData = {
  id: 4,
  title: "職場の人間関係",
  titleEn: "Workplace Relationships",
  vocab: [
    { id: 1, jp: "メンター", reading: "めんたー", en: "mentor", example: "新入社員にはメンターがつきます。", exampleEn: "New employees are assigned a mentor." },
    { id: 2, jp: "リーダーシップ", reading: "りーだーしっぷ", en: "leadership", example: "彼はリーダーシップが高く評価されています。", exampleEn: "His leadership is highly evaluated." },
    { id: 3, jp: "チームワーク", reading: "ちーむわーく", en: "teamwork", example: "チームワークを大切にしています。", exampleEn: "We value teamwork." },
    { id: 4, jp: "コラボレーション", reading: "こらぼれーしょん", en: "collaboration", example: "他部署とのコラボレーションを進めます。", exampleEn: "We will advance collaboration with other departments." },
    { id: 5, jp: "サポート", reading: "さぽーと", en: "support", example: "困ったときはお互いにサポートしましょう。", exampleEn: "Let's support each other when in trouble." },
    { id: 6, jp: "マネージャー", reading: "まねーじゃー", en: "manager", example: "マネージャーに相談してみます。", exampleEn: "I will try consulting with my manager." },
    { id: 7, jp: "エンゲージメント", reading: "えんげーじめんと", en: "engagement", example: "社員のエンゲージメントを高める施策が必要です。", exampleEn: "We need measures to increase employee engagement." },
    { id: 8, jp: "インセンティブ", reading: "いんせんてぃぶ", en: "incentive", example: "成果に応じたインセンティブが支給されます。", exampleEn: "Incentives are provided based on performance." },
    { id: 9, jp: "オンボーディング", reading: "おんぼーでぃんぐ", en: "onboarding", example: "新入社員のオンボーディングプログラムがあります。", exampleEn: "There is an onboarding program for new employees." },
    { id: 10, jp: "ダイバーシティ", reading: "だいばーしてぃ", en: "diversity", example: "会社はダイバーシティを推進しています。", exampleEn: "The company promotes diversity." },
  ],
  quiz: [
    { id: 1, question: "新入社員を指導・育成する先輩社員を何といいますか？", options: ["マネージャー", "メンター", "リーダー", "コーチ"], correct: 1, explanation: "メンター（mentor）は経験豊富な先輩が後輩の成長をサポートする役割です。" },
    { id: 2, question: "部署や会社を超えて共同で作業することを何といいますか？", options: ["サポート", "チームワーク", "コラボレーション", "エンゲージメント"], correct: 2, explanation: "コラボレーション（collaboration）は協働・共同作業を意味します。" },
    { id: 3, question: "新しい職場や業務に慣れるための導入プログラムを何といいますか？", options: ["ダイバーシティ", "インセンティブ", "オンボーディング", "リーダーシップ"], correct: 2, explanation: "オンボーディング（onboarding）は新入社員が職場に慣れるための研修・支援のことです。" },
    { id: 4, question: "社員が仕事にやりがいを感じ、積極的に取り組んでいる度合いを何といいますか？", options: ["エンゲージメント", "インセンティブ", "マネージャー", "コラボレーション"], correct: 0, explanation: "エンゲージメント（engagement）は仕事への熱意や会社への関与度を表します。" },
    { id: 5, question: "成果に応じて与えられる報奨・動機づけを何といいますか？", options: ["オンボーディング", "ダイバーシティ", "チームワーク", "インセンティブ"], correct: 3, explanation: "インセンティブ（incentive）は成果に応じて与えられる報奨・動機づけです。" },
  ],
};

// ---- UNIT 5: 数字・評価 ----
const unit5Data: UnitData = {
  id: 5,
  title: "数字・評価",
  titleEn: "Numbers & Evaluation",
  vocab: [
    { id: 1, jp: "ターゲット", reading: "たーげっと", en: "target", example: "今月のターゲットは売上100万円です。", exampleEn: "This month's target is 1 million yen in sales." },
    { id: 2, jp: "KPI", reading: "けーぴーあい", en: "Key Performance Indicator", example: "KPIを毎週確認しています。", exampleEn: "We check KPIs every week." },
    { id: 3, jp: "パフォーマンス", reading: "ぱふぉーまんす", en: "performance", example: "チームのパフォーマンスが向上しました。", exampleEn: "The team's performance has improved." },
    { id: 4, jp: "ベンチマーク", reading: "べんちまーく", en: "benchmark", example: "競合他社をベンチマークとして分析します。", exampleEn: "We will analyze competitors as benchmarks." },
    { id: 5, jp: "クォーター", reading: "くぉーたー", en: "quarter", example: "Q1（第1クォーター）の結果を報告します。", exampleEn: "I will report Q1 results." },
    { id: 6, jp: "メトリクス", reading: "めとりくす", en: "metrics", example: "重要なメトリクスを毎日モニタリングします。", exampleEn: "We monitor key metrics every day." },
    { id: 7, jp: "コンバージョン", reading: "こんばーじょん", en: "conversion", example: "サイトのコンバージョン率を改善します。", exampleEn: "We will improve the site's conversion rate." },
    { id: 8, jp: "グロース", reading: "ぐろーす", en: "growth", example: "年間グロース率20%を目標とします。", exampleEn: "The annual growth rate target is 20%." },
    { id: 9, jp: "アウトプット", reading: "あうとぷっと", en: "output", example: "週次のアウトプットを報告してください。", exampleEn: "Please report weekly output." },
    { id: 10, jp: "インプット", reading: "いんぷっと", en: "input", example: "良いアウトプットには十分なインプットが大切です。", exampleEn: "Sufficient input leads to good output." },
  ],
  quiz: [
    { id: 1, question: "業績を測るための重要な指標を表す略語は？", options: ["KPI", "ROI", "CEO", "OKR"], correct: 0, explanation: "KPI（Key Performance Indicator）は重要業績評価指標のことで、目標達成度を測る指標です。" },
    { id: 2, question: "「達成すべき数値目標」を表すカタカナ語は？", options: ["ベンチマーク", "グロース", "ターゲット", "クォーター"], correct: 2, explanation: "ターゲット（target）は達成すべき目標・数値目標を意味します。" },
    { id: 3, question: "1年を4分割した3ヶ月の期間（四半期）を何といいますか？", options: ["メトリクス", "クォーター", "パフォーマンス", "アウトプット"], correct: 1, explanation: "クォーター（quarter）は年を4等分した四半期（3ヶ月）のことです。" },
    { id: 4, question: "比較や評価の「基準・参考指標」を何といいますか？", options: ["コンバージョン", "ベンチマーク", "グロース", "インプット"], correct: 1, explanation: "ベンチマーク（benchmark）は比較・評価のための基準や参考指標です。" },
    { id: 5, question: "ウェブサイトで訪問者が購入・申込みなどの目標行動を完了することを何といいますか？", options: ["アウトプット", "パフォーマンス", "コンバージョン", "ターゲット"], correct: 2, explanation: "コンバージョン（conversion）はサイト訪問者が購入・申込み等の成果を達成することです。" },
  ],
};

// ---- UNIT 6: 資料・書類 ----
const unit6Data: UnitData = {
  id: 6,
  title: "資料・書類",
  titleEn: "Documents & Materials",
  vocab: [
    { id: 1, jp: "レポート", reading: "れぽーと", en: "report", example: "週次レポートを提出してください。", exampleEn: "Please submit the weekly report." },
    { id: 2, jp: "マニュアル", reading: "まにゅある", en: "manual", example: "業務マニュアルを読んでから作業を始めてください。", exampleEn: "Please read the operations manual before starting work." },
    { id: 3, jp: "フォーマット", reading: "ふぉーまっと", en: "format", example: "決められたフォーマットで提出してください。", exampleEn: "Please submit using the specified format." },
    { id: 4, jp: "テンプレート", reading: "てんぷれーと", en: "template", example: "メールのテンプレートを作成しました。", exampleEn: "I created an email template." },
    { id: 5, jp: "ドキュメント", reading: "どきゅめんと", en: "document", example: "仕様のドキュメントを確認しました。", exampleEn: "I checked the specification document." },
    { id: 6, jp: "プロポーザル", reading: "ぷろぽーざる", en: "proposal", example: "クライアントにプロポーザルを提出します。", exampleEn: "We will submit a proposal to the client." },
    { id: 7, jp: "スライド", reading: "すらいど", en: "slide", example: "プレゼンのスライドを作成中です。", exampleEn: "I am creating slides for the presentation." },
    { id: 8, jp: "インボイス", reading: "いんぼいす", en: "invoice", example: "インボイスを月末までに送ってください。", exampleEn: "Please send the invoice by the end of the month." },
    { id: 9, jp: "エビデンス", reading: "えびでんす", en: "evidence", example: "報告書にはエビデンスを添付してください。", exampleEn: "Please attach evidence to the report." },
    { id: 10, jp: "アーカイブ", reading: "あーかいぶ", en: "archive", example: "古いファイルはアーカイブに移してください。", exampleEn: "Please move old files to the archive." },
  ],
  quiz: [
    { id: 1, question: "繰り返し使える定型文や書式の「ひな形」のことを何といいますか？", options: ["ドキュメント", "アーカイブ", "テンプレート", "フォーマット"], correct: 2, explanation: "テンプレート（template）は繰り返し使える定型の書式や文章のひな形です。" },
    { id: 2, question: "取引の「請求書」を表すカタカナ語は？", options: ["プロポーザル", "インボイス", "スライド", "マニュアル"], correct: 1, explanation: "インボイス（invoice）は取引における請求書を意味します。" },
    { id: 3, question: "業務の手順や操作方法をまとめた「説明書」を何といいますか？", options: ["レポート", "エビデンス", "フォーマット", "マニュアル"], correct: 3, explanation: "マニュアル（manual）は業務手順や操作方法をまとめた説明書です。" },
    { id: 4, question: "主張や報告の根拠となる「証拠・データ」を何といいますか？", options: ["アーカイブ", "エビデンス", "ドキュメント", "テンプレート"], correct: 1, explanation: "エビデンス（evidence）は主張や報告の根拠となる証拠・データのことです。" },
    { id: 5, question: "相手に仕事や案件を提案するための「提案書」を何といいますか？", options: ["スライド", "レポート", "プロポーザル", "フォーマット"], correct: 2, explanation: "プロポーザル（proposal）は提案書のことで、クライアントや上司への提案文書です。" },
  ],
};

// ---- UNIT 7: 会議・打ち合わせ ----
const unit7Data: UnitData = {
  id: 7,
  title: "会議・打ち合わせ",
  titleEn: "Meetings",
  vocab: [
    { id: 1, jp: "サマリー", reading: "さまりー", en: "summary", example: "会議後にサマリーをメールで共有します。", exampleEn: "I will share a summary by email after the meeting." },
    { id: 2, jp: "ネクストアクション", reading: "ねくすとあくしょん", en: "next action", example: "本日のネクストアクションを確認しましょう。", exampleEn: "Let's confirm today's next actions." },
    { id: 3, jp: "アクションアイテム", reading: "あくしょんあいてむ", en: "action item", example: "アクションアイテムを担当者と期限で整理します。", exampleEn: "I will organize action items with assignees and deadlines." },
    { id: 4, jp: "ブリーフィング", reading: "ぶりーふぃんぐ", en: "briefing", example: "朝のブリーフィングで状況を共有します。", exampleEn: "We share the situation at the morning briefing." },
    { id: 5, jp: "ファシリテーター", reading: "ふぁしりてーたー", en: "facilitator", example: "今日のファシリテーターは田中さんです。", exampleEn: "Today's facilitator is Tanaka-san." },
    { id: 6, jp: "キックオフ", reading: "きっくおふ", en: "kickoff", example: "来週、プロジェクトのキックオフミーティングがあります。", exampleEn: "Next week there is a project kickoff meeting." },
    { id: 7, jp: "ラップアップ", reading: "らっぷあっぷ", en: "wrap-up", example: "会議の最後にラップアップをします。", exampleEn: "We do a wrap-up at the end of the meeting." },
    { id: 8, jp: "ハイブリッド", reading: "はいぶりっど", en: "hybrid", example: "ハイブリッド形式で会議を行います。", exampleEn: "We will hold the meeting in a hybrid format." },
    { id: 9, jp: "ミニッツ", reading: "みにっつ", en: "minutes (meeting record)", example: "会議のミニッツを作成して全員に送ります。", exampleEn: "I will create the meeting minutes and send them to everyone." },
    { id: 10, jp: "クロージング", reading: "くろーじんぐ", en: "closing", example: "会議のクロージングで決定事項を確認します。", exampleEn: "We confirm decisions at the meeting closing." },
  ],
  quiz: [
    { id: 1, question: "会議の内容や決定事項を記録した「議事録」を英語由来のカタカナで何といいますか？", options: ["サマリー", "ミニッツ", "アクションアイテム", "ブリーフィング"], correct: 1, explanation: "ミニッツ（minutes）は会議の議事録のことです。" },
    { id: 2, question: "会議や文書の「要約・まとめ」を表す言葉は？", options: ["ブリーフィング", "ラップアップ", "サマリー", "クロージング"], correct: 2, explanation: "サマリー（summary）は会議内容や文書の要約・まとめのことです。" },
    { id: 3, question: "プロジェクト開始時の「発足会議」を何といいますか？", options: ["クロージング", "ラップアップ", "ブリーフィング", "キックオフ"], correct: 3, explanation: "キックオフ（kickoff）はプロジェクト開始時の発足会議のことです。" },
    { id: 4, question: "会議で決まった「次にやるべき行動」を何といいますか？", options: ["クロージング", "ブリーフィング", "サマリー", "ネクストアクション"], correct: 3, explanation: "ネクストアクション（next action）は会議で決まった次のステップ・行動のことです。" },
    { id: 5, question: "オンラインと対面を組み合わせた会議形式を何といいますか？", options: ["ラップアップ", "アクションアイテム", "ハイブリッド", "キックオフ"], correct: 2, explanation: "ハイブリッド（hybrid）はオンラインと対面を組み合わせた形式のことです。" },
  ],
};

// ---- UNIT 8: IT・デジタル共通 ----
const unit8Data: UnitData = {
  id: 8,
  title: "IT・デジタル共通",
  titleEn: "IT & Digital",
  vocab: [
    { id: 1, jp: "システム", reading: "しすてむ", en: "system", example: "システムに障害が発生しました。", exampleEn: "A system failure has occurred." },
    { id: 2, jp: "データ", reading: "でーた", en: "data", example: "データを分析して報告します。", exampleEn: "I will analyze the data and report." },
    { id: 3, jp: "アップデート", reading: "あっぷでーと", en: "update", example: "ソフトウェアのアップデートを実施します。", exampleEn: "We will perform a software update." },
    { id: 4, jp: "クラウド", reading: "くらうど", en: "cloud", example: "データはクラウドに保存しています。", exampleEn: "Data is stored in the cloud." },
    { id: 5, jp: "サーバー", reading: "さーばー", en: "server", example: "サーバーのメンテナンスを行います。", exampleEn: "We will perform server maintenance." },
    { id: 6, jp: "ネットワーク", reading: "ねっとわーく", en: "network", example: "ネットワークが不安定です。", exampleEn: "The network is unstable." },
    { id: 7, jp: "セキュリティ", reading: "せきゅりてぃ", en: "security", example: "セキュリティ対策を強化しました。", exampleEn: "We strengthened security measures." },
    { id: 8, jp: "インターフェース", reading: "いんたーふぇーす", en: "interface", example: "ユーザーインターフェースを改善しました。", exampleEn: "We improved the user interface." },
    { id: 9, jp: "デプロイ", reading: "でぷろい", en: "deploy", example: "本日18時にデプロイを予定しています。", exampleEn: "Deployment is planned for 6 PM today." },
    { id: 10, jp: "バックアップ", reading: "ばっくあっぷ", en: "backup", example: "データのバックアップを毎日取っています。", exampleEn: "We take data backups every day." },
  ],
  quiz: [
    { id: 1, question: "ソフトウェアやアプリを最新バージョンに「更新すること」を何といいますか？", options: ["デプロイ", "バックアップ", "アップデート", "クラウド"], correct: 2, explanation: "アップデート（update）はソフトウェアを最新版に更新することです。" },
    { id: 2, question: "インターネット経由でサービスやストレージを利用する仕組みを何といいますか？", options: ["サーバー", "ネットワーク", "セキュリティ", "クラウド"], correct: 3, explanation: "クラウド（cloud）はインターネット経由でITリソースを利用する仕組みです。" },
    { id: 3, question: "不正アクセスや情報漏洩を防ぐための対策を何といいますか？", options: ["インターフェース", "データ", "セキュリティ", "バックアップ"], correct: 2, explanation: "セキュリティ（security）は情報やシステムを守るための安全対策です。" },
    { id: 4, question: "開発したアプリケーションを本番環境に反映させることを何といいますか？", options: ["アップデート", "デプロイ", "バックアップ", "システム"], correct: 1, explanation: "デプロイ（deploy）はシステムやアプリを本番環境に配置・公開することです。" },
    { id: 5, question: "データの消失に備えて「複製を別の場所に保存すること」を何といいますか？", options: ["クラウド", "ネットワーク", "バックアップ", "サーバー"], correct: 2, explanation: "バックアップ（backup）はデータの消失に備えて別の場所に複製を保存することです。" },
  ],
};

// ---- UNIT 9: 営業・顧客対応 ----
const unit9Data: UnitData = {
  id: 9,
  title: "営業・顧客対応",
  titleEn: "Sales & Customer Service",
  vocab: [
    { id: 1, jp: "クライアント", reading: "くらいあんと", en: "client", example: "新しいクライアントとの商談があります。", exampleEn: "We have a business meeting with a new client." },
    { id: 2, jp: "ニーズ", reading: "にーず", en: "needs", example: "お客様のニーズを把握することが大切です。", exampleEn: "It's important to understand customer needs." },
    { id: 3, jp: "フォローアップ", reading: "ふぉろーあっぷ", en: "follow-up", example: "商談後は必ずフォローアップをします。", exampleEn: "We always do follow-up after business meetings." },
    { id: 4, jp: "アプローチ", reading: "あぷろーち", en: "approach", example: "新規顧客へのアプローチを考えます。", exampleEn: "I will think of an approach to new customers." },
    { id: 5, jp: "ソリューション", reading: "そりゅーしょん", en: "solution", example: "お客様の課題に合ったソリューションを提案します。", exampleEn: "We will propose a solution suited to the customer's issues." },
    { id: 6, jp: "ヒアリング", reading: "ひありんぐ", en: "fact-finding / hearing", example: "最初はクライアントへのヒアリングから始めます。", exampleEn: "We start with fact-finding from the client." },
    { id: 7, jp: "コンタクト", reading: "こんたくと", en: "contact", example: "担当者にコンタクトを取ってください。", exampleEn: "Please contact the person in charge." },
    { id: 8, jp: "アフターサービス", reading: "あふたーさーびす", en: "after-service", example: "購入後のアフターサービスも充実しています。", exampleEn: "After-service following purchase is also substantial." },
    { id: 9, jp: "オファー", reading: "おふぁー", en: "offer", example: "特別なオファーを提案させてください。", exampleEn: "Please allow me to propose a special offer." },
    { id: 10, jp: "リテンション", reading: "りてんしょん", en: "retention", example: "顧客リテンション率を上げるための施策が必要です。", exampleEn: "Measures are needed to increase customer retention rate." },
  ],
  quiz: [
    { id: 1, question: "「顧客が求めていること・必要としていること」を表す言葉は？", options: ["アプローチ", "ニーズ", "ソリューション", "オファー"], correct: 1, explanation: "ニーズ（needs）は顧客が必要としているもの・求めていることを意味します。" },
    { id: 2, question: "商談後にお客様に連絡して関係を維持することを何といいますか？", options: ["コンタクト", "フォローアップ", "ヒアリング", "リテンション"], correct: 1, explanation: "フォローアップ（follow-up）は商談後の連絡や関係維持のための行動です。" },
    { id: 3, question: "顧客の課題や状況を詳しく聞いて「情報収集すること」を何といいますか？", options: ["クライアント", "アフターサービス", "ヒアリング", "アプローチ"], correct: 2, explanation: "ヒアリング（hearing）は顧客から詳しく話を聞いて情報収集することです。" },
    { id: 4, question: "顧客の悩みや課題を解決するための「提案・手段」を何といいますか？", options: ["ソリューション", "コンタクト", "リテンション", "フォローアップ"], correct: 0, explanation: "ソリューション（solution）は顧客の課題を解決するための製品・サービス・手段のことです。" },
    { id: 5, question: "既存顧客に継続して取引を続けてもらうことを何といいますか？", options: ["オファー", "アプローチ", "ニーズ", "リテンション"], correct: 3, explanation: "リテンション（retention）は顧客を維持・保持し続けることです。" },
  ],
};

// ---- UNIT 10: キャリア・成長 ----
const unit10Data: UnitData = {
  id: 10,
  title: "キャリア・成長",
  titleEn: "Career & Growth",
  vocab: [
    { id: 1, jp: "スキルアップ", reading: "すきるあっぷ", en: "skill improvement", example: "資格取得でスキルアップを目指しています。", exampleEn: "I am aiming to improve my skills by obtaining certifications." },
    { id: 2, jp: "キャリアパス", reading: "きゃりあぱす", en: "career path", example: "5年後のキャリアパスについて相談しました。", exampleEn: "I consulted about my career path for 5 years ahead." },
    { id: 3, jp: "モチベーション", reading: "もちべーしょん", en: "motivation", example: "モチベーションを維持することが大切です。", exampleEn: "It's important to maintain motivation." },
    { id: 4, jp: "ポテンシャル", reading: "ぽてんしゃる", en: "potential", example: "彼女はポテンシャルが高い人材です。", exampleEn: "She is a person with high potential." },
    { id: 5, jp: "コンピテンシー", reading: "こんぴてんしー", en: "competency", example: "評価にはコンピテンシーモデルが使われます。", exampleEn: "A competency model is used in evaluations." },
    { id: 6, jp: "ワークライフバランス", reading: "わーくらいふばらんす", en: "work-life balance", example: "ワークライフバランスを大切にしています。", exampleEn: "We value work-life balance." },
    { id: 7, jp: "セルフマネジメント", reading: "せるふまねじめんと", en: "self-management", example: "セルフマネジメントができると評価が上がります。", exampleEn: "Good self-management leads to higher evaluation." },
    { id: 8, jp: "マインドセット", reading: "まいんどせっと", en: "mindset", example: "成長マインドセットを持つことが大事です。", exampleEn: "It's important to have a growth mindset." },
    { id: 9, jp: "アップスキリング", reading: "あっぷすきりんぐ", en: "upskilling", example: "AIの普及でアップスキリングが求められています。", exampleEn: "With the spread of AI, upskilling is being demanded." },
    { id: 10, jp: "ロールモデル", reading: "ろーるもでる", en: "role model", example: "上司をロールモデルとして学んでいます。", exampleEn: "I am learning with my supervisor as a role model." },
  ],
  quiz: [
    { id: 1, question: "将来の仕事・昇進の道筋を計画したものを何といいますか？", options: ["スキルアップ", "キャリアパス", "ロールモデル", "ポテンシャル"], correct: 1, explanation: "キャリアパス（career path）は将来の職歴やポジションへの道筋のことです。" },
    { id: 2, question: "仕事への意欲・やる気のことを何といいますか？", options: ["コンピテンシー", "マインドセット", "モチベーション", "アップスキリング"], correct: 2, explanation: "モチベーション（motivation）は仕事への意欲・やる気・動機のことです。" },
    { id: 3, question: "仕事とプライベートのバランスを保つことを何といいますか？", options: ["セルフマネジメント", "ワークライフバランス", "ロールモデル", "スキルアップ"], correct: 1, explanation: "ワークライフバランス（work-life balance）は仕事と私生活のバランスを取ることです。" },
    { id: 4, question: "自分の行動・時間・感情を自分でコントロールする能力を何といいますか？", options: ["マインドセット", "ポテンシャル", "セルフマネジメント", "コンピテンシー"], correct: 2, explanation: "セルフマネジメント（self-management）は自己管理能力のことです。" },
    { id: 5, question: "行動や考え方の「手本となる人物」を何といいますか？", options: ["ロールモデル", "キャリアパス", "アップスキリング", "スキルアップ"], correct: 0, explanation: "ロールモデル（role model）は行動や考え方の手本となる人物のことです。" },
  ],
};

// ---- エクスポート ----
export const katakanaDataMap: Record<number, UnitData> = {
  1: unit1Data,
  2: unit2Data,
  3: unit3Data,
  4: unit4Data,
  5: unit5Data,
  6: unit6Data,
  7: unit7Data,
  8: unit8Data,
  9: unit9Data,
  10: unit10Data,
};
