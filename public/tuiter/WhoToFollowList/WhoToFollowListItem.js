const WhoToFollowListItem = (who) => {
  return(`
        <li class="list-group-item">
          <div class="row">
            <div class="col-2">
              <img src="${who.avatarIcon}" height="50px">
            </div>
            <div class="col-7">
              <div class="fw-bolder">
                ${who.userName}
              </div>
              <div class="text-secondary">
                ${who.handle}
              </div>
            </div>
            <div class="col-2">
                <button class="btn btn-primary override-bs">
                  Follow
                </button>
            </div>
          </div>
        </li>
  `)
}

export default WhoToFollowListItem;