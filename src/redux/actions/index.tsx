// Action creator function to add a new contact
export const addContact = (props: any) => {
    return{
        type: "CREATE",
        data: props //contact data to be added
    }
}

// Action creator function to initiate editing of a contact
export const editContact = (props: {}) => {
    return{
        type: "EDITING",
        data: props //contact data to be edited
    }
}

// Action creator function to delete a contact
export const deleteContact = (props: string) => {
    return{
        type: "DELETE",
        data: props //Contact ID to be deleted
    }
}

// Action creator function to change the status indicating if the create contact button is clicked
export const changeCreateContactStatus = () => {
    return{
        type: "CLICKEDCREATE" //indicate create contact button if clicked
    }
}

// Action creator function to save edited contact details
export const saveEditedContact = (props: {}) => {
    return{
        type: "EDITED",
        data: props // Contact data edited
    }
}