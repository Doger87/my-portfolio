function Footer() {
    return (
      <footer className="bg-gray-900 text-gray-400 text-center py-6 mt-20">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} David Sanchez. All rights reserved.
        </p>
      </footer>
    );
  }
  
  export default Footer;