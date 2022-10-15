import { elementos } from '../interfaces/inventario.interface';
import { Injectable } from '@angular/core';


@Injectable()
export class InventarioService{
    public objinv: elementos[] = [
        {
            objeto: "Papas-Margarita",
            cantidad: 1,
            img:"./assets/papasmargarita.png"
        },
        {
            objeto: "Gaseosa-Pepsi",
            cantidad: 1,
            img: "./assets/pepsi.png"
        },
        {
            objeto: "Gomitas-Trululu",
            cantidad: 1,
            img: "./assets/trululu.png"
        },
        {
            objeto: "Galletas-Oreo",
            cantidad: 1,
            img: "./assets/oreo.png"
        }
    ];

    get elementosinv():elementos[]{
        return [...this.objinv]
    }

    constructor(){}
}