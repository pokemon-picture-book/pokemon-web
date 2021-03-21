# components

コンポーネントやそのコンポーネントで用いる関数ロジックなどを集めたディレクトリとなります。  
それぞれのディレクトリにおける詳細はそれぞれのディレクトリの README を参照ください。  
下記に簡単なディレクトリ構成をまとめたものを記載します。  

| ディレクトリ | 内容 |
|:--|:--|
| 01-atoms | button, input など |
| 02-molecules | 入力フォーム（見出し+パーツ）、スライダー、<br>カード型 UI など |
| 03-organisms | ログイン、エラー、ローディング、notification など |
| 05-pages | ページのコンテンツ |
| api | axios での ajax 通信、web ストレージへのアクセス |
| module | 汎用的な関数。<br>バリデーションや userAgent 判定など |

本プロジェクトでは、Atomic Design の template は用いていません。（そのため `04-templates` が存在しない構成となっています）  