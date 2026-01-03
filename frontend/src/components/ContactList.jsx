import ContactRow from "./ContactRow";

const ContactList = ({ contacts, onDelete, onEdit }) => {
  return (
    <div className="mt-8 bg-white shadow-lg rounded-lg p-4">
  <h2 className="text-2xl font-semibold text-gray-700 mb-4">
    Submitted Contacts
  </h2>

  <div className="overflow-x-auto">
    <table className="w-full border-collapse">
      <thead>
        <tr className="bg-gray-100 text-gray-600 text-left">
          <th className="p-3">Name</th>
          <th className="p-3">Email</th>
          <th className="p-3">Phone</th>
          <th className="p-3">Message</th>
          <th className="p-3 text-center">Action</th>
        </tr>
      </thead>

      <tbody>
        {contacts.map((contact) => (
          <ContactRow
            key={contact._id}
            contact={contact}
            onDelete={onDelete}
            onEdit={onEdit}
          />
        ))}
      </tbody>
    </table>
  </div>
</div>

  );
};

export default ContactList;
