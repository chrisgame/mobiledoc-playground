import Component from '@ember/component';
import { computed } from '@ember/object';
import createComponentCard from 'ember-mobiledoc-editor/utils/create-component-card';

export default Component.extend({
  mobiledoc: undefined,
  textSelected: false,

  cards: computed(function() {
    return [
      createComponentCard('mobiledoc-image-upload-card')
    ];
  }),

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
