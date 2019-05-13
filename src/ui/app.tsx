import * as React from "react";
import * as ReactDOM from 'react-dom';

export class App extends React.Component{
    public static init(element: HTMLElement){
        ReactDOM.render(<App />, element);
    }

    constructor(props:{}){
        super(props);
        this.state = {
            title:"React app 1"
        };
    }

    public render() {
        return (
            <div className="app">
                <h4>Hello</h4>
            </div>
        );
    }
}