
Session.setDefault( 'mostRecentTweetSessionData', 'Hey, enter in some text and hit submit!' );

Template.recentUpdates.helpers({
  tweetText: function () {
    return Session.get( 'mostRecentTweetSessionData' );
  }
});

Template.submitTweetLayout.events({
  'click button': function () {
      
    Session.set( 'mostRecentTweetSessionData', $("#tweetInputBox").val() );
      
    // Reset textarea and clear text
    $("#tweetInputBox").val(' ');
  }
});


