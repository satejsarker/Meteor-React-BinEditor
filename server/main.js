import { Meteor } from 'meteor/meteor';
import { Bins } from '../imports/collections/Bin';

Meteor.startup(() => {
  // code to run on server at startup


  Meteor.publish('bins',function(){
   
     return Bins.find({ownerId:this.userId})
  });
  Meteor.publish('shareBins',function(){
    const user = Meteor.users.findOne(this.userId)
    if(!user)
    {return;}

    const email=user.emails[0].address;
    return Bins.find({
      shareWith:{ $elemMatch: {$eq: email}}
    })
  })
});
