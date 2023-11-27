"use client"

import React, { useEffect, useState } from "react";
import { BuilderComponent, builder, useIsPreviewing } from "@builder.io/react";
import Navbar from "../components/Navbar/navbar";
import FourOhFour from "./404";

// Put your API key here
builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY);

// set whether you're using the Visual Editor,
// whether there are changes,
// and render the content if found
export default function CatchAllRoute() {
  const isPreviewingInBuilder = useIsPreviewing();
  const [notFound, setNotFound] = useState(false);
  const [content, setContent] = useState(null);

  // get the page content from Builder
  useEffect(() => {
    async function fetchContent() {
      try {
        const content = await builder
          .get("page", {
            url: window.location.pathname,
          })
          .promise();

        setContent(content);
        setNotFound(!content);

        // if the page title is found,
        // set the document title
        if (content?.data.title) {
          document.title = content.data.title;
        }
      } catch (error) {
        console.error("Error fetching content:", error);
        setNotFound(true);
      }
    }
    fetchContent();
  }, []);

  // If no page is found, return
  // a 404 page from your code.
  // The following hypothetical
  // <FourOhFour> is placeholder.
  if (notFound && !isPreviewingInBuilder) {
    return <FourOhFour />;
  }

  // return the page when found
  return (
    <>
      {/* Render the Builder page */}
      <Navbar />
      <BuilderComponent model="page" content={content} />
    </>
  );
}
