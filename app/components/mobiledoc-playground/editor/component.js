import Component from '@ember/component';
import { computed } from '@ember/object';

import createComponentAtom from 'ember-mobiledoc-editor/utils/create-component-atom';

export default Component.extend({
  mobiledoc: undefined,
  onMobiledocUpdated: () => {},

  tagName: '',

  atoms: computed(function() {
    return [
      createComponentAtom('mobiledoc-playground/atoms/logo/atom')
    ];
  }),

  actions: {
    mobiledocEditorWasCreated(editor) {
      this.set('editor', editor);

      editor.onTextInput({
        text: ' ember ',
        run(postEditor) {
          let lengthOfText = this.text.length;
          let backwardsByTextLength = -Math.abs(lengthOfText);

          postEditor.deleteRange(editor.range.extend(backwardsByTextLength));

          editor.insertText(' ');
          editor.insertAtom(
            'mobiledoc-playground/atoms/logo/atom',
            'ember',
            {
              imageUrl: 'https://emberjs.com/images/brand/ember_Ember-Dark-80b69143e1da02507f58f8de460a4072.png',
              emoji: '🐹'
            }
          );
          editor.insertText(' ');
        }
      });
    },
  }
});
