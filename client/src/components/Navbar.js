import React, { Component } from "react";
import { NavLink, withRouter } from "react-router-dom";
import logo from "../../src/images/meta-logo.png";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Modal from "@material-ui/core/Modal";
import Button from "@material-ui/core/Button";

class Navbar extends Component {
  // const handleOpen = () => {
  //   setOpen(true);
  // };

  // const handleClose = () => {
  //   setOpen(false);
  // };
  render() {
    return (
      <nav className="nav-wrapper z-depth-0 transparent">
        <div className="container">
          <ul
            className="right"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <li>
              <NavLink to="/">Meta</NavLink>
            </li>
            <li>
              <NavLink to="/work">Work</NavLink>
            </li>
            <li>
              <NavLink to="/hobbies">Hobbies</NavLink>
            </li>
            <li>
              {/* <Button onClick={handleOpen}>Open Modal</Button>
              <Modal
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
                open={open}
                onClose={handleClose}
              >
                <div style={modalStyle} className={classes.paper}>
                  <Typography variant="h6" id="modal-title">
                    Text in a modal
                  </Typography>
                  <Typography variant="subtitle1" id="simple-modal-description">
                    Duis mollis, est non commodo luctus, nisi erat porttitor
                    ligula.
                  </Typography>
                  <SimpleModal />
                </div>
              </Modal> */}
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default withRouter(Navbar);
