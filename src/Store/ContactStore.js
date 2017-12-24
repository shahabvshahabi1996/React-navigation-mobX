import { observable } from 'mobx';
var data = [{
    givenName : 'shohari'
},{
    givenName : 'hamsarrii'
},{
    givenName : 'baba'
},{
    givenName : 'shahin'
},{
    givenName : 'maman'
}];
class ContactStore {
    @observable contacts = []; 
    @observable selectedContact = null;

    selectContact(index){
        this.selectedContact = index;
    }
}

var Store = new ContactStore;

export default Store;