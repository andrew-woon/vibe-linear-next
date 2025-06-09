
import { Github, Twitter, MessageCircle, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const footerLinks = {
  Product: [
    { name: "Features", href: "#features" },
    { name: "Pricing", href: "#pricing" },
    { name: "Documentation", href: "#docs" },
    { name: "API Reference", href: "#api" }
  ],
  Resources: [
    { name: "Blog", href: "#blog" },
    { name: "Tutorials", href: "#tutorials" },
    { name: "Examples", href: "#examples" },
    { name: "Community", href: "#community" }
  ],
  Company: [
    { name: "About", href: "#about" },
    { name: "Careers", href: "#careers" },
    { name: "Contact", href: "#contact" },
    { name: "Privacy", href: "#privacy" }
  ]
};

const Footer = () => {
  return (
    <footer className="bg-card/50 backdrop-blur-sm border-t border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main footer content */}
        <div className="py-16">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Brand column */}
            <div className="lg:col-span-1">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-4">
                VibeCode
              </h3>
              <p className="text-muted-foreground mb-6 max-w-sm">
                Transform your development workflow with AI-powered vibe coding. Build faster, think bigger, ship products that matter.
              </p>
              <div className="flex space-x-4">
                <Button variant="ghost" size="sm" className="p-2 hover:bg-purple-500/10">
                  <Github className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="sm" className="p-2 hover:bg-blue-500/10">
                  <Twitter className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="sm" className="p-2 hover:bg-indigo-500/10">
                  <MessageCircle className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="sm" className="p-2 hover:bg-green-500/10">
                  <Mail className="h-4 w-4" />
                </Button>
              </div>
            </div>
            
            {/* Links columns */}
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category}>
                <h4 className="font-semibold mb-4">{category}</h4>
                <ul className="space-y-2">
                  {links.map((link) => (
                    <li key={link.name}>
                      <a 
                        href={link.href} 
                        className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        
        {/* Newsletter section */}
        <div className="py-8 border-t border-border/50">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
            <div>
              <h4 className="font-semibold mb-2">Stay updated</h4>
              <p className="text-sm text-muted-foreground">
                Get the latest updates on AI development tools and techniques.
              </p>
            </div>
            <div className="flex gap-2 w-full lg:w-auto">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-1 lg:w-64 px-3 py-2 bg-background border border-border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-purple-500/50"
              />
              <Button className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
        
        {/* Bottom section */}
        <div className="py-6 border-t border-border/50">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © 2024 VibeCode. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#terms" className="text-muted-foreground hover:text-foreground transition-colors">
                Terms of Service
              </a>
              <a href="#privacy" className="text-muted-foreground hover:text-foreground transition-colors">
                Privacy Policy
              </a>
              <a href="#cookies" className="text-muted-foreground hover:text-foreground transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
