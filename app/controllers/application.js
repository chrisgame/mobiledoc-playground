import Controller from '@ember/controller';

export default Controller.extend({
  init() {
    this._super(...arguments);
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
});
