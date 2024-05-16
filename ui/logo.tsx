import { BookOpenIcon } from 'lucide-react';
import Link from 'next/link';

interface LogoProps {}

export default function Logo({}: LogoProps) {
  return (
    <div>
      <Link href="/" className="flex items-center gap-2">
        <BookOpenIcon size={20} />
        <span className="text-sm font-medium">JSONPlaceholder Blog</span>
      </Link>
    </div>
  );
}
