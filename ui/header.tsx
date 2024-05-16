import Logo from './logo';
import Navbar from './navbar';

export default function Header() {
  return (
    <header className="py-4 border-b">
      <div className="mx-6 flex items-center justify-between">
        <Logo />
        <Navbar />
      </div>
    </header>
  );
}
