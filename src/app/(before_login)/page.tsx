import Logo from '@/components/icons/Logo';
import styles from '@/styles/Main.module.css';
import Link from 'next/link';

const Main = () => {
  return (
    <div className={styles.container}>
      <h1>H1 - Hello World</h1>
      <h2>H2 - Hello World</h2>
      <h3>H3 - Hello World</h3>
      <div className={styles.left}>
        <Logo />
      </div>
      <div className={styles.right}>
        <div className={styles.content}>
          <h1 className={styles.title}>지금 일어나고 있는 일</h1>
          <h2 className={styles.subtitle}>지금 가입하세요.</h2>
          <div className={styles.line}></div>
          <Link href="/i/flow/signup" className={`${styles.button} ${styles.signup}`}>
            계정 만들기
          </Link>
          <div className={styles.loginWrapper}>
            <div className={styles.message}>
              <span>이미 트위터에 가입하셨나요</span>
            </div>
            <Link href="/i/flow/login" className={`${styles.button} ${styles.login}`}>
              로그인
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
