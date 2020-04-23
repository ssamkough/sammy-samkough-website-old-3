import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithubAlt,
  faLinkedinIn,
  faTwitter,
  faInstagram,
  faYoutube,
  faSoundcloud,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className="footer">
      <ul className="contact">
        <li className="email">
          <a href="mailto:sammysamkough@hotmail.com">
            <FontAwesomeIcon icon={faEnvelope} size="lg" />
          </a>
        </li>
        <li className="handle">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/ssamkough"
          >
            <FontAwesomeIcon icon={faGithubAlt} size="lg" />
          </a>
        </li>
        <li className="handle">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://linkedin.com/in/ssamkough"
          >
            <FontAwesomeIcon icon={faLinkedinIn} size="lg" />
          </a>
        </li>
        <li className="handle">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.youtube.com/channel/UCtQb99m0ea57g8gYQcNuidA"
          >
            <FontAwesomeIcon icon={faYoutube} size="lg" />
          </a>
        </li>
        <li className="handle">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://soundcloud.com/ssamkough"
          >
            <FontAwesomeIcon icon={faSoundcloud} size="lg" />
          </a>
        </li>
        <li className="handle">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://instagram.com/samkotos"
          >
            <FontAwesomeIcon icon={faInstagram} size="lg" />
          </a>
        </li>
        <li className="handle">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://twitter.com/ssamkough"
          >
            <FontAwesomeIcon icon={faTwitter} size="lg" />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
