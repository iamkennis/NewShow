import Link from "next/link";
import React, { useState } from "react";
import {
  FaTimes,
  FaGripLines,
  FaCheckCircle,
  FaToggleOn,
  FaPlay,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import { BsHeadphones, BsXDiamond } from "react-icons/bs";
import {
  AiOutlineUser,
  AiOutlineSearch,
  AiOutlineShopping,
  AiOutlineHeart,
  AiOutlineCar,
  AiOutlineWallet,
} from "react-icons/ai";
import Image from "next/image";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css/skyblue";

export const useToggle = (initialState = false) => {
  const [state, setState] = useState(initialState);

  const toggle = () => {
    setState((prev) => !prev);
  };
  return [state, toggle];
};

export const featuresdata = [
  {
    id: 1,
    img: "/images/shoe1.svg",
	color1: "#FFB2B2",
    color2: "#FF3C78",
  },
  {
    id: 2,
    img: "/images/shoe2.svg",
    color1: "#8AA8F8",
    color2: "#315BFF",
  },
  {
    id: 3,
    img: "/images/shoe3.svg",
    color1: "#FFB2B2",
    color2: "#FF3C78",
  },
  {
    id: 4,
    img: "/images/shoe4.svg",
    color1: "#8AA8F8",
    color2: "#315BFF",
  },
];

export const newarrdata = [
  {
    img: "/images/shoe6.svg",
    color1: "#FFB2B2",
    color2: "#FF3C78",
    no: "1",
  },
  ,
  {
    img: "/images/shoe6.svg",
    color1: "#8AA8F8",
    color2: "#315BFF",
    no: "2",
  },
  {
    img: "/images/shoe7.svg",
	color1: "#FFB2B2",
    color2: "#FF3C78",
    no: "3",
  },
  {
    img: "/images/shoe8.svg",
    color1: "#8AA8F8",
    color2: "#315BFF",
    no: "4",
  },
  {
    img: "/images/shoe6.svg",
    color1: "#FFB2B2",
    color2: "#FF3C78",
    no: "5",
  },
  ,
  {
    img: "/images/shoe8.svg",
	color1: "#8AA8F8",
    color2: "#315BFF",
    no: "6",
  },
];

export const collectiondata = [
  {
    img: "/images/shoe6.svg",
    title: "Sneakers Collection",
    subtitle: "140 products",
    color: "#315BFF",
  },
  {
    img: "/images/ftball.svg",
    title: "Football Collection",
    subtitle: "80 products",
    color: "#FE7831",
  },
  {
    img: "/images/vlley.svg",
    title: "Volleyball Collection",
    subtitle: "120 products",
    color: "#FF3C78",
  },
];

export default function HomePage() {
  const [isVisible, toggle]: any = useToggle();

  return (
    <>
      <div className="bg-[#F5F5F5] h-full w-full px-4 md:px-20 lg:px-24 py-8">
        <nav className="flex flex-row items-center justify-between">
          <div>
            <Image width="50%" height="40%" src="/images/logo.svg" alt="logo" />
          </div>
          <div className="space-x-6 font-medium hidden text-[16px] lg:block">
            <Link href="">Footwear</Link>
            <Link href="">About us</Link>
            <Link href="">Products</Link>
            <Link href="">Sale</Link>
          </div>
          <div className="flex flex-row gap-6 text-[24px]">
            <span className=" md:hidden lg:block">
              <AiOutlineSearch />
            </span>
            <span className="hidden lg:block">
              <AiOutlineUser />
            </span>
            <span className=" md:hidden lg:block">
              <AiOutlineShopping />
            </span>
            <span className="lg:hidden">
              <button onClick={toggle}>
                {isVisible ? <FaTimes /> : <FaGripLines />}
              </button>
            </span>
          </div>
        </nav>
        <header className="grid grid-flow-row my-6 md:items-center md:grid-flow-col">
          <div className="flex flex-col items-center gap-8 md:items-start">
            <div className="mt-8 md:mt-0">
              <h4 className="text-[32px] md:text-[25px] md:max-w-md lg:text-[44px] font-bold md:text-start text-center py-4">
                Get your awesome sneakers.
              </h4>
              <p className="text-[18px] md:text-start max-w-sm md:max-w-sm text-center text-[#6C6B6B]">
                We offer the best deals in our shop. Check them out now. We have
                awesome stuff on sale for you.
              </p>
            </div>
            <div className="flex flex-row items-center space-x-4">
              <button className="bg-[#FF3C78] font-bold text-white w-[125px] lg:w-[160px] h-[48px] rounded-[4px]">
                Shop Now
              </button>
              <span className="text-[#FF3C78] text-[24px]">
                <AiOutlineHeart />
              </span>
            </div>
            <div className="flex flex-col space-y-2 md:flex-row md:items-center md:gap-8">
              <span className="flex flex-row items-center space-x-2">
                <span className="text-green-600 text-[20px]">
                  <FaCheckCircle />
                </span>
                <p className="text-[16px] text-[#6C6B6B]">Free shipping</p>
              </span>
              <span className="flex flex-row items-center space-x-2">
                <span className="text-green-600 text-[20px]">
                  <FaCheckCircle />
                </span>
                <p className="text-[16px] text-[#6C6B6B]">Free returns</p>
              </span>
            </div>
          </div>
          <picture className="">
            <Image
              width="800px"
              height="800px"
              objectFit="cover"
              src="/images/Sha.svg"
              alt="logo"
            />
          </picture>
        </header>
      </div>
      <main className="w-full max-h-full px-8 lg:px-24">
        <div className="my-12 lg:py-14">
          <h4 className="text-[26px] md:text-[40px] font-bold text-center">
            Featured products
          </h4>
          <p className="text-[18px] text-center text-[#6C6B6B]">Enjoy the new products from our store.</p>
        </div>
        <div className="grid grid-flow-row gap-24 py-8 md:gap-12 md:grid-cols-2 lg:grid-cols-4">
          {featuresdata.map((data, index) => (
            <div className="flex flex-col items-center" key={data.id}>
              <div className="relative top-0 bottom-0 left-0 right-0 flex flex-col items-center">
                <div
                  className={`absolute left-24 md:left-36 lg:left-24 lg:w-[80px] lg:h-[80px] -top-6 right-0 bg-gradient-to-r rounded-full w-[120px] h-[120px]  from-[${data.color1}] to-[${data.color2}]`}
                ></div>
                <picture>
                  <Image
                    width="400px"
                    height="200px"
                    objectFit="cover"
                    src={data.img}
                    alt="logo"
                  />
                </picture>
              </div>
              <div className="space-y-4 text-center md:text-start">
                <Image
                  width="90px"
                  height="20px"
                  objectFit="contain"
                  src="/images/Rating.svg"
                  alt="logo"
                />
                <p className="text-[16px] max-w-md">
                  Adidas Falcon Shoes for men - 2021 Edition
                </p>
                <h4 className="font-bold text-[18px]">$120.50</h4>
              </div>
            </div>
          ))}
        </div>
      </main>
      <section className="grid h-full grid-flow-row mt-24 md:grid-cols-2">
        <div className="w-full md:h-full  bg-[#02BE83]">
          <div className="flex flex-col items-center px-4 py-8 md:flex-row">
           <picture>
		   <Image
              width="300px"
              height="400px"
              objectFit="cover"
              src="/images/ftball.svg"
              alt="logo"
            />
		   </picture>
            <div className="space-y-4 text-center md:text-start">
              <p className="text-[#0A083A] text-[16px]">Accesories</p>
              <h4 className="text-white font-bold text-[34px]">Football</h4>
              <p className="text-white text-[16px] w-48">
                We receive new sportwear every day. Just take your pick.
              </p>
              <button className="bg-[#0A083A] font-bold text-white w-[135px] h-[45px] rounded-[4px]">
                Shop Now
              </button>
            </div>
          </div>
        </div>
        <div className="w-full md:h-full bg-[#0A083A]">
          <div className="flex flex-col items-center px-4 py-8 md:flex-row">
			 <picture>
		   <Image
              width="300px"
              height="400px"
              objectFit="contain"
              src="/images/vlley.svg"
              alt="logo"
            />
		   </picture>
            <div className="space-y-4 text-center md:text-start">
              <p className="text-[#02BE83] text-[16px]">Accesories</p>
              <h4 className="text-white font-bold text-[34px]">Volleyball</h4>
              <p className="text-white text-[16px] w-48">
                We receive new sportwear every day. Just take your pick.
              </p>
              <button className="bg-[#02BE83] font-bold text-white w-[135px] h-[45px] rounded-[4px]">
                Shop Now
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="my-8 md:my-20">
        <div className="flex flex-col items-center md:flex-row md:justify-between md:px-20">
          <h4 className="text-[24px] md:text-[34px] font-bold">
            Best seller this work
          </h4>
          <div className="text-[16px] font-normal">
            <span className="flex text-[16px] font-bold items-center gap-4">
              <p>Men</p>
              <span className="text-[34px] text-blue-400">
                <FaToggleOn />
              </span>
              <p>Women</p>
            </span>
          </div>
        </div>
        <div className="grid items-center grid-flow-row my-8 md:my-20 md:grid-cols-12 md:gap-20">
          <div className="relative grid my-8 md:col-span-7">
            <div className="bg-gradient-to-r max-w-xs md:max-w-md h-[250px] sm:max-w-lg sm:h-[350px] md:h-[300px] rounded-r-[34px] from-[#FFB2B2] to-[#FF3C78]"></div>
            <span className="absolute bottom-0 top-10 md:top-6 md:bottom-0">
              <Image
                width="800px"
                height="400px"
                objectFit="cover"
                src="/images/bigshoe.svg"
                alt="logo"
              />
            </span>
          </div>
          <div className="grid items-center space-y-4 text-center md:col-span-4 md:text-start">
            <div>
              <Image
                width="90px"
                height="20px"
                objectFit="contain"
                src="/images/Rating.svg"
                alt="logo"
              />
            </div>
            <div className="flex flex-col items-center space-y-4 md:items-start">
              <p className="text-[18px] md:text-[20px] max-w-xs md:max-w-xs font-bold">
                Adidas Falcon Shoes for women - 2021 Edition
              </p>
              <p className="text-[14px] md:text-[18px] font-bold">$120.50</p>
              <button className="bg-[#315BFF] font-bold text-white w-[135px] h-[45px] rounded-[4px]">
                Shop Now
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full h-full pt-8">
        <div className="bg-[#F5F5F5] py-8 md:pb-24 px-4 md:px-22 lg:px-24 w-full h-64 md:h-80 flex flex-col items-center md:flex-row md:justify-between gap-4">
          <span>
            <h4 className="text-[28px] text-center md:text-start font-bold">
              New arrivals
            </h4>
            <p className="text-[14px] text-center md:text-start w-72 text-[#6C6B6B]">
              Enjoy the new products from our store. Select what you like, enjoy
              & return.
            </p>
          </span>
          <p className="text-[#FF3C78] after:content-['>']">View all</p>
        </div>
        <div className="px-4 -mt-20 md:px-8">
          <Splide
            options={{
              // perPage: 1,
              gap: "1rem",
              arrows: false,
              pagination: true,
              breakpoints: {
                640: {
                  perPage: 1,
                  gap: "1rem",
                },
                768: {
                  perPage: 2,
                  gap: "1rem",
                },

                1024: {
                  perPage: 3,
                  gap: "1rem",
                },
                1440: {
                  perPage: 4,
                  gap: "2rem",
                },
              },
            }}
            aria-label="My Favorite Images"
          >
            {newarrdata.map((data, index) => (
              <SplideSlide key={index}>
                <div className="flex flex-col items-center">
                  <div
                    className={`bg-gradient-to-r w-[240px] h-[350px] rounded-3xl from-[${data?.color1}] to-[${data?.color2}]`}
                  >
                    <p className="text-white text-[24px] font-bold p-4">
                      {data?.no}
                    </p>
                    <span>
                      <Image
                        width="800px"
                        height="750px"
                        objectFit="cover"
                        src={data?.img || ""}
                        alt="logo"
                      />
                    </span>
                    <span className="bg-white px-5 text-[16px] rounded-xl float-right mr-4">
                      +
                    </span>
                  </div>
                  <div className="py-10 text-center md:text-start">
                    <Image
                      width="90px"
                      height="20px"
                      objectFit="contain"
                      src="/images/Rating.svg"
                      alt="logo"
                    />
                    <p className="text-[16px] w-52">
                      Adidas Falcon Shoes for men - 2021 Edition
                    </p>
                    <h4 className="font-bold text-[18px] md:text-[22px]">
                      $120.50
                    </h4>
                  </div>
                </div>
              </SplideSlide>
            ))}
          </Splide>
        </div>
      </section>
      <section className="w-full h-full px-8 mt-24 md:px-14">
        <div className="grid grid-flow-row md:grid-cols-2 place-items-center md:place-items-start md:gap-12">
          <div className="relative top-0 bottom-0 left-0 right-0">
            <Image
              width="500px"
              height="400px"
              objectFit="cover"
              src="/images/shoe9.svg"
              alt="logo"
            />
          </div>

          <div>
            <h4 className="text-[30px] text-center md:text-[28px] font-bold pb-8">
              Why choose our shop
            </h4>
            <p className="text-[16px] md:text-[14px] text-center md:text-start text-[#6C6B6B]  max-w-sm pb-4">
              For explosive events sprints up to 400 metres, long jump, triple
              jump the reduction in atmospheric pressure means there is less
              resistance from the atmosphere.
            </p>
            <div className="grid grid-flow-row gap-4 place-items-center md:place-items-start md:grid-cols-2 md:gap-4">
              <span className="flex flex-row space-x-2">
                <span className="text-[24px] text-blue-500">
                  <AiOutlineCar />
                </span>
                <p>Fast Delivery</p>
              </span>
              <span className="flex flex-row space-x-2">
                <span className="text-[24px] text-blue-500">
                  <BsHeadphones />
                </span>
                <p>Great Support</p>
              </span>
              <span className="flex flex-row space-x-2">
                <span className="text-[24px] text-blue-500">
                  <AiOutlineWallet />
                </span>
                <p>Cool Prices</p>
              </span>
              <span className="flex flex-row space-x-2">
                <span className="text-[24px] text-blue-500">
                  <BsXDiamond />
                </span>
                <p>High Quality</p>
              </span>
            </div>
          </div>
        </div>
      </section>
      <section className="px-8 my-24 md:px-12">
        <div className="flex flex-col items-center gap-4 mb-12">
          <h4 className="text-3xl font-bold">Choose categories</h4>
          <p className="text-gray-400 text-center text-[14px] max-w-md">
            For explosive events (sprints up to 400 metres, long jump, triple
            jump) the reduction in atmospheric pressure means there is less
            resistance from the atmosphere.
          </p>
        </div>
        <div className="">
          <Splide
            options={{
              // perPage: 3,
              gap: "1rem",
              arrows: false,
              pagination: true,
              // margin: '100%',
              breakpoints: {
                640: {
                  perPage: 1,
                  gap: "1rem",
                },
                768: {
                  perPage: 2,
                  gap: "1rem",
                },

                1024: {
                  perPage: 3,
                  gap: "1rem",
                },
                1440: {
                  perPage: 3,
                  gap: "2rem",
                },
              },
            }}
            aria-label="My Favorite Images"
          >
            {collectiondata.map((data, index) => (
              <SplideSlide key={index}>
                <div className="bg-[#F5F5F5]  max-w-md md:max-w-md text-center md:text-start h-[350px] rounded-[16px] p-8">
                  <h6 className={`text-[24px] text-[${data.color}] font-bold`}>
                    {data.title}
                  </h6>
                  <p className="text-[12px] text-gray-400 font-bold">
                    {data.subtitle}
                  </p>
                  <p className={`text-[14px] underline text-[${data.color}]`}>
                    See collection
                  </p>
                  <Image
                    width="800px"
                    height="750px"
                    objectFit="cover"
                    src={data.img}
                    alt="logo"
                  />
                </div>
              </SplideSlide>
            ))}
          </Splide>
        </div>
      </section>
      <section className="bg-[#F5F5F5] h-[25rem] px-8 md:px-12 py-12">
        <h4 className="text-[26px] md:text-[34px] font-bold text-center">
          Popular brands
        </h4>
        <div className="my-12">
          <Splide
            options={{
              perPage: 3,
              gap: "2rem",
              arrows: true,
              pagination: false,
              // width: '70%',
              breakpoints: {
                640: {
                  perPage: 1,
                  gap: "1rem",
                },
                768: {
                  perPage: 2,
                  gap: "1rem",
                },

                1024: {
                  perPage: 4,
                  gap: "1rem",
                },
                1440: {
                  perPage: 4,
                  gap: "1rem",
                },
              },
            }}
            aria-label="My Favorite Images"
          >
            <SplideSlide>
              <div className="bg-white rounded-md h-[200px] max-w-md text-center py-4">
                <Image
                  width="150px"
                  height="150px"
                  objectFit="contain"
                  src="/images/nike.svg"
                  alt="logo"
                />
              </div>
            </SplideSlide>
            <SplideSlide>
              <div className="bg-white rounded-md h-[200px] max-w-md text-center py-4">
                <Image
                  width="150px"
                  height="150px"
                  objectFit="contain"
                  src="/images/newb.svg"
                  alt="logo"
                />
              </div>
            </SplideSlide>
            <SplideSlide>
              <div className="bg-white rounded-md h-[200px] max-w-md text-center py-4">
                <Image
                  width="150px"
                  height="150px"
                  objectFit="contain"
                  src="/images/add.svg"
                  alt="logo"
                />
              </div>
            </SplideSlide>
            <SplideSlide>
              <div className="bg-white rounded-md h-[200px] max-w-md text-center py-4">
                <Image
                  width="150px"
                  height="150px"
                  objectFit="contain"
                  src="/images/bird.svg"
                  alt="logo"
                />
              </div>
            </SplideSlide>
          </Splide>
        </div>
      </section>
      <div>
        <div className="bg-gradient-to-r w-full flex-col items-center flex md:justify-around md:flex-row md:max-w-6xl h-full md:rounded-r-[24px] py-12  mt-24 from-[#8AA8F8] to-[#315BFF]">
          <div className="flex flex-col items-center gap-4 md:items-start">
            <h4 className="text-[24px] md:text-[30px] text-center md:text-start max-w-xs font-bold text-white">
              Subscribe now to get the latest updates
            </h4>
            <form className="flex flex-col max-w-sm px-4 md:w-full md:px-0">
              <input
                className="p-3 bg-white border-none rounded-md outline-none"
                type="email"
                placeholder="Enter you email"
              />
              <button className="bg-[#315BFF] text-white font-bold bprder-2-[#315BFF] p-3 rounded-md">
                SUBSCRIBE
              </button>
            </form>
            <div className="flex flex-row gap-4">
              <div className="bg-white rounded-full text-[#315BFF] w-8 h-8 p-2">
                <FaFacebookF />
              </div>
              <div className="bg-white rounded-full text-[#315BFF] w-8 h-8 p-2">
                <FaTwitter />
              </div>
              <div className="bg-white rounded-full text-[#315BFF] w-8 h-8 p-2">
                <FaInstagram />
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute left-44 md:left-36 lg:left-36 lg:w-[230px] lg:h-[230px] top-48 lg:top-24 right-0 bg-gradient-to-r rounded-full w-[120px] h-[120px]  from-[#FFB2B2] to-[#FF3C78]">
              .
            </div>
            <Image
              width="400px"
              height="300px"
              objectFit="cover"
              src="/images/shoe10.svg"
              alt="logo"
            />
          </div>
        </div>
      </div>
      <footer className="grid w-full h-full grid-flow-row gap-8 px-4 my-16 md:px-24 md:my-24 place-items-center md:items-start md:grid-flow-col">
        <div className="flex flex-col items-center gap-4 md:items-start">
          <Image width="50%" height="40%" src="/images/logo.svg" alt="logo" />
          <p className="text-[12px] w-44 text-center md:text-start">
            Our shop is the best choice for buying footwear.
          </p>
          <div className="flex items-center gap-4 text-[#FF3C78] text-sm">
            <FaFacebookF />
            <FaTwitter />
            <FaInstagram />
          </div>
        </div>
        <div>
          <p className="text-[16px] font-bold">Home</p>
          <ul className="hidden md:block text-[12px] text-gray-500">
            <li>Support Center</li>
            <li>Customer Support</li>
            <li>Copyright</li>
            <li>Popular Campaign</li>
          </ul>
        </div>
        <div>
          <p className="text-[16px] font-bold">Our Information</p>
          <ul className="hidden md:block text-[12px] text-gray-500">
            <li>Return Policy</li>
            <li>Privacy Policy</li>
            <li>Terms and Conditions</li>
            <li>Site Map</li>
            <li>Store Hours</li>
          </ul>
        </div>
        <div>
          <p className="text-[16px] font-bold">My Account</p>
          <ul className="hidden md:block text-[12px] text-gray-500">
            <li>Press Inquiries</li>
            <li>Social Media Directories</li>
            <li>Permission</li>
            <li>Requests</li>
          </ul>
        </div>
      </footer>
      {isVisible && (
        <div className="w-full md:w-[300px] h-[400px] lg:hidden rounded-md bg-[#0A083A] absolute md:right-20 bottom-0 top-24 md:top-16">
          <div className="flex flex-col items-center px-4 py-12 space-y-8 font-bold text-white">
            <Link href="">Footwear</Link>
            <Link href="">About us</Link>
            <Link href="">Products</Link>
            <Link href="">Sale</Link>
          </div>
        </div>
      )}
    </>
  );
}
