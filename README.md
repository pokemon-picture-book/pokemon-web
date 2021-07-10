# pokemon-web

## Design
画面イメージなどのデザインは figma を用いています。

[ポケモン図鑑画面イメージ](https://www.figma.com/file/Mm8w7OLq3FZPKWYK4LlZ3N/%E3%83%9D%E3%82%B1%E3%83%A2%E3%83%B3%E5%9B%B3%E9%91%91?node-id=0%3A1)

## Project setup
セットアップをする前に、[pokemon.json](https://github.com/pokemon-picture-book/pokemon.json) を pokemon-web と同じ階層に **必ず clone してください**
pokemon-web を clone したら、まず最初に以下コマンドを実行してください ([pokemon-compose](https://github.com/pokemon-picture-book/pokemon-compose) の docker を用いる場合は必要ありません)

```
npm run img:sync
```

あとは docker で起動するもよし、ローカル実行するもよし、という感じです。

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your unit tests
```
npm run test:unit
```

### Run your end-to-end tests
```
npm run test:e2e
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
