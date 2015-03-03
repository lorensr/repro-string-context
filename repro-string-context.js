if (Meteor.isClient) {
  Template.body.helpers({
    helper: function () {
      console.log(typeof this);
      console.dir(this);
      Meteor.users.findOne(this);
    }
  });
}

