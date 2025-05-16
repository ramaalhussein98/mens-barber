import React, { useEffect, useState } from "react";
import { Box, Container, Grid, Paper, Modal } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";
import * as Photos from "../../../assets/Photos";
import "../../../assets/css/gallery.css";
import myAxios from "../../../api/myAxios";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

// const images = [
//   "https://picsum.photos/200/300?image=1050",
//   "https://picsum.photos/400/400?image=1039",
//   "https://picsum.photos/400/400?image=1080",
//   "https://picsum.photos/200/200?image=997",
//   "https://picsum.photos/500/400?image=287",
//   "https://picsum.photos/400/500?image=955",
//   "https://picsum.photos/200/300?image=916",
//   "https://picsum.photos/300/300?image=110",
//   "https://picsum.photos/300/300?image=206",
// ];
const imagesHeight = [
  "350px",
  "300px",
  "250px",
  "300px",
  "300px",
  "350px",
  "400px",
  "350px",
];
const Gallery = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [openModal, setOpenModal] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);
  const [images, setImages] = useState();
  useEffect(() => {
    const getServices = async () => {
      const res = await myAxios.get("image");
      console.log(res);
      if (res.status === 200) {
        setImages(res.data?.results);
      }
    };
    getServices();
  }, []);
  const handleImageClick = (index) => {
    setOpenModal(true);
    setSelectedImageIndex(index);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    setSelectedImageIndex(null);
  };

  const handleTouchStart = (index) => {
    setHoveredIndex(index);
  };

  const handleTouchEnd = () => {
    setHoveredIndex(null);
  };
  return (
    <div>
      <p className="title_salon my-2">Gallery</p>
      <Container>
        {images && (
          <ResponsiveMasonry
            columnsCountBreakPoints={{ 350: 1, 400: 2, 900: 4 }}
          >
            <Masonry columnsCount={2} gutter="1rem">
              {images?.map((image, index) => (
                <div
                  key={index}
                  className="relative group"
                  onClick={() => handleImageClick(index)}
                  style={{
                    height: imagesHeight[index],
                  }}
                >
                  <img
                    src={import.meta.env.VITE_API_URL + image?.image}
                    alt=""
                    height={imagesHeight[index]}
                    className="absolute w-full h-full z-[1]"
                    style={{
                      width: "100%",
                      display: "block",
                      objectFit: "cover",
                    }}
                  />
                  <div className="flex justify-center items-center absolute inset-0 bg-[#49331fb2] text-white w-full h-full z-[100] opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                    <AddIcon sx={{ color: "#fff", fontSize: "30px" }} />
                  </div>
                </div>
              ))}
            </Masonry>
          </ResponsiveMasonry>
        )}
      </Container>
      <Modal open={openModal} onClose={handleCloseModal}>
        <div className="modalBackdrop" onClick={handleCloseModal}>
          <Box
            sx={{
              position: "absolute",
              width: { xs: "300px", md: "400px" },
              height: "500px",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
          >
            <CloseIcon
              sx={{
                color: "#fff",
                cursor: "pointer",
                fontSize: "40px",
                position: "absolute",
                right: "-40px",
                top: "0px",
              }}
              onClick={handleCloseModal}
            />

            <Box sx={{ width: "100%", height: "100%" }}>
              {selectedImageIndex !== null && (
                <img
                  src={
                    import.meta.env.VITE_API_URL +
                    images[selectedImageIndex].image
                  }
                  alt={images[selectedImageIndex].alt}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              )}
            </Box>
          </Box>
        </div>
      </Modal>
    </div>
  );
};

export default Gallery;
