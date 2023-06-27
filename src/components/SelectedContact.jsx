import { useState } from "react";
import {useEffect} from 'react'

export default function SelectedContact({ selectedContactId , setSelectedContactId  }) {

  const dummyContacts = [
    { id: 1, name: "R2-D2", phone: "222-222-2222", email: "r2d2@droids.com" },
    { id: 2, name: "C-3PO", phone: "333-333-3333", email: "c3po@droids.com" },
    { id: 3, name: "BB-8", phone: "888-888-8888", email: "bb8@droids.com" },
  ];

    const [contact, setContact] = useState(dummyContacts[1]);

    useEffect(() => {
        async function fetchContact() {
          try {
            
            const response = await fetch(
                `https://jsonplaceholder.typicode.com/users/${selectedContactId}`
            );
            const result = await response.json();
            console.log(result);
            setContact(result);
          } catch (error) {
            console.error(error);
          }
    
        }
        fetchContact();
      }, []);

    return (
      <tr>
        <td>{contact.id}</td>
        <td>{contact.username}</td>
        <td>{contact.name}</td>
        <td>{contact.email}</td>
        <td>{contact.phone}</td>
        <td>{contact.website}</td>
        <td>{contact.company.name}</td>
        
      </tr>
    );
  }