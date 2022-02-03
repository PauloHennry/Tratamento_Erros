function validaArrray(arr, num){
    try{
        if(!arr && !num) throw new ReferenceError("Insira os parâmetros!!")

        if(typeof arr !== 'object') throw new TypeError("Array precisa do tipo object!!")

        if(typeof arr !== 'numbers') throw new TypeError("Arrau precisa do tipo numbers!!")

        if(arr.length !== num) throw new RangeError("Tamanho invalido!!")

        return arr;
    }
    catch (e) {
        if(e instanceof ReferenceError){
            console.log('Este erro é um ReferenceError');
            console.log(e);
        }
        if(e instanceof TypeError){
            console.log('Este erro é um TypeError');
            console.log(e);
        }
        if(e instanceof RangeError){
            console.log('Este erro é um RangeError');
            console.log(e);
        }
        else{
            console.log("Tipo de erro não esperado: " + e);
        }

    }
}

console.log(validaArrray());