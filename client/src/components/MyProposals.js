import React from 'react'

import MyProposalList from './MyProposalList'

class MyProposals extends React.Component {
   constructor(props) {
     super(props)
     this.state = {
       proposals:[]
     }
   }

   componentWillMount() {
      fetch(`/api/proposals/4`, {
         credentials:'include'
      })
      .then(res => res.json())
      .then(proposals => {
         console.log('my props', proposals);
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
                  <div className="componentTitle"> My Proposals</div>
                  <button className="btn newBtnMy  light-blue darken-2">New Proposal</button>
               </div>
            </div>
         )
      }
      return (
         <div className="container propMain">
            <div className="row">
               <div className="componentTitle"> My Proposals</div>
               <button className="btn newBtnMy  light-blue darken-2">New Proposal</button>
            </div>
            <MyProposalList proposals={this.state.proposals}/>
         </div>
      )

   }

}

export default MyProposals