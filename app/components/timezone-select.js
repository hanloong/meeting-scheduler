import Ember from 'ember';
import moment from 'moment';

export default Ember.Component.extend({
  zone: null,
  options: function() {
    return moment.tz.names();
  }.property(),

  onChange: function() {
    this.get('zone').save();
  }.observes('zone.name'),

  actions: {
    delete: function() {
      this.get('zone').deleteRecord();
      this.get('zone').save();
    }
  }
});
