import React from "react";

import "./App.css";

class App extends React.Component {
  render() {
    return (
      <>
        <main className="profile-page">
          <section className="section">
            <div className="text-center">
              <h3>Full Name</h3>
              <div>User Name</div>
            </div>

            <div className="card-profile-stats">
              <div className="card-profile-stats-right">
                <div>
                  <span className="heading">5</span>
                  <span className="description">Likes per post</span>
                </div>
                <div>
                  <span className="heading">121</span>
                  <span className="description">Comments per post</span>
                </div>
              </div>
              <div className="card-profile-stats-left">
                <div>
                  <span className="heading">98</span>
                  <span className="description">Following</span>
                </div>
                <div>
                  <span className="heading">3799680</span>
                  <span className="description">Followers</span>
                </div>
                <div>
                  <span className="heading">54</span>
                  <span className="description">Posts</span>
                </div>
              </div>
            </div>
          </section>
          <div className="border"></div>
        </main>
      </>
    );
  }
}

export default App;
