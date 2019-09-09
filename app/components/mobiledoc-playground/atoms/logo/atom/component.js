import Component from '@ember/component';

export default Component.extend({
  tagName: '',

  editor: undefined,
  options: undefined,
  payload: undefined,
  postModel: undefined,
  value: undefined,
  saveAtom: () => {},
});
