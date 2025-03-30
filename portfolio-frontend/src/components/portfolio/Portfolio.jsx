import { Element } from "react-scroll";
import propTypes from "prop-types";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import { EffectCoverflow, Autoplay, Mousewheel } from "swiper/modules";

import "./Portfolio.scss";
import { Loader, Modal } from "../../components";

import { urlFor } from "../../Client";
import { useEffect, useState } from "react";

const Portfolio = ({ projects }) => {
  const [openModal, setOpenModal] = useState(false);
  const [projectIdentifier, setProjectIdentifier] = useState("");

  useEffect(() => {
    if (openModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [openModal]);

  return (
    <Element name="Portfolio">
      <section className="section portfolio wrapper ">
        <h3 className="section-title">Portfolio</h3>

        <div className="portfolio__carousel">
          {projects && projects.length > 0 ? (
            <Swiper
              effect="coverflow"
              centeredSlides={true}
              slidesPerView={"auto"}
              coverflowEffect={{
                rotate: 0,
                stretch: 0,
                depth: 120,
                modifier: 2.5,
              }}
              modules={[EffectCoverflow, Navigation, Pagination, Autoplay, Mousewheel]}
              pagination={{ clickable: true }}
              scrollbar={{ draggable: true }}
              mousewheel={{ forceToAxis: true }}>
              {projects &&
                projects.length > 0 &&
                projects.map((project, index) => (
                  <SwiperSlide key={index}>
                    <img
                      src={urlFor(project.image).url()}
                      alt="project-banner"
                      loading="lazy"
                      onClick={() => {
                        setProjectIdentifier(project._id);
                        setOpenModal(true);
                      }}
                    />
                  </SwiperSlide>
                ))}
            </Swiper>
          ) : (
            <Loader message={"Loading projects"} />
          )}
          {openModal && (
            <Modal
              openModal={openModal}
              setOpenModal={setOpenModal}
              projectIdentifier={projectIdentifier}
              projects={projects}
            />
          )}
        </div>
      </section>
    </Element>
  );
};

Portfolio.propTypes = {
  projects: propTypes.array,
};

export default Portfolio;
