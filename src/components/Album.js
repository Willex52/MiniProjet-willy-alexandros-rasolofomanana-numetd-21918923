import React from 'react';
import WEBSERVICE from '../constants/API';
import { getAllObject } from '../util/globalWeservice';

class Album extends React.Component {
  constructor(props) {
    super(props);
    this.initData = this.initData.bind(this);
  }

  initData(){
    this.setState({isLoading:true});
    getAllObject(WEBSERVICE.GETDATAMETALLICA).then((result)=>{
      console.log("--result-----------",result)
    }).catch((error)=>{
      console.log(error);
    }).finally(()=>{
      this.setState({isLoading:false});
    })
  }

  componentDidMount() {
    this.initData();
  }

  goToEdit = (testId) => {
    const { match } = this.props;
    this.props.history.push(`${match.url}/edit/`+testId);
  }
  
  render(){
    return (
      <div>
          tiel
      </div>
  );}
}

export default Album