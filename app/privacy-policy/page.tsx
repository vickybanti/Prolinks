"use client"
import React from 'react';
import {motion} from "framer-motion"

const Page = () => {
  return (
    <motion.div
            initial={{ opacity: 0.0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.3,
              duration: 0.8,
              ease: "easeInOut",
            }}
         className="max-w-4xl mx-auto px-6 py-12 text-gray-800">

      <h1 className="text-3xl font-bold text-center text-gray-900 mb-6">Privacy Policy</h1>
      <p className="text-center text-sm text-gray-600 mb-10">
        Last updated: February 17, 2025
      </p>
      
      <section className="mb-8">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">1. Introduction</h2>
        <p>
          Welcome to Project Prolinks, an architectural firm specializing in
          building construction, project planning, and management. This Privacy
          Policy explains how we collect, use, and protect your personal data.
        </p>
      </section>
      
      <section className="mb-8">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">2. Information We Collect</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Personal details (name, email, phone number, etc.).</li>
          <li>Project-related information provided by clients.</li>
          <li>Website usage data through cookies and analytics.</li>
        </ul>
      </section>
      
      <section className="mb-8">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">3. How We Use Your Information</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>To provide architectural and project management services.</li>
          <li>To communicate with clients regarding projects.</li>
          <li>To improve our website and services.</li>
        </ul>
      </section>
      
      <section className="mb-8">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">4. Data Protection & Security</h2>
        <p>
          We implement industry-standard security measures to safeguard your
          data from unauthorized access, alteration, or disclosure.
        </p>
      </section>
      
      <section className="mb-8">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">5. Sharing of Information</h2>
        <p>
          We do not sell or rent your personal data. However, we may share
          information with third-party service providers assisting in project
          execution.
        </p>
      </section>
      
      <section className="mb-8">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">6. Your Rights</h2>
        <p>
          You have the right to access, update, or request deletion of your
          personal data. For any requests, please contact us at [your email].
        </p>
      </section>
      
      <section className="mb-8">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">7. Changes to This Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. Any changes will
          be posted on this page with an updated date.
        </p>
      </section>
      
      <footer className="mt-10 text-center text-sm text-gray-600">
        If you have any questions, contact us at <span className="text-blue-600">
        <a href="mailto:tundeadekola@yahoo.com" className="p-3 text-sm text-[#CC5500] hover:underline">
  tundeadekola@yahoo.com
</a>
        </span>
      </footer>
    </motion.div>
  );
};

export default Page;
