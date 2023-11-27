"use client";
import { Builder } from "@builder.io/react";
//import Footer from "./components/Footer/footer";
//This are the banners
import Nav from "./components/Navbar/navbar";

//const YOUR_KEY = "472c17b44b99422098f586c3fbe4dc2b";
// Replace with your Public API Key.
builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY);


// import TripleColumnsComponent from "./components/eCommerces/Hero/TripleColumnsComponent";

Builder.registerComponent(Nav, {
  name: "Navigation",
  inputs: [
    {
      name: "UploadLogo",
      type: "file",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2F472c17b44b99422098f586c3fbe4dc2b%2F32e07efa314c4b2382aabc318c1c84b8",
      defaultValue: true,
    },
    {
      name: "NavColumns",
      type: "list",
      label: "Columns",
      defaultValue: true,
      itemProps: [
        {
          name: "NavTitle",
          type: "list",
          defaultValue: true,
        },
        {
          name: "NavItem",
          type: "text",
          defaultValue: true,
        },
        {
          name: "NavItem",
          type: "url",
          defaultValue: true,
        },
      ],
    },
    {
      name: "NavIcons",
      type: "list",
      label: "Columns",
      defaultValue: true,
      itemProps: [
        {
          name: "Icon",
          type: "file",
          defaultValue: true,
        },
        {
          name: "IconUrl",
          type: "url",
          defaultValue: true,
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
      defaultValue: true,
      itemProps: [
        {
          name: "Hero Banner",
          image: "https://cdn.builder.io/api/v1/image/assets%2F472c17b44b99422098f586c3fbe4dc2b%2Fd26072f68e064958b64475180a5dc5da",
          type: "file",
        },
      ],
    },
    {
      name: "Double Columns",
      itemProps: [
        {
          name: "Double Banner",
          type: "file",
        },
      ],
    },
    {
      name: "Triple Columns",
      itemProps: [
        {
          name: "Double Banner",
          type: "file",
        },
      ],
    },
    {
      name: "Dynamic Columns",
      itemProps: [
        {
          name: "Double Banner",
          type: "file",
        },
      ],
    },
  ],
});

