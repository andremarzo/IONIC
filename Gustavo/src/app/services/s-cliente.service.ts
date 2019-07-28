import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders} from '@angular/common/http';
import {Cliente} from '../models/Cliente';

const API_URL = 'http://localhost:3000';
const httOptions = 
{
  headers : new HttpHeaders({'Content-Type':'application/json;charsert=utf-8'})
};

@Injectable({
  providedIn: 'root'
})
export class SClienteService {

  //não esquecer de tonar este objeto http privete para pode ser visivel localmente.
  constructor( private http : HttpClient) { }

  addCliente(cliente:Cliente)
  {
    return this.http.post(`${API_URL}/tb_clientes`,cliente,httOptions)
  }

  getCliente(id:number)
  {
    return this.http.get<Cliente>(`${API_URL}/tb_clientes?id=${id}`,httOptions)
  }

  UpdateCliente(id:number)
  {
    return this.http.put(`${API_URL}/tb_clientes?id=${id}`,httOptions);
  }

  deletrcliente(id:number)
  {
    return this.http.delete(`${API_URL}/tb_clientes?id=${id}`,httOptions)
  }
}

