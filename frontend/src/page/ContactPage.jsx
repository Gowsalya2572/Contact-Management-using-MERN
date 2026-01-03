import { useEffect, useState } from "react";
import { getContacts, deleteContact ,updateContact} from "../api/axios";
import ContactForm from "../components/ContactForm";
import ContactList from "../components/ContactList";

const ContactPage = () => {
  const [contacts, setContacts] = useState([]);



  useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContacts = async () => {
    const res = await getContacts();
    setContacts(res.data);
  };

  const handleAdd = (newContact) => {
    setContacts((prev) => [...prev, newContact]);
  };


  const handleEdit = async (id, updatedData) => {
    try {
      const res = await updateContact(id, updatedData);
      setContacts((prev) =>
        prev.map((c) => (c._id === id ? res.data.data : c))
      );
    } catch (err) {
      alert("Failed to update contact");
    }
  };

  const handleDelete = async (id) => {
    await deleteContact(id);
    setContacts((prev) => prev.filter((c) => c._id !== id));
  };

  return (
    <div className="container">
      <ContactForm onContactAdded={handleAdd} />
      <ContactList contacts={contacts} onDelete={handleDelete}  onEdit={handleEdit}/>
    </div>
  );
};

export default ContactPage;

