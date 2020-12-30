import React, { useState, useEffect, useRef } from "react";
import { connect } from "react-redux";

import useDebounce from "../hook/useDebounce";
import { searchProfiles } from "../../actions/profile";
import { findCurrentWord } from "../../helper/wordFinder";
import TweetFormHeader from "./TweetFormHeader";
import TweetFormFooter from "./TweetFormFooter";
import TweetFormProfileList from "./TweetFormProfileList";
import "./index.css";

const TweetForm = ({ profiles, searchProfiles, status }) => {
  const [tweet, setTweet] = useState("");
  const [startIndex, setStartIndex] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");
  const [outLine, setOutline] = useState(false);
  const [error, setError] = useState("");
  const [countRemain, setCountRemain] = useState(280);

  const textRef = useRef(null);
  const debouncedSearchTerm = useDebounce(searchTerm, 1000);

  useEffect(() => {
    const existed = profiles[searchTerm.toLowerCase()];
    if (debouncedSearchTerm && !existed) {
      const fetchApi = async () => await searchProfiles(searchTerm);
      fetchApi();
    }
  }, [debouncedSearchTerm]);

  const validateHelper = (newTweet, cursorPosition) => {
    const { startIndex, currentWord } = findCurrentWord(
      cursorPosition,
      newTweet
    );

    const index = currentWord.lastIndexOf("@");
    const searchTerm = currentWord.slice(index + 1);
    const firstTwoCharacters = searchTerm.slice(0, 2);
    const wordInValid = /[^0-9a-zA-Z]/.test(firstTwoCharacters);
    const warning = wordInValid
      ? "please editing an @ followed by 2 alphanumeric characters (a-z, 0-9)"
      : "";
    const outBoundWarning = countRemain < 0 ? "Out of boundary" : "";
    setError(outBoundWarning);
    if (currentWord.includes("@")) {
      setError(warning);
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
    const newTweet = `${left}@${profile.replace(/ /g, '')}${right}`;
    console.log('newTweet',newTweet)
    const focusWord = textRef.current;
    focusWord.value = newTweet;

    setSearchTerm("");
    setTweet(newTweet);
  };

  const handleOnChange = async (e) => {
    const newTweet = e.target.value;
    const cursorPosition = e.target.selectionStart;
    setTweet(newTweet);
    setCountRemain(280 - newTweet.length);

    validateHelper(newTweet, cursorPosition);
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
          onInput={handleOnChange}
          onKeyDown={handleOnKeyDown}
          onFocus={() => {
            setOutline(true);
          }}
          onBlur={() => setOutline(false)}
        ></textarea>

        <TweetFormFooter error={error} countRemain={countRemain} />
        <TweetFormProfileList
          onListItemClick={handleListItemClick}
          profileList={profiles[searchTerm]}
          searchTerm={searchTerm}
          status={status}
        />
      </div>s
    </div>
  );
};

export const mapStateToProps = (state) => {
  return {
    profiles: state.profile,
    status: state.profile.status,
  };
};

export default connect(mapStateToProps, { searchProfiles })(TweetForm);
