/*---------------------------------------------------------
 * Copyright (C) Microsoft Corporation. All rights reserved.
 *--------------------------------------------------------*/

import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {

	const provider = vscode.languages.registerCompletionItemProvider('plaintext', {

		provideCompletionItems(document: vscode.TextDocument, position: vscode.Position, token: vscode.CancellationToken, context: vscode.CompletionContext) {

			const sole = new vscode.CompletionItem('sole');

			const console = new vscode.CompletionItem('con-sole');

			// return all completion items as array
			return [
				sole,
				console
			];
		}
	});

	context.subscriptions.push(provider);
}
