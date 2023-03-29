import axios from "axios";
import { React, useEffect, useState } from "react";
import { BsFillSendFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import Footer from "../../utility/footer/footer";
import Navbar from "../../utility/navbar/navbar";

const ChatWorkerPages = () => {
  const token = localStorage.getItem("token");
  const url = process.env.REACT_APP_BASE_URL;
  const [dataHire, setDataHire] = useState();
  const [messages, setMessages] = useState();
  const [receiver_name, setReceiverName] = useState();
  const [receiver_id, setReceiverId] = useState();
  const [hirePos, setHirePos] = useState();
  const [currentHireId, setCurrentHireId] = useState();
  const [submitted, setSubmitted] = useState(false);
  const [chat, setChat] = useState("");
  const [formChat, setFormChat] = useState({
    chat: "",
    receiver_id: "",
  });

  useEffect(() => {
    const fetchPerekrut = async () => {
      try {
        const result = await axios.get(`${url}/hire/mymsg`, {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
          },
        });
        let hire = result.data.data;
        hire && setDataHire(hire);

        console.log("hire = ", hire);
      } catch (e) {
        console.log(e);
      }
    };
    fetchPerekrut();
  }, [token, url]);

  const fetchChats = async (hire_id) => {
    try {
      const result = await axios.get(`${url}/hire/messages/${hire_id}`);
      let res = result.data.data;
      res && setMessages(res);
      res && setReceiverId(res[0].sender_id);
      res && setReceiverName(res[0].sender_name);
      res && setHirePos(res[0].hire_position);
      res && setCurrentHireId(res[0].hire_id);
      console.log("chats = ", res);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const header = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    if (submitted) {
      const postChat = async () => {
        try {
          const result = await axios.post(
            `${url}/hire/messages/${currentHireId}`,
            formChat,
            header
          );
          let res = result.data.data;
          console.log("Message sent :", res);
          setSubmitted(false);
        } catch (error) {
          console.log(error.message);
          setSubmitted(false);
        }
      };
      postChat().then(() => {
        fetchChats(currentHireId);
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [submitted, formChat, currentHireId, url, token]);

  const handleSendMessage = async (e) => {
    e.preventDefault();
    setFormChat({
      chat: chat,
      receiver_id: receiver_id,
    });
    setSubmitted(true);
    setChat("");
  };

  return (
    <>
      <div className="shadow p-3 mb-5 bg-white rounded">
        <Navbar />
      </div>

      <div className="container d-flex" style={{ height: "100%" }}>
        {/* left */}
        <div
          className="border-2 w-25 border shadow border-light d-flex flex-column"
          style={{ height: "700px" }}
        >
          <div className="w-100 border-bottom border-4 border-light pb-2">
            <h5 className="mt-4 ms-3">Messages</h5>
          </div>
          {dataHire?.map((item) => (
            <div key={item.id}>
              <div
                className="d-flex ms-2 mt-4"
                onClick={() => fetchChats(item.id)}
              >
                <img
                  style={{
                    objectFit: "cover",
                    width: "60px",
                    height: "60px",
                    borderRadius: "100%",
                  }}
                  src={item.employer_photo}
                  alt=""
                />
                <div className="d-flex flex-column ms-3 justify-content-center">
                  <p className="fw-bold fs-5">{item.employer_name}</p>
                  <span style={{ opacity: "0.5", marginTop: "-15px" }}>
                    {item.position}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* end left */}

        {/* right */}
        <div
          className="border-2 w-75 border shadow border-light d-flex flex-column ms-5"
          style={{ height: "700px" }}
        >
          {/* chat, hire_id, receiver_name, sender_name */}
          <div className="w-100 border-bottom border-4 border-light pb-2 d-flex justify-content-between">
            <div className="d-flex">
              <h5 className="mt-4 ms-3 text-center">
                {receiver_name ? receiver_name : ""}
              </h5>
            </div>
            <p className="mt-4" style={{ opacity: "0.5" }}>
              {hirePos ? hirePos : "Select Chat to Begin"}
            </p>
            <Link
              className="text-decoration-none mt-4 me-3 fw-bold"
              to={`/profile/${receiver_id}`}
            >
              {receiver_id ? "Detail Profile" : ""}
            </Link>
          </div>

          <div className="mt-5" style={{ height: "500px", overflowY: "auto" }}>
            {messages?.map((item, index) =>
              item.receiver_id === receiver_id ? (
                <div key={index}>
                  <div className="me-4 mt-2 justify-content-end d-flex align-items-end">
                    <p
                      className="border-success border border-2 shadow-sm p-1 rounded me-3"
                      style={{ opacity: "0.7" }}
                    >
                      {item.chat}
                    </p>
                  </div>
                </div>
              ) : item.receiver_id !== receiver_id ? (
                <div key={index}>
                  <div className="ms-4 mt-2 justify-content-start d-flex align-items-end">
                    <p
                      className="border-primary border border-2 shadow-sm p-1 rounded me-3"
                      style={{ opacity: "0.7" }}
                    >
                      {item.chat}
                    </p>
                  </div>
                </div>
              ) : (
                ""
              )
            )}
          </div>

          <div className="d-flex justify-content-center align-items-center">
            <input
              id="chat"
              name="chat"
              value={chat}
              onChange={(e) => setChat(e.target.value)}
              className="w-100 py-3 border ps-4 m-4"
              style={{ borderRadius: "25px" }}
              type="text"
              placeholder="type message..."
            />
            <button
              className=" me-5 px-3 py-2 border-0 bg-primary text-white"
              style={{ borderRadius: "50%" }}
              onClick={handleSendMessage}
            >
              <BsFillSendFill />
            </button>
          </div>
        </div>
        {/* end right */}
      </div>
      <div style={{ marginTop: "200px" }}>
        <Footer />
      </div>
    </>
  );
};

export default ChatWorkerPages;
