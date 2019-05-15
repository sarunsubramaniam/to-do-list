import Controller from '@ember/controller';

export default Controller.extend({
  action: {
    updateCard(list, title) {
      this.model.setProperties({list, title});
      this.model.save();
    },
    deleteCard() {
      this.model.destroyRecord()
        .then(() => {
          this.transitionToRoute('cards');
        });
    }
  }
});
