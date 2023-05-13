// this file is used to export all the components

/*
import Article from '.components/Article/Article'
import Brand from '.components/Brand/Brand'
import CTA from '.components/CTA/CTA'
import Feature from '.components/Feature/Feature'
import Navbar from '.components/Navbar/Navbar'

^ this would have been inside App.js ^

This is very tiring and redundant. Better way is to create a new file and to export
*/

export { default as Article } from './article/Article';
export { default as Brand } from './brand/Brand';
export { default as CTA } from './cta/CTA';
export { default as Feature } from './feature/Feature';
export { default as Navbar } from './navbar/Navbar';
