import React, { Component } from 'react';
import uuid from 'uuid';
import $ from 'jquery'

class AddContact extends Component{

  updateContact(){
    var name = $('#name').val(), mnum = $('#mnum').val(), id = $('#id').val();
    var newContact = {};
    if(name != '' && mnum != ''){
      newContact.id = id;
      newContact.name = name;
      newContact.mobileNumber = mnum;
      var contacts = JSON.parse(localStorage.getItem('contactList'));
      let index = contacts.findIndex(x => x.id === id);
      contacts.splice(index, 1);
      contacts.push(newContact);
      localStorage.contactList = JSON.stringify(contacts);
        $('.save').show('400');
        $('.update').hide('400');
        $('#name').val('');
        $('#mnum').val('');
      this.props.update(contacts);
    }
    else {
      alert('fields are required!');
    }
  }

  cancel(){
  $('#name').val('');
  $('#mnum').val('');
  $('#id').val('');
  $('.save').show('400');
  $('.update').hide('400');
  }

  AddController(e){
    e.preventDefault();
    if(this.refs.mnum.value !== '' && this.refs.name.value !== ''){
      if(localStorage['contactList']){
        var newContact = {
          id: uuid.v4(),
          name: this.refs.name.value,
          mobileNumber: this.refs.mnum.value
        };
        var localData = JSON.parse(localStorage.getItem('contactList'));
        localData.push(newContact);

        this.setState({contacts: localData}, function(){
          // console.log(this.state);
          this.props.appendContact(this.state.contacts)
        });
      }
      else{
        this.setState({newContact: {
          id: uuid.v4(),
          name: this.refs.name.value,
          mobileNumber: this.refs.mnum.value
        }}, function(){
          // console.log(this.state);
          this.props.addContact(this.state.newContact)
        });
      }
      this.refs.name.value = '';
      this.refs.mnum.value = '';
    }
    else {
      alert('values are required');
    }
  }

  render() {
    return (
      <div className="container">
      <div className="col-md-3"></div>
        <div className="form-group col-md-6 well">
        <h3>New Contact</h3>
          <form onSubmit={this.AddController.bind(this)}>
              <label>Name</label><br />
              <input type="text" ref="name" className="form-control" id="name"/><br />

              <label>Mobile #</label><br />
              <input type="text" ref="mnum" className="form-control" id="mnum"/><br />
              <input type='hidden' ref="id" id='id' />
              <div className="col-md-3 save">
                <input type="submit" value="Save Contact" className="btn btn-primary" id="save"/>
              </div>
          </form>
              <div className="update" style={{display:'none'}}>
                <input type="submit" value="Update" className="btn btn-warning" id="update" onClick={this.updateContact.bind(this)}/>
                <input type="submit" value="Cancel" className="btn" id="cancel" style={{marginLeft:'5px'}} onClick={this.cancel.bind(this)}/>
              </div>
        </div>
      </div>
    );
  }
}

export default AddContact;
