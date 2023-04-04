/* Dadu un array de objetos de películas /título, director, vista) mostrar todas las películas
indicando cuál has visto y cuál no. */

const movies = [
  {
    name: "Titanic",
    director: "James Cameron",
    viewed: true,
  },
  {
    name: "Avatar",
    director: "James Cameron",
    viewed: false,
  },
  {
    name: "Pulp Fiction",
    director: "Quentin Tarantino",
    viewed: true,
  },
];

const viewedMovies = [];
const unviewedMovies = [];

/* const showMovies = (arrayMovies) => {
  arrayMovies.forEach((ele) => {
    let text = ele.viewed ? "Ya la viste" : "No la viste";

    console.log(ele.name);
    console.log(ele.director);
    console.log(text);
  });
};

showMovies(movies); */

const separateViewedMovies = (arrayMovies) => {
  arrayMovies.forEach((ele) => {
    ele.viewed
      ? viewedMovies.push(
          `Ya viste: ${ele.name} de ${ele.director}`
        )
      : unviewedMovies.push(
          `Te falta por ver: ${ele.name} de ${ele.director}`
        );
  });
};

const printMovies = (arrayMovies) => {
  separateViewedMovies(arrayMovies);

  viewedMovies.forEach((ele) => console.log(ele));
  unviewedMovies.forEach((ele) => console.log(ele));
};

printMovies(movies);
