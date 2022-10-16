const PostItem = (posts) => {
  return(`
    <div class="pos-relative">
    <div>
      <img class="pos-relative-headshot user-img-round " src="${posts.headshot}">
    </div>
    <div class="pos-relative-nudge-up-right mt-3">
        <p class="title-font-color author-font-size">${posts.userName}
        <span class="handle-color">${posts.handle} . ${posts.time}</span>
        </p>
    </div>
    <div class="pos-relative-nudge-up-right-main-text main-text-dimension">
      <p class="title-font-color author-font-size main-text-margin">
          ${posts.heading}
      </p>
    </div>
    <div class="grid-row pos-lecture-img border-solid border-color border-thin dimension-lecture rounded-corners-all-around">
      <div>
        <img class="lecture-img-round" src="${posts.image}">
      </div>
      <div class="border-solid border-color border-thin border-top-only">
        <p class="text-padded white-bold-title author-font-size">${posts.tweetHeading}
          <br>
        <span class="handle-color white-light-title">${posts.tweet}</span></p>
      </div>
          <div class="grid-margin-top grid-col-one-four-page">
            <i href="#" class="fas fa-comment" style="color: lightgray"> ${posts.comment}</i>
          </div>
          <div class="grid-margin-top grid-col-one-four-page">
            <i href="#" class="fas fa-share" style="color: lightgray">  ${posts.retweet}</i>
          </div>
          <div class="grid-margin-top grid-col-one-four-page">
            <i href="#" class="fas fa-heart" style="color: lightgray">  ${posts.like}</i>
          </div>
          <div class="grid-margin-top grid-col-one-four-page">
            <i class="fas fa-share-square" style="color: lightgray"></i>
          </div>
    </div>
  </div>
  <hr>
  `)
}

export default PostItem;