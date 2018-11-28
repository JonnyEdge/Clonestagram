import React from 'react';
// import '../styles/ImagesComponent.css';
// import './ImageFeedCard';
import axios from 'axios';
import ImageFeedCard from './ImageFeedCard';
// import { link } from 'react-router' 

class ImagesComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [],
    };
  }

  componentDidMount() {
    axios.get('https://mcr-codes-image-sharing-api.herokuapp.com/images')
      .then((response) => {
        this.setState({
          images: response.data,
        });
      });
  }

  render() {
    console.log(this.state.images);
    return (
      <div className="images">
        {this.state.images.map(image => (
          <ImageFeedCard
            key={image._id}
            src={image.src}
          />
        ))}
      </div>
    );
  }
}

export default ImagesComponent;
