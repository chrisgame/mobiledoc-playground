import Component from '@ember/component';
import { computed } from '@ember/object';

import Renderer from 'mobiledoc-text-renderer';

export default Component.extend({
  mobiledoc: undefined,
  outputType: undefined,

  init() {
    this._super(...arguments);
    this.set('outputType', 'raw');
  },

  isOutputTypeRaw: computed.equal('outputType', 'raw'),
  isOutputTypeRendered: computed.equal('outputType', 'rendered'),
  isOutputTypeText: computed.equal('outputType', 'text'),

  mobiledocInText: computed('mobiledoc', function() {
    let mobiledoc = this.get('mobiledoc');
    let renderer = new Renderer();

    return mobiledoc ? renderer.render(mobiledoc).result : '';
  }),
});
