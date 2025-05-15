import { MdDraw } from "react-icons/md";
import { GrUserManager } from "react-icons/gr";
import { RiSketching } from "react-icons/ri";
import { HiPaintBrush } from "react-icons/hi2";
import { IoIosColorPalette } from "react-icons/io";
import { GiReceiveMoney } from "react-icons/gi";
import { GiStorkDelivery } from "react-icons/gi";
export const cardItems = [
  {
    id: 1,
    service: "Drawings",
    icon: <MdDraw size={24} />,
    message:
      "We specialize in custom pencil and pen drawings, from portraits to logos. Whether it's a personal sketch or professional artwork, our team brings your ideas to life with precision and creativity.",
  },
  {
    id: 2,
    service: "Portraits",
    icon: <GrUserManager size={24} />,
    message:
      "Capture emotions and memories with our hand-drawn portraits. Whether it's a gift or a personal keepsake, each piece is crafted with care detail, and artistic expression.",
  },
  {
    id: 3,
    service: "Sketches",
    icon: <RiSketching size={24} />,
    message:
      "Bring your ideas to life with our expressive sketches. From concept art to detailed line work, we turn imagination into striking visual stories, one stroke at a time",
  },
  {
    id: 4,
    service: "Paintings",
    icon: <HiPaintBrush size={24} />,
    message:
      "Transform spaces and moments with our custom paintings. Whether it's landscapes, abstracts, or personalized art, we blend color and creativity to make your vision unforgettable",
  },
];
export const cardItems2 = [
  {
    id: 1,
    service: "Experienced Artists",
    icon: <IoIosColorPalette size={24} />,
    message: "Our team has years of experience in art and design.",
  },
  {
    id: 2,
    service: "Affordable Pricing",
    icon: <GiReceiveMoney size={24} />,
    message: "We offer competitive pricing without compromising on quality.",
  },
  {
    id: 3,
    service: "Timely Delivery",
    icon: <GiStorkDelivery size={24} />,
    message: "We deliver quality services within the agreed timeline",
  },
];
