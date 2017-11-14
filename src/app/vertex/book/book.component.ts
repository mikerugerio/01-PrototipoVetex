import { Http} from '@angular/http';
import { Component} from '@angular/core';

import { environment } from 'environments/environment';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent {

    books: any[];
    private urlServidor:string;


    constructor(private http: Http) {

        this.urlServidor = environment.serverUrl + 'book';
        http.get(this.urlServidor)
            .subscribe(response => {
                this.books = response.json();
            });

    }

    createBook(input : HTMLInputElement){
        let book = { name : input.value};
        input.value='';

        this.http.post(this.urlServidor, book)
            .subscribe(response => {
                book['id'] = response.json().id;
                this.books.splice(0,0, book);
            });
    }

    updateBook(book){
        book.name = book.name + " " + book.name;
        this.http.put(this.urlServidor +'/'+ book.id , book)
            .subscribe(respuesta => {
                console.log(respuesta.json());
            })
    }

    deleteBook(book){
        this.http.delete(this.urlServidor +'/'+ book.id)
            .subscribe(respuesta => {
                let index = this.books.indexOf(book);
                this.books.splice(index,1);
            })
    }

}
