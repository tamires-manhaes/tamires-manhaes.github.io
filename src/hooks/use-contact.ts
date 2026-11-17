import { useState } from 'react';
import emailjs from 'emailjs-com';
import { envs } from '@/configs/envs';
import { formatDate } from '@/utils/formatDate';

type ContactForm = {
  name: string;
  email: string;
  topic: string;
  message: string;
};

export function useContact(
  onSuccess?: () => void,
  onError?: (message: string) => void,
) {
  const today = Date.now();
  const [status, setStatus] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState<ContactForm>({
    name: '',
    email: '',
    topic: 'role',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('');
    setIsLoading(true);

    try {
      const result = await emailjs.send(
        envs.emailjs.serviceId || '',
        envs.emailjs.templateId || '',
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
          date: formatDate(today),
        },
        envs.emailjs.publicId || '',
      );

      if (result.status === 200) {
        const ok = 'Message sent successfully!';
        setStatus(ok);
        setFormData({ name: '', email: '', topic: 'role', message: '' });
        onSuccess?.();
      } else {
        const msg = 'Something went wrong. Please try again.';
        setStatus(msg);
        onError?.(msg);
      }
    } catch (error) {
      const msg = `An error occurred. Please try again: ${error}`;
      setStatus(msg);
      onError?.(msg);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    formData,
    handleChange,
    handleSubmit,
    isLoading,
    status,
  };
}
