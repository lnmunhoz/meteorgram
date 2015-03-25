if (Meteor.isClient){
  Template.camera_button.events({
    'click #camera-button': function(){

      // Define the camera settings
      var options = {
        width: 640,
        height: 640,
        quality: 100
      };

      MeteorCamera.getPicture(options, function(error, data){
        if (error){
          console.log(error); // Handle the error as you wish
        }else{
          Session.set('picture', data);
        }
      });
    }
  });

}
