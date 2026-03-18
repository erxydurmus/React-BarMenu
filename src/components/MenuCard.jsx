const MenuCard = ({ name, price, image, category }) => {
  return (
    <div className="menu-card">
      {image && <img src={image} alt={name} className="menu-image" />}
      <div className="menu-info">
        <h3>{name}</h3>
        <span className="price">{price} TL</span>
      </div>
      {/* İstersen buraya kategori ismini de küçük bir etiket olarak ekleyebilirsin */}
      <small className="category-tag">{category}</small>
    </div>
  )
}

export default MenuCard