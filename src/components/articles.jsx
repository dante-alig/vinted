const Articles = ({ tab }) => {
  console.log(tab.owner);
  return (
    <div className="articles">
      <div className="articles-avatar">
        {tab.owner?.account?.avatar?.secure_url && (
          <div>
            <img src={tab.owner.account.avatar.secure_url} alt="avatar" />
          </div>
        )}
        <div className="articles-pseudo">{tab.owner.account.username}</div>
      </div>
      <img src={tab.product_image.secure_url} alt="" />
      <p>{tab.product_price}€</p>
      <p>{tab.product_details[1].TAILLE}</p>
      <p>{tab.product_details[0].MARQUE}</p>
    </div>
  );
};

export default Articles;
