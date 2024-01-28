
import Item from "../Component/Item/Item";
import dropdown_icon from "../Component/Assest/dropdown_icon.png";
import all_product from "../Component/Assest/all_product";
const ShopCategory = (props) => {
  return (
    <div className="container">
      <div className="shopCategory">
        <img className="banner" src={props.banner} alt="" />
        <div className="shopCategory-indexSort">
          <p>
            <span>showing 1-12</span> out of 36
          </p>
          <div />
          <div className="shopCategory-sort">
            sort by <img src={dropdown_icon} alt=""></img>
          </div>
        </div>

        <div className="shopCategory-product">
          {all_product.map((item, index) => {
            if (props.category === item.category) {
              return (
                <Item
                  key={index}
                  id={item.id}
                  name={item.name}
                  image={item.image}
                  old_price={item.old_price}
                  new_price={item.new_price}
                />
              );
            } else {
              return null;
            }
          })}
        </div>
        <div className="shopCategory-loadMore">Explore More</div>
      </div>
    </div>
  );
};

export default ShopCategory;
