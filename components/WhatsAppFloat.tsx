import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

export default function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/919971022555"
      target="_blank"
      rel="noopener noreferrer"
      className="wa-float"
      title="Chat on WhatsApp"
      aria-label="Chat on WhatsApp"
    >
      <FontAwesomeIcon icon={faWhatsapp} />
    </a>
  );
}
