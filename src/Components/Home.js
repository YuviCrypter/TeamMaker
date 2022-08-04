import "../styles.css";

import Navbar from "./NavBar.js";
import Post from "./Post.js";
import Header from "./Header.js";

export default function Home() {
  return (
    <div className="App">
      <Header />
      <Navbar />

      <div className="Posts">
        <Post
          Pname="TeamMaker"
          Aname="Yuvraj D"
          time="10:00"
          desc="This is the description of the post like the leader Yuvraj has posted a request about some help that he need in a project of his and you can help him in that project by applying on this post"
        />
        <Post
          Pname="Mars Game"
          Aname="Elon Musk"
          time="12:30"
          desc="This is the description of the post like the leader Yuvraj has posted a request about some help that he need in a project of his and you can help him in that project by applying on this post"
        />
        <Post
          Pname="One Piece Game"
          Aname="Monkey D Luffy"
          time="11:45"
          desc="This is the description of the post like the leader Yuvraj has posted a request about some help that he need in a project of his and you can help him in that project by applying on this post"
        />
        <Post
          Pname="Software for Hokage"
          Aname="Naruto"
          time="05:00"
          desc="This is the description of the post like the leader Yuvraj has posted a request about some help that he need in a project of his and you can help him in that project by applying on this post"
        />
      </div>

      <div className="RightBar">
        <div className="current-work">
          Current Work
          <div className="current-project"></div>
          {/* <div className="avatars">
            <span class="avatar">
              <img  src="https://picsum.photos/70"/>
            </span>
            <span class="avatar">
              <img src="https://picsum.photos/80"/>
            </span>
            <span class="avatar">
              <img src="https://picsum.photos/90"/>
            </span>
            <span class="avatar">
            <img src="https://picsum.photos/100"/>
            </span>
            <div className="no-ppl-inproject">4 People</div>
          </div> */}
        </div>
        <div className="request-box"></div>
        <div className="new-request">
          <button className="new-request-btn">Post Request</button>
        </div>
      </div>
    </div>
  );
}
