import Controller from '@ember/controller';
import { computed } from '@ember/object';
import Renderer from 'mobiledoc-text-renderer';
import createComponentCard from 'ember-mobiledoc-editor/utils/create-component-card';

export default Controller.extend({
  mobiledocExample: null,
  textSelected: false,

  cards: computed(function() {
    return [
      createComponentCard('mobiledoc-image-upload-card')
    ];
  }),

  cardNames: computed(function() {
    return [
      'mobiledoc-image-upload-card'
    ];
  }),

  mobiledocExampleInText: computed('mobiledocExample', function() {
    let mobiledocExample = this.get('mobiledocExample');
    let renderer = new Renderer();

    return mobiledocExample ? renderer.render(mobiledocExample).result : '';
  }),

  actions: {
    mobiledocEditorWasCreated(editor) {
      this.set('editor', editor);

      editor.cursorDidChange(() => {
        this.set('textSelected', this.get('editor.range.direction'));
      });
    },
    mobiledocWasUpdated(updatedMobiledoc) {
      this.set('mobiledocExample', updatedMobiledoc);
    }
  }
});
