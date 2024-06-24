import React, { useState, useEffect, useRef } from "react";
import "./Category.css";
import { Link, useParams } from "react-router-dom";
import apiUrl from "../../utils/apiUrl";
import CardCat from "../../Components/Cards/CardCat";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-flip";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import './styles.css';
import { Autoplay, EffectFlip, Pagination, Navigation } from "swiper/modules";
import Products from "../../Components/Products/Products";

export default function Category() {
  const param = useParams();
  const [mainCategory, setMainCategory] = useState({});
  const [mainCatChilds, setMainCatChilds] = useState([]);
  const [flagPro, setFlagPro] = useState(false);

  const styleRef = useRef();

  const getCategoryById = () => {
    let obj = {
      gid: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      id: param.id,
      str: "string",
    };
    async function myAppGet() {
      const res = await fetch(
        `${apiUrl}/api/CyCategories/GetItemWChildAndRoot`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(obj),
        }
      )
        .then((res) => {
          console.log(res);
          return res.json();
        })
        .then((result) => {
          // console.log(result)
          setMainCategory(result);
          console.log(mainCategory.childs);
          setMainCatChilds(mainCategory.childs);
          console.log(mainCatChilds);
        });
    }
    myAppGet();
  };
  // console.log(param)
  ////////////////////////////
  const changeId = () => {
    console.log("first");
    styleRef.current.classList.add("category-mySwiperD__hide");
    // setMainCatChilds([])
    // setFlagPro(prev=>!prev)
    setFlagPro(true);
    console.log(flagPro);
  };
  //////////////////////////////
  useEffect(() => {
    if (param.id !== null) {
      getCategoryById();
    }
  }, []);

  return (
    <div className="container category centerc">
      <div className="row row-cols-6 category-row centerr">
        {mainCategory.childs != null &&
          mainCategory.childs.map((item, index) => (
            <>
              <div className="category__cart-div centerc">
                <CardCat imgSrc={item.imageUrl} changeIdProp={changeId} />
                <span>{item.text} </span>
              </div>
            </>
          ))}
      </div>
      {mainCategory.childs != 0 && (
        <div className="row">
          <div className="col-2"></div>
          <div className="col-8">
            <>
              <Swiper
                effect={"flip"}
                grabCursor={true}
                pagination={true}
                navigation={true}
                modules={[EffectFlip, Pagination, Navigation, Autoplay]}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                className="mySwiperD"
                ref={styleRef}
              >
                <SwiperSlide>
                  <img src="../../../images/1716709858-JGyzwBKMcFnB1hwC.webp" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="../../../images/1716709720-4rJpWx6QonnC9gKx.webp" />
                </SwiperSlide>
              </Swiper>
            </>
          </div>
          <div className="col-2"></div>
        </div>
      )}
      {mainCategory.childs == 0 && (
        <div className="row">
          <div className="col-12">
            <Products />
          </div>
        </div>
      )}
      {flagPro && (
        <div className="row">
          <div className="col-12">
            <Products />
          </div>
        </div>
      )}
    </div>
  );
}
