const Article = ({ data, id }) => {
  return (
    <div>
      {data.offers.map((tab, index) => {
        console.log(id);
        return (
          tab._id === id && (
            <div key={id} className="article-container">
              <div className="article-image">
                <img src={tab.product_image.secure_url} alt="" />
              </div>
              <div className="article-infos">
                <button>acheter</button>
              </div>
            </div>
          )
        );
      })}
    </div>
  );
};

export default Article;
