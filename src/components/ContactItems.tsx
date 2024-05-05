import { IoIosContact } from "react-icons/io";
import { RiCheckboxBlankCircleFill } from "react-icons/ri";
import { useDispatch } from "react-redux";
import {deleteContact, editContact} from '../redux/actions'


//interface for props of ContactItems
interface ContactItemsProps {
  contactDetail: {
    id: string;
    firstName: string;
    lastName: string;
    status: string;
  };
}

//defining ContactItems Components
const ContactItems: React.FC<ContactItemsProps> = ({ contactDetail }) => {
  const dispachFn = useDispatch()

  //handling delete contact
  const clickToDeleteItem = () => {
    dispachFn(deleteContact(contactDetail.id))
  }

  //handling edit contact
  const clickedToEdit = () => {
    dispachFn(editContact(contactDetail))
  }


  //color based on status of contact
  const isActiveStatus =
    contactDetail.status === "ACTIVE" ? "text-[#2BBB00]" : "text-[#DF0000]";


  //render contact item
  return (
    <li className="bg-white m-5 w-[180px] h-[250px] border text-[#36454F] font-grey p-3 flex flex-col items-center justify-center font-bold rounded-xl shadow-lg border-[#f4544c]">
      <IoIosContact className="text-6xl" />
      <h1>{`${contactDetail.firstName} ${contactDetail.lastName}`}</h1>
      <div className="flex items-center">
        <RiCheckboxBlankCircleFill className={`${isActiveStatus} mr-2`} />
        {contactDetail.status}
      </div>
      <div className="">
        <button onClick={clickedToEdit} className="block bg-[#f4544c] w-20 m-3 rounded-xl h-15 text-white" type="button">
          Edit
        </button>
        <button onClick={clickToDeleteItem} className="block bg-[#f4544c] w-20 m-3 rounded-xl h-15 text-white" type="button">Delete</button>
      </div>
    </li>
  );
};

export default ContactItems;
