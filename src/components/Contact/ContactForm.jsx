import { motion } from "framer-motion";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { X } from "lucide-react";

const ContactForm = ({ isOpen, onClose }) => {
  const contactRef = useRef(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    telephone: "",
    subject: "",
    message: "",
  });

  const validateEmail = (email) => {
    const re = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    return re.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateEmail(formData.email)) {
      toast.error("Invalid email address.");
      return;
    }

    setIsSubmitting(true);

    try {
      await emailjs.send(
        "service_bor5u4j",
        "template_30voclk",
        {
          from_name: `${formData.firstName} ${formData.lastName}`,
          to_name: "Admin",
          from_email: formData.email,
          telephone: formData.telephone,
          subject: formData.subject,
          message: formData.message,
          full_message: `Name: ${formData.firstName} ${formData.lastName}\nEmail: ${formData.email}\nTelephone: ${formData.telephone}\nSubject: ${formData.subject}\nMessage: ${formData.message}`,
        },
        "3oudBEphgujiqF3_4"
      );

      toast.success("Your message has been sent successfully.");
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        telephone: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      toast.error("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black transition-opacity duration-300 ${
          isOpen ? "opacity-50" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
      />

      {/* Sliding Form - Full width on mobile, half width on larger screens */}
      <div
        className={`fixed top-0 right-0 h-full w-full md:w-1/2 bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div
          ref={contactRef}
          id="contact"
          className="min-h-screen bg-white flex items-center justify-center px-4 sm:px-6 py-8 sm:py-12"
        >
          <ToastContainer position="top-right" autoClose={5000} />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full max-w-5xl bg-white p-6 sm:p-10 rounded-lg shadow-lg border border-gray-200"
          >
            {/* Close Button */}
            <div className="flex justify-end mb-4">
              <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
                <X className="w-6 h-6" />
              </button>
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900 text-center">
              Start a project
            </h1>
            <p className="text-gray-500 mb-6 text-center text-sm sm:text-base">
              Please get in touch with any questions, enquiries, or project details,
              and we will get back to you as soon as possible.
            </p>
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    First Name*
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    className="w-full p-2 sm:p-3 border rounded-md focus:ring focus:ring-indigo-300"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Last Name*
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    className="w-full p-2 sm:p-3 border rounded-md focus:ring focus:ring-indigo-300"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Email*
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full p-2 sm:p-3 border rounded-md focus:ring focus:ring-indigo-300"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Telephone*
                  </label>
                  <input
                    type="tel"
                    name="telephone"
                    value={formData.telephone}
                    onChange={handleChange}
                    required
                    className="w-full p-2 sm:p-3 border rounded-md focus:ring focus:ring-indigo-300"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full p-2 sm:p-3 border rounded-md focus:ring focus:ring-indigo-300"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Message*
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full p-2 sm:p-3 border rounded-md min-h-[150px] sm:min-h-[200px] focus:ring focus:ring-indigo-300"
                ></textarea>
              </div>
              <div className="flex justify-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="font-sans flex justify-center gap-2 items-center shadow-xl text-base sm:text-lg text-gray-50 bg-[#0A0D2D] backdrop-blur-md h-12 sm:h-16 w-40 sm:w-48 isolation-auto before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-[#3ab3e1] hover:text-gray-50 before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 relative z-10 px-4 py-2 overflow-hidden border-2 rounded-full group"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default ContactForm;