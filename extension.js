// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode');

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension is now active!');
	require('./openFile.js')(context);
	require('./openTheFile.js')(context);
	require('./hover')(context);
	
}
//exports.activate = activate;

// this method is called when your extension is deactivated
function deactivate() {
	console.log('Congratulations, your extension is now deactive!');
}

module.exports = {
	activate,
	deactivate
}
