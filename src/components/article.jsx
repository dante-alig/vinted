const Article = ({ data, id }) => {
  return (
    <div>
      {data.offers.map((tab) => {
        return (
          tab._id === id && (
            <div key={id} className="article-container">
              <div className="article-image">
                <img src={tab.product_image.secure_url} alt="" />
              </div>
              <div className="article-infos">
                <h3>{tab.product_price}€</h3>
                <div className="article-list">
                  <li>
                    <span>MARQUE</span>
                    <span>{tab.product_details[0].MARQUE}</span>
                  </li>
                  <li>
                    <span>TAILLE</span>
                    <span>{tab.product_details[1].TAILLE}</span>
                  </li>
                  <li>
                    <span>ETAT</span>
                    <span>{tab.product_details[2].ÉTAT}</span>
                  </li>
                  <li>
                    <span>COULEUR</span>
                    <span>{tab.product_details[3].COULEUR}</span>
                  </li>
                  <li>
                    <span>EMPLACEMENT</span>
                    <span>{tab.product_details[4].EMPLACEMENT}</span>
                  </li>
                </div>
                <div className="article-user">
                  <p>{tab.product_name}</p>
                  <p>{tab.product_description}</p>

                  {tab.owner?.account?.avatar?.secure_url && (
                    <div className="article-avatar">
                      <img
                        src={tab.owner.account.avatar.secure_url}
                        alt="avatar"
                      />
                      <span>{tab.owner.account.username}</span>
                    </div>
                  )}
                </div>
                <div className="article-button">
                  <button>acheter</button>
                </div>
              </div>
            </div>
          )
        );
      })}
    </div>
  );
};

export default Article;
