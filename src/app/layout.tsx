import '../styles/global.css';

interface Props {
  children: React.ReactNode;
}

const RootLayout = ({ children }: Props) => {
  return (
    <html lang="en">
      <body>
        루트 레이아웃
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
