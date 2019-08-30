import Component from '@ember/component';
import { computed } from '@ember/object';

import createComponentCard from 'ember-mobiledoc-editor/utils/create-component-card';
import preToCardParser from 'mobiledoc-playground/components/mobiledoc-playground/cards/code-block/htmlToCardParser';

export default Component.extend({
  mobiledoc: undefined,
  onMobiledocUpdated: () => {},

  tagName: '',

  cards: computed(function() {
    return [
      createComponentCard('mobiledoc-playground/cards/code-block/card'),
    ];
  }),

  options: computed(function() {
    return {
      parserPlugins: [
        preToCardParser
      ]
    };
  }),
});
