import Ember from 'ember';

export default Ember.Controller.extend({
  isValid: Ember.computed(
    'model.title',
    'model.description',
    {
      get() {
        return !Ember.isEmpty(this.get('model.title')) &&
               !Ember.isEmpty(this.get('model.description'));
      }
    }
  ),
  actions: {
    save() {
      if (this.get('isValid')) {
        this.get('model').save().then((photo) => {
          this.transitionToRoute('photos.show', photo);
        });
      } else {
        this.set('errorMessage', 'You have to fill all the fields');
      }

      return false;
    },
    cancel() {
      this.transitionToRoute('photos');

      return false;
    }
  }
});
