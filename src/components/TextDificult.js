

export default async function textDificult(dificultad) {


  try {

    const res = await fetch('/src/data/data.json');
    
    if(!res.ok){
      throw new Error('Error en la respuesta:', res)
    }
    
    const data = await res.json()
    
    const textSelect = Math.floor(Math.random() * data[dificultad].length);
    
    console.log(data[dificultad][textSelect])
    
    return data[dificultad][textSelect]
  } catch (error) {
    console.error('Error cargando el texto: ', error)
  }

}
