import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

const Footer = () => {
  return (
    <footer className="w-full border-t bg-background py-4 text-center text-sm text-muted-foreground">
      <div className="container mx-auto flex flex-col items-center justify-between space-y-2 md:flex-row md:space-y-0">
        <span>&copy; {new Date().getFullYear()} Acme Inc. All rights reserved.</span>
        <div className="flex space-x-4">
          <Link to="/privacy-policy" className={cn("hover:text-foreground")}>
            Privacy Policy
          </Link>
          <Link to="/terms-of-service" className={cn("hover:text-foreground")}>
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;