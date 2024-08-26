import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import { useTranslations } from 'next-intl'


export const Footer = () => {
  const t = useTranslations('')
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-4 flex flex-col items-center md:flex-row md:justify-between">
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-semibold mb-2">
            {t('Contact_Us')}  
          </h2>
          <p className="mb-2">
            {t('Address')}
          </p>
          <p className="mb-2">
            {t('Phone')}
          </p>
          <p>
            {t('Email')}
          </p>
        </div>
        <div className="mt-4 md:mt-0">
          <h2 className="text-2xl font-semibold mb-2 text-center">{t('Follow')}</h2>
          <div className="flex justify-center gap-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebookF className="text-2xl hover:text-blue-500" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="text-2xl hover:text-blue-400" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="text-2xl hover:text-pink-500" />
            </a>
          </div>
        </div>
      </div>
      <div className="text-center mt-4 border-t border-gray-700 pt-4">
        <p className="text-sm">&copy; {new Date().getFullYear()} {t('Rights')}</p>
      </div>
    </footer>
  );
};
