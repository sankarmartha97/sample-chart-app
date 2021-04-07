import React from "react";

import "./Message.css";

import ReactEmoji from "react-emoji";
import image from "../../../assets/images/download.jpg";
import video from "../../../assets/video/1572677414277_Space - 21542.mp4";

const Message = ({
  message: { message, type, user, file, filename },
  name,
}) => {
  let isSentByCurrentUser = false;
  const trimmedName = name.trim().toLowerCase();

  if (user === trimmedName) {
    isSentByCurrentUser = true;
  }

  return isSentByCurrentUser ? (
    <div className="messageReciveContainer message-out">
      <div className="_24wtQ _2W7I- _1-U5A">
        <span data-testid="tail-out" data-icon="tail-out" class="_1bUzr">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 8 13"
            width="8"
            height="13"
          >
            <path
              opacity=".13"
              d="M5.188 1H0v11.193l6.467-8.625C7.526 2.156 6.958 1 5.188 1z"
            ></path>
            <path
              fill="currentColor"
              d="M5.188 0H0v11.193l6.467-8.625C7.526 1.156 6.958 0 5.188 0z"
            ></path>
          </svg>
        </span>
        <div className="_3XpKm _20zqk">
          <div className="_1bR5a">
            <div className="_3ExzF">
              <span dir="ltr" class="_3-8er selectable-text copyable-text">
                {type === "image" ? (
                  <div>
                    <img style={{ maxWidth: "200px" }} src={image} alt="img" />
                    <div>
                      <span>{ReactEmoji.emojify(message)}</span>
                    </div>
                  </div>
                ) : type === "video" ? (
                  <div>
                    <video
                      style={{ maxWidth: "200px" }}
                      src={video}
                      alt="video"
                      type="video/mp4"
                      controls
                    />
                    <div>
                      <span>{ReactEmoji.emojify(message)}</span>
                    </div>
                  </div>
                ) : type === "application" ? (
                  <div className="_3KIS4">
                    <div className="_3wD43 _3HmHK">
                      <div className="_3NCXc _1epIK _FUG3 _2HGw4 _25XuB">
                        <div className="VtaVl -TvKO uno4I">
                          <div className="_2FqtA icon-doc-generic"> </div>
                        </div>
                        <div className="VtaVl -TvKO _3tOOP">
                          <span dir="auto" class="_3-8er">
                            {ReactEmoji.emojify(filename)}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="_1-Yga">
                      <span>{ReactEmoji.emojify(message)}</span>
                    </div>
                  </div>
                ) : (
                  <span>{ReactEmoji.emojify(message)}</span>
                )}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div className="messageReciveContainer message-in">
      <div className="_24wtQ _2W7I- _1-U5A">
        <span className="_1bUzr">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 8 13"
            width="8"
            height="13"
          >
            <path
              opacity=".13"
              fill="#0000000"
              d="M1.533 3.568L8 12.193V1H2.812C1.042 1 .474 2.156 1.533 3.568z"
            ></path>
            <path
              fill="currentColor"
              d="M1.533 2.568L8 11.193V0H2.812C1.042 0 .474 1.156 1.533 2.568z"
            ></path>
          </svg>
        </span>
        <div className="_3XpKm _20zqk">
          <div className="_1bR5a">
            <div className="_3ExzF">
              <span dir="ltr" class="_3-8er selectable-text copyable-text">
                {type === "image" ? (
                  <div>
                    <img style={{ maxWidth: "200px" }} src={image} alt="img" />
                    <div>
                      <span>{ReactEmoji.emojify(message)}</span>
                    </div>
                  </div>
                ) : type === "video" ? (
                  <div>
                    <video
                      style={{ maxWidth: "200px" }}
                      src={video}
                      alt="video"
                      type="video/mp4"
                      controls
                    />
                    <div>
                      <span>{ReactEmoji.emojify(message)}</span>
                    </div>
                  </div>
                ) : type === "application" ? (
                  <div className="_3KIS4">
                    <div className="_3wD43 _3HmHL">
                      <div className="_3NCXc _1epIK _FUG3 _2HGw4 _25XuB">
                        <div className="VtaVl -TvKO uno4I">
                          <div className="_2FqtA icon-doc-generic"> </div>
                        </div>
                        <div className="VtaVl -TvKO _3tOOP">
                          <span dir="auto" class="_3-8er">
                            {ReactEmoji.emojify(filename)}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="_1-Yga">
                      <span>{ReactEmoji.emojify(message)}</span>
                    </div>
                  </div>
                ) : (
                  <span>{ReactEmoji.emojify(message)}</span>
                )}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Message;
