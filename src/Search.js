import React, { Component,Fragment } from 'react'
class Search extends Component {
    state ={
        search:'',
    }
    handleChange(e) {
        this.setState({
            search:e.target.value,
        })
    }
    render() {
        const {library} = this.props
        let lib = []
        let searchKey = this.state.search.trim().toLocaleLowerCase()
        if(searchKey && searchKey.length > 0){
            lib = library.filter(i => {
                return i.name.toLocaleLowerCase().match(searchKey);
            })  
        }
             
        return (
        <Fragment>
               <div className="box">
                    <i className="fa fa-search" aria-hidden="true"></i>
                    <input type="text"
                    value={this.state.search} 
                    onChange={(e) => this.handleChange(e)}
                    />
                </div>
                <div className="list">
                    
                    <ul>
                        {
                            lib.map((item,index) => {
                            return <li key={index}>{item.name}</li>
                          
                            })
                        }
                    </ul>
                    
                </div>
        </Fragment>
        )
    }
}
export default Search;
