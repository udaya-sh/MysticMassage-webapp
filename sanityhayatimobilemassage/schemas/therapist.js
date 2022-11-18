export default {
  name: "therapist",
  title: "Therapist",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
        maxLength: 100,
      },
    },

    {
      name: "poster",
      title: "Poster Image",
      type: "array",
      of: [{ type: "image" }],
    },
  ],
  preview: {
    select: {
      title: "name",
      media: "poster",
    },
  },
};
