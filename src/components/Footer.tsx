const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground py-8 border-t-4 border-primary">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h3 className="font-['Bebas_Neue'] text-3xl text-primary mb-2 tracking-wider">
            STANLEY SAFETY
          </h3>
          <p className="text-muted-foreground mb-4">
            Professional Hardware & Safety Solutions
          </p>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Stanley Safety. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
