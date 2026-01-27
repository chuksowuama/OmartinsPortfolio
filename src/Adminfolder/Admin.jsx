import React, { useState } from "react";
import { mypages } from "../assets/Data";
import ContactAdmin from "./ContactAdmin";
import ResumeAdmin from "./ResumeAdmin";
import AboutAdmin from "./AboutAdmin";
import WorksAdmin from "./WorksAdmin";
import Profile from "./Profile";

const Admin = () => {
  const [page, setpage] = useState("Profile");

  return (
    <div className="min-h-screen bg-secondary lg:flex">
      {/* Sidebar */}
      <aside className="lg:w-64 bg-primary text-gray-100 flex flex-col">
        <div className="p-6 text-2xl font-semibold border-b border-tertiary">
          Admin Panel
        </div>
        <nav className="flex-1 p-4 space-y-2">
          {mypages.map((item) => (
            <button
              className="w-full text-left px-4 py-2 rounded-lg button"
              onClick={() => setpage(item.title)}
            >
              {item.title}
            </button>
          ))}
        </nav>
        <div className="p-4 border-t border-gray-800 text-sm button">
          © Admin Dashboard
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 space-y-8">
        <header className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-800">
            Portfolio Administration
          </h1>
        </header>

        <div>
          {page === "Profile" && <Profile/>}
          {page === "About" && <AboutAdmin/>}
          {page === "Resume" && <ResumeAdmin/>}
          {page === "Works" && <WorksAdmin/>}
          {page === "Contact" && <ContactAdmin/>}
        </div>
      </main>
    </div>
  );
};

export default Admin;
