import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import RegisterWorkerComponent from "../../../component/auth/worker/registerWorkerComponent";
import { RegisterWorkerAction } from "../../../storage/actions/auth/registerWorkerAction";
import { useNavigate } from "react-router-dom";

const RegisterWorkerPages = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const error = useSelector((state) => state.registerWorker);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    let data = {name, email, phone, password, confirm};
    dispatch(RegisterWorkerAction(data, navigate));
  };

  return (
    <RegisterWorkerComponent
      nameValue={name}
      nameChange={(e) => setName(e.target.value)}
      emailValue={email}
      emailChange={(e) => setEmail(e.target.value)}
      phoneValue={phone}
      phoneChange={(e) => setPhone(e.target.value)}
      passwordValue={password}
      passwordChange={(e) => setPassword(e.target.value)}
      confirmValue={confirm}
      confirmChange={(e) => setConfirm(e.target.value)}
      onSubmit={onSubmit}
      error={error}
    />
  );
};

export default RegisterWorkerPages;

// const {passwordValue, passwordChange, emailValue, emailChange, onSubmit, nameValue, nameChange, phoneValue, phoneChange, confirmPasswordValue, confirmPasswordChange} = props
