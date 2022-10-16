import WhoToFollowListItem from "./WhoToFollowListItem.js";
import who from "./whos.js";

const WhoToFollowList = () => {
  return(`
      
      <ul class="list-group">
           <!-- continue here -->
      <li class="list-group-item fw-bolder">
      <a>Who to follow</a>
      </li>
      ${
      
      who.map(who => {
        return(WhoToFollowListItem(who));
      }).join('')
  }
      </ul>
   `);
}

export default WhoToFollowList;