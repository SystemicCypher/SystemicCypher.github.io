import React, {Component} from 'react';
import '../styles/Projects.css';

export class Project extends Component{  
    constructor(props){
        super(props);
        this.linkHandler = this.linkHandler.bind(this);
    }

    linkHandler(e){
        window.location.href='http://github.com/SystemicCypher/' + e.target.value;
    }

    render(){
        return(
            <div className='contents'>
               <div id='molecules' onClick={this.linkHandler} value={'account-framework-api'}>
                   <h2>Neural Molecule Fingerprinter</h2>
                   <p>
                       abcdefghijklmnop
                   </p>
               </div>
               <div id='peercoin'>
                   <h2>PeerCoin</h2>
               </div>
               <div id='scheduler-app'>
                    <h2>Scheduled</h2>
                    <p>
                        abcdefg
                    </p>
               </div>
            </div>
        );
    }
}