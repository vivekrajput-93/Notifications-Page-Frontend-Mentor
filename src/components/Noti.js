import React, { useState } from "react";
import angela from "../images/avatar-angela-gray.webp";
import anna from "../images/avatar-anna-kim.webp";
import jacob from "../images/avatar-jacob-thompson.webp";
import kimberly from "../images/avatar-kimberly-smith.webp";
import mark from "../images/avatar-mark-webber.webp";
import nathan from "../images/avatar-nathan-peterson.webp";
import rizky from "../images/avatar-rizky-hasanuddin.webp";
import chess from "../images/image-chess.webp";
import "../components/Noti.css"

const Noti = () => {
    const [noti, setNoti] = useState(3);
    const [isDotVisible, setIsDotVisible] = useState(true);
    const [isDotVisi, setIsDotVisi] = useState(true);
    const [isDotVisi1, setIsDotVisi1] = useState(true);
    const [hasDecremented, setHasDecremented] = useState(false);
    const [decremented, setDecremented] = useState(false);
    const [decre, setDecre] = useState(false);
  
    const notificationButton1 = () => {
      if (noti > 0 && !hasDecremented) {
        setNoti(noti - 1);
        setHasDecremented(true);
      }
      setIsDotVisible(false);
    };


    const notificationButton2 = () => {
        if (noti > 0 && !decremented) {
          setNoti(noti - 1);
          setDecremented(true);
        }
        setIsDotVisi(false);
      };


      const notificationButton3 = () => {
        if (noti > 0 && !decre) {
          setNoti(noti - 1);
          setDecre(true);
        }
        setIsDotVisi1(false);
      };

      const markAllAsRead = () => {
        setNoti(0);
        setIsDotVisible(false);
        setIsDotVisi(false);
        setIsDotVisi1(false);
      };



  return (
    <div className="main-container">
      <div id="btn-group">
        <span className="but">
          Notifications <button className="note">{noti}</button>
        </span>
        <button id="mark" onClick={markAllAsRead} >Mark all as read</button>
      </div>
      <div className={isDotVisible ? "container blue" : "container white"} onClick={notificationButton1}>
        <div className="text">
          <img src={mark} alt="mark" />
          <p>
            <span className="name">Mark Webber</span> reacted to your recent
            post My first tournament today!
            <br/>
            <p className="time">1m ago</p>
          </p>
          {isDotVisible && <div id="dot"></div>}
        </div>
      </div>
      <div className={isDotVisi ? "container blue" : "container white1"} onClick={notificationButton2}>
        <div className="text">
          <img src={angela} alt="angela" />
          <p>
            <span className="name">Angela Gray</span> has followed you.
            <br/>
            <p className="time">5m ago</p>
          </p>
          {isDotVisi && <div id="dot"></div>}
        </div>
      </div>
      <div className={isDotVisi1 ? "container blue" : "container white2"} onClick={notificationButton3}>
        <div className="text">
          <img src={jacob} alt="jacob" />
          <p><span className="name">Jacob Thompson</span> has joined your group
              <span className="chess"> Chess Group</span>
              <br/>
              <p className="time">1 day ago</p>
              </p>
            {isDotVisi1 && <div id="dot"></div>}
        </div>
      </div>
      <div className="special ">
        <div className="text">
          <img src={rizky} alt="rizky" />
          <p className="pixel">
            <span className="name">Rizky Hasanuddin</span> has sent you a private message
            <br/>
            <p className="time">5 days ago</p>
            <br/>
            <p className="textarea">
            Hello, thanks for setting up Chess Club. I've been a member for
             few weeks now and I'm already having lots of fun and improving my
            game.
          </p>
          </p>
          </div>
      </div>
      <div className="container  chess">
        <div className="text">
            <img src={kimberly} alt="kimberly" />
            <p><span className="name">Kimberly Smith</span> commented on your picture
            <br/>
            <p className="time">1 week ago</p></p>
            <img  className="img" src={chess} alt="chess" />
        </div>
      </div>
      <div className="container ">
        <div className="text">
            <img src={nathan} alt="nathan" />
            <p><span className="name">Nathan Peterson</span>reacted to your recent post <span className="game">5 end-game strategies to increase your win rate</span>
            <br/>
            <p className="time">2 weeks ago</p>
            </p>
        </div>
      </div>
      <div className="container">
        <div className="text">
            <img src={anna} alt="" />
            <p><span className="name">Anna Kim</span> has left the group <span className="chess">Chess Group</span>
            <br/>
            <p className="time"> 2 weeks ago</p>
            </p>
        </div>
      </div>
    </div>
  );
};

export default Noti;
