import Component from '@ember/component';
import { bool } from '@ember/object/computed';

export default Component.extend({
  tagName: 'button',
  attributeBindings: ['type', 'title'],
  classNameBindings: ['isActive:active'],
  type: 'button',
  isActive: bool('editor.activeMarkupTagNames.isImg'),
  click() {
    let editor = this.get('editor');
    editor.addCardInEditMode('mobiledoc-image-upload-card');
  }
});
