import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import RegisterWorkerComponent from "../../../component/auth/worker/registerWorkerComponent";
import { RegisterWorkerAction } from "../../../storage/actions/auth/registerWorkerAction";

const RegisterWorkerPages = () => {
  const dispatch = useDispatch();

  const error = useSelector((state) => state.registerWorker);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [handphone, setHandphone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    dispatch(RegisterWorkerAction());
  };

  return (
    <RegisterWorkerComponent
      nameValue={name}
      namechange={(e) => setName(e.target.value)}
      emailValue={email}
      emailChange={(e) => setEmail(e.target.value)}
      handphoneValue={handphone}
      handphoneChange={(e) => setHandphone(e.target.value)}
      passwordValue={password}
      passwordChange={(e) => setPassword(e.target.value)}
      confirmPasswordValue={confirmPassword}
      confirmPasswordChange={(e) => setConfirmPassword(e.target.value)}
      onSubmit={onSubmit}
      error={error}
    />
  );
};

export default RegisterWorkerPages;

// const {passwordValue, passwordChange, emailValue, emailChange, onSubmit, nameValue, nameChange, handphoneValue, handphoneChange, confirmPasswordValue, confirmPasswordChange} = props
