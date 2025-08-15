"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from 'next/navigation'

function handleMenuClick(event) {
  const navbar = document.getElementById('navbar');
  const mobilenav = document.getElementById('mobilenav');
  if (navbar) {
    navbar.classList.toggle('collapse');
  }
  if (mobilenav) {
    mobilenav.classList.toggle('collapsed');
  }
}

const Header = () => {
  const pathname = usePathname();

  return (
    <>
      <div id="wrapper">
        <header>
        </header>
      </div>


    </>
  );
};

export default Header;
