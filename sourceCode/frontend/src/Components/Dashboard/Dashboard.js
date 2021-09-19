import React from 'react';
import Header from './Header';
import Footer from './Footer';
import MainBody from '../MainBody/MainBody';

class Dashboard extends React.Component {
    render(){    
        return (
                <div>     
                    <Header/>
                        <MainBody/>
                    <Footer/>
                </div>
        );
    }
}
export default Dashboard;


