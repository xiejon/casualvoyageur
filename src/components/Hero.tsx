import React from "react";

const Hero = () => {
  return (
    <>
      <h1 className="text-3xl md:text-4xl lg:text-5xl text-off-white font-bold text-center mt-6">
        Save on airfare,
        <br /> <span className="text-yellow">Splurge on adventure.</span>
      </h1>
      <h2 className="text-xl md:text-2xl text-off-white text-center mt-4">
        Get email alerts on cheap international flights from Australia.
      </h2>
      <form className="flex gap-2 max-w-md w-full mt-4" action={"/subscribe"}>
        <label htmlFor="email" hidden={true}>
          Email address
        </label>
        <input
          className="shadow appearance-none rounded w-full py-2 px-3 text-lg text-dark-green h-12 leading-tight focus:outline-none focus:shadow-outline"
          type="email"
          id="email"
          name="email"
          placeholder="Enter your email"
          required
        />
        <button
          className="bg-yellow hover:bg-blue-700 text-dark-green text-lg font-bold py-2 px-3 rounded"
          type="submit"
        >
          Subscribe
        </button>
      </form>
      <h3 className="text-sm md:text-lg text-off-white text-center mt-2">
        Handpicked routes, delivered to your inbox weekly. 
        <br /> No ads or spam, just deals.
      </h3>
    </>
  );
};

export default Hero;
