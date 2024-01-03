import type { Metadata } from 'next';
import '../styles/global.css';

export const metadata: Metadata = {
  title: 'X',
  description: '무슨 일이 일어나고 있나요?',
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;
