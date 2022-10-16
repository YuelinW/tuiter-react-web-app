import PostSummaryList from "../PostSummaryList/index.js";

const ExploreComponent = () => {
  return(`
            <div class="row">
              <div class="col-10">
                        <div class="position-relative">
                            <input class="ps-5 form-control rounded-pill" placeholder="Search Tuiter"/>
                            <span class="position-absolute wd-search-tuiter">O-</span>
                        </div>
              </div>
              <div class="col-2">
                 <i class="fas fa-cog fa-2x" style="color: #2a9fd6"></i>
              </div>
            </div>
            <ul class="nav nav-tabs mt-1 mb-1">
                    <li class="nav-item">
                        <a class="nav-link active" href="#">
                            For You
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">
                            Trending
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">
                            News
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#" tabindex="-1">
                            Sports
                        </a>
                    </li>
                    <li class="nav-item d-none d-md-block">
                        <a class="nav-link" href="#" tabindex="-1">
                            Entertainment
                        </a>
                    </li>
            </ul>
           <!-- image with overlaid text -->
           <div class="position-relative">
                    <img src="../../images/Starship.jpg" width="100%"/>
                    <h1 class="position-absolute bottom-0 left-0 text-white">SpaceX's Starship</h1>
           </div>
           ${PostSummaryList()}
    `);
}
export default ExploreComponent;
