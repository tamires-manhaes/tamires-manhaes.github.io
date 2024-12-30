"use client";
import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import { Textarea } from "@/components/Textarea";
import { useContact } from "./use-contact";
import { Loader2 } from "lucide-react";

export default function Contact() {
  const { handleChange, handleSubmit, formData, isLoading } = useContact();

  return (
    <section id="contact" className="py-8">
      <h2 className="text-3xl font-bold mb-4 dark:text-textColor">
        Contact Me
      </h2>
      <form onSubmit={handleSubmit} className="max-w-md">
        <div className="mb-4">
          <label htmlFor="name" className="block mb-2 dark:text-textColor">
            Name
          </label>
          <Input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="bg-white dark:bg-boxBackground text-gray-900 dark:text-textColor"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block mb-2 dark:text-textColor">
            Email
          </label>
          <Input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="bg-white dark:bg-boxBackground text-gray-900 dark:text-textColor"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block mb-2 dark:text-textColor">
            Message
          </label>
          <Textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            className="bg-white dark:bg-boxBackground text-gray-900 dark:text-textColor"
          />
        </div>
        <Button
          type="submit"
          className="bg-chipBg text-chipText hover:bg-chipBg/90"
          disabled={isLoading}
        >
          {isLoading && <Loader2 className="animate-spin" />}
          Send Message
        </Button>
      </form>
    </section>
  );
}
