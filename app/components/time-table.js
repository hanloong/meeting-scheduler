import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'tbody',
  times: function() {
    var times = [];
    for(var i = 0; i < 24; i++) {
      times.push({ hour: i, min: 0 });
      times.push({ hour: i, min: 30 });
    }
    return times;
  }.property()
});
