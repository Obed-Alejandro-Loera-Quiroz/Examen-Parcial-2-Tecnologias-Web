export interface Contacto {
  nombre: string;
  correo: string;
  asunto?: string; // El signo '?' indica que es opcional, igual que en tu index.js
  mensaje: string;
}