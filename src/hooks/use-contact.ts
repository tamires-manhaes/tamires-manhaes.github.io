import { useState } from "react";
import emailjs from "emailjs-com";
import { envs } from "@/configs/envs";
import { formatDate } from "@/utils/formatDate";

export const useContact = () => {
  const today = Date.now();
  const [status, setStatus] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      await emailjs
        .send(
          envs.emailjs.serviceId || "", // Service ID from EmailJS
          envs.emailjs.templateId || "", // Template ID from EmailJS
          {
            name: formData.name,
            email: formData.email,
            message: formData.message,
            date: formatDate(today),
          },
          envs.emailjs.publicId || "" // Public Key (from EmailJS)
        )
        .then((result) => {
          if (result.status === 200) {
            setStatus("Message sent successfully!");
            setFormData({ name: "", email: "", message: "" });
            alert(status.toString());
          } else {
            setStatus("something went south here");
            alert(status.toString());
          }
        });
      setIsLoading(false);
    } catch (error) {
      setStatus(`An error occurred. Please try again: ${error}`);
      setIsLoading(false);
      alert(status.toString());
    }
    // Reset form after submission
    setFormData({ name: "", email: "", message: "" });
  };
  return {
    formData,
    handleChange,
    handleSubmit,
    isLoading,
  };
};
