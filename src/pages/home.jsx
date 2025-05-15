import { Link } from "react-router-dom";
import { cardItems, cardItems2 } from "../constants/cardItems";
function Home() {
  return (
    <section className=" max-w-screen-full m-0 p-0  h-full min-h-screen text-center">
      <div
        className=" grid w-full min-h-100 bg-no-repeat bg-cover bg-center p-5"
        style={{
          backgroundImage:
            "url('https://i.pinimg.com/736x/18/c5/4d/18c54d5c2c84c6e7d2e0ca7a30bdd247.jpg')",
        }}
      >
        <div className="h-full flex flex-col justify-center items-center text-center ">
          <h2 className=" text-4xl font-bold text-[#b6dce8]">
            Welcome to Artalis Creative Space
          </h2>
          <p className="  my-8 md:px-[100px] py-[10px] text-md text-[#e8edee] ">
            We are creative art designers. We draw artistic sketches of nature,
            objects, human figures, tattoos, logos using pencil, pen or digital
            tools. We are also passionate with graphic design, creating
            educative materials for children, drawing maps, portraits, painting,
            beautifying objects.
          </p>
          <Link
            to="./about"
            className="bg-[rgb(1,53,1)] px-4 py-2 no-underline rounded-[5px] text-[18px] transition-colors duration-300 text-white hover:bg-red-500"
          >
            <h3>Learn More</h3>
          </Link>
        </div>
      </div>
      {/* Services Section */}
      <div className="  w-full  ">
        <h2 className="text-4xl font-bold text-[rgb(1,53,1)] py-5 my-5 md:py-10 md:my-10">
          Our Services
        </h2>
        <div className=" grid grid-cols-1 place-items-center md:grid-cols-4 gap-4 ">
          {cardItems.map(({ id, service, icon, message }) => (
            <div
              key={id}
              className="flex flex-col p-2 md:p-4 bg-green-50 flex-1 min-w-[300px] max-w-[250px] h-[280px] shadow-lg rounded-[10px] justify-center items-center transition-transform duration-300 ease-in-out hover:-translate-y-5  my-5 md:my-10 "
            >
              <div className="text-[rgb(223,67,117)]  place-items-center  pb-[5px] text-2xl text-center">
                {icon}
              </div>
              <h3 className="font-bold mb-[4px] text-xl">{service}</h3>
              <p className="px-auto text-[14px]">{message}</p>
            </div>
          ))}
        </div>
      </div>
      {/* Why Choose us Section */}
      <div className=" w-full">
        <h2 className="text-4xl font-bold text-[rgb(1,53,1)] py-5 my-5 md:py-10 md:my-10">
          Why Choose Us ?
        </h2>
        <div className=" flex flex-wrap justify-center md:gap-x-48 gap-y-10 my-10 md:gap-y-20 md:my-20 w-full">
          {cardItems2.map(({ id, service, icon, message }) => (
            <div
              key={id}
              className="flex p-2 min-w-[300px]  md:p-4 flex-col mx-5  bg-pink-50 flex-1  max-w-[400px] h-[250px] shadow-lg rounded-[10px] justify-center items-center transition-transform duration-300 ease-in-out hover:-translate-y-5"
            >
              <div className="flex items-center justify-center m-auto text-[rgb(223,67,117)] mt-[10px] mb-[10px] text-2xl">
                {icon}
              </div>
              <h3 className="font-bold mb-[10px] text-xl">{service}</h3>
              <p className="px-auto text-[16px]">{message}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default Home;
