import Ember from 'ember';

export default Ember.Component.extend({
  selectedDay: null,
  days: Ember.A(['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'])
});
