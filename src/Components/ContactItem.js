import React, { Component } from 'react';
import image from './unknown.jpg';
import $ from 'jquery';

class ContactItem extends Component{

  deleteContact(id){
    this.props.onDelete(id);
  }
  editContact(id){
    $('.save').hide('400');
    $('.update').show('400');
    // document.getElementById('save').style.display = 'none';
    // document.getElementById('update').style.display = 'block';
    this.props.onEdit(id);
  }

  render() {
    return (
      <div>
        <div className="col-md-1" />
        <div className="container col-md-5">
              <div className="alert alert-success col-md-10">
                <div className="col-sm-3" style={{zIndex:1}}>
                  <img src={image} alt="logo" className="img" style={{borderRadius:'6px',height:'110px', width:'110px', marginLeft:'-13px'}}/>
                </div>
                <div className="alert alert-warning col-sm-9">
                  <div className="col-sm-8">
                    <div>
                      <strong>{this.props.contact.name}</strong> <br />
                    </div>
                    <div>
                      {this.props.contact.mobileNumber}
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <a className="glyphicon glyphicon-edit btn btn-success" onClick={this.editContact.bind(this, this.props.contact.id)}></a>
                    <a className="glyphicon glyphicon-trash btn btn-danger" onClick={this.deleteContact.bind(this, this.props.contact.id)}></a>
                  </div>
                </div>
              </div>
        </div>
      </div>
    );
  }
}

export default ContactItem;
