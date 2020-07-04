import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle } from 'reactstrap';


class Menu extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        const menu = this.props.dishes.map((dish) => {
            return (
              <div key={dish.id} className="col-12 col-md-5 m-1">
                {/*el metodo onClick de props se hereda de MainComponent*/}
                {/*Aqui al dar click a un elemento mando a llamar a la funcion onClick de MainComponent*/}
                {/*Con eso logras que este component sea solo Presentational porque no cambia estados directamente*/}
                {/*Delegas los cambios en estados y datos al Main Component*/}
                 <Card  onClick={() => this.props.onClick(dish.id)}>
                    <CardImg width="100%" src={dish.image} alt={dish.name} />
                    <CardImgOverlay>
                        <CardTitle>{dish.name}</CardTitle>
                    </CardImgOverlay>
                </Card>
              </div>
            );
        });

        return (
            <div className="container">
                <div className="row">
                    {menu}
                </div>
            </div>
        );
    }
}

export default Menu;