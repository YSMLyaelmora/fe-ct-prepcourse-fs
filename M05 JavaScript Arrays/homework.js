/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function devolverPrimerElemento(array) {
   // Retornar el primer elemento del arreglo recibido por parámetro.
   // Tu código:
   return array[0];
}

function devolverUltimoElemento(array) {
   // Retornar el último elemento del arreglo recibido por parámetro.
   // Tu código:
  var centi=array.length-1;
  return array[centi];
   
}

function obtenerLargoDelArray(array) {
   // Retornar la longitud del arreglo recibido por parámetro.
   // Tu código:
   
   return array.length;
}

function incrementarPorUno(array) {
   // El arreglo recibido por parámetro contiene números.
   // Retornar un arreglo con los elementos incrementados en +1.
   // Tu código:
   var arregloMasUno = array.map((num) => {
      return num+1;
   })
   return arregloMasUno;
}

function agregarItemAlFinalDelArray(array, elemento) {
   // Agrega el "elemento" al final del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
   array.push(elemento);
   return array;
}

function agregarItemAlComienzoDelArray(array, elemento) {
   // Agrega el "elemento" al comienzo del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
   array.unshift(elemento);
   return array;
}

function dePalabrasAFrase(palabras) {
   // El argumento "palabras" es un arreglo de strings.
   // Retornar un string donde todas las palabras estén concatenadas
   // con un espacio entre cada palabra.
   // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'.
   // Tu código:
   var StringFinal="";
   for(let i=0; i<palabras.length ;i++) {
      if (i<palabras.length-1) {
         StringFinal += palabras[i]+" "
      } else {
         StringFinal+= palabras[i];
      }
   } 
   return StringFinal;
   
}

function arrayContiene(array, elemento) {
   // Verifica si el elemento existe dentro del arreglo recibido.
   // Retornar true si está, o false si no está.
   // Tu código:
   var incluyeElemento = array.includes(elemento);
   return incluyeElemento;
}

function agregarNumeros(arrayOfNums) {
   // El parámetro "arrayOfNums" debe ser un arreglo de números.
   // Suma todos los elementos y retorna el resultado.
   // Tu código:
   var SumaFinal= 0;
   for( let i=0; i<arrayOfNums.length ;i++) {
      SumaFinal+= arrayOfNums[i];
   }
   return SumaFinal;
}

function promedioResultadosTest(resultadosTest) {
   // El parámetro "resultadosTest" es un arreglo de números.
   // Itera (en un bucle) los elementos del arreglo y devuelve el promedio de las notas.
   // Tu código:
   var sumaTotal =0;
   for(let i=0; i<resultadosTest.length ; i++) {
      sumaTotal+=resultadosTest[i];
   }
   return sumaTotal/resultadosTest.length;
}

function numeroMasGrande(arrayOfNums) {
   // El parámetro "arrayOfNums" es un arreglo de números.
   // Retornar el número más grande.
   // Tu código:
   var nuevoMayor = arrayOfNums[0];
   for(let i=0; i<arrayOfNums.length ; i++) {
      if(arrayOfNums[i]>nuevoMayor) {
         nuevoMayor=arrayOfNums[i];
      } 
   }
   return nuevoMayor;
}

function multiplicarArgumentos() {
   // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto.
   // Si no se pasan argumentos retorna 0. Si se pasa un argumento, simplemente retórnalo.
   // [PISTA]: "arguments" es un arreglo.
   // Tu código:
   var resultado=1;
   if (arguments.length===0) {
      return 0;
   } else if( arguments.length===1) {
      return arguments[0];
   } else {
      for( let i=0; i<arguments.length ;i++) {
         resultado*=arguments[i];

      }
   }
   return resultado;
}

function cuentoElementos(array) {
   // Desarrolla una función que retorne la cantidad de elementos del arreglo cuyo valor sea mayor que 18.
   // Tu código:
   var contador =0;
   for(let i=0; i<array.length ; i++) {
      if(array[i]>18) {
         contador += 1;
      }
   }
   return contador;
}

function diaDeLaSemana(numeroDeDia) {
   // Supongamos que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente.
   // Realiza una función que, dado el número del día de la semana, retorne: "Es fin de semana"
   // si el día corresponde a "Sábado" o "Domingo", y "Es dia laboral" en caso contrario.
   // Tu código:
   var str=null;
   if(numeroDeDia===1 || numeroDeDia===7) {
         str="Es fin de semana";
      } else {
         str="Es dia laboral";
      }
   return str;
   }
  

function empiezaConNueve(num) {
   // Esta función recibe por parámetro un número.
   // Debe retornar true si el entero inicia con 9 y false en otro caso.
   // Tu código:
   var strNuevo= num.toString();
   if(strNuevo.startsWith("9")) {
      return true;
   } else {
      return false;
   }
  
}

function todosIguales(array) {
   // Si todos los elementos del arreglo son iguales, retornar true.
   // Caso contrario retornar false.
   // Tu código:
   var centinela= array[0];
   var resultado=false;
   for(let i=1; i<array.length ; i++) {
      if(centinela===array[i]) {
         centinela=array[i];
         resultado=true;
      } 
   }
   return resultado;
}

function mesesDelAño(array) {
   // El arreglo contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
   // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
   // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
   // Tu código:
   var arrayFinal= [];
   var contador =0;
   for(let i=0; i<array.length ;i++) {
      if(array[i]==="Enero"||array[i]==="Marzo"||array[i]==="Noviembre") {
         arrayFinal[contador]=array[i];
         contador +=1;
   }
}
   if(arrayFinal.length<3) {
      return "No se encontraron los meses pedidos";
   } else {
      return arrayFinal;
   }   
}


function tablaDelSeis() {
   // Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
   // La función devuelve un arreglo con los resultados de la tabla de multiplicar del 6 en orden creciente.
   // Tu código:
   var arrayFinal=[];
   var contador=0;
   for(let i=0 ; i<11 ; i++) {
      arrayFinal[contador]=i*6;
      contador+=1;
   }
   return arrayFinal;
}

function mayorACien(array) {
   // La función recibe un arreglo con enteros entre 0 y 200.
   // Recorrerlo y retornar un arreglo con todos los valores mayores a 100 (no incluye el 100).
   // Tu código:
   var arrayFinal=[];
   var contador=0;
   for( let i=0; i<array.length ; i++) {
   if(array[i]>100) {
      arrayFinal[contador]=array[i];
      contador+=1;
   }
   }
   return arrayFinal;
}

/* ----------------------------------------------------------------------------------
💪 EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT  EXTRA CREDIT 💪
-------------------------------------------------------------------------------------*/

function breakStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un arreglo y retornarlo.
   // Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse
   // la ejecución y retornar el string: "Se interrumpió la ejecución".
   // [PISTA]: utiliza el statement 'break'.
   // Tu código:
   var arrayFinal=[];
   var indice=0;
   for(let i=1; i<11 ; i++) {
      arrayFinal[indice]=num+(i*2);
         if(arrayFinal[indice]===i) {
            break;
         } else {
            indice++;
         }
   } 
    if(arrayFinal.length<10) {
      return "Se interrumpió la ejecución";
    } else {
      return arrayFinal;
    }

   
} 


function continueStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un array y retornarlo.
   // Cuando el número de iteraciones alcance el valor 5, no se suma ese caso y
   // se continua con la siguiente iteración.
   // [PISTA]: utiliza el statement 'continue'.
   // Tu código:
   var arrayRes=[];
   for(let i=0; i<10 ;i++) {
      if(i===5){
         continue;
      }
      num+=2;
      arrayRes.push(num);


   }
   return arrayRes;

}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   devolverPrimerElemento,
   devolverUltimoElemento,
   obtenerLargoDelArray,
   incrementarPorUno,
   agregarItemAlFinalDelArray,
   agregarItemAlComienzoDelArray,
   dePalabrasAFrase,
   arrayContiene,
   agregarNumeros,
   promedioResultadosTest,
   numeroMasGrande,
   multiplicarArgumentos,
   cuentoElementos,
   diaDeLaSemana,
   empiezaConNueve,
   todosIguales,
   mesesDelAño,
   tablaDelSeis,
   mayorACien,
   breakStatement,
   continueStatement,
};
