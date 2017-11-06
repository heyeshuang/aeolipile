# Aeolipile: your code and formula on Steem

<https://heyeshuang.github.io/aeolipile/#/@heyeshuang/aeolipile-your-code-and-formula-on-steem>

Please click ↑ for the README!

[Steem](https://steemit.com/) is a blockchain-based rewards platform for publishers to monetize content and grow community. However, the Steemit editor does not provide advanced markdown features, like code highlight, mathematical notation, etc. The lack makes it hard to write technical posts on Steem.

So I made this webpage to render Steem discussion with more markdown syntax enabled. Then we can use Steem for some...boring contents.

## Usage

You can easily append author name and post link after <https://heyeshuang.github.io/aeolipile/#/>, like this:

```
https://heyeshuang.github.io/aeolipile/#/@USERNAME/PERMLINK/
```
Similar with the Steemit URL. And you can simply add this link before your post, just like me. :wink:

### Features
With [markdown-it](https://github.com/markdown-it/markdown-it), you can get almost every feature for [GitHub Flavored Markdown
](https://guides.github.com/features/mastering-markdown/#GitHub-flavored-markdown).
#### Code!
Place your code between \`\`\` like [this](https://help.github.com/articles/creating-and-highlighting-code-blocks/), then you'll get a codeblock:

```ruby
require 'redcarpet'
markdown = Redcarpet.new("Hello World!")
puts markdown.to_html
```

#### Math!

You can write TeX between `$$` tags.

$$\hat{y}= \sigma(\omega^T X+b)=\frac{1}{1+e^{-(\omega^T X+b)}}$$

#### Emoji!

:)

#### Other advanced stynax!

You can check <https://heyeshuang.github.io/aeolipile/#/@sean0010/markdown-test> for the markdown test. Almost everything!

#### and ...
This page is not a replacement of steemit.com or else, so I will keep it simple & stupid. Welcome to fork me at <https://github.com/heyeshuang/aeolipile>!


## TODO
* [x] loading page
* [x] error handing
* [ ] beautiful styles
    * [x] load Google font, maybe Web Font Loader?
      * [x] Wait! It cant be used in China!
    * [ ] Experimental: CHINESE web font!
    * [x] code tag
* [x] change the theme
* [ ] trim!
  * [ ] ElementUI
  * [x] highlight.js
  * [ ] dsteem
  * [ ] KaTeX
  * [x] Vue
  * [ ] lodash -> typography
* [ ] author page
* [x] router
* [ ] table of contents
* [x] page to get permlink
* [ ] links for homepage
* [ ] and this readme
  * Some credits!

## Environment

`Node >= 6`

## Start

 - Clone or download this repository
 - Enter your local directory, and install dependencies:

``` bash
yarn
```

## Develop

``` bash
# serve with hot reload at localhost:8010
npm run dev
```

## Build

``` bash
# build for production with minification
npm run build
```
