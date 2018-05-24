import Component from '@ember/component';
import $ from 'jquery';

export default Component.extend({
  //Attrs
  payload: null,
  cardName: null,
  editor: null,
  postModel: null,

  didRender() {
    $('input').click();
  },

  actions: {
    handleFileUpload(evt) {
      let file = evt.target.files[0];
      let reader = new FileReader();

      reader.onloadend = (endEvent => {
        if (endEvent.target.readyState == FileReader.DONE) {
          let file = endEvent.target;
          console.log(endEvent.target);

          let imgSrc = 'https://www.fillmurray.com/200/300';

          this.saveCard({ imgSrc });
        }
      });

      let blob = file.slice(0, file.size);
      reader.readAsText(blob);
    }
  }
});
