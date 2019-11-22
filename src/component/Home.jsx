import React, { Component, useState } from "react";
import "./Home.css";
class Home extends Component {
  state = {};

  constructor() {
    super();
    this.state = {
      isInformationDialogOpen: false,
      isRemoveDialogOpen: false,
      isBalanceDialogOpen: false
    };
  }

  openInformationDialog = () =>
    this.setState({ isInformationDialogOpen: true });
  // handleRemoveClose = () => this.setState({ isRemoveDialogOpen: false });
  // openRemoveDialog = () => this.setState({ isRemoveDialogOpen: true });
  //openBalanceDialog = () => this.setState({ isBalanceDialogOpen: true });
  // openInformationDialog = () => this.setState({ isInformationDialogOpen: true });
  // openRemoveDialog = () => this.setState({ isRemoveDialogOpen: true });
  openBalanceDialog = () => this.setState({ isBalanceDialogOpen: true });

  handleInformationClose = () =>
    this.setState({ isInformationDialogOpen: false });
  // handleRemoveClose = () => this.setState({ isRemoveDialogOpen: false });
  handleBalanceClose = () => this.setState({ isBalanceDialogOpen: false });
  render() {
    return (
      <body>
        <div>
          <div className="handle text-center">
            <div>
              <input
                className="search  ml-2 "
                type="text"
                placeholder="Enter a value"
              />
              <button
                className=" depositButton btn btn-primary m-2 "
                id="searchButton"
              >
                Deposit
              </button>
              <button
                className=" withdrawButton btn btn-primary m-2 "
                id="searchButton"
              >
                withdraw
              </button>
              <button
                className="infoButton btn btn-primary btn-lg "
                id="infoButton"
                onClick={this.openInformationDialog}
              >
                Information
              </button>
              <button
                className="balanceButton btn btn-primary btn-lg "
                id="balanceButton"
                onClick={this.openBalanceDialog}
              >
                Balance
              </button>
              {this.state.isInformationDialogOpen && (
                <dialog
                  className="infoDialog border-primary "
                  modal={false}
                  open={true}
                >
                  <div className="userInfo text-light float-left">
                    <em className="accountNumber font-weight-bold h4">
                      Account number:
                    </em>
                    <br />
                    <br />
                    <em className="accountNumber font-weight-bold h4">
                      Email:
                    </em>

                    <br />
                    <br />
                    <em className="name font-weight-bold h4 pt-3">Name :</em>
                    <br />
                    <br />

                    <em className="cardDate font-weight-bold h4  pd-3  ">
                      Card validity date:
                    </em>
                    <br />
                    <br />

                    <em className="cardNumber font-weight-bold h4  pt-3">
                      Card Number:
                    </em>
                    <br />
                  </div>
                  <button
                    className="cancel btn btn-danger float-right"
                    onClick={this.handleInformationClose}
                  >
                    Cancel
                  </button>
                </dialog>
              )}
              {this.state.isBalanceDialogOpen && (
                <dialog
                  className="balanceDialog border-primary "
                  modal={false}
                  open={true}
                >
                  <div className="userInfo text-light float-left">
                    <em className="cardNumber font-weight-bold h4  pt-3">
                      Card Number:
                    </em>
                    <br />
                  </div>
                  <button
                    className="cancel btn btn-danger float-right"
                    onClick={this.handleBalanceClose}
                  >
                    Cancel
                  </button>
                </dialog>
              )}
            </div>
          </div>
        </div>
      </body>
    );
  }
}

export default Home;
