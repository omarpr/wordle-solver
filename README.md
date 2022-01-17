## Wordle Solver

### Game URL
https://www.powerlanguage.co.uk/wordle/

### How to use and run the script
1. Run `npm install`
2. Open `index.js` and modify the rules:
```
const LENGTH = 5
const INCLUDES = 'rise'
const EXCLUDES = 'a'
const MATCH = '__i_e'
```
3. Run the script
```
node index.js
```
4. An output of word matches should be shown
```
[
  'brise', 'crise',
  'frise', 'grise',
  'prise', 'shire',
  'spire', 'stire',
  'swire'
]
```