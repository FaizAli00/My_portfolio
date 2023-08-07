import React from 'react';

const Projects = () => {
  return (
    <section id="projects" className="py-16 bg-gray-600">
      <div className="container mx-auto">
        <h2 className="text-4xl lg:text-6xl font-bold text-slate-200 text-center mb-8">My Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="h-[400px]">
            <div className="bg-gray-700 rounded-lg shadow-lg p-6 h-full text-center flex items-center flex-col justify-center">
              <h3 className="text-xl lg:text-5xl font-bold text-slate-200 mb-4">Project 1</h3>
              <p className="text-slate-200 mb-4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores voluptatem 
              voluptatibus nostrum doloribus sunt consectetur omnis quos culpa, eveniet porro qui libero perferendis reprehender 
              it exercitationem ut corrupti voluptates saepe nemo vel ducimus sapiente unde tempore fugiat? Nulla, debitis 
              ducimus sint ad, quod illum magnam in consequatur eaque odit nam nihil?</p>
              <a href="/"  className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded">View Project</a>
            </div>
          </div>
          <div className="h-[400px] bg-gray-700 rounded-lg shadow-lg" >
            <div className="bg-lightBlue-100 rounded-lg shadow-lg p-6 h-full text-center flex items-center flex-col justify-center">
              <h3 className="text-xl lg:text-5xl font-bold text-slate-200 mb-4">Project 2</h3>
              <p className="text-slate-200 mb-4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores voluptatem 
              voluptatibus nostrum doloribus sunt consectetur omnis quos culpa, eveniet porro qui libero perferendis reprehender 
              it exercitationem ut corrupti voluptates saepe nemo vel ducimus sapiente unde tempore fugiat? Nulla, debitis 
              ducimus sint ad, quod illum magnam in consequatur eaque odit nam nihil?</p>
              <a href="/" className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded">View Project</a>
            </div>
          </div>
          <div className="h-[400px] bg-gray-700 rounded-lg shadow-lg" >
            <div className="bg-lightBlue-100 rounded-lg shadow-lg p-6 h-full text-center flex items-center flex-col justify-center">
              <h3 className="text-xl lg:text-5xl font-bold text-slate-200 mb-4">Project 3</h3>
              <p className="text-slate-200 mb-4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores voluptatem 
              voluptatibus nostrum doloribus sunt consectetur omnis quos culpa, eveniet porro qui libero perferendis reprehender 
              it exercitationem ut corrupti voluptates saepe nemo vel ducimus sapiente unde tempore fugiat? Nulla, debitis 
              ducimus sint ad, quod illum magnam in consequatur eaque odit nam nihil?</p>
              <a href="/" className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded">View Project</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
