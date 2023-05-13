function Tweet() {
  const avatar = "https://i.imgur.com/73hZDYK.png";
  const firstName = "Newton";
  const handle = "@SirIsaac";
  const tweetBody =
    "If I have seen further it is by standing on the shoulders of giants";
  const tweetAge = "10 days ago";
  return (
    <article className="tweet">
      <header className="tweet--header">
        <img className="tweet--avatar" src={avatar} />
        <h2 className="tweet--name">{firstName}</h2>
        <small className="tweet--handle">{handle}</small>
      </header>

      <div className="tweet--body">
        <p>{tweetBody}</p>
      </div>

      <footer className="tweet--footer">
        <small className="footer--age">
          {tweetAge}
          <small>
            <span className="footer--actions">
              <a href="#">
                <i className="fa fa-flag"></i>
              </a>
              <a href="#">
                <i className="fa fa-retweet"></i>
              </a>
              <a href="#">
                <i className="fa fa-heart"></i>
              </a>
              '
            </span>
          </small>
        </small>
      </footer>
    </article>
  );
}

export default Tweet;
