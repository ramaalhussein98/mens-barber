import { Box, Container } from "@mui/material";
import React from "react";
import TiltleDescrption from "../../ui/TiltleDescrption";

const AboutUs = () => {
  return (
    <Box>
      <Box className="AboutUsContainer py-8">
        <TiltleDescrption title="About Us" />
        <div className="aboutUsText my-2">
          <p>
            Welcome to Generation Gentleman Barber Shop, where passion meets
            precision! our shop is a testament to our love for the craft.
          </p>
          <p>
            At Generation Gentleman, we believe in more than just a haircut; we
            believe in an experience. Our salon boasts a comforting atmosphere
            where clients can unwind and enjoy a moment of relaxation. With a
            blend of friendliness, fun, and trendiness, we’ve created a space
            where every visit feels like catching up with an old friend while
            leaving with a fresh look.
          </p>
          <p>
            What sets us apart is our dedication to providing not just a
            service, but an experience. From the moment you step through our
            doors, you’ll be greeted by a team of skilled barbers who are
            passionate about their work. We take pride in our attention to
            detail and strive to exceed your expectations with every haircut,
            shave, or grooming service.
          </p>
          <p>
            At Generation Gentleman, we understand that each client is unique,
            and we tailor our services to suit your individual needs. Whether
            you're looking for a classic cut, a modern style, or a traditional
            shave, our talented team is here to bring your vision to life.
          </p>
          <p>
            Come experience the difference at Generation Gentleman. Schedule
            your appointment today and discover why we're more than just a
            barber shop — we're your go-to destination for style, comfort, and
            quality service.
          </p>
        </div>
      </Box>
    </Box>
  );
};

export default AboutUs;
