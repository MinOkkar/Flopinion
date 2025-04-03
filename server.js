const express = require("express");
const app = express();

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

const movies = [
  {
    id: 1,
    title: "Inception",
    year: 2010,
    photo: "https://www.aceshowbiz.com/images/still/inception_poster19.jpg",
    description:
      "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O., but his tragic past may doom the project and his team to disaster.",
  },
  {
    id: 2,
    title: "The Matrix",
    year: 1999,
    photo:
      "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg",
    description:
      "When a beautiful stranger leads computer hacker Neo to a forbidding underworld, he discovers the shocking truth--the life he knows is the elaborate deception of an evil cyber-intelligence.",
  },
  {
    id: 3,
    title: "The Dark Knight",
    year: 2008,
    photo:
      "https://www.themoviedb.org/t/p/original/2Ka2nOtSlwuFlsHtrtfHKMIjldC.jpg",
    description:
      "Batman faces the Joker, a criminal mastermind who brings chaos and anarchy to Gotham, forcing him to confront his deepest fears and moral dilemmas.",
  },
  {
    id: 4,
    title: "Fight Club",
    year: 1999,
    photo:
      "https://movieswithaplottwist.com/wp-content/uploads/2016/03/fight-club.25541.jpg",
    description:
      "An insomniac office worker and a devil-may-care soap maker form an underground fight club that evolves into something much, much more.",
  },
  {
    id: 5,
    title: "Pulp Fiction",
    year: 1994,
    photo:
      "https://i.pinimg.com/originals/b3/4d/d7/b34dd71e2389ed3a37af5d7b7e9fedb2.jpg",
    description:
      "The lives of two hitmen, a boxer, a gangster's wife, and a pair of diner bandits intertwine in a series of violent and unexpected encounters.",
  },
];

let reviews = [
  {
    id: "2",
    name: "Okami",
    text: "Keanu Reeves looks confused, mumbles through lines, and somehow becomes a kung-fu messiah. The action scenes are cool for 1999, but let’s be honest—this is just a goth version of Alice in Wonderland for nerds who think trench coats are cool. Take the red pill? I’d rather take a nap.",
  },
  {
    id: "2",
    name: "Dave12",
    text: "What the hell ? is that Johnny Silverhand ?",
  },
  {
    id: "1",
    name: "Julia",
    text: "This movie is just Christopher Nolan playing 4D chess with himself while the audience sits there pretending they understand what’s going on. Wake me up when it’s over—oh wait, am I still dreaming? Who cares.",
  },
  {
    id: "3",
    name: "Bane",
    text: "People act like this is the greatest movie ever made just because Heath Ledger licked his lips a lot. Meanwhile, Batman spends half the movie losing fights and talking like he has a throat infection. If Gotham is depending on this guy, no wonder it’s always a crime-ridden mess.",
  },
  {
    id: "4",
    name: "Flappy219",
    text: "Oh wow, toxic masculinity and nihilism wrapped in a sweaty, shirtless Brad Pitt. So profound. If this movie were a person, it would be a dude who thinks not showering is a personality trait.",
  },
  {
    id: "4",
    name: "Vicent",
    text: "First rule of ****** is we dont talk about *******.",
  },
  {
    id: "5",
    name: "Nat23x",
    text: "Tarantino threw a bunch of random scenes in a blender and called it art. It’s just people talking about burgers, feet, and Bible quotes while shooting each other. Great, I guess? If you have ADHD and think saying ‘motherf**r’ every two minutes is peak cinema, this one’s for you.",
  },
];

app.get("/", (req, res) => {
  res.render("index", { movies });
});

// Form to submit a review
app.get("/review/:movieId", (req, res) => {
  const movieId = req.params.movieId;
  const movie = movies.find((m) => m.id == movieId); // Find the movie using the ID from the URL
  res.render("review", { movie });
});

// Handle form submission
app.post("/submit-review", (req, res) => {
  const movieId = req.body.movieId;
  const reviewText = req.body.review;
  const name = req.body.name;
  // Store review in the reviews array
  reviews.push({ id: movieId, name: name, text: reviewText });
  console.log(reviews);
  res.redirect("/reviews"); // Redirect to /reviews to display all reviews
});

// Display all reviews
app.get("/reviews", (req, res) => {
  res.render("reviews", { reviews, movies });
});

const CUSTOM_PORT = process.env.PORT || 3000;
app.listen(CUSTOM_PORT, "0.0.0.0", () => {
  console.log(`Server is running on port ${CUSTOM_PORT}`);
});
