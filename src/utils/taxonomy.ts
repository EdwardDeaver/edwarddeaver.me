// Get Taxonomy With Counts
export const getTaxonomyWithCounts = (
  posts: { data: { [key: string]: any } }[],
  key: string
) => {
  // count occurrences of each item
  const itemCounts = posts.reduce((counts: { [key: string]: number }, post) => {
    if (Array.isArray(post.data[key])) {
      post.data[key].forEach((item) => {
        counts[item] = (counts[item] || 0) + 1;
      });
    }
    return counts;
  }, {});

  // flatten, remove duplicates, and sort by count in descending order
  const allItems = [
    ...new Set(
      posts
        .map((post) => Array.isArray(post.data[key]) ? post.data[key] : [])
        .flat()
    ),
  ].sort((a, b) => (itemCounts[b] || 0) - (itemCounts[a] || 0)); // Sort by count

  return { allItems, itemCounts };
};
