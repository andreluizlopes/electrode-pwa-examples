import React, {PropTypes} from "react";
import Breadcrumb from "./breadcrumb";
import ProductGallery from "./product-gallery";
import ProductMore from "./product-more";
import ProductOrder from "./product-order";
import styles from "../styles/product.css";

export default class Product extends React.Component {
  render() {
    const {product} = this.props;

    return (
      <div className={styles.product}>
        <div className={styles.productWrapper}>
          <Breadcrumb links={product.breadcrumb} />
          <ProductGallery product={product} />
          <ProductOrder product={product} />
          <ProductMore product={product} title="More From the Collection" />
        </div>
      </div>
    );
  }
}

Product.propTypes = {
  product: PropTypes.object
};

Product.defaultProps = {
  product: {}
};
