export class User {
  id;
  email;
  name;
  birth;
  gender;

  constructor({ id, email, name, birth, gender }) {
    this.id = id;
    this.email = email;
    this.name = name;
    this.birth = birth;
    this.gender = gender;
  }
}
