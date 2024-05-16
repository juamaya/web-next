"use client";

import React, { useState, useEffect } from "react";


import ProductList from "@/app/componentes/ProductList";
import SpaceX from "@/app/componentes/spaceX";


const page = () => {
  return (
    <>
      
      <div>
        <hr />
        <SpaceX />
      </div>

      <div>
        <hr />
        <ProductList />
      </div>
    </>
  );
};

export default page;
