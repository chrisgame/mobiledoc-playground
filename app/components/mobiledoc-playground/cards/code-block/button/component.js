import Component from '@ember/component';

export default Component.extend({
  editor: undefined,

  tagName: '',

  actions: {
    addCard() {
      let editor = this.get('editor');

      editor.addCardInEditMode(
        'mobiledoc-playground/cards/code-block/card',
        {
          createdByButton: true
        }
      );
    },
  },
});
