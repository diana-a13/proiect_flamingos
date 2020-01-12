module.exports = async() =>{
    
    const comentarii = require("./modules/comentarii");
    const transport = require("./modules/transport");
    const user = require("./modules/users");
    
    user.hasMany(comentarii, { as: "ComentariiU", foreignKey: "id" });
    transport.hasMany(comentarii, { as:"ComentariiT", foreignKey: "id_statie" });
    comentarii.belongsTo (user, {as: "User", foreignKey: "id"});
    comentarii.belongsTo(transport, {as:"Transport", foreignKey: "id_statie"});
    
    const errHandler = (err) => {
        console.error("Error: ", err);
    }
    
    const u1 = await user.create({ nume: "Louis", parola: "parolaLouis", email: "louis-email"}).catch(errHandler); 
    
    const t1 = await transport.create({id_statie: 300, statie_plecare: "Clabucet", statie_sosire: "Complex Baneasa"}).catch(errHandler);
    
    const c1 = await comentarii.create({id_user: u1.id, id_transport: t1.id_statie, com: "Minunat"}).catch(errHandler);
    
//    const users = await user.findAll({ where: { nume: "Louis" }, include: [ {model: comentarii, as: "ComentariiU"} ] }).catch(errHandler);   
    
//    console.log("Louis Comentarii: ", users);
    
    
    
}