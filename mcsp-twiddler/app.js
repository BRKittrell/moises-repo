const $body = $("body");

for (let i = 0; i < streams.home.length; i++) {
  const tweet = streams.home[i];
  const $tweet = $("<div></div>");
  $tweet.text("@" + tweet.user + ": " + tweet.message);
  $body.prepend($tweet);
}
