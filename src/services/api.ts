export type Contact = {
  id: string
  firstName: string
  lastName: string
  email: string
}

const API_BASE = 'https://62f1407b25d9e8a2e7c8f549.mockapi.io/contacts'

export const fetchContacts = async (): Promise<Contact[]> => {
  const response = await fetch(API_BASE)
  if (!response.ok) {
    throw new Error('Error fetching')
  }
  return response.json()
}

export const fetchContactByID = async (id: string): Promise<Contact> => {
  const response = await fetch(`${API_BASE}/${id}`)
  if (!response.ok) {
    throw new Error('Error fetching')
  }
  return response.json()
}

// export const updateContact = async (id: string, contact: Contact): Promise<void> => {
//   const response = await fetch(`${API_BASE}/${id}`), {
//     method: "PUT",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(contact),
//   });
//   if (!response.ok) {
//     throw new Error('Error fetching')
//   }
// }
