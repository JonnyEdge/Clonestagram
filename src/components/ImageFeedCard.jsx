import React from 'react';
import '../styles/ImageFeedCard.scss';
import { Link } from 'react-router-dom';


class ImageFeedCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [],
    };
  }

  render() {
    return (
      <div className="ImageFeedCard">
        <img src ={this.props.src}></img>
      </div>
    );
  };
}


export default ImageFeedCard;