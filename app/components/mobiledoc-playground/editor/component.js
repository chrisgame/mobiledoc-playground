import Component from '@ember/component';
import createComponentCard from 'ember-mobiledoc-editor/utils/create-component-card';
import { computed } from '@ember/object';

export default Component.extend({
  mobiledoc: undefined,
  onMobiledocUpdated: () => {},

  tagName: '',

  cards: computed(function() {
    return [
      createComponentCard('mobiledoc-playground/cards/code-block/card'),
    ];
  }),
});
