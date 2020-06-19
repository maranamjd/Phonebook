import React, { Component } from 'react';
import Contacts from './Components/Contacts';
import AddContact from './Components/AddContact';

class App extends Component {

componentWillMount(){
this.setState({contacts: JSON.parse(localStorage.getItem('contactList'))});
}

  appendController(contacts){
    this.setState({contacts: contacts});
    localStorage.contactList = JSON.stringify(contacts);
  }

  AddController(contact){
    var contacts = [];
    contacts.push(contact);
    this.setState({contacts: contacts});
    localStorage.contactList = JSON.stringify(contacts);
  }

  deleteController(id){
      var contacts = JSON.parse(localStorage.getItem('contactList'));
      let index = contacts.findIndex(x => x.id === id);
      contacts.splice(index, 1);
      localStorage.contactList = JSON.stringify(contacts);
      this.setState({contacts: contacts});
  }

  updateController(contacts){
    this.setState({contacts: contacts});
  }

  render() {
    return (
      <div className="container">
        <AddContact addContact={this.AddController.bind(this)} appendContact={this.appendController.bind(this)} update={this.updateController.bind(this)}/>
        <Contacts contacts={this.state.contacts} onDelete={this.deleteController.bind(this)}/>
      </div>
    );
  }
}

export default App;
