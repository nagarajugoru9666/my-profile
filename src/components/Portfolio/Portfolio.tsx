import React, { useState } from "react";
import { Box, Container, ImageList, ImageListItem } from "@mui/material";
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";

// Define the type for an item
interface Item {
  img: string;
  title: string;
  category: string;
}

const itemData: Item[] = [
  {
    img: "https://images.unsplash.com/photo-1549388604-817d15aa0110",
    title: "Bed",
    category: "photography",
  },
  {
    img: "https://images.unsplash.com/photo-1525097487452-6278ff080c31",
    title: "Books",
    category: "marketing",
  },
  {
    img: "https://images.unsplash.com/photo-1523413651479-597eb2da0ad6",
    title: "Sink",
    category: "marketing",
  },
  {
    img: "https://images.unsplash.com/photo-1563298723-dcfebaa392e3",
    title: "Kitchen",
    category: "design",
  },
  {
    img: "https://images.unsplash.com/photo-1588436706487-9d55d73a39e3",
    title: "Blinds",
    category: "marketing",
  },
  {
    img: "https://images.unsplash.com/photo-1574180045827-681f8a1a9622",
    title: "Chairs",
    category: "design",
  },
  {
    img: "https://images.unsplash.com/photo-1530731141654-5993c3016c77",
    title: "Laptop",
    category: "photography",
  },
  {
    img: "https://images.unsplash.com/photo-1481277542470-605612bd2d61",
    title: "Doors",
    category: "photography",
  },
  {
    img: "https://images.unsplash.com/photo-1517487881594-2787fef5ebf7",
    title: "Coffee",
    category: "photography",
  },
  {
    img: "https://images.unsplash.com/photo-1516455207990-7a41ce80f7ee",
    title: "Storage",
    category: "design",
  },
  {
    img: "https://images.unsplash.com/photo-1597262975002-c5c3b14bbd62",
    title: "Candle",
    category: "photography",
  },
  {
    img: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4",
    title: "Coffee table",
    category: "design",
  },
];

const Portfolio: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
  };

  const filteredItems = selectedCategory === "All"
    ? itemData
    : itemData.filter((item) => {
        const match = item.category.toLowerCase() === selectedCategory.toLowerCase();
        return match;
      });

  return (
    <Box>
      <Container>
        <Box sx={{ display: 'flex', justifyContent: 'center', marginBottom: '30px' }}>
          <ButtonGroup variant="outlined" aria-label="button group">
            <Button
              variant={selectedCategory === "All" ? "contained" : "outlined"}
              onClick={() => handleCategoryChange("All")}
            >
              All
            </Button>
            <Button
              variant={selectedCategory === "photography" ? "contained" : "outlined"}
              onClick={() => handleCategoryChange("photography")}
            >
              Photography
            </Button>
            <Button
              variant={selectedCategory === "marketing" ? "contained" : "outlined"}
              onClick={() => handleCategoryChange("marketing")}
            >
              Marketing
            </Button>
            <Button
              variant={selectedCategory === "design" ? "contained" : "outlined"}
              onClick={() => handleCategoryChange("design")}
            >
              Design
            </Button>
          </ButtonGroup>
        </Box>
        <ImageList variant="masonry" cols={3} gap={8}>
          {filteredItems.map((item) => (
            <ImageListItem key={item.img}>
              <img
                srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                src={`${item.img}?w=248&fit=crop&auto=format`}
                alt={item.title}
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Container>
    </Box>
  );
};

export default Portfolio;
