# CodeMap
This vscode extension (.vsix) should be placed in the directory 'WORKSPACE/code-map-ide-extension'.

1.Open target file when click in 3D model.
It listens to the 'contralmarks.json' file and will open the target file and corresponding line when changes in the 'contralmarks.json' file.
When the 'contralmarks.json' file is closed, the change listening will not work, so the command below should be used to open the target file or open the 'contralmarks.json' file again.
'Command Palette', the command is 'Open Target File' and the keybinding is 'ctrl + i' or 'cmd+i'.

2.Hover Provider.
Set provider file in Setting>>Extension in advance.

3.Draw Line.
Should use "npm install express" and "npm install open" firstly, and then "node drawLine" to run the drawLine.js in the environment of Node.js
