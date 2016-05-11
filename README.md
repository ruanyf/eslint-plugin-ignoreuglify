# eslint-plugin-ignoreuglify

exclude uglified files from Eslint

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-ignoreuglify`:

```
$ npm install eslint-plugin-ignoreuglify --save-dev
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `eslint-plugin-ignoreuglify` globally.

## Usage

Add `ignoreuglify` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "ignoreuglify"
    ]
}
```





