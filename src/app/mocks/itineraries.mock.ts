import { Itinerary } from "../interfaces/itinerary.interface";

export const Itineraries: Itinerary[] = [
  {
    uuid: '62eade15-a144-4091-ab00-924874f6d247',
    address: '0.0.0.0',
    mask: '0',
    gateway: '193.0.174.0',
    interface: 'Подключение Ethernet'
  },
  {
    uuid: '45e51d23-e1a7-44aa-9154-8138d73f14c7',
    address: '10.1.30.0',
    mask: '24',
    gateway: '0.0.0.0',
    interface: 'Гостевая сеть'
  },
  {
    uuid: '2643af7f-6d2b-4ba5-942d-7a1248b45f3c',
    address: '192.168.1.0',
    mask: '24',
    gateway: '0.0.0.0',
    interface: 'Домашняя сеть'
  },
  {
    uuid: 'e020e559-c973-4697-b7e9-c866c9e64983',
    address: '193.0.174.0',
    mask: '24',
    gateway: '0.0.0.0',
    interface: 'Подключение Ethernet'
  },
  {
    uuid: 'bc7fc8ca-4056-452c-bf08-dac4e3e175b4',
    address: '193.0.175.0',
    mask: '25',
    gateway: '193.0.174.10',
    interface: 'Подключение Ethernet'
  },
  {
    uuid: '46b3351d-810b-499f-ac51-e5533f822dfa',
    address: '192.0.175.22',
    mask: '32',
    gateway: '193.0.174.1',
    interface: 'Подключение Ethernet'
  },
  {
    uuid: '2db0e95f-d98b-45bc-8447-1365a13da329',
    address: '102.178.170.180',
    mask: '23',
    gateway: '102.178.170.1',
    interface: 'Неопознаная сеть'
  },
  {
    uuid: 'b0bc7e16-26ce-46a3-9348-bb2003aabecf',
    address: '52.6.65.5',
    mask: '21',
    gateway: '52.6.64.1',
    interface: 'Частная сеть'
  },
  {
    uuid: 'df394977-f6a7-42fa-acad-d78ccad1a42a',
    address: '142.181.21.70',
    mask: '22',
    gateway: '142.181.20.1',
    interface: 'Общедоступная сеть'
  },
  {
    uuid: '65d63465-2ec1-46f5-bb21-42a47391ca23',
    address: '233.225.96.211',
    mask: '26',
    gateway: '	233.225.96.193',
    interface: 'ЛВС или высокоскоростной Интернет'
  },
  {
    uuid: '7ec44188-f9c1-42d9-9aad-9bfade3f1609',
    address: '63.245.84.57',
    mask: '20',
    gateway: '	63.245.80.1',
    interface: 'Доступ к Интернету'
  },
  {
    uuid: '3716289f-cf9c-408e-9a54-4c44bb0543ae',
    address: '157.229.112.216',
    mask: '27',
    gateway: '	157.229.112.193',
    interface: 'Общий доступ с парольной защитой'
  }
];
