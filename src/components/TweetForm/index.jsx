import React, { useState, useEffect, useRef } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import useDebounce from "../hook/useDebounce";
import { searchProfiles } from "../../actions/profile";
import { findCurrentWord } from "../../helper/formHelper";

import TweetFormHeader from "./TweetFormHeader";
import TweetFormFooter from "./TweetFormFooter";
import TweetFormProfileList from "./TweetFormProfileList";

import { TEXT_AREA_COUNT, FETCH_DELAY_TIME } from "../../const/form";
import PropTypes from "prop-types";

import "./index.css";

export const TweetForm = ({ profiles, searchProfiles, status }) => {
  const [tweet, setTweet] = useState("");
  const [startIndex, setStartIndex] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");
  const [outLine, setOutline] = useState(false);
  const [error, setError] = useState("");
  const [countRemain, setCountRemain] = useState(TEXT_AREA_COUNT);

  const textRef = useRef(null);
  const debouncedSearchTerm = useDebounce(searchTerm, FETCH_DELAY_TIME);
  useEffect(() => {
    const existed = profiles[searchTerm.toLowerCase()];
    if (debouncedSearchTerm && !existed && searchTerm.length) {
      const fetchApi = async () => await searchProfiles(searchTerm);
      fetchApi();
    }
  }, [debouncedSearchTerm]);

  const validateTextArea = (newTweet, cursorPosition, countRemaining) => {
    const { startIndex, currentWord } = findCurrentWord(
      cursorPosition,
      newTweet
    );

    const index = currentWord.lastIndexOf("@");
    const searchTerm = currentWord.slice(index + 1);
    const firstTwoCharacters = searchTerm.slice(0, 2);
    const wordInValid = /[^0-9a-zA-Z]/.test(firstTwoCharacters);
    const chatacterWarning = wordInValid
      ? "please editing an @ followed by 2 alphanumeric characters (a-z, 0-9)"
      : "";
    const outBoundWarning = "Out of boundary";

    if (countRemaining < 0) {
      setError(outBoundWarning);
    } else {
      if (error.length) {
        setError("");
      }
    }

    if (currentWord.includes("@")) {
      setError(chatacterWarning);
      /* if word is more than 2 */
      if (searchTerm.length >= 2) {
        setStartIndex(startIndex);
        setSearchTerm(searchTerm.toLowerCase());
      } else {
        if (searchTerm.length) setSearchTerm("");
      }
    } else {
      if (searchTerm.length) setSearchTerm("");
    }
  };

  const handleListItemClick = (profile) => {
    const left = tweet.slice(0, startIndex);
    const right = tweet.slice(startIndex + searchTerm.length + 1, tweet.length);
    const newTweet = `${left}@${profile.replace(/ /g, "")}${right}`;

    const focusWord = textRef.current;
    if (focusWord) {
      focusWord.value = newTweet;
    }

    setSearchTerm("");
    setTweet(newTweet);
  };

  const handleOnChange = async (e) => {
    const newTweet = e.target.value;
    const cursorPosition = e.target.selectionStart;

    setTweet(newTweet);
    const remainCount = TEXT_AREA_COUNT - newTweet.length;
    setCountRemain(remainCount);
    validateTextArea(newTweet, cursorPosition, remainCount);
  };

  const handleOnKeyDown = async (e) => {
    if (profiles[searchTerm] && e.key === " ") {
      setSearchTerm("");
    }
  };

  const focusStyle = outLine ? "focus-style" : "";
  return (
    <div className="TweetForm">
      <div className={`TweetForm-container ${focusStyle}`}>
        <TweetFormHeader />
        <textarea
          className="TweetForm-textArea"
          ref={textRef}
          onChange={handleOnChange}
          onKeyDown={handleOnKeyDown}
          onFocus={() => {
            setOutline(true);
          }}
          onBlur={() => setOutline(false)}
        ></textarea>

        <TweetFormFooter
          error={error}
          countRemain={countRemain}
        />
        <TweetFormProfileList
          className="TweetForm-container-list"
          onListItemClick={handleListItemClick}
          profileList={profiles[searchTerm]}
          searchTerm={searchTerm}
          status={status}
        />
      </div>
    </div>
  );
};

export const mapStateToProps = (state) => {
  return {
    profiles: state.profile.data,
    status: state.profile.status,
  };
};

export const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ searchProfiles }, dispatch);

TweetForm.propTypes = {
  profileList: PropTypes.object,
  searchProfiles: PropTypes.func,
  status: PropTypes.string,
};

export default connect(mapStateToProps, mapDispatchToProps)(TweetForm);
