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
      <div className='mb-8'>
        <h2 className='text-2xl font-semibold mb-4'>{t('Location')}</h2>
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d316.9286880322166!2d29.157489357765364!3d40.91243917705374!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cac40c4badff33%3A0xc63c8d8188f68ce1!2sDAP%20DALGA%20KULE!5e0!3m2!1str!2str!4v1724678474901!5m2!1str!2str" 
          width="600" 
          height="450" 
          style={{ border: 0 }} 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          className='w-full h-80'
        ></iframe>
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
