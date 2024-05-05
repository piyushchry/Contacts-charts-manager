import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useDispatch } from "react-redux";
import { addContact, changeCreateContactStatus } from "../redux/actions";

// Defining AddContact component
const AddContact = () => {
  // Initializing state variables using useState hook
  const [userFirstName, updateFirstName] = useState("");
  const [userLastName, updateLastName] = useState("");
  const [radioValue, updateRadioValue] = useState("ACTIVE");
  const dispatchFn = useDispatch();

  // Function to handle change event for first name input
  const changeFirstName = (event: React.ChangeEvent<HTMLInputElement>) => {
    updateFirstName(event.target.value);
  };

  // Function to handle change event for last name input
  const changeLastName = (event: React.ChangeEvent<HTMLInputElement>) => {
    updateLastName(event.target.value);
  };

  // Function to handle change event for radio input
  const changeRadioValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    updateRadioValue((event.target as HTMLInputElement).value);
  };

  // Function to submit the form data
  const submitContactForm = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    //check both first and last name provided
    if (userFirstName !== "" && userLastName !== "") {
      //create new object with given details
      const newContactData = {
        id: uuidv4(),
        firstName: userFirstName,
        lastName: userLastName,
        status: radioValue,
      };
      dispatchFn(addContact(newContactData)); // Dispatching addContact action with new contact data
      dispatchFn(changeCreateContactStatus()); // Dispatching changeCreateContactStatus action to close the form
    } else {
      alert("Please fill all the details !!"); //alert if any field is empty
    }
  };

  //Rendering the form to add new contacts
  return (
    <div className="overflow-visible md:h-screen h-[580px] md:w-full flex flex-col md:text-center items-center justify-center border text-[#36454F] bg-[#F3F3F3]">
      <h1 className="text-[25px] md:text-3xl mb-8 font-bold text-[#0e0d0d]">
        Create New Contact
      </h1>
      <form onSubmit={submitContactForm}>
        <div className="flex flex-col md:w-[550px] w-[300px] mx-5 border p-10 h-[300px] bg-[white] rounded-xl drop-shadow-sm items-center justify-center">
          <div className="md:w-full block md:flex items-center mb-5 justify-between">
            <label
              className="mr-3 font-bold text-[18px] md:text-[25px]"
              htmlFor="FIRSTNAME"
            >
              First Name:
            </label>
            <input
              onChange={changeFirstName}
              value={userFirstName}
              className="grow max-w-[300px] border-2 border-[#36454F] rounded-lg px-3 py-1 font-[500]"
              type="text"
              id="FIRSTNAME"
            />
          </div>

          <div className="md:w-full block md:flex  items-center mb-5 justify-between">
            <label
              className="mr-3 font-bold text-[18px] md:text-[25px]"
              htmlFor="LASTNAME"
            >
              Last Name:
            </label>
            <input
              onChange={changeLastName}
              value={userLastName}
              className="grow max-w-[300px] border-2 border-[#36454F] rounded-lg px-3 py-1 font-[500]"
              type="text"
              id="LASTNAME"
            />
          </div>

          <div className="flex items-center text-[18px] md:text-2xl font-bold md:w-full justify-between">
            <h1 className="mr-5">Status: </h1>
            <div className="grow max-w-[300px]">
              <div className="flex items-center">
                <input
                  checked={radioValue === "ACTIVE"}
                  onChange={changeRadioValue}
                  className="mr-2 "
                  type="radio"
                  id="ACTIVE"
                  value="ACTIVE"
                  name="ACTIVEINACTIVE"
                />
                <label className=" mb-1" htmlFor="ACTIVE">
                  Active
                </label>
              </div>
              <div className="flex items-center">
                <input
                  checked={radioValue === "INACTIVE"}
                  onChange={changeRadioValue}
                  className="mr-2 "
                  type="radio"
                  id="INACTIVE"
                  value="INACTIVE"
                  name="ACTIVEINACTIVE"
                />
                <label className=" mb-1" htmlFor="INACTIVE">
                  Inactive
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row flex-wrap align-center justify-center text-center">
          <button
            onClick={submitContactForm}
            className="hover:bg-[#c0fde7] hover:text-[#36454F] md:h-[50px] h-[40px] md:w-[150px] w-[125px] text-block font-bold rounded-xl drop-shadow-md bg-[#c0f4cf] mt-5"
            type="submit"
          >
            Save Contact
          </button>
          <button
            onClick={() => dispatchFn(changeCreateContactStatus())}
            className="hover:bg-[#f9b1b1] hover:text-[#36454F] md:h-[50px] h-[40px] md:w-[150px] w-[125px] text-block font-bold rounded-xl drop-shadow-md bg-[#f8938c] mt-5 ml-3"
            type="submit"
          >
            Close
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddContact;
