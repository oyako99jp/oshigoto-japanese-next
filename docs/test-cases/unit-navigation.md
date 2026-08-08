# Unitナビゲーション機能 手動テストケース一覧

対象ファイル
- `src/app/it/unit/[id]/UnitPageClient.tsx`
- `src/app/katakana/unit/[id]/KatakanaUnitPageClient.tsx`
- `src/app/interview/[id]/UnitPageClient.tsx`

対象URL・Unit数（前提知識としてまとめておく）

| ルート | 一覧ページ | Unitページ | 最初のUnit | 最後のUnit |
|---|---|---|---|---|
| it | `/it` | `/it/unit/{id}` | 1（自己紹介・初日の挨拶） | 20（転職・退職の日本語） |
| katakana | `/katakana` | `/katakana/unit/{id}` | 1（ビジネス基本） | 10（キャリア・成長） |
| interview | `/interview` | `/interview/{id}` | 1（履歴書・職務経歴書の基本） | 10（給与・条件の確認） |

このテストは自動テストフレームワーク未導入のため、ブラウザで手動確認する前提で作成しています。
PC表示は画面幅768px以上、モバイル表示は768px未満で切り替わります（ブラウザのデベロッパーツールでビューポート幅を変更して確認してください）。

---

## 1. 基本表示・初期状態

| ID | 観点 | 対象ルート | 前提条件 | 手順 | 期待結果 | 優先度 |
|---|---|---|---|---|---|---|
| BASE-01 | Unitページの初期表示 | it / katakana / interview | 各ルートの一覧ページから任意のUnitを開く | 一覧ページでUnitカードをクリック | Unitページが開き、Unit番号・日本語タイトル・英語タイトルが正しく表示される。セクションはVocabularyが初期選択されている | 中 |
| BASE-02 | Vocabularyセクションのカード開閉 | it / katakana / interview | Unitページを表示中 | 単語カードをクリック | カードが開き英訳・例文が表示される。再クリックで閉じる | 低 |
| BASE-03 | セクションタブでの直接切り替え | it / interview | Unitページを表示中 | 上部タブ「Conversations」「Practice」「Roleplay」をそれぞれクリック | クリックしたセクションの内容に切り替わり、タブの下線・文字色がアクティブ表示になる | 中 |
| BASE-04 | セクションタブでの直接切り替え（カタカナ） | katakana | Unitページを表示中 | 上部タブ「Quiz」をクリック | Quizセクションに切り替わる | 中 |
| BASE-05 | サイドバー（PCのみ）からのセクション切り替え | it / katakana / interview | PC幅（768px以上）でUnitページを表示 | 右側サイドバーの各セクション名をクリック | 本文側のセクションが連動して切り替わる | 低 |

---

## 2. カタカナUnitページの「← 前へ / Prev」「次へ / Next →」（新規追加）

it・interviewには既に存在していたセクション内ナビをkatakanaにも追加した部分の確認。

| ID | 観点 | 前提条件 | 手順 | 期待結果 | 優先度 |
|---|---|---|---|---|---|
| KTK-NAV-01 | Vocabularyセクションでの表示 | `/katakana/unit/{id}` を表示、Vocabularyタブがアクティブ | 画面下部を確認 | 左側に「← 前へ / Prev」ボタンは表示されず空欄、右側に「次へ / Next →」ボタンのみ表示される（Vocabularyが最初のセクションのため） | 高 |
| KTK-NAV-02 | 「次へ / Next →」クリックでQuizへ | Vocabularyセクション表示中 | 「次へ / Next →」をクリック | Quizセクションに切り替わる（ページ遷移はしない、セクション内切り替え） | 高 |
| KTK-NAV-03 | Quizセクションでの表示 | Quizセクション表示中 | 画面下部を確認 | 左側に「← 前へ / Prev」ボタンが表示される。右側はQuizが最後のセクションのため「Unit完了 / Mark Complete」ボタンに置き換わる | 高 |
| KTK-NAV-04 | 「← 前へ / Prev」クリックでVocabularyへ戻る | Quizセクション表示中 | 「← 前へ / Prev」をクリック | Vocabularyセクションに戻る。カードの開閉状態はリセットされる（コンポーネント側の仕様として問題ないか目視確認） | 中 |
| KTK-NAV-05 | it/interviewとの表示統一性 | katakanaのVocabulary/Quiz表示とit/interviewのVocabulary表示 | 3ルートを見比べる | ボタンの位置・ラベル文言（← 前へ / Prev、次へ / Next →）が統一されている | 低 |

---

## 3. 前後Unitナビ（ページ下部）

セクションナビ（上記）とは別に、Unit自体を前後に移動するナビ。`available: true` のUnitのみが対象。

| ID | 対象ルート | Unit | 前提条件 | 手順 | 期待結果 | 優先度 |
|---|---|---|---|---|---|---|
| PGNAV-01 | it | Unit 1（最初） | `/it/unit/1` を表示、最後のセクション（Roleplay）まで進める | 画面下部のUnitナビ欄を確認 | 「← 前のUnit」ボタンは表示されない。「次のUnit → Unit 2」ボタンのみ表示される | 高 |
| PGNAV-02 | it | Unit 10（中間） | `/it/unit/10` を表示、最後のセクションまで進める | 画面下部のUnitナビ欄を確認 | 「← 前のUnit（Unit 9）」「次のUnit →（Unit 11）」の両方が表示される。それぞれUnit番号・英語タイトル・日本語タイトルが正しい | 高 |
| PGNAV-03 | it | Unit 20（最後） | `/it/unit/20` を表示、最後のセクションまで進める | 画面下部のUnitナビ欄を確認 | 「次のUnit →」ボタンは表示されない。「← 前のUnit（Unit 19）」ボタンのみ表示される | 高 |
| PGNAV-04 | katakana | Unit 1（最初） | `/katakana/unit/1` を表示、Quizセクションまで進める | 画面下部のUnitナビ欄を確認 | 「← 前のUnit」ボタンは表示されない。「次のUnit → Unit 2」のみ表示される | 高 |
| PGNAV-05 | katakana | Unit 5（中間） | `/katakana/unit/5` を表示 | 画面下部のUnitナビ欄を確認 | 「← 前のUnit（Unit 4）」「次のUnit →（Unit 6）」の両方が表示される | 高 |
| PGNAV-06 | katakana | Unit 10（最後） | `/katakana/unit/10` を表示 | 画面下部のUnitナビ欄を確認 | 「次のUnit →」ボタンは表示されない。「← 前のUnit（Unit 9）」ボタンのみ表示される | 高 |
| PGNAV-07 | interview | Unit 1（最初） | `/interview/1` を表示、最後のセクションまで進める | 画面下部のUnitナビ欄を確認 | 「← 前のUnit」ボタンは表示されない。「次のUnit → Unit 2」のみ表示される | 高 |
| PGNAV-08 | interview | Unit 5（中間） | `/interview/5` を表示 | 画面下部のUnitナビ欄を確認 | 「← 前のUnit（Unit 4）」「次のUnit →（Unit 6）」の両方が表示される | 高 |
| PGNAV-09 | interview | Unit 10（最後） | `/interview/10` を表示 | 画面下部のUnitナビ欄を確認 | 「次のUnit →」ボタンは表示されない。「← 前のUnit（Unit 9）」ボタンのみ表示される | 高 |
| PGNAV-10 | it / katakana / interview | 中間Unit | 中間Unitのページ下部Unitナビを表示 | 「← 前のUnit」「次のUnit →」それぞれクリック | クリックした方向のUnitページ（`{basePath}/{id}`）へ実際に遷移する。表示されているUnit番号・タイトルと遷移先が一致する | 高 |
| PGNAV-11 | it / katakana / interview | 任意 | ページ下部Unitナビが表示された状態 | ボタンの色・レイアウトを確認 | グレーアウト（disabled状態の見た目）ではなく、前後Unitが無い場合はボタン自体が非表示になっていることを再確認する（グレーで無効化されたボタンが残っていないか） | 高 |

---

## 4. Unit完了モーダル内の前後Unitナビ

| ID | 対象ルート | Unit | 前提条件 | 手順 | 期待結果 | 優先度 |
|---|---|---|---|---|---|---|
| MODNAV-01 | it | Unit 1（最初） | `/it/unit/1` の最終セクション（Roleplay）を表示 | 「Unit完了 / Mark Complete」をクリックしてモーダルを開く | モーダル内に「次のUnit → Unit 2」のみ表示され、「← 前のUnit」は表示されない | 高 |
| MODNAV-02 | it | Unit 10（中間） | `/it/unit/10` の最終セクションを表示 | 「Unit完了 / Mark Complete」をクリック | モーダル内に「← 前のUnit（Unit 9）」「次のUnit →（Unit 11）」の両方が縦積みで表示される | 高 |
| MODNAV-03 | it | Unit 20（最後） | `/it/unit/20` の最終セクションを表示 | 「Unit完了 / Mark Complete」をクリック | モーダル内に「← 前のUnit（Unit 19）」のみ表示され、「次のUnit →」は表示されない | 高 |
| MODNAV-04 | katakana | Unit 5（中間） | `/katakana/unit/5` のQuizセクションで最後まで回答し終了画面を経てMark Completeをクリック | モーダルを開く | モーダル内に「← 前のUnit（Unit 4）」「次のUnit →（Unit 6）」が表示される | 高 |
| MODNAV-05 | interview | Unit 10（最後） | `/interview/10` の最終セクションを表示 | 「Unit完了 / Mark Complete」をクリック | モーダル内に「← 前のUnit（Unit 9）」のみ表示され、「次のUnit →」は表示されない | 高 |
| MODNAV-06 | it / katakana / interview | 中間Unit | モーダルを開いた状態 | モーダル内「次のUnit →」ボタンをクリック | 次のUnitのページへ遷移し、モーダルは自動的に閉じている（後述5章のバグ回帰と合わせて確認） | 高 |
| MODNAV-07 | it / katakana / interview | 中間Unit | モーダルを開いた状態 | モーダル内「← 前のUnit」ボタンをクリック | 前のUnitのページへ遷移し、モーダルは自動的に閉じている | 高 |
| MODNAV-08 | it / katakana / interview | 前後Unitが両方存在しないケースは無い（最小構成でも一覧に2つ以上Unitがあるため） | モーダル内Unitナビが無いケースが発生しうるか設計上確認 | 前後どちらも無い場合はナビブロック自体が表示されないこと（`(prevUnit || nextUnit)` の条件分岐）をコードレビューと合わせて目視確認 | 低 |

---

## 5. リグレッションテスト：モーダル状態の引き継ぎバグ（重点確認）

直前のレビューで発見・修正した「Unit間直接遷移時にshowModalやsectionのstateが前のUnitから引き継がれる」バグの再発防止確認。`key={unitData.id}` / `key={unitId}` によるコンポーネント再マウントが効いているかがポイント。

| ID | 対象ルート | 手順 | 期待結果 | 優先度 |
|---|---|---|---|---|
| REG-MODAL-01 | it | 1. `/it/unit/10` を開く<br>2. 最終セクション（Roleplay）まで進めて「Unit完了 / Mark Complete」をクリックしモーダルを開く<br>3. モーダル内の「次のUnit → Unit 11」をクリック | Unit 11のページに遷移する。**遷移直後、完了モーダルが表示されていないこと**（前のUnitで開いていたモーダルが引き継がれない）。セクションはVocabularyから始まる | 高（重点） |
| REG-MODAL-02 | katakana | 1. `/katakana/unit/3` を開く<br>2. Quizセクションを最後まで進めて終了画面を出し、「Unit完了 / Mark Complete」をクリックしモーダルを開く<br>3. モーダル内の「次のUnit → Unit 4」をクリック | Unit 4のページに遷移する。**完了モーダルが誤表示されないこと**。セクションはVocabularyから始まる | 高（重点） |
| REG-MODAL-03 | interview | 1. `/interview/3` を開く<br>2. 最終セクション（Roleplay）まで進めて「Unit完了 / Mark Complete」をクリックしモーダルを開く<br>3. モーダル内の「次のUnit → Unit 4」をクリック | Unit 4のページに遷移する。**完了モーダルが誤表示されないこと**。セクションはVocabularyから始まる | 高（重点） |
| REG-MODAL-04 | it / katakana / interview | 1. モーダルを開いた状態から、モーダル内ではなく画面下部のUnitナビ「次のUnit →」をクリックして遷移 | 同様に遷移先で完了モーダルが誤表示されないこと（モーダル経由・下部ナビ経由の両方で確認） | 高（重点） |
| REG-MODAL-05 | it / katakana / interview | 1. モーダルを開いた状態から「← ユニット一覧に戻る」で一覧に戻る<br>2. 一覧から同じUnitを開き直す | モーダルが表示された状態のまま残っていないこと（正常系だが再マウント確認の補助ケース） | 中 |

---

## 6. リグレッションテスト：セクションタブ位置の引き継ぎバグ（重点確認）

Unit間を遷移した際、前のUnitで選択していたセクション（例：Roleplay）がそのまま表示されてしまわないか。

| ID | 対象ルート | 手順 | 期待結果 | 優先度 |
|---|---|---|---|---|
| REG-SEC-01 | it | 1. `/it/unit/5` を開く<br>2. タブを「Roleplay」まで進める（Vocabulary→Conversations→Practice→Roleplayの順にクリック）<br>3. 画面下部のUnitナビ「次のUnit → Unit 6」をクリック | Unit 6のページに遷移した直後、**セクションはVocabularyにリセットされていること**（Roleplayが表示されたままにならない） | 高（重点） |
| REG-SEC-02 | katakana | 1. `/katakana/unit/2` を開く<br>2. 「次へ / Next →」でQuizセクションに進める<br>3. 画面下部のUnitナビ「次のUnit → Unit 3」をクリック | Unit 3のページに遷移した直後、**セクションはVocabularyにリセットされていること** | 高（重点） |
| REG-SEC-03 | interview | 1. `/interview/2` を開く<br>2. タブを「Roleplay」まで進める<br>3. 画面下部のUnitナビ「次のUnit → Unit 3」をクリック | Unit 3のページに遷移した直後、**セクションはVocabularyにリセットされていること** | 高（重点） |
| REG-SEC-04 | it / katakana / interview | 1. Unitページである単語カードを開いた状態（flipped=true）にする<br>2. 別Unitへ遷移 | 遷移先のVocabularyカードは全て閉じた初期状態であること（前Unitのカード開閉状態を引き継がない） | 中 |
| REG-SEC-05 | it / interview | 1. ConversationsセクションでEN訳を開いた状態、または会話タブを2番目に切り替えた状態にする<br>2. 別Unitへ遷移してConversationsセクションを開く | 遷移先では会話タブが1番目から始まり、EN訳もすべて閉じていること | 低 |
| REG-SEC-06 | it / katakana / interview | 1. ブラウザの「戻る」ボタンで前のUnitに戻る（遷移→戻るの往復） | 戻った際も現在表示中のUnitに対応した正しいセクション初期状態（Vocabulary）で表示されること。前後のUnit間でstateが混ざらないこと | 中 |

---

## 7. リグレッションテスト：available:false Unitの境界値バグ

`nextUnit` 算出時に `unitIdx >= 0` のガードが無いと、`available:false` のUnitに直接アクセスした際に不正な次Unitが算出されるバグの再発防止確認。

**現状の注意点**：2026-08-08時点で it / katakana / interview のいずれの `data.ts` にも `available: false` のUnitは存在しません（全Unitが `available: true`）。そのため以下のケースは、将来 `available: false` のUnitが追加された場合に備えた回帰テスト、または一時的にコードを書き換えて確認する手動テストです。

| ID | 対象ルート | 前提条件 | 手順 | 期待結果 | 優先度 |
|---|---|---|---|---|---|
| REG-AVAIL-01 | it / katakana / interview | 該当 `data.ts` の任意の1Unit（例：中間のUnit）を一時的に `available: false` に書き換える（**テスト後に必ず元に戻すこと**） | そのUnit IDのURLへ直接アクセスする（例: `/it/unit/10`） | ページがエラーにならず表示されること。画面下部・モーダルの前後Unitナビが表示されないか、表示されるとしても隣接する `available: true` のUnitのみが正しく算出されていること（存在しないUnitや無関係なUnitへのリンクにならない） | 中 |
| REG-AVAIL-02 | it / katakana / interview | 一覧の最後のUnitを一時的に `available: false` にする | 最後から2番目のUnit（新たに実質「最後」になる）のページを開く | 「次のUnit →」が表示されないこと（`available:false` にしたUnitへのリンクが出ない） | 中 |
| REG-AVAIL-03 | it / katakana / interview | 一覧の最初のUnitを一時的に `available: false` にする | 2番目のUnit（新たに実質「最初」になる）のページを開く | 「← 前のUnit」が表示されないこと（`available:false` にしたUnitへのリンクが出ない） | 中 |

---

## 8. レスポンシブ表示（モバイル / PC切り替え）

| ID | 対象ルート | 前提条件 | 手順 | 期待結果 | 優先度 |
|---|---|---|---|---|---|
| RESP-01 | it / katakana / interview | ブラウザ幅を768px以上（PC表示）にする | 中間Unitのページ下部Unitナビ、モーダル内Unitナビを確認 | 「← 前のUnit」「次のUnit →」が横並び（row）で表示される。ページ下部ナビはPC幅で横並び、モーダル内ナビは常に縦積み（`stack`指定のため） | 高 |
| RESP-02 | it / katakana / interview | ブラウザ幅を767px以下（モバイル表示）にする | 中間Unitのページ下部Unitナビを確認 | 「← 前のUnit」「次のUnit →」が縦積み（column-reverse：次のUnitが上、前のUnitが下）で表示される | 高 |
| RESP-03 | it / katakana / interview | モバイル幅（767px以下） | Unitナビボタンの高さを確認（デベロッパーツールの要素検証） | 各ボタンの `min-height` が48px以上になっている（タップしやすいサイズが確保されている） | 中 |
| RESP-04 | it / katakana / interview | PC幅（768px以上） | Unitナビボタンの高さを確認 | PC幅でも48px以上の高さが維持されている | 低 |
| RESP-05 | it / katakana / interview | ウィンドウ幅を768px境界付近でリサイズする（767px→768px→767px） | 表示中のUnitナビのレイアウトを確認 | 768px境界をまたぐとレイアウトが横並び⇔縦積みに正しく切り替わり、表示崩れやボタンの消失が発生しないこと | 低 |
| RESP-06 | it / katakana / interview | モバイル幅 | セクションタブ（Vocabulary/Conversations等）を確認 | 横スクロール可能な形で全タブが表示され、隠れて押せないタブが無いこと | 低 |

---

## 9. ナビゲーション整合性（表示内容と遷移先の一致）

| ID | 対象ルート | 手順 | 期待結果 | 優先度 |
|---|---|---|---|---|
| CONSIST-01 | it / katakana / interview | 中間Unitのページ下部「次のUnit →」に表示されているUnit番号・英語タイトル・日本語タイトルをメモしてからクリック | 遷移後のページヘッダーに表示されるUnit番号・タイトルが、クリック前にナビ上で表示されていた内容と完全に一致すること | 高 |
| CONSIST-02 | it / katakana / interview | 中間Unitのページ下部「← 前のUnit」に表示されているUnit番号・英語タイトル・日本語タイトルをメモしてからクリック | 遷移後のページヘッダーに表示されるUnit番号・タイトルが一致すること | 高 |
| CONSIST-03 | it / katakana / interview | 一覧ページ（`/it`, `/katakana`, `/interview`）に表示されているUnit一覧の並び順 | 一覧の並び順とUnitナビの前後関係（prev/next）が一致していること | 中 |
| CONSIST-04 | it / katakana / interview | Unit完了モーダルとページ下部の両方に前後Unitナビがある状態 | 両方のナビに表示される前後Unitの情報が一致していること（どちらも同じ算出ロジックを使っている） | 低 |

---

## テストケース件数まとめ

| 章 | 件数 |
|---|---|
| 1. 基本表示・初期状態 | 5 |
| 2. カタカナUnitページのセクション内ナビ（新規） | 5 |
| 3. 前後Unitナビ（ページ下部） | 11 |
| 4. Unit完了モーダル内の前後Unitナビ | 8 |
| 5. リグレッション：モーダル状態引き継ぎバグ | 5 |
| 6. リグレッション：セクションタブ位置引き継ぎバグ | 6 |
| 7. リグレッション：available:false境界値バグ | 3 |
| 8. レスポンシブ表示 | 6 |
| 9. ナビゲーション整合性 | 4 |
| **合計** | **53** |
