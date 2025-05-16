import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import "../../../assets/css/instagram.css";
import { Img1, Img2, Img3, Img4 } from "../../../assets/Photos";
import { Container } from "@mui/material";
const Instagram = () => {
  const Images = [
    { id: 1, img: Img1, url: "" },
    { id: 2, img: Img2, url: "" },
    { id: 3, img: Img3, url: "" },
    { id: 4, img: Img4, url: "" },
  ];
  return (
    <Container>
      {" "}
      <p className="title_salon">Stay Connected</p>
      <div className="insatgram_account_div mb-3">
        <InstagramIcon sx={{ marginRight: "10px", fontSize: "18px" }} />
        <span>@generationgentlmes</span>
      </div>
      <div className="instaImgContainer">
        {Images?.map((item, index) => (
          <div key={index} className="instaImgDiv">
            <a href={item.url}>
              <img src={item.img} className="instaImg" />
            </a>
          </div>
        ))}
      </div>
      <a href="" className="follow_us_btn">
        Follow Us
      </a>
    </Container>
  );
};

export default Instagram;
