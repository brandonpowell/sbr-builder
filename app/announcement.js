// pages/your-page.jsx
import { BuilderComponent, builder } from '@builder.io/react';

// Replace with your Public API Key.
builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY);

export async function getStaticProps({ params }) {
  const urlPath = '/' + (params?.page?.join('/') || '');
  
  const announcement = await builder
    .get('announcement-bar', { 
      userAttributes: { 
        // This wil allow you to target different announcement bars
        // to different URL paths. Optionally add other properties to target
        // on here too
        urlPath 
      } 
    })
    .toPromise();

  return {
    props: {
      announcement: announcement || null,
    },
  };
}

export default function Page({ announcement }) {
  return (
    <>
      <BuilderComponent model="announcement-bar" content={announcement} />
    </>
  );
}