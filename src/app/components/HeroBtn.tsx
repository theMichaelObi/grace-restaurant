import React from 'react';
import { useRouter, usePathname } from 'next/navigation';
import './heroBtn.css';

export default function HeroBtn({ name, target }: { name: string, target: string }) {
  const pathname = usePathname();
  const router = useRouter();

  //goes to menu section and reservation section
  const handleScrollTo = (section: string) => {
    let header: HTMLElement = document.querySelector('#header')!;
    let offset = header.offsetHeight;
    let targetEl: HTMLElement = document.querySelector('#' + section)!;
    if (pathname === '/') {
      let elementPosition = targetEl.offsetTop;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth',
      });
    } else {
      router.push(`/#${section}`);
    }
  };

  return (
    <a onClick={() => handleScrollTo(target)} className={`hero-btn animated fadeInUp scrollto ${name.includes('reserve') ? 'ms-4' : undefined}`}>
      {name}
    </a>
  );
};
