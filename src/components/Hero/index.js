import React from "react";

const Hero = () => {
  return (
    <section className="text-gray-600 body-font mt-20">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center pt-0">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="text-4xl sm:text-5xl text-center lg:text-left font-extrabold leading-tight mb-8">
          <div className=""> 
            <span className="block sm:inline text-purple-600 ">
            Find your style.
            </span>
          </div>
          <div className=""> 
            <br className="hidden lg:inline" />
            <span className="block sm:inline text-pink-500 ">
              Choose clothing that truly represents you as an individual
            </span>
          </div>
          </h1>

          <p className="mb-8 leading-relaxed font-serif text-green-600">
            Welcome to our fashion-forward online store, where style meets
            affordability. Explore a curated collection of the latest trends and
            timeless classics, all designed to elevate your wardrobe. Our
            mission is to provide you with a seamless shopping experience,
            offering a wide range of high-quality products at competitive
            prices. Whether you're looking for everyday essentials or statement
            pieces, we've got you covered. Shop with confidence and discover the
            joy of effortless style at your fingertips.Whether you're looking for everyday essentials or statement
            pieces, we've got you covered. Shop with confidence and discover the
            joy of effortless style at your fingertips.discover the
            joy of effortless style at your confidence and  fingertips.
          </p>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded-full"
            alt="hero"
            src="https://img.freepik.com/premium-photo/full-shot-woman-online-shopping_23-2150567519.jpg?w=826"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
