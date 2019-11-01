import { Injectable } from '@angular/core';
import { Http, Response} from '@angular/http';
import { ThrowStmt } from '@angular/compiler';
import 'rxjs/add/operator/map';

@Injectable()
export class ProductService {
  private _albumUrl : string;
  constructor(private _http : Http) { 
    this._albumUrl = "../assets/album.json";
  }

  getAlbum(id:number){  
    return this._http.get(this._albumUrl).map((response)=>{
      response.json();
    });
  }

}

