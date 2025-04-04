import React from 'react'

import Head from 'next/head';

const Page = () => {
    return (
        <div className="container mx-auto p-6">
            <Head>
                <title>About Us</title>
                <meta name="description" content="Learn more about our company and team." />
            </Head>
            <h1 className="text-3xl font-bold text-gray-800">About Us</h1>
            <p className="mt-4 text-gray-600">
                Welcome to our website! We are a team of passionate individuals dedicated to providing the best services to our customers.
            </p>
            <h2 className="mt-6 text-2xl font-semibold text-gray-700">Our Mission</h2>
            <p className="mt-2 text-gray-600">
                Our mission is to deliver high-quality products that meet the needs of our clients and contribute to their success.
            </p>
            <h2 className="mt-6 text-2xl font-semibold text-gray-700">Our Team</h2>
            <p className="mt-2 text-gray-600">
                We have a diverse team of experts in various fields, working together to achieve our goals.
            </p>
        </div>
    );
};


export default Page
