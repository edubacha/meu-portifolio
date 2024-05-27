import { Injectable } from '@angular/core';
import { Profile } from '../models/profile';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor() { }

  getProfile(): Profile {
    var profile:  Profile = {
      email: 'edubacha@outlook.com',
      name: 'Eduardo Bacha',
      whatsApp: 'https://api.whatsapp.com/send?phone=5511997222303&text=Ol%C3%A1,%20estou%20no%20seu%20site%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es.',
      linkedIn: 'https://www.linkedin.com/in/eduardo-bacha-047971172/'
    }
    return profile; 
  }
}
