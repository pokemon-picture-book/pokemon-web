# molecules

### 定義: 2つ以上のatomを使用したもの

molecules の条件として、以下の3点だけを設定しています。  

* atoms を複数組み合わせたもの  
* 複数コンポーネントから呼び出す想定があるもの  
* store 参照をしない  

こちらも複数コンポーネントからの呼び出しを想定しているので、atoms と同じようにコンポーネント名に `m-xxx` (※) をつけています。  
※ 01-atoms/README を参照