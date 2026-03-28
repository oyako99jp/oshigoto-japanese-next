// data.ts - 面接日本語 ユニットデータ

export const units = [
  { id: 1, title: "履歴書・職務経歴書の基本", titleEn: "Resume & Work History Basics", available: true },
  { id: 2, title: "志望動機の伝え方", titleEn: "Expressing Your Motivation", available: true },
  { id: 3, title: "自己紹介・自己PR", titleEn: "Self-Introduction & Self-PR", available: true },
  { id: 4, title: "職歴・スキルの説明", titleEn: "Explaining Work History & Skills", available: true },
  { id: 5, title: "よくある質問①", titleEn: "Common Questions Part 1", available: true },
  { id: 6, title: "よくある質問②", titleEn: "Common Questions Part 2", available: true },
  { id: 7, title: "よくある質問③", titleEn: "Common Questions Part 3", available: true },
  { id: 8, title: "逆質問", titleEn: "Questions to Ask the Interviewer", available: true },
  { id: 9, title: "面接のマナー・ビジネス敬語", titleEn: "Interview Etiquette & Keigo", available: true },
  { id: 10, title: "給与・条件の確認", titleEn: "Salary & Conditions Discussion", available: true },
];

// ---- UNIT 1: 履歴書・職務経歴書の基本 ----
export const unit1Data = {
  id: 1,
  title: "履歴書・職務経歴書の基本",
  titleEn: "Resume & Work History Basics",
  vocab: [
    { id: 1, jp: "履歴書", reading: "りれきしょ", en: "resume / CV", example: "履歴書を送付しました。", exampleEn: "I have sent my resume." },
    { id: 2, jp: "職務経歴書", reading: "しょくむけいれきしょ", en: "work history document", example: "職務経歴書には実績を書きました。", exampleEn: "I wrote my achievements in my work history document." },
    { id: 3, jp: "学歴", reading: "がくれき", en: "educational history", example: "学歴を時系列で記載してください。", exampleEn: "Please list your educational history in chronological order." },
    { id: 4, jp: "職歴", reading: "しょくれき", en: "work history", example: "職歴は3社あります。", exampleEn: "I have work history at 3 companies." },
    { id: 5, jp: "資格", reading: "しかく", en: "qualification / certificate", example: "ITパスポートの資格を持っています。", exampleEn: "I have an IT Passport certification." },
    { id: 6, jp: "実績", reading: "じっせき", en: "achievements / results", example: "具体的な実績を書いてください。", exampleEn: "Please write about specific achievements." },
    { id: 7, jp: "記載する", reading: "きさいする", en: "to fill in / to write", example: "連絡先を記載してください。", exampleEn: "Please fill in your contact details." },
    { id: 8, jp: "スキル", reading: "すきる", en: "skills", example: "ITスキルが高く評価されました。", exampleEn: "My IT skills were highly evaluated." },
    { id: 9, jp: "送付する", reading: "そうふする", en: "to send / to submit", example: "明日までに書類を送付します。", exampleEn: "I will send the documents by tomorrow." },
    { id: 10, jp: "添付する", reading: "てんぷする", en: "to attach", example: "履歴書を添付してメールを送りました。", exampleEn: "I sent an email with my resume attached." },
  ],
  conversations: [
    {
      id: 1, title: "応募書類の確認", sceneEn: "HR explains what documents are needed for the application.",
      lines: [
        { speaker: "人事", role: "HR", jp: "応募書類として、履歴書と職務経歴書をご用意ください。", en: "Please prepare a resume and work history document as your application materials." },
        { speaker: "Alex", role: "You", jp: "わかりました。フォーマットはどちらでもよいですか？", en: "Understood. Is any format acceptable?" },
        { speaker: "人事", role: "HR", jp: "はい、当社指定のフォーマットはありません。ただし、写真を貼付してください。", en: "Yes, we don't have a specific format. However, please attach a photo." },
        { speaker: "Alex", role: "You", jp: "承知しました。メールに添付してお送りすればよいですか？", en: "Understood. Should I send them as email attachments?" },
        { speaker: "人事", role: "HR", jp: "はい、PDFで送付をお願いします。", en: "Yes, please send them as PDFs." },
      ]
    },
    {
      id: 2, title: "職務経歴書の書き方相談", sceneEn: "Asking a senior colleague about how to write a work history document.",
      lines: [
        { speaker: "Alex", role: "You", jp: "先輩、職務経歴書の書き方で相談があるのですが、少しよろしいですか？", en: "Excuse me, could I ask you about how to write a work history document?" },
        { speaker: "先輩", role: "Senior", jp: "もちろん。職務経歴書は、プロジェクトの規模や実績を具体的に書くのがポイントですよ。", en: "Of course. The key to a work history document is to write specifically about project scale and achievements." },
        { speaker: "Alex", role: "You", jp: "数字で表現するのがよいと聞きましたが、例えばどのように書けばいいですか？", en: "I heard it's good to express things in numbers — how would I write that for example?" },
        { speaker: "先輩", role: "Senior", jp: "例えば『チーム10名のプロジェクトで、開発工数を20%削減しました』というようにですね。", en: "For example, 'In a 10-person team project, I reduced development effort by 20%'." },
        { speaker: "Alex", role: "You", jp: "なるほど。ありがとうございます。参考にします。", en: "I see. Thank you. I'll use that as a reference." },
      ]
    },
  ],
  quiz: [
    { id: 1, question: "応募のために書類を提出する際に使う動詞は？", hint: "To send documents formally", choices: ["送付する", "送る", "渡す", "届ける"], answer: "送付する" },
    { id: 2, question: "学校を卒業するまでの経歴を何といいますか？", hint: "Educational background", choices: ["職歴", "学歴", "経歴", "資格"], answer: "学歴" },
    { id: 3, question: "仕事で達成したことを表す言葉は？", hint: "Achievements / results", choices: ["スキル", "実績", "経験", "担当"], answer: "実績" },
    { id: 4, question: "ファイルをメールに添付する際の正しい表現は？", hint: "To attach (formal)", choices: ["つける", "貼る", "添付する", "送る"], answer: "添付する" },
  ],
  answerVariants: {},
  quizTip: "履歴書・職務経歴書でよく使う書き言葉を練習しましょう。",
  roleplay: [
    {
      key: "A",
      label: "書類選考の電話対応",
      descJp: "採用担当から書類についての確認電話が来ました。丁寧に対応してください。",
      desc: "You receive a call from HR about your application documents. Respond politely.",
      points: [
        "電話での丁寧な受け答えを練習する",
        "「承知しました」「かしこまりました」の使い方",
        "確認事項を聞き返すフレーズ",
      ]
    },
    {
      key: "B",
      label: "書類の内容説明",
      descJp: "面接官から「職務経歴書について教えてください」と言われました。自分の経歴を説明してください。",
      desc: "The interviewer asks you to explain your work history document. Describe your background.",
      points: [
        "職務経歴書の内容を口頭で説明する",
        "実績を数字で表現する練習",
        "専門用語を平易な言葉で説明する",
      ]
    },
  ],
};

// ---- UNIT 2: 志望動機の伝え方 ----
export const unit2Data = {
  id: 2,
  title: "志望動機の伝え方",
  titleEn: "Expressing Your Motivation",
  vocab: [
    { id: 1, jp: "志望動機", reading: "しぼうどうき", en: "reason for applying / motivation", example: "志望動機を教えてください。", exampleEn: "Please tell me your reason for applying." },
    { id: 2, jp: "貴社", reading: "きしゃ", en: "your company (written form)", example: "貴社の事業に魅力を感じました。", exampleEn: "I found your company's business very attractive." },
    { id: 3, jp: "御社", reading: "おんしゃ", en: "your company (spoken form)", example: "御社を志望した理由は…", exampleEn: "The reason I'm applying to your company is..." },
    { id: 4, jp: "魅力", reading: "みりょく", en: "appeal / attraction", example: "グローバルな環境が魅力です。", exampleEn: "The global environment is very appealing." },
    { id: 5, jp: "貢献する", reading: "こうけんする", en: "to contribute", example: "会社の成長に貢献したいです。", exampleEn: "I want to contribute to the company's growth." },
    { id: 6, jp: "理念", reading: "りねん", en: "philosophy / mission", example: "御社の理念に共感しています。", exampleEn: "I resonate with your company's philosophy." },
    { id: 7, jp: "成長する", reading: "せいちょうする", en: "to grow / develop", example: "自分のスキルを成長させたいです。", exampleEn: "I want to grow my skills." },
    { id: 8, jp: "活躍する", reading: "かつやくする", en: "to play an active role", example: "貴社で活躍したいと思っています。", exampleEn: "I hope to play an active role at your company." },
    { id: 9, jp: "熱意", reading: "ねつい", en: "enthusiasm / passion", example: "仕事への熱意を持っています。", exampleEn: "I have great enthusiasm for my work." },
    { id: 10, jp: "挑戦する", reading: "ちょうせんする", en: "to challenge / take on", example: "新しいことに挑戦したいです。", exampleEn: "I want to take on new challenges." },
  ],
  conversations: [
    {
      id: 1, title: "志望動機を答える", sceneEn: "The interviewer asks why you want to join the company.",
      lines: [
        { speaker: "面接官", role: "Interviewer", jp: "弊社を志望した理由を教えていただけますか？", en: "Could you tell us why you want to join our company?" },
        { speaker: "Alex", role: "You", jp: "はい。御社を志望した主な理由は2つあります。まず、御社の「技術で社会を変える」という理念に深く共感しているからです。", en: "Yes. I have two main reasons for applying to your company. First, I strongly resonate with your philosophy of 'changing society through technology.'" },
        { speaker: "Alex", role: "You", jp: "次に、御社のグローバルな開発環境で、自分のスキルをさらに成長させたいと思ったからです。", en: "Second, I want to further develop my skills in your company's global development environment." },
        { speaker: "面接官", role: "Interviewer", jp: "ありがとうございます。具体的にどのような点でグローバル環境を魅力に感じましたか？", en: "Thank you. Specifically, what aspects of the global environment did you find appealing?" },
        { speaker: "Alex", role: "You", jp: "御社のホームページで、海外拠点との協業プロジェクトが多いと知り、国際的な経験を積めると感じました。", en: "From your website, I learned there are many collaborative projects with overseas offices, so I felt I could gain international experience." },
      ]
    },
    {
      id: 2, title: "転職理由と志望動機の関連付け", sceneEn: "Connecting your reason for changing jobs to why you want this position.",
      lines: [
        { speaker: "面接官", role: "Interviewer", jp: "転職を考えたきっかけは何ですか？", en: "What made you consider changing jobs?" },
        { speaker: "Alex", role: "You", jp: "現職では多くのことを学びましたが、より大きな規模のプロジェクトに携わりたいという気持ちが強くなりました。", en: "I've learned a great deal at my current job, but I've developed a strong desire to be involved in larger-scale projects." },
        { speaker: "面接官", role: "Interviewer", jp: "そういう意味では、弊社のプロジェクト規模はいかがですか？", en: "In that sense, how do you find our company's project scale?" },
        { speaker: "Alex", role: "You", jp: "御社のプロジェクトは国内外に及ぶ大規模なものが多く、自分の挑戦心を活かせると確信しています。", en: "I'm confident that your company's many large-scale projects, both domestic and international, will allow me to put my spirit of challenge to use." },
      ]
    },
  ],
  quiz: [
    { id: 1, question: "面接（話し言葉）で「あなたの会社」を敬語で言うと？", hint: "Used when speaking, not writing", choices: ["貴社", "御社", "会社様", "御会社"], answer: "御社" },
    { id: 2, question: "書き言葉で「あなたの会社」を敬語で言うと？", hint: "Used in written documents", choices: ["御社", "貴社", "お会社", "会社様"], answer: "貴社" },
    { id: 3, question: "会社の基本的な考え方や価値観を表す言葉は？", hint: "Company philosophy / mission", choices: ["実績", "理念", "方針", "目標"], answer: "理念" },
    { id: 4, question: "「会社の発展に協力したい」を表す言葉は？", hint: "To contribute to the company", choices: ["貢献する", "参加する", "支援する", "活躍する"], answer: "貢献する" },
  ],
  answerVariants: {},
  quizTip: "「御社」と「貴社」の使い分けは面接の基本です。",
  roleplay: [
    {
      key: "A",
      label: "志望動機を1分で答える",
      descJp: "「志望動機を教えてください」という質問に、1分程度で答えてください。",
      desc: "Answer the question 'Please tell us your motivation for applying' in about one minute.",
      points: [
        "「御社を志望した理由は〜です」で始める",
        "具体的な理由を2〜3点挙げる",
        "最後に「貢献したい」「活躍したい」で締める",
      ]
    },
    {
      key: "B",
      label: "転職理由と結びつける",
      descJp: "「なぜ転職を考えましたか？」という質問に答え、その理由と御社への志望動機を結びつけてください。",
      desc: "Answer 'Why did you consider changing jobs?' and connect your answer to your motivation for this company.",
      points: [
        "ネガティブな転職理由をポジティブに言い換える",
        "転職理由と志望動機を一貫させる",
        "「だから御社を選びました」という流れを作る",
      ]
    },
  ],
};

// ---- UNIT 3: 自己紹介・自己PR ----
export const unit3Data = {
  id: 3,
  title: "自己紹介・自己PR",
  titleEn: "Self-Introduction & Self-PR",
  vocab: [
    { id: 1, jp: "自己PR", reading: "じこぴーあーる", en: "self-promotion / selling yourself", example: "自己PRをお願いします。", exampleEn: "Please give us your self-PR." },
    { id: 2, jp: "強み", reading: "つよみ", en: "strength / strong point", example: "私の強みはコミュニケーション力です。", exampleEn: "My strength is my communication skills." },
    { id: 3, jp: "アピールする", reading: "あぴーるする", en: "to appeal / to highlight", example: "自分のスキルをアピールしてください。", exampleEn: "Please highlight your skills." },
    { id: 4, jp: "リーダーシップ", reading: "りーだーしっぷ", en: "leadership", example: "リーダーシップを発揮しました。", exampleEn: "I demonstrated leadership." },
    { id: 5, jp: "課題解決", reading: "かだいかいけつ", en: "problem solving", example: "課題解決能力が高いと言われます。", exampleEn: "I'm told I have strong problem-solving ability." },
    { id: 6, jp: "向上心", reading: "こうじょうしん", en: "ambition / desire to improve", example: "向上心を持って働いています。", exampleEn: "I work with a desire to improve." },
    { id: 7, jp: "協調性", reading: "きょうちょうせい", en: "teamwork / cooperativeness", example: "協調性があることが強みです。", exampleEn: "My cooperativeness is a strength." },
    { id: 8, jp: "主体的", reading: "しゅたいてき", en: "proactive / self-driven", example: "主体的に仕事に取り組んでいます。", exampleEn: "I approach work proactively." },
    { id: 9, jp: "継続力", reading: "けいぞくりょく", en: "perseverance / consistency", example: "継続力があることが私の強みです。", exampleEn: "My strength is my perseverance." },
    { id: 10, jp: "論理的", reading: "ろんりてき", en: "logical", example: "論理的に物事を考えることが得意です。", exampleEn: "I'm good at thinking logically." },
  ],
  conversations: [
    {
      id: 1, title: "面接冒頭での自己紹介", sceneEn: "The interviewer asks you to introduce yourself at the start of the interview.",
      lines: [
        { speaker: "面接官", role: "Interviewer", jp: "それでは、まず自己紹介をお願いします。", en: "Let's start with your self-introduction." },
        { speaker: "Alex", role: "You", jp: "はい。Alexと申します。現在はITエンジニアとして5年間、主にバックエンド開発に携わってまいりました。", en: "Yes. My name is Alex. I have been working as an IT engineer for 5 years, mainly in backend development." },
        { speaker: "Alex", role: "You", jp: "これまで10名規模のチームでプロジェクトリーダーを務めた経験があり、チームマネジメントにも自信があります。本日はよろしくお願いいたします。", en: "I have experience as a project leader in a team of 10 people and am confident in team management. Thank you for having me today." },
        { speaker: "面接官", role: "Interviewer", jp: "ありがとうございます。バックエンド開発で主に使われた技術を教えていただけますか？", en: "Thank you. Could you tell us about the main technologies you used in backend development?" },
      ]
    },
    {
      id: 2, title: "自己PRを答える", sceneEn: "The interviewer asks for your self-PR.",
      lines: [
        { speaker: "面接官", role: "Interviewer", jp: "自己PRをお願いします。", en: "Please give us your self-PR." },
        { speaker: "Alex", role: "You", jp: "私の強みは課題解決能力です。前職では、システムの処理速度が遅いという課題がありました。", en: "My strength is my problem-solving ability. At my previous job, there was an issue with slow system processing speed." },
        { speaker: "Alex", role: "You", jp: "私はデータを分析し、ボトルネックを特定することで、処理速度を40%改善することができました。", en: "By analyzing data and identifying bottlenecks, I was able to improve processing speed by 40%." },
        { speaker: "Alex", role: "You", jp: "このような主体的に課題に向き合う姿勢を、御社でも活かしたいと考えています。", en: "I would like to apply this proactive approach to challenges at your company as well." },
        { speaker: "面接官", role: "Interviewer", jp: "すばらしいですね。その経験についてもう少し詳しく聞かせてください。", en: "That's impressive. Could you tell us a bit more about that experience?" },
      ]
    },
  ],
  quiz: [
    { id: 1, question: "「自分をアピールする」面接でのプレゼンを何といいますか？", hint: "Self-promotion in an interview", choices: ["自己紹介", "自己PR", "志望動機", "自己評価"], answer: "自己PR" },
    { id: 2, question: "「自分から積極的に行動する」性格を何といいますか？", hint: "Proactive / self-driven", choices: ["協調性", "継続力", "主体的", "論理的"], answer: "主体的" },
    { id: 3, question: "チームで協力して働く能力を何といいますか？", hint: "Cooperativeness / teamwork", choices: ["リーダーシップ", "課題解決", "協調性", "向上心"], answer: "協調性" },
    { id: 4, question: "自己PRで「強みを___してください」という表現は？", hint: "To highlight / appeal", choices: ["紹介", "アピール", "説明", "報告"], answer: "アピール" },
  ],
  answerVariants: {},
  quizTip: "自己PRは具体的なエピソードと数字で伝えるのが効果的です。",
  roleplay: [
    {
      key: "A",
      label: "1分間の自己PR",
      descJp: "「自己PRをお願いします」に対して、自分の強みとエピソードを1分で話してください。",
      desc: "Respond to 'Please give us your self-PR' with your strength and a specific episode in one minute.",
      points: [
        "「私の強みは〜です」で始める",
        "具体的なエピソードを入れる",
        "「御社でも〜したい」で締める",
      ]
    },
    {
      key: "B",
      label: "強みの深掘り",
      descJp: "「もう少し詳しく教えてください」という深掘り質問に答えてください。",
      desc: "Answer follow-up question: 'Could you tell us more about that?'",
      points: [
        "STAR法（状況・課題・行動・結果）を使って説明する",
        "数字や具体例を挙げる",
        "簡潔に、でも具体的に答える",
      ]
    },
  ],
};

// ---- UNIT 4: 職歴・スキルの説明 ----
export const unit4Data = {
  id: 4,
  title: "職歴・スキルの説明",
  titleEn: "Explaining Work History & Skills",
  vocab: [
    { id: 1, jp: "担当業務", reading: "たんとうぎょうむ", en: "assigned duties / responsibilities", example: "担当業務はシステム設計です。", exampleEn: "My assigned duties are system design." },
    { id: 2, jp: "プロジェクト規模", reading: "ぷろじぇくときぼ", en: "project scale / size", example: "プロジェクト規模は50名です。", exampleEn: "The project scale was 50 people." },
    { id: 3, jp: "成果", reading: "せいか", en: "outcome / results achieved", example: "具体的な成果を教えてください。", exampleEn: "Please tell us about your specific results." },
    { id: 4, jp: "改善", reading: "かいぜん", en: "improvement", example: "業務効率を30%改善しました。", exampleEn: "I improved operational efficiency by 30%." },
    { id: 5, jp: "スキルセット", reading: "すきるせっと", en: "skill set", example: "私のスキルセットを説明します。", exampleEn: "I'll explain my skill set." },
    { id: 6, jp: "開発経験", reading: "かいはつけいけん", en: "development experience", example: "5年間の開発経験があります。", exampleEn: "I have 5 years of development experience." },
    { id: 7, jp: "マネジメント", reading: "まねじめんと", en: "management", example: "チームのマネジメントを担当しました。", exampleEn: "I was responsible for team management." },
    { id: 8, jp: "要件定義", reading: "ようけんていぎ", en: "requirements definition", example: "要件定義からリリースまで担当しました。", exampleEn: "I was responsible from requirements definition to release." },
    { id: 9, jp: "専門知識", reading: "せんもんちしき", en: "specialized knowledge", example: "AIに関する専門知識があります。", exampleEn: "I have specialized knowledge in AI." },
    { id: 10, jp: "携わる", reading: "たずさわる", en: "to be involved in", example: "大規模プロジェクトに携わりました。", exampleEn: "I was involved in a large-scale project." },
  ],
  conversations: [
    {
      id: 1, title: "職歴の説明", sceneEn: "Explaining your work history to the interviewer.",
      lines: [
        { speaker: "面接官", role: "Interviewer", jp: "これまでの職歴について教えていただけますか？", en: "Could you tell us about your work history?" },
        { speaker: "Alex", role: "You", jp: "はい。最初の2年間はスタートアップ企業で、フロントエンド開発を担当しました。", en: "Yes. For the first two years, I was responsible for frontend development at a startup." },
        { speaker: "Alex", role: "You", jp: "その後、現職のIT企業に転職し、バックエンド開発と要件定義を担当しています。プロジェクト規模は最大20名でした。", en: "After that, I moved to my current IT company where I handle backend development and requirements definition. The maximum project scale was 20 people." },
        { speaker: "面接官", role: "Interviewer", jp: "現職での主な成果を教えていただけますか？", en: "Could you tell us about your main achievements at your current job?" },
        { speaker: "Alex", role: "You", jp: "はい。システムのレスポンス速度を40%改善し、ユーザー満足度を向上させることができました。", en: "Yes. I was able to improve system response speed by 40%, which increased user satisfaction." },
      ]
    },
    {
      id: 2, title: "スキルの説明", sceneEn: "Explaining your technical skills to the interviewer.",
      lines: [
        { speaker: "面接官", role: "Interviewer", jp: "どのようなスキルをお持ちですか？", en: "What skills do you have?" },
        { speaker: "Alex", role: "You", jp: "主なスキルとしては、PythonとJavaScriptを用いた開発経験が5年あります。クラウドはAWSを2年使用しています。", en: "My main skills include 5 years of development experience using Python and JavaScript, and 2 years using AWS for cloud." },
        { speaker: "面接官", role: "Interviewer", jp: "マネジメント経験はありますか？", en: "Do you have management experience?" },
        { speaker: "Alex", role: "You", jp: "はい。5名のチームのテックリードとして、タスク管理とコードレビューを担当した経験があります。", en: "Yes. I have experience as a tech lead for a 5-person team, responsible for task management and code reviews." },
      ]
    },
  ],
  quiz: [
    { id: 1, question: "「プロジェクトに関わる」を表す言葉は？", hint: "To be involved in", choices: ["担当する", "携わる", "参加する", "取り組む"], answer: "携わる" },
    { id: 2, question: "仕事で達成した具体的な結果を何といいますか？", hint: "Outcome / results", choices: ["担当業務", "成果", "実績", "成績"], answer: "成果" },
    { id: 3, question: "「システムの仕様を決める作業」を何といいますか？", hint: "Requirements definition", choices: ["要件定義", "システム設計", "開発工程", "テスト工程"], answer: "要件定義" },
    { id: 4, question: "特定の分野についての深い知識を何といいますか？", hint: "Specialized knowledge", choices: ["スキルセット", "専門知識", "技術力", "資格"], answer: "専門知識" },
  ],
  answerVariants: {},
  quizTip: "職歴説明は「何を担当し」「どんな成果を出したか」を具体的に伝えましょう。",
  roleplay: [
    {
      key: "A",
      label: "職歴を2分で説明する",
      descJp: "「これまでの経歴を教えてください」に対して、時系列で職歴を説明してください。",
      desc: "Explain your work history chronologically in response to 'Tell us about your background.'",
      points: [
        "「最初の〜年間は〜でした」という構造で話す",
        "各職場での担当業務を具体的に伝える",
        "成果や実績は数字で表現する",
      ]
    },
    {
      key: "B",
      label: "スキルセットの説明",
      descJp: "「あなたのスキルを教えてください」という質問に答えてください。",
      desc: "Answer the question 'What are your skills?' clearly and specifically.",
      points: [
        "スキルを「技術・マネジメント・ソフトスキル」に分けて説明する",
        "経験年数を明確に伝える",
        "御社での活用方法も伝える",
      ]
    },
  ],
};

// ---- UNIT 5: よくある質問① ----
export const unit5Data = {
  id: 5,
  title: "よくある質問①",
  titleEn: "Common Interview Questions Part 1",
  vocab: [
    { id: 1, jp: "転職理由", reading: "てんしょくりゆう", en: "reason for job change", example: "転職理由を教えてください。", exampleEn: "Please tell us your reason for changing jobs." },
    { id: 2, jp: "キャリアアップ", reading: "きゃりああっぷ", en: "career advancement", example: "キャリアアップのために転職を決めました。", exampleEn: "I decided to change jobs for career advancement." },
    { id: 3, jp: "スキルアップ", reading: "すきるあっぷ", en: "skill improvement", example: "スキルアップしたいと思っています。", exampleEn: "I want to improve my skills." },
    { id: 4, jp: "チャレンジ", reading: "ちゃれんじ", en: "challenge", example: "新しいチャレンジを求めています。", exampleEn: "I'm looking for new challenges." },
    { id: 5, jp: "前向きに", reading: "まえむきに", en: "positively / constructively", example: "前向きに考えて転職を決めました。", exampleEn: "I decided to change jobs after thinking about it positively." },
    { id: 6, jp: "一身上の都合", reading: "いっしんじょうのつごう", en: "personal reasons", example: "一身上の都合により退職しました。", exampleEn: "I resigned for personal reasons." },
    { id: 7, jp: "長期的", reading: "ちょうきてき", en: "long-term", example: "長期的なキャリアを考えています。", exampleEn: "I'm thinking about my long-term career." },
    { id: 8, jp: "活かす", reading: "いかす", en: "to make use of / to utilize", example: "経験を活かして働きたいです。", exampleEn: "I want to work making use of my experience." },
    { id: 9, jp: "さらなる", reading: "さらなる", en: "further / even more", example: "さらなる成長を目指しています。", exampleEn: "I'm aiming for further growth." },
    { id: 10, jp: "環境を変える", reading: "かんきょうをかえる", en: "to change environment", example: "新しい環境で働きたいです。", exampleEn: "I want to work in a new environment." },
  ],
  conversations: [
    {
      id: 1, title: "転職理由を答える", sceneEn: "Answering 'Why are you changing jobs?'",
      lines: [
        { speaker: "面接官", role: "Interviewer", jp: "現在の会社から転職を考えた理由は何ですか？", en: "What is your reason for wanting to leave your current company?" },
        { speaker: "Alex", role: "You", jp: "はい。現職では多くのことを学ばせていただき、感謝しています。しかし、さらなるスキルアップとキャリアアップを目指し、より大きな規模のプロジェクトに携わりたいと考えるようになりました。", en: "Yes. I'm grateful for everything I've learned at my current job. However, I've come to want to be involved in larger-scale projects in pursuit of further skill and career advancement." },
        { speaker: "面接官", role: "Interviewer", jp: "現職への不満ではなく、前向きな転職ということですね。", en: "So it's a positive career change, not dissatisfaction with your current job?" },
        { speaker: "Alex", role: "You", jp: "はい、そのとおりです。現職での経験を活かしながら、御社でさらに成長したいと考えています。", en: "Yes, that's right. I want to continue growing at your company while making use of my current experience." },
      ]
    },
    {
      id: 2, title: "退職理由をポジティブに伝える", sceneEn: "Framing a difficult reason for leaving in a positive way.",
      lines: [
        { speaker: "面接官", role: "Interviewer", jp: "前職はなぜ退職されたのですか？", en: "Why did you leave your previous job?" },
        { speaker: "Alex", role: "You", jp: "前職では、技術的な成長の機会が限られていると感じました。エンジニアとして継続的に成長するために、環境を変えることを決断しました。", en: "At my previous job, I felt that opportunities for technical growth were limited. I decided to change my environment in order to continue growing as an engineer." },
        { speaker: "面接官", role: "Interviewer", jp: "具体的にどのような点で成長の限界を感じましたか？", en: "Specifically, in what ways did you feel the limits of growth?" },
        { speaker: "Alex", role: "You", jp: "新技術の導入が少なく、同じスタックを使い続ける状況でした。長期的なキャリアを考えると、より多様な技術に触れる環境が必要だと判断しました。", en: "There were few opportunities to introduce new technologies. Considering my long-term career, I judged that I needed an environment with exposure to more diverse technologies." },
      ]
    },
  ],
  quiz: [
    { id: 1, question: "「キャリアをさらに高めること」を表す言葉は？", hint: "Career advancement", choices: ["スキルアップ", "キャリアアップ", "転職活動", "自己PR"], answer: "キャリアアップ" },
    { id: 2, question: "「過去の経験を役立てる」という意味の動詞は？", hint: "To make use of / utilize", choices: ["使う", "適用する", "活かす", "参考にする"], answer: "活かす" },
    { id: 3, question: "転職理由を答える際、ネガティブな理由を___に言い換えましょう。", hint: "Positively", choices: ["正直に", "前向きに", "具体的に", "簡潔に"], answer: "前向きに" },
    { id: 4, question: "「将来的な視点で考える」という意味の言葉は？", hint: "Long-term", choices: ["短期的", "中期的", "長期的", "継続的"], answer: "長期的" },
  ],
  answerVariants: {},
  quizTip: "転職理由はネガティブな理由もポジティブに言い換える練習をしましょう。",
  roleplay: [
    {
      key: "A",
      label: "転職理由を答える",
      descJp: "「転職理由を教えてください」に対して、ポジティブに答えてください。",
      desc: "Answer 'Tell us your reason for changing jobs' in a positive way.",
      points: [
        "「〜に感謝しているが、さらに〜したい」という構造を使う",
        "前向きな理由（成長・挑戦）を中心に話す",
        "御社への志望動機と結びつける",
      ]
    },
    {
      key: "B",
      label: "ネガティブな退職理由の言い換え",
      descJp: "不満が転職理由だったとしても、それをポジティブに言い換えて答えてください。",
      desc: "Even if dissatisfaction was your reason, reframe it positively.",
      points: [
        "不満（残業・給与など）を前向きに言い換える",
        "「成長のため」「挑戦のため」に結びつける",
        "過去を否定せず、未来を向いて答える",
      ]
    },
  ],
};

// ---- UNIT 6: よくある質問② ----
export const unit6Data = {
  id: 6,
  title: "よくある質問②",
  titleEn: "Common Interview Questions Part 2",
  vocab: [
    { id: 1, jp: "長所", reading: "ちょうしょ", en: "strengths / merits", example: "長所は何ですか？", exampleEn: "What are your strengths?" },
    { id: 2, jp: "短所", reading: "たんしょ", en: "weaknesses / shortcomings", example: "短所を教えてください。", exampleEn: "Please tell us your weaknesses." },
    { id: 3, jp: "克服する", reading: "こくふくする", en: "to overcome", example: "短所を克服するために努力しています。", exampleEn: "I'm working to overcome my weaknesses." },
    { id: 4, jp: "改善点", reading: "かいぜんてん", en: "areas for improvement", example: "自分の改善点を把握しています。", exampleEn: "I'm aware of my areas for improvement." },
    { id: 5, jp: "チームプレー", reading: "ちーむぷれー", en: "teamwork / team play", example: "チームプレーを大切にしています。", exampleEn: "I value teamwork." },
    { id: 6, jp: "コミュニケーション力", reading: "こみゅにけーしょんりょく", en: "communication skills", example: "コミュニケーション力を磨いています。", exampleEn: "I'm working to sharpen my communication skills." },
    { id: 7, jp: "完璧主義", reading: "かんぺきしゅぎ", en: "perfectionism", example: "完璧主義すぎることが短所です。", exampleEn: "Being too much of a perfectionist is my weakness." },
    { id: 8, jp: "苦手", reading: "にがて", en: "weakness / not good at", example: "プレゼンがまだ苦手です。", exampleEn: "I'm still not good at presentations." },
    { id: 9, jp: "取り組む", reading: "とりくむ", en: "to tackle / to work on", example: "課題に積極的に取り組んでいます。", exampleEn: "I actively tackle challenges." },
    { id: 10, jp: "フォロー", reading: "ふぉろー", en: "support / follow-up", example: "チームメンバーをフォローするのが得意です。", exampleEn: "I'm good at supporting team members." },
  ],
  conversations: [
    {
      id: 1, title: "長所と短所を答える", sceneEn: "Answering questions about your strengths and weaknesses.",
      lines: [
        { speaker: "面接官", role: "Interviewer", jp: "あなたの長所と短所を教えていただけますか？", en: "Could you tell us your strengths and weaknesses?" },
        { speaker: "Alex", role: "You", jp: "はい。長所は論理的な思考力と課題解決能力です。前職では、複雑なシステム障害を短時間で解決し、チームに貢献できました。", en: "Yes. My strengths are logical thinking and problem-solving ability. At my previous job, I was able to resolve complex system failures quickly and contribute to my team." },
        { speaker: "Alex", role: "You", jp: "短所は、完璧を求めすぎるところです。ただし、スケジュール管理を徹底することで改善するよう努力しています。", en: "My weakness is that I tend to demand too much perfection. However, I'm working to improve this by being thorough with schedule management." },
        { speaker: "面接官", role: "Interviewer", jp: "短所に対して自分で対処できているのはよいですね。", en: "It's good that you're able to address your weakness yourself." },
      ]
    },
    {
      id: 2, title: "チーム経験について", sceneEn: "Talking about your experience working in a team.",
      lines: [
        { speaker: "面接官", role: "Interviewer", jp: "チームで働いた経験について教えてください。", en: "Please tell us about your experience working in a team." },
        { speaker: "Alex", role: "You", jp: "前職では、5名のチームで開発を行っていました。私はチームのコミュニケーションを重視し、定期的なミーティングを提案・運営していました。", en: "At my previous job, I worked in a team of 5 people. I valued team communication and proposed and ran regular meetings." },
        { speaker: "面接官", role: "Interviewer", jp: "チームの中でどのような役割を担っていましたか？", en: "What role did you play in the team?" },
        { speaker: "Alex", role: "You", jp: "主にテックリードとして、コードレビューや新メンバーへのフォローを担当していました。チームプレーを大切にしながら成果を出せたと思います。", en: "I mainly served as tech lead, responsible for code reviews and support for new members. I think I was able to achieve results while valuing teamwork." },
      ]
    },
  ],
  quiz: [
    { id: 1, question: "「自分の弱点」を意味する言葉は？", hint: "Weaknesses / shortcomings", choices: ["長所", "短所", "改善点", "弱み"], answer: "短所" },
    { id: 2, question: "「弱点を乗り越える」という動詞は？", hint: "To overcome", choices: ["改善する", "克服する", "解決する", "修正する"], answer: "克服する" },
    { id: 3, question: "「チームで協力して仕事をすること」は？", hint: "Teamwork / team play", choices: ["コミュニケーション", "チームプレー", "協調性", "リーダーシップ"], answer: "チームプレー" },
    { id: 4, question: "「問題や課題に積極的に___」と言います。", hint: "To tackle / work on", choices: ["取り組む", "向き合う", "対処する", "解決する"], answer: "取り組む" },
  ],
  answerVariants: {},
  quizTip: "短所の答え方は「短所→改善努力中」という流れが重要です。",
  roleplay: [
    {
      key: "A",
      label: "長所と短所を答える",
      descJp: "「長所と短所を教えてください」という質問に答えてください。",
      desc: "Answer 'Tell us your strengths and weaknesses'.",
      points: [
        "長所は具体的なエピソードと共に話す",
        "短所は「〜が短所ですが、〜で改善しています」という形で答える",
        "短所をそのままで終わらせない",
      ]
    },
    {
      key: "B",
      label: "チーム経験を話す",
      descJp: "「チームでの経験を教えてください」という質問に答えてください。",
      desc: "Answer 'Tell us about your team experience.'",
      points: [
        "チームの規模・役割・成果を伝える",
        "具体的なエピソードを入れる",
        "協調性やリーダーシップをアピールする",
      ]
    },
  ],
};

// ---- UNIT 7: よくある質問③ ----
export const unit7Data = {
  id: 7,
  title: "よくある質問③",
  titleEn: "Common Interview Questions Part 3",
  vocab: [
    { id: 1, jp: "将来の目標", reading: "しょうらいのもくひょう", en: "future goals", example: "5年後の将来の目標は何ですか？", exampleEn: "What are your future goals in 5 years?" },
    { id: 2, jp: "キャリアパス", reading: "きゃりあぱす", en: "career path", example: "どのようなキャリアパスを描いていますか？", exampleEn: "What kind of career path are you envisioning?" },
    { id: 3, jp: "ビジョン", reading: "びじょん", en: "vision", example: "10年後のビジョンを教えてください。", exampleEn: "Please tell us your vision for 10 years from now." },
    { id: 4, jp: "専門家", reading: "せんもんか", en: "expert / specialist", example: "AIの専門家になりたいです。", exampleEn: "I want to become an AI expert." },
    { id: 5, jp: "マネージャー", reading: "まねーじゃー", en: "manager", example: "将来はマネージャーを目指しています。", exampleEn: "I aim to become a manager in the future." },
    { id: 6, jp: "身につける", reading: "みにつける", en: "to acquire / to master", example: "新しいスキルを身につけたいです。", exampleEn: "I want to acquire new skills." },
    { id: 7, jp: "幅広い", reading: "はばひろい", en: "wide-ranging / broad", example: "幅広い経験を積みたいです。", exampleEn: "I want to gain wide-ranging experience." },
    { id: 8, jp: "リードする", reading: "りーどする", en: "to lead", example: "チームをリードする立場になりたいです。", exampleEn: "I want to be in a position to lead the team." },
    { id: 9, jp: "貢献", reading: "こうけん", en: "contribution", example: "社会への貢献を意識しています。", exampleEn: "I'm conscious of contributing to society." },
    { id: 10, jp: "中長期", reading: "ちゅうちょうき", en: "medium to long-term", example: "中長期のキャリアを考えています。", exampleEn: "I'm thinking about my medium to long-term career." },
  ],
  conversations: [
    {
      id: 1, title: "5年後のキャリアビジョン", sceneEn: "Answering about your vision 5 years from now.",
      lines: [
        { speaker: "面接官", role: "Interviewer", jp: "5年後、どのようなエンジニアになっていたいですか？", en: "What kind of engineer do you want to be in 5 years?" },
        { speaker: "Alex", role: "You", jp: "5年後は、クラウドアーキテクチャの専門家として、システム設計全体をリードできるエンジニアを目指しています。", en: "In 5 years, I aim to be an engineer who can lead overall system design as a cloud architecture expert." },
        { speaker: "面接官", role: "Interviewer", jp: "御社でそのキャリアパスを実現できると思う理由は？", en: "Why do you think you can achieve that career path at our company?" },
        { speaker: "Alex", role: "You", jp: "御社はクラウド事業に力を入れており、大規模プロジェクトを通じて幅広い経験を積めると考えています。", en: "Your company focuses on cloud business, and I think I can gain wide-ranging experience through large-scale projects." },
      ]
    },
    {
      id: 2, title: "将来のビジョンと会社への貢献", sceneEn: "Connecting future vision to contribution to the company.",
      lines: [
        { speaker: "面接官", role: "Interviewer", jp: "10年後の目標を教えていただけますか？", en: "Could you tell us about your goals 10 years from now?" },
        { speaker: "Alex", role: "You", jp: "10年後は、技術とマネジメントの両方を兼ね備えたリーダーとして、チームをリードする立場になりたいと思っています。", en: "In 10 years, I want to be in a leadership position, leading a team with both technical and management capabilities." },
        { speaker: "Alex", role: "You", jp: "御社での経験を通じて、エンジニアとしての専門性を高めながら、チームや会社の成長に貢献していきたいです。", en: "Through experience at your company, I want to deepen my expertise as an engineer while contributing to the growth of the team and company." },
        { speaker: "面接官", role: "Interviewer", jp: "ありがとうございます。そのような人材を私たちも求めています。", en: "Thank you. That's exactly the kind of person we're looking for." },
      ]
    },
  ],
  quiz: [
    { id: 1, question: "「将来どんな道を進むか」の計画を何といいますか？", hint: "Career path", choices: ["キャリアアップ", "キャリアパス", "ビジョン", "目標"], answer: "キャリアパス" },
    { id: 2, question: "「特定の分野で深い知識を持つ人」を何といいますか？", hint: "Expert / specialist", choices: ["スペシャリスト", "専門家", "マネージャー", "リーダー"], answer: "専門家" },
    { id: 3, question: "「スキルを習得する」という表現は？", hint: "To acquire / master", choices: ["学ぶ", "覚える", "身につける", "習う"], answer: "身につける" },
    { id: 4, question: "「多様な分野にまたがる経験」を___経験といいます。", hint: "Wide-ranging", choices: ["深い", "幅広い", "豊富な", "多様な"], answer: "幅広い" },
  ],
  answerVariants: {},
  quizTip: "将来のビジョンは「個人の成長」と「会社への貢献」の両方を含めると効果的です。",
  roleplay: [
    {
      key: "A",
      label: "5年後のキャリアビジョン",
      descJp: "「5年後はどのようなエンジニアになりたいですか？」という質問に答えてください。",
      desc: "Answer 'What kind of engineer do you want to be in 5 years?'",
      points: [
        "具体的な役職・スキルを伝える",
        "御社でその目標を達成できる理由を述べる",
        "会社への貢献にも言及する",
      ]
    },
    {
      key: "B",
      label: "会社への貢献を話す",
      descJp: "「弊社でどのように貢献できますか？」という質問に答えてください。",
      desc: "Answer 'How can you contribute to our company?'",
      points: [
        "自分のスキル・経験と会社のニーズを結びつける",
        "具体的な貢献方法を提示する",
        "長期的な視点で話す",
      ]
    },
  ],
};

// ---- UNIT 8: 逆質問 ----
export const unit8Data = {
  id: 8,
  title: "逆質問",
  titleEn: "Questions to Ask the Interviewer",
  vocab: [
    { id: 1, jp: "逆質問", reading: "ぎゃくしつもん", en: "questions from the candidate to the interviewer", example: "逆質問はありますか？", exampleEn: "Do you have any questions for us?" },
    { id: 2, jp: "入社後", reading: "にゅうしゃご", en: "after joining / after starting", example: "入社後はどのようなプロジェクトに携わりますか？", exampleEn: "What projects will I be involved in after joining?" },
    { id: 3, jp: "研修制度", reading: "けんしゅうせいど", en: "training / onboarding system", example: "研修制度について教えてください。", exampleEn: "Could you tell me about your training system?" },
    { id: 4, jp: "評価制度", reading: "ひょうかせいど", en: "performance evaluation system", example: "評価制度はどのようになっていますか？", exampleEn: "How does your performance evaluation system work?" },
    { id: 5, jp: "職場環境", reading: "しょくばかんきょう", en: "work environment", example: "職場環境について聞かせてください。", exampleEn: "Could you tell me about the work environment?" },
    { id: 6, jp: "チームの雰囲気", reading: "ちーむのふんいき", en: "team atmosphere", example: "チームの雰囲気を教えてください。", exampleEn: "Could you describe the team atmosphere?" },
    { id: 7, jp: "裁量", reading: "さいりょう", en: "discretion / autonomy", example: "仕事の裁量はどのくらいありますか？", exampleEn: "How much autonomy is there in the work?" },
    { id: 8, jp: "キャリア形成", reading: "きゃりあけいせい", en: "career development", example: "キャリア形成のサポートはありますか？", exampleEn: "Is there support for career development?" },
    { id: 9, jp: "課題", reading: "かだい", en: "challenge / issue (for the team/company)", example: "現在チームが抱えている課題は何ですか？", exampleEn: "What challenges is the team currently facing?" },
    { id: 10, jp: "入社を決める", reading: "にゅうしゃをきめる", en: "to decide to join", example: "御社に入社を決めた理由は何ですか？", exampleEn: "What made you decide to join this company?" },
  ],
  conversations: [
    {
      id: 1, title: "面接終盤での逆質問", sceneEn: "Asking questions at the end of the interview.",
      lines: [
        { speaker: "面接官", role: "Interviewer", jp: "最後に、何かご質問はありますか？", en: "Finally, do you have any questions for us?" },
        { speaker: "Alex", role: "You", jp: "はい、2点お聞きしたいことがあります。まず、入社後は最初どのようなプロジェクトに携わることになりますか？", en: "Yes, I have two questions. First, what kind of project would I be involved in when I first join?" },
        { speaker: "面接官", role: "Interviewer", jp: "最初の3か月は既存プロジェクトのキャッチアップ期間として、メンターとペアを組んで働いてもらいます。", en: "For the first 3 months, you'll work in pairs with a mentor during the project catch-up period." },
        { speaker: "Alex", role: "You", jp: "ありがとうございます。2点目ですが、エンジニアのキャリア形成のサポートはどのようなものがありますか？", en: "Thank you. For my second question — what kind of support is available for engineer career development?" },
        { speaker: "面接官", role: "Interviewer", jp: "資格取得の補助や、年2回のキャリア面談、社内勉強会などがあります。", en: "We have qualification acquisition subsidies, bi-annual career consultations, and internal study groups." },
      ]
    },
    {
      id: 2, title: "入社意欲を示す逆質問", sceneEn: "Asking a question that shows your enthusiasm for joining.",
      lines: [
        { speaker: "Alex", role: "You", jp: "御社のエンジニアは、日々の業務でどのような技術的な課題に取り組んでいますか？", en: "What kind of technical challenges do your engineers work on in their daily work?" },
        { speaker: "面接官", role: "Interviewer", jp: "今は特に、大規模データの処理とクラウドへの移行が大きな課題です。", en: "Currently, large-scale data processing and cloud migration are major challenges." },
        { speaker: "Alex", role: "You", jp: "まさに私が以前携わっていた分野です。ぜひ貢献できると思います。チームのエンジニアは何名くらいいらっしゃいますか？", en: "Those are exactly the areas I've been involved in before. I'm confident I can contribute. How many engineers are on the team?" },
        { speaker: "面接官", role: "Interviewer", jp: "現在は15名で、今後も拡大予定です。", en: "Currently there are 15 people, with plans to expand further." },
      ]
    },
  ],
  quiz: [
    { id: 1, question: "面接で「候補者から面接官への質問」を何といいますか？", hint: "Questions from candidate to interviewer", choices: ["追加質問", "逆質問", "確認質問", "フォローアップ"], answer: "逆質問" },
    { id: 2, question: "「入社してからの教育・育成の仕組み」を何といいますか？", hint: "Training / onboarding system", choices: ["評価制度", "研修制度", "勤務制度", "採用制度"], answer: "研修制度" },
    { id: 3, question: "「仕事を自分の判断で進められる度合い」を何といいますか？", hint: "Discretion / autonomy", choices: ["責任", "裁量", "自由", "権限"], answer: "裁量" },
    { id: 4, question: "「自分のキャリアを作っていくこと」を何といいますか？", hint: "Career development", choices: ["キャリアアップ", "キャリア形成", "スキルアップ", "自己研鑽"], answer: "キャリア形成" },
  ],
  answerVariants: {},
  quizTip: "逆質問は「入社意欲を示す質問」が効果的です。給与など条件面は最初に聞かないようにしましょう。",
  roleplay: [
    {
      key: "A",
      label: "逆質問を2つ以上する",
      descJp: "「何かご質問はありますか？」に対して、入社意欲が伝わる逆質問を2つ以上してください。",
      desc: "Ask 2 or more questions that show your enthusiasm when asked 'Do you have any questions?'",
      points: [
        "「入社後のプロジェクト」「研修制度」「チームの課題」などを質問する",
        "自分のスキルと結びつけた質問をする",
        "「ありがとうございます。参考になりました」で締める",
      ]
    },
    {
      key: "B",
      label: "NG質問を避ける",
      descJp: "逆質問でNG（不適切）な質問を避け、適切な質問だけを選んでください。",
      desc: "Avoid inappropriate questions and choose only appropriate ones for your reverse questions.",
      points: [
        "給与・残業時間は最初に聞かない",
        "「すでに調べればわかること」は聞かない",
        "「入社したら〜できますか？」という前向きな質問をする",
      ]
    },
  ],
};

// ---- UNIT 9: 面接のマナー・ビジネス敬語 ----
export const unit9Data = {
  id: 9,
  title: "面接のマナー・ビジネス敬語",
  titleEn: "Interview Etiquette & Business Keigo",
  vocab: [
    { id: 1, jp: "敬語", reading: "けいご", en: "honorific language / keigo", example: "面接では敬語を使ってください。", exampleEn: "Please use honorific language in interviews." },
    { id: 2, jp: "お辞儀", reading: "おじぎ", en: "bow", example: "入室時にお辞儀をしてください。", exampleEn: "Please bow when entering the room." },
    { id: 3, jp: "入室する", reading: "にゅうしつする", en: "to enter a room", example: "ノックしてから入室します。", exampleEn: "I knock before entering." },
    { id: 4, jp: "退室する", reading: "たいしつする", en: "to leave a room", example: "面接終了後に退室しました。", exampleEn: "I left the room after the interview ended." },
    { id: 5, jp: "申します", reading: "もうします", en: "my name is (humble form of 言う)", example: "Alexと申します。", exampleEn: "My name is Alex." },
    { id: 6, jp: "いただく", reading: "いただく", en: "to receive / to humbly do (humble form)", example: "ご連絡をいただきありがとうございます。", exampleEn: "Thank you for contacting me." },
    { id: 7, jp: "おります", reading: "おります", en: "to be (humble form of いる)", example: "現在、転職活動をしております。", exampleEn: "I am currently job hunting." },
    { id: 8, jp: "いたします", reading: "いたします", en: "to do (humble form of する)", example: "よろしくお願いいたします。", exampleEn: "I look forward to working with you." },
    { id: 9, jp: "ございます", reading: "ございます", en: "there is / to be (polite form of ある)", example: "ご質問がございましたらどうぞ。", exampleEn: "Please feel free if you have any questions." },
    { id: 10, jp: "失礼いたします", reading: "しつれいいたします", en: "excuse me (very polite)", example: "失礼いたします、入ってよろしいですか？", exampleEn: "Excuse me, may I come in?" },
  ],
  conversations: [
    {
      id: 1, title: "入室・着席のマナー", sceneEn: "Entering the interview room and taking a seat politely.",
      lines: [
        { speaker: "Alex", role: "You", jp: "失礼いたします。本日面接のお約束をしておりますAlexと申します。", en: "Excuse me. My name is Alex, and I have an interview appointment today." },
        { speaker: "受付", role: "Receptionist", jp: "Alexさまですね。お待ちしておりました。こちらへどうぞ。", en: "You must be Alex. We've been expecting you. Please come this way." },
        { speaker: "面接官", role: "Interviewer", jp: "どうぞお入りください。", en: "Please come in." },
        { speaker: "Alex", role: "You", jp: "失礼いたします。本日はお時間をいただきありがとうございます。（お辞儀）", en: "Excuse me. Thank you very much for your time today. (Bows)" },
        { speaker: "面接官", role: "Interviewer", jp: "どうぞお座りください。", en: "Please have a seat." },
        { speaker: "Alex", role: "You", jp: "ありがとうございます。失礼いたします。（着席）", en: "Thank you. Excuse me. (Takes a seat)" },
      ]
    },
    {
      id: 2, title: "面接終了・退室", sceneEn: "Closing the interview and leaving the room politely.",
      lines: [
        { speaker: "面接官", role: "Interviewer", jp: "以上で面接を終わります。本日はありがとうございました。", en: "That concludes the interview. Thank you for today." },
        { speaker: "Alex", role: "You", jp: "こちらこそ、本日は貴重なお時間をいただきまして、誠にありがとうございました。", en: "Thank you very much for your valuable time today." },
        { speaker: "Alex", role: "You", jp: "選考結果を楽しみにしております。それでは失礼いたします。（お辞儀して退室）", en: "I look forward to hearing the results. Goodbye. (Bows and exits)" },
      ]
    },
  ],
  quiz: [
    { id: 1, question: "「私はITエンジニアです」を謙譲語で言うと？", hint: "Humble form of いる → おります", choices: ["私はITエンジニアでいます。", "私はITエンジニアでおります。", "私はITエンジニアでございます。", "私はITエンジニアになります。"], answer: "私はITエンジニアでおります。" },
    { id: 2, question: "「〜をする」の謙譲語は？", hint: "Humble form of する", choices: ["される", "いたします", "なさいます", "します"], answer: "いたします" },
    { id: 3, question: "「名前を言う」の謙譲語は？", hint: "Humble form of 言う", choices: ["言います", "おっしゃいます", "申します", "ございます"], answer: "申します" },
    { id: 4, question: "部屋に入る前に何回ノックするのが正式なマナーですか？", hint: "Standard business etiquette", choices: ["1回", "2回", "3回", "4回"], answer: "3回" },
  ],
  answerVariants: {},
  quizTip: "敬語の基本：「いたします」「おります」「申します」「ございます」を使いこなしましょう。",
  roleplay: [
    {
      key: "A",
      label: "入室から着席まで",
      descJp: "面接会場に入室してから着席するまでのマナーを練習してください。",
      desc: "Practice the etiquette from entering the interview room to taking a seat.",
      points: [
        "3回ノックして「失礼いたします」と言って入る",
        "「本日はお時間をいただきありがとうございます」",
        "着席前に「失礼いたします」を言う",
      ]
    },
    {
      key: "B",
      label: "敬語を使った自己紹介",
      descJp: "謙譲語・丁寧語を使って面接冒頭の自己紹介をしてください。",
      desc: "Give your opening self-introduction using humble and polite language.",
      points: [
        "「申します」「おります」「いたします」を使う",
        "語尾を「〜です・ます」で統一する",
        "「本日はよろしくお願いいたします」で締める",
      ]
    },
  ],
};

// ---- UNIT 10: 給与・条件の確認 ----
export const unit10Data = {
  id: 10,
  title: "給与・条件の確認",
  titleEn: "Salary & Conditions Discussion",
  vocab: [
    { id: 1, jp: "給与", reading: "きゅうよ", en: "salary / pay", example: "給与について確認させてください。", exampleEn: "Please allow me to confirm the salary." },
    { id: 2, jp: "年収", reading: "ねんしゅう", en: "annual income", example: "希望年収は500万円です。", exampleEn: "My desired annual income is 5 million yen." },
    { id: 3, jp: "基本給", reading: "きほんきゅう", en: "base salary", example: "基本給はいくらですか？", exampleEn: "What is the base salary?" },
    { id: 4, jp: "手当", reading: "てあて", en: "allowance / benefit", example: "交通費の手当はありますか？", exampleEn: "Is there a commuting allowance?" },
    { id: 5, jp: "福利厚生", reading: "ふくりこうせい", en: "employee benefits", example: "福利厚生について教えてください。", exampleEn: "Please tell me about the employee benefits." },
    { id: 6, jp: "勤務時間", reading: "きんむじかん", en: "working hours", example: "勤務時間は何時から何時ですか？", exampleEn: "What are the working hours?" },
    { id: 7, jp: "休日", reading: "きゅうじつ", en: "days off / holiday", example: "年間の休日は何日ですか？", exampleEn: "How many days off are there per year?" },
    { id: 8, jp: "試用期間", reading: "しようきかん", en: "probationary period", example: "試用期間は3か月間です。", exampleEn: "The probationary period is 3 months." },
    { id: 9, jp: "入社日", reading: "にゅうしゃび", en: "start date / joining date", example: "入社日はいつになりますか？", exampleEn: "When would the start date be?" },
    { id: 10, jp: "交渉する", reading: "こうしょうする", en: "to negotiate", example: "給与の交渉をしたいです。", exampleEn: "I would like to negotiate the salary." },
  ],
  conversations: [
    {
      id: 1, title: "給与・待遇の確認", sceneEn: "Confirming salary and working conditions with HR.",
      lines: [
        { speaker: "人事", role: "HR", jp: "条件面について確認させてください。希望年収はありますか？", en: "Let me confirm the conditions. Do you have a desired annual income?" },
        { speaker: "Alex", role: "You", jp: "はい。前職の年収は450万円でしたので、500万円程度を希望しております。", en: "Yes. My annual income at my previous job was 4.5 million yen, so I'm hoping for around 5 million yen." },
        { speaker: "人事", role: "HR", jp: "わかりました。弊社の給与レンジは応相談ですが、ご経験を踏まえて検討いたします。", en: "I understand. Our salary range is negotiable, but we'll consider it taking your experience into account." },
        { speaker: "Alex", role: "You", jp: "ありがとうございます。また、リモートワークの制度はございますか？", en: "Thank you. Also, do you have a remote work system?" },
        { speaker: "人事", role: "HR", jp: "週3日リモート、週2日出社が基本です。状況によって変更になる場合もあります。", en: "The basic arrangement is 3 days remote and 2 days in the office. This may change depending on the situation." },
      ]
    },
    {
      id: 2, title: "入社日・試用期間の確認", sceneEn: "Confirming start date and probationary period.",
      lines: [
        { speaker: "人事", role: "HR", jp: "入社日についてはご都合はありますか？", en: "Do you have any preferences regarding the start date?" },
        { speaker: "Alex", role: "You", jp: "はい。現職の退職手続きに1か月ほどいただく必要がありますので、来月末が最短になります。", en: "Yes. I need about one month for my resignation process at my current job, so the earliest would be the end of next month." },
        { speaker: "人事", role: "HR", jp: "了解しました。試用期間は3か月間で、期間終了後に正式採用となります。", en: "Understood. The probationary period is 3 months, and you will be formally hired after that period." },
        { speaker: "Alex", role: "You", jp: "承知しました。試用期間中の給与は正式採用後と同様でしょうか？", en: "Understood. Is the salary during the probationary period the same as after formal hiring?" },
        { speaker: "人事", role: "HR", jp: "はい、試用期間中も同じ給与です。ご安心ください。", en: "Yes, the salary is the same during the probationary period. Please don't worry." },
      ]
    },
  ],
  quiz: [
    { id: 1, question: "月額給与ではなく1年間の合計収入を何といいますか？", hint: "Annual income", choices: ["月給", "基本給", "年収", "手取り"], answer: "年収" },
    { id: 2, question: "「交通費や住宅費などの補助」を何といいますか？", hint: "Allowance / benefit", choices: ["給与", "手当", "福利厚生", "ボーナス"], answer: "手当" },
    { id: 3, question: "「正式採用前の試しの期間」を何といいますか？", hint: "Probationary period", choices: ["試用期間", "研修期間", "準備期間", "待機期間"], answer: "試用期間" },
    { id: 4, question: "「条件面で話し合って決める」という動詞は？", hint: "To negotiate", choices: ["確認する", "相談する", "交渉する", "検討する"], answer: "交渉する" },
  ],
  answerVariants: {},
  quizTip: "給与交渉は最終選考後、内定後が適切なタイミングです。",
  roleplay: [
    {
      key: "A",
      label: "給与希望を伝える",
      descJp: "「希望給与を教えてください」という質問に答えてください。",
      desc: "Answer 'Please tell us your desired salary'.",
      points: [
        "前職の給与を基準に現実的な希望を伝える",
        "「〜万円程度を希望しております」という表現を使う",
        "「貴社の規定に合わせます」という柔軟性も示す",
      ]
    },
    {
      key: "B",
      label: "労働条件の確認",
      descJp: "内定後、勤務時間・休日・福利厚生について確認してください。",
      desc: "After receiving an offer, confirm working hours, days off, and benefits.",
      points: [
        "「確認させていただきたいのですが〜」という丁寧な前置きを使う",
        "一度に多く質問しすぎない",
        "確認後「承知しました」で締める",
      ]
    },
  ],
};

export const unitDataMap: Record<number, any> = {
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
