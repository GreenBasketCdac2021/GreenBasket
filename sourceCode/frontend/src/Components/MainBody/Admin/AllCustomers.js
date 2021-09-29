import React, { Component  } from 'react';
import { Container,Row,Col } from 'react-bootstrap';
import store from '../../../store';
import Footer from '../../Dashboard/Footer';
import Header from '../../Dashboard/Header';

class AllCustomers extends Component  {
    constructor(props){
        super(props)
        this.state={
            customers:[]
        }
    }
    componentDidMount(){
        fetch('http://localhost:8080/user/customer')
            .then(data => {
                return data.json();
            })
            .then(post => this.setState({customers:post}))
    }
    render(){
        const AllCustomers=this.state.customers.map((customer,index)=>(
            <Row key={customer.id}className="bg-dark mb-2 text-center text-light">
                <Col>{index+1}</Col>
                <Col>{customer.firstName}</Col>
                <Col>{customer.lastName}</Col>
                <Col xs={4}>{customer.email}</Col>
                <Col>{customer.phone}</Col>
                <Col>{customer.address}</Col>
            </Row>
        ))
        return (
            <div>
                    {store.getState().reduxStore.auth.role==="ADMIN"?
                    
            <div>
                    <Header/>
                        <div className="bg-secondary text-center">
                            <h1 className="bg- text-info">Customer Details</h1>
                        </div>
                        <div className="bg-secondary" style={{height:'100vh'}}>
                            <Container cellSpacing={2}>
                            <Row className="bg-light mb-2 text-center">
                                <Col><b>Index</b></Col>
                                <Col><b>FirstName</b></Col>
                                <Col><b>LastName</b></Col>
                                <Col xs={4}><b>Email</b></Col>
                                <Col><b>Phone</b></Col>
                                <Col><b>Address</b></Col>
                            </Row>
                                {AllCustomers}
                            </Container>
                        </div>
                    <div style={{marginTop:"5vh"}}>
                    <Footer/>
                    </div>
                </div>
                    :window.location.replace("/")}
        </div>
        );
                }
}
export default AllCustomers;
