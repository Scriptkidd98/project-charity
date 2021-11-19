import React, {Component} from 'react';
import Header from './Header';
import Body from './Body';

class HomePage extends Component {
    render() {
        return(
            <div>
                <Header></Header>
                <Body></Body>
            </div>
            
        );

    }
}
    
export default HomePage