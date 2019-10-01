import React, { Component } from 'react';

class Add extends Component {
    state = {
        val: "",
        checked: false
    }
    handleChange = (e) => {
        this.setState({
            val: e.target.value
        })
    }
    handleCheck = (e) => {
        this.setState({
            checked: e.target.checked
        })
    }
    handleClick = () => {
        const { val, checked } = this.state
        if (val.length > 2) {
            const add = this.props.add(val, checked);
            if (add) {
                this.setState({
                    val: '',
                    checked: false
                })
            }
        } else {
            alert('wpisz więcej niż dwa znaki')
        }

    }
    render() {
        return (
            <div className="wrapNewTask">
                <input className='newTask' id="add" type="text" placeholder='new task' value={this.state.val} onChange={this.handleChange} />
                <label htmlFor="add"><p className="add" onClick={this.handleClick}><i className="fas fa-plus-square"></i></p></label>
                <div className="checkbox">
                    <input className="checkbox" type="checkbox" checked={this.state.checked} id="important" onChange={this.handleCheck} /><label htmlFor="important"> Ważne!</label>
                </div>
            </div>
        );
    }
}


export default Add;