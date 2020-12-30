import React from "react";
import { FaSpinner } from "react-icons/fa";
import { Twitter } from "react-feather";
import PropTypes from "prop-types";

import "./TweetFormProfileList.css";

const TweetFormProfileListItem = ({ profile_image_url, name, screen_name }) => {
  return (
    <div className="TweetFormProfileList-item">
      <img
        className="TweetFormProfileList-avatar"
        src={profile_image_url}
        width="32px"
      />
      <div className="TweetFormProfileList-content">
        <Twitter
          size="20"
          fill="rgba(29,161,242,1.00)"
          className="TweetForm-profile-twitter-logo"
        />
        <span className="TweetFormProfileList-content-name">{name}</span>
        <span className="TweetFormProfileList-content-username">
          {`@${screen_name}`}
        </span>
      </div>
    </div>
  );
};

const TweetFormProfileList = ({
  profileList,
  status,
  onListItemClick,
  searchTerm,
}) => {
  const loading = status === "PENDING";
  return (
    <>
      {loading || profileList ? (
        <div className="TweetFormProfileList">
          <div className="TweetFormProfileList-profiles">
            {loading ? (
              <div className="TweetFormProfileList-load">
                <FaSpinner
                  icon="spinner"
                  className="spinner"
                  color="rgba(29,161,242,1.00)"
                  size="30"
                />
              </div>
            ) : (
              <ul className="TweetFormProfileList-network">
                {searchTerm.length
                  ? profileList.map(
                      ({ name, profile_image_url, screen_name }, index) => {
                        return (
                          <li
                            className="TweetFormProfileList-Item"
                            key={index}
                            onClick={() => {
                              onListItemClick(name);
                            }}
                          >
                            <TweetFormProfileListItem
                              profile_image_url={profile_image_url}
                              name={name}
                              screen_name={screen_name}
                            />
                          </li>
                        );
                      }
                    )
                  : null}
              </ul>
            )}
          </div>
        </div>
      ) : null}
    </>
  );
};

TweetFormProfileList.propTypes = {
  profileList: PropTypes.array,
  status: PropTypes.string,
  onListItemClick: PropTypes.func,
  searchTerm: PropTypes.string,
};

TweetFormProfileListItem.propTypes = {
  profile_image_url: PropTypes.string,
  name: PropTypes.string,
  screen_name: PropTypes.string,
};
export default TweetFormProfileList;
