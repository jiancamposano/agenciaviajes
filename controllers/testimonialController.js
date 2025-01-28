import { Testimonial } from "../models/testimoniales.js";


const guardarTestimonial = async (req, res) => {
    //validar formulario
    const { nombre, correo, mensaje } =  req.body;
    const errores = [];
    if (nombre.trim() === "") {
        errores.push({ mensaje: "nombre esta vacio" });
    }
    if (correo.trim() === "") {
        errores.push({ mensaje: "correo esta vacio" });
    }
    if (mensaje.trim() === "") {
        errores.push({ mensaje: "mensaje esta vacio" });
    }
    if (errores.length > 0) {
        //mostrar vista con errores
        const testimoniales = await Testimonial.findAll()
        res.render("testimoniales", {
            pagina: "Testimoniales",
            errores,
            nombre,
            correo,
            mensaje,
            testimoniales
        });
    } else {
        //almacenar en bd
        try {
            await Testimonial.create( {
                nombre,
                correo,
                mensaje,
               
            } )

            res.redirect('/testimoniales')
        } catch (error) {
            console.log(error);
            
        }
    }
};

export { guardarTestimonial };
