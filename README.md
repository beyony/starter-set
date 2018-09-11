We're now using prettier and eslint for code formatting!

1. Install eslint plugin in vscode

2. Go to User Settings in vscode and set: 
<<<<<>>>>>
"editor.formatOnSave": true,
// turn off for JS
"[javascript]": {
    "editor.formatOnSave": false
},
"eslint.autoFixOnSave": true,
"eslint.alwaysShowStatus": true
<<<<<>>>>>

..to enable auto formatting after hitting save ;)
