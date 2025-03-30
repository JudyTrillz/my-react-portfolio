export const getPortfolio = () => {
  const query = `*[_type == "portfolio"] | order(_createdAt desc){
        _id,
        title,
        description,
        github,
        live,
        image{
          asset->{
            url
          }
        }
      }`;
  return query;
};

export const getSpecificProject = (id) => {
  const query = `*[_type == "portfolio" && _id == "${id}"] {
  _id,
  title,
  description,
  github, live,
  image{
  asset -> {
  url}
  }
  }`;

  return query;
};
