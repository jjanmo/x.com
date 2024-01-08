'use client';

import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import styles from '@/styles/AuthModal.module.css';
import Icon from '@/components/Icon';

interface LoginInput {
  email: string;
  password: string;
}

const LoginModal = () => {
  const router = useRouter();
  const { register, handleSubmit } = useForm<LoginInput>({ defaultValues: { email: '', password: '' } });

  const handleClose = () => {
    router.back();
  };

  const onSubmit = (data: LoginInput) => {
    console.log(data);
  };

  return (
    <div className={styles.contaienr}>
      <div className={styles.overlay}></div>

      <div className={styles.content}>
        <button onClick={handleClose} className={styles.closeButton}>
          <Icon name="X" size={30} />
        </button>
        <h1>X 로그인하기</h1>
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.field}>
            <label>이메일</label>
            <input {...register('email')} />
          </div>

          <div className={styles.field}>
            <label>비밀번호</label>
            <input {...register('password')} />
          </div>

          <button className={styles.loginButton}>로그인</button>
        </form>
      </div>
    </div>
  );
};

export default LoginModal;
