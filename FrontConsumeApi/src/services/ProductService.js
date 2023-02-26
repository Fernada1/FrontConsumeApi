import axios from "axios";

export class ProductService {

    baseUrl = "http://localhost:8080/api/productos/";
    //baseUrl = "https://hg-rest-api.herokuapp.com/api/products/";

    create(product){
        return axios.post(this.baseUrl+"crear/", product).then(res => res.data);
    }

    readAll(){
        return axios.get(this.baseUrl).then(res => res.data);
    }

    update(product){
        return axios.put(this.baseUrl+"producto/"+product._id, product).then(res => res.data);
    }

    delete(id){
        return axios.delete(this.baseUrl+"producto/"+id).then(res => res.data);
    }
}