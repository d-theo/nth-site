import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import clsx from "clsx";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

export function Header() {
  const [selected, setSelected] = useState<string>("gallery");
  const location = useLocation();
  const isBio = clsx(selected === "/bio" && "selected");
  const isGallerie = clsx(selected === "/gallery" && "selected");
  const isContact = clsx(selected === "/contact" && "selected");

  useEffect(() => {
    console.log(location.pathname);
    setSelected(location.pathname);
  }, [location.pathname]);

  return (
    <div className="app-header">
      <div className="header-title">Nicole Thabaraud</div>
      <div className="header-nav">
        <ul className="navigation">
          <li>
            <Link className={isBio} to="/bio">
              Bio
            </Link>
          </li>
          <li>
            <Link className={isGallerie} to="/gallery">
              Gallerie
            </Link>
          </li>
          <li>
            <Link className={isContact} to="/contact">
              Contact
            </Link>
          </li>
        </ul>
      </div>
      <div className="header-actions">
        <ul className="actions">
          <li>
            <FontAwesomeIcon icon={faInstagram} size="1x" />
          </li>
        </ul>
      </div>
    </div>
  );
}
