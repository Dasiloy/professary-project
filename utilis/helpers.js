export const PaginateBlogs = blogs => {
  const itemsPerPage = 5;
  const itemsPage = Math.ceil(
    blogs.length / itemsPerPage
  );
  const newBlogs = Array.from(
    { length: itemsPage },
    (_, index) => {
      const start = index * itemsPerPage;
      return blogs.slice(start, start + itemsPerPage);
    }
  );
  return newBlogs;
};
