import Component from '@ember/component';

export default Component.extend({
  mobiledoc: undefined,
  onMobiledocUpdated: () => {},
  textSelected: false,

  tagName: '',

  actions: {
    mobiledocEditorWasCreated(editor) {
      this.set('editor', editor);

      editor.cursorDidChange(() => {
        this.set('textSelected', this.get('editor.range.direction'));
      });
    },
    mobiledocWasUpdated(updatedMobiledoc) {
      this.set('mobiledoc', updatedMobiledoc);
    }
  }
});
