export const image_ui = {
  format: (val: string) => {
    let url;
    if (val?.startsWith("http")) {
      url = val.replace('/assets/', '/');

    } else if (val?.startsWith("/src//src/")) {
      url = val?.replace("/src//src/", "/src/");

    } else {
      url = val?.replace(val, `/src/${val}`);
    }
    return url;
  },
  parse: (val: string) => {
    let url;
    if (val?.startsWith("http")) {
      url = val.replace('/assets/', '/');

    } else if (val?.startsWith("/src//src/")) {
      url = val?.replace("/src//src/", "");
      
    } else {
      url = val?.replace("/src/", "");
    }
    return url;
  }
}