import React from "react";
import * as stringService from "../services/stringService";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formData: { string_to_cut: "" },
    };
  }

  onFormFieldChanged = (e) => {
    let currentTarget = e.currentTarget;
    let newValue = currentTarget.value;
    let inputName = currentTarget.name;

    this.setState(() => {
      let formData = { ...this.state.formData };
      formData[inputName] = newValue;
      return { formData };
    });
  };

  onButtonClicked = () => {
    const hardData = JSON.stringify(this.state.formData);
    stringService
      .stringCut(hardData)
      .then(this.onCutSuccess)
      .catch(this.onCutFailure);
  };

  onCutSuccess = (response) => {
    var cutString = response.data.return_string;
    console.log(cutString);
    toast("Your new string is: " + cutString, {
      position: "bottom-center",
      autoClose: false,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  onCutFailure = () => {
    toast.error(
      "Something went wrong, you may need a CORS unblocker to have functionality.",
      {
        position: "bottom-center",
        autoClose: false,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      }
    );
  };

  render() {
    return (
      <div>
        <div>
          <input
            type="text"
            id="stringToCut"
            placeholder="Please input string here"
            name="string_to_cut"
            onChange={this.onFormFieldChanged}
            value={this.state.formData.string_to_cut}
          />
        </div>
        <div>
          <button onClick={this.onButtonClicked} type="button">
            Submit
          </button>
        </div>
        <ToastContainer />
      </div>
    );
  }
}

export default Form;
