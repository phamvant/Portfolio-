import React from "react";

function Contact() {
  return (
    <div>
      <p className="text-center text-white pt-4 text-2xl">Contact Me</p>
      <div className="flex justify-between px-24 pt-8">
        <div>
          <a href="https://facebook.com/thuan.namae">
            <img className="w-10" src="src/assets/fb.png" />
          </a>
        </div>
        <div>
          <a href="https://www.instagram.com/ph.thuann/">
            <img className="w-10" src="src/assets/ig.png" />
          </a>
        </div>
        <div>
          <a href="https://sunasteriskve-fjj7400.slack.com/team/U036DRGSX7D">
            <img className="w-10" src="src/assets/slack.png" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
