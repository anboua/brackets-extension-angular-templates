/*

The MIT License (MIT)

Copyright (c) 2016 dmcissokho.fr

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

*/
define(function (require, exports, module) {

	'use strict';

	var CommandManager = brackets.getModule('command/CommandManager'),
		EditorManager = brackets.getModule('editor/EditorManager'),
		Menus = brackets.getModule('command/Menus');


	function fixIndent(editor, spaces) {
		for (var i = 0; i < spaces; i++) {
			editor.document.replaceRange(' ', editor.getCursorPos());
		}
	}

	function handleJavaScriptFilter() {
		var editor = EditorManager.getFocusedEditor();
		if (editor) {
			var spaces = editor.getColOffset(editor.getCursorPos());
			editor.document.replaceRange('angular.module(\'MyApp.filters\')\n', editor.getCursorPos());
			fixIndent(editor, spaces + 4);
			editor.document.replaceRange('.filter(\'filterName\',\n', editor.getCursorPos());
			fixIndent(editor, spaces + 8);
			editor.document.replaceRange('function () {\n', editor.getCursorPos());
			fixIndent(editor, spaces + 12);
			editor.document.replaceRange('\'use strict\';\n', editor.getCursorPos());
			fixIndent(editor, spaces + 12);
			editor.document.replaceRange('return function () {\n', editor.getCursorPos());
			fixIndent(editor, spaces + 16);
			editor.document.replaceRange('/*your code */\n', editor.getCursorPos());
			fixIndent(editor, spaces + 12);
			editor.document.replaceRange('};\n', editor.getCursorPos());
			fixIndent(editor, spaces + 8);
			editor.document.replaceRange(' });\n', editor.getCursorPos());
		}
	}

	function handleJavaScriptService() {
		var editor = EditorManager.getFocusedEditor();
		if (editor) {
			var spaces = editor.getColOffset(editor.getCursorPos());
			editor.document.replaceRange('angular.module(\'MyApp.services\')\n', editor.getCursorPos());
			fixIndent(editor, spaces + 4);
			editor.document.replaceRange('.filter(\'serviceName\',[\n', editor.getCursorPos());
			fixIndent(editor, spaces + 8);
			editor.document.replaceRange('function () {\n', editor.getCursorPos());
			fixIndent(editor, spaces + 12);
			editor.document.replaceRange('\'use strict\';\n', editor.getCursorPos());
			fixIndent(editor, spaces + 12);
			editor.document.replaceRange('return function () {\n', editor.getCursorPos());
			fixIndent(editor, spaces + 16);
			editor.document.replaceRange('/*your code */\n', editor.getCursorPos());
			fixIndent(editor, spaces + 12);
			editor.document.replaceRange('};\n', editor.getCursorPos());
			fixIndent(editor, spaces + 8);
			editor.document.replaceRange(' }]);\n', editor.getCursorPos());
		}
	}

	function handleJavaScriptProvider() {
		var editor = EditorManager.getFocusedEditor();
		if (editor) {
			var spaces = editor.getColOffset(editor.getCursorPos());
			editor.document.replaceRange('angular.module(\'MyApp.providers\')\n', editor.getCursorPos());
			fixIndent(editor, spaces + 4);
			editor.document.replaceRange('.filter(\'providerName\',[\n', editor.getCursorPos());
			fixIndent(editor, spaces + 8);
			editor.document.replaceRange('function () {\n', editor.getCursorPos());
			fixIndent(editor, spaces + 12);
			editor.document.replaceRange('\'use strict\';\n', editor.getCursorPos());
			fixIndent(editor, spaces + 12);
			editor.document.replaceRange('return function () {\n', editor.getCursorPos());
			fixIndent(editor, spaces + 16);
			editor.document.replaceRange('/*your code */\n', editor.getCursorPos());
			fixIndent(editor, spaces + 12);
			editor.document.replaceRange('};\n', editor.getCursorPos());
			fixIndent(editor, spaces + 8);
			editor.document.replaceRange(' }]);\n', editor.getCursorPos());
		}
	}

	function handleJavaScriptController() {
		var editor = EditorManager.getFocusedEditor();
		if (editor) {
			var spaces = editor.getColOffset(editor.getCursorPos());
			editor.document.replaceRange('angular.module(\'MyApp.controllers\')\n', editor.getCursorPos());
			fixIndent(editor, spaces + 4);
			editor.document.replaceRange('.filter(\'controllerName\',[\n', editor.getCursorPos());
			fixIndent(editor, spaces + 8);
			editor.document.replaceRange('function () {\n', editor.getCursorPos());
			fixIndent(editor, spaces + 12);
			editor.document.replaceRange('\'use strict\';\n', editor.getCursorPos());
			fixIndent(editor, spaces + 12);
			editor.document.replaceRange('return function () {\n', editor.getCursorPos());
			fixIndent(editor, spaces + 16);
			editor.document.replaceRange('/*your code */\n', editor.getCursorPos());
			fixIndent(editor, spaces + 12);
			editor.document.replaceRange('};\n', editor.getCursorPos());
			fixIndent(editor, spaces + 8);
			editor.document.replaceRange(' }]);\n', editor.getCursorPos());
		}
	}

	function handleJavaScriptDirectiveE() {
		var editor = EditorManager.getFocusedEditor();
		if (editor) {
			var spaces = editor.getColOffset(editor.getCursorPos());
			editor.document.replaceRange('angular.module(\'MyApp.directives\')\n', editor.getCursorPos());
			fixIndent(editor, spaces + 4);
			editor.document.replaceRange('.filter(\'directiveName\',[\n', editor.getCursorPos());
			fixIndent(editor, spaces + 8);
			editor.document.replaceRange('function () {\n', editor.getCursorPos());
			fixIndent(editor, spaces + 12);
			editor.document.replaceRange('\'use strict\';\n', editor.getCursorPos());
			fixIndent(editor, spaces + 12);
			editor.document.replaceRange('return{\n', editor.getCursorPos());
			fixIndent(editor, spaces + 16);
			editor.document.replaceRange('restrict: \'E\',\n', editor.getCursorPos());
			fixIndent(editor, spaces + 16);
			editor.document.replaceRange('templateUrl:\'path/to/the/template.html\',\n', editor.getCursorPos());
			fixIndent(editor, spaces + 16);
			editor.document.replaceRange(' link: function () {\n', editor.getCursorPos());
			fixIndent(editor, spaces + 16);
			editor.document.replaceRange('/*your code */\n', editor.getCursorPos());
			fixIndent(editor, spaces + 16);
			editor.document.replaceRange('}\n', editor.getCursorPos());
			fixIndent(editor, spaces + 12);
			editor.document.replaceRange('};\n', editor.getCursorPos());
			fixIndent(editor, spaces + 8);
			editor.document.replaceRange(' }]);\n', editor.getCursorPos());
		}
	}

	function handleJavaScriptDirectiveA() {
		var editor = EditorManager.getFocusedEditor();
		if (editor) {
			var spaces = editor.getColOffset(editor.getCursorPos());
			editor.document.replaceRange('angular.module(\'MyApp.directives\')\n', editor.getCursorPos());
			fixIndent(editor, spaces + 4);
			editor.document.replaceRange('.filter(\'directiveName\',[\n', editor.getCursorPos());
			fixIndent(editor, spaces + 8);
			editor.document.replaceRange('function () {\n', editor.getCursorPos());
			fixIndent(editor, spaces + 12);
			editor.document.replaceRange('\'use strict\';\n', editor.getCursorPos());
			fixIndent(editor, spaces + 12);
			editor.document.replaceRange('return{\n', editor.getCursorPos());
			fixIndent(editor, spaces + 16);
			editor.document.replaceRange('restrict: \'A\',\n', editor.getCursorPos());
			fixIndent(editor, spaces + 16);
			editor.document.replaceRange(' link: function () {\n', editor.getCursorPos());
			fixIndent(editor, spaces + 16);
			editor.document.replaceRange('/*your code */\n', editor.getCursorPos());
			fixIndent(editor, spaces + 16);
			editor.document.replaceRange('}\n', editor.getCursorPos());
			fixIndent(editor, spaces + 12);
			editor.document.replaceRange('};\n', editor.getCursorPos());
			fixIndent(editor, spaces + 8);
			editor.document.replaceRange(' }]);\n', editor.getCursorPos());
		}
	}

	function handleJavaScriptApp() {
		var editor = EditorManager.getFocusedEditor();
		if (editor) {
			var spaces = editor.getColOffset(editor.getCursorPos());
			editor.document.replaceRange('angular.module(\'MyApp\', [\n', editor.getCursorPos());
			fixIndent(editor, spaces + 4);
			editor.document.replaceRange('\'MyApp.controllers\'\n', editor.getCursorPos());
			fixIndent(editor, spaces + 4);
			editor.document.replaceRange('\'MyApp.directives\'\n', editor.getCursorPos());
			fixIndent(editor, spaces + 4);
			editor.document.replaceRange('\'MyApp.providers\'\n', editor.getCursorPos());
			fixIndent(editor, spaces + 4);
			editor.document.replaceRange('\'MyApp.services\'\n', editor.getCursorPos());
			fixIndent(editor, spaces + 4);
			editor.document.replaceRange('\'MyApp.filters\'\n', editor.getCursorPos());
			fixIndent(editor, spaces);
			editor.document.replaceRange(']).config([\n', editor.getCursorPos());
			fixIndent(editor, spaces + 4);
			editor.document.replaceRange('function () {\n', editor.getCursorPos());
			fixIndent(editor, spaces + 8);
			editor.document.replaceRange('\'use strict\';\n', editor.getCursorPos());
			fixIndent(editor, spaces + 8);
			editor.document.replaceRange('/*your code */\n', editor.getCursorPos());
			fixIndent(editor, spaces + 4);
			editor.document.replaceRange('}\n', editor.getCursorPos());
			fixIndent(editor, spaces);
			editor.document.replaceRange(']).factory([\n', editor.getCursorPos());
			fixIndent(editor, spaces + 4);
			editor.document.replaceRange('function () {\n', editor.getCursorPos());
			fixIndent(editor, spaces + 8);
			editor.document.replaceRange('\'use strict\';\n', editor.getCursorPos());
			fixIndent(editor, spaces + 8);
			editor.document.replaceRange('/*your code */\n', editor.getCursorPos());
			fixIndent(editor, spaces + 4);
			editor.document.replaceRange('}\n', editor.getCursorPos());
			fixIndent(editor, spaces);
			editor.document.replaceRange(']).run([\n', editor.getCursorPos());
			fixIndent(editor, spaces + 4);
			editor.document.replaceRange('function () {\n', editor.getCursorPos());
			fixIndent(editor, spaces + 8);
			editor.document.replaceRange('\'use strict\';\n', editor.getCursorPos());
			fixIndent(editor, spaces + 8);
			editor.document.replaceRange('/*your code */\n', editor.getCursorPos());
			fixIndent(editor, spaces + 4);
			editor.document.replaceRange('}\n', editor.getCursorPos());
			fixIndent(editor, spaces);
			editor.document.replaceRange(']);\n', editor.getCursorPos());
			fixIndent(editor, spaces);
			editor.document.replaceRange('angular.module(\'MyApp.controllers\', []);\n', editor.getCursorPos());
			fixIndent(editor, spaces);
			editor.document.replaceRange('angular.module(\'MyApp.services\', []);\n', editor.getCursorPos());
			fixIndent(editor, spaces);
			editor.document.replaceRange('angular.module(\'MyApp.providers\', []);\n', editor.getCursorPos());
			fixIndent(editor, spaces);
			editor.document.replaceRange('angular.module(\'MyApp.directives\', []);\n', editor.getCursorPos());
			fixIndent(editor, spaces);
			editor.document.replaceRange('angular.module(\'MyApp.filters\', []);\n', editor.getCursorPos());
		}
	}

	function handleHTMLIndex() {
		var editor = EditorManager.getFocusedEditor();
		if (editor) {
			var spaces = editor.getColOffset(editor.getCursorPos());
			editor.document.replaceRange('<html lang="en" ng-app="MyApp" class="no-js">\n', editor.getCursorPos());
			fixIndent(editor, spaces + 4);
			editor.document.replaceRange('<head>\n', editor.getCursorPos());
			fixIndent(editor, spaces + 8);
			editor.document.replaceRange('<base href="/">\n', editor.getCursorPos());
			fixIndent(editor, spaces + 8);
			editor.document.replaceRange('<meta charset="utf-8">\n', editor.getCursorPos());
			fixIndent(editor, spaces + 8);
			editor.document.replaceRange('<title></title>\n', editor.getCursorPos());
			fixIndent(editor, spaces + 8);
			editor.document.replaceRange('<meta name="description" content="">\n', editor.getCursorPos());
			fixIndent(editor, spaces + 8);
			editor.document.replaceRange('<meta name="viewport" content="">\n', editor.getCursorPos());
			fixIndent(editor, spaces + 8);
			editor.document.replaceRange('<meta name="robots" content="">\n', editor.getCursorPos());
			fixIndent(editor, spaces + 8);
			editor.document.replaceRange('<link rel="stylesheet" type="text/css" href="">\n', editor.getCursorPos());
			fixIndent(editor, spaces + 8);
			editor.document.replaceRange('<link rel="shortcut icon" href="">\n', editor.getCursorPos());
			fixIndent(editor, spaces + 4);
			editor.document.replaceRange('</head>\n', editor.getCursorPos());
			fixIndent(editor, spaces + 4);
			editor.document.replaceRange('<body>\n', editor.getCursorPos());
			fixIndent(editor, spaces + 8);
			editor.document.replaceRange('<div ng-view></div>\n', editor.getCursorPos());
			fixIndent(editor, spaces + 8);
			editor.document.replaceRange('<script src="path/to/app/app.js"></script>\n', editor.getCursorPos());
			fixIndent(editor, spaces + 8);
			editor.document.replaceRange('<script src="path/to/angular/angular.js"></script>\n', editor.getCursorPos());
			fixIndent(editor, spaces + 4);
			editor.document.replaceRange('</body>\n', editor.getCursorPos());
			fixIndent(editor, spaces);
			editor.document.replaceRange('</html>\n', editor.getCursorPos());
		}
	}

	function handleScopeWatcher() {
		var editor = EditorManager.getFocusedEditor();
		if (editor) {
			var spaces = editor.getColOffset(editor.getCursorPos());
			editor.document.replaceRange(' $scope.$watch(\'contents\', function (newValue) { \n', editor.getCursorPos());
			fixIndent(editor, spaces + 4);
			editor.document.replaceRange('/*your code */\n', editor.getCursorPos());
			fixIndent(editor, spaces);
			editor.document.replaceRange(' });\n', editor.getCursorPos());
		}
	}

	function handleScopeListene() {
		var editor = EditorManager.getFocusedEditor();
		if (editor) {
			var spaces = editor.getColOffset(editor.getCursorPos());
			editor.document.replaceRange('$scope.$on(\'name\', function(event, data) {\n', editor.getCursorPos());
			fixIndent(editor, spaces + 4);
			editor.document.replaceRange('/*your code */\n', editor.getCursorPos());
			fixIndent(editor, spaces);
			editor.document.replaceRange(' });\n', editor.getCursorPos());
		}
	}

	function handleBind() {
		var editor = EditorManager.getFocusedEditor();
		if (editor) {
			var spaces = editor.getColOffset(editor.getCursorPos());
			editor.document.replaceRange('angular.element($window).bind(\'name\', function (event) { \n', editor.getCursorPos());
			fixIndent(editor, spaces + 4);
			editor.document.replaceRange('/*your code */\n', editor.getCursorPos());
			fixIndent(editor, spaces);
			editor.document.replaceRange(' });\n', editor.getCursorPos());
		}
	}


	var templateJavaScriptFilter = "write.javaScriptFilter";
	var templateJavaScriptService = "write.javaScriptService";
	var templateJavaScriptProvider = "write.javaScriptProvider";
	var templateJavaScriptController = "write.javaScriptController";
	var templateJavaScriptDirectiveA = "write.javaScriptDirectiveA";
	var templateJavaScriptDirectiveE = "write.javaScriptDirectiveE";
	var templateJavaScriptApp = "write.javaScriptApp";
	var bindEvent = "write.bindEvent";
	var scopeWatcher = "write.scopeWatcher";
	var scopeListener = "write.scopeListener";
	var templateHTMLIndex = "write.htmlIndex";

	CommandManager.register("Templates JS Filter", templateJavaScriptFilter, handleJavaScriptFilter);
	CommandManager.register("Templates JS Service", templateJavaScriptService, handleJavaScriptService);
	CommandManager.register("Templates JS Provider", templateJavaScriptProvider, handleJavaScriptProvider);
	CommandManager.register("Templates JS Controller", templateJavaScriptController, handleJavaScriptController);
	CommandManager.register("Templates JS Directive Attribut", templateJavaScriptDirectiveA, handleJavaScriptDirectiveA);
	CommandManager.register("Templates JS Directive Element", templateJavaScriptDirectiveE, handleJavaScriptDirectiveE);
	CommandManager.register("Templates JS App.js", templateJavaScriptApp, handleJavaScriptApp);
	CommandManager.register("Templates JS Watcher", scopeWatcher, handleScopeWatcher);
	CommandManager.register("Templates JS Listener", scopeListener, handleScopeListene);
	CommandManager.register("Templates JS Bind", bindEvent, handleBind);
	CommandManager.register("Templates HTML Index", templateHTMLIndex, handleHTMLIndex);

	var menu = Menus.addMenu("Angular Snippets", "BracketsAngularTemplates.custom.menu");
	menu.addMenuItem(templateJavaScriptApp);
	menu.addMenuItem(templateJavaScriptFilter);
	menu.addMenuItem(templateJavaScriptProvider);
	menu.addMenuItem(templateJavaScriptDirectiveA);
	menu.addMenuItem(templateJavaScriptDirectiveE);
	menu.addMenuItem(templateJavaScriptService);
	menu.addMenuItem(templateJavaScriptController);
	menu.addMenuDivider();
	menu.addMenuItem(bindEvent);
	menu.addMenuItem(scopeWatcher);
	menu.addMenuItem(scopeListener);

	menu.addMenuDivider();
	menu.addMenuItem(templateHTMLIndex);

});
