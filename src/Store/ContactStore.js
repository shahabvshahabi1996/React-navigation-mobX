import { observable } from 'mobx';

class ContactStore {
    @observable contcts = null;
    @observable selectedContact = null;

    selectContact(index){
        this.selectedContact = index;
    }
}