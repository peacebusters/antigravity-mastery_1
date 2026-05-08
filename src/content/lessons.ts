export interface QuizQuestion {
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export interface LessonContent {
  id: number;
  day: string;
  title: string;
  excerpt: string;
  image: string;
  duration: string;
  content: string;
  quizData?: QuizQuestion[];
}

export const lessons: LessonContent[] = [
  // ... (Day 1-10 are same as before, I'll just show the Day 11 update)
  {
    id: 1, day: "Day 01", title: "AIに「手」が生えた日", excerpt: "チャットAIと「エージェント」の決定的な違い。なぜAntigravityがあなたの仕事を代行できるのかを理解します。", image: "/day1_ai_hands.png", duration: "10 min",
    content: `<h2>AIチャットから「AIエージェント」へ</h2><p>これまでのAI（ChatGPTなど）は、私たちが質問を投げ、AIがそれに回答する「一問一答」の形式が主でした。しかし、Antigravityのような<strong>AIエージェント</strong>は根本的に異なります。</p><div class="highlight-box"><h3>腹落ちポイント：エージェントには「手」がある</h3><p>チャットAIが「頭脳」だけだとすれば、エージェントは「頭脳 ＋ 手足 ＋ 道具」です。あなたが「このフォルダにある100個のファイルの名前を変えておいて」と頼めば、エージェントは自分でファイルを確認し、道具を選び、実際に名前を書き換えて報告してくれます。</p></div><h2>40代のビジネスマンこそ、エージェントが必要な理由</h2><p>責任ある立場になり、細かい作業よりも「判断」や「ディレクション」に時間を使いたい時期。Antigravityは、あなたの「意図」を汲み取り、泥臭い作業を肩代わりしてくれる、最も忠実で有能な部下になります。</p><h2>本日のワーク：あなたの「面倒」を言語化してみる（10分）</h2><p>まずはAntigravityを使う準備として、AIに任せたい「退屈な作業」を一つ選んでみましょう。インストールはまだ不要です。</p><ol><li><strong>ターゲット選定：</strong> 今日一日で行った作業の中で「自分じゃなくてもいいな」と思った単純作業を一つ思い出してください。</li><li><strong>指示書の作成：</strong> その作業を「新入社員」に頼むとしたら、どんな指示書を書きますか？</li><li><strong>AIの視点：</strong> その指示書を読み返してみてください。エージェントはまさにその指示書を読み、あなたの代わりに手を動かします。</li></ol>`
  },
  {
    id: 2, day: "Day 02", title: "離陸準備（セットアップ）", excerpt: "いよいよAntigravityを導入します。ダウンロードからインストール、最新モデルの選択までを解説。", image: "/day2_setup.png", duration: "10 min",
    content: `<h2>1. ダウンロードとインストール</h2><p>まずはAntigravityをあなたのPCに迎え入れましょう。</p><ul><li><strong>ダウンロード：</strong> 公式サイトへアクセスし、インストーラーを取得します。</li><li><strong>インストール：</strong> 画面の指示に従って完了させます。</li><li><strong>起動：</strong> アプリを立ち上げます。</li></ul><h2>2. モデル（AIの脳）を選択する</h2><div class="highlight-box"><h3>モデル選択肢のガイド</h3><ul><li><strong>Gemini 3.1 Pro (High):</strong> 最高性能。複雑な問題解決に。</li><li><strong>Gemini 3.1 Pro (Low):</strong> 性能とスピードのバランス型。</li><li><strong>Gemini 3 Flash:</strong> 圧倒的に高速。日常のタスクに最適。</li></ul><p><strong>★推奨：</strong> 最初は <strong>Gemini 3 Flash</strong> がおすすめです！</p></div><h2>本日のワーク：Antigravityと挨拶を交わす（10分）</h2><ol><li>アプリを起動し、モデル一覧から <strong>Gemini 3 Flash</strong> を選択します。</li><li>画面下部の入力欄に挨拶を入力してEnterを押します。</li></ol>`
  },
  {
    id: 3, day: "Day 03", title: "「丸投げ」の技術", excerpt: "細かな指示は不要。目的を伝えるだけでAntigravityが最適な手段を考える「権限委譲」のコツ。", image: "/day3_delegation.png", duration: "12 min",
    content: `<h2>「どうやるか」ではなく「何をしたいか」</h2><p>AIエージェントの最高の結果を引き出すには、<strong>ゴールを明確に伝えること</strong>が重要です。</p><div class="highlight-box"><h3>命令と権限委譲の違い</h3><ul><li><strong>命令：</strong> 「検索して、URLをコピーして、Excelに貼り付けて」</li><li><strong>権限委譲：</strong> 「最新トレンドを調査し、比較表を作成して保存して」</li></ul></div><h2>本日のワーク：あえて「ざっくり」頼んでみる（10分）</h2><ol><li>少し抽象的な指示を投げます。</li><li>AIがどう反応するか、対話を通じて軌道修正するプロセスを体験します。</li></ol>`
  },
  {
    id: 4, day: "Day 04", title: "ファイル操作の魔法", excerpt: "フォルダ整理、データ抽出、一括リネーム。退屈な作業を数秒で終わらせる体験。", image: "https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=800", duration: "10 min",
    content: `<h2>「PCの中が見える」という衝撃</h2><p>Antigravityはあなたの許可した範囲で、PC内のフォルダを直接操作することができます。</p><div class="highlight-box"><h3>Antigravityができること</h3><ul><li><strong>一括リネーム：</strong> 大量のファイルを規則性を持ってリネーム。</li><li><strong>データ抽出：</strong> PDFやテキストから必要な情報を抽出。</li><li><strong>フォルダ整理：</strong> 散らかったデスクトップを自動仕分け。</li></ul></div><h2>本日のワーク：デスクトップを綺麗にする（10分）</h2><ol><li>「デスクトップにあるファイル一覧を表示して」と頼みます。</li><li>「それらを種類別にフォルダを作って整理して」と指示し、実行を見守ります。</li></ol>`
  },
  {
    id: 5, day: "Day 05", title: "爆速リサーチ術", excerpt: "ネットの海から必要な情報だけを抽出。競合調査やトレンド分析をAIに任せる方法。", image: "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=800", duration: "15 min",
    content: `<h2>検索エンジンの代わりになる</h2><p>Google検索とブラウジング、要約までを一気にAntigravityが行います。</p><div class="highlight-box"><h3>エージェントのリサーチ</h3><ol><li><strong>自律検索：</strong> 複数のソースを自ら探しに行きます。</li><li><strong>構造化：</strong> 情報を整理された表や箇条書きで出力します。</li></ol></div><h2>本日のワーク：トレンド調査（10分）</h2><ol><li>「最新のAI技術について3つ調査し、比較表を作って」と依頼します。</li><li>出力結果を見て、さらに深く知りたい部分を追加で質問します。</li></ol>`
  },
  {
    id: 6, day: "Day 06", title: "プログラミング不要の開発", excerpt: "「こんなツールが欲しい」と伝えるだけ。目の前でコードが組み上がる魔法。", image: "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=800", duration: "10 min",
    content: `<h2>コードが書けなくても「作る人」に</h2><p>日常の「ちょっとした不便」を解消するツールを自作しましょう。</p><div class="highlight-box"><h3>例：ToDoリスト作成</h3><p>「簡単なToDoリストをブラウザで動く形式（HTML）で作って」と頼むだけで完成します。</p></div><h2>本日のワーク：ミニツール作成（15分）</h2><ol><li>「応援メッセージをランダムに出すHTMLを作って」と依頼します。</li><li>完成したファイルをブラウザで開き、動作を確認します。</li></ol>`
  },
  {
    id: 7, day: "Day 07", title: "ディレクター（指揮者）になる", excerpt: "複雑な課題を分解し、実行計画を立てる。プロジェクト管理のパートナーとしての活用法。", image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800", duration: "10 min",
    content: `<h2>スライド完成までの「3ステップ」</h2><p>AIにスライドを作らせる際、ディレクターとして行うべき手順は以下の通りです。</p><div class="highlight-box"><h3>ステップ1：指示と計画</h3><p>「まずは実行計画（Implementation Plan）を出して」と依頼します。</p></div><div class="highlight-box"><h3>ステップ2：内容のブラッシュアップ</h3><p>構成案を見て、修正指示を出し、計画を完成させます。</p></div><div class="highlight-box"><h3>ステップ3：実行とファイル確認</h3><p>「計画通り進めて. HTML形式で保存して」と命じます。</p></div><h2>本日のワーク：スライドを1枚完成させる（15分）</h2><ol><li>AIにスライド作成を計画させます。</li><li>構成を修正し、最後に実行を指示してファイルを確認します。</li></ol>`
  },
  {
    id: 8, day: "Day 08", title: "百聞は一見に如かず（画像生成）", excerpt: "言葉を画像に。Day 7で作った資料をビジュアルで強化する体験。", image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800", duration: "10 min",
    content: `<h2>資料の説得力を高める「画像生成」</h2><p>Day 8では、AIを使って「言葉」から「画像」を作り出し、資料に彩りを添えます。</p><div class="highlight-box"><h3>Antigravityで画像を扱うメリット</h3><ul><li><strong>素材探しの時間ゼロ：</strong> 欲しいイメージを言葉にするだけ。</li><li><strong>著作権の心配なし：</strong> AIがその都度生み出します。</li></ul></div><h2>本日のワーク：資料に画像を挿入する（15分）</h2><ol><li>昨日作った資料に合うイメージ画像を生成します。</li><li>「資料内の画像をこのファイルに差し替えて」と指示し、ブラウザで確認します。</li></ol>`
  },
  {
    id: 9, day: "Day 09", title: "実践！自分専用ツール構築", excerpt: "これまで学んだ全てを動員して、実際の業務を助ける強力なツールを一つ完成させます。", image: "https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=800", duration: "30 min",
    content: `<h2>総仕上げのフェーズ</h2><p>今日は、これまでに学んだスキルを組み合わせて、実用的なツールを作ります。</p><div class="highlight-box"><h3>「ディレクター」の動きをおさらい</h3><ol><li><strong>指示：</strong> 「〇〇を自動化したい。まず計画とタスクリストを」</li><li><strong>修正：</strong> 「手順AをBに変えて。Cを追加して」</li><li><strong>実行：</strong> 「計画通り進めて」</li></ol></div><h2>本日のワーク：業務の自動化（30分）</h2><ol><li>自分が一番「面倒」だと思っているPC作業を一つ選び、計画から実行までを完遂しましょう。</li></ol>`
  },
  {
    id: 10, day: "Day 10", title: "AIエージェントと共に歩む未来", excerpt: "卒業おめでとうございます。これから始まる「AI共生時代」のキャリアの作り方。", image: "https://images.pexels.com/photos/3183183/pexels-photo-3183183.jpeg?auto=compress&cs=tinysrgb&w=800", duration: "10 min",
    content: `<h2>10日間の完走、お疲れ様でした！</h2><p>あなたはもう、AIを「実際に働くパートナー」として扱えるようになっています。</p><div class="highlight-box"><h3>これからのキャリア</h3><p>AIを使いこなし、価値を何倍にも高める「ディレクター」としてのキャリアがここから始まります。</p></div><h2>本日のワーク：未来の自分へのメッセージ（10分）</h2><ol><li>10日間で何が変わったか、Antigravityと振り返ります。</li></ol>`
  },
  {
    id: 11,
    day: "Final",
    title: "卒業試験：理解度チェッククイズ",
    excerpt: "10日間の学習内容を総復習！全10問の選択式クイズに挑戦してください。",
    image: "https://images.pexels.com/photos/356079/pexels-photo-356079.jpeg?auto=compress&cs=tinysrgb&w=800",
    duration: "15 min",
    content: `<h2>卒業試験（全10問）</h2><p>これまでの学習内容を振り返るクイズです。80点（8問正解）以上で合格です！</p>`,
    quizData: [
      {
        question: "AIチャットとAIエージェントの決定的な違いは何ですか？",
        options: ["返答が速いかどうか", "PC操作ができる「手」を持っているかどうか", "人間のように雑談ができるかどうか", "無料で使えるかどうか"],
        correctAnswer: 1,
        explanation: "一問一答の回答だけでなく、実際にファイルを操作したりリサーチを代行したりできる「手」を持っているのがエージェントの特徴です。"
      },
      {
        question: "AIに仕事を依頼（権限委譲）する際、最も重視すべきことは？",
        options: ["作業の手順を細かく指定する", "AIの機嫌をとる", "「何をしたいか」という目的（ゴール）を伝える", "難しい言葉を使う"],
        correctAnswer: 2,
        explanation: "マネジメントと同じく、手順ではなく「結果」を定義することで、AIが自律的に最適な手段を考えます。"
      },
      {
        question: "複雑なタスクを依頼する際、最初に行わせるべきことは？",
        options: ["いきなりコードを書かせる", "実行計画（Implementation Plan）を作成させる", "とりあえずネット検索させる", "パソコンを再起動する"],
        correctAnswer: 1,
        explanation: "いきなり実行させず、まずは設計図（計画）を作らせることで、人間が内容を事前にチェックできます。"
      },
      {
        question: "AIが出した実行計画が意図と違う場合、どうすべきですか？",
        options: ["諦めて自分でやる", "AIを叱る", "具体的な修正指示を出して計画を改善させる", "そのまま実行させる"],
        correctAnswer: 2,
        explanation: "ディレクターとしてフィードバックを与え、計画をブラッシュアップするのが正しい共生術です。"
      },
      {
        question: "計画確定後、作業を開始させるための適切な「ゴーサイン」は？",
        options: ["「がんばって」", "「計画通り実行してください」", "「何かやっておいて」", "「終了しました」"],
        correctAnswer: 1,
        explanation: "承認を明示的に伝えることで、AIは計画フェーズから実行フェーズに切り替わります。"
      },
      {
        question: "日常的な単純作業を高速で終わらせたい時に最適なモデルは？",
        options: ["Gemini 3.1 Pro (High)", "Gemini 3 Flash", "Custom Model", "None of above"],
        correctAnswer: 1,
        explanation: "Flashモデルは軽量でレスポンスが非常に速いため、スピード重視のタスクに向いています。"
      },
      {
        question: "AntigravityがPC内のファイルを操作する際の挙動は？",
        options: ["勝手にすべてのファイルを消す", "あなたの許可なく何でもする", "指示された範囲内で、必要に応じて確認を求めながら進める", "ファイルを増やすことしかできない"],
        correctAnswer: 2,
        explanation: "エージェントは慎重に作業を進めます。あなたの指示と権限の範囲内でのみ動作します。"
      },
      {
        question: "プログラミングでツールを作る際、エラーが出たらどうしますか？",
        options: ["専門家を呼ぶ", "AIにエラー内容を伝え、修正を任せる", "パソコンを初期化する", "諦める"],
        correctAnswer: 1,
        explanation: "コードが書けなくても大丈夫。エラーの解決もエージェントの得意分野です。"
      },
      {
        question: "画像生成ツールを使うメリットは？",
        options: ["写真家になれる", "素材探しの時間をゼロにし、資料にピッタリの画像を作成できる", "ネット上の画像を盗める", "パソコンの容量が増える"],
        correctAnswer: 1,
        explanation: "素材探しの時間を短縮し、資料のクオリティと説得力を即座に高められます。"
      },
      {
        question: "AI時代において、40代のビジネスパーソンが担うべき最大の役割は？",
        options: ["AIの代わりに作業する", "AIを無視する", "AIを指揮する「ディレクター」としての振る舞い", "プログラミングをイチから学ぶ"],
        correctAnswer: 2,
        explanation: "これまでの経験（判断力・管理能力）を活かし、AIに適切な「お題」を出すことが最大の価値になります。"
      }
    ]
  }
];
