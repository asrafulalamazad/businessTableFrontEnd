import store from "../redux/store/store";
import {HideLoader, ShowLoader} from "../redux/state-slice/setting-slice";
import axios from "axios";
import {ErrorToast} from "../helper/FormHelper";
import {setAllProduct, setTotal} from "../redux/state-slice/product-Slice";


const BaseURL="https://businesstable.onrender.com/api/v1/"

export async function  GetProductList(pageNo,perPage,searchKeyword) {
    let URL= BaseURL+"/"+"ProductList/"+pageNo+"/"+perPage+"/"+searchKeyword;

    store.dispatch(ShowLoader);

    try {
        const result= await axios.get(URL);
        store.dispatch(HideLoader);

        if(result.status===200 && result.data["status"]==="success"){
            if(result.data['data'][0]['Rows'].length>0){
                store.dispatch(setAllProduct(result.data['data']['0']['Rows']))
                store.dispatch(setTotal(result.data['data'][0]['Total'][0]['count']));
            }
            else {
                store.dispatch(setAllProduct());
                store.dispatch(setTotal());
                ErrorToast("No Data Found")
            }

        }
        else {
            ErrorToast("Something Wrong")

        }


    }

    catch (e) {
        ErrorToast("Something Wrong")
        store.dispatch(HideLoader);

    }






}