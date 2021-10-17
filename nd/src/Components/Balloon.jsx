import { Component } from 'react';

class Balloon extends Component {
    constructor() {
        super()
        this.state = {
            color: '#'+Math.floor(Math.random()*16777215).toString(16),
        };

    }

    click = () => {
        this.setState({
            color: 'none',
        })
        // console.log('labas');
    }


    render () {
        return (
            <>
                <div className='balloon' onClick={this.click} style={{background: this.state.color}}></div>
            </> 
        )
    }
}


    //     return (
//         <>
//         <div className='balloon' style={{background: props.color}}></div>
//         </> 
//     );
// }
export default Balloon;