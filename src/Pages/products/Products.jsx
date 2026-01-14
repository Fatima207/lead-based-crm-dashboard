import "./products.scss";
import Sidebar from "../../Component/sidebar/Sidebar";
import Navbar from "../../Component/navbar/Navbar";
import { Box, Card, CardContent, Typography, Rating } from "@mui/material";

const products = [
  {
    id: 1,
    name: "Red T-shirt",
    price: 450,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab",
    rating: 4,
  },
  {
    id: 2,
    name: "Blue T-shirt",
    price: 350,
    image: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c",
    rating: 5,
  },
  {
    id: 3,
    name: "Black Hoodie",
    price: 799,
    image: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990",
    rating: 4,
  },
  {
    id: 4,
    name: "Green T-shirt",
    price: 299,
    image: "https://images.unsplash.com/photo-1520975916090-3105956dac38",
    rating: 3,
  },
  {
    id: 5,
    name: "Denim",
    price: 1000,
    image:
      "https://i5.walmartimages.com/seo/FAVIPT-Women-s-Winter-Detachable-Hoodie-Sherpa-Fur-Fleece-Lined-Denim-Jean-Trucker-Jacket-Coat-Jackets-Women-Sherpa-Lined-Longs-Sleeve-Plush-Denim-Ou_fb9c048e-1c52-4eb9-8949-803bad624bfa.b2dd631c496f02ed2535f2b863dedeca.jpeg",
    rating: 3,
  },
  {
    id: 6,
    name: "Womens Kurti",
    price: 500,
    image:
      "https://i5.walmartimages.com/seo/Spring-Women-s-Shirt-Dresses-Long-Beautiful-Shirts-Long-Sleeve-Blouses_c67527ea-0e70-4ec1-9e47-661686edc0ac.c3751139c3ccf65d0675894abb6000ef.jpeg",
    rating: 4,
  },
  {
    id: 7,
    name: "Black T-shirt",
    price: 1500,
    image:
      "https://i.pinimg.com/originals/55/4c/67/554c67a4e50ab682c52b9bec0d23f11a.jpg",
    rating: 5,
  },
  {
    id: 8,
    name: "Blue Hoodie",
    price: 2999,
    image:
      "https://cdna.lystit.com/photos/amazon/4de8458f/adidas-originals-Collegiate-Navy-Trefoil-Full-zip-Fleece-Hoodie.jpeg",
    rating: 3,
  },
];

const Products = () => {
  return (
    <div className="products">
      <Sidebar />
      <div className="productsContainer">
        <Navbar />

        <Box p={3}>
          <Typography variant="h5" fontWeight={600} mb={3}>
            Products
          </Typography>

          <div className="productGrid">
            {products.map((item) => (
              <Card key={item.id} className="productCard">
                <img src={item.image} alt={item.name} />
                <CardContent>
                  <Typography fontWeight={600}>{item.name}</Typography>
                  <Rating value={item.rating} readOnly size="small" />
                  <Typography color="primary" fontWeight={600}>
                    ₹ {item.price}
                  </Typography>
                </CardContent>
              </Card>
            ))}
          </div>
        </Box>
      </div>
    </div>
  );
};

export default Products;
