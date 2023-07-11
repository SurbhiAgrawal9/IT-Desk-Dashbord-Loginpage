import { useCallback } from "react";
import "./FrameComponent.css";
import { Link } from "react-router-dom";
const FrameComponent = () => {
  const onGroupContainerClick = useCallback(() => {
    // Please sync "IT Desk Dashboard" to the project
  }, []);

  return (
    <div className="rectangle-parent">
      <div className="frame-child" />
      <img className="group-icon" alt="" src="/group.svg" />
      <div className="rectangle-group" onClick={onGroupContainerClick}>
        <div className="group-child" />
        <img className="group-item" alt="" src="/vector-105.svg" />
        <Link to="/ITDeskDashbord" className="login-to-peoplesol">
          Login to PeopleSol</Link>
      </div>
      <div className="frame-item" />
      <div className="frame-inner" />
      <div className="employee-idemail-id">{`Employee ID/Email ID `}</div>
      <div className="enter-password">Enter Password</div>
      <div className="forgot-password">Forgot Password</div>
      <div className="login">Login</div>
      <div className="all-rights-reserved-made-in-i-parent">
        <div className="all-rights-reserved">{`©2022 . All rights reserved. Made in India. `}</div>
        <img className="group-icon1" alt="" src="/group1.svg" />
        <div className="privacy-policy-parent">
          <div className="privacy-policy">Privacy Policy</div>
          <div className="terms-conditions">{`Terms & Conditions`}</div>
        </div>
        <img className="group-inner" alt="" src="/vector-100.svg" />
      </div>
      <div className="rectangle-div" />
      <div className="frame-child1" />
      <img
        className="peoplesol-login-1"
        alt=""
        src="/peoplesol-login-1@2x.png"
      />
      <img className="dashboard-1-icon" alt="" src="/dashboard-1@2x.png" />
      <div className="instance-parent">
        <div className="vector-parent">
          <img className="instance-child" alt="" src="/rectangle-3.svg" />
          <div className="name">Lauren Garsier</div>
          <div className="tilte">TILTE</div>
          <div className="tilte1">Senior Designer</div>
          <div className="month">Month</div>
          <div className="year">Year</div>
          <img className="instance-item" alt="" src="/group-8.svg" />
          <div className="frame-wrapper">
            <div className="profile-details-wrapper">
              <div className="profile-details">Profile Details</div>
            </div>
          </div>
          <b className="b">80%</b>
          <b className="b1">90%</b>
        </div>
        <img className="mask-group-icon" alt="" src="/mask-group@2x.png" />
      </div>
      <div className="group-wrapper">
        <div className="rectangle-container">
          <div className="group-child1" />
          <div className="fa-soliduser-clock-parent">
            <div className="fa-soliduser-clock" />
            <div className="fa-soliduser-clock" />
            <div className="employy-name">Employy Name</div>
            <div className="department">Department</div>
            <div className="date">Date</div>
            <div className="logout-time">Logout Time</div>
            <div className="elvis-moren">Elvis Moren</div>
            <div className="product-deve">Product Deve</div>
            <div className="div">12-23-21</div>
            <div className="design-team">Design Team</div>
            <div className="thursday">Thursday</div>
            <div className="on-duty">ON DUTY</div>
            <img
              className="mask-group-icon1"
              alt=""
              src="/mask-group1@2x.png"
            />
            <img
              className="mask-group-icon2"
              alt=""
              src="/mask-group2@2x.png"
            />
            <div className="shift-schduele">SHIFT SchduelE</div>
            <div className="vector-group">
              <img className="instance-inner" alt="" src="/rectangle-31.svg" />
              <div className="name1">Andy CoLLON</div>
              <div className="admistrator">TILTE</div>
              <div className="admistrator" />
              <div className="month1">Month</div>
              <div className="year1">Year</div>
              <img className="instance-item" alt="" src="/group-81.svg" />
              <div className="frame-container">
                <div className="profile-details-container">
                  <div className="profile-details1">Profile Details</div>
                </div>
              </div>
              <b className="b2">90%</b>
              <b className="b3">86%</b>
            </div>
            <img
              className="mask-group-icon3"
              alt=""
              src="/mask-group3@2x.png"
            />
            <img
              className="mask-group-icon4"
              alt=""
              src="/mask-group4@2x.png"
            />
            <img
              className="mask-group-icon5"
              alt=""
              src="/mask-group5@2x.png"
            />
            <div className="group-child2" />
            <b className="lauren-garsier">Lauren Garsier</b>
            <img className="vector-icon" alt="" src="/vector-3.svg" />
            <b className="department1">Department</b>
            <b className="shift-schduele">SHIFT SchduelE</b>
            <div className="morning-shift">MOrNING SHIFT</div>
            <div className="product-developm">Product DevelopM.</div>
            <div className="senior-designer">Senior Designer</div>
            <div className="am-to-400pm">9:00am to 4:00pm</div>
            <b className="shift-time">Shift TIME</b>
            <div className="am">8:59AM</div>
            <div className="am1">8:59AM</div>
            <div className="am2">8:59AM</div>
            <div className="on-duty1">ON DUTY</div>
            <b className="check-in">CHECK IN</b>
            <b className="check-out">CHECK OUT</b>
            <img
              className="mask-group-icon6"
              alt=""
              src="/mask-group6@2x.png"
            />
            <div className="group-child3" />
            <div className="group-div">
              <div className="group-child4" />
              <img className="group-child5" alt="" src="/vector-1.svg" />
              <img className="group-child6" alt="" src="/vector-2.svg" />
              <div className="today-activity">
                <b>TODAY</b>
                <span>{` `}</span>
                <b>ACTIVITY</b>
              </div>
              <div className="check-in1">CHECK IN</div>
              <div className="break-time-start"> BREAK TIME START</div>
              <div className="break-time-done"> BREAK TIME DONE</div>
              <div className="lunch-start">LUNCH START</div>
              <div className="lunch-done">LUNCH DONE</div>
              <div className="check-out1">CHECK OUT</div>
              <div className="ellipse-div" />
              <div className="group-child7" />
              <div className="group-child8" />
              <div className="group-child9" />
              <div className="group-child10" />
              <div className="group-child11" />
            </div>
            <b className="working-progress">2021 WORKING PROGRESS</b>
            <b className="working-progress">2021 WORKING PROGRESS</b>
            <div className="download-details">DownLOAD DETAILs</div>
            <b className="year2">Year</b>
            <img className="group-child12" alt="" src="/vector-4.svg" />
            <img className="group-child13" alt="" src="/vector-5.svg" />
            <img className="group-child14" alt="" src="/vector-6.svg" />
            <img className="group-child15" alt="" src="/vector-7.svg" />
            <img className="group-child16" alt="" src="/vector-8.svg" />
            <b className="b4">0</b>
            <b className="jan">Jan</b>
            <b className="feb">FEB</b>
            <b className="mar">MAR</b>
            <b className="apr">APR</b>
            <b className="may">MaY</b>
            <b className="jun">JUN</b>
            <b className="jul">JUL</b>
            <b className="aug">AUG</b>
            <b className="sep">SEP</b>
            <b className="oct">OCT</b>
            <b className="nov">NOV</b>
            <b className="dec">DEC</b>
            <b className="b5">25</b>
            <b className="b6">50</b>
            <b className="b7">75</b>
            <b className="b8">100</b>
            <img className="group-child17" alt="" src="/vector-9.svg" />
            <img className="group-child18" alt="" src="/vector-10.svg" />
            <img className="group-child19" alt="" src="/vector-11.svg" />
            <img className="group-child20" alt="" src="/vector-12.svg" />
            <img className="group-child21" alt="" src="/vector-13.svg" />
            <img className="group-child22" alt="" src="/vector-14.svg" />
            <img className="group-child23" alt="" src="/vector-15.svg" />
            <img className="group-child24" alt="" src="/vector-16.svg" />
            <img className="group-child25" alt="" src="/vector-17.svg" />
            <img className="group-child26" alt="" src="/vector-18.svg" />
            <img className="group-child27" alt="" src="/vector-19.svg" />
            <img className="group-child28" alt="" src="/vector-20.svg" />
            <div className="group-child29" />
            <div className="group-child30" />
            <div className="group-child31" />
            <img
              className="mdiclock-check-outline-icon"
              alt=""
              src="/mdiclockcheckoutline.svg"
            />
            <img
              className="fa-soliduser-clock-icon"
              alt=""
              src="/fasoliduserclock.svg"
            />
            <img className="akar-iconsclock" alt="" src="/akariconsclock.svg" />
            <img className="mdiclock-out-icon" alt="" src="/mdiclockout.svg" />
            <img className="fedrop-down-icon" alt="" src="/fedropdown.svg" />
            <img
              className="bxbxs-download-icon"
              alt=""
              src="/bxbxsdownload.svg"
            />
          </div>
        </div>
      </div>
      <img className="mask-group-icon7" alt="" src="/mask-group7@2x.png" />
      <img className="frame-child2" alt="" src="/group-42.svg" />
      <img className="group-icon2" alt="" src="/group2.svg" />
    </div>
  );
};

export default FrameComponent;
