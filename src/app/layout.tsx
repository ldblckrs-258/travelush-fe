import { ThemeProvider } from '@/components/theme-provider';
import ContextCompose from '@/contexts/compose'; // Import ContextCompose
import { GlobalProvider } from '@/contexts/global-context';
import type { Metadata } from 'next';
import { robotoFlex, robotoMono } from './fonts';
import './globals.css';

export const metadata: Metadata = {
  title: 'Travelush - Travel the world',
  description: 'Helping you book your next trip',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <link rel='icon' href='/png/logo.png' />
      <body
        className={`${robotoFlex.variable} ${robotoMono.variable} antialiased`}
      >
        <ContextCompose
          components={[
            (props) => (
              <ThemeProvider
                attribute='class'
                defaultTheme='system'
                enableSystem
                disableTransitionOnChange
                {...props}
              />
            ),
            GlobalProvider,
          ]}
        >
          {children}
        </ContextCompose>
      </body>
    </html>
  );
}
