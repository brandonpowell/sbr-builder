"use client";

import { builder, Builder } from "@builder.io/react";
//import Footer from "./components/Footer/footer";
//This are the banners
import Nav from "./components/Navbar/navbar";
import "./components/eCommerces/Hero/HeroComponent";

//const YOUR_KEY = "472c17b44b99422098f586c3fbe4dc2b";
// Replace with your Public API Key.
builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY);


// import TripleColumnsComponent from "./components/eCommerces/Hero/TripleColumnsComponent";

Builder.registerComponent(Nav, {
  name: "Navigation",
  inputs: [
    {
      name: "UploadMobileLogo",
      type: "file",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2F472c17b44b99422098f586c3fbe4dc2b%2F32e07efa314c4b2382aabc318c1c84b8",
      defaultValue: "https://cdn.builder.io/api/v1/image/assets%2F472c17b44b99422098f586c3fbe4dc2b%2F32e07efa314c4b2382aabc318c1c84b8",
      friendlyName: "Upload Mobile Logo",
    },

        {
      name: "UploadDesktopLogo",
      type: "file",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2F472c17b44b99422098f586c3fbe4dc2b%2F32e07efa314c4b2382aabc318c1c84b8",
      defaultValue: "https://cdn.builder.io/api/v1/image/assets%2F472c17b44b99422098f586c3fbe4dc2b%2F32e07efa314c4b2382aabc318c1c84b8",
      friendlyName: "Upload Desktop Logo",
    },

    {
      name: "NavColumns",
      type: "list",
      label: "Columns",
      friendlyName: "Navigation Listing",
      subFields: [
        {
          name: "NavItem",
          type: "text",
        },
        {
          name: "NavUrl",
          type: "url",
        },
      ],
    },

    {
      name: "NavIcons",
      type: "list",
      label: "Columns",
      friendlyName: "Navigation Icons",
      subFields: [
        {
          name: "Icon",
          type: "file",
        },
        {
          name: "PageTitle",
          type: "text",
        },
        {
          name: "IconUrl",
          type: "url",
        },
      ],
    },
  ],
});

Builder.register("insertMenu", {
  name: "Hero Components",
  items: [
    {
      name: "Hero",
      type: "list",
      label: "Columns",
      subFields: [
        {
          name: "Hero Banner",
          type: "file",
          image: "https://cdn.builder.io/api/v1/image/assets%2F472c17b44b99422098f586c3fbe4dc2b%2Fd26072f68e064958b64475180a5dc5da",
          defaultValue: "https://cdn.builder.io/api/v1/image/assets%2F472c17b44b99422098f586c3fbe4dc2b%2Fd26072f68e064958b64475180a5dc5da",
        },
        {
          name: "Hero Title",
          type: "text",
          friendlyName: "Heading Title"
        },
      ],
    },
  ],
});

Builder.register("insertMenu", {
  name: "Hero Components",
  items: [
    {
      name: "Hero",
      type: "list",
      label: "Columns",
      subFields: [
        {
          name: "Hero Banner",
          type: "file",
          image: "https://cdn.builder.io/api/v1/image/assets%2F472c17b44b99422098f586c3fbe4dc2b%2Fd26072f68e064958b64475180a5dc5da",
          defaultValue: "https://cdn.builder.io/api/v1/image/assets%2F472c17b44b99422098f586c3fbe4dc2b%2Fd26072f68e064958b64475180a5dc5da",
        },
        {
          name: "Hero Title",
          type: "text",
          friendlyName: "Heading Title"
        },
      ],
    },
  ],
});


