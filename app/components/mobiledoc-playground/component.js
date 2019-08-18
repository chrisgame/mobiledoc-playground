import Component from '@ember/component';

export default Component.extend({
  mobiledoc: undefined,

  tagName: '',

  actions: {
    updateMobiledoc(updatedMobiledoc) {
      this.set('mobiledoc', updatedMobiledoc);
    },
  },
});
