'use client';

import { useRouter } from 'next/navigation';
import Main from '@/app/(before_login)/_components/Main';

const Login = () => {
  const router = useRouter();
  router.replace('/i/flow/login');

  return <Main />;
};

export default Login;
