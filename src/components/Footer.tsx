const Footer = () => {
  return (
    <footer className="py-8 border-t border-border">
      <div className="section-container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            cheers, <br />{/* {' '} */}
            <span className="text-foreground font-medium">Alfi Aldo</span>
          </p>
          <p className="text-xs text-muted-foreground">
            Built with <s>Next.js and Tailwind CSS.</s> <br /> vibe coding &amp; coffee ☕
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
