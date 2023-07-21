import { menu } from '../Data/menu.js'
import { Carousel } from "./Carousel.js";

export default function About() {
    return (
        <div className="content">
            <Carousel data={menu} />
        </div>
    )
}