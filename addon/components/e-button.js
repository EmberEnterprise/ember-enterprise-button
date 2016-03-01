import Ember from 'ember';
import layout from '../templates/components/e-button';

export default Ember.Component.extend({
  layout: layout,
  tagName: 'button',

  classNames: [
    'e-button',
  ],
  classNameBindings: [
    'disabled',
  ],
  attributeBindings: [
    'autofocus',
    'disabled',
    'type',
    'title',
    'name',
    'size',
  ],
  autofocus: false,
  disabled: false,
  type: 'button',
  title: null,
  name: null,
  text: null,
  size: 'md',
  onclick: Ember.on('click', function(event) {
    if (!Ember.ViewUtils.isSimpleClick(event)) {
      return true;
    }

    if (!this.get('disabled') && jQuery.isFunction(this.attrs['on-click'])) {
      this.attrs['on-click'](this.get('id'));
    }
  }),
});
