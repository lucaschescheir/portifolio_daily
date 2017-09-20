import React, { Component } from 'react';
import Star from './star';

class StarBar extends Component {
    constructor(props) {
        super(props);
        this.state= {
            count: '',
        }
    }
        handleSelect(e) {
            this.setState({
                count: e,

            })
        }
        handleLeave(e){
            this.setState({
                count: e,
            })
        }
    render(){
        return(
            <div id="star">
                <Star star={ this.state.count > 0} onLeave={()=>this.handleLeave(0)}
                    onSelect={(e) => this.handleSelect(1)} />
                <Star star={ this.state.count > 1} onLeave={()=>this.handleLeave(0)}
                    onSelect={(e) => this.handleSelect(2)} />
                <Star star={ this.state.count > 2} onLeave={()=>this.handleLeave(0)}
                    onSelect={(e) => this.handleSelect(3)} />
                <Star star={ this.state.count > 3} onLeave={()=>this.handleLeave(0)}
                    onSelect={(e) => this.handleSelect(4)} />
                <Star star={ this.state.count > 4 } onLeave={()=>this.handleLeave(0)}
                    onSelect={(e) => this.handleSelect(5)} />
            </div>
        )
    }
}

export default StarBar;
