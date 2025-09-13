import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faCode, faBolt, faHome, faServer, faPuzzlePiece, faPaw, faTerminal
} from '@fortawesome/free-solid-svg-icons';
import { faGithub, faDocker, faMicrosoft } from '@fortawesome/free-brands-svg-icons';

export default function Social() {
  return (
    <div className="container">
      <div className="team-member">

        {/* First row of icons - left aligned with top margin */}
        <div className="columns is-mobile is-flex mt-5 mb-3">
          <div className="column is-narrow">
            <a href="https://ac-programming.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faCode} size="lg" />
            </a>
          </div>
          <div className="column is-narrow">
            <a href="https://ac-electricity.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faBolt} size="lg" />
            </a>
          </div>
          <div className="column is-narrow">
            <a href="https://alexis-carbillet.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faHome} size="lg" />
            </a>
          </div>
          <div className="column is-narrow">
            <a href="https://all-about-cats.uk" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faPaw} size="lg" />
            </a>
          </div>
          <div className="column is-narrow">
            <a href="https://ac-serverhub.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faServer} size="lg" />
            </a>
          </div>
        </div>

        <hr style={{ width: "230px", border: "1px solid gray", margin: "1rem 0" }} />

        {/* Second row of icons - left aligned */}
        <div className="columns is-mobile is-flex">
          <div className="column is-narrow">
            <a href="https://github.com/alexiscarbillet" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGithub} size="lg" />
            </a>
          </div>
          <div className="column is-narrow">
            <a href="https://addons.mozilla.org/fr/firefox/user/18481871/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faPuzzlePiece} size="lg" />
            </a>
          </div>
          <div className="column is-narrow">
            <a href="https://hub.docker.com/u/alexiscarbillet" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faDocker} size="lg" />
            </a>
          </div>
          <div className="column is-narrow">
            <a href="https://marketplace.visualstudio.com/publishers/AlexisCarbillet" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faMicrosoft} size="lg" />
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
