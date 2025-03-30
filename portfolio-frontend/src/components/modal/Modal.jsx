import { useState, useEffect } from "react";
import propTypes from "prop-types";

import { RxExternalLink } from "react-icons/rx";
import { IoLogoGithub } from "react-icons/io";
import { RiCloseLine } from "react-icons/ri";

import client from "../../Client";
import { urlFor } from "../../Client";
import { getSpecificProject } from "../../util/FetchPort";
import Loader from "../loader/Loader";
import "./modal.scss";

const Modal = ({ projectIdentifier, openModal, setOpenModal }) => {
  const [modalData, setModalData] = useState([]);
  const [error, setError] = useState(false);
  const id = projectIdentifier;

  useEffect(() => {
    if (openModal) {
      document.body.style.overflow = "hidden";

      const query = getSpecificProject(id);

      client
        .fetch(query)
        .then((res) => {
          if (res.length === 0) {
            setError(true); // Handle empty response
          } else {
            setModalData(res);
            setError(false);
          }
        })
        .catch((err) => {
          console.log("Error fetching data", err);
          setError(true); // Handle fetch error
        });
    }

    return () => {
      document.body.style.overflow = "auto";
      setModalData([]);
      setError(false);
    };
  }, [openModal, id]);

  return (
    <div className="modal">
      <div className="modal__container">
        {error ? (
          <div className="modal__error">
            <p>Failed to load project details. Please try again later.</p>
            <button onClick={() => setOpenModal(false)}>Close</button>
          </div>
        ) : modalData.length > 0 ? (
          modalData.map((data, index) => (
            <div className="modal__content" key={index}>
              <div className="modal__content--close">
                <RiCloseLine onClick={() => setOpenModal(false)} />
              </div>
              <div className="modal__content--img">
                <img src={urlFor(data.image)} alt="project-banner" />
              </div>
              <div className="modal__content--description">
                <h2 className="modal__content--description__title">{data.title}</h2>
                <p className="modal__content--description__text">{data.description}</p>

                <div className="modal__content--description__btns">
                  <a
                    className="modal__content--description__btns--link"
                    href={data.live}
                    target="_blank"
                    rel="noopener noreferrer">
                    <RxExternalLink /> <span>View Live</span>
                  </a>
                  <a
                    className="modal__content--description__btns--link"
                    href={data.github}
                    target="_blank"
                    rel="noopener noreferrer">
                    <IoLogoGithub /> <span>GitHub</span>
                  </a>
                </div>
              </div>
            </div>
          ))
        ) : (
          <Loader message={"Loading project details ..."} />
        )}
      </div>
    </div>
  );
};

Modal.propTypes = {
  projectIdentifier: propTypes.string,
  openModal: propTypes.bool,
  setOpenModal: propTypes.func,
};

export default Modal;
