import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
  tagName: '',

  editor: undefined,
  options: undefined,
  payload: undefined,
  postModel: undefined,
  value: undefined,
  saveAtom: () => {},

  showText: computed.equal('options.logoAtomOptions', 'text'),
  showEmoji: computed.equal('options.logoAtomOptions', 'emoji'),
});
