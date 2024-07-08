const Articles = ({ tab }) => {
  console.log(tab);
  return (
    <div className="articles">
      <img src={tab.product_image.secure_url} alt="" />
      <p>{tab.product_price}€</p>
    </div>
  );
};

export default Articles;
