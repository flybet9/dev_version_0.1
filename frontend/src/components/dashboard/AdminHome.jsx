import React, { useEffect, useState } from "react";
import Footer from "../common/Footer";
import Dashboard from "../dashboard/Dashboard";
import logoimg from "../../assets/logo/logo-dark.png";
import SpaceDashboardIcon from "@mui/icons-material/SpaceDashboard";
import GroupIcon from "@mui/icons-material/Group";
import SportsCricketIcon from "@mui/icons-material/SportsCricket";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import StoreIcon from "@mui/icons-material/Store";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import KeyIcon from "@mui/icons-material/Key";
import LanguageIcon from "@mui/icons-material/Language";
import CloseIcon from "@mui/icons-material/Close";
import "./style.css";
import Casino from "./Casino";
import Market from "./Market";
import Header from "./Header";
import Sst from "./Sst";
import Stockist from "./Stockist";
import Agent from "./Agent";
import User from "./User";
import Admin from "./Admin";

const AdminHome = () => {
  const [activeTab, setActiveTab] = useState("tab_dashboard");
  const [isManageVisible, setManageVisible] = useState(false);
  const [isMatchesVisible, setMatchesVisible] = useState(false);
  const [isLedgerVisible, setLedgerVisible] = useState(false);

  const handleTabClick = (tabId) => {
    document
      .querySelectorAll(".subtab")
      .forEach((e) => e.classList.remove("tab_visible"));

    setActiveTab(tabId);
    document.querySelector(".sidebar").classList.remove("minisidebar");
  };

  const toggleManage = () => {
    setManageVisible(!isManageVisible);
    setMatchesVisible(false);
    setLedgerVisible(false);
  };

  const toggleMatches = () => {
    setMatchesVisible(!isMatchesVisible);
    setManageVisible(false);
    setLedgerVisible(false);
  };

  const toggleLedger = () => {
    setLedgerVisible(!isLedgerVisible);
    setManageVisible(false);
    setMatchesVisible(false);
  };

  useEffect(() => {
    return () => {
      closeMenu();
      setManageVisible(false);
      setMatchesVisible(false);
      setLedgerVisible(false);
    };
  }, []);

  const closeMenu = () => {
    const sidebarElement = document.querySelector(".sidebar");
    if (sidebarElement) {
      sidebarElement.classList.add("minisidebar");
    } else {
      console.warn("Sidebar element not found. Unable to close menu.");
    }
  };

  // Inside your AdminHome component
  const currentUser = JSON.parse(localStorage.getItem("current_user"));
  const userLevel = currentUser ? currentUser.level : "";

  // ... rest of the component

  return (
    <div id="adminhome" className="container fxc text-body">
      <div className="subcontainer fxr">
        <div className="main-app fxr">
          <div className="sidebar fxc">
            <CloseIcon className="closeicon" onClick={closeMenu} />
            <div className="logo">
              <img src={logoimg} alt="Logo" />
            </div>
            <p className="sidebartitle">Admin tools</p>
            <div className="tabs fxc">
              <div
                className={`taboption fxr ${
                  activeTab === "tab_dashboard" ? "activetaboption" : ""
                }`}
                onClick={() => handleTabClick("tab_dashboard")}
              >
                <SpaceDashboardIcon />
                <span className="tabtitle">Dashboard</span>
              </div>

              <div className="tabmanage fxc">
                <div
                  className={`taboption fxr tab_manage`}
                  onClick={toggleManage}
                >
                  <GroupIcon />
                  <span className="tabtitle">Manage</span>
                </div>
                {isManageVisible && (
                  <div className="managedropdown">
                    {userLevel === "admin" && (
                      <>
                        <div
                          className={`subtab taboption fxr ${
                            activeTab === "tab_admin"
                              ? "activetaboption tab_visible"
                              : "tab_visible"
                          }`}
                          onClick={() => handleTabClick("tab_admin")}
                        >
                          <span className="circle c-1"></span>
                          <span className="tabtitle">Admin</span>
                        </div>
                        <div
                          className={`subtab taboption fxr ${
                            activeTab === "tab_superstockist"
                              ? "activetaboption tab_visible"
                              : "tab_visible"
                          }`}
                          onClick={() => handleTabClick("tab_superstockist")}
                        >
                          <span className="circle c-2"></span>
                          <span className="tabtitle">SST</span>
                        </div>
                        <div
                          className={`subtab taboption fxr ${
                            activeTab === "tab_stockist"
                              ? "activetaboption tab_visible"
                              : "tab_visible"
                          }`}
                          onClick={() => handleTabClick("tab_stockist")}
                        >
                          <span className="circle c-3"></span>
                          <span className="tabtitle">Stockist</span>
                        </div>
                        <div
                          className={`subtab taboption fxr ${
                            activeTab === "tab_agent"
                              ? "activetaboption tab_visible"
                              : "tab_visible"
                          }`}
                          onClick={() => handleTabClick("tab_agent")}
                        >
                          <span className="circle c-4"></span>
                          <span className="tabtitle">Agent</span>
                        </div>
                        <div
                          className={`subtab taboption fxr ${
                            activeTab === "tab_user"
                              ? "activetaboption tab_visible"
                              : "tab_visible"
                          }`}
                          onClick={() => handleTabClick("tab_user")}
                        >
                          <span className="circle c-5"></span>
                          <span className="tabtitle">User</span>
                        </div>
                      </>
                    )}
                    {(userLevel === "superstockist") && (
                      <>
                        <div
                          className={`subtab taboption fxr ${
                            activeTab === "tab_superstockist"
                              ? "activetaboption tab_visible"
                              : "tab_visible"
                          }`}
                          onClick={() => handleTabClick("tab_superstockist")}
                        >
                          <span className="circle c-2"></span>
                          <span className="tabtitle">SST</span>
                        </div>
                      </>
                    )}
                    {(userLevel === "stockist" ||userLevel === "superstockist") && (
                      <>
                        <div
                          className={`subtab taboption fxr ${
                            activeTab === "tab_stockist"
                              ? "activetaboption tab_visible"
                              : "tab_visible"
                          }`}
                          onClick={() => handleTabClick("tab_stockist")}
                        >
                          <span className="circle c-3"></span>
                          <span className="tabtitle">Stockist</span>
                        </div>
                      </>
                    )}
                    {(userLevel === "agent" ||
                      userLevel === "stockist" ||
                      userLevel === "superstockist") && (
                      <>
                        <div
                          className={`subtab taboption fxr ${
                            activeTab === "tab_agent"
                              ? "activetaboption tab_visible"
                              : "tab_visible"
                          }`}
                          onClick={() => handleTabClick("tab_agent")}
                        >
                          <span className="circle c-4"></span>
                          <span className="tabtitle">Agent</span>
                        </div>
                        <div
                          className={`subtab taboption fxr ${
                            activeTab === "tab_user"
                              ? "activetaboption tab_visible"
                              : "tab_visible"
                          }`}
                          onClick={() => handleTabClick("tab_user")}
                        >
                          <span className="circle c-5"></span>
                          <span className="tabtitle">User</span>
                        </div>
                      </>
                    )}
                    {userLevel === "user" ||userLevel === "agent" || userLevel === "stockist"&& (
                      <>
                        <div
                          className={`subtab taboption fxr ${
                            activeTab === "tab_user"
                              ? "activetaboption tab_visible"
                              : "tab_visible"
                          }`}
                          onClick={() => handleTabClick("tab_user")}
                        >
                          <span className="circle c-5"></span>
                          <span className="tabtitle">User</span>
                        </div>
                      </>
                    )}
                  </div>
                )}
              </div>

              <div className="tabmatches fxc">
                <div
                  className={`taboption fxr tab_matches`}
                  onClick={toggleMatches}
                >
                  <SportsCricketIcon />
                  <span className="tabtitle">Matches</span>
                </div>
                {isMatchesVisible && (
                  <div className="matchesdropdown">
                    <div
                      className={`subtab taboption fxr ${
                        activeTab === "tab_matcheslive"
                          ? "activetaboption tab_visible"
                          : "tab_visible"
                      }`}
                      onClick={() => handleTabClick("tab_matcheslive")}
                    >
                      <span className="circle c-1"></span>
                      <span className="tabtitle">Live</span>
                    </div>
                    <div
                      className={`subtab taboption fxr ${
                        activeTab === "tab_matchescomplete"
                          ? "activetaboption tab_visible"
                          : "tab_visible"
                      }`}
                      onClick={() => handleTabClick("tab_matchescomplete")}
                    >
                      <span className="circle c-2"></span>
                      <span className="tabtitle">Complete</span>
                    </div>
                  </div>
                )}
              </div>

              <div
                className={`taboption fxr ${
                  activeTab === "tab_casino" ? "activetaboption" : ""
                }`}
                onClick={() => handleTabClick("tab_casino")}
              >
                <MonetizationOnIcon />
                <span className="tabtitle">Casino</span>
              </div>

              <div
                className={`taboption fxr ${
                  activeTab === "tab_market" ? "activetaboption" : ""
                }`}
                onClick={() => handleTabClick("tab_market")}
              >
                <StoreIcon />
                <span className="tabtitle">Market</span>
              </div>

              <div
                className={`taboption fxr ${
                  activeTab === "tab_ledger" ? "activetaboption" : ""
                }`}
                onClick={toggleLedger}
              >
                <ManageAccountsIcon />
                <span className="tabtitle">Ledger</span>
              </div>
              {isLedgerVisible && (
                <div className="ledgerdropdown">
                  <div
                    className={`subtab taboption fxr ${
                      activeTab === "tab_collection_report"
                        ? "activetaboption tab_visible"
                        : "tab_visible"
                    }`}
                    onClick={() => handleTabClick("tab_collection_report")}
                  >
                    <span className="circle c-1"></span>
                    <span className="tabtitle">Collection Report</span>
                  </div>
                  <div
                    className={`subtab taboption fxr ${
                      activeTab === "tab_company_ledger"
                        ? "activetaboption tab_visible"
                        : "tab_visible"
                    }`}
                    onClick={() => handleTabClick("tab_company_ledger")}
                  >
                    <span className="circle c-2"></span>
                    <span className="tabtitle">Company Ledger</span>
                  </div>
                  <div
                    className={`subtab taboption fxr ${
                      activeTab === "tab_my_statement"
                        ? "activetaboption tab_visible"
                        : "tab_visible"
                    }`}
                    onClick={() => handleTabClick("tab_my_statement")}
                  >
                    <span className="circle c-3"></span>
                    <span className="tabtitle">My Statement</span>
                  </div>
                  <div
                    className={`subtab taboption fxr ${
                      activeTab === "tab_profit"
                        ? "activetaboption tab_visible"
                        : "tab_visible"
                    }`}
                    onClick={() => handleTabClick("tab_profit")}
                  >
                    <span className="circle c-4"></span>
                    <span className="tabtitle">Profit & Lost</span>
                  </div>
                </div>
              )}

              <div
                className={`taboption fxr ${
                  activeTab === "tab_password" ? "activetaboption" : ""
                }`}
                onClick={() => handleTabClick("tab_password")}
              >
                <KeyIcon />
                <span className="tabtitle">Password</span>
              </div>

              <div
                className={`taboption fxr ${
                  activeTab === "tab_language" ? "activetaboption" : ""
                }`}
                onClick={() => handleTabClick("tab_language")}
              >
                <LanguageIcon />
                <span className="tabtitle">Language</span>
              </div>
            </div>
          </div>
          <div className="right fxc">
            <Header />
            <div className="content fxc">
              {activeTab === "tab_dashboard" && <Dashboard />}
              {activeTab === "tab_casino" && <Casino />}
              {activeTab === "tab_market" && <Market />}
              {activeTab === "tab_superstockist" && <Sst />}
              {activeTab === "tab_stockist" && <Stockist />}
              {activeTab === "tab_agent" && <Agent />}
              {activeTab === "tab_user" && <User />}
              {activeTab === "tab_admin" && <Admin />}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AdminHome;
