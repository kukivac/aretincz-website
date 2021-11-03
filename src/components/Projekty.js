import {Component} from "react";
import data from "./data/data.json"

class Carousel extends Component {
    render() {
        let carouselItem = this.props.item;
        let output = Object.entries(data.carouselItems).map(([key, value]) => ({key, value}));
        let something = output.map((item, i) => {
            return (
                <div className={carouselItem === parseInt(item.key) ? "carousel-item active" : "carousel-item"}>
                    <div>
                        <h3>{item.value.nadpis}</h3>
                        <p>{item.value.description}</p>
                    </div>
                    <div>
                        <img src={"images/" + item.value.image} alt={"carousel item"}/>
                    </div>
                </div>
            )
        })
        return (
            <div className={"carousel-container"}>
                {something}
            </div>
        );
    }
}

class CarouselNav extends Component {
    render() {
        let carouselItem = this.props.activeItem;
        let output = Object.entries(data.carouselItems).map(([key, value]) => ({key, value}));
        let something = output.map((item, i) => {
            return (
                <div className={carouselItem === parseInt(item.key) ? "carousel-nav-item selected" : "carousel-nav-item"} onClick={this.props.changeCarouselItem} data-id={item.key}>
                    {item.key}
                </div>
            )
        })
        return (
            <div className={"carousel-nav-container"}>
                {something}
            </div>
        );
    }
}

class Projekty extends Component {
    constructor(props) {
        super(props);
        this.state = {
            carouselItem: 1
        }
        this.changeCarouselItem = this.changeCarouselItem.bind(this)
    }

    changeCarouselItem(event) {
        this.setState(
            {
                carouselItem: parseInt(event.target.getAttribute("data-id"))
            }
        );
    }

    render() {
        return (
            <div className={"projekty-container"} id={"projekty"}>
                <h1>NAŠE PROJEKTY</h1>
                <Carousel item={this.state.carouselItem}/>
                <CarouselNav changeCarouselItem={this.changeCarouselItem} activeItem={this.state.carouselItem}/>
            </div>
        );
    }
}

export default Projekty;
