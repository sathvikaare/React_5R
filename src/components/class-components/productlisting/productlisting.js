import axios from "axios";
import { Component } from "react";
class ProductListing extends Component {
    state={
        productlisting:[],
        loading:false,
        error:null,
    };
    componentDidMount(){
        console.log("componentDidmount Invoked");
        this.fetchData();
    }
    // fetchData=()=>{
    //     this.setState({
    //         loading:true,
    //     });
    //     fetch("https://fakestoreapi.com/products")
    //     .then((response)=>response.json())
    //     .then((response)=>{
    //         this.setState({
    //             productlisting:response,
    //             loading:false,
    //         })

    //     })
    // }
    // fetchData=async ()=>{
    //     this.setState({
    //         loading:true,
    //     });
    //     try {
    //         const response1=await fetch("https://fakestoreapi.com/products");
    //         const finalresponse = await response1.json();
    //         this.setState({
    //             productlisting:finalresponse,
    //             loading:false,
    //         })
    //     }
    //     catch (err){
    //         console.error(err);
    //         this.setState({
    //             error:"server is busy"
    //         });
    //     }
    //     finally{
    //         this.setState({
    //             loading:false,
    //         });
    //     }
    // };
    fetchData=async ()=>{
        this.setState({
            loading:true,
        });
        try {
            const response1=await axios.get("https://fakestoreapi.com/products");
            console.log(response1,"response1");
            if(response1.status===200){
                this.setState({
                productlisting:response1.data,
                loading:false,
            })
        }
        }
        catch (err){
            console.error(err);
            this.setState({
                error:"server is busy"
            });
        }
        finally{
            this.setState({
                loading:false,
            });
        }
    };
    render() {
        console.log("render invoked");
        return(
            <>
            <h4>products listing page</h4>


            {this.state.loading?(
                <h3>please wait list loading</h3>):
                (
                    <div>
                        {this.state.productlisting.map((eachobject) => {
                            // eachobject.preventdefault()
                            return <h3>{eachobject.title}</h3>
                        })}
                    </div>
                )
                }
            </> 
        ) 
    };
}
export default ProductListing;