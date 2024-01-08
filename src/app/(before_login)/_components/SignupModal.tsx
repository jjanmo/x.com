'use client';

import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import styles from '@/styles/AuthModal.module.css';
import Icon from '@/components/Icon';

interface SignupInput {
  email: string;
  nickname: string;
  password: string;
  confirmedPassword: string;
}

const LoginModal = () => {
  const router = useRouter();
  const { register, handleSubmit } = useForm<SignupInput>({
    defaultValues: { email: '', nickname: '', password: '', confirmedPassword: '' },
  });

  const handleClose = () => {
    router.back();
  };

  const onSubmit = (data: SignupInput) => {
    console.log(data);
  };

  return (
    <div className={styles.contaienr}>
      <div className={styles.overlay}></div>

      <div className={styles.content}>
        <button onClick={handleClose} className={styles.closeButton}>
          <Icon name="X" size={30} />
        </button>
        <h1>X 가입하기</h1>
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.field}>
            <label>이메일</label>
            <input {...register('email')} />
          </div>

          <div className={styles.field}>
            <label>닉네임</label>
            <input {...register('nickname')} />
          </div>

          <div className={styles.field}>
            <label>비밀번호</label>
            <input {...register('password')} />
          </div>

          <div className={styles.field}>
            <label>비밀번호 확인</label>
            <input {...register('confirmedPassword')} />
          </div>

          <button className={styles.loginButton}>가입하기</button>
        </form>
      </div>
    </div>
  );
};

export default LoginModal;
