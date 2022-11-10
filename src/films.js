// const movies = require('./data.js');

// Exercise 1: Get the array of all directors.
function getAllDirectors(array) {
	let result = array.map((movie) => movie.director);
	console.log('EXERCICE 1 ->', result);
	return result;
}

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(array, director) {
	let moviesFromDirector = array.filter((movie) => movie.director === director);
	return moviesFromDirector;
}

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(array, director) {
	let moviesFromDirector = getMoviesFromDirector(array, director); 	// Crea un array nou (moviesFromDirector) amb les pelis del director.
	let scoreMoviesDirector = moviesFromDirector.reduce((acc, item) => acc + item.score, 0); 	// Suma les notes de totes les pelis de l'array nou començat per la posició 1 (0).
	let moviesAverageDirector = Number((scoreMoviesDirector / moviesFromDirector.length).toFixed(2)); 	// Converteix en número, divideix la nota entre les pelis (per fer la mitja) i fes que el núero tingui 2 decimals.
	return moviesAverageDirector;
}

// Exercise 4:  Alphabetic order by title

function orderAlphabetically(array) {
	let movieTitleList = array.map((movie) => movie.title); 	// Fa un array amb els títols de les pelis.
	movieTitleList.sort();		// Endreça alfabeticament els elements de l'array.

	if (movieTitleList.length > 20) {		// Si la mida de l'array és major a 20.
		let top20movies = movieTitleList.slice(0, 20);		// Recorre l'array i afegeix de la posició 0 a la 20 al nou array (top20movies).
		return top20movies;
	} else {
		return movieTitleList; 		// Si és té menys de 20 elements, retorna la llista base (ja endreçada).
	}
}

// Exercise 5: Order by year, ascending
function orderByYear() {}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory() {}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes() {}

// Exercise 8: Get the best film of a year
function bestFilmOfYear() {}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
	module.exports = {
		getAllDirectors,
		getMoviesFromDirector,
		moviesAverageOfDirector,
		orderAlphabetically,
		orderByYear,
		moviesAverageByCategory,
		hoursToMinutes,
		bestFilmOfYear
	};
}
