import { Component } from 'react';


export default class extends Component {

    constructor() {
        super();
        this.state = {
            tasks: [{ task: 'check mails', id: 1 }, { task: 'Read about', id: 2 }, { task: 'complete', id: 3 }],
            currTasks: ''
        };
    }

    //yha se input value aayegi
    handleChange = (e) => {
        console.log(e.target.value);
        this.setState({
            currTask: e.target.value
        });
    };

    //define handle submit
    handleSubmit = () => {
        this.setState({
            /*task m change spread krwa k krenge
             /*spread is used for - react m jo bhi change hoga vo hoga immutable chnage hoga it mean
              jb vo change ho jayega tb use new address provide kia jayega*/
            tasks: [...this.state.tasks, { task: this.state.currTask, id: this.state.tasks.length + 1 }],

            //current state ko clear karne k liee...!!
            currTask: ''
        });
    };

handleDelete = (id) => {
    let narr = this.state.tasks.filter((taskObj) => {
        return taskObj.id != id;
    })

    this.setState({
        tasks: [...narr]
    })
}

render()
{
    console.log('render');
    return (
        <div>
            <input type="text" value={this.state.currTask} onChange={this.handleChange}/>
            <button onClick={this.handleSubmit}>Submit</button>
            <ul>
                {
                this.state.tasks.map(function(taskObj) 
                {
                    return (

                        <li key={taskObj.id}>
                            <p>{taskObj.task}</p>
                            <button onClick={() => this.handleDelete(taskObj.id)}>Delete</button>

                        </li>
                        )
                }
                .bind(this)

                )
            }
            </ul>
        </div>
    );
  }
}
