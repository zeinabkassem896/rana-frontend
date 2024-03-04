// import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
// import { useState, useEffect } from "react";
//  import { createRoot } from 'react-dom';


// import styled from "styled-components";
// import axios from "axios";

// import { mobile } from "../responsive";

// const Container = styled.div`
//   width: 100%;
//   height: 100vh;
//   display: flex;
//   position: relative;
//   overflow: hidden;
//   ${mobile({ display: "none" })}
//   margin-top: 20px; /* Add some margin to move the slider down */
// `;

// const Arrow = styled.div`
//   width: 50px;
//   height: 50px;
//   background-color: #fff7f7;
//   border-radius: 50%;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   position: absolute;
//   top: 0;
//   bottom: 0;
//   left: ${(props) => props.direction === "left" && "10px"};
//   right: ${(props) => props.direction === "right" && "10px"};
//   margin: auto;
//   cursor: pointer;
//   opacity: 0.5;
//   z-index: 2;
// `;

// const Wrapper = styled.div`
//   height: 100px;
//   display: flex;
//   transition: all 1.5s ease;
//   transform: translate(${(props) => props.slideIndex * -100}vw);
// `;

// const Slide = styled.div`
//   width: 100vw;
//   height: 100vh;
//   display: flex;
//   align-items: center;
//   background-color: #${(props) => props.bg};
// `;
// // ... (previous code)

// const ImgContainer = styled.div`
//   height: 100%;
//   flex: 1;
//   overflow: hidden;
// `;

// const Image = styled.img`
//   height: 100%; /* Make the image take up the full height of ImgContainer */
//   width: 100%; /* Make the image take up the full width of ImgContainer */
//   object-fit: cover; /* Maintain the image's aspect ratio and cover the entire ImgContainer */
// `;

// // ... (remaining code)

// const InfoContainer = styled.div`
//   flex: 1;
// `;

// const Title = styled.h1`
//   font-size: 70px;
// `;
// const Desc = styled.p`
//   margin: 50px 0;
//   font-size: 20px;
//   font-weight: 500;
//   letter-spacing: 3px;
// `;
// const Button = styled.button`
//   padding: 10px;
//   font-size: 20px;
//   background-color: transparent;
//   cursor: pointer;
// `;

// const Slider = () => {
//   const [slideIndex, setSlideIndex] = useState(0);
//   const [sliderItems, setSliderItems] = useState([]);

//   const fetchCarouselItems = async () => {
//     try {
//       const response = await axios.get("http://localhost:4000/api/carousels");
//       setSliderItems(response.data.data);
//     } catch (error) {
//       console.error("Error fetching carousel items:", error);
//     }
//   };

//   useEffect(() => {
//     fetchCarouselItems();
//   }, []);

//   const handleClick = (direction) => {
//     if (direction === "left") {
//       setSlideIndex(slideIndex > 0 ? slideIndex - 1 : sliderItems.length - 1);
//     } else {
//       setSlideIndex(slideIndex < sliderItems.length - 1 ? slideIndex + 1 : 0);
//     }
//   };

//   return (
//     <Container>
//       <Arrow direction="left" onClick={() => handleClick("left")}>
//         <ArrowLeftOutlined />
//       </Arrow>
//       <Wrapper slideIndex={slideIndex}>
//         {Array.isArray(sliderItems) &&
//           sliderItems.map((item) => (
//             <Slide bg={item.bg} key={item._id}>
//               <ImgContainer>
//               <Image src={`http://localhost:4000/${item.image}`} />

//               </ImgContainer>
//               <InfoContainer>
//                 <Title>{item.title}</Title>
//                 <Desc>{item.subtitle}</Desc>
//                 <Button>Shop now</Button>
//               </InfoContainer>
//             </Slide>
//           ))}
//       </Wrapper>
//       <Arrow direction="right" onClick={() => handleClick("right")}>
//         <ArrowRightOutlined />
//       </Arrow>
//        {/* <img src={`http://localhost:4000/${product.images[0]}`} alt="" /> */}
//     </Container>
//   );
// };

// export default Slider;





 import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { Link } from "react-router-dom";
import { mobile } from "../responsive";

const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
  background-color: #${(props) => props.bg};
`;

const ImgContainer = styled.div`
  width: 100%;
  height: 100%;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const InfoContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: #fff;
`;

const Title = styled.h1`
  font-size: 80px;
  margin-bottom: 20px;
`;

const Desc = styled.p`
  font-size: 50px;
  margin-bottom: 20px;
`;

const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;
  border-size:5px;
`;


;
const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  overflow: hidden;
  ${mobile({ display: "none" })}
`;

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #fff7f7;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;
`;

const Wrapper = styled.div`
  height: 100px;
  display: flex;
  transition: all 1.5s ease;
  transform: translate(${(props) => props.slideIndex * -100}vw);
`;





const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const [sliderItems, setSliderItems] = useState([]);

  useEffect(() => {
    const fetchSliderItems = async () => {
      try {
        const response = await axios.get('http://localhost:4000/api/carousels');
        setSliderItems(response.data.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchSliderItems();
  }, []);

  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : sliderItems.length - 1);
    } else {
      setSlideIndex(slideIndex < sliderItems.length - 1 ? slideIndex + 1 : 0);
    }
  };

  return (
    <Container>
      <Arrow direction="left" onClick={() => handleClick("left")}>
        <ArrowLeftOutlined />
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
        {sliderItems.map((item) => (
          <Slide bg={item.bg} key={item._id}>
            <ImgContainer>
            <Image src={`http://localhost:4000/${item.image}`} />
            </ImgContainer>
            <InfoContainer>
              <Title>{item.title}</Title>
              <Desc>{item.subtitle}</Desc>
              <Link to="/products">
              <Button>Shop now</Button>
              </Link>
            </InfoContainer>
          </Slide>
        ))}
      </Wrapper>
      <Arrow direction="right" onClick={() => handleClick("right")}>
        <ArrowRightOutlined />
      </Arrow>
    </Container>
  );
};

export default Slider;