# 絶エデン MTナイトカンペサイト 引き継ぎマニュアル

## 目的

FF14「絶もうひとつの未来」MTナイト用カンペサイトを、GitHub Pagesで見られる形で管理する。

P1は画像つきで作成済み。P2〜P5は、2026-06-17時点で「画像なし・主要タイムライン・タンク仕事中心」の初版まで入っている。

## 現在の作業場所

公開アップロード用フォルダ:

```text
C:\Users\nakam\Desktop\eden_cheatsheet_publish
```

Obsidian/作業コピー:

```text
C:\Users\nakam\iCloudDrive\iCloud~md~obsidian\ff14_raids\ultimate\eden\publish
```

基本は作業コピー側を編集し、確認後にDesktop側へ反映する。

## ファイル構成

```text
index.html              目次。https://.../eden/
p1/index.html           P1完成版。https://.../eden/p1/
p2/index.html           P2初版あり。https://.../eden/p2/
p3/index.html           P3初版あり。https://.../eden/p3/
p4/index.html           P4初版あり。https://.../eden/p4/
p5/index.html           P5初版あり。https://.../eden/p5/
assets/css/style.css    共通CSS。原則触らない
assets/js/player.js     共通JS。原則触らない
assets/img/p1/          P1画像
assets/img/p2/          P2画像。今後追加
assets/img/p3/          P3画像。今後追加
assets/img/p4/          P4画像。今後追加
assets/img/p5/          P5画像。今後追加
sources/                文字起こしなど公開補助資料
index_noplayer.bak.html ローカルバックアップ。`.gitignore` 対象で公開しない
```

## 重要ルール

- 各ページの基本構造、`phasenav`、`header`、`ytdock`、`script src="../assets/js/player.js"` は壊さない。
- CSS/JSは共通ファイルで管理する。各HTML内に個別CSS/JSを書かない。
- 文字コードはUTF-8。
- P2〜P5の主な編集対象は `p2/index.html`〜`p5/index.html` の `<tbody>` 内。
- 目次を更新する場合は `index.html` の各 `hub-card` の説明文だけ変える。
- 画像つき展開行は、`data-toggle` と展開行の `id` を必ず一致させる。
- IDは `p2-xxx-detail` のようにフェーズ接頭辞を付ける。
- 画像パスは各フェーズページから `../assets/img/p2/xxx.jpg` のように参照する。
- 旧URLの `p1.html`〜`p5.html` は公開しない。フェーズURLは `p1/`〜`p5/` に統一する。

## 現在の反映状況

### P1

- リリードール式MTナイトカンペ完成版。
- 画像展開あり。
- 炎/雷の画像注釈は、炎=赤帯白文字、雷=青帯白文字。
- 転輪召は「A付近分身の逆色が安置」と明記済み。
- 戦闘開始10秒前ヴェールを追加済み。

### P2

初版済み。

主な行:

- 開幕
- クアドラスラップ
- ダイアモンドダスト
- 鏡の国
- バニシュガ
- 光の暴走
- 絶対零度
- ジャンクション

次に足すとよいもの:

- ダイアモンドダストの散開図
- 鏡誘導の図
- 光の暴走の固定処理メモ
- リリド/ぬけまる/しのしょー系の該当秒リンク

### P3

初版済み。

主な行:

- ジャンクション実行
- ヘル・ジャッジメント
- 時間圧縮・絶
- シェルクラッシャー
- ブラックヘイロー
- ディレイスペル・リフレイン
- 暗夜の舞踏技
- ショックウェーブ・パルサー

次に足すとよいもの:

- 時間圧縮・絶の担当別メモ
- アポカリプス/暗夜誘導の図
- ナイトインビンを暗夜に置くかどうかの固定方針

### P4

初版済み。

主な行:

- P4開幕挑発
- 光と闇の竜詩
- スピリットテイカー/ホーリーウィング
- 宵闇の舞踏技
- アク・モーン 1:7受け
- 時間結晶
- 時間結晶後アク・モーン
- P5移行

次に足すとよいもの:

- 2体フェーズの持ち位置画像
- 時間結晶のリターン設置位置
- P4でインビンを使わない理由の補強

### P5

初版済み。

主な行:

- P5開幕
- 光塵の剣
- パラダイス・リゲインド 1回目
- 光と闇の片翼
- 星霊の剣 1回目
- パンドラの櫃
- 光塵の剣 2回目
- パラダイス・リゲインド 2回目
- 星霊の剣 2回目
- 光塵の剣 3回目
- パラダイス・ロスト

次に足すとよいもの:

- パラダイス・リゲインドの塔/タンク強攻撃図
- 星霊の剣の向き確認
- P5リプの「2〜4回目」注記の根拠リンク

## 行の書式

通常行:

```html
<tr class="critical">
  <td class="time">00:17</td>
  <td>技名<span class="srcs"><a class="src-t" href="https://www.youtube.com/watch?v=iPbWtNaFu2U&t=245s" target="_blank" rel="noreferrer" title="タバスコ: 技名">T</a></span></td>
  <td>MTナイトの仕事</td>
  <td><span class="badge b-red">強攻撃</span></td>
  <td class="note">注意書き。</td>
</tr>
```

行クラス:

| class | 用途 |
|---|---|
| `critical` | 強攻撃、ヘイト、無敵、重要判断 |
| `move` | 移動、誘導、散開 |
| `party` | 全体攻撃、全員共通処理 |
| `mitigation` | 軽減、バフ、仕込み |

バッジ:

| class | 用途 |
|---|---|
| `b-red` | 強攻撃、挑発、ヘイト |
| `b-blue` | 全体軽減、タンクLB |
| `b-yellow` | 移動、誘導、設置 |
| `b-green` | 移行、撃破 |
| `b-purple` | 投げ軽減、無敵、要相談 |
| `b-cyan` | リプ、軽減 |

## 動画リンクタグ

現在はP2〜P5の初版で、主にタバスコさん動画へ `T` リンクを入れている。

```html
<span class="srcs">
  <a class="src-t" href="https://www.youtube.com/watch?v=iPbWtNaFu2U&t=903s" target="_blank" rel="noreferrer" title="タバスコ: パラダイス・リゲインド">T</a>
</span>
```

今後、リリードール/ぬけまる/しのしょーなどを追加する場合:

| 表示 | 用途 |
|---|---|
| `L` | リリードール |
| `S` | しのしょー |
| `T` | タバスコ |
| `N` | ぬけまるを使うなら追加候補。ただしCSSが必要になるため、現状はタイトルだけで区別するか既存タグを使う |

CSSを増やさない方針なら、P2以降も当面 `T` 中心でよい。

## 画像つき展開行

```html
<tr class="move clickable-row" data-toggle="p2-dd-detail" tabindex="0" aria-expanded="false">
  <td class="time">00:37</td>
  <td>ダイアモンドダスト<span class="toggle-hint">画像</span></td>
  <td>共通処理。MTは軽減と位置確認</td>
  <td><span class="badge b-yellow">散開</span></td>
  <td class="note">画像で確認。</td>
</tr>
<tr id="p2-dd-detail" class="detail-row">
  <td colspan="5">
    <div class="detail-panel">
      <figure class="figure">
        <figcaption class="figure-title">ダイアモンドダスト 散開</figcaption>
        <img src="ultimate_eden_p2_diamond_dust01.jpg" alt="ダイアモンドダスト散開図">
        <p class="figure-note">補足。</p>
      </figure>
    </div>
  </td>
</tr>
```

属性ラベルを使う場合:

```html
<figcaption class="figure-title fire">炎/赤: 4:4頭割り</figcaption>
<p class="figure-note lightning">雷/青: 散開。</p>
```

## 参考資料

### スプレッドシート

- [【FC固定】7.11 絶もうひとつの未来 軽減表](https://docs.google.com/spreadsheets/d/1QnWZ-NnSLWtdhoh7NlitH6-HpSwKH39GWESDNwjx4Zc/edit)

### ローカルMarkdown

```text
C:\Users\nakam\iCloudDrive\iCloud~md~obsidian\ff14_raids\ultimate\eden\crib_sheets\ultimate_eden_combined_timeline.md
C:\Users\nakam\iCloudDrive\iCloud~md~obsidian\ff14_raids\ultimate\eden\crib_sheets\ultimate_eden_tank_tabasco_notes.md
C:\Users\nakam\iCloudDrive\iCloud~md~obsidian\ff14_raids\ultimate\eden\crib_sheets\ultimate_eden_p1_lilidoll_notes.md
C:\Users\nakam\iCloudDrive\iCloud~md~obsidian\ff14_raids\ultimate\eden\links.md
```

### 主な動画

- タバスコさん タンク解説: `https://www.youtube.com/watch?v=iPbWtNaFu2U`
- リリードール P1: `https://www.youtube.com/watch?v=0HDstP0aU_Y`
- しのしょー P1: `https://www.youtube.com/watch?v=s2ULM2v7e5g`

## 公開手順

1. 作業コピー側で編集する。

```text
C:\Users\nakam\iCloudDrive\iCloud~md~obsidian\ff14_raids\ultimate\eden\publish
```

2. 確認後、Desktop公開フォルダへ戻す。

```text
C:\Users\nakam\Desktop\eden_cheatsheet_publish
```

3. GitHubへ自動アップする場合は、Git連携用フォルダへ反映してcommit/pushする。

```text
C:\Users\nakam\iCloudDrive\iCloud~md~obsidian\ff14_raids\ultimate\eden\publish_git
```

4. GitHubリポジトリ `eden` へ反映。

5. 数分後、GitHub Pagesに反映される。

## 次スレでCodexに渡す短い指示

```text
C:\Users\nakam\iCloudDrive\iCloud~md~obsidian\ff14_raids を作業場所にして。
ultimate\eden\publish\HANDOVER_P2-P5.md を読んでから、絶エデンMTナイトカンペサイトの続きをやって。
公開用フォルダは C:\Users\nakam\Desktop\eden_cheatsheet_publish。
P1は完成済み、P2〜P5は画像なし初版まで入っている。
次はP2から散開図・動画秒リンク・固定向け注意を足していきたい。
```

## 注意

- P2〜P5の内容はまだ初版。実戦確認前なので、断定しすぎない。
- 無敵/スイッチ/リプ分担は固定構成で変わる。
- ナイトMT + ガンブレST前提。暗黒ST資料をそのまま使わない。
- 画像追加後はスマホ表示で表が崩れていないか確認する。
