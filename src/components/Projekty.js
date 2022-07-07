import {Component} from "react";
import data from "./data/carouselItems.json"

class Carousel extends Component {
    render() {
        let carouselItem = this.props.item;
        let output = Object.entries(data.carouselItems).map(([key, value]) => ({key, value}));
        let carousel_images = (images, id) => {
            let images_div = [];
            images.forEach((data) => {
                if(id === 7){
                    images_div.push(
                        <div className={"projekty-image-container"}>
                            {/*<a href={data.path}>*/}
                            <img src={data.path} alt={data.alt}/>
                            <p>{data.desc}</p>
                            {/*</a>*/}
                        </div>
                    )
                }else{
                    images_div.push(
                        <div className={"projekty-image-container"}>
                            {/*<a href={data.path}>*/}
                            <img src={data.path} alt={data.alt}/>
                            {/*</a>*/}
                        </div>
                    )
                }

            })
            return images_div;
        }
        let carousel_item = output.map((item) => {
            return (
                <div className={carouselItem === parseInt(item.key) ? "carousel-item active" : "carousel-item"}>
                    <div>
                        <h3>{item.value.nadpis}</h3>
                        <p>{item.value.description}</p>
                    </div>
                    <div className={"carousel-item-images"}>
                        {carousel_images(item.value.images,item.value.id)}
                    </div>
                </div>
            )
        })

        return (
            <div className={"carousel-container"}>
                {carousel_item}
            </div>
        );
    }
}

class CarouselNav extends Component {
    render() {
        let carouselItem = this.props.activeItem;
        let output = Object.entries(data.carouselItems).map(([key, value]) => ({key, value}));
        let something = output.map((item) => {
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
                <h2>NAŠE PROJEKTY</h2>
                <Carousel item={this.state.carouselItem}/>
                <CarouselNav changeCarouselItem={this.changeCarouselItem} activeItem={this.state.carouselItem}/>
            </div>
        );
    }
}

export default Projekty;
