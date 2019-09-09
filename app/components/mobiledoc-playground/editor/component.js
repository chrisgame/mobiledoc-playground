import Component from '@ember/component';

export default Component.extend({
  mobiledoc: undefined,
  onMobiledocUpdated: () => {},

  tagName: '',

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
              imageUrl: 'https://emberjs.com/images/brand/ember_Ember-Dark-80b69143e1da02507f58f8de460a4072.png'
            }
          );
          editor.insertText(' ');
        }
      });
    },
  }
});
