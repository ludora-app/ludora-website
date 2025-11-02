import { useRouter } from 'next/navigation';

export const useScrollToSection = () => {
  const router = useRouter();

  const scrollToSection = ({ id, path }: { path: string; id: string }) => {
    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else if (router) {
      router.push(`${path}/#${id}`);
    }
  };

  return scrollToSection;
};
