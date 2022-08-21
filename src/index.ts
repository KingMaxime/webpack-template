import generateJoke from "./generateJoke";
import "./styles/styles.scss";
import LaughingImage from "./assets/laughing.svg";

const laughImage = document.getElementById("laughimg")! as HTMLImageElement;
laughImage.src = LaughingImage;

const jokeButton = document.getElementById("jokebtn")!;
jokeButton.addEventListener("click", generateJoke);

generateJoke();
