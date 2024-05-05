// interface for Contact object
interface Contact {
  id: string;
  firstName: string;
  lastName: string;
}

// interface for ContactObject containing contact list and flags
interface ContactObject {
  contactList: Contact[]; 
  isCreateContact: boolean; // Flag indicating create contact is active
  isEditContact: boolean; // Flag indicating edit contact is active
  editContactData: {}; // contact data edited
}

// Initializing initial state for contact reducer
const initialState: ContactObject = {
  contactList: [], 
  isCreateContact: false, // Create contact flag set to false
  isEditContact: false, // Edit contact flag set to false
  editContactData: {}, // Empty object for edit contact data
}

// Defining contact reducer function
const contactReducer = (state: ContactObject = initialState, action: any) => {
  switch (action.type) {
    case 'CREATE':
      // Adding new contact to contact list
      return {...state,  contactList: [...state.contactList, action.data ] }
    case 'CLICKEDCREATE':
      // Toggling create contact flag
      return {...state, isCreateContact: !state.isCreateContact}
    case 'DELETE':
      // Filtering out deleted contact from contact list
      const filterIdList = state.contactList.filter((each) => (each.id !== action.data))
      return {...state, contactList: filterIdList}
    case 'EDITING':
      // Setting edit contact flag and data
      return {...state, isEditContact: true,  editContactData: action.data}
    case 'EDITED':
      // Updating contact data after editing
      const newData = action.data
      const updateDataList = state.contactList.map((each)=> {
        if (each.id === newData.id){
          return newData
        }else{
          return each
        }
      })
      return {...state, contactList: updateDataList, isEditContact: false }
    default:
      //returning current state
      return state;
  }
};

export default contactReducer;
