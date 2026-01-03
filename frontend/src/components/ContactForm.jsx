import { useState,useEffect } from "react";
import { createContact } from "../api/axios.js";

const ContactForm = ({ onContactAdded }) => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  // ✅ Validation exactly matching backend schema
  const validate = () => {
    let newErrors = {};

    if (!form.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "Please enter a valid email";
    }

    if (!form.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^[0-9]{10}$/.test(form.phone)) {
      newErrors.phone = "Phone must be 10 digits";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({}); // clear errors while typing
  };


  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) return;

    try {
      setLoading(true);

      const res = await createContact(form);

      setSuccess(res.data.message);
      onContactAdded(res.data.data);

      setForm({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    } catch (err) {
      const msg =
        err.response?.data?.message || "Failed to submit contact";
      alert(msg);
    } finally {
      setLoading(false);
    }
  };

  return (

   <form onSubmit={handleSubmit} className="flex justify-center  mt-10">
  <div className="w-full max-w-md bg-white shadow-lg rounded-xl p-6 space-y-4">

    <h2 className="text-2xl text-center font-semibold text-indigo-600">
      Contact Form
    </h2>

   
    <div>
      <input
        name="name"
        placeholder="Your Name"
        value={form.name}
        onChange={handleChange}
        className="w-full border border-gray-300 rounded-lg px-4 py-2 
                   focus:outline-none focus:ring-2 focus:ring-indigo-400"
      />
      {errors.name && (
        <p className="text-sm text-red-500 mt-1">{errors.name}</p>
      )}
    </div>

    
    <div>
      <input
        name="email"
        placeholder="Your Email"
        value={form.email}
        onChange={handleChange}
        className="w-full border border-gray-300 rounded-lg px-4 py-2 
                   focus:outline-none focus:ring-2 focus:ring-indigo-400"
      />
      {errors.email && (
        <p className="text-sm text-red-500 mt-1">{errors.email}</p>
      )}
    </div>

  
    <div>
      <input
        name="phone"
        placeholder="Phone (10 digits)"
        value={form.phone}
        onChange={handleChange}
        className="w-full border border-gray-300 rounded-lg px-4 py-2 
                   focus:outline-none focus:ring-2 focus:ring-indigo-400"
      />
      {errors.phone && (
        <p className="text-sm text-red-500 mt-1">{errors.phone}</p>
      )}
    </div>

  
    <div>
      <textarea
        name="message"
        placeholder="Your Message (optional)"
        value={form.message}
        onChange={handleChange}
        rows="4"
        className="w-full border border-gray-300 rounded-lg px-4 py-2 
                   focus:outline-none focus:ring-2 focus:ring-indigo-400"
      />
    </div>

    
    <button
      disabled={loading}
      className={`w-full py-2 rounded-lg text-white font-semibold transition
        ${loading
          ? "bg-gray-400 cursor-not-allowed"
          : "bg-indigo-500 hover:bg-indigo-600"}
      `}
    >
      {loading ? "Submitting..." : "Submit"}
    </button>

    
    {success && (
      <p className="text-center text-green-600 font-medium">
        {success}
      </p>
    )}
  </div>
</form>


  );
};

export default ContactForm;


