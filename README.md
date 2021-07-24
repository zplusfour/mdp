# MDP
MDP stands for **M**ark**d**own **P**reviewer, and it's job to preview your markdown files in your terminal.
***
## Installation
Requirements:
- Node v12.18.1 or higher
- TypeScript

Linux:
```sh
wget https://raw.githubusercontent.com/zplusfour/mdp/master/src/index.ts # gets the main file from the Github repo
npx tsc index.ts # compile the file to clean javascript
npx pkg index.js --target linux --output mdp # convert the javascript file to executable
```

Windows:
- PowerShell:
  The same as Linux but replace `wget` with `iwr`

Macos (Darwin):
- Same as Linux

***
## Usage:
```sh
mdp [file]
```
Example:
```sh
mdp README.md ↩
*parsed markdown*
```

### HOPE YA ENJOY, PEACE!