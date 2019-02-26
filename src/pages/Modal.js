import React from "react";

const Modal = () => {
  return (
    <div>
      {/* <a href="#open-modal">Open Modal</a> */}
      <div id="open-modal" class="modal-window">
        <div className="container">
          <form>
            <input
              type="text"
              name="first_name"
              placeholder="Your first name..."
            />
            <input
              type="text"
              name="last_name"
              placeholder="Your last name..."
            />
            <input type="email" name="email" placeholder="Email address" />
            <textarea
              name="message"
              id="message"
              placeholder="Your message..."
              cols="30"
              rows="10"
            />
            <input type="submit" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Modal;
