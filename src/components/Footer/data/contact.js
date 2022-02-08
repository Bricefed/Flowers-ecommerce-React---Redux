import { v4 as uuidv4 } from "uuid";

export const dataContact = [
  {
    id: uuidv4(),
    link: "tel:0123456789",
    value: "01 23 45 67 89",
  },
  {
    id: uuidv4(),
    link: "mailto:exemple@mail.com",
    value: "exemple@mail.com",
  },
  {
    id: uuidv4(),
    link: "https://goo.gl/maps/j5nB2xwJwaNwKJ7L9",
    value: "Toulouse, France - 31000",
  },
];
