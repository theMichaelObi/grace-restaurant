import React from 'react';
import { useRouter, usePathname } from 'next/navigation';
import './reserveBtn.css';

export default function ReserveBtn({ name }: { name: string }) {
  const pathname = usePathname();
  const router = useRouter();

  const handleScrollTo = (section: string) => {

    //goes to reservation section
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
  }

  return (
    <a className="reserve-btn scrollto d-none d-lg-flex" onClick={() => handleScrollTo('reservation')}>{name}</a>
  );
};