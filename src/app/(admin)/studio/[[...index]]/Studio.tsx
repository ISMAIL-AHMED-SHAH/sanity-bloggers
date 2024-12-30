"use client";
import { NextStudio } from "next-sanity/studio";
import sanityConfig from "../../../../../sanity.config";

export const studioMetadata = {
    title: "Default Studio Title",
  };
  
  export const studioViewport = {
    interactiveWidget: "default-behavior",
  };
  

const Studio = () => {
  return <NextStudio config={sanityConfig} />;
};

export default Studio;