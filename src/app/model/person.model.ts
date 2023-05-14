export class persona {
  id!: number;
  nombre: String;
  apellido: String;
  email: String;
  ocupacion: String;
  img_bg: String;
  about: string;
  nac: string;
  password: string;

  constructor(
    id: number,
    nombre: String,
    apellido: String,
    email: String,
    ocupacion: String,
    img_bg: String,
    about: string,
    nac: string,
    password: string
  ) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
    this.ocupacion = ocupacion;
    this.img_bg = img_bg;
    this.about = about;
    this.nac = nac;
    this.password = password;
  }
}
