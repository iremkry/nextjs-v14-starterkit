import { useTranslations } from 'next-intl';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

export default function Contact() {
  const t = useTranslations('');
  return (
    <div className='px-8 py-16 text-center text-white bg-gray-800'>
      <h1 className='text-3xl font-bold mb-4'>{t('Contact')}</h1>
      <div className='text-lg mb-6'>
        <p className='mb-2'>{t('Address')}</p>
        <p className='mb-2'>{t('Phone')}</p>
        <p>{t('Email')}</p>
      </div>
      <div className='mt-8'>
        <h2 className='text-2xl font-semibold mb-4'>{t('Follow')}</h2>
        <div className='flex justify-center gap-4'>
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
  );
}
