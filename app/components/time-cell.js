import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'td',
  classNameBindings: ['inTime:table-success', 'nearTime:table-warning', 'outTime:table-danger'],

  tHour: function() {
    return parseInt(this.get('moment').tz(this.get('zone')).format('HH'));
  }.property('moment'),

  tMin: function() {
    return parseInt(this.get('moment').tz(this.get('zone')).format('mm'));
  }.property('moment'),

  inTime: function() {
    if (this.get('tHour') > 8 && this.get('tHour') < 19) {
      return true;
    } else {
      return false;
    }
  }.property('moment'),

  nearTime: function() {
    if (this.get('tHour') == 8 || this.get('tHour') == 19) {
      return true;
    } else {
      return false;
    }
  }.property('moment'),

  outTime: function() {
    if (this.get('inTime') || this.get('nearTime')) {
      return false;
    } else {
      return true;
    }
  }.property('moment'),

  moment: function() {
    return moment.tz(this.get('hour') + ":" + this.get('min'), "HH:mm", "Australia/Sydney")
  }.property('zone', 'min', 'hour'),

  formattedTime: function() {
    return this.get('moment').tz(this.get('zone')).format('H:mm A');
  }.property('moment')
});
