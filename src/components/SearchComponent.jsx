import { formatDate } from "@src/utils/formatDate";
import React, { useState } from 'react';

const SearchComponent = ({ posts, children }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const imageSrcString = children.props.value.toString();
  const extractSrcValues = (inputString) => {
    const srcRegex = /<img[^>]+src="([^">]+)"/g;
    const altRegex = /<img[^>]+alt="([^">]+)"/g;
    const srcValues = [];
    let match;
    while ((match = srcRegex.exec(inputString)) !== null) {
      srcValues.push({ src: match[1], slug: altRegex.exec(inputString)[1] });
    }
    return srcValues;
  };

  const srcValues = extractSrcValues(imageSrcString);
  const processedResults = posts.map((post) => {
    const matchingSrc = srcValues.find(item => item.slug === post.slug);
    if (matchingSrc) {
      return { ...post, imgSrc: matchingSrc.src.replace("&amp;", "&") };
    }
    return post;
  });

  const searchResults = processedResults.filter((searchResult) => {
    if (searchTerm === "") {
      return "";
    } else if (
      searchResult.data.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      searchResult.data.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      searchResult.body.toLowerCase().includes(searchTerm.toLowerCase()) ||
      searchResult.data.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase())) ||
      searchResult.data.categories.some((category) => category.toLowerCase().includes(searchTerm.toLowerCase()))
    ) {
      return searchResult;
    }
  });

  const resetSearch = () => {
    setTimeout(() => {
      setSearchTerm("");
      document.getElementById("search-input").value = "";
    }, 300);
  };

  return (
    <>
      <div className="flex items-center gap-3 mb-6 sm:mb-8">
        <input
          type="text"
          id="search-input"
          placeholder="Type to search blog.."
          aria-label="search-query"
          onChange={(e) => {setSearchTerm(e.target.value)}}
          autoComplete="off"
        />
        <div id="search-close" className="hover:scale-110 transition-all">
          <svg onClick={resetSearch} className="text-primary dark:text-primary-dark" xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 24 24" strokeWidth="1.75" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round" suppressHydrationWarning><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M18 6l-12 12" /><path d="M6 6l12 12" /></svg>
        </div>
      </div>

      {searchTerm && 
        (searchResults.length === 0 ? (
          <div className="mb-6 sm:mb-8 pb-6 sm:pb-10 border-b border-dark/5 dark:border-[#313846] h4 font-primary text-black dark:text-white">
            No results for "<span className="text-primary dark:text-primary-dark">{searchTerm}</span>"
          </div>
        ) : (
          <>
            <div className="mb-6 h4 font-primary text-black dark:text-white">
              Results for "<span className="text-primary dark:text-primary-dark">{searchTerm}</span>"
            </div>
            <div className="search-results grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-y-7 gap-x-4 sm:gap-7 mb-10 pb-10 overflow-x-hidden overflow-y-auto px-1 sm:px-3 -mx-1 sm:-mx-3 border-b border-dark/10 dark:border-[#313846] empty:hidden">
              {searchResults.map((post, index) => (
                <a className="group" title={post.data.title} href={`/blog/${post.slug}`} key={index}>
                  {post.data.image && (
                    <img
                      className="w-full h-auto transition-all duration-300 rounded-md md:group-hover:scale-[1.02] bg-[#f4f0ed] dark:bg-[#2f3644] aspect-video object-cover"
                      src={post.imgSrc}
                      alt={post.data.title}
                      width={190}
                      height={98}
                      loading="lazy"
                    />
                  )}
                  <span className="flex items-center gap-x-1 mt-4 mb-1 text-sm">
                    <svg className="-translate-y-px" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" suppressHydrationWarning><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 5m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" /><path d="M16 3l0 4" /><path d="M8 3l0 4" /><path d="M4 11l16 0" /><path d="M8 15h2v2h-2z" /></svg>
                    {formatDate(post.data.date)}
                  </span>
                  <p className="sm:text-lg font-primary line-clamp-3 leading-snug group-hover:underline">
                    {post.data.title}
                  </p>
                </a>
              ))}
            </div>
          </>
        ))
      }
    </>
  );
};

export default SearchComponent;