import Controller from '@ember/controller';
import { computed } from '@ember/object';
import Renderer from 'mobiledoc-text-renderer';

export default Controller.extend({
  mobiledocExample: null,

  mobiledocExampleInText: computed('mobiledocExample', function() {
    let mobiledocExample = this.get('mobiledocExample');
    let renderer = new Renderer();

    return mobiledocExample ? renderer.render(mobiledocExample).result : '';
  }),

  actions: {
    mobiledocWasUpdated(updatedMobiledoc) {
      this.set('mobiledocExample', updatedMobiledoc);
    }
  }
});
