


var Banco = {
    usuarios: [],

     // método para crear usuario pasando por parametro el nombre y un saldo inicial.
    crearUsuario: function(p_nombre,p_saldo) {
        var usuario = {
            nombre: p_nombre,
            saldo: p_saldo
        }
        return  this.usuarios.push(usuario);
    },

    // método para consultar saldo de usuario pasado por parametro.
    consultarSaldo: function(p_usuario) {
        debugger
        for(var i=0; i<this.usuarios.length; i++) {
            var usu = this.usuarios[i];
            if(usu.nombre === p_usuario) {
                return usu.saldo;
            }else{
                console.log('Usuario no encontrado.');
            }
        }
    },

    extraerSaldo: function(p_usuario,p_saldo) {
        debugger
        for(var i=0; i<this.usuarios.length; i++) {
            var usu = this.usuarios[i];
            if(usu.nombre === p_usuario) {
                usu.saldo -= p_saldo;
                return usu.saldo;
            }else{
                console.log('Usuario no encontrado.');
            }
        }
    }


}










// funcion para crear objeto persona

function crearPersona(p_nombre,p_saldo) {
    var persona = {
        nombre: p_nombre,
        billetera: p_saldo,
        enriquecer: function(monto) {
            this.billetera = this.billetera+monto;
            return this.billetera;
        }
    }
    return persona;
}