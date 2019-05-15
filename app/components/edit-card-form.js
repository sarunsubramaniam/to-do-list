import Component from '@ember/component';

export default Component.extend({
  action: {
    save(ev) {
      ev.preventDefault();
      this.onsubmit(this.list, this.title);
    }
  }
});
