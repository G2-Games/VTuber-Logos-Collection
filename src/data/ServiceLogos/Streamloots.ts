import { Author, getCredit } from "../credits";

export const Streamloots: IBrand = {
  name: "Streamloots",
  logos: [
    {
      url: "https://raw.githubusercontent.com/SAWARATSUKI/ServiceLogos/main/Streamloots/Streamloots.png",
      credit: getCredit(Author.SAWARATSUKI),
      type: "default",
    },
  ],
};