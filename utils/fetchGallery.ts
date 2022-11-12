export const fetchGallery = async () => {
  const res = await fetch(`${process.env.PUBLIC_BASE_URL}/api/gallery`);
};
