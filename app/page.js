import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <section className="container px-4 py-10 mx-auto flex flex-col md:flex-row lg:h-128 lg:space-x-8 lg:items-center max-sm:mb-6">
        <div className="w-full text-center lg:text-left lg:w-1/2 lg:-mt-8 max-sm:mb-8">
          <h1 className="text-3xl leading-snug text-gray-800 dark:text-gray-200 md:text-4xl">
            A <span className="font-semibold">free repository</span> for community
            <br className="hidden lg:block" /> components using <span className="font-semibold underline decoration-primary">Tailwind CSS</span>
          </h1>
          <p className="mt-4 text-lg text-gray-500 dark:text-gray-300">
            Open source Tailwind UI components and templates to
            <br className="hidden lg:block" /> bootstrap your new apps, projects or landing sites!
          </p>
          <div className="mt-6 bg-transparent border rounded-lg dark:border-gray-700 lg:w-2/3 focus-within:border-primary focus-within:ring focus-within:ring-primary dark:focus-within:border-primary focus-within:ring-opacity-20">
            <form action="https://www.creative-tim.com/twcomponents/search" className="flex flex-col w-full md:flex-row">
              <input type="search" name="query" placeholder="Search Components" required className="flex-1 h-10 px-4 m-1 text-gray-700 placeholder-gray-400 bg-transparent border-none appearance-none lg:h-12 dark:text-gray-200 focus:outline-none focus:placeholder-transparent focus:ring-0 max-sm:pt-2 outline-none" />
              <button type="submit" className="flex items-center justify-center  p-2 m-1 text-white transition-colors duration-300 transform rounded-lg md:w-10 md:h-10 lg:w-12 lg:h-12 lg:p-0 bg-[rgb(96,40,255)] hover:bg-[rgb(96,40,255)]/70 focus:outline-none focus:bg-[rgb(96,40,255)]/70">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8"> {/* Changed w-6 h-6 to w-8 h-8 for a squareish icon */}
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                </svg>
              </button>
            </form>
          </div>
        </div>
        <div className="w-full mt-4 lg:mt-0 lg:w-1/2">
          <img src="https://www.creative-tim.com/twcomponents/svg/website-designer-bro-purple.svg" alt="Tailwind CSS components" className="w-full h-full max-w-md mx-auto" />
        </div>
      </section>



      <section className="py-19 my-3 bg-gray-100 dark:bg-gray-900">
        <div className="container max-sm:px-2 sm:px-4 text-center mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-200">Pricing Plans</h2>
            <p className="mt-4 text-lg text-gray-500 dark:text-gray-300">Choose the plan that suits you best</p>
          </div>
          <div className="flex flex-wrap justify-center md:justify-evenly">
            {/* Basic Plan */}
            <div className="w-full sm:w-1/2 md:w-1/3 p-4">
              <div className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800 transform transition duration-500 hover:scale-105 text-center">
                <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">Basic</h3>
                <p className="mt-4 text-gray-500 dark:text-gray-300">$10/month</p>
                <ul className="mt-6 mb-6 space-y-4">
                  <li className="text-gray-600 dark:text-gray-400"><s>10GB Storage</s></li>
                  <li className="text-gray-600 dark:text-gray-400"><s>Basic Support</s></li>
                  <li className="text-gray-600 dark:text-gray-400"><s>Single User</s></li>
                  <li className="text-gray-600 dark:text-gray-400">Community Access</li>
                  <li className="text-gray-600 dark:text-gray-400">Weekly Updates</li>
                </ul>
                <Button className="mx-1" variant="outline">Choose Plan</Button>
              </div>
            </div>
            {/* Standard Plan */}
            <div className="w-full sm:w-1/2 md:w-1/3 p-4">
              <div className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800 transform transition duration-500 hover:scale-105 text-center border-2 border-purple-500">
                <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">Standard</h3>
                <p className="mt-4 text-gray-500 dark:text-gray-300">$20/month</p>
                <span className="inline-block px-3 py-1 text-sm font-semibold text-white bg-purple-500 rounded-full">Bestseller</span>
                <ul className="mt-6 mb-6 space-y-4">
                  <li className="text-gray-600 dark:text-gray-400">50GB Storage</li>
                  <li className="text-gray-600 dark:text-gray-400">Priority Support</li>
                  <li className="text-gray-600 dark:text-gray-400">Up to 5 Users</li>
                  <li className="text-gray-600 dark:text-gray-400">Community Access</li>
                  <li className="text-gray-600 dark:text-gray-400">Daily Updates</li>
                </ul>
                <Button className="mx-1" variant="outline">Choose Plan</Button>
              </div>
            </div>
            {/* Premium Plan */}
            <div className="w-full sm:w-1/2 md:w-1/3 p-4">
              <div className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800 transform transition duration-500 hover:scale-105 text-center">
                <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">Premium</h3>
                <p className="mt-4 text-gray-500 dark:text-gray-300">$30/month</p>
                <ul className="mt-6 mb-6 space-y-4">
                  <li className="text-gray-600 dark:text-gray-400">200GB Storage</li>
                  <li className="text-gray-600 dark:text-gray-400">24/7 Support</li>
                  <li className="text-gray-600 dark:text-gray-400">Unlimited Users</li>
                  <li className="text-gray-600 dark:text-gray-400">Community Access</li>
                  <li className="text-gray-600 dark:text-gray-400">Real-time Updates</li>
                </ul>
                <Button className="mx-1" variant="outline">Choose Plan</Button>
              </div>
            </div>
          </div>
        </div>
      </section>





      <section className="py-10 bg-white dark:bg-gray-800">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-200 mb-4">Testimonials</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6">What our customers are saying about us.</p>
          <div className="flex flex-wrap justify-center">
            <div className="max-w-xs mx-4 mb-6 transition-transform transform hover:scale-105 duration-300 ease-in-out">
              <blockquote className="text-gray-600 dark:text-gray-400 italic">"This product changed my life!"</blockquote>
              <p className="font-bold text-gray-800 dark:text-gray-200">- Jane Doe</p>
            </div>
            <div className="max-w-xs mx-4 mb-6 transition-transform transform hover:scale-105 duration-300 ease-in-out">
              <blockquote className="text-gray-600 dark:text-gray-400 italic">"Exceptional service and quality!"</blockquote>
              <p className="font-bold text-gray-800 dark:text-gray-200">- John Smith</p>
            </div>
            <div className="max-w-xs mx-4 mb-6 transition-transform transform hover:scale-105 duration-300 ease-in-out">
              <blockquote className="text-gray-600 dark:text-gray-400 italic">"I highly recommend this to everyone!"</blockquote>
              <p className="font-bold text-gray-800 dark:text-gray-200">- Emily Johnson</p>
            </div>
            <div className="max-w-xs mx-4 mb-6 transition-transform transform hover:scale-105 duration-300 ease-in-out">
              <blockquote className="text-gray-600 dark:text-gray-400 italic">"A game changer in the industry!"</blockquote>
              <p className="font-bold text-gray-800 dark:text-gray-200">- Michael Brown</p>
            </div>
          </div>
        </div>
      </section>



      <section className="py-12 bg-gray-100 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-200">Top Blogs</h2>
            <p className="mt-4 text-lg text-gray-500 dark:text-gray-400">
              Explore our most popular blog posts that our readers love!
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <div className="bg-white dark:bg-gray-700 rounded-lg shadow-lg transition-transform transform hover:scale-105">
              <img src="https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Blog Post 1" className="rounded-t-lg w-full h-48 object-cover" />
              <div className="p-3">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">Blog Title 1</h3>
                <p className="text-gray-500 dark:text-gray-400">A brief description of the blog post goes here.</p>
                <Button variant="outline" className="m-2">Read More</Button>
              </div>
            </div>
            <div className="bg-white dark:bg-gray-700 rounded-lg shadow-lg transition-transform transform hover:scale-105">
              <img src="path/to/image2.jpg" alt="Blog Post 2" className="rounded-t-lg w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">Blog Title 2</h3>
                <p className="text-gray-500 dark:text-gray-400">A brief description of the blog post goes here.</p>
                <Button variant="outline" className="m-2">Read More</Button>
              </div>
            </div>
            <div className="bg-white dark:bg-gray-700 rounded-lg shadow-lg transition-transform transform hover:scale-105">
              <img src="path/to/image3.jpg" alt="Blog Post 3" className="rounded-t-lg w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">Blog Title 3</h3>
                <p className="text-gray-500 dark:text-gray-400">A brief description of the blog post goes here.</p>
                <Button variant="outline" className="m-2">Read More</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}


