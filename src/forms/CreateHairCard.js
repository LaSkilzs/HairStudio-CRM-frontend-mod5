import React from "react";
import "./forms.css";
import Navbar from "../app/Navbar";
import Header from "../app/Header";

class CreateHairCard extends React.Component {
  constructor() {
    super();
    this.state = {
      "suffered_from_hair_loss?": false,
      "been_diagnosed_with_alopecia?": false,
      "take_any_medication?": false,
      "been_pregnant_in_the_last_6_months?": false,
      "suffer_from_psoriasis_to_the_scalp?": false,
      "suffer_from_ezcema_to_the_scalp?": false,
      "have_a_sensitive_scalp?": false,
      "any_known_allergies?": false,
      "which_ones?": "",
      "frequently_swim_or_go_to_the_gym?": false,
      "currently_have_colour_in_your_hair?": false,
      "which_method?": "",
      "last_time_colored?": "",
      "used_hair_extensions_before?": false,
      "which_type_did_you_use?": "",
      "have_a_perm_or_relaxer?": false,
      "last_time_you_had_a_relaxer?": "",
      "wash_frequency?": "",
      hair_type: "",
      hair_is: "",
      length: "",
      user_id: 0,
      stylist_id: 0,
      hair_personality_id: 0
    };
  }

  onSubmit = e => {
    e.preventDefault();
    const message = this.state;
    console.log(message);
  };

  handleChange = e => this.setState({ [e.target.name]: e.target.value });
  render() {
    return (
      <React.Fragment>
        <div className="form-container">
          <form onSubmit={e => this.onSubmit(e)} className="create">
            <h1 className="form-header">Create Hair Card</h1>
            <hr />
            <input
              type="checkbox"
              name="suffered_from_hair_loss?"
              onChange={e => this.handleChange(e)}
            />
            Have you ever suffered from hair loss?
            <input
              type="checkbox"
              name="been_diagnosed_with_alopecia?"
              onChange={e => this.handleChange(e)}
            />
            Have you been diagnosed with alopecia?
            <input
              type="checkbox"
              name="take_any_medication?"
              onChange={e => this.handleChange(e)}
            />
            Do you currently take any medication?
            <input
              type="text"
              placeholder="if so, which ones?"
              name="which_ones?"
              onChange={e => this.handleChange(e)}
            />
            <input
              type="checkbox"
              name="been_pregnant_in_the_last_6_months?"
              onChange={e => this.handleChange(e)}
            />
            Have you been pregnant in the last 6 months?
            <input
              type="checkbox"
              name="suffer_from_psoriasis_to_the_scalp?"
              onChange={e => this.handleChange(e)}
            />
            Do you suffer from psoriasis to the scalp?
            <input
              type="checkbox"
              name="suffer_from_ezcema_to_the_scalp?"
              onChange={e => this.handleChange(e)}
            />
            Do you suffer from ezcema to the scalp?
            <input
              type="checkbox"
              name="have_a_sensitive_scalp?"
              onChange={e => this.handleChange(e)}
            />
            Do you havd a sensitive scalp?
            <input
              type="checkbox"
              name="any_known_allergies?"
              onChange={e => this.handleChange(e)}
            />
            Do you have any known allergies?
            <input
              type="text"
              className="select"
              name="which_method"
              placeholder="if so, which method?"
              onChange={e => this.handleChange(e)}
            />
            <input
              type="checkbox"
              name="frequently_swim_or_go_to_the_gym?"
              onChange={e => this.handleChange(e)}
            />{" "}
            Do you frequently swim or go to the gym?
            <input
              type="checkbox"
              name="currently_have_colour_in_your_hair?"
              onChange={e => this.handleChange(e)}
            />
            Do you currently have colour in your hair?
            <input
              type="text"
              className="select"
              name="last_time_colored?"
              placeholder="if so, last time colored and which method?"
              onChange={e => this.handleChange(e)}
            />
            <input
              type="checkbox"
              name="used_hair_extensions_before?"
              onChange={e => this.handleChange(e)}
            />
            Have you ever used hair extensions?
            <input
              type="text"
              className="select"
              name="which_type_did_you_use?"
              placeholder="if so, which types were used?"
              onChange={e => this.handleChange(e)}
            />
            <input
              type="checkbox"
              name="have_a_perm_or_relaxer?"
              onChange={e => this.handleChange(e)}
            />
            Do you have a perm or a relaxer?
            <input
              type="text"
              className="select"
              name="last_time_you_had_a_relaxer?"
              placeholder="if so, when was the last time you had a relaxer/perm?"
              onChange={e => this.handleChange(e)}
            />
            <input
              type="text"
              className="select"
              name="wash_frequency?"
              placeholder="How often do you wash your hair?"
              onChange={e => this.handleChange(e)}
            />
            <select
              className="select"
              name="hair_type"
              onChange={e => this.handleChange(e)}
            >
              <option value="noresponse">noresponse</option>
              <option value="very_thick">very thick</option>
              <option value="thick">thick</option>
              <option value="medium">medium</option>
              <option value="fine">fine</option>
            </select>
            <select
              className="select"
              name="hair_is"
              onChange={e => this.handleChange(e)}
            >
              <option value="unanswered">unanswered</option>
              <option value="wavy">wavy</option>
              <option value="curly">curly</option>
              <option value="straight">straight</option>
              <option value="fuzzy">fuzzy</option>
            </select>
            <select
              className="select"
              name="hair_personality_id"
              onChange={e => this.handleChange(e)}
            >
              <option value="1">reluctant groomer</option>
              <option value="2">prioritizer</option>
              <option value="3">care-free</option>
              <option value="4">career-focused</option>
              <option value="5">sporty</option>
              <option value="6">elegantt</option>
              <option value="7">trend-inspired</option>
              <option value="8">introvert</option>
            </select>
            <select
              className="select"
              name="length"
              onChange={e => this.handleChange(e)}
            >
              <option value="unknown">unknown</option>
              <option value="above_shoulder">above_shoulder</option>
              <option value="below_shoulder">below_shoulder</option>
            </select>
            <select
              name="stylist_id"
              className="select"
              onChange={e => this.handleChange(e)}
            >
              <option value="1">Name1</option>
              <option value="2">Name2</option>
            </select>
            <button
              type="submit"
              className="primary-btn"
              style={{
                color: "var(--pink)",
                border: "2px solid purple",
                fontSize: "20px"
              }}
            >
              submit
            </button>
          </form>
        </div>
      </React.Fragment>
    );
  }
}

export default CreateHairCard;
