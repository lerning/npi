import React from 'react'

import ProposalList from './ProposalList'

class Proposals extends React.Component {
   constructor(props) {
     super(props)
     this.state = {
       proposals:[]
     }
   }

   componentWillMount() {
      fetch(`/api/proposals`, {
         credentials:'include'
      })
      .then(res => res.json())
      .then(proposals => {
         this.setState({
          proposals:proposals
         })
      })
   }
   render(){
      if (this.state.proposals.length == 0){
         return (
            <div className="container propMain">
               <div className="row">
                  <div className="componentTitle"> Proposals</div>
               </div>
            </div>
         )

      }

      return (
      <div>
         <div className="container propMain">
            <div className="row">
               <div className="componentTitle"> Proposals</div>
            </div>
            <ProposalList proposals={this.state.proposals}/>
         </div>
      </div>
      )
   }

}

export default Proposals
