# bakutan-memory-archive

このあたりの文章、だいたいやってなくてケチりまくり実装しています

## ディレクトリ別のざっくり説明
### interface
- バックエンドとWebフロントエンドを結びつけるための定義周りを置く場所
- OpenAPIで定義している

### backend
- バックエンドの実装
- Go + echo + generated codes(by OpenAPI Generator)
- 現状の設計思想としてはデータベースのデータをそのままフロントに流す役
- 当面は多少のバリデーション(ex: input types, reCAPTCHA...)くらいでロジックはクエリ部分で大体完結するので、フロントからの橋渡しにすぎずテストを書く予定はなくて、したがって実装間は直接依存とする
  - 何らかの理由でモックなどしたい場合はDIする構造に付け替える予定
- 実装の簡素化のために以下のどちらも許容する
  - エンドポイントエントリー -> usecase -> repository
  - エンドポイントエントリー -> repository
    - inputのバリエーションくらいで済むならロジックを持つほどではないし、そのときに楽したいな〜というやつ


### frontend
- Webフロントエンドの実装
- Remix + Tailwind + generated codes(by OpenAPI Generator)
- PC/SPをともにサポート


## architecture diagram
**こっちは今のところ方針通りの図です。**

![](./docs/architecture_diagram.svg)

## メモなど
**以下の文章は旧アイデアであり、大きく機能を削減・変更しています。落ち着いたらアップデートしますが常に最新を示すものではありません。**

[さなのばくたん会場を残す話(Scrapbox)](https://scrapbox.io/marco3jp/%E3%81%95%E3%81%AA%E3%81%AE%E3%81%B0%E3%81%8F%E3%81%9F%E3%82%93%E4%BC%9A%E5%A0%B4%E3%82%92%E6%AE%8B%E3%81%99%E8%A9%B1)
