import { Footer } from '@/components/layouts/footer';
import { Header } from '@/components/layouts/header';
import CookieConsentBanner from '../common/cookie-consent';

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className='relative min-h-dvh w-full bg-kimberly-300 dark:bg-[#171420] dark:text-kimberly-50'>
      <Header className='fixed left-0 top-0 z-10 bg-white/60 backdrop-blur-xl' />
      <div className='w-full overflow-hidden rounded-b-3xl bg-white bg-cover bg-center'>
        {children}
      </div>
      <Footer />
      <CookieConsentBanner className='fixed bottom-4 left-0 ml-4 bg-kimberly-100/80 shadow-[0px_0px_12px_4px_rgba(0,_0,_0,_0.1)] backdrop-blur-xl'>
        This website uses cookies to enhance the user experience.
      </CookieConsentBanner>
    </div>
  );
}
