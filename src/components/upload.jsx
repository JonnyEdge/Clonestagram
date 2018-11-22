import React from 'react';
import '../styles/upload.scss';
import Axios from 'axios';

class Upload extends React.Component {
  handleUploadImage = (event) => {
    Axios.post('https://mcr-codes-image-sharing-api.herokuapp.com/images', {
      caption: this.state.caption,
      tags: this.state.tags,
    })
      .then(function (response) {
        console.log(response);
      });

    event.preventDefault();
  };

  handleFieldChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  render() {
    return (
      <div className="uploadimage">
        <form>
          <input name="image" type="file" accept="image/*" />
          <input name="caption" placeholder="Caption" value={this.state.caption} onChange={this.handleFieldChange} />
          <input name="tags" placeholder="Tags" value={this.state.tags} onChange={this.handleFieldChange} />
          <button onClick={this.handleUploadImage} type="submit">Upload</button>
        </form>
      </div>
    );
  }
}

export default Upload;
