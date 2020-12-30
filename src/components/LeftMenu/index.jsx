import React from "react";
import {
  Home,
  Hash,
  Bell,
  Mail,
  List,
  Circle,
  MoreHorizontal,
  Twitter,
} from "react-feather";
import "./index.css";

export default function LeftMenu() {
  return (
    <div className="LeftMenu">
      <div className="LeftMenu-Nav">
        <a className="LeftMenu_Nav-Link" href="#">
          <div className="LeftMenu-Link-Wrapper">
            <Twitter
              size="30"
              fill="rgba(29,161,242,1.00)"
              className="LeftMenu-Twitter-Logo"
            />
          </div>
        </a>
        <a className="LeftMenu_Nav-Link active " href="#">
          <div className="LeftMenu-Link-Wrapper">
            <Home size="21" />
            <span>Home</span>
          </div>
        </a>
        <a className="LeftMenu_Nav-Link" href="#">
          <div className="LeftMenu-Link-Wrapper">
            <Hash size="21" />
            <span>Explore</span>
          </div>
        </a>
        <a className="LeftMenu_Nav-Link" href="#">
          <div className="LeftMenu-Link-Wrapper">
            <Bell size="21" />
            <span>Notifications</span>
          </div>
        </a>
        <a className="LeftMenu_Nav-Link" href="#">
          <div className="LeftMenu-Link-Wrapper">
            <Mail size="21" />
            <span>Messages</span>
          </div>
        </a>
        <a className="LeftMenu_Nav-Link" href="#">
          <div className="LeftMenu-Link-Wrapper">
            <List size="21" />
            <span>Lists</span>
          </div>
        </a>
        <a className="LeftMenu_Nav-Link" href="#">
          <div className="LeftMenu-Link-Wrapper">
            <Circle size="21" />
            <span>Profile</span>
          </div>
        </a>
        <a className="LeftMenu_Nav-Link" href="#">
          <div className="LeftMenu-Link-Wrapper">
            <MoreHorizontal />
            <span>More</span>
          </div>
        </a>
        <a className="LeftMenu_Nav-Link" href="#">
          <div className="LeftMenu-TweetButton">
            <span>Tweet</span>
          </div>
        </a>
      </div>
    </div>
  );
}
