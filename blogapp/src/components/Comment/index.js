import React, { Component } from "react";
import { Mybutton } from "../MyButton";



export class Comment extends Component {
    constructor(props) {
        super(props);

        this.state= {
            publisher : "",
            comment : "",

        }
    }

    bichih = (e) => {
    //  console.log(e.target.value);
    this.setState({comment:e.target.value});
    }

    render() {
        return (

        <div className="bg-[#bbb5b5] flex flex-col w-[1000px] justify-center py-4 m-auto items-center mb-4">
            <p>{this.state.comment}</p>
            <br/>
            <div>Зохиогч нь: {this.props.zohiogch}</div>
            <textarea className="rounded-lg border border-slate-300 text-center  shadow-sm mb-6 " placeholder="Type for anything..." onChange={this.bichih}></textarea>
            <Mybutton 
            comment = {this.state.comment}
            btnName = "Комментоо бичээрэй" 
            btnText = "SAVE!"/> 

        </div>

        )
        
    
        
}
}