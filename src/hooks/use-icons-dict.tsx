import { JSX } from 'react';
import { FaGithub, FaInstagram, FaLinkedin, FaTiktok } from 'react-icons/fa';

export const useIconsDict = () => {
  const fetchIcon = (name: string, size?: number) => {
    const icons: { [key: string]: JSX.Element } = {
      instagram: <FaInstagram size={size || 24} />,
      github: <FaGithub size={size || 24} />,
      linkedin: <FaLinkedin size={size || 24} />,
      tiktok: <FaTiktok size={size || 24} />,
    };
    return icons[name];
  };

  return {
    fetchIcon,
  };
};
