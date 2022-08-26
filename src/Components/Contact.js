import { useState, useRef } from "react";
import { Form, FloatingLabel } from "react-bootstrap";
import emailjs from "emailjs-com";
import "../Styles/ContactStyle.css";
import { toast } from "react-toastify";

function Contact({ contactRef }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [messageSent, setMessageSent] = useState(false);

  // const SERVICE_ID = process.env.REACT_APP_SERVICE_ID
  // const TEMPLATE_ID = process.env.REACT_APP_TEMPLATE_ID
  // const USER_ID = process.env.REACT_APP_USER_ID

  const SERVICE_ID = "service_k87zmxy"
  const TEMPLATE_ID = "template_xwPwaFaZ"
  const USER_ID = "user_bbPzStm7VvXnh4e4XwOGA"

  const form = useRef();

  const handleSendEmail = (e) => {
    e.preventDefault();

    if (email === "" || name === "" || message === "") {
      toast.warning("Missing fields", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return

    }
    setMessageSent(true);

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, USER_ID).then(
      (result) => {
        if (result) {
          toast.success("Email sent!", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
          setName("");
          setEmail("");
          setMessage("");
        }
      },
      (error) => {
        toast.error("Something went wrong...", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        console.log(error.text);
      }
    );
  };

  return (
    <section ref={contactRef} className="contact-main">
      <h1>
        Contact <span className="span-green">Me</span>
      </h1>

      <Form
        ref={form}
        style={{
          width: "90vw",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <FloatingLabel
          controlId="floatingInput"
          label="Name"
          className="mb-3 first-input"
          style={{ width: "30rem" }}
        >
          <Form.Control
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="name"
            name="user_name"
            required
          />
        </FloatingLabel>

        <FloatingLabel
          controlId="floatingInput"
          label="Email address"
          className="mb-3 second-input"
          style={{ width: "30rem" }}
        >
          <Form.Control
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="email"
            name="user_email"
            required
          />
        </FloatingLabel>

        <FloatingLabel
          controlId="floatingInput"
          label="Message"
          className="mb-3 third-input"
          style={{ width: "30rem" }}
        >
          <Form.Control
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            style={{ minHeight: "10rem" }}
            as="textarea"
            type="text"
            placeholder="message"
            name="message"
            required
          />
        </FloatingLabel>
        {messageSent ? (
          ""
        ) : (
          <button onClick={handleSendEmail} className="contact-btn">
            Send
          </button>
        )}
      </Form>
    </section>
  );
}

export default Contact;
