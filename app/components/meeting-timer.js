import Ember from 'ember';

export default Ember.Component.extend({
  selectedDay: 'Monday',
  store: Ember.inject.service(),

  createZone: function(name = "Australia/Sydney") {
    var zone = this.get('store').createRecord('zone', {name: name});
    zone.save();
  },

  createSettings: function() {
    var setting = this.get('store').createRecord('setting');
    setting.save();
  },

  didInitAttrs: function() {
    if (this.get('zones.length') == 0) {
      this.createZone();
    }
    if (this.get('setting') == null) {
      //this.createSettings();
    }
  },
  actions: {
    addZone: function () {
      this.createZone();
    }
  }
});
