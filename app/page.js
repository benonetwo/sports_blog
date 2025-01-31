"use client";

import { Button } from "@/components/ui/button";
import Typed from "typed.js";
import React, { useRef, useEffect, useState } from "react";

export default function Home() {
  const el = useRef(null);
  const [showFirstDiv, setShowFirstDiv] = useState(false);
  const [showPricing, setShowPricing] = useState(false);

  // useEffect(() => {
  //   const typed = new Typed(el.current, {
  //     strings: ["Coding", "Web Development", "Software Engineering", "Data Science", "Machine Learning"],
  //     typeSpeed: 50,
  //   });

  //   return () => {
  //     typed.destroy();
  //   };
  // }, []);

  return (
    <main>
      {/* First Div Section */}
      {showFirstDiv && (
        <section className="container px-4 py-10 mx-auto lg:h-128 lg:space-x-8 lg:flex lg:items-center">
          <div className="w-full text-center lg:text-left lg:w-1/2 lg:-mt-8">
            <h1 className="text-3xl leading-snug text-gray-800 dark:text-gray-200 md:text-4xl">
              A <span className="font-semibold">free repository</span> for community <br className="hidden lg:block" /> components using{" "}
              <span className="font-semibold underline decoration-primary">
                <span ref={el} />
              </span>
            </h1>
            <p className="mt-4 text-lg text-gray-500 dark:text-gray-300">
              Open source Tailwind UI components and templates to <br className="hidden lg:block" /> bootstrap your new apps, projects or landing sites!
            </p>
          </div>
          <div className="w-full mt-4 lg:mt-0 lg:w-1/2">
            <img src="https://www.creative-tim.com/twcomponents/svg/website-designer-bro-purple.svg" alt="tailwind css components" className="w-full h-full max-w-md mx-auto" />
          </div>
        </section>
      )}

      {/* Pricing Plans Section */}
      {showPricing && (
        <section className="py-12 bg-gray-100 dark:bg-gray-900">
          <div className="container px-4 mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-200">Pricing Plans</h2>
              <p className="mt-4 text-lg text-gray-500 dark:text-gray-300">Choose the plan that suits you best</p>
            </div>
          </div>
        </section>
      )}
    
  





      <section className="py-12 bg-white dark:bg-gray-900">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-200">Our Events </h2>
            <p className="mt-4 text-lg text-gray-500 dark:text-gray-300"> Fusce quam efficitur porttitor tincidunt sollicitudin fusce pretium</p>
          </div>
          <div className="flex flex-wrap justify-center">
            {/* Testimonial 1 */}
            <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
              <div className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800 transform transition duration-500 hover:scale-105 text-center">
                <p className="text-gray-600 dark:text-gray-400">"Arcu sapien auctor maximus libero, erat praesent. Vehicula enim sit litora interdum porttitor; "</p>
                <h3 className="mt-4 text-xl font-semibold text-gray-800 dark:text-gray-200">(Track & Field)</h3>
                <p className="text-gray-500 dark:text-gray-300">Athletics</p>
              </div>
            </div>
            {/* Testimonial 2 */}
            <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
              <div className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800 transform transition duration-500 hover:scale-105 text-center">
                <p className="text-gray-600 dark:text-gray-400">"Fusce quam efficitur porttitor tincidunt sollicitudin fusce pretium"</p>
                <h3 className="mt-4 text-xl font-semibold text-gray-800 dark:text-gray-200">Freestyle</h3>
                <p className="text-gray-500 dark:text-gray-300">Swimming</p>
              </div>
            </div>
            {/* Testimonial 3 */}
            <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
              <div className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800 transform transition duration-500 hover:scale-105 text-center">
                <p className="text-gray-600 dark:text-gray-400">"Fusce quam efficitur porttitor tincidunt sollicitudin fusce pretium"</p>
                <h3 className="mt-4 text-xl font-semibold text-gray-800 dark:text-gray-200">Road Race</h3>
                <p className="text-gray-500 dark:text-gray-300">Cycling</p>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="py-12 bg-gray-100 dark:bg-gray-900">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-200">Top Blogs</h2>
            <p className="mt-4 text-lg text-gray-500 dark:text-gray-300">Check out our most popular blog posts</p>
          </div>
          <div className="flex flex-wrap justify-center">
            {/* Blog 1 */}
            <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
              <div className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800 transform transition duration-500 hover:scale-105">
                <img src="1a.jpeg" className="w-full h-64 object-cover rounded-t-lg" />
                <div className="mt-4">
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">Blog Post Title 1</h3>
                  <p className="mt-2 text-gray-600 dark:text-gray-400">A brief description of the blog post goes here. It should be engaging and informative.</p>
                  <Button className="m-2" variant="outline" href="/blog-post-1">Read More</Button>
                </div>
              </div>
            </div>
            {/* Blog 2 */}
            <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
              <div className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800 transform transition duration-500 hover:scale-105">
                <img src="2.jpeg" alt="Blog 2" className="w-full h-64 object-cover rounded-t-lg" />
                <div className="mt-4">
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">Blog Post Title 2</h3>
                  <p className="mt-2 text-gray-600 dark:text-gray-400">A brief description of the blog post goes here. It should be engaging and informative.</p>
                  <Button className="m-2" variant="outline" href="/blog-post-2">Read More</Button>
                </div>
              </div>
            </div>
            {/* Blog 3 */}
            <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
              <div className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800 transform transition duration-500 hover:scale-105">
                <img src="3.jpeg" alt="Blog 3" className="w-full h-64 object-cover rounded-t-lg" />
                <div className="mt-4">
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">Blog Post Title 3</h3>
                  <p className="mt-2 text-gray-600 dark:text-gray-400">A brief description of the blog post goes here. It should be engaging and informative.</p>
                  <Button className="m-2" variant="outline" href="/blog-post-3">Read More</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
};








