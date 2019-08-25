import Component from '@ember/component';

export default Component.extend({
  tagName: '',

  editor: undefined,
  payload: undefined,
  cardName: undefined,
  postModel: undefined,
  editCard: () => {},
  saveCard: () => {},
  cancelCard: () => {},
  removeCard: () => {},

  init() {
    this._super(...arguments);
    if (!this.payload.codeBlockContent) {
      this.set('payload',
      {
        codeBlockContent: {
          'version': '0.3.1',
          'atoms': [],
          'cards': [],
          'markups': [],
          'sections': [],
        },
      });
    }
  },
});
