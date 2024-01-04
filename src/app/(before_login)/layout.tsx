interface Props {
  children: React.ReactNode;
  authModal: React.ReactNode;
}

const BeforeLoginLayout = ({ children, authModal }: Props) => {
  return (
    <main>
      비포로그인 레이아웃
      {children}
      {authModal}
    </main>
  );
};

export default BeforeLoginLayout;
