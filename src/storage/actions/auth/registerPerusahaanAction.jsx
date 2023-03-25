import React from "react";

export const RegisterPerusahaanAction =
  (data, navigate) => async (dispatch) => {
    try {
      dispatch({ type: "REGISTER_PERUSAHAAN_PENDING" });
      const result = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/auth/register-company`,
        data
      );
      const company = result.data.data;
      localStorage.setItem("name", company.name);
      localStorage.setItem("email", company.email);
      localStorage.setItem("perusahaan", company.perusahaan);
      localStorage.setItem("jabatan", company.jabatan);
      localStorage.setItem("password", company.password);
      dispatch({ type: "REGISTER_PERUSAHAAN_SUCCESS", payload: company });
      navigate("/add-profile-perusahaan");
    } catch (err) {
      dispatch({
        type: "REGISTER_PERUSAHAAN_FAILED",
        payload: err.response.data.message,
      });
    }
  };
