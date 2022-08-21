function generateJoke() {
  fetch("https://icanhazdadjoke.com/", {
    headers: { Accept: "application/json" },
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      document.getElementById("joke")!.innerHTML = data.joke;
    });
}

export default generateJoke;
