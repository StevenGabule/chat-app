import React, { Fragment, useState } from "react";
import "./Navbar.css";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { logout, updateProfile } from "../../../../store/actions/auth";
import Modal from "../../../Modal/Modal";

const Navbar = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.authReducer);
  const [showProfileOptions, setShowProfileOptions] = useState(false);
  const [showProfileModal, setShowProfileModal] = useState(false);

  const [firstName, setFirstName] = useState(user.firstName);
  const [lastName, setLastName] = useState(user.lastName);
  const [gender, setGender] = useState(user.gender);
  const [email, setEmail] = useState(user.email);
  const [password, setPassword] = useState("");
  const [avatar, setAvatar] = useState("");

  const submitForm = (e) => {
    e.preventDefault();

    const form = { firstName, lastName, gender, email, avatar };

    if (password.length > 0) {
      form.password = password;
    }

    const formData = new FormData();

    for (const key in form) formData.append(key, form[key]);

    // dispatch
    dispatch(updateProfile(formData)).then(() => setShowProfileModal(false));
  };

  return (
    <div id={"navbar"} className={"card-shadow"}>
      <h2>Chat.IO</h2>

      <div
        id="profile-menu"
        onClick={() => setShowProfileOptions(!showProfileOptions)}
      >
        <img src={user.avatar} alt="avatar" width={40} />

        <p>
          {user.firstName} {user.lastName}
        </p>

        <FontAwesomeIcon icon={"caret-down"} className={"fa-icon"} />

        {showProfileOptions && (
          <div id="profile-options">
            <p onClick={() => setShowProfileModal(true)}>Update Profile</p>
            <p onClick={() => dispatch(logout())}>Logout</p>
          </div>
        )}
        {showProfileModal && (
          <Modal click={() => setShowProfileModal(false)}>
            <Fragment key="header">
              <h3 className={"m-0"}>Update profile</h3>
            </Fragment>

            <Fragment key="body">
              <form>
                <div className="input-field">
                  <input
                    name={"firstName"}
                    onChange={(e) => setFirstName(e.target.value)}
                    type="text"
                    value={firstName}
                    placeholder={"First name"}
                    className={"form-control"}
                  />
                </div>
                <div className="input-field">
                  <input
                    name={"lastName"}
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    type="text"
                    placeholder={"Last name"}
                    className={"form-control"}
                  />
                </div>

                <div className="input-field">
                  <select
                    onChange={(e) => setGender(e.target.value)}
                    name="gender"
                    id="gender"
                    value={gender}
                    className={"form-control"}
                    style={{ width: "100%" }}
                  >
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select>
                </div>

                <div className="input-field">
                  <input
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    name={"email"}
                    value={email}
                    placeholder={"Email"}
                    className={"form-control"}
                  />
                </div>
                <div className="input-field">
                  <input
                    type="password"
                    name={"password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder={"Password"}
                    className={"form-control"}
                  />
                </div>
                <div className="input-field">
                  <input
                    type="file"
                    name={"avatar"}
                    onChange={({ target }) => setAvatar(target.files[0])}
                  />
                </div>
              </form>
            </Fragment>

            <Fragment key="footer">
              <button
                type={"submit"}
                onClick={submitForm}
                className={"btn-login"}
                style={{ width: "100px" }}
              >
                Update
              </button>
            </Fragment>
          </Modal>
        )}
      </div>
    </div>
  );
};

export default Navbar;
