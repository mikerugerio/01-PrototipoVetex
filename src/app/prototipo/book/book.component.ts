import { Component} from '@angular/core';
import { HttpClient} from '@angular/common/http';

import { environment } from 'environments/environment';

interface BookResponse {
  id: number
  name: string
}

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent {

    books: BookResponse[];
    private urlServidor:string;

    constructor(private http: HttpClient) {
        this.urlServidor = environment.serverUrl + 'book';

        this.http.get<BookResponse[]>(this.urlServidor)
            .subscribe(response => {
              console.log(response);
              console.log(response.map(r=>r.name));
              this.books = response;
            });
    }

    createBook(input : HTMLInputElement){
        let libro : BookResponse = { name : input.value, id: null};
        input.value='';

        this.http.post<BookResponse>(this.urlServidor, libro)
            .subscribe(response => {
                libro = response;
                this.books.splice(0,0, libro);
            });
    }

    updateBook(book){
        book.name = book.name + " " + book.name;
        this.http.put(this.urlServidor +'/'+ book.id , book)
            .subscribe(respuesta => {
                console.log(respuesta);
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
