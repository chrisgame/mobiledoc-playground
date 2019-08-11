import Controller from '@ember/controller';
import { computed } from '@ember/object';
import Renderer from 'mobiledoc-text-renderer';
import createComponentCard from 'ember-mobiledoc-editor/utils/create-component-card';

export default Controller.extend({
  outputType: undefined,
  mobiledocExample: null,
  textSelected: false,

  init() {
    this._super(...arguments);
    this.set('outputType', 'raw');
    this.set(
      'mobiledocExample',
      {
        "version": "0.3.1",
        "atoms": [],
        "cards": [],
        "markups": [],
        "sections": [[1,"p",[]]]
      }
    );
  },

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

  isOutputTypeRaw: computed.equal('outputType', 'raw'),
  isOutputTypeRendered: computed.equal('outputType', 'rendered'),
  isOutputTypeText: computed.equal('outputType', 'text'),

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
