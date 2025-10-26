import React from 'react';
import '../styles/Categorias.css';
import '../styles/App.css';
import CategoriaCard from '../components/CategoriaCard';

const categoriasData = [
   {id: 1, titulo: 'Artes', imagenSrc: '/art.svg', url: '#'},
   {id: 2, titulo: 'Biografías', imagenSrc: '/biography.svg', url: '#'},
   {id: 3, titulo: 'Autoayuda', imagenSrc: '/selfhelp.svg', url: '#'},    
   {id: 4, titulo: 'Ciencias', imagenSrc: '/science.svg', url: '#'},
   {id: 5, titulo: 'Ficción', imagenSrc: '/fiction.svg', url: '#'},
   {id: 6, titulo: 'Novelas', imagenSrc: '/novel.svg', url: '#'},
]

const Categorias = (props) =>  (
<>
<section id="featured" className="py-3 py-lg-5">
    <div className="container">
        <div className="row justify-content-center flex-row flex-wrap">
            <div className="d-flex flex-row justify-content-between align-items-center mb-3 mb-lg-5">
                <h3 className="green-color"><strong>Explora nuestras {props.nombre}</strong></h3>
            </div>

            <div className="row justify-content-center">
                {categoriasData.map((categoria)=> (
                    <CategoriaCard 
                        key={categoria.id}
                        titulo={categoria.titulo}
                        imagenSrc={categoria.imagenSrc}
                        url={categoria.url}
                    />
                ))}
            </div>
        </div>
    </div>
</section>
</>
);


export default Categorias
