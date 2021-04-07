import React, { Component } from "react";

import "./Input.css";
import FileUploadDialog from "../FileUploadDialog/FileUploadDialog";
import { Paperclip } from "react-feather";

class Input extends Component {
  constructor() {
    super();
    this.state = {
      showFileUploadDialog: false,
      fileMessage: "",
    };

    this.handleInput = this.handleInput.bind(this);
    this.toggleFileUploadDialog = this.toggleFileUploadDialog.bind(this);
    this.uploadAttachment = this.uploadAttachment.bind(this);
    this.fileAttachment = React.createRef();
  }

  toggleFileUploadDialog() {
    this.setState({
      showFileUploadDialog: !this.state.showFileUploadDialog,
    });
  }

  handleInput(event) {
    const { value, name } = event.target;
    this.setState({
      [name]: value
    });
  }

  uploadAttachment(event) {
    event.preventDefault();
    const { socket } = this.props;
    const { fileMessage } = this.state;
    const file = this.fileAttachment.current.files[0];


    let type = this.fileAttachment.current.files[0].type.split('/')[0];

    if(type === ''){
      type = 'application'
    }

    this.props.uploadMessage(file, fileMessage, type);
    this.setState({
      showFileUploadDialog: false,
      fileMessage: ""
    });
  }


  render() {
    const { setMessage, sendMessage, message } = this.props;
    const { showFileUploadDialog, fileMessage } = this.state;
    return (
      <div>
        <from className="inputcontainer">
          <div
            class="attach"
            aria-disabled="false"
            role="button"
            title="Attach"
            aria-label="Attach"
          >
            <div class="image-upload">
              <label for="file-input">
                <span>
                  <Paperclip />
                </span>
              </label>
              <button
                id="file-input"
                className="toggle-upload"
                onClick={this.toggleFileUploadDialog}
                type="button"
              ></button>
            </div>
          </div>
          <input
            className="input"
            type="text"
            placeholder="Type a message..."
            value={message}
            onChange={({ target: { value } }) => setMessage(value)}
            onKeyPress={(event) =>
              event.key === "Enter" ? sendMessage(event) : null
            }
          />
          <button className="sendButton" onClick={(e) => sendMessage(e)}>
            Send
          </button>
        </from>
        {showFileUploadDialog ? (
          <FileUploadDialog
            fileMessage={fileMessage}
            handleInput={this.handleInput}
            uploadAttachment={this.uploadAttachment}
            fileAttachment={this.fileAttachment}
            toggleFileUploadDialog={this.toggleFileUploadDialog}
          />
        ) : null}
      </div>
    );
  }
}

export default Input;
