import React from 'react';
import Navbar from '../navbar/navbar'
import { Chart } from 'react-google-charts';
import { connect } from "react-redux";
class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            barChartData: [["category", "stock."]],
            barChartData2: [["productName", "Stock"]],
            categories: [],
            products: [],
            productNames: []
        }
    }
    componentWillMount() {
        this.getAllProducts();
        this.getProductNames();

    }
    getAllProducts = () => {
        console.log(this.props.products)
        let categoryArr = [];
        console.log(this.state.products)
        this.props.products.map(data => {
            categoryArr.push(data.category)
        })
        console.log("cate:", categoryArr)

        let arr = categoryArr.filter((value, index, self) => self.indexOf(value) === index)

        arr.map(datamap => {
            let quantity = []
            quantity = this.props.products.filter(prod =>
                prod.category === datamap
            )
            console.log(quantity)
            let count = 0;
            quantity.map(data => {
                count = parseInt(data.quantity) + count;
                console.log(count)
            })
            this.state.barChartData.push([datamap, parseInt(count)]);
        })
        console.log(this.state.barChartData)
    }

    getProductNames = () => {
                this.setState({ productNames: this.props.products })
                let productnameArr = [];

                this.props.products.map(data => {
                    productnameArr.push(data.productName)
                })

                let pnarr = productnameArr.filter((value, index, self) => self.indexOf(value) === index)

                pnarr.map(datamap => {
                    let pnquantity = []
                    pnquantity = this.props.products.filter(prod =>
                        prod.productName === datamap
                    )
                    console.log(pnquantity)
                    let count = 0;
                    pnquantity.map(data => {
                        count = parseInt(data.quantity) + count;
                        console.log(count)
                    },0);
                    this.state.barChartData2.push([datamap, parseInt(count)]);
                })
            console.log(this.state.barChartData2)
    }

    render() {
        return (
            <div>
                <Navbar></Navbar>
                <h3 style={{ marginLeft: "5%" }}>Stock of products based on category</h3>
                <div style={{ display: 'flex', flexWrap: "wrap", maxWidth: 1500, margin: "8%" }}>

                    <Chart
                        chartType="Bar"
                        loader={<div>Loading Chart</div>}
                        data={this.state.barChartData}
                        width="600px"
                        height="400px"
                        legendToggle
                    />   
                    <Chart
                        chartType="PieChart"
                        loader={<div>Loading Chart</div>}
                        data={this.state.barChartData2}
                        options={{
                            title: 'Stock of all products'
                        }}
                        width="500px"
                        height="300px"
                        legendToggle
                    />
                </div>
            </div>


        );
    }
}

function convertStoreToProps(store) {
    console.log('Received complete store....in dashboard container');
    console.log(store);
    console.log(store.allproducts)
    return {
        products: store.allproducts
    }
}

export default connect(convertStoreToProps)(Dashboard);