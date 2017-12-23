import { observable } from 'mobx';
var data = [{
    name : 'shahab'
},{
    name : 'rana hamsarrii'
},{
    name : 'baba'
},{
    name : 'shahin'
},{
    name : 'maman'
}];
class ContactStore {
    @observable contacts = data; 
    @observable selectedContact = null;

    selectContact(index){
        this.selectedContact = index;
    }
}

var Store = new ContactStore;

export default Store;