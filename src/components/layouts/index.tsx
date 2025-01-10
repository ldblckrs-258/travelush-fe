import { Footer } from '@/components/layouts/footer';
import { Header } from '@/components/layouts/header';

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className='relative min-h-dvh w-full bg-kimberly-300 dark:bg-[#171420] dark:text-kimberly-50'>
      <Header className='fixed left-0 top-0 z-10 bg-white/60 backdrop-blur-xl' />
      <div className="w-full overflow-hidden rounded-b-3xl bg-[url('/png/login-bg.avif')] bg-cover bg-center">
        {children}
      </div>
      <Footer />
    </div>
  );
}
