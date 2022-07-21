import React from 'react'
import emailjs from "@emailjs/browser"
import { useRef,useState } from 'react';
import "../styles/Contact.css"
export default function Contact() {

    
    const form = useRef();
    const [done, setDone] = useState(false)
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm(
          "service_0ewvat9",
          "template_2k2sl64",
          form.current,
          "GmCWmhsrhRuIMCbYS"
        )
        .then(
          (result) => {
            console.log(result.text);
            setDone(true);
            form.reset();
          },
          (error) => {
            console.log(error.text);
          }
        );
    };
  
    return (
      <div className="contact-form" id="Contact">
        {/* left side copy and paste from work section */}
        <div className="w-left">
          <div className="awesome">
            {/* darkMode */}
            
            <span>Contact me</span>
            <div
              className="blur s-blur1"
              style={{ background: "#ABF1FF94" }}
            ></div>
          </div>
        </div>
        {/* right side form */}
        <div className="c-right">
          <form ref={form} onSubmit={sendEmail}>
            <input type="text" name="to_name" className="user"  placeholder="Name"/>
            <input type="email" name="from_name" className="user" placeholder="Email"/>
            <textarea name="message" className="user" placeholder="Message"/>
            <input type="submit" value="Send" className="button"/>
            <span>{done && "Thanks for Contacting me"}</span>
            <div
              className="blur c-blur1"
              style={{ background: "var(--purple)" }}
            ></div>
          </form>
        </div>
      </div>
    );
  
}
