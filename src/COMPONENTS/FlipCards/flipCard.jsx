import React from 'react'
import './flipCardCSS.scss'

class FlipCard extends React.Component {
  render() {
    return (
      <div className="page-container">

        <BlogCard />
        
      </div>
    )
  }
}

class BlogCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { flipped: false };
    this.flip = this.flip.bind(this);
  }

  flip = () => {
    this.setState({ flipped: !this.state.flipped });
  }
  render() {
    return (


      <div onMouseEnter={this.flip} onMouseLeave={this.flip} className={"card-container" + (this.state.flipped ? " flipped" : "")}>

        <Front />
        <Back />
      </div>

    )
  }
}

class Front extends React.Component {
  render() {
    return (
      <div className="front">
        <ImageArea />
        <MainArea />
      </div>
    )
  }
}

class Back extends React.Component {
  render() {
    return (
      <div className="back">
        <p>back.</p>
      </div>
    )
  }
}

class ImageArea extends React.Component {
  render() {
    return (
      <div className="image-container">
        <img className="card-image" src="https://78.media.tumblr.com/d98fb931adb117c70f0dbced9e947520/tumblr_pe582mbWip1tlgv32o1_1280.png"></img>
        <h1 className="title">An example blog post</h1>
      </div>
    )
  }

}

class MainArea extends React.Component {
  render() {
    return (
      <div className="main-area">
        <div className="blog-post">
          {/* <p className="date">{new Date().toLocaleDateString()}</p> */}
          <div className="blog-content">
           
            </div>
          <p className="read-more">Hover to read more...</p>

        </div>

      </div>
    )
  }
}


export default FlipCard