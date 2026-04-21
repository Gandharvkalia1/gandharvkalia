export default function Footer() {
  return (
    <footer className="w-full py-10 px-8 bg-surface-container-low border-t border-outline-variant/10">
      <div className="flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto gap-8">
        <div className="text-lg font-black text-on-background font-headline">
          Gandharv Kalia
        </div>
        
        <p className="font-body text-sm text-on-surface-variant">
          © {new Date().getFullYear()} Gandharv Kalia. Built with precision.
        </p>
        
        <div className="flex gap-8">
          {['GitHub', 'LinkedIn', 'Email'].map((link) => (
            <a 
              key={link}
              href="#" 
              className="text-on-surface-variant hover:text-primary underline decoration-2 underline-offset-4 transition-all text-sm font-body font-medium"
            >
              {link}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
