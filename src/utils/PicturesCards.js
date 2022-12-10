import blendin from "../static/img/Blendin_Blandin_appearance.png";
import bud from "../static/img/Bud_Gleeful_appearance.png";
import candy from "../static/img/candy_chiu.png";
import deputy from "../static/img/Deputy_Durland_appearance.png";
import dipper from "../static/img/Dipper_1.png";
import grenda from "../static/img/Grenda.png";
import mabel from "../static/img/Mabel-pines.png";
import robbie from "../static/img/Robbie_appearance.png";
import stanford from "../static/img/Ford_Pines.webp";
import stanley from "../static/img/StanleyPines.png";
import toby from "../static/img/Toby_Determined_appearance.png";
import wendy from "../static/img/Wendy_Corduroy.png";
import unqid from "unqid";

const Pictures = [
  { name: "Mabel", img: mabel, id: unqid() },
  { name: "Dipper", img: dipper, id: unqid() },
  { name: "Wendy", img: wendy, id: unqid() },
  { name: "Stanley", img: stanley, id: unqid() },
  { name: "Stanford", img: stanford, id: unqid() },
  { name: "Robbie", img: robbie, id: unqid() },
  { name: "Grenda", img: grenda, id: unqid() },
  { name: "Deputy", img: deputy, id: unqid() },
  { name: "Bud", img: bud, id: unqid() },
  { name: "Toby", img: toby, id: unqid() },
  { name: "Candy", img: candy, id: unqid() },
  { name: "Blendin", img: blendin, id: unqid() },
];

export default Pictures;
