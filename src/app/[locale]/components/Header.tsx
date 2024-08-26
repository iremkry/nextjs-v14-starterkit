'use client'
import { Link } from '@/src/navigation'
import { useTranslations } from 'next-intl'
import { FC } from 'react'
import LangSwitcher from './LangSwitcher'
import ThemeSwitch from './ThemeSwitch'
import icon from '../../favicon.ico'
interface Props {
  locale: string
}
export const Header: FC<Props> = ({ locale }) => {
  const t = useTranslations('')
  return (
    <div className='mx-auto flex max-w-screen-2xl flex-row items-center justify-between p-5'>
      <Link lang={locale} href='/'>
        <div className='flex flex-row items-center'>
          <div className='mb-2 h-14 w-14'>
            <img src='/favicon.ico' alt='logo' />
          </div>
          <strong className='mx-2 select-none'>Emre Şerit</strong>
        </div>
      </Link>
      <div className='flex flex-row items-center gap-3'>
        <nav className='mr-10 inline-flex gap-5'>
          <Link lang={locale} href={`/about`}>
            {t('About')}
          </Link>
          <Link lang={locale} href={`/products`}>
            {t('Products')}
          </Link>
          <Link lang={locale} href={`/contact`}>
            {t('Contact')}
          </Link>
          {/* <a href=''>{t('Other')}</a> */}
        </nav>
        <ThemeSwitch />
        <LangSwitcher />
      </div>
    </div>
  )
}
