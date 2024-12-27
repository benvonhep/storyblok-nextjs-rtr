import { StoryblokComponent } from "@storyblok/react/rsc";

export const Grid = (params) => {
  return (
    <section>
      <h2>{params.blok.headline}</h2>
      {params.blok.items.map((blok) => (
        <StoryblokComponent blok={blok} key={blok._uid} />
      ))}
    </section>
  );
};
