import React from 'react';

export class Pending extends React.Component{
    render(){
        return(
            <div className="pending">
                <ol type="1">
                    <li>Data</li>
                    <li>Gave</li>
                    <li>Got</li>
                    <li>Position</li>
                </ol>
            </div>
        );
    }
}