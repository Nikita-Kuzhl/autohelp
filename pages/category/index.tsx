import { NextPage } from "next";
import React from "react";
import Category from "../../components/Category";
import MainLayout from "../../layouts/MainLayout";

const category:NextPage = () => {
  return (
    <MainLayout>
      <Category />
    </MainLayout>
  );
};

export default category;
