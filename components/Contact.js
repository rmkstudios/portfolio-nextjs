import mainstyles from "../styles/Main.module.css";
import styles from "../styles/Contact.module.css";
import emailjs from "@emailjs/browser";
import { useState } from "react";
import Image from "next/image";
import Spinner from "../public/spinner.gif";
import Turtle from "../public/turtle.png";

const Contact = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [message, setMessage] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [emailSent, setEmailSent] = useState(false);

  function sendEmail(e) {
    e.preventDefault();

    if (name && email && message) {
      setError(false);
      setLoading(true);
      emailjs
        .sendForm(
          "service_waic5ib",
          "template_fhsqo4g",
          e.target,
          "nfatqzmbYCn1RhSX5"
        )
        .then(
          (result) => {
            console.log(result.text);
            setEmailSent(true);
            setLoading(false);
          },
          (error) => {
            console.log(error.text);
            setLoading(false);
          }
        );
      e.target.reset();
    } else {
      setError(true);
    }
  }

  return (
    <div className={mainstyles.wrapper}>
      <div className={styles.card}>
        <h2>Reach Out And Say Hello!</h2>
        <Image src={Turtle} className={styles.turtle} />
        <form className={styles.form} onSubmit={sendEmail}>
          {loading ? (
            <div>
              <Image src={Spinner} width={30} height={30} />
            </div>
          ) : (
            <>
              {emailSent ? (
                <div className={styles.success}>
                  Email Sent! I'll get back to you shortly!
                </div>
              ) : (
                <>
                  {error ? (
                    <div className={styles.error}>
                      Whoops! Be sure to fill out all fields!
                    </div>
                  ) : (
                    ""
                  )}
                  <input
                    placeholder="name"
                    name="name"
                    value={name}
                    className={styles.input}
                    onChange={(e) => setName(e.target.value)}
                  />
                  <input
                    placeholder="email"
                    name="email"
                    value={email}
                    className={styles.input}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <textarea
                    placeholder="message"
                    name="message"
                    value={message}
                    className={styles.message}
                    onChange={(e) => setMessage(e.target.value)}
                  />
                  <button className={styles.button} type="submit">
                    Send
                  </button>
                </>
              )}
            </>
          )}
        </form>
      </div>
    </div>
  );
};

export default Contact;
