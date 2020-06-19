import React, { Component } from 'react';
import ContactItem from './ContactItem';
import $ from 'jquery';

class Contacts extends Component{

  deleteContact(id){
    this.props.onDelete(id);
  }
  editContact(id){
    var contacts = JSON.parse(localStorage.getItem('contactList'));
    let index = contacts.findIndex(x => x.id === id);
    $('#name').val(contacts[index].name);
    $('#mnum').val(contacts[index].mobileNumber);
    $('#id').val(contacts[index].id);
  }

  render() {
    let ContactItems;
    if(this.props.contacts){
      ContactItems = this.props.contacts.map(contact =>{
        return(
          <ContactItem onDelete={this.deleteContact.bind(this)} onEdit={this.editContact.bind(this)} key={contact.id} contact={contact}/>
        );
      });
    }
    return (
      <div className="pre-scrollable">
        {ContactItems}
      </div>
    );
  }
}

export default Contacts;
