import lefti from "../images/left.jpg";
import righti from "../images/right.jpg";
import { Link } from "react-router-dom";
function About() {
  return (
    <div className="max-w-screen-full m-0 p-0  min-h-screen text-center bg-[rgba(233,219,216,255)] ">
      <div className="flex flex-col md:flex-row w-full min-h-[80vh] py-8 md:py-10 ">
        <div className=" flex flex-col items-center justify-center md:w-2/3 w-full p-2 md:p-4  ">
          <h2 className="text-4xl  font-bold text-[rgb(1,53,1)] py-2 pb-10 md:py-4 md:pb-20">
            About Us
          </h2>
          <p className="text-center max-w-[80%] pb-10 md:pb-20">
            Welcome to Artalis Creative Space where imagination meets
            expression. We are a passionate collective of artists specializing
            in drawings, portraits, sketches, and paintings that capture
            stories, emotions, and moments in every stroke. From detailed pencil
            work to vibrant brushstrokes, our creations celebrate the beauty of
            artistic craftsmanship. At Artalis, we believe in the power of art
            to connect, inspire, and transform. Whether you're seeking custom
            portraiture, unique decor, or expressive artwork that speaks to your
            soul, our studio offers a personalized and meaningful creative
            experience tailored just for you.
          </p>
          <Link
            to="../artworks"
            className="bg-[rgb(1,53,1)] px-4 py-2 no-underline rounded-[5px] text-[18px] transition-colors duration-300 text-white hover:bg-red-500"
          >
            <h3>Artworks</h3>
          </Link>
        </div>
        <div className="md:w-1/3 w-full flex flex-row p-5 md:p-10 ">
          <img
            src={lefti}
            alt="Artalis Sample 1"
            className="w-1/2 h-auto object-contain rounded-l-xl"
          />
          <img
            src={righti}
            alt="Artalis Sample 2"
            className="w-1/2 h-auto object-contain rounded-r-xl"
          />
        </div>
      </div>
    </div>
  );
}

export default About;
