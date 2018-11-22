import React from 'react';
import '../styles/upload.scss';
import Axios from 'axios';

class Upload extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedFile: null,
      image: {
        user: '',
        src: '',
        thumb: '',
        caption: '',
        tags: [],
        comments: [],
        timestamp: '',
        likes: '',
        isLiked: false,
      },
    };
  }

  handleUploadImage = (event) => {
    Axios.post('https://mcr-codes-image-sharing-api.herokuapp.com/images', {
      image: this.state.selectedFile,
      caption: this.state.image.caption,
      tags: this.state.image.tags,
    })
      .then(function (response) {
        console.log(response);
      });

    event.preventDefault();
  };

  handleFile = (event) => {
    this.setState({ selectedFile: event.target.files[0] });
  };

  handleFieldChange = (event) => {
    this.setState({
      image: Object.assign({}, this.state.image, {
        [event.target.name]: event.target.value,
    });
  };

  render() {
    return (
      <div className="uploadimage">
        <form>
          <input name="image" type="file" accept="image/*" onChange={this.state.handleFile} />
          <input name="caption" placeholder="Caption" value={this.state.image.caption} onChange={this.handleFieldChange} />
          <input name="tags" placeholder="Tags" value={this.state.image.tags} onChange={this.handleFieldChange} />
          <button onClick={this.handleUploadImage} type="submit">Upload</button>
        </form>
      </div>
    );
  }
}

export default Upload;
