require.config({
    paths: {
        "text": "lib/text",
        "i18n": "lib/i18n"
    },
    locale: brackets.getLocale()
});

define(function (require, exports, module) {

    'use strict';

    var CommandManager = brackets.getModule('command/CommandManager'),
        EditorManager = brackets.getModule('editor/EditorManager'),
        Menus = brackets.getModule('command/Menus'),
        Dialogs = brackets.getModule('widgets/Dialogs');

    // load up modal content, don't forget text! at beginning of file name
    var modal = require('text!html/modal.html');
    var Strings = require('strings');

    function action() {

        Dialogs.showModalDialogUsingTemplate(Mustache.render(modal, Strings));

        var editor = EditorManager.getCurrentFullEditor();
        if (editor) {
            if (editor._codeMirror.getValue().length > 0) {
                // file has content, show warning
                $('#templates_warning').show();
            }
        } else {
            // no file is open, show error
            $('#templates_error').show();
        }

        // result of clicking a template choice
        // selector is very specific to avoid cross-extension contamination, just in case
        $('#templates_modal select#standard, #templates_modal select#frameworks').on('change', function () {
            // send the chosen template
            chosenTemplate($(this).val());
        });

        var chosenTemplate = function (choice) {
            // grab the html to be inserted into file
            var template;
            switch (choice) {
                // html
            case 'index':
                template = require('text!templates/html/index.html');
                break;
                // js
            case 'app':
                template = require('templates/js/app.js');
                break;
            case 'filter':
                template = require('templates/js/filter.js');
                break;
            case 'service':
                template = require('templates/js/service.js');
                break;
            case 'factory':
                template = require('templates/js/factory.js');
                break;
            case 'provider':
                template = require('templates/js/provider.js');
                break;
            case 'directiveA':
                template = require('templates/js/directiveAttribut.js');
                break;
            case 'directiveE':
                template = require('templates/js/directiveElement.js');
                break;
            case 'controller':
                template = require('templates/js/controller.js');
                break;
            default:
                template = 'Erreur de route.';
            }

            // insert html into file, this will overwrite whatever content happens to be there already
            EditorManager.getCurrentFullEditor()._codeMirror.setValue(template);

            // automatically close the modal window
            $('#templates_modalBtn').click();
        };

    }

    // Register the commands and insert in the File menu
    CommandManager.register(Strings.MENU_COMMAND, 'templates', action);
    var menu = Menus.getMenu(Menus.AppMenuBar.EDIT_MENU);
    menu.addMenuDivider();
    menu.addMenuItem('templates');

});