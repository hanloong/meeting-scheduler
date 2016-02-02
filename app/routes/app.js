import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return {
      setting: this.store.findAll('setting').get('firstObject'),
      zones: this.store.findAll('zone')
    };
  }
});
