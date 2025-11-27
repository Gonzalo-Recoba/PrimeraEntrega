import React, { useEffect } from 'react'
import {API_KEY} from '../../utils/apiKey.js';
import { addDoc, collection, getFirestore } from 'firebase/firestore';
import { app } from '../../utils/firestore/firestore.js';

const FormCreate = () => {
    const hoteles  = [
    {
      "id": "0",
      "nombre": "El Hotel del Javi",
      "ciudad": "La Plata, Argentina",
      "precio": 1000,
      "descripcion": "El Howard Johnson Hotel Piedras Moras ofrece un alojamiento confortable en Almafuerte y alberga un centro de spa y bienestar. Ofrece vistas panorámicas impresionantes, conexión WiFi gratuita, piscina al aire libre y piscina cubierta. Las habitaciones del Howard Johnson Hotel Piedras Moras presentan una decoración elegante. Habitación con suelo de moqueta, baño completo con secador de pelo, TV de pantalla plana, minibar, caja fuerte y aire acondicionado.",
      "servicios": "wifi, habitacion, gym, aire, piscina",
      "imagen1": "https://firebasestorage.googleapis.com/v0/b/informesdedireccion-inspeccion.firebasestorage.app/o/alojamientos%2FfotosAlojamientos%2F1%20(1).webp?alt=media&token=de893cc9-4d83-49ef-92d5-26c5b176db77",
      "imagen2": "https://firebasestorage.googleapis.com/v0/b/informesdedireccion-inspeccion.firebasestorage.app/o/alojamientos%2FfotosAlojamientos%2F1%20(2).webp?alt=media&token=59917aad-b634-4a01-be7f-a7986941e0c1",
      "imagen3": "https://firebasestorage.googleapis.com/v0/b/informesdedireccion-inspeccion.firebasestorage.app/o/alojamientos%2FfotosAlojamientos%2F1%20(3).webp?alt=media&token=f623ca02-6adf-4d45-864d-acbf15a85d29",
      "estrellas": 5
    },
    {
      "id": "1",
      "nombre": "Howard Johnson Hotel",
      "ciudad": "Almafuerte, Argentina",
      "precio": 1000,
      "descripcion": "El Howard Johnson Hotel Piedras Moras ofrece un alojamiento confortable en Almafuerte y alberga un centro de spa y bienestar. Ofrece vistas panorámicas impresionantes, conexión WiFi gratuita, piscina al aire libre y piscina cubierta. Las habitaciones del Howard Johnson Hotel Piedras Moras presentan una decoración elegante. Habitación con suelo de moqueta, baño completo con secador de pelo, TV de pantalla plana, minibar, caja fuerte y aire acondicionado.",
      "servicios": "wifi, piscina",
      "imagen1": "https://firebasestorage.googleapis.com/v0/b/informesdedireccion-inspeccion.firebasestorage.app/o/alojamientos%2FfotosAlojamientos%2F1%20(1).webp?alt=media&token=de893cc9-4d83-49ef-92d5-26c5b176db77",
      "imagen2": "https://firebasestorage.googleapis.com/v0/b/informesdedireccion-inspeccion.firebasestorage.app/o/alojamientos%2FfotosAlojamientos%2F1%20(2).webp?alt=media&token=59917aad-b634-4a01-be7f-a7986941e0c1",
      "imagen3": "https://firebasestorage.googleapis.com/v0/b/informesdedireccion-inspeccion.firebasestorage.app/o/alojamientos%2FfotosAlojamientos%2F1%20(3).webp?alt=media&token=f623ca02-6adf-4d45-864d-acbf15a85d29",
      "estrellas": 4
    },
    {
      "id": "2",
      "nombre": "Posada La Ensenada",
      "ciudad": "Villa Yacanto, Argentina",
      "precio": 1300,
      "descripcion": "El Howard Johnson Hotel Piedras Moras ofrece un alojamiento confortable en Almafuerte y alberga un centro de spa y bienestar. Ofrece vistas panorámicas impresionantes, conexión WiFi gratuita, piscina al aire libre y piscina cubierta. Las habitaciones del Howard Johnson Hotel Piedras Moras presentan una decoración elegante. Habitación con suelo de moqueta, baño completo con secador de pelo, TV de pantalla plana, minibar, caja fuerte y aire acondicionado.",
      "servicios": "habitacion, gym, aire",
      "imagen1": "https://firebasestorage.googleapis.com/v0/b/informesdedireccion-inspeccion.firebasestorage.app/o/alojamientos%2FfotosAlojamientos%2F2%20(1).webp?alt=media&token=20012f9f-6cc9-4da3-9414-30db641efb85",
      "imagen2": "https://firebasestorage.googleapis.com/v0/b/informesdedireccion-inspeccion.firebasestorage.app/o/alojamientos%2FfotosAlojamientos%2F2%20(2).webp?alt=media&token=2ac339eb-90bd-4f69-98d4-e6a6a686f4a7",
      "imagen3": "https://firebasestorage.googleapis.com/v0/b/informesdedireccion-inspeccion.firebasestorage.app/o/alojamientos%2FfotosAlojamientos%2F2%20(3).webp?alt=media&token=63f0f1ca-84a8-4a73-9d14-644e6295ab9d",
      "estrellas": 1
    },
    {
      "id": "3",
      "nombre": "Castelmar Hotel",
      "ciudad": "Florianopolis, Brasil",
      "precio": 1250,
      "descripcion": "El Howard Johnson Hotel Piedras Moras ofrece un alojamiento confortable en Almafuerte y alberga un centro de spa y bienestar. Ofrece vistas panorámicas impresionantes, conexión WiFi gratuita, piscina al aire libre y piscina cubierta. Las habitaciones del Howard Johnson Hotel Piedras Moras presentan una decoración elegante. Habitación con suelo de moqueta, baño completo con secador de pelo, TV de pantalla plana, minibar, caja fuerte y aire acondicionado.",
      "servicios": "wifi, habitacion",
      "imagen1": "https://firebasestorage.googleapis.com/v0/b/informesdedireccion-inspeccion.firebasestorage.app/o/alojamientos%2FfotosAlojamientos%2F3%20(1).webp?alt=media&token=cbe1609a-e011-467f-8ca3-d6f69ba7d91c",
      "imagen2": "https://firebasestorage.googleapis.com/v0/b/informesdedireccion-inspeccion.firebasestorage.app/o/alojamientos%2FfotosAlojamientos%2F3%20(2).webp?alt=media&token=9c4d8439-c74b-4874-b567-bbf069bac665",
      "imagen3": "https://firebasestorage.googleapis.com/v0/b/informesdedireccion-inspeccion.firebasestorage.app/o/alojamientos%2FfotosAlojamientos%2F3%20(3).webp?alt=media&token=ca4de39e-c5a0-4343-bb8b-961f868455b1",
      "estrellas": 4
    },
    {
      "id": "4",
      "nombre": "Hotel Presidente",
      "ciudad": "Santiago de Chile, Chile",
      "precio": 1350,
      "descripcion": "El Howard Johnson Hotel Piedras Moras ofrece un alojamiento confortable en Almafuerte y alberga un centro de spa y bienestar. Ofrece vistas panorámicas impresionantes, conexión WiFi gratuita, piscina al aire libre y piscina cubierta. Las habitaciones del Howard Johnson Hotel Piedras Moras presentan una decoración elegante. Habitación con suelo de moqueta, baño completo con secador de pelo, TV de pantalla plana, minibar, caja fuerte y aire acondicionado.",
      "servicios": "habitacion, gym, piscina",
      "imagen1": "https://firebasestorage.googleapis.com/v0/b/informesdedireccion-inspeccion.firebasestorage.app/o/alojamientos%2FfotosAlojamientos%2F4%20(1).webp?alt=media&token=465bc033-984e-482f-9b7c-fde780746e0f",
      "imagen2": "https://firebasestorage.googleapis.com/v0/b/informesdedireccion-inspeccion.firebasestorage.app/o/alojamientos%2FfotosAlojamientos%2F4%20(2).webp?alt=media&token=d23cfc5a-d0d6-44ff-b556-06dd9117282f",
      "imagen3": "https://firebasestorage.googleapis.com/v0/b/informesdedireccion-inspeccion.firebasestorage.app/o/alojamientos%2FfotosAlojamientos%2F4%20(3).webp?alt=media&token=2933903e-0652-43ef-8fcf-3f88fb45a2c6",
      "estrellas": 2
    },
    {
      "id": "5",
      "nombre": "Hotel Ibis",
      "ciudad": "Montevideo, Uruguay",
      "precio": 1450,
      "descripcion": "El Howard Johnson Hotel Piedras Moras ofrece un alojamiento confortable en Almafuerte y alberga un centro de spa y bienestar. Ofrece vistas panorámicas impresionantes, conexión WiFi gratuita, piscina al aire libre y piscina cubierta. Las habitaciones del Howard Johnson Hotel Piedras Moras presentan una decoración elegante. Habitación con suelo de moqueta, baño completo con secador de pelo, TV de pantalla plana, minibar, caja fuerte y aire acondicionado.",
      "servicios": "habitacion, gym, aire, piscina",
      "imagen1": "https://firebasestorage.googleapis.com/v0/b/informesdedireccion-inspeccion.firebasestorage.app/o/alojamientos%2FfotosAlojamientos%2F5%20(1).webp?alt=media&token=0dc3bcfc-8ec7-4bb5-9595-992c8f6494a7",
      "imagen2": "https://firebasestorage.googleapis.com/v0/b/informesdedireccion-inspeccion.firebasestorage.app/o/alojamientos%2FfotosAlojamientos%2F5%20(2).webp?alt=media&token=512705bf-6ac6-430a-b5ce-b0dace236094",
      "imagen3": "https://firebasestorage.googleapis.com/v0/b/informesdedireccion-inspeccion.firebasestorage.app/o/alojamientos%2FfotosAlojamientos%2F5%20(3).webp?alt=media&token=4c4e9477-544f-4cdd-8675-1a3ef245c661",
      "estrellas": 4
    },
    {
      "id": "6",
      "nombre": "Leonardo Boutique",
      "ciudad": "Madrid, España",
      "precio": 1650,
      "descripcion": "El Howard Johnson Hotel Piedras Moras ofrece un alojamiento confortable en Almafuerte y alberga un centro de spa y bienestar. Ofrece vistas panorámicas impresionantes, conexión WiFi gratuita, piscina al aire libre y piscina cubierta. Las habitaciones del Howard Johnson Hotel Piedras Moras presentan una decoración elegante. Habitación con suelo de moqueta, baño completo con secador de pelo, TV de pantalla plana, minibar, caja fuerte y aire acondicionado.",
      "servicios": "wifi, habitacion, aire",
      "imagen1": "https://firebasestorage.googleapis.com/v0/b/informesdedireccion-inspeccion.firebasestorage.app/o/alojamientos%2FfotosAlojamientos%2F6%20(1).webp?alt=media&token=6a5ecf02-1bc3-4e5d-b791-791aca446af3",
      "imagen2": "https://firebasestorage.googleapis.com/v0/b/informesdedireccion-inspeccion.firebasestorage.app/o/alojamientos%2FfotosAlojamientos%2F6%20(2).webp?alt=media&token=102c7d9e-568a-4963-907b-e978164fea10",
      "imagen3": "https://firebasestorage.googleapis.com/v0/b/informesdedireccion-inspeccion.firebasestorage.app/o/alojamientos%2FfotosAlojamientos%2F6%20(3).webp?alt=media&token=186436f8-2c10-4f37-9f4c-d6f81f871e5b",
      "estrellas": 5
    },
    {
      "id": "7",
      "nombre": "Hotel 52",
      "ciudad": "Playa de Carmen, México",
      "precio": 1800,
      "descripcion": "El Howard Johnson Hotel Piedras Moras ofrece un alojamiento confortable en Almafuerte y alberga un centro de spa y bienestar. Ofrece vistas panorámicas impresionantes, conexión WiFi gratuita, piscina al aire libre y piscina cubierta. Las habitaciones del Howard Johnson Hotel Piedras Moras presentan una decoración elegante. Habitación con suelo de moqueta, baño completo con secador de pelo, TV de pantalla plana, minibar, caja fuerte y aire acondicionado.",
      "servicios": "wifi, habitacion, gym",
      "imagen1": "https://firebasestorage.googleapis.com/v0/b/informesdedireccion-inspeccion.firebasestorage.app/o/alojamientos%2FfotosAlojamientos%2F7%20(1).webp?alt=media&token=d88ce0ea-0a2c-45df-b919-32320f03789d",
      "imagen2": "https://firebasestorage.googleapis.com/v0/b/informesdedireccion-inspeccion.firebasestorage.app/o/alojamientos%2FfotosAlojamientos%2F7%20(2).webp?alt=media&token=92a0569f-c20d-48e1-b053-2c759f09edfb",
      "imagen3": "https://firebasestorage.googleapis.com/v0/b/informesdedireccion-inspeccion.firebasestorage.app/o/alojamientos%2FfotosAlojamientos%2F7%20(3).webp?alt=media&token=aa0e8523-3149-4d59-9c78-9eb8128fb2988",
      "estrellas": 5
    },
    {
      "id": "8",
      "nombre": "Howard Johnson Hotel",
      "ciudad": "Almafuerte, Argentina",
      "precio": 1800,
      "descripcion": "El Howard Johnson Hotel Piedras Moras ofrece un alojamiento confortable en Almafuerte y alberga un centro de spa y bienestar. Ofrece vistas panorámicas impresionantes, conexión WiFi gratuita, piscina al aire libre y piscina cubierta. Las habitaciones del Howard Johnson Hotel Piedras Moras presentan una decoración elegante. Habitación con suelo de moqueta, baño completo con secador de pelo, TV de pantalla plana, minibar, caja fuerte y aire acondicionado.",
      "servicios": "wifi, habitacion, gym, aire, piscina",
      "imagen1": "https://firebasestorage.googleapis.com/v0/b/informesdedireccion-inspeccion.firebasestorage.app/o/alojamientos%2FfotosAlojamientos%2F1%20(1).webp?alt=media&token=de893cc9-4d83-49ef-92d5-26c5b176db77",
      "imagen2": "https://firebasestorage.googleapis.com/v0/b/informesdedireccion-inspeccion.firebasestorage.app/o/alojamientos%2FfotosAlojamientos%2F1%20(2).webp?alt=media&token=59917aad-b634-4a01-be7f-a7986941e0c1",
      "imagen3": "https://firebasestorage.googleapis.com/v0/b/informesdedireccion-inspeccion.firebasestorage.app/o/alojamientos%2FfotosAlojamientos%2F1%20(3).webp?alt=media&token=f623ca02-6adf-4d45-864d-acbf15a85d29",
      "estrellas": 4
    },
    {
      "id": "9",
      "nombre": "Posada La Ensenada",
      "ciudad": "Villa Yacanto, Argentina",
      "precio": 1300,
      "descripcion": "El Howard Johnson Hotel Piedras Moras ofrece un alojamiento confortable en Almafuerte y alberga un centro de spa y bienestar. Ofrece vistas panorámicas impresionantes, conexión WiFi gratuita, piscina al aire libre y piscina cubierta. Las habitaciones del Howard Johnson Hotel Piedras Moras presentan una decoración elegante. Habitación con suelo de moqueta, baño completo con secador de pelo, TV de pantalla plana, minibar, caja fuerte y aire acondicionado.",
      "servicios": "wifi, habitacion, gym, aire",
      "imagen1": "https://firebasestorage.googleapis.com/v0/b/informesdedireccion-inspeccion.firebasestorage.app/o/alojamientos%2FfotosAlojamientos%2F2%20(1).webp?alt=media&token=20012f9f-6cc9-4da3-9414-30db641efb85",
      "imagen2": "https://firebasestorage.googleapis.com/v0/b/informesdedireccion-inspeccion.firebasestorage.app/o/alojamientos%2FfotosAlojamientos%2F2%20(2).webp?alt=media&token=2ac339eb-90bd-4f69-98d4-e6a6a686f4a7",
      "imagen3": "https://firebasestorage.googleapis.com/v0/b/informesdedireccion-inspeccion.firebasestorage.app/o/alojamientos%2FfotosAlojamientos%2F2%20(3).webp?alt=media&token=63f0f1ca-84a8-4a73-9d14-644e6295ab9d",
      "estrellas": 2
    },
    {
      "id": "10",
      "nombre": "Castelmar Hotel",
      "ciudad": "Florianopolis, Brasil",
      "precio": 1250,
      "descripcion": "El Howard Johnson Hotel Piedras Moras ofrece un alojamiento confortable en Almafuerte y alberga un centro de spa y bienestar. Ofrece vistas panorámicas impresionantes, conexión WiFi gratuita, piscina al aire libre y piscina cubierta. Las habitaciones del Howard Johnson Hotel Piedras Moras presentan una decoración elegante. Habitación con suelo de moqueta, baño completo con secador de pelo, TV de pantalla plana, minibar, caja fuerte y aire acondicionado.",
      "servicios": "wifi, habitacion",
      "imagen1": "https://firebasestorage.googleapis.com/v0/b/informesdedireccion-inspeccion.firebasestorage.app/o/alojamientos%2FfotosAlojamientos%2F3%20(1).webp?alt=media&token=cbe1609a-e011-467f-8ca3-d6f69ba7d91c",
      "imagen2": "https://firebasestorage.googleapis.com/v0/b/informesdedireccion-inspeccion.firebasestorage.app/o/alojamientos%2FfotosAlojamientos%2F3%20(2).webp?alt=media&token=9c4d8439-c74b-4874-b567-bbf069bac665",
      "imagen3": "https://firebasestorage.googleapis.com/v0/b/informesdedireccion-inspeccion.firebasestorage.app/o/alojamientos%2FfotosAlojamientos%2F3%20(3).webp?alt=media&token=ca4de39e-c5a0-4343-bb8b-961f868455b1",
      "estrellas": 1
    },
    {
      "id": "11",
      "nombre": "Hotel Presidente",
      "ciudad": "Santiago de Chile, Chile",
      "precio": 1350,
      "descripcion": "El Howard Johnson Hotel Piedras Moras ofrece un alojamiento confortable en Almafuerte y alberga un centro de spa y bienestar. Ofrece vistas panorámicas impresionantes, conexión WiFi gratuita, piscina al aire libre y piscina cubierta. Las habitaciones del Howard Johnson Hotel Piedras Moras presentan una decoración elegante. Habitación con suelo de moqueta, baño completo con secador de pelo, TV de pantalla plana, minibar, caja fuerte y aire acondicionado.",
      "servicios": "habitacion, gym, piscina",
      "imagen1": "https://firebasestorage.googleapis.com/v0/b/informesdedireccion-inspeccion.firebasestorage.app/o/alojamientos%2FfotosAlojamientos%2F4%20(1).webp?alt=media&token=465bc033-984e-482f-9b7c-fde780746e0f",
      "imagen2": "https://firebasestorage.googleapis.com/v0/b/informesdedireccion-inspeccion.firebasestorage.app/o/alojamientos%2FfotosAlojamientos%2F4%20(2).webp?alt=media&token=d23cfc5a-d0d6-44ff-b556-06dd9117282f",
      "imagen3": "https://firebasestorage.googleapis.com/v0/b/informesdedireccion-inspeccion.firebasestorage.app/o/alojamientos%2FfotosAlojamientos%2F4%20(3).webp?alt=media&token=2933903e-0652-43ef-8fcf-3f88fb45a2c6",
      "estrellas": 5
    },
    {
      "id": "12",
      "nombre": "Hotel Ibis",
      "ciudad": "Montevideo, Uruguay",
      "precio": 1450,
      "descripcion": "El Howard Johnson Hotel Piedras Moras ofrece un alojamiento confortable en Almafuerte y alberga un centro de spa y bienestar. Ofrece vistas panorámicas impresionantes, conexión WiFi gratuita, piscina al aire libre y piscina cubierta. Las habitaciones del Howard Johnson Hotel Piedras Moras presentan una decoración elegante. Habitación con suelo de moqueta, baño completo con secador de pelo, TV de pantalla plana, minibar, caja fuerte y aire acondicionado.",
      "servicios": "habitacion, gym, aire, piscina",
      "imagen1": "https://firebasestorage.googleapis.com/v0/b/informesdedireccion-inspeccion.firebasestorage.app/o/alojamientos%2FfotosAlojamientos%2F5%20(1).webp?alt=media&token=0dc3bcfc-8ec7-4bb5-9595-992c8f6494a7",
      "imagen2": "https://firebasestorage.googleapis.com/v0/b/informesdedireccion-inspeccion.firebasestorage.app/o/alojamientos%2FfotosAlojamientos%2F5%20(2).webp?alt=media&token=512705bf-6ac6-430a-b5ce-b0dace236094",
      "imagen3": "https://firebasestorage.googleapis.com/v0/b/informesdedireccion-inspeccion.firebasestorage.app/o/alojamientos%2FfotosAlojamientos%2F5%20(3).webp?alt=media&token=4c4e9477-544f-4cdd-8675-1a3ef245c661",
      "estrellas": 1
    },
    {
      "id": "13",
      "nombre": "Leonardo Boutique",
      "ciudad": "Madrid, España",
      "precio": 1650,
      "descripcion": "El Howard Johnson Hotel Piedras Moras ofrece un alojamiento confortable en Almafuerte y alberga un centro de spa y bienestar. Ofrece vistas panorámicas impresionantes, conexión WiFi gratuita, piscina al aire libre y piscina cubierta. Las habitaciones del Howard Johnson Hotel Piedras Moras presentan una decoración elegante. Habitación con suelo de moqueta, baño completo con secador de pelo, TV de pantalla plana, minibar, caja fuerte y aire acondicionado.",
      "servicios": "wifi, habitacion, aire",
      "imagen1": "https://firebasestorage.googleapis.com/v0/b/informesdedireccion-inspeccion.firebasestorage.app/o/alojamientos%2FfotosAlojamientos%2F6%20(1).webp?alt=media&token=6a5ecf02-1bc3-4e5d-b791-791aca446af3",
      "imagen2": "https://firebasestorage.googleapis.com/v0/b/informesdedireccion-inspeccion.firebasestorage.app/o/alojamientos%2FfotosAlojamientos%2F6%20(2).webp?alt=media&token=102c7d9e-568a-4963-907b-e978164fea10",
      "imagen3": "https://firebasestorage.googleapis.com/v0/b/informesdedireccion-inspeccion.firebasestorage.app/o/alojamientos%2FfotosAlojamientos%2F6%20(3).webp?alt=media&token=186436f8-2c10-4f37-9f4c-d6f81f871e5b",
      "estrellas": 3
    },
    {
      "id": "14",
      "nombre": "Hotel 52",
      "ciudad": "Playa de Carmen, México",
      "precio": 1800,
      "descripcion": "El Howard Johnson Hotel Piedras Moras ofrece un alojamiento confortable en Almafuerte y alberga un centro de spa y bienestar. Ofrece vistas panorámicas impresionantes, conexión WiFi gratuita, piscina al aire libre y piscina cubierta. Las habitaciones del Howard Johnson Hotel Piedras Moras presentan una decoración elegante. Habitación con suelo de moqueta, baño completo con secador de pelo, TV de pantalla plana, minibar, caja fuerte y aire acondicionado.",
      "servicios": "wifi, habitacion, gym",
      "imagen1": "https://firebasestorage.googleapis.com/v0/b/informesdedireccion-inspeccion.firebasestorage.app/o/alojamientos%2FfotosAlojamientos%2F7%20(1).webp?alt=media&token=d88ce0ea-0a2c-45df-b919-32320f03789d",
      "imagen2": "https://firebasestorage.googleapis.com/v0/b/informesdedireccion-inspeccion.firebasestorage.app/o/alojamientos%2FfotosAlojamientos%2F7%20(2).webp?alt=media&token=92a0569f-c20d-48e1-b053-2c759f09edfb",
      "imagen3": "https://firebasestorage.googleapis.com/v0/b/informesdedireccion-inspeccion.firebasestorage.app/o/alojamientos%2FfotosAlojamientos%2F7%20(3).webp?alt=media&token=aa0e8523-3149-4d59-9c78-9eb8128fb2988",
      "estrellas": 2
    },
    {
      "id": "15",
      "nombre": "Howard Johnson Hotel",
      "ciudad": "Almafuerte, Argentina",
      "precio": 1650,
      "descripcion": "El Howard Johnson Hotel Piedras Moras ofrece un alojamiento confortable en Almafuerte y alberga un centro de spa y bienestar. Ofrece vistas panorámicas impresionantes, conexión WiFi gratuita, piscina al aire libre y piscina cubierta. Las habitaciones del Howard Johnson Hotel Piedras Moras presentan una decoración elegante. Habitación con suelo de moqueta, baño completo con secador de pelo, TV de pantalla plana, minibar, caja fuerte y aire acondicionado.",
      "servicios": "wifi, habitacion, gym, aire, piscina",
      "imagen1": "https://firebasestorage.googleapis.com/v0/b/informesdedireccion-inspeccion.firebasestorage.app/o/alojamientos%2FfotosAlojamientos%2F1%20(1).webp?alt=media&token=de893cc9-4d83-49ef-92d5-26c5b176db77",
      "imagen2": "https://firebasestorage.googleapis.com/v0/b/informesdedireccion-inspeccion.firebasestorage.app/o/alojamientos%2FfotosAlojamientos%2F1%20(2).webp?alt=media&token=59917aad-b634-4a01-be7f-a7986941e0c1",
      "imagen3": "https://firebasestorage.googleapis.com/v0/b/informesdedireccion-inspeccion.firebasestorage.app/o/alojamientos%2FfotosAlojamientos%2F1%20(3).webp?alt=media&token=f623ca02-6adf-4d45-864d-acbf15a85d29",
      "estrellas": 4
    }
]
const db = getFirestore(app);
const hotelesCollectionRef = collection(db, "alojamientos");
    useEffect(() => {
        hoteles.forEach(async (hotel) => {
          try {
            await addDoc(hotelesCollectionRef,
              {
                  nombre: hotel.nombre,
                  ciudad: hotel.ciudad,
                  estrellas: hotel.estrellas,
                  servicios: (hotel.servicios || "").split(',').map(s => s.trim()),
                  descripcion: hotel.descripcion,
                  precio: hotel.precio,
                  images: [hotel.imagen1, hotel.imagen2, hotel.imagen3]
              });
              console.log(`Alojamiento '${hotel.nombre}' creado con éxito`);
          } catch (error) {
              console.error(`Error creating document for hotel '${hotel.nombre}':`, error);
          }
        });
    }, []);





  return (
    <div>FormCreate</div>
  )
}

export default FormCreate