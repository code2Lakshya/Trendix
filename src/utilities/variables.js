export const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjZTJjMDFiOGU2MjY2ZmVhZTM2MDY3ZmM2N2JjY2IwNSIsInN1YiI6IjY1MTJiMWNmMjZkYWMxMDBjYWJiZTlkNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.cnsAj7SKoo5bycQKCWlqmEFm9nbkCztaRQUcbEcrkhg'
    }
  };
 export const base_url='https://api.themoviedb.org/3';
 export const img_url='https://image.tmdb.org/t/p/original';
 export const month=['','Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
export const sortbyData = [
  { id: 1, value: "popularity.desc", label: "Popularity Descending" },
  { id:2, value: "popularity.asc", label: "Popularity Ascending" },
  { id:3, value: "vote_average.desc", label: "Rating Descending" },
  { id:4, value: "vote_average.asc", label: "Rating Ascending" },
  { id:5,
      value: "primary_release_date.desc",
      label: "Release Date Descending",
  },
  { id:6, value: "primary_release_date.asc", label: "Release Date Ascending" },
  {  id:7,value: "original_title.asc", label: "Title (A-Z)" },
];