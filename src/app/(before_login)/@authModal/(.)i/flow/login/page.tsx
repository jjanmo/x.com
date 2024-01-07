'use client';

import Logo from '@/components/icons/Logo';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/Dialog';
import styles from '@/styles/AuthModal.module.css';
import { useRouter } from 'next/navigation';

export default function Login() {
  const router = useRouter();
  const handleClose = () => {
    router.back();
  };

  return (
    <Dialog>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>X 가입하기</DialogTitle>
          <DialogDescription></DialogDescription>
        </DialogHeader>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae eos sequi nam aut facere quam, iusto
          laboriosam et cumque vitae iste adipisci perspiciatis! Amet unde delectus, ipsum praesentium perspiciatis
          culpa.
        </div>
      </DialogContent>
    </Dialog>
  );
}
