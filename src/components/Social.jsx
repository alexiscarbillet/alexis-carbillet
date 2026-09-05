import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faCode, faBolt, faHome, faServer, faPaw, faTerminal, faNewspaper
} from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

export default function Social() {
  return (
    <div className="container">
      <div className="team-member">
        <div className="columns is-mobile is-flex">
          <div className="column is-narrow">
            <a href="https://github.com/alexiscarbillet" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGithub} size="lg" />
            </a>
          </div>
          <div className="column is-narrow">
            <a href="https://www.linkedin.com/in/alexis-carbillet/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedin} size="lg" />
            </a>
          </div>
          <div className="column is-narrow">
            <a href="https://killercoda.com/alexis-carbillet" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faTerminal} size="lg" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
