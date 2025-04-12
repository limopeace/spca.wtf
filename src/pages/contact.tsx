import { useEffect } from 'react';
import { useRouter } from 'next/router';

const ContactRedirect = () => {
  const router = useRouter();

  useEffect(() => {
    router.replace('/about');
  }, [router]);

  return null;
};

export default ContactRedirect; 