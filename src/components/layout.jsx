import React from "react";

const Layout = () => {
  return (
    <div className="flex">
      <sidebar className="w-[250px] bg-gray-100 top-0 bottom-0 h-[100vh]">
        <h1>Hello world</h1>
      </sidebar>
      <div className="flex-1">
        <h2>Content</h2>
      </div>
    </div>
  );
};

export default Layout;
