interface Props {
  children: React.ReactNode;
  authModal: React.ReactNode;
}

const BeforeLoginLayout = ({ children, authModal }: Props) => {
  return (
    <main>
      {children}
      {authModal}
    </main>
  );
};

export default BeforeLoginLayout;
