import React from 'react';
import '../styles/upload.scss';
import Axios from 'axios';
import TokenManager from '../utils/token-manager';

class Upload extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      file: null,
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

  handleFile = (event) => {
    this.setState({ file: event.target.files[0] });
  };

  handleFieldChange = (event) => {
    this.setState({
      image: Object.assign({}, this.state.image, {
        [event.target.name]: event.target.value,
      }),
    });
  };

  handleUploadImage = (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append('image', this.state.file);
    formData.append('caption', this.state.image.caption);
    formData.append('tags', this.state.image.tags);

    const token = TokenManager.getToken();

    const axiosConfig = {
      headers: {
        Authorization: token,
        'Content-Type': 'multipart/form-data',
      },
    };

    Axios.post('https://mcr-codes-image-sharing-api.herokuapp.com/images', formData, axiosConfig)
      .then(function (response) {
        console.log(response);
      });
  };

  render() {
    return (
      <div className="uploadimage">
        <form>
          <input name="image" type="file" accept="image/*" onChange={this.handleFile} />
          <input name="caption" placeholder="Caption" value={this.state.image.caption} onChange={this.handleFieldChange} />
          <input name="tags" placeholder="Tags" value={this.state.image.tags} onChange={this.handleFieldChange} />
          <button onClick={this.handleUploadImage} type="submit">Upload</button>
        </form>
      </div>
    );
  }
}

export default Upload;
