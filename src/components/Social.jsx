import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faCode, faBolt, faHome, faServer, faPaw, faTerminal, faNewspaper,
  faStore
} from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

export default function Social() {
  return (
    <div className="container">
      <div className="team-member">

        {/* First row of icons - left aligned with top margin */}
        <div className="columns is-mobile is-flex mt-5 mb-3">
          <div className="column is-narrow">
            <a href="https://coding.alexis-carbillet.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faCode} size="lg" />
            </a>
          </div>
          <div className="column is-narrow">
            <a href="https://electricity.alexis-carbillet.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faBolt} size="lg" />
            </a>
          </div>
          <div className="column is-narrow">
            <a href="https://alexis-carbillet.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faHome} size="lg" />
            </a>
          </div>
          <div className="column is-narrow">
            <a href="https://cats.alexis-carbillet.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faPaw} size="lg" />
            </a>
          </div>
          <div className="column is-narrow">
            <a href="https://hardware.alexis-carbillet.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faServer} size="lg" />
            </a>
          </div>
          <div className="column is-narrow">
            <a href="https://blog.alexis-carbillet.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faNewspaper} size="lg" />
            </a>
          </div>
        </div>

        <hr style={{ width: "280px", border: "1px solid gray", margin: "1rem 0" }} />

        {/* Second row of icons - left aligned */}
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
          <div className="column is-narrow">
            <a href="https://shop.alexis-carbillet.com/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faStore} size="lg" />
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
