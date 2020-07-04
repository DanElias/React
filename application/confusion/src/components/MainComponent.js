import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './MenuComponent';
import DishDetail from './DishDetailComponent';
import { DISHES } from '../shared/dishes';

class Main extends Component{
    constructor(props) {
        super(props);
        this.state = {
        dishes: DISHES,
        selectedDish: null
        };
    }

    onDishSelect(dishId) {
        this.setState({ selectedDish: dishId});
    }

    render(){
        return (
        <div className="Main">
            <Navbar dark color="primary">
            <div className="container">
                <NavbarBrand href="/">
                Ristorante Con Fusion
                </NavbarBrand>
            </div>
            </Navbar>
            {/*onClick se manda llamar cuando das click a un item en el MenuComponent*/}
            {/*el dishId se manda desde el MenuComponent y luego este onClick a su vez manda a llamar a onDishSelect*/}
            {/*Así logras que este MainComponent sea un Container component - maneja datos y cambios de estado*/}
            <Menu dishes={this.state.dishes} 
                onClick={(dishId) => this.onDishSelect(dishId)}/>
            {/*dish va a ser igual a el dish en la lista de Dishes que tenga el id del selected Dish*/}
            {/*Así regresamos todo el objeto y no solo el id que es igual al selectedDish -> BD*/}
            <DishDetail 
                dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]} />
        </div>
        );
    }
        
}

export default Main;
