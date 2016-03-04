import {
  moduleForComponent,
  test
} from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('e-button', {
  // specify the other units that are required for this test
  // needs: ['component:foo', 'helper:bar']
  integration: true,
});

test('e-button renders in block form', function(assert) {
  assert.expect(2);

  this.render(hbs`{{#e-button tagName='span'}}myButton{{/e-button}}`);

  assert.equal(this.$('span').text().trim(), 'myButton', 'button text is correct');
  assert.equal(this.$('span').attr('class'), 'ember-view e-button btn-default btn-medium', 'button classes are correct');
});

test('e-button onclick is working correctly', function(assert) {
  let flag = false;
  this.set('exampleAction', function() {flag = true;});

  this.render(hbs`{{e-button text='myButton' onclick=(action exampleAction)}}`);

  //Click on the button
  this.$('button').click();

  assert.equal(flag, true, 'exampleAction was triggered on click');

  // TODO: test long click , clock down
});
