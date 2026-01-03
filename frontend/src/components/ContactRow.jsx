import { useState } from "react";

const ContactRow = ({ contact, onDelete, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [form, setForm] = useState({
    name: contact.name,
    email: contact.email,
    phone: contact.phone,
    message: contact.message || "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    onEdit(contact._id, form);
    setIsEditing(false);
  };

  return (
    <tr className="border-b hover:bg-gray-50 transition">
      <td className="px-4 py-2">
        {isEditing ? (
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            className="border px-2 py-1 rounded w-full"
          />
        ) : (
          <span className="text-blue-700 font-medium">{contact.name}</span>
        )}
      </td>

      <td className="px-4 py-2">
        {isEditing ? (
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            className="border px-2 py-1 rounded w-full"
          />
        ) : (
          <span className="text-green-700">{contact.email}</span>
        )}
      </td>

      <td className="px-4 py-2">
        {isEditing ? (
          <input
            type="text"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            className="border px-2 py-1 rounded w-full"
          />
        ) : (
          <span className="text-purple-700">{contact.phone}</span>
        )}
      </td>

      <td className="px-4 py-2">
        {isEditing ? (
          <input
            type="text"
            name="message"
            value={form.message}
            onChange={handleChange}
            className="border px-2 py-1 rounded w-full"
          />
        ) : (
          <span className="text-gray-600">{contact.message || "-"}</span>
        )}
      </td>

      <td className="px-4 py-2 flex flex-col gap-2 items-start">
        {isEditing ? (
          <>
            <button
              onClick={handleSave}
              className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600 transition"
            >
              Save
            </button>
            <button
              onClick={() => setIsEditing(false)}
              className="bg-gray-300 px-3 py-1 rounded hover:bg-gray-400 transition"
            >
              Cancel
            </button>
          </>
        ) : (
          <>
            <button
              onClick={() => setIsEditing(true)}
              className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-300 transition"
            >
              Edit
            </button>
            <button
              onClick={() => onDelete(contact._id)}
              className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition"
            >
              Delete
            </button>
          </>
        )}
      </td>
    </tr>
  );
};

export default ContactRow;
