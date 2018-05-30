import Component from '@ember/component';
import $ from 'jquery';
import ENV from 'mobiledoc-playground/config/environment';

export default Component.extend({
  //Attrs
  payload: null,
  cardName: null,
  editor: null,
  postModel: null,

  init() {
    this._super(...arguments);
    AWS.config.update({
      region: ENV.BUCKET_REGION,
      credentials: new AWS.CognitoIdentityCredentials({
        IdentityPoolId: ENV.IDENTITY_POOL_ID
      })
    });

    this.set('s3', new AWS.S3({
      apiVersion: '2006-03-01',
      params: { Bucket: ENV.BUCKET_NAME }
    }));
  },

  didRender() {
    $('input').click();
  },

  actions: {
    handleFileUpload(evt) {
      let file = evt.target.files[0];
      let filename = `123123-123-123-12.png`;
      let imgSrc = `https://s3-${ ENV.BUCKET_REGION }.amazonaws.com/${ ENV.BUCKET_NAME }/${ filename }`;
      let reader = new FileReader();
      let s3 = this.get('s3');

      s3.upload({
        Key: filename,
        Body: file,
        ACL: 'public-read'
      }, function(err) {
        if (err) {
          return alert('Error uploading file', err.message);
        }
      });

      this.saveCard({ imgSrc: imgSrc });

      let blob = file.slice(0, file.size);
      reader.readAsText(blob);
    }
  }
});
