// components/ui/GenerateSlug.js
const GenerateSlug = (title) => {
  return title
    .toLowerCase()                           // Convert to lowercase
    .replace(/[^\w\s-]/g, '')                // Remove any symbols (except spaces and hyphens)
    .replace(/\s+/g, '-')                    // Replace spaces with hyphens
    .trim();                                 // Remove any leading/trailing spaces
};

export default GenerateSlug;
