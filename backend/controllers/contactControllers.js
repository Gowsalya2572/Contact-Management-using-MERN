import Contact from "../models/Contact.js";

export const createContacts= async (req, res) => {
try {
const { name, email, phone, message } = req.body;
if (!name || !email || !phone) return res.status(400).json({  message: "Name, email, and phone are required", });
const contact = await Contact.create({ name,email,phone,message });
 res.status(201).json({
      message: "contact created successfully",
      data:contact,
    });
} catch (err) {
res.status(500).json({ message: 'Create contact failed', error: err.message });
}
};

export const allContacts=async (req, res) => {
try {
const contacts = await Contact.find({});
res.json(contacts);
} catch (err) {
res.status(500).json({ message: 'Failed to fetch contacts', error: err.message });
}
};

export const searchContacts = async (req, res) => {
  try {
    const { search } = req.query;

    let filter = {};
    if (search) {
      filter = {
        $or: [
          { name: { $regex: search, $options: "i" } },
          { email: { $regex: search, $options: "i" } },
          { phone: { $regex: search, $options: "i" } },
        ],
      };
    }

    const contacts = await Contact.find(filter).sort({ createdAt: -1 });

    res.status(200).json(contacts);
  } catch (err) {
    res.status(500).json({
      message: "Search failed",
      error: err.message,
    });
  }
};

export const updateContact =async (req, res) => {
try {
const contact = await Contact.findById(req.params.id);
if (!contact) return res.status(404).json({ message: 'Contact not found' });

const { name, email, phone,message } = req.body;
if (name) contact.name = name;
if (email) contact.email = email;
if (phone) contact.phone = phone;
if(message) contact.message=message;
await contact.save();
res.json({data:contact});
} catch (err) {
res.status(500).json({ message: 'Update failed', error: err.message });
}
};

export const deleteContact = async (req, res) => {
try {
const contact = await Contact.findById(req.params.id);
if (!contact) return res.status(404).json({ message: 'Contact not found' });
await contact.deleteOne();
res.json({ message: 'Deleted' });
} catch (err) {
res.status(500).json({ message: 'Delete failed', error: err.message });
}
};