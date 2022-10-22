import {TrasladoAceptado} from "./TrasladoAceptado";
import * as React from "react";

const traslados = [{description: "nose"},{description: "fdfdsfsfafasfdsfssd"}]

export const Traslados = () => {

    return(
        <>
            {traslados.map((traslado) => {
                return <TrasladoAceptado description={traslado.description} />
            })}
        </>
    )
}