import {
  moduleForComponent,
  test
} from 'ember-qunit';

moduleForComponent('e-button', {
  // specify the other units that are required for this test
  // needs: ['component:foo', 'helper:bar']
});

test('it renders', function(assert) {
  assert.expect(5);

  // creates the component instance
  var component = this.subject();
  assert.equal(component._state, 'preRender');

  // renders the component to the page
  this.render();
  assert.equal(component._state, 'inDOM');
  assert.equal(component.get('computedClass'), 'btn-default btn-medium', 'button has default attributes');
  assert.equal(component.disabled, false, 'button is enabled');
  assert.equal(component.tagName, 'button', 'e-button tagName is button');
});

test('button has given attributes', function(assert) {
  assert.expect(3);
  var component = this.subject({
    aspect: 'primary',
    size: 'small',
  });

  // renders the component to the page
  this.render();
  assert.equal(component.aspect, 'primary');
  assert.equal(component.size, 'small');
  assert.equal(component.get('computedClass'), 'btn-primary btn-small');
});

test('button is disabled', function(assert) {
  assert.expect(1);
  var component = this.subject({
    disabled: true,
  });

  // renders the component to the page
  this.render();
  assert.equal(component.disabled, true, 'component is disabled');
});
