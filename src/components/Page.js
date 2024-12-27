import React from "react";
import { StoryblokComponent } from "@storyblok/react/rsc";

const Page = (params) => {
  // console.log(params, "params");

  return (
    <main>
      {params.blok.blocks.map((blok) => (
        <StoryblokComponent blok={blok} key={blok._uid} />
      ))}
    </main>
  );
};
export default Page;
