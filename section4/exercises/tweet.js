/*
In the space below, add to the existing skeleton of a Tweet class.

- A tweet should have a (dynamic) author, content, timeStamp, numberOfLikes, and comments.
- A tweet should be able to increment the numberOfLikes and add to the list of comments.

Create several instances of your Tweet and log them to the console. Make sure the
tweet object instances _behave_ as expected.
*/

class Tweet {
  constructor(author, content, timeStamp, numberOfLikes, comments) {
    this.author = author;
    this.content = content;
    this.timeStamp = timeStamp;
    this.numberOfLikes = numberOfLikes;
    this.comments = comments;
  }

  incrementLikesAmount(incrementLikes) {
    this.numberOfLikes = this.numberOfLikes + incrementLikes;

  }

  addComment(newComment) {
    this.comments.push(newComment);

  }

};

var tweet1 = new Tweet("Daniel", "Working on a new Mindset!", "9/25/21 @ 11:11am", 45, ["You've got it!", "Preach!"])

console.log(tweet1);

var tweet2 = new Tweet("John", "Sunday Funday", "10/1/21 @ 3:14pm", 17, ["Where is this?", "Nice shirt!"]);

console.log(tweet2);

var tweet3 = new Tweet("Sally", "Love my new dress! :)", "11/14/21 @ 10:48am", 401, ["Gorgeous!", "What brand?"]);

console.log(tweet3);

tweet1.incrementLikesAmount(13);
console.log(tweet1);

tweet2.addComment("Miss you!");
console.log(tweet2);
