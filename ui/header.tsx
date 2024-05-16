import { Suspense } from 'react';
import Logo from './logo';
import Navbar from './navbar';
import { ThemeToggle } from './theme-toggle';

export default function Header() {
  return (
    <header className="py-4 border-b">
      <div className="mx-6 flex items-center justify-between">
        <Logo />
        <div>
          <Suspense fallback={<div>Loading theme toggle...</div>}>
            <ThemeToggle />
          </Suspense>
          <Navbar />
        </div>
      </div>
    </header>
  );
}
