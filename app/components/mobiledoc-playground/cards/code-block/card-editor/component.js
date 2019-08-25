import Component from '@ember/component';

export default Component.extend({
  editor: undefined,
  payload: undefined,
  cardName: undefined,
  postModel: undefined,
  editCard: () => {},
  saveCard: () => {},
  cancelCard: () => {},
  removeCard: () => {},

  tagName: 'div',

  actions: {
    saveCard() {
      let payloadToSave = {};
      let uneditedCodeBlockContent = this.get('payload.codeBlockContent');
      let editedCodeBlockContent = this.get('codeBlockContent');

      payloadToSave.codeBlockContent = editedCodeBlockContent || uneditedCodeBlockContent;

      this.saveCard(payloadToSave);
    },

    cancelCard() {
      let createdByButton = this.get('payload.createdByButton');

      if (createdByButton) {
        this.removeCard();
      }
      this.cancelCard();
    },
  },
});
