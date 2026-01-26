import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
const PORTFOLIOID = "tK6b1sApDYThYpar7EwbIE3EtoB3";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { db, auth } from "../Firebase";




const Contact = ({ contactTheme }) => {
  const [contactinfo, setContactInfo] = useState({
    email: "",
    phone: "",
    location: "",
    languages: "",
    locationURL: "",
  });
  // const contactinfo = useSelector((state) => state.stored.contactStored);

  useEffect(() => {
    async function fetchContact() {
      try {
        const contactRef = doc(db, "users", PORTFOLIOID, "contact", "profile");
        const savedData = await getDoc(contactRef);
        if (savedData.exists()) {
          setContactInfo(savedData.data());
        }
      } catch (err) {
        console.error("Error fetching contact info:", err);
      }
    }

    fetchContact();
  }, []);

  const { email, phone, location, languages, locationURL } = contactinfo || {};

  return (
    <>
      <div className={`page ${contactTheme==="light"?"bg-secondary text-primary":"bg-primary text-secondary"} shadow-inner shadow-black`}>
        <div className="max-w-4xl mx-auto">
          <h1 className="pageHeader">Get in touch</h1>

          <div className="grid grid-cols-1 gap-5 border-l border-neutral-700 pl-4 pb-4">
            {/* Contact Intro */}
            <div>
              <p className="writeUp leading-relaxed mb-6 textbody">
                I am open to professional opportunities, collaborations, and
                general enquiries. Feel free to reach out using the details
                provided, and I will respond as soon as possible.
              </p>
            </div>

            {/* location map */}
            <div className="map">
              <iframe
                src={locationURL}
                width={"100%"}
                height={550}
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            {/* Contact Details */}
            <div className="space-y-5 writeUp flex flex-wrap gap-x-10">
              <p>
                <span className="writeUp textbody text-tertiary">EMAIL</span> . . . .{email}
              </p>
              <p>
                <span className="writeUp textbody text-tertiary">PHONE</span> . . . .{phone}
              </p>
              <p>
                <span className="writeUp textbody text-tertiary">LOCATION</span> . . . . {location}
              </p>
              <p>
                <span className="writeUp textbody text-tertiary">LANGUAGES</span> . . . . {languages}
              </p>
            </div>

            <div>
              <h2 className="smallHeader">Contact Me</h2>
              <form
                className="w-full flex flex-col gap-2.5 "
                name="contact"
                method="POST"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
              >
                <input type="hidden" name="form-name" value="contact" />
                <input type="hidden" name="bot-field" id="bot-field" />
                <fieldset className=" grid md:grid-cols-2 gap-3 ">
                  <label htmlFor="">
                    Full Name <br />
                    <input
                      type="text"
                      name="fullname"
                      id="fullname"
                      required
                      className="outline-0 border-b border-b-neutral-500 w-full smallHeader focus:border-tertiary focus:border-b-2"
                    />
                  </label>
                  <label htmlFor="">
                    Email Address <br />
                    <input
                      type="email"
                      name="email"
                      id="email"
                      required
                      className="outline-0 border-b border-b-neutral-500 w-full smallHeader focus:border-tertiary focus:border-b-2"
                    />
                  </label>
                </fieldset>
                <textarea
                  name="message"
                  required
                  id="message"
                  className="w-full h-30 resize-none border-b border-neutral-300 outline-0 smallHeader focus:border-tertiary focus:border-b-2"
                  placeholder="Your Message"
                ></textarea>
                <button className="border w-3xs button " type="submit">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
