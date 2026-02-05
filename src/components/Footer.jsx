import React from "react";

function Footer() {
  return (
    <footer className="#EEEFFB text-gray-800">
      {/* Top Section */}
      <div className="px-6 md:px-20 py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
        
        {/* Hekto */}
        <div className="lg:col-span-2">
          <h1 className="text-2xl font-bold mb-4">Hekto</h1>

          {/* Email + Signup */}
          <div className="flex w-full max-w-sm mb-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-3 py-2 rounded-l-md outline-none"
            />
            <button className="bg-purple-600 text-white px-4 py-2 rounded-r-md hover:bg-purple-700">
              Signup
            </button>
          </div>

          <p className="text-sm">
            Contact Info <br />
            17 Princess Road, London, Greater London NW1 8JR, UK
          </p>
        </div>

        {/* Categories */}
        <div>
          <h2 className="font-semibold text-lg mb-3">Categories</h2>
          <ul className="space-y-1 text-sm">
            <li>Laptops & Computers</li>
            <li>Cameras & Photography</li>
            <li>Smart Phones & Tablets</li>
            <li>Video Games & Consoles</li>
            <li>Waterproof Headphones</li>
          </ul>
        </div>

        {/* Customer Care */}
        <div>
          <h2 className="font-semibold text-lg mb-3">Customer Care</h2>
          <ul className="space-y-1 text-sm">
            <li>My Account</li>
            <li>Discount</li>
            <li>Returns</li>
            <li>Orders History</li>
            <li>Order Tracking</li>
          </ul>
        </div>

        {/* Pages */}
        <div>
          <h2 className="font-semibold text-lg mb-3">Pages</h2>
          <ul className="space-y-1 text-sm">
            <li>Blog</li>
            <li>Browse the Shop</li>
            <li>Category</li>
            <li>Pre-Built Pages</li>
            <li>Visual Composer Elements</li>
            <li>WooCommerce Pages</li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-purple-600 text-white text-center py-3 text-sm">
        © Webecy - All Rights Reserved
      </div>
    </footer>
  );
}

export default Footer;