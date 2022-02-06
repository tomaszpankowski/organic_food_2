import React,{Component} from "react";
import Container from "../../node_modules/react-bootstrap/Container";
import FoodS1 from "../components/food-s1";
import FoodS2 from "../components/food-s2";
import FoodS3 from "../components/food-s3";

class Food extends Component{
    render(){
        return(        
            <Container fluid className="minh-footer-adj p-0">
                <FoodS1/>
                <FoodS2/>
                <FoodS3/>
            </Container>    
        );
    }
}

export default Food;