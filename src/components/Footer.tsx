import { Link } from 'react-router-dom';
import { Instagram, Twitter, Facebook, Youtube, Mail, MapPin, Phone } from 'lucide-react';

const footerLinks = {
  explore: [
    { name: 'Temples', path: '/temples' },
    { name: 'Festivals', path: '/festivals' },
    { name: 'Cuisine', path: '/cuisine' },
    { name: 'Languages', path: '/languages' },
    { name: 'Art & Craft', path: '/explore' },
  ],
  regions: [
    { name: 'Malwa', path: '/explore' },
    { name: 'Bundelkhand', path: '/explore' },
    { name: 'Mahakoshal', path: '/explore' },
    { name: 'Chambal', path: '/explore' },
    { name: 'Nimar', path: '/explore' },
  ],
  resources: [
    { name: 'Travel Guide', path: '/explore' },
    { name: 'Photo Gallery', path: '/explore' },
    { name: 'Events Calendar', path: '/festivals' },
    { name: 'Contact Us', path: '/explore' },
  ],
};

const socialLinks = [
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Youtube, href: '#', label: 'Youtube' },
];

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer */}
      <div className="container mx-auto px-4 md:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-primary-foreground/10 flex items-center justify-center border border-primary-foreground/20">
                <span className="text-primary-foreground font-serif text-xl font-bold">म</span>
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-2xl font-semibold">Madhya Pradesh</span>
                <span className="font-handwritten text-xl opacity-80">Culture</span>
              </div>
            </Link>
            <p className="text-primary-foreground/70 font-sans mb-6 max-w-sm leading-relaxed">
              Discover the Heart of India, where ancient temples showcase exquisite artistry 
              and wildlife roams free in pristine forests.
            </p>
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-primary-foreground/70">
                <MapPin size={18} />
                <span className="text-sm">Bhopal, Madhya Pradesh, India</span>
              </div>
              <div className="flex items-center gap-3 text-primary-foreground/70">
                <Mail size={18} />
                <span className="text-sm">info@mpculture.in</span>
              </div>
              <div className="flex items-center gap-3 text-primary-foreground/70">
                <Phone size={18} />
                <span className="text-sm">+91 1234 567890</span>
              </div>
            </div>
          </div>

          {/* Explore Links */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-6">Explore</h4>
            <ul className="space-y-3">
              {footerLinks.explore.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm font-sans"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Regions Links */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-6">Regions</h4>
            <ul className="space-y-3">
              {footerLinks.regions.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm font-sans"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-6">Resources</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm font-sans"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container mx-auto px-4 md:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-primary-foreground/60 text-sm font-sans">
              © 2024 Madhya Pradesh Culture. All rights reserved.
            </p>
            
            {/* Social Links */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
