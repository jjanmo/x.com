'use client';

import styles from '@/styles/AuthModal.module.css';
import { useRouter } from 'next/navigation';

export default function AuthModal() {
  const router = useRouter();
  const handleClose = () => {
    router.back();
  };

  return (
    <div className={styles.container}>
      <button onClick={handleClose} className={styles.closeButton}>
        X
      </button>
      <h1>로그인 모달</h1>
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae eos sequi nam aut facere quam, iusto
        laboriosam et cumque vitae iste adipisci perspiciatis! Amet unde delectus, ipsum praesentium perspiciatis culpa.
      </div>
    </div>
  );
}
