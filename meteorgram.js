if (Meteor.isClient){
  Template.body.helpers({
    picture: function(){
      return Session.get('picture');
    }
  });
}
