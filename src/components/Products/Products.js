import React from "react";
import { ProductSectionData } from "../../data/ProductSectionData";

import {
  ProdWrapper,
  Product,
  ProductPicCont,
  ProductPic,
  ProductContent,
  ProductTitle,
  ProductButton,
  ArrowProd,
  BtnCont,
} from "./Products.elements";
import { Cont, SectionHeading } from "../GlobalStyles";
import { CtaButton } from "../InfoSection/InfoSection.elements";

const Products = () => {
  return (
    <Cont>
      <SectionHeading>View Our Newest Houses</SectionHeading>
      <ProdWrapper>
        {ProductSectionData.map((item) => (
          <Product
            to={item.path}
            key={item.index}
            data-aos="fade-up"
            data-aos-duration="500"
          >
            <ProductPicCont>
              <ProductPic src={item.src} alt={item.title} />
            </ProductPicCont>

            <ProductContent>
              <ProductTitle>{item.title}</ProductTitle>
              <ProductButton>
                {item.label}
                <ArrowProd />
              </ProductButton>
            </ProductContent>
          </Product>
        ))}
      </ProdWrapper>

      <BtnCont>
        <CtaButton>View More Houses</CtaButton>
      </BtnCont>
    </Cont>
  );
};

export default Products;
