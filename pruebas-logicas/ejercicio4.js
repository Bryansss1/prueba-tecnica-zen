/*
Tenemos una api alojada en el dominio pruebas.zendha.net (es ficticio), al realizar
una petición a esa api devuelve una matriz de longitud desconocida que incluye
objetos con los siguientes 4 datos como en la imagen.


Genera un objeto que realice las siguientes acciones:
1. Petición a la HTTP a la dirección (prueba.zendha.net) parámetro GET facturas
y con su devolución:
2. Genera un método para realizar cada una de las siguientes acciones:
1. IVA total de los registros devueltos
2. Cantidad vendida a cada receptor (teniendo en cuenta que estos pueden
repetirse)
3. Periodos de las fechas en las que hay facturas.
4. Genera una función que al pasar el resultado de los puntos anteriores
genere una tabla maquetada en FLEXBOX.
 */

const supuesta_api=[
  {
    id:10,
    id_user:1,
   receptor:"david lopez",
   fecha:"10/10/2022",
   importe_subtotal:"$245",
   numero_factura:1,
   num_products:10,
  },
  {
    id:8,
    id_user:3,
   receptor:"bryan lopez",
   fecha:"11/10/2022",
   importe_subtotal:"$25",
   numero_factura:2,
   num_products:2,
  },
  {
    id:6,
    id_user:2,
   receptor:"julio lopez",
   fecha:"12/10/2022",
   importe_subtotal:"$24",
   numero_factura:3,
   num_products:4,
  },
  {
   id:20,
   id_user:1,
   receptor:"david lopez",
   fecha:"13/10/2022",
   importe_subtotal:"$2450",
   num_products:20,
   numero_factura:4
  }, 
]


/*
!ESTO lo aplico con arrays y metodos por tema de falta de una api,
mi idea era desarrollar un back para la prueba tecnica pero se me complico por
problemas familiares, disculpen
*/

const Metodos={
    /*
    este seria con la supuesta fetch

    getFacturas_and_devolution:(url)=>{
    fetch(url,{
    method: 'GET', 
    body: JSON.stringify(data), 
    headers:{
          'Content-Type': 'application/json'
    }
    })
    .then(res=>res.json())
    .catch(error => console.error('Error:', error))
    },
    */
    getFacturas_and_devolution:(url)=>{
    const array=[]
    const filter=url.filter(element=>{
     array.push(element)
    return console.log(array) 
    })
    },

    getIvatotal:(url)=>{
    const array=[]
     const filter=url.filter(element=>{
     const money= element.importe_subtotal.replace("$","")
      const response={iva_total:`$${Number(money)%3}`}
      array.push(response)
      return console.log(array) 
     })
    },
    
    getQuantity:(url)=>{
    const array=[]
    const filter=url.filter(element=>{
    const response={user_id:element.id_user,Cantidad:element.num_products,fecha:element.fecha}
    array.push(response)
    return console.log(array)
    })   
    },

    getDate:(url)=>{
    const array=[]
    const filter=url.filter(element=>{
    const response={factura_id:element.id,fecha:element.fecha}
    array.push(response)
    return console.log(array)
    })
    }
}

Metodos.getFacturas_and_devolution(supuesta_api)
Metodos.getIvatotal(supuesta_api)
Metodos.getQuantity(supuesta_api)
Metodos.getDate(supuesta_api)


/*
const flexbox=document.getElementById("flexData")
const showData=()=>{
let fragment=``

fragment+=`<div class="card">

</div>`
flexbox.innerHTML
}
*/




