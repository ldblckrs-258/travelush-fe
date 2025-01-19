import { Footer } from '@/components/layouts/footer'
import { Header } from '@/components/layouts/header'
import CookieConsentBanner from '../common/cookie-consent'

export default function MainLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className='relative min-h-dvh w-full bg-kimberly-300 dark:bg-[#29233b] dark:text-kimberly-200'>
      <Header className='fixed left-0 top-0 z-10 h-16 bg-white/60 backdrop-blur-xl dark:bg-white/5' />
      <div className='w-full overflow-hidden rounded-b-3xl bg-white bg-cover bg-center dark:bg-[#0e091c]'>
        {children}
      </div>
      <Footer />
      <CookieConsentBanner className='fixed bottom-4 left-0 ml-4 bg-kimberly-100/80 shadow-[0px_0px_12px_4px_rgba(0,_0,_0,_0.1)] backdrop-blur-xl'>
        This website uses cookies to enhance the user experience.
      </CookieConsentBanner>
    </div>
  )
}
