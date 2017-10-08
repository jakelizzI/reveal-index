# reveal-index

`{root}/md/`配下に置いたmdファイルを目次として表示し、その目次リンクをクリックするとそのmdファイルをreveal.jsで表示することができるサーバーです。

# getting started

* __nodejs__と__npm__が必要です。

```shell
$ git clone https://github.com/jakelizzI/reveal-index.git
$ cd reveal-index
$ npm install
$ npm start
```

# motivation

* 社内で勉強会等を開く際に、パワポを使いたくなかった。
* MDで簡単にかっこよく書きたかった！
* 普段javaなどのかたい言語しかいじっていないので、NodeとExpressのような柔らかい言語？の勉強がしてみたかった。  

# version

自分の環境は下記の通りです。特に変なこともしていないと思うので他バージョンでも動くと思います。

* node : v6.11.3
* npm : 3.10.10

# caution

## markdown

|項目|内容|
|:-|:-|
|改行|`^\n---\n$`|
|改行(縦)|`^\n>>>\n$`|
|カンペ|`^note:`|

* `/md`ディレクトリ直下のもののみIndexに表示されます。後々直したいですが今はディレクトリもリンクになっちゃいます。

## index

目次のCSSはExpressのデフォルトのものを使用しています。  
目次のHTMLに適当に注意書きを書いちゃってますので、使用するときは適当に直してください。

# versioning

`major.minor.bugfix`で  

1. 設定ファイルでいろいろ設定できるように
1. 表示を整える。（CSSの調整）
1. mdディレクトリ配下を階層化できるように

上記の３つができたらvirsion1.0ですかね？
