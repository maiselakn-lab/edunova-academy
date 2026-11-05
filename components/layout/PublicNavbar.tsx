import Link from 'next/link';

export default function PublicNavbar() {
  return (
    <header className="bg-brand-navy text-white sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="text-2xl font-serif font-bold text-brand-gold">
              Think EduNova
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 items-center">
            <Link href="/about" className="text-sm font-medium hover:text-brand-gold transition-colors">About</Link>
            <Link href="/courses" className="text-sm font-medium hover:text-brand-gold transition-colors">Courses</Link>
            <Link href="/tutors" className="text-sm font-medium hover:text-brand-gold transition-colors">Tutors</Link>
            <Link href="/research" className="text-sm font-medium hover:text-brand-gold transition-colors">Research</Link>
          </nav>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/login" className="text-sm font-medium hover:text-brand-gold transition-colors">
              Log in
            </Link>
            <Link 
              href="/register" 
              className="bg-brand-gold text-brand-navy px-6 py-2.5 rounded-md text-sm font-bold hover:bg-brand-goldHover transition-colors"
            >
              Get Started
            </Link>
          </div>

        </div>
      </div>
    </header>
  );
}