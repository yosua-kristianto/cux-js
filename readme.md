## Cux Js

Javascript utilities for you who're just too lazy to make validations, and utilities.

Just another Javascript helper library for free.

> Advantages
> * No other Javascript libraries are required
> * Development version for you to learn or even contribute
> * Minified version for you to use

## What's inside this repository?

### 1. cukx-validate.js
#### Contains form standard validations like only number allowed, only uppercase allowed, no space allowed, etc.

## How to use?

1. Include `cukx-validate.js` to your view file

> `<script type="text/javascript" src="cukx-validate.js"></script>`

2. Add class for desired validations

> `<input type="text" class="input-number-only" />`

### Also support `<textarea>`

> `<textarea class="input-alnum-only" maxlength="100"></textarea>`

## Supported validations

| NO | Class Name | Function |
|---|---|---|
| 1 | `input-number-only` | The text field only support number input. (Can't space) |
| 2 | `input-alphabeth-only` | The text field support alphabeth and space input only. |
| 3 | `input-alnum-only` | The text field support alphanumeric and space input only. |
| 4 | `input-lower-only` | The text field support lowercase alphabeth only. |
| 5 | `input-upper-only` | The text field support uppercase alphabeth only. |
| 6 | `cant-pre-space` | The text field can't have pre space as value. |
| 7 | `cant-space` | The text field can't have space. |
| 8 | `input-clock input-hour` | The text field have hour clock rule. (00-23) |
| 9 | `input-clock input-minute` | The text field have minute clock rule. (00-59) |
| 10 | `anti-xss` | The text field cannot put any code that make Cross-Site Scripting Attack possible. |
