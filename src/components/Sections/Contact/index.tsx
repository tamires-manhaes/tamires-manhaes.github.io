"use client";
import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import { Textarea } from "@/components/Textarea";
import { useContact } from "@/hooks/use-contact";
import { Loader2 } from "lucide-react";
import content from '@/contents/AboutMeContent.json'
import { useIconsDict } from "@/hooks/use-icons-dict";
import { Badge } from "@/components/Badge";

export default function Contact() {
  const { handleChange, handleSubmit, formData, isLoading } = useContact();
  const {fetchIcon} = useIconsDict();
  return (
    <section id="contact" className="py-8 flex justify-center content-center">
      <div className="w-[60vw]">
       <div className="mx-auto">
        <h2 className="text-2xl text-center placeholder:font-bold mb-4 dark:text-textColor">
          <Badge fontSize="20px">Get in touch</Badge>
        </h2>
        <span className="block text-lg text-center mx-12">
          {content.contactMe.descripton}
        </span>
      </div>
        <form onSubmit={handleSubmit} className="max-w-md mx-auto py-12">
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
            className="bg-grey-300 text-chipText hover:bg-chipBg/90"
            disabled={isLoading}
          >
            {isLoading && <Loader2 className="animate-spin" />}
            Send Message
          </Button>
        </form>
        <div className="my-4 flex flex-col content-center justify-center">
          <span className="text-center">You may also find me on these platforms!</span>
           <ul className="flex justify-center text-center mt-2">
          {content.contactMe.socialMedia.map((social) => {
            return (
              <li key={social.name} className="mx-2">
                <a href={social.url} target="_blank">
                  {fetchIcon(social.name)}
                </a>
              </li>
            );
          })}
        </ul>
        </div>
      </div>
    </section>
  );
}
