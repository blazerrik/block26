import { useState } from "react";
import {useEffect} from 'react'

export default function SelectedContact({ selectedContactId , setSelectedContactId  }) {

    const [contact, setContact] = useState(null);

    useEffect(() => {
        async function fetchContacts() {
          try {
            const response = await fetch(
                `https://jsonplace-univclone.herokuapp.com/users/${selectedContactId}`
            );
            const result = await response.json();
            setContact(result);
          } catch (error) {
            console.error(error);
          }
    
        }
        fetchContacts();
      }, []);

    return (
      <tr
        onClick={() => {
          setSelectedContactId(contact.id);
        }}
      >
        <td>{contact.name}</td>
        <td>{contact.email}</td>
        <td>{contact.phone}</td>
      </tr>
    );
  }