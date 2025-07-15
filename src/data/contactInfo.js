import { Mail, Phone, MapPin } from 'lucide-react';

export const contactInfo = [
  {
    icon: <Mail className="w-6 h-6" />,
    label: 'Email',
    value: 'javierperezdeveloper@gmail.com',
    href: 'mailto:javierperezdeveloper@gmail.com',
  },
  {
    icon: <Phone className="w-6 h-6" />,
    label: 'Phone',
    value: '+57 315 9606370',
    href: 'https://wa.me/3159606370',
  },
  {
    icon: <MapPin className="w-6 h-6" />,
    label: 'Location',
    value: 'Barranquilla, Colombia',
    href: null,
  },
];
