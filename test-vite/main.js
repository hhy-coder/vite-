import {count} from './counter'
import './index.css'

console.log(count);

fetch('api/users',{
  methods:"post"
}).then(data => {
  console.log(data);
}).catch(error =>{
  console.log(error);
})