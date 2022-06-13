import { Button, TextField } from "@mui/material";
import React, { useState } from "react";
import styles from "../styles/contact.module.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Contact() {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [message, setMessage] = useState("");

  const submitHandller = () => {
    if (
      fname.length > 0 &&
      lname.length > 0 &&
      email.length > 0 &&
      mobile.length > 0 &&
      message.length > 0
    ) {
      const data = new FormData();
      data.append("fname", fname);
      data.append("lname", lname);
      data.append("email", email);
      data.append("mobile", mobile);
      data.append("message", message);
      fetch("https://formspree.io/f/myyovdjk", {
        method: "POST",
        body: data,
        headers: {
          Accept: "application/json",
        },
      }).then((res) => {
        if (res.ok) {
          toast.success("THANKS FOR CONTACTING US");
          setFname("");
          setLname("");
          setEmail("");
          setMobile("");
          setMessage("");
        } else {
          toast.error("Something Happened Wrong! Try again");
        }
      });
    } else {
      toast.error("All Fields Are Required !");
    }
  };
  return (
    <div className={styles.root}>
      <h1 style={{ textAlign: "center" }}>Contact Us</h1>
      {fname.length > 1 && (
        <p style={{ textAlign: "center" }}> Thanks For Contacting {fname}!</p>
      )}
      <div className={styles.container}>
        <form>
          <div className={styles.name}>
            <div>
              <TextField
                label="First Name"
                required
                // fullWidth
                className={styles.form}
                placeholder="Subash"
                onChange={(e) => setFname(e.target.value)}
                value={fname}
              />
              <TextField
                label="Email"
                required
                type={"email"}
                fullWidth
                className={styles.form}
                placeholder="contact@subash.com"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
            </div>
            <div>
              <TextField
                label="Last Name"
                required
                fullWidth
                className={styles.form}
                placeholder="S"
                onChange={(e) => setLname(e.target.value)}
                value={lname}
              />

              <TextField
                type="tele"
                required
                fullWidth
                className={styles.form}
                label="Mobile Number"
                onChange={(e) => setMobile(e.target.value)}
                value={mobile}
              />
            </div>
          </div>
          <div>
            <TextField
              multiline
              rows={2}
              required
              label="Your Message"
              fullWidth
              className={styles.textarea}
              placeholder="your message for us"
              onChange={(e) => setMessage(e.target.value)}
              value={message}
            />
          </div>
          <div className={styles.btn}>
            <Button
              className={styles.button}
              variant="contained"
              onClick={submitHandller}
            >
              Send
            </Button>
          </div>
          <ToastContainer />
        </form>
      </div>
    </div>
  );
}

export default Contact;
