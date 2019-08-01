import React           from 'react';
import Frame           from '../components/_frame';
import Landing         from '../components/home/landing';
import HomeContent     from '../components/home/content';
import content         from '../helpers/content';
import { 
  fireNewPageView }    from '../helpers/tag-manager';

export default class Index extends React.Component {
  constructor(props){
    super(props);
    this.state = {
    };
  }

  componentDidMount(){
    fireNewPageView();
  }

  render() {
    return <Frame 
      hideHeader={true} 
      meta={content.index.meta}
      toggleModal={this.toggleModal} >
      <Landing />
      <HomeContent/>
    </Frame>
  }

};