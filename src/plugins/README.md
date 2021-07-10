# api

外部への参照を本ディレクトリで行います。  
api 通信や外部ストレージへのアクセスなどを行います。  
ロジックは記述せず、入力パラメータから外部へアクセスし、そのレスポンスをそのまま返すようなシンプルな実装を記述してください。  

```ts
import axios from 'axios';
import querystring from 'querystring';

const findPokemonById = async (id: number) => {
    return axios.get(`http://localhost:3001/pokemons?${querystring.stringify({ id })}`);
}
```