import { User, signContact } from './index';
import {StorageContainer } from './storage'

//---
User.greet("wazaaaap");

//----
signContact({
  name: "Mariam",
  creditScore: 800,
  id: "12345",
});

//-------
const usernames = new StorageContainer<string>();
usernames.addItem("John");
usernames.addItem("Sarah");
console.log(usernames.getItem(1))

const jobsCount = new StorageContainer<number>();
jobsCount.addItem(15);
jobsCount.addItem(20);
console.log(jobsCount.getItem(0))

